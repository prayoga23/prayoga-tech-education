import React from "react";
import { CourseGrid } from "@/components/course/course-grid";
import { SEED_COURSES } from "../../../../firebase/seed/data";
import { BookOpen } from "lucide-react";

export default function CatalogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="space-y-3 text-center md:text-left border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-bold text-indigo-300 shadow-sm shadow-indigo-500/10">
          <BookOpen className="h-3.5 w-3.5" />
          <span>Katalog Resmi Prayoga.tech</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">Pilih Jalur Belajar Coding</h1>
        <p className="text-muted-foreground text-sm max-w-2xl">
          Eksplorasi kursus interaktif dalam berbagai bahasa pemrograman populer. Setiap kursus dilengkapi dengan latihan hands-on di browser.
        </p>
      </div>

      <CourseGrid courses={SEED_COURSES} />
    </div>
  );
}
