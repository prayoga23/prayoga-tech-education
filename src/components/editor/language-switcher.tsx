"use client";
import React from "react";
import { ProgrammingLanguage } from "@/types/lesson";
import { SUPPORTED_LANGUAGES } from "@/lib/constants/languages";
import { Code2 } from "lucide-react";

export interface LanguageSwitcherProps {
  currentLanguage: ProgrammingLanguage;
  onSelectLanguage: (lang: ProgrammingLanguage) => void;
}

export function LanguageSwitcher({ currentLanguage, onSelectLanguage }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1 bg-muted/60 p-1 rounded-lg border border-border">
      {SUPPORTED_LANGUAGES.map((lang) => {
        const isSelected = currentLanguage === lang.id;
        return (
          <button
            key={lang.id}
            onClick={() => onSelectLanguage(lang.id)}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
              isSelected
                ? "bg-primary text-white shadow-sm font-bold"
                : "text-muted-foreground hover:text-white"
            }`}
          >
            {lang.name}
          </button>
        );
      })}
    </div>
  );
}
