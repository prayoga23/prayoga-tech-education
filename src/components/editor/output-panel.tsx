"use client";
import React, { useState, useEffect } from "react";
import { CodeSubmissionResult, ProgrammingLanguage } from "@/types/lesson";
import { Terminal, CheckCircle, XCircle, Sparkles, Code2, Globe, CheckCircle2, Monitor } from "lucide-react";

export interface OutputPanelProps {
  result: CodeSubmissionResult | null;
  logs: string[];
  error?: string;
  code?: string;
  language?: ProgrammingLanguage;
  customInput?: string;
  onCustomInputChange?: (val: string) => void;
}

export function OutputPanel({
  result,
  logs,
  error,
  code = "",
  language = "javascript",
  customInput = "",
  onCustomInputChange,
}: OutputPanelProps) {
  const isWebLang = language === "html" || language === "css";
  const [activeTab, setActiveTab] = useState<"preview" | "console" | "testsuite">(
    isWebLang ? "preview" : "console"
  );

  // Auto switch tab to preview if language changes to html/css
  useEffect(() => {
    if (isWebLang) {
      setActiveTab("preview");
    }
  }, [language, isWebLang]);

  return (
    <div className="flex flex-col h-full bg-card border-t border-border font-mono text-xs">
      {/* Panel Tab Navigation Header */}
      <div className="flex items-center justify-between border-b border-border bg-muted/80 px-3 py-1.5 text-muted-foreground select-none">
        <div className="flex items-center gap-1">
          {isWebLang && (
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-bold text-[11px] transition-all ${
                activeTab === "preview"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "hover:bg-muted text-muted-foreground"
              }`}
            >
              <Globe className="h-3.5 w-3.5" /> Pratinjau Web (Web Output)
            </button>
          )}

          <button
            onClick={() => setActiveTab("console")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-bold text-[11px] transition-all ${
              activeTab === "console"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "hover:bg-muted text-muted-foreground"
            }`}
          >
            <Terminal className="h-3.5 w-3.5" /> Konsol & Log
          </button>

          <button
            onClick={() => setActiveTab("testsuite")}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-bold text-[11px] transition-all ${
              activeTab === "testsuite"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "hover:bg-muted text-muted-foreground"
            }`}
          >
            <CheckCircle2 className="h-3.5 w-3.5" /> Test Suite
            {result && (
              <span className="ml-1 px-1.5 py-0.2 bg-background/20 rounded-full text-[10px]">
                {result.passedCount}/{result.totalCount}
              </span>
            )}
          </button>
        </div>

        {result && (
          <span
            className={`hidden sm:flex items-center gap-1 font-semibold px-2.5 py-0.5 rounded-full text-[10px] ${
              result.success
                ? "bg-emerald-500/15 text-emerald-600 border border-emerald-500/30"
                : "bg-rose-500/15 text-rose-600 border border-rose-500/30"
            }`}
          >
            {result.success ? <CheckCircle className="h-3 w-3" /> : <XCircle className="h-3 w-3" />}
            {result.passedCount}/{result.totalCount} Passed
          </span>
        )}
      </div>

      <div className="flex-1 p-3 overflow-y-auto space-y-3">
        {/* Tab 1: Live Web Output Preview (W3Schools Style Renderer) */}
        {activeTab === "preview" && (
          <div className="h-full flex flex-col min-h-[200px]">
            <div className="flex items-center justify-between px-3 py-1.5 bg-muted rounded-t-lg border border-b-0 border-border text-[11px] text-muted-foreground font-mono">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="ml-2 font-bold text-foreground">Tampilan Website (Web Output Preview)</span>
              </span>
              <span className="text-[10px] text-muted-foreground">Hasil Kode</span>
            </div>
            <iframe
              title="HTML Web Output Preview"
              srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:20px;margin:0;background:#ffffff;color:#0f172a;}</style></head><body>${code || ""}</body></html>`}
              className="w-full flex-1 min-h-[160px] bg-white rounded-b-lg border border-border shadow-inner"
              sandbox="allow-scripts"
            />
          </div>
        )}

        {/* Tab 2: Console & Execution Logs */}
        {activeTab === "console" && (
          <div className="space-y-3">
            {/* Custom Input Scenario Field */}
            {onCustomInputChange && (
              <div className="bg-muted/50 p-2.5 rounded-lg border border-border">
                <label className="text-muted-foreground font-semibold flex items-center gap-1.5 mb-1.5 text-[11px]">
                  <Code2 className="h-3.5 w-3.5 text-primary" /> Input Scenario (Custom Input):
                </label>
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => onCustomInputChange(e.target.value)}
                  placeholder="Masukkan data input (contoh: Jakarta)"
                  className="w-full bg-background border border-border rounded px-3 py-1.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary text-xs"
                />
              </div>
            )}

            {/* Status Message */}
            {result?.message && (
              <div
                className={`p-3 rounded-lg border flex items-start gap-2.5 ${
                  result.success
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                    : "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400"
                }`}
              >
                <Sparkles className="h-4 w-4 shrink-0 mt-0.5" />
                <span className="font-sans font-medium">{result.message}</span>
              </div>
            )}

            {/* Runtime Error */}
            {error && (
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 font-mono">
                <span className="font-bold">Error:</span> {error}
              </div>
            )}

            <div>
              <span className="text-muted-foreground block mb-1.5 font-semibold">Log Eksekusi Konsol:</span>
              {logs.length > 0 ? (
                <div className="bg-muted p-3 rounded-lg border border-border text-foreground space-y-1">
                  {logs.map((log, index) => (
                    <div key={index} className="flex gap-2">
                      <span className="text-muted-foreground select-none">&gt;</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground italic">Tekan "Jalankan Kode" untuk melihat hasil konsol di sini.</p>
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Scenario Test Cases (Test 1, Test 2, Test 3) */}
        {activeTab === "testsuite" && (
          <div className="space-y-3">
            {result?.testResults && result.testResults.length > 0 ? (
              <div className="space-y-2.5">
                <span className="text-muted-foreground block mb-2 font-semibold">
                  Hasil Pengujian Skenario (Test Suite Cases):
                </span>
                {result.testResults.map((tc, idx) => (
                  <div
                    key={tc.id || idx}
                    className={`p-3 rounded-lg border flex flex-col gap-2 transition-all ${
                      tc.passed
                        ? "bg-emerald-500/5 border-emerald-500/30"
                        : "bg-rose-500/5 border-rose-500/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-semibold text-foreground">
                        {tc.passed ? (
                          <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                        ) : (
                          <XCircle className="h-4 w-4 text-rose-500 shrink-0" />
                        )}
                        <span>Test Case #{idx + 1}: {tc.description || `Test ${idx + 1}`}</span>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                          tc.passed
                            ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                            : "bg-rose-500/20 text-rose-600 dark:text-rose-400"
                        }`}
                      >
                        {tc.passed ? "PASSED" : "FAILED"}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                      {tc.input !== undefined && tc.input !== "" && (
                        <div className="col-span-full flex items-center gap-2 bg-background/60 p-1.5 rounded border border-border/50">
                          <span className="text-muted-foreground font-semibold">Input:</span>
                          <code className="text-primary font-bold">{tc.input}</code>
                        </div>
                      )}
                      <div className="bg-background/60 p-2 rounded border border-border/50">
                        <span className="text-muted-foreground block text-[10px]">Hasil (Actual):</span>
                        <code className="text-foreground font-semibold break-all">{tc.actual}</code>
                      </div>
                      <div className="bg-background/60 p-2 rounded border border-border/50">
                        <span className="text-muted-foreground block text-[10px]">Ekspektasi (Expected):</span>
                        <code className="text-emerald-600 dark:text-emerald-400 font-semibold break-all">
                          {tc.expected}
                        </code>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground italic">Tekan "Jalankan Kode" untuk menguji skenario test case.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


