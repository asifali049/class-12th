"use client";

import { useState } from "react";
import { Diagram, Language } from "@/data/types";
import { EmptyState } from "./EmptyState";
import { BilingualDisplay } from "./notebook/BilingualDisplay";
import { ZoomIn, ZoomOut, Maximize2, Tag } from "lucide-react";

interface DiagramRendererProps {
  diagrams?: Diagram[];
  language: Language;
}

export default function DiagramRenderer({ diagrams, language }: DiagramRendererProps) {
  if (!diagrams || diagrams.length === 0) {
    return <EmptyState title="Diagrams" message="High-quality scalable diagrams for this chapter are currently being added." />;
  }

  return (
    <div className="space-y-12 pb-10">
      {diagrams.map((diag) => (
        <DiagramViewer key={diag.id} diagram={diag} language={language} />
      ))}
    </div>
  );
}

function DiagramViewer({ diagram, language }: { diagram: Diagram, language: Language }) {
  const [scale, setScale] = useState(1);
  const [showLabels, setShowLabels] = useState(true);

  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm">
      <div className="p-4 md:p-6 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-slate-50 dark:bg-slate-900/50">
        <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100"><BilingualDisplay content={diagram.title} language={language} asHeading={true} /></h2>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowLabels(!showLabels)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${showLabels ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400' : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}
          >
            <Tag className="w-4 h-4" />
            {showLabels ? 'Hide Labels' : 'Show Labels'}
          </button>
          <div className="h-6 w-px bg-slate-300 dark:bg-slate-700 mx-1"></div>
          <button onClick={() => setScale(prev => Math.max(0.5, prev - 0.2))} className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400"><ZoomOut className="w-5 h-5" /></button>
          <span className="text-xs font-bold w-10 text-center text-slate-600 dark:text-slate-400">{Math.round(scale * 100)}%</span>
          <button onClick={() => setScale(prev => Math.min(2.5, prev + 0.2))} className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400"><ZoomIn className="w-5 h-5" /></button>
          <button onClick={() => setScale(1)} className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 ml-1"><Maximize2 className="w-5 h-5" /></button>
        </div>
      </div>
      
      <div className="p-8 bg-grid-slate-100 dark:bg-grid-slate-900 overflow-auto relative min-h-[400px] flex items-center justify-center">
        <div 
          className="relative transition-transform duration-200 ease-out origin-center"
          style={{ transform: `scale(${scale})` }}
        >
          {/* SVG Content */}
          <div dangerouslySetInnerHTML={{ __html: diagram.svgContent || (diagram as any).svgCode || '' }} className="text-slate-900 dark:text-slate-100 diagram-svg-container" />
          
          {/* Overlay Labels */}
          {showLabels && diagram.labels?.map((label, index) => (
            <div 
              key={label.id || `label-${index}`}
              className="absolute bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 px-2 py-1 rounded shadow-sm text-xs font-bold whitespace-nowrap pointer-events-none text-slate-800 dark:text-slate-200"
              style={{ left: `${label.x}%`, top: `${label.y}%`, transform: 'translate(-50%, -50%)' }}
            >
              <BilingualDisplay content={label.text} language={language} />
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 md:p-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed"><BilingualDisplay content={diagram.description} language={language} /></div>
      </div>
    </div>
  );
}
