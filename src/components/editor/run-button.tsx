"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export interface RunButtonProps {
  onClick: () => void;
  isRunning: boolean;
}

export function RunButton({ onClick, isRunning }: RunButtonProps) {
  return (
    <Button
      variant="success"
      size="sm"
      onClick={onClick}
      isLoading={isRunning}
      className="gap-2 font-bold px-4 shadow-emerald-500/20"
    >
      <Play className="h-4 w-4 fill-white" />
      Jalankan Kode
    </Button>
  );
}
