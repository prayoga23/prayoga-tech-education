"use client";
import React from "react";
import { cn } from "@/lib/utils/cn";
import { X } from "lucide-react";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Dialog({ isOpen, onClose, title, children, className }: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in p-4">
      <div
        className={cn(
          "relative w-full max-w-lg rounded-2xl border border-indigo-500/15 bg-card p-6 shadow-2xl shadow-indigo-500/10 transition-all duration-300 animate-slide-up",
          className
        )}
      >
        <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
          {title && <h3 className="text-lg font-bold text-white">{title}</h3>}
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted-foreground hover:bg-white/5 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
