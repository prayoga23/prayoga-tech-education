import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export interface LessonNavigationProps {
  courseSlug: string;
  prevLessonSlug?: string;
  nextLessonSlug?: string;
  isCompleted?: boolean;
}

export function LessonNavigation({
  courseSlug,
  prevLessonSlug,
  nextLessonSlug,
  isCompleted,
}: LessonNavigationProps) {
  return (
    <div className="flex items-center justify-between border-t border-border bg-card px-6 py-3">
      {prevLessonSlug ? (
        <Link href={`/learn/${courseSlug}/${prevLessonSlug}`}>
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Materi Sebelumnya
          </Button>
        </Link>
      ) : (
        <div />
      )}

      {nextLessonSlug ? (
        <Link href={`/learn/${courseSlug}/${nextLessonSlug}`}>
          <Button variant="primary" size="sm" className="gap-2 font-bold">
            Materi Selanjutnya <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      ) : (
        <Link href={`/learn/${courseSlug}`}>
          <Button variant="success" size="sm" className="gap-2 font-bold">
            <CheckCircle className="h-4 w-4" /> Selesai Modul Ini
          </Button>
        </Link>
      )}
    </div>
  );
}
