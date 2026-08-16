"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";
import { ArrowRight, Eye, EyeOff, Lock, Mail, User, ShieldAlert } from "lucide-react";

export interface AuthFormProps {
  mode: "login" | "register";
}

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const { loginWithEmail, registerWithEmail, loginWithGoogle } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Client-side validations
    if (mode === "register") {
      if (!name.trim()) {
        setError("Silakan masukkan nama lengkap Anda.");
        return;
      }
      if (password.length < 6) {
        setError("Kata sandi harus terdiri dari minimal 6 karakter.");
        return;
      }
      if (password !== confirmPassword) {
        setError("Konfirmasi kata sandi tidak cocok.");
        return;
      }
    }

    setLoading(true);

    let res;
    if (mode === "register") {
      res = await registerWithEmail(name, email, password);
    } else {
      res = await loginWithEmail(email, password);
    }

    setLoading(false);

    if (res.success) {
      router.push("/dashboard");
      router.refresh();
    } else {
      setError(res.error || "Terjadi kesalahan pada koneksi server.");
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setGoogleLoading(true);
    const res = await loginWithGoogle();
    setGoogleLoading(false);

    if (res.success) {
      router.push("/dashboard");
      router.refresh();
    } else {
      setError(res.error || "Gagal melakukan autentikasi dengan akun Google.");
    }
  };

  return (
    <div className="w-full max-w-md space-y-6 rounded-2xl border border-border/80 bg-card/90 p-8 shadow-2xl backdrop-blur-xl transition-all duration-300">
      {/* Header logo & title */}
      <div className="text-center space-y-2">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 p-2 shadow-lg shadow-indigo-500/10">
          <Image
            src="/logo1.png"
            alt="Prayoga.tech Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]"
          />
        </div>
        <h2 className="text-2xl font-black tracking-tight text-white">
          {mode === "login" ? "Selamat Datang Kembali!" : "Buat Akun Prayoga.tech"}
        </h2>
        <p className="text-xs text-muted-foreground">
          {mode === "login"
            ? "Masuk untuk melanjutkan streak & pengumpulan XP kamu."
            : "Bergabunglah dengan ribuan learner coding di Indonesia."}
        </p>
      </div>

      {/* Google OAuth Button */}
      <Button
        type="button"
        variant="secondary"
        onClick={handleGoogleSignIn}
        isLoading={googleLoading}
        className="w-full font-semibold border-border hover:border-indigo-500/40 bg-surface-elevated hover:bg-muted text-foreground gap-2.5 h-11"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
        {mode === "login" ? "Masuk dengan Google" : "Daftar dengan Google"}
      </Button>

      {/* Divider */}
      <div className="relative flex items-center justify-center">
        <div className="w-full border-t border-border/60" />
        <span className="absolute bg-card px-3 text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
          atau email
        </span>
      </div>

      {/* Error alert */}
      {error && (
        <div className="flex items-center gap-2 rounded-xl bg-rose-950/40 border border-rose-500/30 p-3 text-xs text-rose-300 animate-in fade-in slide-in-from-top-1">
          <ShieldAlert className="h-4 w-4 shrink-0 text-rose-400" />
          <span>{error}</span>
        </div>
      )}

      {/* Form */}
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

        <div className="space-y-1">
          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[34px] text-muted-foreground hover:text-white transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {mode === "register" && (
          <div className="relative">
            <Input
              label="Konfirmasi Password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}

        {mode === "login" && (
          <div className="flex justify-end pt-1">
            <Link
              href="/forgot-password"
              className="text-xs text-indigo-400 hover:text-indigo-300 font-medium hover:underline transition-colors"
            >
              Lupa Password?
            </Link>
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          className="w-full font-bold gap-2 h-11 text-sm shadow-indigo-500/20"
          isLoading={loading}
        >
          {mode === "login" ? "Masuk ke Akun" : "Daftar Akun Baru"}{" "}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>

      {/* Footer link */}
      <div className="text-center text-xs text-muted-foreground border-t border-border/60 pt-4">
        {mode === "login" ? (
          <p>
            Belum punya akun?{" "}
            <Link href="/register" className="font-bold text-indigo-400 hover:text-indigo-300 hover:underline">
              Daftar Sekarang
            </Link>
          </p>
        ) : (
          <p>
            Sudah punya akun?{" "}
            <Link href="/login" className="font-bold text-indigo-400 hover:text-indigo-300 hover:underline">
              Masuk di sini
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
