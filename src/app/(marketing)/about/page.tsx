import React from "react";
import Image from "next/image";
import { Target, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-12 relative">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="text-center space-y-4 relative z-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 p-3 shadow-lg shadow-indigo-500/20">
          <Image src="/logo1.png" alt="Prayoga.tech Logo" width={48} height={48} className="h-12 w-12 object-contain" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Tentang Prayoga.tech</h1>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
          Misi kami adalah menghadirkan platform pembelajaran coding interaktif bahasa Indonesia paling menyenangkan, cepat, dan terjangkau untuk semua calon developer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 relative z-10">
        <div className="group p-6 rounded-2xl border border-border bg-gradient-to-b from-card to-surface space-y-3 hover:border-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
          <Target className="h-6 w-6 text-indigo-400" />
          <h3 className="text-lg font-bold text-white">Visi Pembelajaran</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Meningkatkan pemahaman algoritma dan logika pemrograman melalui praktik langsung dibanding sekadar teori video pasif.
          </p>
        </div>

        <div className="group p-6 rounded-2xl border border-border bg-gradient-to-b from-card to-surface space-y-3 hover:border-amber-500/25 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300">
          <Zap className="h-6 w-6 text-amber-400" />
          <h3 className="text-lg font-bold text-white">Teknologi Antigravity IDE</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Didukung oleh engine eksekusi sandbox modern yang mengeksekusi dan memvalidasi hasil unit test secara lokal di browser secara instan.
          </p>
        </div>
      </div>
    </div>
  );
}
