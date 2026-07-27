"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginWithEmail, registerWithEmail } from "@/features/auth/actions";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface AuthFormProps {
  mode: "login" | "register";
}

export function AuthForm({ mode }: AuthFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    let res;
    if (mode === "register") {
      res = await registerWithEmail(name, email, password);
    } else {
      res = await loginWithEmail(email, password);
    }

    setLoading(false);
    if (res.success) {
      window.location.href = "/dashboard";
    } else {
      setError(res.error || "Terjadi kesalahan.");
    }
  };

  return (
    <div className="w-full max-w-md space-y-6 rounded-2xl border border-border bg-card/90 p-8 shadow-2xl backdrop-blur-xl">
      <div className="text-center space-y-2">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 p-2 shadow-lg shadow-indigo-500/20">
          <Image src="/logo1.png" alt="Prayoga.tech Logo" width={40} height={40} className="h-10 w-10 object-contain" />
        </div>
        <h2 className="text-2xl font-black tracking-tight text-white">
          {mode === "login" ? "Selamat Datang Kembali!" : "Buat Akun Prayoga.tech"}
        </h2>
        <p className="text-xs text-muted-foreground">
          {mode === "login"
            ? "Masuk untuk melanjutkan streak & pengumpulan XP kamu."
            : "Bergabunglah dengan ribuan learner coding Indonesia."}
        </p>
      </div>

      {error && (
        <div className="rounded-lg bg-rose-950/40 border border-rose-500/30 p-3 text-xs text-rose-300">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === "register" && (
          <Input
            label="Nama Lengkap"
            placeholder="Contoh: Prayoga Developer"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <Input
          label="Email Address"
          type="email"
          placeholder="nama@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit" variant="primary" className="w-full font-bold gap-2" isLoading={loading}>
          {mode === "login" ? "Masuk ke Akun" : "Daftar Akun Baru"} <ArrowRight className="h-4 w-4" />
        </Button>
      </form>

      <div className="text-center text-xs text-muted-foreground border-t border-border/60 pt-4">
        {mode === "login" ? (
          <p>
            Belum punya akun?{" "}
            <Link href="/register" className="font-semibold text-primary hover:underline">
              Daftar Sekarang
            </Link>
          </p>
        ) : (
          <p>
            Sudah punya akun?{" "}
            <Link href="/login" className="font-semibold text-primary hover:underline">
              Masuk di sini
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
