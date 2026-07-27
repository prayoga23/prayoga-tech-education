"use client";
import { useState, useEffect } from "react";
import { getLocalSession } from "@/lib/auth/session";
import { UserProfile } from "@/types/user";

export function useAuth() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = getLocalSession();
    setUser(session);
    setLoading(false);
  }, []);

  return { user, loading, isAuthenticated: !!user };
}
