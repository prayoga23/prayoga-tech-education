"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import {
  LayoutDashboard,
  BookOpen,
  TrendingUp,
  Flame,
  Trophy,
  Settings,
  LogOut,
} from "lucide-react";
import { logoutUser } from "@/features/auth/actions";

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Ringkasan", href: "/dashboard", icon: LayoutDashboard },
    { name: "Kursus Saya", href: "/dashboard/courses", icon: BookOpen },
    { name: "Progres Belajar", href: "/dashboard/progress", icon: TrendingUp },
    { name: "Streak & Tantangan", href: "/dashboard/streak", icon: Flame },
    { name: "Leaderboard", href: "/dashboard/leaderboard", icon: Trophy },
    { name: "Pengaturan", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 border-r border-border bg-surface/60 flex flex-col justify-between p-4 min-h-[calc(100vh-4rem)]">
      <div className="space-y-6">
        <div className="px-3 py-2">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Menu Utama
          </h2>
          <nav className="space-y-1">
            {links.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-md shadow-indigo-500/25 font-semibold"
                      : "text-muted-foreground hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Icon className={cn("h-4 w-4", isActive ? "text-white" : "text-muted-foreground")} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="px-3 py-2 border-t border-border">
        <button
          onClick={() => logoutUser()}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-rose-400 hover:bg-rose-500/10 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Keluar Sesi
        </button>
      </div>
    </aside>
  );
}
