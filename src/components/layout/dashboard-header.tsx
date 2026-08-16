"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/auth-context";
import { LogOut, User as UserIcon, Settings, ChevronDown } from "lucide-react";
import Link from "next/link";

export function DashboardHeader({ title, description }: { title: string; description?: string }) {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-6 gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{title}</h1>
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>

      {user && (
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 bg-surface-elevated hover:bg-muted border border-border hover:border-indigo-500/30 rounded-xl px-4 py-2 transition-all duration-200"
          >
            <img
              src={user.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${user.displayName}`}
              alt={user.displayName}
              className="h-9 w-9 rounded-full bg-indigo-500/20 p-0.5 ring-2 ring-indigo-500/30 object-cover"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold text-white leading-tight">{user.displayName}</span>
              <span className="text-xs text-indigo-400 font-mono font-medium">Level {user.level} Learner</span>
            </div>
            <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-card p-1.5 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2">
              <div className="px-3 py-2 border-b border-border/60 mb-1">
                <p className="text-xs font-semibold text-white truncate">{user.displayName}</p>
                <p className="text-[11px] text-muted-foreground truncate">{user.email}</p>
              </div>

              <Link
                href="/dashboard/settings"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-indigo-500/10 hover:text-white transition-colors"
              >
                <Settings className="h-4 w-4 text-indigo-400" />
                Pengaturan Profil
              </Link>

              <button
                onClick={() => {
                  setDropdownOpen(false);
                  logout();
                }}
                className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-rose-400 hover:bg-rose-500/10 transition-colors mt-0.5"
              >
                <LogOut className="h-4 w-4" />
                Keluar (Logout)
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
