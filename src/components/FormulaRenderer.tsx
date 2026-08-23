import React from "react";
import Latex from "react-latex-next";
import { Formula } from "@/data/formulas";
import { Language } from "@/data/types";
import { BilingualDisplay } from "./notebook/BilingualDisplay";

interface FormulaRendererProps {
  formulas: Formula[];
  language: Language;
}

export default function FormulaRenderer({ formulas, language }: FormulaRendererProps) {
  if (!formulas || formulas.length === 0) {
    return (
      <div className="mt-10 p-6 border-2 border-dashed border-slate-200 rounded-2xl text-center font-sans text-slate-400">
        <p>Formula sheet for this chapter is being prepared.</p>
        <p className="text-xs mt-2">All important Board Level formulas will be listed here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8 border-b dark:border-slate-800 pb-4">Important Formulas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {formulas.map((f, index) => (
          <div key={f.id || `formula-${index}`} className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm relative group hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
            <span className={`absolute top-4 right-4 px-2 py-1 text-[10px] font-bold rounded uppercase ${f.importance === 'High' ? 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400' : 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'}`}>
              {f.importance || 'High'} Priority
            </span>
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-4 pr-16"><BilingualDisplay content={f.title} language={language} asHeading={true} /></h3>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl flex justify-center mb-4 border border-slate-100 dark:border-slate-700 overflow-x-auto">
              <span className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-wider">
                <Latex>{`$${f.equation || f.formula}$`}</Latex>
              </span>
            </div>
            
            {f.description && (
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-4"><BilingualDisplay content={f.description} language={language} /></div>
            )}

            <div>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Variables:</p>
              <div className="space-y-1">
                {typeof f.variables === 'string' || (f.variables && (f.variables as any).en && typeof (f.variables as any).en === 'string') ? (
                  <div className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line">
                    <BilingualDisplay content={f.variables as any} language={language} />
                  </div>
                ) : Array.isArray(f.variables) ? (
                  f.variables.map((vObj: any, idx: number) => {
                    const sym = vObj.symbol || vObj.name;
                    const desc = vObj.description || (vObj.symbol ? vObj.name : '');
                    return (
                      <div key={idx} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <span className="font-bold font-mono w-12 text-right"><Latex>{`$${sym}$`}</Latex></span>
                        <span className="text-slate-400 dark:text-slate-500">-</span>
                        <span><BilingualDisplay content={desc} language={language} className="inline" /></span>
                      </div>
                    );
                  })
                ) : (
                  Object.entries(f.variables || {}).map(([v, desc]) => (
                    <div key={v} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="font-bold font-mono w-12 text-right"><Latex>{`$${v}$`}</Latex></span>
                      <span className="text-slate-400 dark:text-slate-500">-</span>
                      <span><BilingualDisplay content={desc as any} language={language} className="inline" /></span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {f.unit && (
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-sm text-slate-700 dark:text-slate-300 flex gap-2">
                  <span className="font-bold">SI Unit:</span> <BilingualDisplay content={f.unit} language={language} className="inline" />
                </div>
              </div>
            )}

            {f.examTip && (
              <div className="mt-3 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-100 dark:border-yellow-900/50">
                <p className="text-xs font-bold text-yellow-800 dark:text-yellow-500 uppercase mb-1">Exam Tip</p>
                <div className="text-sm text-yellow-900 dark:text-yellow-200"><BilingualDisplay content={f.examTip} language={language} /></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
