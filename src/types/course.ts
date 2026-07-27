export type CourseLevel = "beginner" | "intermediate" | "advanced";

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  order: number;
  lessonSlugs: string[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string; // lucide icon name or emoji/url
  color: string; // banner gradient or hex
  level: CourseLevel;
  language: "javascript" | "python" | "html" | "css";
  totalLessons: number;
  totalXp: number;
  estimatedHours: number;
  isPopular?: boolean;
  isNew?: boolean;
  modules: CourseModule[];
  createdAt: string;
  updatedAt: string;
}
