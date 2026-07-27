import { getLocalSession } from "./session";

export function isAuthenticated(): boolean {
  const session = getLocalSession();
  return !!session;
}

export function requireAuthOrRedirect(): boolean {
  if (!isAuthenticated()) {
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
    return false;
  }
  return true;
}
