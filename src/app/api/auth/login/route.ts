import { NextRequest, NextResponse } from "next/server";
import { setSessionCookie } from "@/lib/auth/server-session";
import { UserProfile } from "@/types/user";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // Server-side validations
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ success: false, error: "Masukkan alamat email yang valid." }, { status: 400 });
    }

    if (!password || typeof password !== "string" || password.length === 0) {
      return NextResponse.json({ success: false, error: "Password wajib diisi." }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const uid = `user_${cleanEmail.replace(/[^a-z0-9]/g, "_")}`;
    const displayName = cleanEmail.split("@")[0].replace(/[^a-zA-Z0-9]/g, " ") || "Learner";
    const now = new Date().toISOString();

    const user: UserProfile = {
      uid,
      email: cleanEmail,
      displayName: displayName.charAt(0).toUpperCase() + displayName.slice(1),
      photoURL: `https://api.dicebear.com/7.x/bottts/svg?seed=${uid}`,
      role: "student",
      xp: 250,
      level: 2,
      streak: 3,
      lastActiveDate: now,
      completedLessons: ["js-intro", "js-variables"],
      enrolledCourses: ["javascript-basics"],
      createdAt: now,
      updatedAt: now,
    };

    const response = NextResponse.json({
      success: true,
      message: "Berhasil masuk ke akun!",
      user,
    });

    // Set HTTP-only session cookie on the backend
    setSessionCookie(response, user);

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Gagal masuk di server." },
      { status: 500 }
    );
  }
}
