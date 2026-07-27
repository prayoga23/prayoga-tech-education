import { NextResponse } from "next/server";
import { saveUserProgress } from "@/features/progress/actions";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { lessonSlug, xpEarned } = body;

    const result = await saveUserProgress(lessonSlug, xpEarned);
    return NextResponse.json({ success: true, data: result });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err?.message }, { status: 500 });
  }
}
