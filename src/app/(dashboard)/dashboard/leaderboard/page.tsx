import React from "react";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { LeaderboardTable } from "@/components/dashboard/leaderboard-table";
import { SEED_LEADERBOARD } from "../../../../../firebase/seed/data";

export default function DashboardLeaderboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Leaderboard Global Prayoga.tech"
        description="Top learner dengan perolehan XP dan streak harian tertinggi."
      />
      <LeaderboardTable entries={SEED_LEADERBOARD} />
    </div>
  );
}
