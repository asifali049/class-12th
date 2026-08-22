"use client";

import { FileText, Clock } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  message?: string;
}

export function EmptyState({ title = "Content is being prepared", message = "This section is currently under development and will be available soon." }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-50/50 dark:bg-slate-900/50 mt-8">
      <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-6 relative">
        <FileText className="w-10 h-10" />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-500 rounded-full border-4 border-white dark:border-slate-950 flex items-center justify-center">
          <Clock className="w-4 h-4" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">{message}</p>
    </div>
  );
}
