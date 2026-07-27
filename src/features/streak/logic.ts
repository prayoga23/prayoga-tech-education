export function calculateStreak(lastActiveIso: string, currentStreak: number): { newStreak: number; activeToday: boolean } {
  const lastActive = new Date(lastActiveIso);
  const now = new Date();
  
  const isSameDay =
    lastActive.getDate() === now.getDate() &&
    lastActive.getMonth() === now.getMonth() &&
    lastActive.getFullYear() === now.getFullYear();

  if (isSameDay) {
    return { newStreak: currentStreak, activeToday: true };
  }

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const isYesterday =
    lastActive.getDate() === yesterday.getDate() &&
    lastActive.getMonth() === yesterday.getMonth() &&
    lastActive.getFullYear() === yesterday.getFullYear();

  if (isYesterday) {
    return { newStreak: currentStreak + 1, activeToday: true };
  }

  return { newStreak: 1, activeToday: true };
}
