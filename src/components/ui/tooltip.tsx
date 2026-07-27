"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils/cn";

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

export function Tooltip({ content, children, position = "top" }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  const positionStyles = {
    top: "-top-9 left-1/2 -translate-x-1/2",
    bottom: "-bottom-9 left-1/2 -translate-x-1/2",
    left: "-left-28 top-1/2 -translate-y-1/2",
    right: "-right-28 top-1/2 -translate-y-1/2",
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={cn(
            "absolute z-50 whitespace-nowrap rounded-md bg-popover border border-indigo-500/15 px-2.5 py-1 text-xs text-popover-foreground shadow-lg shadow-indigo-500/10 pointer-events-none transition-all duration-200 animate-fade-in",
            positionStyles[position]
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
