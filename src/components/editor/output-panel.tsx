"use client";
import React from "react";
import { CodeSubmissionResult } from "@/types/lesson";
import { Terminal, CheckCircle, XCircle, Sparkles, Code2, ArrowRight } from "lucide-react";

export interface OutputPanelProps {
  result: CodeSubmissionResult | null;
  logs: string[];
  error?: string;
  customInput?: string;
  onCustomInputChange?: (val: string) => void;
}

export function OutputPanel({
  result,
  logs,
  error,
  customInput = "",
  onCustomInputChange,
}: OutputPanelProps) {
  return (
    <div className="flex flex-col h-full bg-card border-t border-border font-mono text-xs">
      {/* Panel Header */}
      <div className="flex items-center justify-between border-b border-border bg-muted px-4 py-2 text-muted-foreground">
        <span className="flex items-center gap-2 font-bold text-foreground">
          <Terminal className="h-4 w-4 text-primary" /> Console Output & Test Suite
        </span>
        {result && (
          <span
            className={`flex items-center gap-1 font-semibold px-2.5 py-0.5 rounded-full text-[11px] ${
              result.success
                ? "bg-emerald-500/15 text-emerald-600 border border-emerald-500/30"
                : "bg-rose-500/15 text-rose-600 border border-rose-500/30"
            }`}
          >
            {result.success ? <CheckCircle className="h-3.5 w-3.5" /> : <XCircle className="h-3.5 w-3.5" />}
            {result.passedCount}/{result.totalCount} Test Passed
          </span>
        )}
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {/* Custom Input Scenario Field if supported */}
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

        {/* Logs */}
        <div>
          <span className="text-muted-foreground block mb-1.5 font-semibold">Log Eksekusi:</span>
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

        {/* Scenario Test Cases (Test 1, Test 2, Test 3) */}
        {result?.testResults && result.testResults.length > 0 && (
          <div className="pt-2 space-y-2">
            <span className="text-muted-foreground block mb-2 font-semibold">
              Hasil Pengujian Skenario (Test Suite Cases):
            </span>
            <div className="space-y-2.5">
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
          </div>
        )}
      </div>
    </div>
  );
}

