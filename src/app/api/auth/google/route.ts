import { NextRequest, NextResponse } from "next/server";
import { setSessionCookie } from "@/lib/auth/server-session";
import { UserProfile } from "@/types/user";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, displayName, photoURL, uid: clientUid } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, error: "Data akun Google tidak valid." }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const uid = clientUid || `google_${cleanEmail.replace(/[^a-z0-9]/g, "_")}`;
    const now = new Date().toISOString();

    const user: UserProfile = {
      uid,
      email: cleanEmail,
      displayName: displayName || cleanEmail.split("@")[0],
      photoURL: photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${uid}`,
      role: "student",
      xp: 150,
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
      message: "Berhasil masuk dengan Google!",
      user,
    });

    setSessionCookie(response, user);

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Gagal autentikasi Google di server." },
      { status: 500 }
    );
  }
}
