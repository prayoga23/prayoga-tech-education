"use client";
import { useState, useEffect } from "react";
import { getLocalSession } from "@/lib/auth/session";
import { UserProfile } from "@/types/user";

export function useAuthFeature() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const active = getLocalSession();
    setUser(active);
    setLoading(false);
  }, []);

  return { user, loading, setUser };
}
