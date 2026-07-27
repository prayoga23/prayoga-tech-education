export interface LessonProgress {
  userId: string;
  courseSlug: string;
  lessonSlug: string;
  completed: boolean;
  codeSubmitted?: string;
  xpEarned: number;
  completedAt: string;
}

export interface UserCourseProgress {
  userId: string;
  courseSlug: string;
  completedLessonSlugs: string[];
  totalLessons: number;
  percent: number;
  lastAccessedAt: string;
}
