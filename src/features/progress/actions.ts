import { getLocalSession, setLocalSession } from "@/lib/auth/session";

export async function saveUserProgress(lessonSlug: string, xpEarned: number) {
  const user = getLocalSession();
  if (!user) return null;

  const completed = new Set(user.completedLessons);
  const isNewCompletion = !completed.has(lessonSlug);

  if (isNewCompletion) {
    completed.add(lessonSlug);
    user.completedLessons = Array.from(completed);
    user.xp += xpEarned;
    user.level = Math.floor(user.xp / 100) + 1;
    setLocalSession(user);
  }

  return {
    xp: user.xp,
    level: user.level,
    completedLessons: user.completedLessons,
    newCompletion: isNewCompletion,
  };
}
