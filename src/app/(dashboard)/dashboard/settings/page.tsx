"use client";
import React, { useState } from "react";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { useAuth } from "@/hooks/use-auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { setLocalSession } from "@/lib/auth/session";

export default function DashboardSettingsPage() {
  const { user } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName || "Pro Learner");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      const updated = { ...user, displayName };
      setLocalSession(updated);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <DashboardHeader
        title="Pengaturan Profil"
        description="Kelola informasi akun dan preferensi pengembang kamu."
      />

      {saved && (
        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300">
          Profil berhasil diperbarui!
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6 rounded-2xl border border-border bg-card p-6">
        <Input
          label="Nama Tampilan (Display Name)"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <Input
          label="Email Address"
          value={user?.email || "developer@prayoga.tech"}
          disabled
        />
        <Button type="submit" variant="primary" className="font-bold">
          Simpan Perubahan
        </Button>
      </form>
    </div>
  );
}
