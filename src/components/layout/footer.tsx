import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-surface to-background text-muted-foreground mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo1.png"
                alt="Prayoga.tech Logo"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
              <span className="text-lg font-bold text-white">Prayoga.tech</span>
            </div>
            <p className="text-sm leading-relaxed">
              Platform pembelajaran coding interaktif bahasa Indonesia dengan browser code editor & gamifikasi XP real-time.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/catalog" className="hover:text-indigo-300 transition-colors">Katalog Kursus</Link></li>
              <li><Link href="/pricing" className="hover:text-indigo-300 transition-colors">Harga & Langganan</Link></li>
              <li><Link href="/about" className="hover:text-indigo-300 transition-colors">Tentang Kami</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Bahasa & Trek</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/catalog" className="hover:text-indigo-300 transition-colors">JavaScript</Link></li>
              <li><Link href="/catalog" className="hover:text-indigo-300 transition-colors">Python Masterclass</Link></li>
              <li><Link href="/catalog" className="hover:text-indigo-300 transition-colors">HTML & CSS Web</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Komunitas</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-surface-elevated border border-border hover:text-indigo-300 hover:border-indigo-500/30 hover:shadow-md hover:shadow-indigo-500/10 transition-all duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-surface-elevated border border-border hover:text-indigo-300 hover:border-indigo-500/30 hover:shadow-md hover:shadow-indigo-500/10 transition-all duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} Prayoga.tech. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">
            Dibuat dengan <Heart className="h-3.5 w-3.5 text-rose-400 fill-rose-400" /> untuk developer Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}
