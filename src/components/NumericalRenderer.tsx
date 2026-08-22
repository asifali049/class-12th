"use client";

import { Numerical, Language } from "@/data/types";
import { EmptyState } from "./EmptyState";
import { BilingualDisplay } from "./notebook/BilingualDisplay";
import Latex from "react-latex-next";
import { Lightbulb, Target } from "lucide-react";

interface NumericalRendererProps {
  numericals?: Numerical[];
  language: Language;
}

export default function NumericalRenderer({ numericals, language }: NumericalRendererProps) {
  if (!numericals || numericals.length === 0) {
    return <EmptyState title="Numericals" message="Practice problems for this chapter are currently being added." />;
  }

  const difficultyColors = {
    easy: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 border-green-200",
    medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-500 border-yellow-200",
    hard: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400 border-red-200",
  };

  const latexDelimiters = [
    { left: '$$', right: '$$', display: true },
    { left: '\\[', right: '\\]', display: true },
    { left: '$', right: '$', display: false },
    { left: '\\(', right: '\\)', display: false }
  ];

  const renderMathLine = (line: string) => {
    const trimmed = line.trim();
    if (!trimmed) return null;
    if (trimmed.includes('$') || trimmed.includes('\\[')) {
      return <Latex delimiters={latexDelimiters} strict={false}>{trimmed}</Latex>;
    }
    if (trimmed.includes('\\') || trimmed.includes('=') || trimmed.includes('^') || trimmed.includes('_')) {
      return <Latex delimiters={latexDelimiters} strict={false}>{`$$${trimmed}$$`}</Latex>;
    }
    return <span className="block mb-1">{trimmed}</span>;
  };

  return (
    <div className="space-y-12 pb-10">
      {numericals.map((num, index) => (
        <div key={num.id} className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">
              Problem {index + 1}
            </h2>
            <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${difficultyColors[num.difficulty]}`}>
              {num.difficulty === 'hard' ? 'Board Level' : num.difficulty}
            </div>
          </div>

          <div className="text-lg md:text-xl text-slate-800 dark:text-slate-200 leading-relaxed mb-8">
            <BilingualDisplay content={num.question} language={language} />
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Given</span>
                <div className="text-slate-700 dark:text-slate-300"><BilingualDisplay content={num.given} language={language} /></div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Required</span>
                <div className="text-slate-700 dark:text-slate-300"><BilingualDisplay content={num.required} language={language} /></div>
              </div>
            </div>

            <div className="bg-blue-50/50 dark:bg-blue-900/10 p-5 rounded-xl border-l-4 border-blue-500">
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block mb-2">Formula</span>
              <div className="text-lg text-blue-900 dark:text-blue-200 overflow-x-auto pb-2">
                {num.formula.split('\n').map((line, i) => (
                  <div key={i}>{renderMathLine(line)}</div>
                ))}
              </div>
            </div>

            <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-700 space-y-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Substitution</span>
                <div className="text-slate-700 dark:text-slate-300 overflow-x-auto pb-2">
                  {num.substitution.split('\n').map((line, i) => (
                    <div key={i}>{renderMathLine(line)}</div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Calculation</span>
                <div className="text-slate-700 dark:text-slate-300 overflow-x-auto pb-2">
                  {num.calculation.split('\n').map((line, i) => (
                    <div key={i}>{renderMathLine(line)}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-2xl border border-green-200 dark:border-green-900/50 flex flex-wrap items-center gap-4">
              <div className="bg-green-100 dark:bg-green-800/50 p-3 rounded-xl shrink-0">
                <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="overflow-x-auto">
                <span className="text-xs font-bold text-green-600 dark:text-green-500 uppercase tracking-widest block mb-1">Final Answer</span>
                <div className="text-xl md:text-2xl font-bold text-green-900 dark:text-green-100 flex items-center gap-2">
                  <Latex>{`$${num.finalAnswer}$`}</Latex> 
                  <span className="text-lg font-medium text-green-700 dark:text-green-300">
                    {num.unit && <Latex>{`$${num.unit}$`}</Latex>}
                  </span>
                </div>
              </div>
            </div>

            {num.examTip && (
              <div className="mt-6 flex gap-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl text-purple-900 dark:text-purple-200">
                <Lightbulb className="w-5 h-5 shrink-0 text-purple-600 dark:text-purple-400" />
                <div className="text-sm">
                  <span className="font-bold mr-2">Exam Tip:</span>
                  <span><BilingualDisplay content={num.examTip} language={language} /></span>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
