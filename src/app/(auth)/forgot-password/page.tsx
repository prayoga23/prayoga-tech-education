"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, KeyRound, ShieldAlert } from "lucide-react";
import { useAuth } from "@/context/auth-context";

export default function ForgotPasswordPage() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await resetPassword(email);
    setLoading(false);

    if (res.success) {
      setSubmitted(true);
    } else {
      setError(res.error || "Gagal mengirimkan instruksi pemulihan kata sandi.");
    }
  };

  return (
    <div className="w-full max-w-md space-y-6 rounded-2xl border border-border bg-card/90 p-8 shadow-2xl backdrop-blur-xl">
      <div className="text-center space-y-2">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-lg shadow-amber-500/10">
          <KeyRound className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-black tracking-tight text-white">Reset Password</h2>
        <p className="text-xs text-muted-foreground">
          Masukkan email yang terdaftar untuk menerima instruksi pemulihan kata sandi.
        </p>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-xl bg-rose-950/40 border border-rose-500/30 p-3 text-xs text-rose-300">
          <ShieldAlert className="h-4 w-4 shrink-0 text-rose-400" />
          <span>{error}</span>
        </div>
      )}

      {submitted ? (
        <div className="space-y-4 text-center">
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300">
            Tautan reset password telah dikirimkan ke <strong>{email}</strong>. Silakan periksa kotak masuk email Anda.
          </div>
          <Link href="/login">
            <Button variant="outline" className="w-full gap-2">
              <ArrowLeft className="h-4 w-4" /> Kembali ke Halaman Masuk
            </Button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="nama@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="primary" className="w-full font-bold h-11" isLoading={loading}>
            Kirim Tautan Reset
          </Button>
          <div className="text-center pt-2">
            <Link href="/login" className="text-xs text-muted-foreground hover:text-white flex items-center justify-center gap-1">
              <ArrowLeft className="h-3.5 w-3.5" /> Batal & Kembali
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}
