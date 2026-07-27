import { ProgrammingLanguage } from "@/types/lesson";

export interface LanguageOption {
  id: ProgrammingLanguage;
  name: string;
  extension: string;
  monacoLanguage: string;
  defaultTemplate: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    id: "javascript",
    name: "JavaScript",
    extension: "js",
    monacoLanguage: "javascript",
    defaultTemplate: `// Tulis kode JavaScript kamu di sini\nfunction main() {\n  console.log("Hello Prayoga!");\n}\n\nmain();\n`,
  },
  {
    id: "python",
    name: "Python 3",
    extension: "py",
    monacoLanguage: "python",
    defaultTemplate: `# Tulis kode Python kamu di sini\ndef main():\n    print("Hello Prayoga!")\n\nif __name__ == "__main__":\n    main()\n`,
  },
  {
    id: "html",
    name: "HTML / CSS",
    extension: "html",
    monacoLanguage: "html",
    defaultTemplate: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    h1 { color: #6366f1; }\n  </style>\n</head>\n<body>\n  <h1>Selamat Datang di Prayoga.tech!</h1>\n</body>\n</html>\n`,
  },
];
