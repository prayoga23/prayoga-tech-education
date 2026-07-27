import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";

export interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: string;
  color?: "purple" | "emerald" | "amber" | "blue";
}

export function StatsCard({ title, value, subtitle, icon, color = "purple" }: StatsCardProps) {
  const colorGlows = {
    purple: "border-primary/30 bg-primary/5 text-primary",
    emerald: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400",
    amber: "border-amber-500/30 bg-amber-500/5 text-amber-400",
    blue: "border-cyan-500/30 bg-cyan-500/5 text-cyan-400",
  };

  return (
    <Card className="border border-border bg-card p-5 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{title}</span>
          <div className="text-2xl font-black text-white">{value}</div>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        </div>

        <div className={cn("p-3 rounded-2xl border shadow-inner", colorGlows[color])}>
          {icon}
        </div>
      </div>
    </Card>
  );
}
