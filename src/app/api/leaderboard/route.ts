import { NextResponse } from "next/server";
import { SEED_LEADERBOARD } from "../../../../firebase/seed/data";

export async function GET() {
  return NextResponse.json({ success: true, leaderboard: SEED_LEADERBOARD });
}
