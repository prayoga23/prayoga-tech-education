import React from "react";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { CourseGrid } from "@/components/course/course-grid";
import { SEED_COURSES } from "../../../../../firebase/seed/data";

export default function DashboardCoursesPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Kursus & Modul Belajar"
        description="Semua kursus pemrograman interaktif yang dapat kamu pelajari secara gratis."
      />
      <CourseGrid courses={SEED_COURSES} />
    </div>
  );
}
