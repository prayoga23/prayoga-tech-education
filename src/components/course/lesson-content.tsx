import React from "react";
import { Lesson } from "@/types/lesson";
import { BookOpen, Lightbulb } from "lucide-react";

export interface LessonContentProps {
  lesson: Lesson;
}

export function LessonContent({ lesson }: LessonContentProps) {
  return (
    <div className="p-6 space-y-6 text-foreground overflow-y-auto max-h-[calc(100vh-8rem)]">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-bold text-primary mb-3">
          <BookOpen className="h-3.5 w-3.5" />
          <span>Materi Pembelajaran</span>
        </div>
        <h1 className="text-2xl font-black text-foreground tracking-tight">{lesson.title}</h1>
        <p className="text-sm text-muted-foreground mt-2">{lesson.description}</p>
      </div>

      <div className="prose prose-invert max-w-none text-sm leading-relaxed space-y-4 border-t border-border pt-4">
        {lesson.contentMarkdown.split("\n\n").map((paragraph, i) => {
          if (paragraph.startsWith("### ")) {
            return (
              <h3 key={i} className="text-lg font-bold text-foreground mt-4 mb-2">
                {paragraph.replace("### ", "")}
              </h3>
            );
          }
          if (paragraph.startsWith("#### ")) {
            return (
              <h4 key={i} className="text-md font-semibold text-primary mt-3 mb-1">
                {paragraph.replace("#### ", "")}
              </h4>
            );
          }
          if (paragraph.startsWith("```")) {
            const cleanCode = paragraph.replace(/```[a-z]*/g, "").trim();
            return (
              <pre key={i} className="p-4 rounded-xl bg-muted/80 border border-border font-mono text-xs overflow-x-auto text-emerald-400">
                <code>{cleanCode}</code>
              </pre>
            );
          }
          return <p key={i} className="text-muted-foreground">{paragraph}</p>;
        })}
      </div>

      {lesson.hints && lesson.hints.length > 0 && (
        <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 space-y-2 shadow-sm">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
            <Lightbulb className="h-4 w-4 text-amber-400" />
            <span>Petunjuk Bantuan (Hint):</span>
          </div>
          <ul className="list-disc list-inside text-xs text-amber-200/95 space-y-1 font-medium">
            {lesson.hints.map((hint, idx) => (
              <li key={idx}>{hint}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
