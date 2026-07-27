import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SEED_COURSES, SEED_LESSONS } from "../../../../../firebase/seed/data";
import { LessonList } from "@/components/course/lesson-list";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, Award, Clock, BookOpen } from "lucide-react";

export interface CourseDetailProps {
  params: Promise<{ courseSlug: string }>;
}

export default async function CourseDetailPage({ params }: CourseDetailProps) {
  const { courseSlug } = await params;
  const course = SEED_COURSES.find((c) => c.slug === courseSlug);
  if (!course) return notFound();

  const lessons = SEED_LESSONS.filter((l) => l.courseSlug === courseSlug);
  const firstLessonSlug = lessons[0]?.slug;

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 space-y-8 max-w-5xl mx-auto">
      <div>
        <Link href="/catalog" className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-white mb-4">
          <ArrowLeft className="h-4 w-4" /> Kembali ke Katalog Kursus
        </Link>
        
        <div className="rounded-3xl border border-border bg-gradient-to-br from-indigo-950/40 via-card to-card p-8 md:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <Badge variant="primary" className="capitalize">{course.level}</Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {course.estimatedHours} Jam Belajar
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">{course.title}</h1>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{course.description}</p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            {firstLessonSlug && (
              <Link href={`/learn/${courseSlug}/${firstLessonSlug}`}>
                <Button variant="primary" size="lg" className="font-extrabold gap-2 shadow-xl shadow-primary/25">
                  <Play className="h-5 w-5 fill-white" /> Mulai Materi Pertama
                </Button>
              </Link>
            )}
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20">
              <Award className="h-4 w-4" />
              <span>+{course.totalXp} Total XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Syllabus Modules */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-white flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" /> Silabus & Daftar Materi
        </h2>

        {course.modules.map((module) => (
          <div key={module.id} className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white">{module.title}</h3>
              <p className="text-xs text-muted-foreground">{module.description}</p>
            </div>

            <LessonList
              courseSlug={courseSlug}
              lessons={lessons.filter((l) => module.lessonSlugs.includes(l.slug))}
              completedLessonSlugs={["js-intro"]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
