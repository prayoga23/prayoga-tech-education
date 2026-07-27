"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ProgrammingLanguage } from "@/types/lesson";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-card text-muted-foreground font-mono text-sm">
      Memuat Editor Kode Antigravity...
    </div>
  ),
});

export interface CodeEditorProps {
  value: string;
  onChange: (val: string) => void;
  language: ProgrammingLanguage;
}

export function CodeEditor({ value, onChange, language }: CodeEditorProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const monacoLanguage = language === "html" ? "html" : language;

  return (
    <div className="relative h-full w-full bg-background overflow-hidden">
      {mounted ? (
        <MonacoEditor
          height="100%"
          language={monacoLanguage}
          theme="vs-dark"
          value={value}
          onChange={(val) => onChange(val || "")}
          options={{
            fontSize: 14,
            fontFamily: "JetBrains Mono, Fira Code, monospace",
            minimap: { enabled: false },
            lineNumbers: "on",
            roundedSelection: true,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            padding: { top: 12, bottom: 12 },
          }}
        />
      ) : (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-full w-full resize-none bg-background p-4 font-mono text-sm text-foreground focus:outline-none"
        />
      )}
    </div>
  );
}
