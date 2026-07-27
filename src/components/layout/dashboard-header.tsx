"use client";
import React from "react";
import { useAuth } from "@/hooks/use-auth";
import { Flame, Award, Bell } from "lucide-react";

export function DashboardHeader({ title, description }: { title: string; description?: string }) {
  const { user } = useAuth();

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-6 gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{title}</h1>
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>

      {user && (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-surface-elevated border border-border rounded-xl px-4 py-2">
            <img
              src={user.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${user.displayName}`}
              alt={user.displayName}
              className="h-9 w-9 rounded-full bg-indigo-500/20 p-0.5 ring-2 ring-indigo-500/30"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">{user.displayName}</span>
              <span className="text-xs text-indigo-400 font-mono font-medium">Level {user.level} Learner</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
