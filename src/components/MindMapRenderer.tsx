"use client";

import { MindMapNode, Language } from "@/data/types";
import { EmptyState } from "./EmptyState";
import { BilingualDisplay } from "./notebook/BilingualDisplay";
import { ChevronDown, ChevronRight, BrainCircuit } from "lucide-react";
import { useState } from "react";

interface MindMapRendererProps {
  mindmap?: MindMapNode;
  language: Language;
}

export default function MindMapRenderer({ mindmap, language }: MindMapRendererProps) {
  if (!mindmap) {
    return <EmptyState title="Mind Map" message="The interactive mind map for this chapter is being prepared." />;
  }

  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm overflow-hidden min-h-[500px]">
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="bg-purple-100 dark:bg-purple-900/40 p-2 rounded-xl text-purple-600 dark:text-purple-400">
          <BrainCircuit className="w-6 h-6" />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">Chapter Mind Map</h2>
      </div>

      <div className="pl-2 overflow-auto max-h-[600px] mindmap-scroll">
        <MindMapNodeView node={mindmap} isRoot={true} language={language} />
      </div>
    </div>
  );
}

function MindMapNodeView({ node, isRoot = false, language }: { node: MindMapNode; isRoot?: boolean; language: Language }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className={`relative ${isRoot ? '' : 'ml-8 mt-4'}`}>
      {!isRoot && (
        <div className="absolute -left-6 top-5 w-6 h-px bg-slate-300 dark:bg-slate-700"></div>
      )}
      {hasChildren && isExpanded && !isRoot && (
        <div className="absolute -left-6 top-5 bottom-0 w-px bg-slate-300 dark:bg-slate-700"></div>
      )}

      <div className="flex items-start gap-2 relative z-10">
        {hasChildren && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-1 p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 z-10"
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        )}
        {!hasChildren && <div className="w-6 h-6 shrink-0" />}

        <div className={`
          py-2 px-4 rounded-xl border font-medium
          ${isRoot 
            ? 'bg-blue-600 border-blue-700 text-white text-lg shadow-md' 
            : hasChildren
              ? 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-900/20 dark:border-blue-800/50 dark:text-blue-200'
              : 'bg-white border-slate-200 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300'
          }
        `}>
          <BilingualDisplay content={node.label} language={language} />
        </div>
      </div>

      {hasChildren && isExpanded && (
        <div className="relative">
          {isRoot && (
            <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-300 dark:bg-slate-700"></div>
          )}
          <div className={`${isRoot ? 'ml-3' : 'ml-0'}`}>
            {node.children!.map((child) => (
              <MindMapNodeView key={child.id} node={child} language={language} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
