import { getLocalSession } from "@/lib/auth/session";

export async function getUserProgress() {
  const user = getLocalSession();
  return {
    completedLessons: user?.completedLessons || [],
    xp: user?.xp || 0,
    level: user?.level || 1,
  };
}
