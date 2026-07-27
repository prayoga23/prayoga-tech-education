import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Multi-layer ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[200px] bg-violet-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="mb-8 relative z-10">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo1.png"
            alt="Prayoga.tech Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain filter drop-shadow-[0_0_10px_rgba(99,102,241,0.4)]"
          />
          <span className="text-2xl font-black tracking-tight text-white">
            Prayoga<span className="text-indigo-400 font-mono text-sm bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">.tech</span>
          </span>
        </Link>
      </div>
      <div className="relative z-10 w-full max-w-md">{children}</div>
    </div>
  );
}
