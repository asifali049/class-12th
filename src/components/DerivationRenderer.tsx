"use client";

import { Derivation, Language } from "@/data/types";
import { EmptyState } from "./EmptyState";
import { BilingualDisplay } from "./notebook/BilingualDisplay";
import Latex from "react-latex-next";
import { Lightbulb } from "lucide-react";

interface DerivationRendererProps {
  derivations?: Derivation[];
  language: Language;
}

export default function DerivationRenderer({ derivations, language }: DerivationRendererProps) {
  if (!derivations || derivations.length === 0) {
    return <EmptyState title="Derivations" message="Step-by-step derivations for this chapter are currently being added." />;
  }

  return (
    <div className="space-y-12 pb-10">
      {derivations.map((deriv, index) => (
        <div key={deriv.id} className="border-b-2 border-slate-200 dark:border-slate-800 pb-12 last:border-0">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
            <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0">
              {index + 1}
            </span>
            <BilingualDisplay content={deriv.title} language={language} asHeading={true} />
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-slate-700 dark:text-slate-300 text-sm uppercase tracking-wider mb-2">Given</h3>
              <div className="text-lg text-slate-800 dark:text-slate-200"><BilingualDisplay content={deriv.given} language={language} /></div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-2xl border border-blue-100 dark:border-blue-900/50">
              <h3 className="font-bold text-blue-700 dark:text-blue-300 text-sm uppercase tracking-wider mb-2">To Find</h3>
              <div className="text-lg text-blue-900 dark:text-blue-100"><BilingualDisplay content={deriv.toFind} language={language} /></div>
            </div>
          </div>

          <div className="mb-8 p-6 bg-yellow-50/50 dark:bg-yellow-900/10 border-l-4 border-yellow-400 rounded-r-2xl">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-500 mb-2">Core Concept / Formula Used</h3>
            <div className="text-lg text-slate-700 dark:text-slate-300"><BilingualDisplay content={deriv.concept} language={language} /></div>
          </div>

          <div className="space-y-6 mb-10 pl-2 md:pl-6 border-l-2 border-slate-100 dark:border-slate-800">
            {deriv.steps.map((step, stepIdx) => (
              <div key={stepIdx} className="relative">
                <div className="absolute -left-[9px] md:-left-[25px] top-2 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-blue-400"></div>
                {step.title && (
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 text-lg"><BilingualDisplay content={step.title} language={language} /></h4>
                )}
                <div className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed overflow-x-auto overflow-y-hidden py-2 math-scroll">
                  <BilingualDisplay content={step.content} language={language} />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/50 p-6 md:p-8 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-600"></div>
            <h3 className="text-sm font-bold text-green-700 dark:text-green-400 uppercase tracking-widest mb-4">Final Result</h3>
            <div className="text-2xl md:text-4xl text-green-900 dark:text-green-100 font-bold overflow-x-auto py-2">
              <Latex>{deriv.finalResult}</Latex>
            </div>
          </div>

          {deriv.examTip && (
            <div className="mt-8 flex gap-4 bg-purple-50 dark:bg-purple-900/20 p-5 rounded-2xl text-purple-900 dark:text-purple-200">
              <Lightbulb className="w-6 h-6 shrink-0 text-purple-600 dark:text-purple-400" />
              <div>
                <span className="font-bold block mb-1">Exam Tip</span>
                <span className="text-[15px] leading-relaxed"><BilingualDisplay content={deriv.examTip} language={language} /></span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
