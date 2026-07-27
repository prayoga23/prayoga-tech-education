import { getLocalSession, setLocalSession } from "@/lib/auth/session";
import { calculateStreak } from "./logic";

export async function checkAndUpdateStreak() {
  const user = getLocalSession();
  if (!user) return null;

  const { newStreak, activeToday } = calculateStreak(user.lastActiveDate, user.streak);
  user.streak = newStreak;
  user.lastActiveDate = new Date().toISOString();
  setLocalSession(user);

  return { streak: newStreak, activeToday };
}
