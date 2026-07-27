import { evaluateLessonCode } from "./runner";
import { Lesson, CodeSubmissionResult } from "@/types/lesson";

export async function submitLessonSolution(
  lesson: Lesson,
  userCode: string
): Promise<CodeSubmissionResult> {
  return await evaluateLessonCode(lesson, userCode);
}
