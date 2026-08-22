import React from 'react';
import { PenTool } from 'lucide-react';
import { BilingualDisplay } from './BilingualDisplay';
import { BilingualText, Language } from '@/data/types';
import Latex from 'react-latex-next';

interface BlockProps {
  content?: BilingualText | string;
  language: Language;
  index?: number;
}

export function SectionHeading({ content, language, index }: BlockProps) {
  // We want to format the heading nicely. Let's say "01 Electric Charge" over a line, then Hindi subtitle.
  // BilingualDisplay with asHeading does something similar, but let's build the visual layout.
  
  return (
    <div className="mb-6 mt-10">
      <div className="flex items-baseline gap-4 mb-2">
        {index !== undefined && (
          <span className="text-red-500 font-bold text-xl opacity-80 english-heading">
            {String(index).padStart(2, '0')}
          </span>
        )}
        <div className="flex-1">
          <BilingualDisplay content={content} language={language} asHeading={true} className="text-2xl md:text-3xl ink-black" />
        </div>
      </div>
      <div className="h-[2px] w-full bg-gradient-to-r from-red-500/40 via-red-500/10 to-transparent rounded-full" />
    </div>
  );
}

export function ConceptBlock({ content, language }: BlockProps) {
  return (
    <div className="mb-4 mt-6">
      <div className="inline-block border border-blue-200 bg-blue-50/50 rounded-lg px-3 py-1 mb-2 shadow-sm">
        <span className="text-blue-800 text-xs font-bold uppercase tracking-wider">💡 Important Concept</span>
      </div>
      <BilingualDisplay content={content} language={language} className="ink-black" />
    </div>
  );
}

export function DefinitionBlock({ content, language }: BlockProps) {
  return (
    <div className="mb-6 mt-6 border-l-4 border-indigo-300 pl-4 py-1">
      <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2 block">Definition</span>
      <BilingualDisplay content={content} language={language} className="ink-black" />
    </div>
  );
}

export function FormulaBlock({ equation, label, language }: { equation: string, label?: BilingualText | string, language: Language }) {
  return (
    <div className="flex justify-center my-8">
      <div className="border border-slate-300 rounded-xl p-6 inline-block transform -rotate-1 relative bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
        <span className="absolute -top-3 -left-2 text-xl opacity-80">📌</span>
        <div className="ink-black font-bold text-2xl md:text-3xl overflow-x-auto text-center px-4">
          <Latex>{`$${equation}$`}</Latex>
        </div>
        {label && (
          <div className="mt-4 pt-3 border-t border-slate-200 text-center text-slate-600">
            <BilingualDisplay content={label} language={language} className="text-sm opacity-90" />
          </div>
        )}
      </div>
    </div>
  );
}

export function ExamTip({ content, language }: BlockProps) {
  return (
    <div className="bg-yellow-50/80 p-4 rounded-xl border border-yellow-200 mb-6 shadow-sm transform rotate-[0.5deg]">
      <div className="flex items-center gap-2 font-bold text-yellow-800 mb-2 text-sm uppercase tracking-wider">
        <PenTool className="w-4 h-4" /> Exam Tip
      </div>
      <BilingualDisplay content={content} language={language} className="text-slate-700" />
    </div>
  );
}

export function HighlightBlock({ content, language }: BlockProps) {
  return (
    <div className="mb-6 mt-2">
      <span className="highlighter-green inline-block px-1 shadow-sm">
        <BilingualDisplay content={content} language={language} />
      </span>
    </div>
  );
}
