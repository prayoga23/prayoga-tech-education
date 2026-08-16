"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Flame, Award, LogIn, LayoutDashboard, LogOut, Settings, ChevronDown } from "lucide-react";
import { useAuth } from "@/context/auth-context";

export function Navbar() {
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuth();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo1.png"
            alt="Prayoga.tech Logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain group-hover:scale-105 transition-transform duration-200 filter drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]"
          />
          <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
            Prayoga<span className="text-indigo-400 font-mono text-sm bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">.tech</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link
            href="/catalog"
            className={pathname === "/catalog" ? "text-white font-semibold" : "hover:text-indigo-300 transition-colors"}
          >
            Katalog Kursus
          </Link>
          <Link
            href="/pricing"
            className={pathname === "/pricing" ? "text-white font-semibold" : "hover:text-indigo-300 transition-colors"}
          >
            Harga & Akses
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? "text-white font-semibold" : "hover:text-indigo-300 transition-colors"}
          >
            Tentang Platform
          </Link>
        </nav>

        {/* User Stats / Auth Actions */}
        <div className="flex items-center gap-4">
          {isAuthenticated && user ? (
            <div className="flex items-center gap-3">
              {/* Streak badge */}
              <div className="flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300 shadow-sm shadow-amber-500/10">
                <Flame className="h-4 w-4 fill-amber-400 animate-pulse" />
                <span>{user.streak} Hari</span>
              </div>

              {/* XP badge */}
              <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 shadow-sm shadow-emerald-500/10">
                <Award className="h-4 w-4 text-emerald-400" />
                <span>{user.xp} XP</span>
              </div>

              {/* User Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 rounded-xl border border-border bg-surface-elevated hover:bg-muted p-1.5 pr-2.5 transition-colors"
                >
                  <img
                    src={user.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${user.displayName}`}
                    alt={user.displayName}
                    className="h-7 w-7 rounded-full bg-indigo-500/20 object-cover"
                  />
                  <span className="text-xs font-semibold text-white max-w-[90px] truncate hidden sm:inline">{user.displayName}</span>
                  <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-52 rounded-xl border border-border bg-card p-1.5 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-3 py-2 border-b border-border/60 mb-1">
                      <p className="text-xs font-semibold text-white truncate">{user.displayName}</p>
                      <p className="text-[11px] text-muted-foreground truncate">{user.email}</p>
                    </div>

                    <Link
                      href="/dashboard"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-indigo-500/10 hover:text-white transition-colors"
                    >
                      <LayoutDashboard className="h-4 w-4 text-indigo-400" />
                      Dashboard Learner
                    </Link>

                    <Link
                      href="/dashboard/settings"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-indigo-500/10 hover:text-white transition-colors"
                    >
                      <Settings className="h-4 w-4 text-indigo-400" />
                      Pengaturan Profil
                    </Link>

                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
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
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button size="sm" variant="ghost" className="gap-1.5">
                  <LogIn className="h-4 w-4" />
                  Masuk
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" variant="primary">
                  Daftar Gratis
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
