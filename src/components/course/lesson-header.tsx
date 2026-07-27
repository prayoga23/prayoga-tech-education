"use client";
import React from "react";
import Link from "next/link";
import { Lesson } from "@/types/lesson";
import { ArrowLeft, Award, Flame, ChevronRight } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

export interface LessonHeaderProps {
  lesson: Lesson;
  courseTitle: string;
}

export function LessonHeader({ lesson, courseTitle }: LessonHeaderProps) {
  const { user } = useAuth();

  return (
    <header className="flex h-14 w-full items-center justify-between border-b border-border bg-muted/50 px-4 glass">
      <div className="flex items-center gap-3">
        <Link
          href={`/learn/${lesson.courseSlug}`}
          className="flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali</span>
        </Link>
        <span className="text-border">|</span>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-muted-foreground hidden sm:inline">{courseTitle}</span>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground hidden sm:inline" />
          <span className="font-bold text-white line-clamp-1">{lesson.title}</span>
        </div>
      </div>

      {user && (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-xs font-bold text-amber-400">
            <Flame className="h-3.5 w-3.5 fill-amber-400" />
            <span>{user.streak}</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-400">
            <Award className="h-3.5 w-3.5" />
            <span>{user.xp} XP</span>
          </div>
        </div>
      )}
    </header>
  );
}
