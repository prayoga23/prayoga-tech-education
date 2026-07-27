import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Flame, CheckCircle2 } from "lucide-react";

export function StreakCard({ streak = 5 }: { streak?: number }) {
  const days = ["S", "S", "R", "K", "J", "S", "M"];

  return (
    <Card className="border border-amber-500/30 bg-gradient-to-br from-amber-950/20 via-card to-card p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 glow-amber">
            <Flame className="h-7 w-7 fill-amber-400 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white">{streak} Hari Beruntun!</h3>
            <p className="text-xs text-amber-200/80">Pertahankan streak kamu dengan menyelesaikan 1 materi tiap hari.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mt-6 pt-4 border-t border-border/60 text-center">
        {days.map((day, idx) => {
          const isDone = idx < streak;
          return (
            <div key={idx} className="flex flex-col items-center gap-1.5">
              <span className="text-xs text-muted-foreground font-semibold">{day}</span>
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-xl font-bold transition-all ${
                  isDone
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/30 scale-105"
                    : "bg-muted border border-border text-muted-foreground"
                }`}
              >
                {isDone ? <CheckCircle2 className="h-5 w-5" /> : idx + 1}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
