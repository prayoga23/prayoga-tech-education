"use client";
import React from "react";
import { ProgrammingLanguage } from "@/types/lesson";
import { LanguageSwitcher } from "./language-switcher";
import { RunButton } from "./run-button";
import { RotateCcw, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface EditorToolbarProps {
  language: ProgrammingLanguage;
  onLanguageChange: (lang: ProgrammingLanguage) => void;
  onRun: () => void;
  onReset: () => void;
  isRunning: boolean;
}

export function EditorToolbar({
  language,
  onLanguageChange,
  onRun,
  onReset,
  isRunning,
}: EditorToolbarProps) {
  return (
    <div className="flex items-center justify-between border-b border-border bg-card px-4 py-2.5">
      <div className="flex items-center gap-3">
        <LanguageSwitcher currentLanguage={language} onSelectLanguage={onLanguageChange} />
        <span className="text-xs text-muted-foreground hidden sm:inline flex items-center gap-1">
          <Monitor className="h-3.5 w-3.5" /> Antigravity IDE Engine
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={onReset} title="Reset Kode Kembali ke Awal">
          <RotateCcw className="h-4 w-4" />
        </Button>
        <RunButton onClick={onRun} isRunning={isRunning} />
      </div>
    </div>
  );
}
