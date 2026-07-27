"use client";
import React, { useEffect, use } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { SEED_LESSONS } from "../../../../../../../firebase/seed/data";
import { Button } from "@/components/ui/button";
import { Award, Flame, ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";

export interface LessonResultProps {
  params: Promise<{ courseSlug: string; lessonSlug: string }>;
}

export default function LessonResultPage({ params }: LessonResultProps) {
  const { courseSlug, lessonSlug } = use(params);
  const lesson = SEED_LESSONS.find(
    (l) => l.courseSlug === courseSlug && l.slug === lessonSlug
  );

  useEffect(() => {
    // Fire confetti celebration animation on screen mount!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background p-4 text-center">
      <div className="w-full max-w-md rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/30 via-card to-card p-8 shadow-2xl space-y-6 glow-emerald">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 animate-bounce">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Materi Berhasil Dituntaskan!</span>
          <h1 className="text-2xl font-black text-white">{lesson?.title || "Latihan Selesai"}</h1>
          <p className="text-xs text-muted-foreground">Selamat! Kamu berhasil melewati semua test case dengan sempurna.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-muted/50 border border-border">
          <div className="flex flex-col items-center gap-1">
            <Award className="h-6 w-6 text-emerald-400" />
            <span className="text-xl font-black text-white">+{lesson?.xpReward || 50} XP</span>
            <span className="text-[11px] text-muted-foreground">Poin Berhasil Diraih</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <Flame className="h-6 w-6 text-amber-400 fill-amber-400" />
            <span className="text-xl font-black text-white">+1 Hari</span>
            <span className="text-[11px] text-muted-foreground">Streak Terjaga</span>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          {lesson?.nextLessonSlug ? (
            <Link href={`/learn/${courseSlug}/${lesson.nextLessonSlug}`}>
              <Button variant="primary" size="lg" className="w-full font-bold gap-2">
                Lanjut ke Materi Berikutnya <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <Link href={`/learn/${courseSlug}`}>
              <Button variant="success" size="lg" className="w-full font-bold gap-2">
                Kembali ke Ringkasan Kursus <CheckCircle2 className="h-5 w-5" />
              </Button>
            </Link>
          )}

          <Link href={`/learn/${courseSlug}/${lessonSlug}`}>
            <Button variant="ghost" size="sm" className="w-full gap-2 text-muted-foreground hover:text-white">
              <RotateCcw className="h-4 w-4" /> Ulangi Materi Ini Lagi
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
