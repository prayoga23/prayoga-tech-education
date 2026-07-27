import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prayoga.tech - Interactive Coding Learning Platform",
  description: "Platform belajar coding interaktif di browser dengan tantangan real-time, gamifikasi XP, streak harian, dan IDE Antigravity.",
  icons: {
    icon: "/logo1.png",
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark">
      <body className="bg-background text-foreground antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
