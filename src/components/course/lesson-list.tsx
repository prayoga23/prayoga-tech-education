"use client";
import React from "react";
import Link from "next/link";
import { Lesson } from "@/types/lesson";
import { CheckCircle2, PlayCircle, Lock } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export interface LessonListProps {
  courseSlug: string;
  lessons: Lesson[];
  completedLessonSlugs?: string[];
  activeLessonSlug?: string;
}

export function LessonList({
  courseSlug,
  lessons,
  completedLessonSlugs = [],
  activeLessonSlug,
}: LessonListProps) {
  return (
    <div className="space-y-2">
      {lessons.map((lesson, idx) => {
        const isCompleted = completedLessonSlugs.includes(lesson.slug);
        const isActive = activeLessonSlug === lesson.slug;

        return (
          <Link
            key={lesson.id}
            href={`/learn/${courseSlug}/${lesson.slug}`}
            className={cn(
              "flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 group",
              isActive
                ? "bg-primary/15 border-primary text-white font-semibold shadow-md"
                : isCompleted
                ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-200 hover:bg-emerald-900/30"
                : "bg-card border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-secondary text-xs font-mono font-bold">
                {idx + 1}
              </div>
              <span className="text-sm line-clamp-1">{lesson.title}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-emerald-400">+{lesson.xpReward} XP</span>
              {isCompleted ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              ) : isActive ? (
                <PlayCircle className="h-5 w-5 text-primary animate-pulse" />
              ) : (
                <PlayCircle className="h-5 w-5 opacity-40 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
