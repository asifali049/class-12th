"use client";

import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Atom, Languages, Dna, ArrowRight, BookMarked, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const IconMap: Record<string, any> = {
  physics: Atom,
  chemistry: FlaskConical,
  biology: Dna,
  hindi: BookOpen,
  english: Languages
};

export interface SubjectStats {
  id: string;
  name: string;
  lang: string;
  totalChapters: number;
  publishedChapters: number;
  publishedQuestions: number;
  publishedRevisions: number;
  studentProgress: number;
  color: string;
}

interface DashboardClientProps {
  subjects: SubjectStats[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } as any }
};

export default function DashboardClient({ subjects }: DashboardClientProps) {
  return (
    <main className="min-h-screen notebook-bg notebook-margin pb-20 overflow-x-hidden dark:bg-slate-950">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#fdfbf7]/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 pl-10 md:pl-20 pr-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold handwriting text-xl">
            12
          </div>
          <span className="font-bold text-lg hidden sm:block tracking-tight text-slate-800 dark:text-slate-100">UP Board Science</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="#" className="hover:text-blue-600 transition-colors">Subjects</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Revision</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Question Bank</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Tests</Link>
          <div className="flex items-center gap-1 text-xs font-semibold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full border border-green-200 dark:border-green-800">
            <CheckCircle2 className="w-3 h-3" />
            UPMSP Verified
          </div>
          <ThemeToggle />
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-12 pl-12 md:pl-24 pr-6 md:pr-12 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-900/50 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Session 2026-27 | Target UP Board
          </div>
          
          <h1 className="hero-title text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            UP Board Class 12 <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Science Stream</span>
          </h1>
          
          <p className="handwriting text-3xl md:text-4xl text-blue-800 dark:text-blue-400 mb-4">
            Smart Notes • Smart Revision • Better Preparation
          </p>
          
          <p className="hero-subtitle text-lg mb-8 max-w-2xl font-medium">
            हिंदी • English • Physics • Chemistry • Biology
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-lg shadow-blue-200 transition-all flex items-center gap-2 group">
              Start Preparing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-medium transition-all shadow-sm">
              Explore Notes
            </button>
            <button className="px-6 py-3 text-slate-500 hover:text-slate-800 font-medium transition-colors underline decoration-slate-300 underline-offset-4">
              View Official Syllabus
            </button>
          </div>
        </motion.div>
      </section>

      {/* Subject Dashboard */}
      <section className="py-12 pl-12 md:pl-24 pr-6 md:pr-12 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Your Subjects</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Select a subject to view handwritten notes and questions.</p>
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Overall Progress</p>
            <div className="w-32 h-2 bg-slate-200 dark:bg-slate-800 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-blue-600 rounded-full w-[0%]"></div>
            </div>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {subjects.map((subject, index) => {
              const Icon = IconMap[subject.id] || BookOpen;
              const hasContent = subject.publishedChapters > 0;
              return (
                <motion.div key={subject.id} variants={itemVariants}>
              <Link href={`/subjects/${subject.id}`} className="block group">
                <div className={`p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all h-full relative overflow-hidden`}>
                  {/* Subject Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-4 rounded-xl ${subject.color} border shadow-sm`}>
                        <Icon className="w-8 h-8" />
                      </div>
                    <div className="text-right">
                      <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                        {subject.totalChapters} Chapters
                      </span>
                    </div>
                  </div>
                  
                  {/* Title & Language */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 transition-colors">
                    {subject.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-medium">Lang: {subject.lang}</p>
                  
                  {/* Content Coverage vs Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-medium text-slate-700 dark:text-slate-300">Content Available</span>
                      <span className="font-bold text-slate-900 dark:text-slate-100">{subject.publishedChapters} / {subject.totalChapters}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out bg-green-500`} 
                        style={{ width: `${(subject.publishedChapters / subject.totalChapters) * 100}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-medium text-slate-700 dark:text-slate-300">Your Progress</span>
                      <span className="font-bold text-slate-900 dark:text-slate-100">{subject.studentProgress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out bg-blue-600`} 
                        style={{ width: `${subject.studentProgress}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-xs mb-1 mt-3">
                      <span className="font-medium text-slate-600 dark:text-slate-400">Questions</span>
                      <span className="text-slate-800 dark:text-slate-200">{subject.publishedQuestions} chapter{subject.publishedQuestions !== 1 ? 's' : ''} available</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="font-medium text-slate-600 dark:text-slate-400">Revision</span>
                      <span className="text-slate-800 dark:text-slate-200">{subject.publishedRevisions} chapter{subject.publishedRevisions !== 1 ? 's' : ''} available</span>
                    </div>
                  </div>

                  {/* Actions / Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                      [Continue Learning]
                    </button>
                  </div>

                </div>
              </Link>
            </motion.div>
          );
        })}
        </motion.div>
      </section>

      {/* Floating Button Removed as per spec */}

      {/* Bottom Navigation for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-3 px-6 flex justify-between items-center z-40 pb-safe">
        <button className="flex flex-col items-center gap-1 text-blue-600">
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors">
          <Atom className="w-5 h-5" />
          <span className="text-[10px] font-medium">Subjects</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors">
          <BookMarked className="w-5 h-5" />
          <span className="text-[10px] font-medium">Revision</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors">
          <CheckCircle2 className="w-5 h-5" />
          <span className="text-[10px] font-medium">Tests</span>
        </button>
      </div>
    </main>
  );
}
