"use client";
import React from "react";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { useAuth } from "@/hooks/use-auth";
import { ProgressChart } from "@/components/dashboard/progress-chart";
import { CheckCircle2, Award, Clock } from "lucide-react";

export default function DashboardProgressPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Progres Pembelajaran Saya"
        description="Detail riwayat materi yang telah berhasil kamu tuntaskan."
      />

      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <h3 className="text-lg font-bold text-white">Aktivitas & Riwayat XP</h3>
        <ProgressChart />
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        <h3 className="text-lg font-bold text-white mb-4">Materi yang Telah Diselesaikan</h3>
        <div className="space-y-3">
          {(user?.completedLessons || ["js-intro", "js-variables"]).map((slug, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold text-white capitalize">{slug.replace("-", " ")}</span>
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                +50 XP Lolos
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
