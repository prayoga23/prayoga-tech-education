"use client";
import { useState, useEffect } from "react";
import { getLocalSession } from "@/lib/auth/session";
import { UserProfile } from "@/types/user";

export function useUser() {
  const [user, setUser] = useState<UserProfile | null>(null);

  const refreshUser = () => {
    setUser(getLocalSession());
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return { user, refreshUser };
}
