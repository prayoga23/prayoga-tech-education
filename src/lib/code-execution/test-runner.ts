import { TestCase, CodeSubmissionResult, ProgrammingLanguage } from "@/types/lesson";
import { executeInSandbox } from "./sandbox";

export async function runTestCases(
  code: string,
  language: ProgrammingLanguage,
  testCases: TestCase[],
  xpReward: number
): Promise<CodeSubmissionResult> {
  const execution = await executeInSandbox(code, language);

  if (execution.error) {
    return {
      success: false,
      message: "Terjadi error saat menjalankan kode.",
      output: execution.error,
      logs: execution.logs,
      passedCount: 0,
      totalCount: testCases.length,
      testResults: testCases.map((tc) => ({
        id: tc.id,
        passed: false,
        expected: tc.expectedOutput,
        actual: `Error: ${execution.error}`,
        description: tc.description,
      })),
    };
  }

  const outputStr = execution.logs.join("\n").trim();
  const testResults = testCases.map((tc) => {
    const expectedClean = tc.expectedOutput.trim().toLowerCase();
    const actualClean = outputStr.toLowerCase();
    const passed = actualClean.includes(expectedClean) || outputStr === tc.expectedOutput.trim();

    return {
      id: tc.id,
      passed,
      expected: tc.expectedOutput,
      actual: outputStr || "(Tidak ada output)",
      description: tc.description,
    };
  });

  const passedCount = testResults.filter((r) => r.passed).length;
  const success = passedCount === testCases.length || testCases.length === 0;

  return {
    success,
    message: success
      ? `Selamat! Semua (${passedCount}/${testCases.length}) pengujian berhasil lolos!`
      : `Hanya ${passedCount} dari ${testCases.length} pengujian yang lolos. Coba periksa kembali kode kamu.`,
    output: outputStr,
    logs: execution.logs,
    passedCount,
    totalCount: testCases.length,
    testResults,
    earnedXp: success ? xpReward : 0,
  };
}
