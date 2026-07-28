"use client";
import React, { useState, use } from "react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { SEED_COURSES, SEED_LESSONS } from "../../../../../../firebase/seed/data";
import { LessonHeader } from "@/components/course/lesson-header";
import { LessonContent } from "@/components/course/lesson-content";
import { LessonNavigation } from "@/components/course/lesson-navigation";
import { CodeEditor } from "@/components/editor/code-editor";
import { EditorToolbar } from "@/components/editor/editor-toolbar";
import { OutputPanel } from "@/components/editor/output-panel";
import { evaluateLessonCode } from "@/features/lessons/runner";
import { saveUserProgress } from "@/features/progress/actions";
import { CodeSubmissionResult, ProgrammingLanguage } from "@/types/lesson";

export interface LessonPlayerProps {
  params: Promise<{ courseSlug: string; lessonSlug: string }>;
}

export default function LessonPlayerPage({ params }: LessonPlayerProps) {
  const { courseSlug, lessonSlug } = use(params);
  const router = useRouter();

  const course = SEED_COURSES.find((c) => c.slug === courseSlug);
  const lesson = SEED_LESSONS.find(
    (l) => l.courseSlug === courseSlug && l.slug === lessonSlug
  );

  const [code, setCode] = useState(lesson?.initialCode || "// Tulis kode kamu di sini\n");
  const [language, setLanguage] = useState<ProgrammingLanguage>(lesson?.language || "javascript");
  const [customInput, setCustomInput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<CodeSubmissionResult | null>(null);

  if (!lesson || !course) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background text-white font-mono">
        Materi tidak ditemukan.
      </div>
    );
  }

  const handleRunCode = async () => {
    setIsRunning(true);
    const evalResult = await evaluateLessonCode(lesson, code, customInput);
    setResult(evalResult);
    setIsRunning(false);

    if (evalResult.success) {
      await saveUserProgress(lesson.slug, lesson.xpReward);
      // Trigger celebratory confetti animation on page
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
      });
    }
  };

  const handleResetCode = () => {
    setCode(lesson.initialCode);
    setCustomInput("");
    setResult(null);
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-background">
      <LessonHeader lesson={lesson} courseTitle={course.title} />

      <div className="grid grid-cols-1 lg:grid-cols-2 flex-1 overflow-hidden">
        {/* Left Side: Lesson Instructions & Content */}
        <div className="flex flex-col justify-between border-r border-border bg-card/40 overflow-hidden">
          <LessonContent lesson={lesson} />
          <LessonNavigation
            courseSlug={courseSlug}
            prevLessonSlug={lesson.prevLessonSlug}
            nextLessonSlug={lesson.nextLessonSlug}
          />
        </div>

        {/* Right Side: Code Editor & Console Output */}
        <div className="flex flex-col h-full bg-background overflow-hidden">
          <EditorToolbar
            language={language}
            onLanguageChange={(lang) => setLanguage(lang)}
            onRun={handleRunCode}
            onReset={handleResetCode}
            isRunning={isRunning}
          />

          <div className="flex-1 min-h-[250px]">
            <CodeEditor value={code} onChange={setCode} language={language} />
          </div>

          <div className="h-72 border-t border-border">
            <OutputPanel
              result={result}
              logs={result?.logs || []}
              error={result?.success === false ? result?.output : undefined}
              code={code}
              language={language}
              customInput={customInput}
              onCustomInputChange={setCustomInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


