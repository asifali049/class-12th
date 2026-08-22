"use client";

import { SubjectData } from "@/data/syllabus";

import { motion } from "framer-motion";
import { ArrowLeft, Bookmark, Search, Maximize2, Share2, PenTool, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Latex from "react-latex-next";
import { ThemeToggle } from "@/components/ThemeToggle";
import NoteRenderer from "@/components/NoteRenderer";
import QuestionRenderer from "@/components/QuestionRenderer";
import FormulaRenderer from "@/components/FormulaRenderer";
import RevisionRenderer from "@/components/RevisionRenderer";
import TestRenderer from "@/components/TestRenderer";
import DerivationRenderer from "@/components/DerivationRenderer";
import NumericalRenderer from "@/components/NumericalRenderer";
import DiagramRenderer from "@/components/DiagramRenderer";
import MindMapRenderer from "@/components/MindMapRenderer";

interface SubjectClientProps {
  subjectId: string;
  subject: SubjectData;
  allNotes: Record<string, any[]>;
  allQuestions: Record<string, any[]>;
  allFormulas: Record<string, any[]>;
  allRevisions: Record<string, any[]>;
  allDerivations: Record<string, any[]>;
  allNumericals: Record<string, any[]>;
  allDiagrams: Record<string, any[]>;
  allMindMaps: Record<string, any>;
}

export default function SubjectClient({
  subjectId,
  subject,
  allNotes,
  allQuestions,
  allFormulas,
  allRevisions,
  allDerivations,
  allNumericals,
  allDiagrams,
  allMindMaps
}: SubjectClientProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("notes");
  const [activeChapterId, setActiveChapterId] = useState<string>("ch1");
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [language, setLanguage] = useState<"Hindi" | "English" | "Hinglish">("Hindi");

  // If invalid subject, redirect or show error
  useEffect(() => {
    if (!subject) {
      router.push("/");
    }
  }, [subject, router]);

  if (!subject) return null;

  const activeChapter = subject.chapters.find(c => c.id === activeChapterId) || subject.chapters[0];
  const chapterKey = `${subjectId}_${activeChapterId}`;

  const toggleAnswer = (qId: string) => {
    setRevealedAnswers(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 md:bg-slate-100 md:dark:bg-slate-950 flex flex-col md:flex-row pb-20 md:pb-0">

      {/* Sidebar - Chapter List */}
      <aside className="hidden md:flex w-80 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 flex-col h-screen sticky top-0">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">{subject.name}</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">UP Board Session 2026-27</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
          {subject.chapters.map((chapter, index) => {
            const isActive = chapter.id === activeChapterId;
            const chapterKey = `${subjectId}_${chapter.id}`;
            const hasContent = allQuestions[chapterKey] && allQuestions[chapterKey].length > 0;

            return (
              <div
                key={chapter.id}
                onClick={() => setActiveChapterId(chapter.id)}
                className={`p-3 rounded-xl cursor-pointer transition-all ${isActive
                    ? 'bg-blue-50 border border-blue-100 shadow-sm dark:bg-blue-900/20 dark:border-blue-800'
                    : 'hover:bg-slate-50 border border-transparent hover:border-slate-100 dark:hover:bg-slate-800 dark:hover:border-slate-700'
                  }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <p className={`text-xs font-bold ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`}>
                    Chapter {index + 1}
                  </p>
                  {hasContent ? (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 dark:text-green-500 bg-green-50 dark:bg-green-900/30 px-1.5 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" /> Complete
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full border border-current"></div> Coming Soon
                    </span>
                  )}
                </div>
                <h3 className={`text-sm ${isActive ? 'font-semibold text-slate-900 dark:text-slate-100' : 'font-medium text-slate-600 dark:text-slate-400'}`}>
                  {chapter.name}
                </h3>
                {chapter.hindiName && (
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">{chapter.hindiName}</p>
                )}
              </div>
            );
          })}
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">

        {/* Topbar */}
        <header className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-40 shrink-0">
          <div className="flex items-center gap-3">
            <Link href="/" className="md:hidden text-slate-500 dark:text-slate-400">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-sm md:text-base font-bold text-slate-900 dark:text-slate-100 truncate max-w-[200px] md:max-w-md hidden md:block">
                {activeChapter.name} {activeChapter.hindiName && `(${activeChapter.hindiName})`}
              </h1>

              {/* Mobile Chapter Dropdown */}
              <select
                className="md:hidden text-sm font-bold text-slate-900 dark:text-slate-100 bg-transparent border-none focus:ring-0 cursor-pointer max-w-[200px] truncate"
                value={activeChapterId}
                onChange={(e) => setActiveChapterId(e.target.value)}
              >
                {subject.chapters.map(ch => (
                  <option key={ch.id} value={ch.id}>{ch.name}</option>
                ))}
              </select>

              <div className="flex items-center gap-1 text-[10px] font-semibold text-green-600 dark:text-green-500 bg-green-50 dark:bg-green-900/30 px-1.5 py-0.5 rounded-full border border-green-100 dark:border-green-800 w-fit mt-0.5">
                <CheckCircle2 className="w-3 h-3" /> UPMSP Verified
              </div>
            </div>
          </div>


          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden sm:flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setLanguage("Hindi")}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${language === 'Hindi' ? 'bg-white dark:bg-slate-950 shadow-sm text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
              >
                हिंदी
              </button>
              <button
                onClick={() => setLanguage("Hinglish")}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${language === 'Hinglish' ? 'bg-white dark:bg-slate-950 shadow-sm text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
              >
                Hinglish
              </button>
            </div>
            <button className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors hidden sm:block"><Search className="w-5 h-5" /></button>
            <button className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors hidden sm:block"><Share2 className="w-5 h-5" /></button>
            <button className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"><Bookmark className="w-5 h-5" /></button>
            <button className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors hidden sm:block"><Maximize2 className="w-5 h-5" /></button>
            <ThemeToggle />
          </div>
        </header>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 sticky top-0 z-20 overflow-x-auto scrollbar-hide hide-scrollbar whitespace-nowrap px-4 md:px-0 md:justify-center">
          {['notes', 'formula', 'derivations', 'numericals', 'questions', 'diagrams', 'mind map', 'revision', 'test'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-semibold capitalize whitespace-nowrap border-b-2 transition-colors ${activeTab === tab
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Scrollable Notes Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-100 dark:bg-slate-900 relative">

          {/* A4 Size Paper Container */}
          <motion.div
            key={activeChapterId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[860px] mx-auto bg-white dark:bg-slate-950 min-h-[1056px] shadow-sm md:shadow-md rounded-none md:rounded-lg notebook-bg notebook-margin overflow-hidden relative"
          >
            <div className={`pl-[48px] pr-[24px] md:pl-[72px] md:pr-[48px] pt-12 pb-48`}>

              {(() => {
                const lang = language === "Hindi" ? "hi" : language === "English" ? "en" : "hinglish";
                return (
                  <>
                    {activeTab === 'notes' && <NoteRenderer notes={allNotes[chapterKey] || []} language={lang} />}
                    {activeTab === 'formula' && <FormulaRenderer formulas={allFormulas[chapterKey] || []} language={lang} />}
                    {activeTab === 'derivations' && <DerivationRenderer derivations={allDerivations[chapterKey] || []} language={lang} />}
                    {activeTab === 'numericals' && <NumericalRenderer numericals={allNumericals[chapterKey] || []} language={lang} />}
                    {activeTab === 'questions' && <QuestionRenderer questions={allQuestions[chapterKey] || []} language={lang} />}
                    {activeTab === 'diagrams' && <DiagramRenderer diagrams={allDiagrams[chapterKey] || []} language={lang} />}
                    {activeTab === 'mind map' && <MindMapRenderer mindmap={allMindMaps[chapterKey]} language={lang} />}
                    {activeTab === 'revision' && <RevisionRenderer revisions={allRevisions[chapterKey] || []} language={lang} />}
                    {activeTab === 'test' && <TestRenderer questions={allQuestions[chapterKey] || []} language={lang} />}
                  </>
                );
              })()}

            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}