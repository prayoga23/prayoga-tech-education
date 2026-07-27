"use client";
import React from "react";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { StreakCard } from "@/components/dashboard/streak-card";
import { useAuth } from "@/hooks/use-auth";
import { Flame, Shield, Award } from "lucide-react";

export default function DashboardStreakPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Streak Harian & Tantangan"
        description="Jaga konsistensi belajar kamu setiap hari untuk mendapatkan multiplier bonus XP."
      />

      <StreakCard streak={user?.streak || 5} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-border bg-card space-y-3">
          <div className="flex items-center gap-3 text-amber-400 font-bold">
            <Flame className="h-6 w-6 fill-amber-400" />
            <span>Streak Freeze Active</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Perlindungan streak aktif jika kamu tidak bisa belajar 1 hari penuh.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-border bg-card space-y-3">
          <div className="flex items-center gap-3 text-emerald-400 font-bold">
            <Award className="h-6 w-6" />
            <span>Bonus Multiplier 1.5x</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Mencapai 5 hari streak membuka bonus tambahan 50% XP di setiap materi berikutnya.
          </p>
        </div>
      </div>
    </div>
  );
}
