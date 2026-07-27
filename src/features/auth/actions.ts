import { setLocalSession, clearLocalSession, MOCK_USER } from "@/lib/auth/session";
import { UserProfile } from "@/types/user";

export async function loginWithEmail(email: string, pass: string): Promise<{ success: boolean; user?: UserProfile; error?: string }> {
  try {
    const user: UserProfile = {
      ...MOCK_USER,
      email,
      displayName: email.split("@")[0] || "User",
    };
    setLocalSession(user);
    return { success: true, user };
  } catch (err: any) {
    return { success: false, error: err?.message || "Gagal masuk" };
  }
}

export async function registerWithEmail(name: string, email: string, pass: string): Promise<{ success: boolean; user?: UserProfile; error?: string }> {
  try {
    const user: UserProfile = {
      ...MOCK_USER,
      displayName: name,
      email,
      xp: 100,
      streak: 1,
    };
    setLocalSession(user);
    return { success: true, user };
  } catch (err: any) {
    return { success: false, error: err?.message || "Gagal mendaftar" };
  }
}

export async function logoutUser(): Promise<void> {
  clearLocalSession();
  if (typeof window !== "undefined") {
    window.location.href = "/login";
  }
}
