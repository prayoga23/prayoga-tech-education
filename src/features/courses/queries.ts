import { SEED_COURSES } from "../../../firebase/seed/data";
import { Course } from "@/types/course";

export async function getCourses(): Promise<Course[]> {
  return SEED_COURSES;
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  const course = SEED_COURSES.find((c) => c.slug === slug);
  return course || null;
}
