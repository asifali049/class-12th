import React from 'react';

export const ContentSkeleton = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-4 px-4 sm:px-6">
      <div className="animate-pulse space-y-6">
        {/* Title Skeleton */}
        <div className="h-8 bg-slate-200 dark:bg-slate-700/50 rounded w-1/3"></div>
        
        {/* Card Skeleton 1 */}
        <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="h-6 bg-slate-200 dark:bg-slate-700/50 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 dark:bg-slate-700/50 rounded w-full"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700/50 rounded w-5/6"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700/50 rounded w-4/6"></div>
          </div>
        </div>

        {/* Card Skeleton 2 */}
        <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="h-6 bg-slate-200 dark:bg-slate-700/50 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 dark:bg-slate-700/50 rounded w-full"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700/50 rounded w-11/12"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700/50 rounded w-5/6"></div>
          </div>
          {/* Formula or Diagram Box Skeleton */}
          <div className="mt-6 h-24 bg-slate-100 dark:bg-slate-700/30 rounded-xl border border-slate-200 dark:border-slate-700 border-dashed"></div>
        </div>
      </div>
    </div>
  );
};
