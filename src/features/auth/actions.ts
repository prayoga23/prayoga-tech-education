/**
 * Auth actions — thin wrappers around Firebase Auth for use outside React components.
 * Inside React components, prefer `useAuth()` from `@/context/auth-context`.
 */

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase/client";
import { COLLECTIONS } from "@/lib/firebase/collections";
import { UserProfile } from "@/types/user";

// ─── Result type ──────────────────────────────────────────────────
export interface AuthActionResult {
  success: boolean;
  user?: UserProfile;
  error?: string;
}

// ─── Build default profile ────────────────────────────────────────
function buildDefaultProfile(uid: string, email: string, displayName: string): UserProfile {
  const now = new Date().toISOString();
  return {
    uid,
    email,
    displayName,
    photoURL: `https://api.dicebear.com/7.x/bottts/svg?seed=${uid}`,
    role: "student",
    xp: 100,
    level: 1,
    streak: 1,
    lastActiveDate: now,
    completedLessons: [],
    enrolledCourses: [],
    createdAt: now,
    updatedAt: now,
  };
}

// ─── Login ────────────────────────────────────────────────────────
export async function loginWithEmail(email: string, password: string): Promise<AuthActionResult> {
  try {
    if (!auth) throw new Error("Firebase Auth belum diinisialisasi.");
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const profile = buildDefaultProfile(
      cred.user.uid,
      cred.user.email || email,
      cred.user.displayName || email.split("@")[0],
    );

    // Attempt to read existing Firestore profile
    try {
      if (db) {
        const snap = await getDoc(doc(db, COLLECTIONS.USERS, cred.user.uid));
        if (snap.exists()) {
          return { success: true, user: snap.data() as UserProfile };
        }
      }
    } catch { /* fallback */ }

    return { success: true, user: profile };
  } catch (err: any) {
    return { success: false, error: mapFirebaseError(err.code) };
  }
}

// ─── Register ─────────────────────────────────────────────────────
export async function registerWithEmail(name: string, email: string, password: string): Promise<AuthActionResult> {
  try {
    if (!auth) throw new Error("Firebase Auth belum diinisialisasi.");
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name });

    const profile = buildDefaultProfile(cred.user.uid, email, name);

    try {
      if (db) {
        await setDoc(doc(db, COLLECTIONS.USERS, cred.user.uid), profile);
      }
    } catch { /* Firestore write optional */ }

    return { success: true, user: profile };
  } catch (err: any) {
    return { success: false, error: mapFirebaseError(err.code) };
  }
}

// ─── Google Sign-In ───────────────────────────────────────────────
export async function loginWithGoogle(): Promise<AuthActionResult> {
  try {
    if (!auth) throw new Error("Firebase Auth belum diinisialisasi.");
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    const cred = await signInWithPopup(auth, provider);

    const profile = buildDefaultProfile(
      cred.user.uid,
      cred.user.email || "",
      cred.user.displayName || "Learner",
    );

    // Attempt Firestore sync
    try {
      if (db) {
        const ref = doc(db, COLLECTIONS.USERS, cred.user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          return { success: true, user: snap.data() as UserProfile };
        }
        await setDoc(ref, profile);
      }
    } catch { /* fallback */ }

    return { success: true, user: profile };
  } catch (err: any) {
    if (err.code === "auth/popup-closed-by-user") {
      return { success: false, error: "Popup login ditutup. Silakan coba lagi." };
    }
    return { success: false, error: mapFirebaseError(err.code) };
  }
}

// ─── Logout ───────────────────────────────────────────────────────
export async function logoutUser(): Promise<void> {
  try {
    if (auth) await signOut(auth);
  } catch { /* ignore */ }
}

// ─── Password Reset ───────────────────────────────────────────────
export async function resetPasswordByEmail(email: string): Promise<AuthActionResult> {
  try {
    if (!auth) throw new Error("Firebase Auth belum diinisialisasi.");
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (err: any) {
    return { success: false, error: mapFirebaseError(err.code) };
  }
}

// ─── Error Mapping ────────────────────────────────────────────────
function mapFirebaseError(code: string): string {
  const map: Record<string, string> = {
    "auth/user-not-found": "Akun dengan email ini tidak ditemukan.",
    "auth/wrong-password": "Password salah. Silakan coba lagi.",
    "auth/invalid-credential": "Email atau password salah.",
    "auth/email-already-in-use": "Email sudah terdaftar. Silakan masuk.",
    "auth/weak-password": "Password terlalu lemah. Minimal 6 karakter.",
    "auth/invalid-email": "Format email tidak valid.",
    "auth/too-many-requests": "Terlalu banyak percobaan. Coba lagi nanti.",
    "auth/network-request-failed": "Koneksi jaringan bermasalah.",
    "auth/popup-blocked": "Popup diblokir oleh browser. Izinkan popup.",
    "auth/operation-not-allowed": "Metode login ini belum diaktifkan di Firebase Console.",
  };
  return map[code] || `Terjadi kesalahan (${code}). Silakan coba lagi.`;
}
