import React from "react";
import { LeaderboardEntry } from "@/types/api";
import { Trophy, Award, Flame } from "lucide-react";

export function LeaderboardTable({ entries }: { entries: LeaderboardEntry[] }) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="p-4 border-b border-border bg-card flex items-center justify-between">
        <span className="font-bold text-foreground flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-400" /> Papan Peringkat Mingguan
        </span>
        <span className="text-xs text-muted-foreground">Diperbarui Real-time</span>
      </div>

      <div className="divide-y divide-border">
        {entries.map((entry) => {
          const isTop3 = entry.rank <= 3;
          const rankColors = {
            1: "bg-amber-500/20 text-amber-400 border-amber-500/40",
            2: "bg-gray-400/20 text-gray-300 border-gray-400/40",
            3: "bg-amber-700/20 text-amber-600 border-amber-700/40",
          };

          return (
            <div
              key={entry.uid}
              className={`flex items-center justify-between p-4 transition-colors hover:bg-muted/40 ${
                entry.displayName.includes("Anda") ? "bg-primary/10 border-l-4 border-l-primary" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold border ${
                    isTop3
                      ? rankColors[entry.rank as 1 | 2 | 3]
                      : "bg-secondary text-muted-foreground border-border"
                  }`}
                >
                  #{entry.rank}
                </div>

                <img
                  src={entry.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${entry.displayName}`}
                  alt={entry.displayName}
                  className="h-10 w-10 rounded-full bg-muted border border-border"
                />

                <div>
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    {entry.displayName}
                  </h4>
                  <span className="text-xs text-muted-foreground">Level {entry.level} Learner</span>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs font-semibold">
                <div className="flex items-center gap-1 text-amber-400">
                  <Flame className="h-4 w-4 fill-amber-400" />
                  <span>{entry.streak} Hari</span>
                </div>

                <div className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                  <Award className="h-4 w-4" />
                  <span className="font-bold">{entry.xp} XP</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
