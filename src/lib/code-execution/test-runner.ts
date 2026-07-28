import { TestCase, CodeSubmissionResult, ProgrammingLanguage } from "@/types/lesson";
import { executeInSandbox } from "./sandbox";

export async function runTestCases(
  code: string,
  language: ProgrammingLanguage,
  testCases: TestCase[],
  xpReward: number,
  customInput?: string
): Promise<CodeSubmissionResult> {
  if (!testCases || testCases.length === 0) {
    const exec = await executeInSandbox(code, language, customInput);
    const outputStr = exec.logs.join("\n").trim();
    return {
      success: !exec.error,
      message: exec.error ? "Terjadi error saat menjalankan kode." : "Kode berhasil dijalankan.",
      output: exec.error || outputStr,
      logs: exec.logs,
      passedCount: exec.error ? 0 : 1,
      totalCount: 1,
      testResults: [],
    };
  }

  const testResults: {
    id: string;
    passed: boolean;
    expected: string;
    actual: string;
    input?: string;
    description?: string;
  }[] = [];

  let primaryLogs: string[] = [];
  let primaryError: string | undefined = undefined;

  for (let i = 0; i < testCases.length; i++) {
    const tc = testCases[i];
    const inputForRun = tc.input !== undefined ? tc.input : customInput;
    const execution = await executeInSandbox(code, language, inputForRun);

    if (i === 0) {
      primaryLogs = execution.logs;
      primaryError = execution.error;
    }

    if (execution.error) {
      testResults.push({
        id: tc.id,
        passed: false,
        input: tc.input,
        expected: tc.expectedOutput,
        actual: `Error: ${execution.error}`,
        description: tc.description || `Test Case #${i + 1}`,
      });
    } else {
      const outputStr = execution.logs.join("\n").trim();
      const expectedClean = tc.expectedOutput.trim().toLowerCase();
      const actualClean = outputStr.toLowerCase();
      const passed = actualClean.includes(expectedClean) || outputStr === tc.expectedOutput.trim();

      testResults.push({
        id: tc.id,
        passed,
        input: tc.input,
        expected: tc.expectedOutput,
        actual: outputStr || "(Tidak ada output)",
        description: tc.description || `Test Case #${i + 1}`,
      });
    }
  }

  const passedCount = testResults.filter((r) => r.passed).length;
  const success = passedCount === testCases.length;

  return {
    success,
    message: success
      ? `Selamat! Semua (${passedCount}/${testCases.length}) pengujian berhasil lolos!`
      : `Hanya ${passedCount} dari ${testCases.length} pengujian yang lolos. Coba periksa kembali kode kamu.`,
    output: primaryError || primaryLogs.join("\n").trim(),
    logs: primaryLogs,
    passedCount,
    totalCount: testCases.length,
    testResults,
    earnedXp: success ? xpReward : 0,
  };
}

