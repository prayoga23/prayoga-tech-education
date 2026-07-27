import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CourseGrid } from "@/components/course/course-grid";
import { SEED_COURSES } from "../../../firebase/seed/data";
import { Play, Sparkles, Code2, Terminal, Flame, Award, ShieldCheck, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Multi-layer Ambient Glow Backdrop */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-500/15 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[300px] bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[350px] h-[250px] bg-emerald-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 text-xs font-bold text-indigo-300 shadow-lg shadow-indigo-500/10 animate-float">
            <Sparkles className="h-4 w-4" />
            <span>Platform Pembelajaran Coding Interaktif di Browser #1 Indonesia</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Belajar Coding{" "}
            <span className="gradient-text">Tingkat Praktis</span>{" "}
            Langsung Eksekusi!
          </h1>

          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Kuasai JavaScript, Python, dan HTML/CSS dengan editor kode di browser, feedback instan, streak harian, serta reward XP seru.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/catalog">
              <Button size="lg" variant="primary" className="gap-3 font-extrabold text-base shadow-xl shadow-indigo-500/30">
                <Play className="h-5 w-5 fill-white" /> Mulai Belajar Gratis
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="secondary" className="gap-2 font-bold">
                Lihat Paket Langganan
              </Button>
            </Link>
          </div>

          {/* Interactive Code Editor Preview Banner */}
          <div className="mt-16 mx-auto max-w-4xl rounded-2xl border border-indigo-500/15 bg-surface shadow-2xl shadow-indigo-500/10 overflow-hidden text-left neon-border">
            <div className="flex items-center justify-between border-b border-border bg-surface-elevated px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-500 shadow-sm shadow-rose-500/30" />
                <div className="h-3 w-3 rounded-full bg-amber-500 shadow-sm shadow-amber-500/30" />
                <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/30" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">main.js — Prayoga Runner</span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1">
                <Zap className="h-3.5 w-3.5 fill-emerald-400" /> Auto-Evaluasi 0.02s
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-6 font-mono text-xs">
              <div className="space-y-2">
                <span className="text-muted-foreground font-semibold">// Editor Kode Interaktif</span>
                <pre className="text-indigo-300 leading-relaxed bg-background/60 p-4 rounded-xl border border-border">
<code>{`function sapaSiswa(nama) {
  return "Halo " + nama + ", Selamat Datang di Prayoga.tech!";
}

console.log(sapaSiswa("Developer"));`}</code>
                </pre>
              </div>

              <div className="space-y-2">
                <span className="text-muted-foreground font-semibold">// Live Output & Test Console</span>
                <div className="bg-background/60 p-4 rounded-xl border border-border space-y-2">
                  <div className="text-emerald-400 font-bold">&gt; Halo Developer, Selamat Datang di Prayoga.tech!</div>
                  <div className="text-xs text-emerald-300 bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
                    ✓ Test Case #1 Lolos (+50 XP)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black text-white tracking-tight">Katalog Kursus Populer</h2>
            <p className="text-sm text-muted-foreground mt-1">Pilih alur belajar pemrograman sesuai minat dan level kamu.</p>
          </div>
          <Link href="/catalog">
            <Button variant="outline" size="sm">Lihat Semua Kursus</Button>
          </Link>
        </div>

        <CourseGrid courses={SEED_COURSES} />
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-black text-white">Mengapa Belajar di Prayoga.tech?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Dirancang khusus untuk memberikan pengalaman belajar pemrograman paling interaktif dan efektif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-6 rounded-2xl border border-border bg-gradient-to-b from-card to-surface space-y-3 hover:border-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
            <div className="h-12 w-12 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center group-hover:shadow-md group-hover:shadow-indigo-500/20 transition-all">
              <Terminal className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Editor Kode di Browser</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Tidak perlu install software rumit. Tulis dan jalankan kode JavaScript, Python, dan HTML secara langsung di browser.
            </p>
          </div>

          <div className="group p-6 rounded-2xl border border-border bg-gradient-to-b from-card to-surface space-y-3 hover:border-amber-500/25 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300">
            <div className="h-12 w-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center group-hover:shadow-md group-hover:shadow-amber-500/20 transition-all">
              <Flame className="h-6 w-6 fill-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Streak & Gamifikasi XP</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Jaga konsistensi coding harian kamu, kumpulkan XP, naikkan level, dan raih posisi teratas di leaderboard.
            </p>
          </div>

          <div className="group p-6 rounded-2xl border border-border bg-gradient-to-b from-card to-surface space-y-3 hover:border-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300">
            <div className="h-12 w-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center group-hover:shadow-md group-hover:shadow-emerald-500/20 transition-all">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Evaluasi Otomatis Real-time</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Setiap kali kamu mensubmit jawaban, unit test runner kami akan mengecek kebenaran output secara instan.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/80 via-surface to-surface p-10 md:p-16 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-indigo-500/15 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-violet-500/10 blur-[100px] pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight relative z-10">
            Siap Menjadi Developer Handal?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm relative z-10">
            Mulai belajar coding interaktif sekarang. Gratis tanpa perlu kartu kredit!
          </p>
          <div className="pt-2 relative z-10">
            <Link href="/register">
              <Button size="lg" variant="primary" className="font-extrabold px-8 shadow-xl shadow-indigo-500/30">
                Buat Akun Gratis Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
