import React from "react";
import { RevisionTopic } from "@/data/revisions";
import { Language } from "@/data/types";
import { BilingualDisplay } from "./notebook/BilingualDisplay";

interface RevisionRendererProps {
  revisions: RevisionTopic[];
  language: Language;
}

export default function RevisionRenderer({ revisions, language }: RevisionRendererProps) {
  if (!revisions || revisions.length === 0) {
    return (
      <div className="mt-10 p-6 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl text-center font-sans text-slate-400 dark:text-slate-500">
        <p>Revision notes for this chapter are being prepared.</p>
        <p className="text-xs mt-2">5-Minute Quick Revision summary will appear here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-2">5-Minute Quick Revision</h2>
        <p className="text-blue-100 text-sm">Read this before your exam for rapid recall of all key concepts.</p>
      </div>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
        {revisions.map((rev, idx) => (
          <div key={rev.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
              {idx + 1}
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-lg"><BilingualDisplay content={rev.topic || (rev as any).title} language={language} asHeading={true} /></h3>
              <div className="text-sm text-slate-600 dark:text-slate-300 mb-4 whitespace-pre-line"><BilingualDisplay content={rev.summary || (rev as any).content} language={language} /></div>
              
              {rev.quickRecall && rev.quickRecall.length > 0 && (
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-900/30">
                  <span className="text-xs font-bold uppercase text-blue-800 dark:text-blue-300 mb-1 block">Quick Recall:</span>
                  <ul className="list-disc pl-4 text-sm text-slate-700 dark:text-slate-300">
                    {rev.quickRecall.map((point, i) => (
                      <li key={i}><BilingualDisplay content={point} language={language} /></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
