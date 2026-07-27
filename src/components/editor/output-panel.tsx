"use client";
import React from "react";
import { CodeSubmissionResult } from "@/types/lesson";
import { Terminal, CheckCircle, XCircle, Sparkles } from "lucide-react";

export interface OutputPanelProps {
  result: CodeSubmissionResult | null;
  logs: string[];
  error?: string;
}

export function OutputPanel({ result, logs, error }: OutputPanelProps) {
  return (
    <div className="flex flex-col h-full bg-card border-t border-border font-mono text-xs">
      <div className="flex items-center justify-between border-b border-border bg-muted px-4 py-2 text-muted-foreground">
        <span className="flex items-center gap-2 font-bold text-foreground">
          <Terminal className="h-4 w-4 text-primary" /> Console Output & Test Suite
        </span>
        {result && (
          <span
            className={`flex items-center gap-1 font-semibold px-2 py-0.5 rounded text-[11px] ${
              result.success ? "bg-emerald-100/50 text-emerald-600" : "bg-rose-100/50 text-rose-600"
            }`}
          >
            {result.success ? <CheckCircle className="h-3.5 w-3.5" /> : <XCircle className="h-3.5 w-3.5" />}
            {result.passedCount}/{result.totalCount} Test Passed
          </span>
        )}
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {result?.message && (
          <div
            className={`p-3 rounded-lg border flex items-start gap-2 ${
              result.success
                ? "bg-emerald-100 border-emerald-300 text-emerald-700"
                : "bg-rose-100 border-rose-300 text-rose-700"
            }`}
          >
            <Sparkles className="h-4 w-4 shrink-0 mt-0.5" />
            <span>{result.message}</span>
          </div>
        )}

        {error && (
          <div className="p-3 rounded-lg bg-rose-100 border border-rose-300 text-rose-700 font-mono">
            <span className="font-bold">Error:</span> {error}
          </div>
        )}

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

        {result?.testResults && result.testResults.length > 0 && (
          <div className="pt-2">
            <span className="text-muted-foreground block mb-2 font-semibold">Detail Pengujian:</span>
            <div className="space-y-2">
              {result.testResults.map((tc, idx) => (
                <div
                  key={tc.id}
                  className={`p-2.5 rounded-lg border flex items-center justify-between ${
                    tc.passed
                      ? "bg-emerald-100/50 border-emerald-300/50 text-emerald-700"
                      : "bg-rose-100/50 border-rose-300/50 text-rose-700"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {tc.passed ? (
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-rose-600" />
                    )}
                    <span>{tc.description || `Test Case #${idx + 1}`}</span>
                  </div>
                  <span className="text-[11px] opacity-80">
                    Hasil: <code className="bg-muted-foreground/20 px-1 py-0.5 rounded">{tc.actual}</code>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
