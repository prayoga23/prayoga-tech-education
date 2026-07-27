"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils/cn";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export interface ToastProps {
  id?: string;
  type?: "success" | "error" | "info";
  message: string;
  onClose?: () => void;
}

export function Toast({ type = "info", message, onClose }: ToastProps) {
  const icons = {
    success: <CheckCircle2 className="h-5 w-5 text-emerald-400" />,
    error: <AlertCircle className="h-5 w-5 text-rose-400" />,
    info: <Info className="h-5 w-5 text-indigo-400" />,
  };

  const bgStyles = {
    success: "border-emerald-500/20 bg-emerald-950/60 text-emerald-200 shadow-lg shadow-emerald-500/10",
    error: "border-rose-500/20 bg-rose-950/60 text-rose-200 shadow-lg shadow-rose-500/10",
    info: "border-indigo-500/20 bg-indigo-950/60 text-indigo-200 shadow-lg shadow-indigo-500/10",
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl border p-4 backdrop-blur-xl transition-all duration-300 animate-slide-up",
        bgStyles[type]
      )}
    >
      {icons[type]}
      <span className="text-sm font-medium">{message}</span>
      {onClose && (
        <button onClick={onClose} className="ml-auto opacity-70 hover:opacity-100 transition-opacity">
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
