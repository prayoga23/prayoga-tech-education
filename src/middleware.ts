import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/auth/server-session";

const PROTECTED_ROUTES = ["/dashboard", "/learning"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProtectedRoute = PROTECTED_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isProtectedRoute) {
    const sessionToken = req.cookies.get(SESSION_COOKIE_NAME)?.value;
    const sessionUser = sessionToken ? verifySessionToken(sessionToken) : null;

    if (!sessionUser) {
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // If user is already authenticated and visits login/register, redirect to dashboard
  const isAuthRoute = pathname === "/login" || pathname === "/register";
  if (isAuthRoute) {
    const sessionToken = req.cookies.get(SESSION_COOKIE_NAME)?.value;
    const sessionUser = sessionToken ? verifySessionToken(sessionToken) : null;

    if (sessionUser) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/learning/:path*", "/login", "/register"],
};
