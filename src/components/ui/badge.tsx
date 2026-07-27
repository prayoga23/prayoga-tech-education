import React from "react";
import { cn } from "@/lib/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "outline";
}

export function Badge({ className, variant = "primary", ...props }: BadgeProps) {
  const variants = {
    primary: "bg-indigo-500/15 text-indigo-300 border-indigo-500/25 shadow-sm shadow-indigo-500/10",
    secondary: "bg-surface-elevated text-secondary-foreground border-border",
    success: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25 shadow-sm shadow-emerald-500/10",
    warning: "bg-amber-500/15 text-amber-300 border-amber-500/25 shadow-sm shadow-amber-500/10",
    outline: "border-border text-muted-foreground hover:border-indigo-500/20",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
