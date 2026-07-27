import { SEED_LEADERBOARD } from "../../../firebase/seed/data";
import { LeaderboardEntry } from "@/types/api";

export async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  return SEED_LEADERBOARD;
}
