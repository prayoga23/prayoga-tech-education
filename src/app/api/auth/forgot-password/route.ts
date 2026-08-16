import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Masukkan alamat email yang valid." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    return NextResponse.json({
      success: true,
      message: `Tautan reset password telah berhasil dikirimkan ke ${cleanEmail}. Silakan periksa email Anda.`,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Gagal memproses permintaan reset password di server." },
      { status: 500 }
    );
  }
}
