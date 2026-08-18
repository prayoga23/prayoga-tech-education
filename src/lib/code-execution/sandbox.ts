import { ProgrammingLanguage } from "@/types/lesson";

export interface ExecutionOutput {
  logs: string[];
  error?: string;
  returnValue?: any;
}

function transpilePythonToJS(pythonCode: string): string {
  const lines = pythonCode.split(/\r?\n/);
  const jsLines: string[] = [];
  const indentStack: number[] = [0];

  // Pass 1: Find defined classes
  const definedClasses = new Set<string>();
  lines.forEach((line) => {
    const classMatch = /^\s*class\s+([a-zA-Z0-9_]+)/.exec(line);
    if (classMatch) {
      definedClasses.add(classMatch[1]);
    }
  });

  let hasParentClass = false;

  lines.forEach((originalLine) => {
    // 1. Strip comments (#) unless inside string quotes
    let lineWithoutComment = "";
    let inSingleQuote = false;
    let inDoubleQuote = false;
    for (let i = 0; i < originalLine.length; i++) {
      const char = originalLine[i];
      if (char === "'" && !inDoubleQuote) inSingleQuote = !inSingleQuote;
      if (char === '"' && !inSingleQuote) inDoubleQuote = !inDoubleQuote;
      if (char === "#" && !inSingleQuote && !inDoubleQuote) {
        break;
      }
      lineWithoutComment += char;
    }

    if (!lineWithoutComment.trim()) {
      return;
    }

    // 2. Count indentation (tab = 4 spaces)
    const leadingSpaces = lineWithoutComment.match(/^[\t ]*/)?.[0] || "";
    let indentLevel = 0;
    for (const char of leadingSpaces) {
      indentLevel += char === "\t" ? 4 : 1;
    }

    // 3. Close braces if indentation decreased
    while (indentLevel < indentStack[indentStack.length - 1]) {
      indentStack.pop();
      const popIndent = indentStack[indentStack.length - 1] || 0;
      jsLines.push(" ".repeat(popIndent) + "}");
    }

    let trimmed = lineWithoutComment.trim();

    // Ignore import statements (handled by mock env)
    if (trimmed.startsWith("import ") || trimmed.startsWith("from ")) {
      return;
    }

    // Replace pass with empty statement
    if (trimmed === "pass") {
      jsLines.push(" ".repeat(indentLevel) + ";");
      return;
    }

    // Replace self. with this.
    trimmed = trimmed.replace(/\bself\./g, "this.");

    // Auto-insert 'new' before defined class instantiations
    definedClasses.forEach((cls) => {
      const regex = new RegExp(`(?<!class\\s+|extends\\s+|new\\s+)\\b${cls}\\s*\\(`, "g");
      trimmed = trimmed.replace(regex, `new ${cls}(`);
    });

    // 4. Handle Python f-strings: f"Halo {nama}" -> `Halo ${nama}`
    trimmed = trimmed.replace(/f(["'])(.*?)\1/g, (_match, _quote, contents) => {
      const convertedStr = contents.replace(/\{([^}]+)\}/g, "${$1}");
      return "`" + convertedStr + "`";
    });

    // Replace floor division operator `//` with Math.floor(a / b)
    trimmed = trimmed.replace(/([a-zA-Z0-9_().]+)\s*\/\/\s*([a-zA-Z0-9_().]+)/g, "Math.floor($1 / $2)");

    // Replace division operator `/` with pyDiv(a, b) to support ZeroDivisionError
    trimmed = trimmed.replace(/([a-zA-Z0-9_().]+)\s*\/\s*([a-zA-Z0-9_().]+)/g, "pyDiv($1, $2)");

    // Replace Python literals & keywords
    trimmed = trimmed
      .replace(/\bTrue\b/g, "true")
      .replace(/\bFalse\b/g, "false")
      .replace(/\bNone\b/g, "null")
      .replace(/\band\b/g, "&&")
      .replace(/\bor\b/g, "||")
      .replace(/\bnot\s+/g, "!");

    // Replace .append( -> .push(
    trimmed = trimmed.replace(/\.append\(/g, ".push(");

    // 5. Block headers ending with :
    if (trimmed.endsWith(":")) {
      const headerContent = trimmed.slice(0, -1).trim();

      if (headerContent.startsWith("if ")) {
        const cond = headerContent.slice(3).trim();
        jsLines.push(" ".repeat(indentLevel) + `if (${cond}) {`);
      } else if (headerContent.startsWith("elif ")) {
        const cond = headerContent.slice(5).trim();
        jsLines.push(" ".repeat(indentLevel) + `else if (${cond}) {`);
      } else if (headerContent === "else") {
        jsLines.push(" ".repeat(indentLevel) + `else {`);
      } else if (headerContent === "try") {
        jsLines.push(" ".repeat(indentLevel) + `try {`);
      } else if (headerContent.startsWith("except")) {
        jsLines.push(" ".repeat(indentLevel) + `catch (err) {`);
      } else if (headerContent === "finally") {
        jsLines.push(" ".repeat(indentLevel) + `finally {`);
      } else if (headerContent.startsWith("while ")) {
        const cond = headerContent.slice(6).trim();
        jsLines.push(" ".repeat(indentLevel) + `while (${cond}) {`);
      } else if (headerContent.startsWith("for ")) {
        const forMatch = /^for\s+([a-zA-Z0-9_,\s]+)\s+in\s+(.+)$/.exec(headerContent);
        if (forMatch) {
          const varName = forMatch[1].trim();
          const target = forMatch[2].trim();
          jsLines.push(" ".repeat(indentLevel) + `for (${varName} of ${target}) {`);
        } else {
          jsLines.push(" ".repeat(indentLevel) + `${headerContent} {`);
        }
      } else if (headerContent.startsWith("class ")) {
        const classMatch = /^class\s+([a-zA-Z0-9_]+)(?:\((.*?)\))?$/.exec(headerContent);
        if (classMatch) {
          const className = classMatch[1];
          const parentClass = classMatch[2];
          if (parentClass) {
            hasParentClass = true;
            jsLines.push(" ".repeat(indentLevel) + `class ${className} extends ${parentClass} {`);
          } else {
            hasParentClass = false;
            jsLines.push(" ".repeat(indentLevel) + `class ${className} {`);
          }
        } else {
          jsLines.push(" ".repeat(indentLevel) + `${headerContent} {`);
        }
      } else if (headerContent.startsWith("def ")) {
        const defMatch = /^def\s+([a-zA-Z0-9_]+)\s*\((.*?)\)$/.exec(headerContent);
        if (defMatch) {
          const fnName = defMatch[1];
          const rawArgs = defMatch[2];
          const cleanArgs = rawArgs
            .split(",")
            .map((a) => a.trim())
            .filter((a) => a !== "self" && a !== "")
            .join(", ");

          if (fnName === "__init__") {
            jsLines.push(" ".repeat(indentLevel) + `constructor(${cleanArgs}) {`);
            if (hasParentClass) {
              jsLines.push(" ".repeat(indentLevel + 4) + `try { super(); } catch (e) {}`);
            }
          } else if (indentStack.length > 1) {
            // inside a class block or nested block
            jsLines.push(" ".repeat(indentLevel) + `${fnName}(${cleanArgs}) {`);
          } else {
            jsLines.push(" ".repeat(indentLevel) + `function ${fnName}(${cleanArgs}) {`);
          }
        } else {
          jsLines.push(" ".repeat(indentLevel) + `${headerContent} {`);
        }
      } else {
        jsLines.push(" ".repeat(indentLevel) + `${headerContent} {`);
      }

      indentStack.push(indentLevel + 4);
    } else {
      // Normal statement line
      jsLines.push(" ".repeat(indentLevel) + trimmed + ";");
    }
  });

  // Close any remaining open blocks
  while (indentStack.length > 1) {
    indentStack.pop();
    const popIndent = indentStack[indentStack.length - 1] || 0;
    jsLines.push(" ".repeat(popIndent) + "}");
  }

  return jsLines.join("\n");
}

export async function executeInSandbox(
  code: string,
  language: ProgrammingLanguage,
  inputData?: string
): Promise<ExecutionOutput> {
  const logs: string[] = [];
  const inputLines = inputData ? inputData.split(/\r?\n/) : [];
  let inputIndex = 0;

  const customInput = (_promptMsg?: any) => {
    if (inputIndex < inputLines.length) {
      return inputLines[inputIndex++];
    }
    return "";
  };

  if (language === "javascript") {
    try {
      const customConsole = {
        log: (...args: any[]) =>
          logs.push(args.map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a))).join(" ")),
        error: (...args: any[]) =>
          logs.push("[ERROR] " + args.map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a))).join(" ")),
        warn: (...args: any[]) =>
          logs.push("[WARN] " + args.map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a))).join(" ")),
        info: (...args: any[]) =>
          logs.push("[INFO] " + args.map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a))).join(" ")),
      };

      const runner = new Function("console", "prompt", code);
      const result = runner(customConsole, customInput);

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
    try {
      const transpiled = transpilePythonToJS(code);

      const customPrint = (...args: any[]) => {
        const formatted = args
          .map((arg) => {
            if (arg === true) return "True";
            if (arg === false) return "False";
            if (arg === null || arg === undefined) return "None";
            if (Array.isArray(arg)) return JSON.stringify(arg);
            if (typeof arg === "object") return JSON.stringify(arg);
            return String(arg);
          })
          .join(" ");
        logs.push(formatted);
      };

      const pyRange = (start: number, stop?: number, step: number = 1): number[] => {
        if (stop === undefined) {
          stop = start;
          start = 0;
        }
        const res: number[] = [];
        if (step > 0) {
          for (let i = start; i < stop; i += step) res.push(i);
        } else if (step < 0) {
          for (let i = start; i > stop; i += step) res.push(i);
        }
        return res;
      };

      const pyLen = (obj: any): number => {
        if (!obj) return 0;
        if (Array.isArray(obj) || typeof obj === "string") return obj.length;
        return Object.keys(obj).length;
      };

      const pyType = (val: any): string => {
        if (val === null || val === undefined) return "NoneType";
        if (Array.isArray(val)) return "list";
        if (typeof val === "string") return "str";
        if (typeof val === "number") return Number.isInteger(val) ? "int" : "float";
        if (typeof val === "boolean") return "bool";
        return typeof val;
      };

      const pyDiv = (a: number, b: number): number => {
        if (b === 0) {
          throw new Error("ZeroDivisionError: division by zero");
        }
        return a / b;
      };

      const virtualFiles: Record<string, string> = {};
      const pyOpen = (filename: string, mode: string = "r") => {
        return {
          write: (text: string) => {
            virtualFiles[filename] = (virtualFiles[filename] || "") + text;
          },
          read: () => virtualFiles[filename] || "",
          close: () => {},
        };
      };

      const env: Record<string, any> = {
        print: customPrint,
        input: customInput,
        range: pyRange,
        len: pyLen,
        str: (v: any) => String(v),
        int: (v: any) => parseInt(v, 10),
        float: (v: any) => parseFloat(v),
        bool: (v: any) => Boolean(v),
        type: pyType,
        pyDiv,
        sum: (arr: number[]) => (Array.isArray(arr) ? arr.reduce((a, b) => a + b, 0) : 0),
        max: (...args: any[]) => Math.max(...args.flat()),
        min: (...args: any[]) => Math.min(...args.flat()),
        open: pyOpen,
        math: {
          sqrt: Math.sqrt,
          pi: Math.PI,
          pow: Math.pow,
          floor: Math.floor,
          ceil: Math.ceil,
          abs: Math.abs,
        },
        Math,
      };

      const runner = new Function("env", `with (env) {\n${transpiled}\n}`);
      runner(env);

      return {
        logs: logs.length > 0 ? logs : ["Hasil eksekusi Python berhasil!"],
      };
    } catch (err: any) {
      return {
        logs,
        error: err?.message || String(err),
      };
    }
  }

  if (language === "html" || language === "css") {
    return {
      logs: [code],
      returnValue: code,
    };
  }

  return {
    logs: ["Bahasa tidak didukung."],
  };
}
