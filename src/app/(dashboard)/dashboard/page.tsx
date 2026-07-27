"use client";
import React from "react";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { StatsCard } from "@/components/dashboard/stats-card";
import { StreakCard } from "@/components/dashboard/streak-card";
import { ProgressChart } from "@/components/dashboard/progress-chart";
import { CourseGrid } from "@/components/course/course-grid";
import { useAuth } from "@/hooks/use-auth";
import { SEED_COURSES } from "../../../../firebase/seed/data";
import { Award, Flame, BookOpen, Trophy } from "lucide-react";

export default function DashboardOverviewPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <DashboardHeader
        title={`Halo, ${user?.displayName || "Learner"}! 👋`}
        description="Pantau progres belajar coding, streak harian, dan statistik poin kamu hari ini."
      />

      {/* Stats Summary Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatsCard
          title="Total Poin XP"
          value={`${user?.xp || 0} XP`}
          subtitle="Tingkatkan XP dengan menyelesaikan materi"
          icon={<Award className="h-6 w-6" />}
          color="purple"
        />
        <StatsCard
          title="Streak Beruntun"
          value={`${user?.streak || 0} Hari`}
          subtitle="Aktif belajar 5 hari minggu ini"
          icon={<Flame className="h-6 w-6" />}
          color="amber"
        />
        <StatsCard
          title="Materi Selesai"
          value={`${user?.completedLessons.length || 0} Lesson`}
          subtitle="Dari 10 total materi dasar"
          icon={<BookOpen className="h-6 w-6" />}
          color="emerald"
        />
        <StatsCard
          title="Level Learner"
          value={`Level ${user?.level || 1}`}
          subtitle="Next Level: 500 XP"
          icon={<Trophy className="h-6 w-6" />}
          color="blue"
        />
      </div>

      {/* Streak Banner & Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 space-y-2">
          <h3 className="text-lg font-bold text-white">Pertumbuhan XP Mingguan</h3>
          <p className="text-xs text-muted-foreground">Grafik aktivitas pengumpulan poin 7 hari terakhir.</p>
          <ProgressChart />
        </div>

        <div className="space-y-6">
          <StreakCard streak={user?.streak || 5} />
        </div>
      </div>

      {/* Active Enrolled Courses */}
      <div className="space-y-4">
        <h3 className="text-xl font-extrabold text-white">Lanjutkan Pembelajaran</h3>
        <CourseGrid courses={SEED_COURSES.slice(0, 2)} />
      </div>
    </div>
  );
}
