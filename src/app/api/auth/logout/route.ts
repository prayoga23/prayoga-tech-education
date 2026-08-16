import { NextResponse } from "next/server";
import { clearSessionCookie } from "@/lib/auth/server-session";

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: "Berhasil keluar dari akun.",
  });

  // Clear HTTP-only session cookie on server response
  clearSessionCookie(response);

  return response;
}
