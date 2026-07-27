import { ProtectedRoute } from "@/components/auth/protected-route";

export default function LearningLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background text-foreground overflow-hidden flex flex-col">
        {children}
      </div>
    </ProtectedRoute>
  );
}
