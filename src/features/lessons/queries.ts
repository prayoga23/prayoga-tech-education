import { SEED_LESSONS } from "../../../firebase/seed/data";
import { Lesson } from "@/types/lesson";

export async function getLessonBySlug(courseSlug: string, lessonSlug: string): Promise<Lesson | null> {
  const lesson = SEED_LESSONS.find(
    (l) => l.courseSlug === courseSlug && l.slug === lessonSlug
  );
  return lesson || null;
}

export async function getLessonsByCourse(courseSlug: string): Promise<Lesson[]> {
  return SEED_LESSONS.filter((l) => l.courseSlug === courseSlug);
}
