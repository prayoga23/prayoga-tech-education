"use client";
import { useState } from "react";
import { ProgrammingLanguage } from "@/types/lesson";

export function useEditor(initialCode: string = "", initialLanguage: ProgrammingLanguage = "javascript") {
  const [code, setCode] = useState(initialCode);
  const [language, setLanguage] = useState<ProgrammingLanguage>(initialLanguage);
  const [isRunning, setIsRunning] = useState(false);

  const resetCode = () => setCode(initialCode);

  return {
    code,
    setCode,
    language,
    setLanguage,
    isRunning,
    setIsRunning,
    resetCode,
  };
}
