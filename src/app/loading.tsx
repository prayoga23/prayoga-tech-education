export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background text-muted-foreground font-mono text-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-indigo-500/30 border-t-indigo-500" />
          <div className="absolute inset-0 h-10 w-10 rounded-full blur-md bg-indigo-500/20 animate-pulse" />
        </div>
        <span className="text-muted-foreground">Memuat platform pembelajaran...</span>
      </div>
    </div>
  );
}
