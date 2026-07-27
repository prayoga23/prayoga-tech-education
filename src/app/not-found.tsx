import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background text-center px-4 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 p-3 mb-6 shadow-lg shadow-indigo-500/15 relative z-10">
        <Image src="/logo1.png" alt="Prayoga.tech Logo" width={48} height={48} className="h-12 w-12 object-contain opacity-80 grayscale group-hover:grayscale-0 transition-all" />
      </div>
      <h1 className="text-4xl font-black text-white relative z-10">404 - Halaman Tidak Ditemukan</h1>
      <p className="text-muted-foreground mt-2 max-w-md text-sm relative z-10">
        Maaf, halaman atau materi coding yang kamu cari tidak tersedia atau telah dipindahkan.
      </p>
      <Link href="/" className="mt-6 relative z-10">
        <Button variant="primary" className="gap-2">
          <ArrowLeft className="h-4 w-4" /> Kembali ke Beranda
        </Button>
      </Link>
    </div>
  );
}
