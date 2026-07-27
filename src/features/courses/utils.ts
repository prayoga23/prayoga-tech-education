export function calculateCourseProgress(completedLessons: number, totalLessons: number): number {
  if (!totalLessons || totalLessons === 0) return 0;
  return Math.min(100, Math.round((completedLessons / totalLessons) * 100));
}
