import React, { useState } from "react";
import { motion } from "framer-motion";
import { PenTool } from "lucide-react";
import { Question } from "@/data/questions";
import { Language } from "@/data/types";
import { BilingualDisplay } from "./notebook/BilingualDisplay";

interface QuestionRendererProps {
  questions: Question[];
  language: Language;
}

export default function QuestionRenderer({ questions, language }: QuestionRendererProps) {
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  const toggleAnswer = (qId: string) => {
    setRevealedAnswers(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="mt-10 p-6 border-2 border-dashed border-slate-200 rounded-2xl text-center font-sans text-slate-400">
        <p>Question bank for this chapter is being prepared.</p>
        <p className="text-xs mt-2">Board level MCQs, Subjective, and Numericals will appear here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8 border-b pb-4">
        <h2 className="text-2xl font-bold text-slate-900">Question Bank</h2>
        <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
          {questions.length} Questions
        </span>
      </div>

      <div className="grid gap-6">
        {questions.map((q, idx) => (
          <div key={q.id} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded uppercase">
                {q.type === 'mcq' ? 'Multiple Choice' : q.type === 'tf' ? 'True / False' : 'Subjective'}
              </span>
              <span className="text-sm font-bold text-slate-400">Q{idx + 1} • {q.marks} Mark{q.marks > 1 ? 's' : ''}</span>
            </div>

            <div className="text-lg font-medium text-slate-900 mb-6">
              <BilingualDisplay content={q.question} language={language} />
            </div>

            {q.type === 'mcq' && q.options && (
              <div className="space-y-3 mb-6">
                {q.options.map((opt, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="w-6 h-6 rounded-full bg-white border border-slate-300 flex items-center justify-center text-xs font-bold text-slate-500">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-slate-700">
                      <BilingualDisplay content={opt} language={language} />
                    </span>
                  </div>
                ))}
              </div>
            )}

            {q.type === 'tf' && (
              <div className="flex gap-4 mb-6">
                <div className="flex-1 text-center p-3 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-700">True</div>
                <div className="flex-1 text-center p-3 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-700">False</div>
              </div>
            )}

            <button 
              onClick={() => toggleAnswer(q.id)}
              className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors underline underline-offset-4"
            >
              {revealedAnswers[q.id] ? 'Hide Answer' : 'Show Answer & Tips'}
            </button>

            {revealedAnswers[q.id] && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 pt-4 border-t border-slate-100"
              >
                {(q.type === 'mcq' || q.type === 'tf') && (
                  <div className="mb-2 text-sm text-slate-700">
                    <span className="font-bold text-green-600">Correct Answer: </span> 
                    {q.type === 'mcq' ? String.fromCharCode(65 + (q.correctOptionIndex ?? 0)) : (q.isTrue ? "True" : "False")}
                  </div>
                )}
                {q.type === 'subjective' && (
                  <>
                    <div className="mb-3 text-sm text-slate-700">
                      <span className="font-bold text-slate-900 block mb-1">Ideal Answer: </span> 
                      <BilingualDisplay content={q.idealAnswer} language={language} />
                    </div>
                    <div className="mb-3">
                      <span className="font-bold text-xs text-slate-500 uppercase tracking-wider block mb-1">Keywords for Full Marks:</span>
                      <div className="flex flex-wrap gap-2">
                        {q.keywords?.map((kw, i) => (
                          <span key={i} className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-md">
                            <BilingualDisplay content={kw} language={language} />
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                
                {((q.type === 'mcq' || q.type === 'tf') && q.explanation) && (
                  <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg mt-2">
                    <span className="font-semibold text-slate-800">Explanation: </span>
                    <BilingualDisplay content={q.explanation} language={language} className="inline" />
                  </div>
                )}
                {(q.type === 'subjective' && q.tips) && (
                  <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg mt-2 flex gap-2">
                    <PenTool className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="flex items-start gap-1">
                      <span className="font-semibold text-slate-800">Board Tip: </span>
                      <BilingualDisplay content={q.tips} language={language} className="inline" />
                    </span>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
