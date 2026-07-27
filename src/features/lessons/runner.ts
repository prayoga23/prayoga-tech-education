import { runTestCases } from "@/lib/code-execution/test-runner";
import { Lesson, CodeSubmissionResult } from "@/types/lesson";

export async function evaluateLessonCode(
  lesson: Lesson,
  userCode: string
): Promise<CodeSubmissionResult> {
  return await runTestCases(userCode, lesson.language, lesson.testCases, lesson.xpReward);
}
