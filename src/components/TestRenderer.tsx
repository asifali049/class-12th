"use client";

import { useState, useEffect } from "react";
import { Question, MCQQuestion } from "@/data/questions";
import { getLocalizedText, Language } from "@/data/types";
import { CheckCircle2, XCircle, Timer, Award } from "lucide-react";
import Latex from "react-latex-next";

interface TestRendererProps {
  questions: Question[];
  language: Language;
}

export default function TestRenderer({ questions, language }: TestRendererProps) {
  const mcqs = questions.filter(q => q.type === 'mcq');
  
  const [testStarted, setTestStarted] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [testFinished, setTestFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(mcqs.length * 60); // 1 minute per question

  useEffect(() => {
    if (testStarted && !testFinished && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !testFinished) {
      setTestFinished(true);
    }
  }, [testStarted, testFinished, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSelectOption = (qId: string, optionIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    mcqs.forEach(q => {
      const mcq = q as MCQQuestion;
      if (selectedAnswers[mcq.id] === mcq.correctOptionIndex) {
        score++;
      }
    });
    return score;
  };

  if (mcqs.length === 0) {
    return (
      <div className="mt-10 p-6 border-2 border-dashed border-slate-200 rounded-2xl text-center font-sans text-slate-400">
        <p>Mock Test for this chapter is being prepared.</p>
        <p className="text-xs mt-2">Check back soon for interactive MCQs!</p>
      </div>
    );
  }

  if (!testStarted) {
    return (
      <div className="font-sans max-w-2xl mx-auto mt-12 text-center">
        <div className="bg-blue-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
          <Award className="w-10 h-10 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Chapter Mock Test</h2>
        <p className="text-slate-600 mb-8">Test your knowledge with {mcqs.length} multiple-choice questions. You have {formatTime(mcqs.length * 60)} minutes to complete the test.</p>
        <button 
          onClick={() => setTestStarted(true)}
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          Start Test Now
        </button>
      </div>
    );
  }

  if (testFinished) {
    const score = calculateScore();
    const percentage = (score / mcqs.length) * 100;
    
    return (
      <div className="font-sans max-w-3xl mx-auto mt-8">
        <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm text-center mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
            <div className="h-full bg-blue-600" style={{ width: `${percentage}%` }}></div>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2 mt-4">Test Completed!</h2>
          <p className="text-slate-500 mb-6">Here is your performance summary</p>
          <div className="text-6xl font-black text-blue-600 mb-2">{score} / {mcqs.length}</div>
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">{percentage.toFixed(0)}% Score</p>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-6 pl-4 border-l-4 border-blue-600">Answer Key</h3>
        <div className="space-y-6">
          {mcqs.map((q, idx) => {
            const mcq = q as MCQQuestion;
            const userAnswer = selectedAnswers[mcq.id];
            const isCorrect = userAnswer === mcq.correctOptionIndex;
            const isUnanswered = userAnswer === undefined;

            return (
              <div key={mcq.id} className={`p-6 border rounded-2xl ${isCorrect ? 'bg-green-50/30 border-green-200' : 'bg-red-50/30 border-red-200'}`}>
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    {isCorrect ? (
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-4 leading-relaxed">
                      Q{idx + 1}. <Latex>{getLocalizedText(mcq.question, language)}</Latex>
                    </h4>
                    <div className="grid gap-2">
                      {mcq.options?.map((opt, optIdx) => {
                        let optClass = "p-3 border rounded-xl text-sm font-medium ";
                        if (optIdx === mcq.correctOptionIndex) {
                          optClass += "bg-green-100 border-green-500 text-green-900";
                        } else if (optIdx === userAnswer && !isCorrect) {
                          optClass += "bg-red-100 border-red-500 text-red-900";
                        } else {
                          optClass += "bg-white border-slate-200 text-slate-600 opacity-50";
                        }

                        return (
                          <div key={optIdx} className={optClass}>
                            {String.fromCharCode(65 + optIdx)}. <Latex>{getLocalizedText(opt, language)}</Latex>
                          </div>
                        );
                      })}
                    </div>
                    {isUnanswered && <p className="text-sm font-bold text-red-500 mt-3">You did not answer this question.</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const currentQ = mcqs[currentQIndex] as MCQQuestion;

  return (
    <div className="font-sans max-w-3xl mx-auto mt-4">
      {/* Test Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-slate-100 text-slate-700 font-bold text-sm rounded-lg">
            Question {currentQIndex + 1} of {mcqs.length}
          </span>
        </div>
        <div className={`flex items-center gap-2 font-bold px-4 py-2 rounded-lg ${timeLeft < 60 ? 'bg-red-100 text-red-600' : 'bg-blue-50 text-blue-700'}`}>
          <Timer className="w-5 h-5" />
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Question Body */}
      <div className="mb-10 min-h-[200px]">
        <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-8 leading-relaxed">
          <Latex>{getLocalizedText(currentQ.question, language)}</Latex>
        </h3>
        <div className="space-y-3">
          {currentQ.options?.map((opt, idx) => {
            const isSelected = selectedAnswers[currentQ.id] === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(currentQ.id, idx)}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
                  isSelected 
                    ? 'border-blue-600 bg-blue-50/50 shadow-sm' 
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <div className={`font-medium text-lg ${isSelected ? 'text-blue-900' : 'text-slate-700'}`}>
                    <Latex>{getLocalizedText(opt, language)}</Latex>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
        <button 
          onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
          disabled={currentQIndex === 0}
          className="px-6 py-2.5 font-bold text-slate-500 disabled:opacity-30 hover:text-slate-800 transition-colors"
        >
          Previous
        </button>
        
        {currentQIndex === mcqs.length - 1 ? (
          <button 
            onClick={() => setTestFinished(true)}
            className="px-8 py-2.5 font-bold text-white bg-green-600 rounded-xl shadow-sm hover:bg-green-700 transition-colors"
          >
            Submit Test
          </button>
        ) : (
          <button 
            onClick={() => setCurrentQIndex(prev => Math.min(mcqs.length - 1, prev + 1))}
            className="px-8 py-2.5 font-bold text-white bg-blue-600 rounded-xl shadow-sm hover:bg-blue-700 transition-colors"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
