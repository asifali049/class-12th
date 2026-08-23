"use client";

import { useState } from "react";
import { getLocalizedText, Language } from "@/data/types";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import Latex from "react-latex-next";

interface FlashcardRendererProps {
  flashcards: any[];
  language: Language;
}

export default function FlashcardRenderer({ flashcards, language }: FlashcardRendererProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!flashcards || flashcards.length === 0) {
    return (
      <div className="mt-10 p-6 border-2 border-dashed border-slate-200 rounded-2xl text-center font-sans text-slate-400">
        <p>Flashcards for this chapter are being prepared.</p>
        <p className="text-xs mt-2">Check back soon for interactive flashcards!</p>
      </div>
    );
  }

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev + 1), 150);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev - 1), 150);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const card = flashcards[currentIndex];

  return (
    <div className="font-sans max-w-2xl mx-auto mt-8 flex flex-col items-center">
      <div className="flex items-center justify-between w-full mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Flashcards</h2>
        <span className="px-3 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-bold text-sm rounded-lg border border-blue-100 dark:border-blue-800">
          {currentIndex + 1} / {flashcards.length}
        </span>
      </div>

      <div 
        className="relative w-full aspect-[3/2] cursor-pointer perspective-1000"
        onClick={handleFlip}
      >
        <motion.div
          className="w-full h-full relative preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front (Term) */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl shadow-md flex flex-col items-center justify-center p-8 text-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="text-slate-400 dark:text-slate-500 font-semibold mb-4 text-sm tracking-widest uppercase">Term</div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
              <Latex>{getLocalizedText(card.term, language)}</Latex>
            </h3>
            <div className="absolute bottom-6 flex items-center gap-2 text-slate-400 text-sm font-medium">
              <RotateCcw className="w-4 h-4" /> Click to flip
            </div>
          </div>

          {/* Back (Definition) */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden bg-blue-600 dark:bg-blue-700 text-white rounded-3xl shadow-lg flex flex-col items-center justify-center p-8 text-center"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className="text-blue-200 font-semibold mb-4 text-sm tracking-widest uppercase">Definition</div>
            <div className="text-xl md:text-2xl font-medium leading-relaxed">
              <Latex>{getLocalizedText(card.definition, language)}</Latex>
            </div>
            <div className="absolute bottom-6 flex items-center gap-2 text-blue-200 text-sm font-medium">
              <RotateCcw className="w-4 h-4" /> Click to flip
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex items-center gap-6 mt-8">
        <button 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="p-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-30 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={handleNext}
          disabled={currentIndex === flashcards.length - 1}
          className="p-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-30 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
