import { NextResponse } from "next/server";
import { evaluateLessonCode } from "@/features/lessons/runner";
import { SEED_LESSONS } from "../../../../firebase/seed/data";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { courseSlug, lessonSlug, code } = body;

    const lesson = SEED_LESSONS.find(
      (l) => l.courseSlug === courseSlug && l.slug === lessonSlug
    );

    if (!lesson) {
      return NextResponse.json(
        { success: false, error: "Materi tidak ditemukan" },
        { status: 404 }
      );
    }

    const evaluation = await evaluateLessonCode(lesson, code);
    return NextResponse.json({ success: true, result: evaluation });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || "Server Error" },
      { status: 500 }
    );
  }
}
