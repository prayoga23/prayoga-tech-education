export type ProgrammingLanguage = "javascript" | "python" | "html" | "css";

export interface TestCase {
  id: string;
  input?: string;
  expectedOutput: string;
  hidden?: boolean;
  description?: string;
}

export interface Lesson {
  id: string;
  courseSlug: string;
  slug: string;
  title: string;
  description: string;
  contentMarkdown: string;
  language: ProgrammingLanguage;
  initialCode: string;
  solutionCode?: string;
  xpReward: number;
  order: number;
  hints: string[];
  testCases: TestCase[];
  nextLessonSlug?: string;
  prevLessonSlug?: string;
}

export interface CodeSubmissionResult {
  success: boolean;
  message: string;
  output?: string;
  logs?: string[];
  passedCount: number;
  totalCount: number;
  testResults: {
    id: string;
    passed: boolean;
    expected: string;
    actual: string;
    description?: string;
  }[];
  earnedXp?: number;
  newStreak?: number;
}
