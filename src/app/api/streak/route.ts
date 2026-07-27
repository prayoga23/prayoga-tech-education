import { NextResponse } from "next/server";
import { checkAndUpdateStreak } from "@/features/streak/actions";

export async function GET() {
  try {
    const result = await checkAndUpdateStreak();
    return NextResponse.json({ success: true, streak: result });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err?.message }, { status: 500 });
  }
}
