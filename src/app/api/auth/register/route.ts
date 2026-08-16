import { NextRequest, NextResponse } from "next/server";
import { setSessionCookie } from "@/lib/auth/server-session";
import { UserProfile } from "@/types/user";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    // Server-side validations
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ success: false, error: "Nama lengkap wajib diisi." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ success: false, error: "Alamat email tidak valid." }, { status: 400 });
    }

    if (!password || typeof password !== "string" || password.length < 6) {
      return NextResponse.json({ success: false, error: "Password minimal 6 karakter." }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const uid = `user_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const now = new Date().toISOString();

    const newUser: UserProfile = {
      uid,
      email: cleanEmail,
      displayName: name.trim(),
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

    const response = NextResponse.json({
      success: true,
      message: "Registrasi berhasil!",
      user: newUser,
    });

    // Set HTTP-only session cookie on the backend
    setSessionCookie(response, newUser);

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Gagal memproses pendaftaran di server." },
      { status: 500 }
    );
  }
}
