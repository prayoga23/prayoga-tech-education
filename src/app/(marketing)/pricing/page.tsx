import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Crown } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-12 relative">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="text-center space-y-3 relative z-10">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Pilih Paket Belajar Kamu</h1>
        <p className="text-muted-foreground text-sm max-w-lg mx-auto">
          Nikmati akses tanpa batas ke seluruh materi, editor kode interaktif, tantangan streak, dan leaderboard global.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 relative z-10">
        {/* Free Plan */}
        <Card className="border border-border p-4 flex flex-col justify-between">
          <div>
            <CardHeader className="space-y-2">
              <Badge variant="outline" className="w-fit">Starter</Badge>
              <CardTitle className="text-2xl">Akses Pemula</CardTitle>
              <CardDescription>Cocok untuk mencoba materi gratis pertama.</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-black text-white">Rp 0</span>
                <span className="text-muted-foreground text-xs"> / selamanya</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Akses 3 modul gratis pertama</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Editor kode dasar di browser</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Leaderboard umum</span>
              </div>
            </CardContent>
          </div>
          <CardFooter>
            <Link href="/register" className="w-full">
              <Button variant="outline" className="w-full">Mulai Gratis</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Pro Plan */}
        <Card className="border-2 border-indigo-500/40 bg-gradient-to-b from-indigo-950/60 via-card to-card p-4 flex flex-col justify-between shadow-2xl shadow-indigo-500/15 relative animate-border-glow">
          <div className="absolute -top-3 right-6">
            <Badge variant="primary" className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold border-0 shadow-lg shadow-indigo-500/30 gap-1">
              <Crown className="h-3 w-3" /> Paling Populer
            </Badge>
          </div>
          <div>
            <CardHeader className="space-y-2">
              <Badge variant="primary" className="w-fit gap-1">
                <Sparkles className="h-3 w-3" /> PRO Access
              </Badge>
              <CardTitle className="text-2xl">Langganan Pro Full</CardTitle>
              <CardDescription>Akses seluruh materi, sertifikat, dan bantuan AI.</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-black text-white">Rp 49.000</span>
                <span className="text-muted-foreground text-xs"> / bulan</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-foreground/80">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Akses <strong>Seluruh Kursus & Materi</strong> (Unlimited)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Antigravity IDE Code Execution Engine</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Gelar & Lencana Spesial di Leaderboard</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Sertifikat Kelulusan Resmi Prayoga.tech</span>
              </div>
            </CardContent>
          </div>
          <CardFooter>
            <Link href="/register" className="w-full">
              <Button variant="primary" className="w-full font-bold">Berlangganan PRO</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
