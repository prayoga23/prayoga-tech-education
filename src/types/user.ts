export type UserRole = "student" | "admin" | "mentor";

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: UserRole;
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string; // ISO date string
  completedLessons: string[]; // array of lesson ids or slugs
  enrolledCourses: string[]; // array of course ids
  createdAt: string;
  updatedAt: string;
}

export interface UserStats {
  totalXp: number;
  currentStreak: number;
  longestStreak: number;
  completedLessonsCount: number;
  completedCoursesCount: number;
  level: number;
  nextLevelXp: number;
}
