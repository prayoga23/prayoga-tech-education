import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { UserProfile } from "@/types/user";

const SESSION_COOKIE_NAME = "prayoga_session";
const SECRET_KEY = process.env.SESSION_SECRET || process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "prayoga-tech-secret-key-2026";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days in seconds

// ─── Base64URL Encoding/Decoding for Edge & Node ──────────────────
function base64UrlEncode(str: string): string {
  const base64 = typeof btoa !== "undefined"
    ? btoa(unescape(encodeURIComponent(str)))
    : Buffer.from(str, "utf-8").toString("base64");
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(str: string): string {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) {
    base64 += "=";
  }
  return typeof atob !== "undefined"
    ? decodeURIComponent(escape(atob(base64)))
    : Buffer.from(base64, "base64").toString("utf-8");
}

// Simple deterministic signature for Edge Runtime compatibility
function generateSignature(data: string): string {
  let hash = 0;
  const combined = data + SECRET_KEY;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

// ─── Token Sign & Verify ──────────────────────────────────────────
export function createSessionToken(user: UserProfile): string {
  const payload = JSON.stringify({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    role: user.role,
    xp: user.xp,
    level: user.level,
    streak: user.streak,
    photoURL: user.photoURL,
    exp: Date.now() + MAX_AGE * 1000,
  });

  const base64Payload = base64UrlEncode(payload);
  const signature = generateSignature(base64Payload);

  return `${base64Payload}.${signature}`;
}

export function verifySessionToken(token: string): Partial<UserProfile> | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 2) return null;

    const [base64Payload, signature] = parts;
    const expectedSignature = generateSignature(base64Payload);

    if (signature !== expectedSignature) return null;

    const jsonStr = base64UrlDecode(base64Payload);
    const payload = JSON.parse(jsonStr);

    if (payload.exp && Date.now() > payload.exp) {
      return null; // Expired
    }

    return {
      uid: payload.uid,
      email: payload.email,
      displayName: payload.displayName,
      role: payload.role || "student",
      xp: payload.xp || 100,
      level: payload.level || 1,
      streak: payload.streak || 1,
      photoURL: payload.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${payload.uid}`,
    };
  } catch {
    return null;
  }
}

// ─── Cookie Helpers for API Routes & Server Actions ───────────────
export async function getSessionUser(): Promise<Partial<UserProfile> | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export function setSessionCookie(response: NextResponse, user: UserProfile): NextResponse {
  const token = createSessionToken(user);
  response.cookies.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
  return response;
}

export function clearSessionCookie(response: NextResponse): NextResponse {
  response.cookies.set(SESSION_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return response;
}

export { SESSION_COOKIE_NAME };
