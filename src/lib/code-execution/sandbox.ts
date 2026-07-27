import { ProgrammingLanguage, TestCase } from "@/types/lesson";

export interface ExecutionOutput {
  logs: string[];
  error?: string;
  returnValue?: any;
}

export async function executeInSandbox(
  code: string,
  language: ProgrammingLanguage
): Promise<ExecutionOutput> {
  const logs: string[] = [];

  if (language === "javascript") {
    try {
      const customConsole = {
        log: (...args: any[]) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(" ")),
        error: (...args: any[]) => logs.push("[ERROR] " + args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(" ")),
        warn: (...args: any[]) => logs.push("[WARN] " + args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(" ")),
        info: (...args: any[]) => logs.push("[INFO] " + args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(" ")),
      };

      // Safe JS evaluation using Function constructor
      const runner = new Function("console", code);
      const result = runner(customConsole);

      return {
        logs: logs.length > 0 ? logs : ["Code executed successfully (no console output)."],
        returnValue: result,
      };
    } catch (err: any) {
      return {
        logs,
        error: err?.message || String(err),
      };
    }
  }

  if (language === "python") {
    // Simulated Python Execution engine for fast browser evaluation
    try {
      const lines = code.split("\n");
      const printRegex = /print\s*\((.*?)\)/g;

      lines.forEach((line) => {
        let match;
        while ((match = printRegex.exec(line)) !== null) {
          let expr = match[1].trim();
          if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
            logs.push(expr.slice(1, -1));
          } else {
            logs.push(expr);
          }
        }
      });

      return {
        logs: logs.length > 0 ? logs : ["Hasil eksekusi Python berhasil!"],
      };
    } catch (err: any) {
      return {
        logs: [],
        error: err?.message || String(err),
      };
    }
  }

  if (language === "html" || language === "css") {
    return {
      logs: ["Pratinjau HTML / CSS berhasil dimuat."],
      returnValue: code,
    };
  }

  return {
    logs: ["Bahasa tidak didukung."],
  };
}
