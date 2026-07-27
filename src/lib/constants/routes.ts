export const ROUTES = {
  HOME: "/",
  CATALOG: "/catalog",
  PRICING: "/pricing",
  ABOUT: "/about",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  DASHBOARD: "/dashboard",
  COURSES: "/dashboard/courses",
  PROGRESS: "/dashboard/progress",
  STREAK: "/dashboard/streak",
  LEADERBOARD: "/dashboard/leaderboard",
  SETTINGS: "/dashboard/settings",
  LEARN: (courseSlug: string, lessonSlug?: string) =>
    lessonSlug ? `/learn/${courseSlug}/${lessonSlug}` : `/learn/${courseSlug}`,
  LEARN_RESULT: (courseSlug: string, lessonSlug: string) =>
    `/learn/${courseSlug}/${lessonSlug}/result`,
};
