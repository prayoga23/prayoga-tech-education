import { UserProfile } from "./user";
import { Course } from "./course";
import { Lesson } from "./lesson";
import { LessonProgress } from "./progress";

export interface FirestoreCollections {
  users: UserProfile;
  courses: Course;
  lessons: Lesson;
  progress: LessonProgress;
}
