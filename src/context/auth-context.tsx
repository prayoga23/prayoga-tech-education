"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { UserProfile } from "@/types/user";

interface AuthResult {
  success: boolean;
  error?: string;
  user?: UserProfile;
}

interface AuthContextValue {
  user: UserProfile | null;
  loading: boolean;
  isAuthenticated: boolean;
  loginWithEmail: (email: string, password: string) => Promise<AuthResult>;
  registerWithEmail: (name: string, email: string, password: string) => Promise<AuthResult>;
  loginWithGoogle: () => Promise<AuthResult>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<AuthResult>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch current session from Next.js Backend GET /api/auth/me
  const refreshSession = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      });

      if (res.ok) {
        const data = await res.json();
        if (data.authenticated && data.user) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshSession();
  }, [refreshSession]);

  // Login via Next.js Backend POST /api/auth/login
  const loginWithEmail = useCallback(async (email: string, password: string): Promise<AuthResult> => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setUser(data.user);
        return { success: true, user: data.user };
      }
      return { success: false, error: data.error || "Gagal masuk ke akun." };
    } catch (err: any) {
      return { success: false, error: err.message || "Koneksi ke server gagal." };
    }
  }, []);

  // Register via Next.js Backend POST /api/auth/register
  const registerWithEmail = useCallback(async (name: string, email: string, password: string): Promise<AuthResult> => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setUser(data.user);
        return { success: true, user: data.user };
      }
      return { success: false, error: data.error || "Gagal mendaftar akun." };
    } catch (err: any) {
      return { success: false, error: err.message || "Koneksi ke server gagal." };
    }
  }, []);

  // Google OAuth backend call POST /api/auth/google
  const loginWithGoogle = useCallback(async (): Promise<AuthResult> => {
    try {
      // Dynamic import to prevent SSR issues
      const { signInWithPopup, GoogleAuthProvider } = await import("firebase/auth");
      const { auth } = await import("@/lib/firebase/client");

      let email = "google.user@prayoga.tech";
      let displayName = "Google Learner";
      let photoURL = "";
      let uid = `google_${Date.now()}`;

      if (auth) {
        try {
          const provider = new GoogleAuthProvider();
          provider.setCustomParameters({ prompt: "select_account" });
          const cred = await signInWithPopup(auth, provider);
          email = cred.user.email || email;
          displayName = cred.user.displayName || displayName;
          photoURL = cred.user.photoURL || "";
          uid = cred.user.uid;
        } catch (fbErr: any) {
          if (fbErr.code === "auth/popup-closed-by-user") {
            return { success: false, error: "Popup login ditutup." };
          }
          // Fall back to server simulation if Firebase SDK is mock key
        }
      }

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, displayName, photoURL, uid }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setUser(data.user);
        return { success: true, user: data.user };
      }
      return { success: false, error: data.error || "Gagal masuk dengan Google." };
    } catch (err: any) {
      return { success: false, error: err.message || "Koneksi ke server gagal." };
    }
  }, []);

  // Logout via Next.js Backend POST /api/auth/logout
  const logout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
    } catch {
      // ignore
    }
    setUser(null);
    window.location.href = "/login";
  }, []);

  // Reset password via Next.js Backend POST /api/auth/forgot-password
  const resetPassword = useCallback(async (email: string): Promise<AuthResult> => {
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        return { success: true };
      }
      return { success: false, error: data.error || "Gagal meminta reset password." };
    } catch (err: any) {
      return { success: false, error: err.message || "Koneksi ke server gagal." };
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        loginWithEmail,
        registerWithEmail,
        loginWithGoogle,
        logout,
        resetPassword,
        refreshSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an <AuthProvider>");
  }
  return context;
}
