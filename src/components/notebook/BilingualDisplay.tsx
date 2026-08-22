import React from 'react';
import { BilingualText, Language } from '@/data/types';
import Latex from 'react-latex-next';

interface BilingualDisplayProps {
  content?: BilingualText | string;
  language: Language;
  asHeading?: boolean;
  className?: string;
}

const latexDelimiters = [
  { left: '$$', right: '$$', display: true },
  { left: '\\[', right: '\\]', display: true },
  { left: '$', right: '$', display: false },
  { left: '\\(', right: '\\)', display: false }
];

// Utility to render basic markdown bold syntax alongside Latex
function parseText(text: string) {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}><Latex delimiters={latexDelimiters} strict={false}>{part.slice(2, -2)}</Latex></strong>;
        }
        return <Latex delimiters={latexDelimiters} strict={false} key={index}>{part}</Latex>;
      })}
    </>
  );
}

export function BilingualDisplay({ content, language, asHeading = false, className = '' }: BilingualDisplayProps) {
  if (!content) return null;

  const englishClass = asHeading ? 'english-heading font-bold' : 'english-body';
  const hindiClass = asHeading ? 'hindi-heading font-bold text-[0.9em]' : 'hindi-body';

  // If we have proper BilingualText object
  if (typeof content === 'object') {
    if (language === 'hi') {
      return (
        <div className={`flex flex-col gap-1 ${className}`}>
          {content.hi ? <div className={hindiClass}>{parseText(content.hi)}</div> : null}
          {/* Optionally show English term if it's very short, but for now we prioritize clean single-language display unless it's a heading where both might be useful */}
          {asHeading && content.en && (
            <div className={`${englishClass} text-[0.8em] text-slate-500 opacity-80`}>{parseText(content.en)}</div>
          )}
        </div>
      );
    }
    
    if (language === 'en') {
      return (
        <div className={`flex flex-col gap-1 ${className}`}>
          {content.en ? <div className={englishClass}>{parseText(content.en)}</div> : null}
        </div>
      );
    }

    // hinglish mode
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        {(content.hinglish || content.en) ? <div className={englishClass}>{parseText(content.hinglish || content.en || '')}</div> : null}
        {content.hi ? <div className={`${hindiClass} text-slate-600 opacity-90`}>{parseText(content.hi)}</div> : null}
      </div>
    );
  }

  // Fallback for strings (like our mock data)
  const text = content as string;
  
  // Try to split English and Hindi by detecting Devanagari blocks
  // A simple regex to detect Devanagari characters: /[\u0900-\u097F]+/
  const hasDevanagari = /[\u0900-\u097F]/.test(text);
  
  if (!hasDevanagari) {
    return <span className={`${englishClass} ${className}`}>{parseText(text)}</span>;
  }

  // If it's a single string with mixed content, we'll try to apply both classes sensibly
  // or just use hindi-body as it supports both, but hindi-body has a larger line-height.
  // We can try to split brackets, like "Electric Charge (विद्युत आवेश)"
  const bracketMatch = text.match(/^(.*?)\s*\((.*?[\u0900-\u097F].*?)\)$/);
  if (bracketMatch) {
    const enPart = bracketMatch[1];
    const hiPart = bracketMatch[2];
    
    if (language === 'hi') {
      return (
        <div className={`flex flex-col gap-1 ${className}`}>
          <div className={hindiClass}>{parseText(hiPart)}</div>
          {asHeading && <div className={`${englishClass} text-[0.8em] text-slate-500 opacity-80`}>{parseText(enPart)}</div>}
        </div>
      );
    } else if (language === 'en') {
      return <div className={`${englishClass} ${className}`}>{parseText(enPart)}</div>;
    } else {
      return (
        <div className={`flex flex-col gap-1 ${className}`}>
          <div className={englishClass}>{parseText(enPart)}</div>
          <div className={`${hindiClass} text-slate-600 opacity-90`}>{parseText(hiPart)}</div>
        </div>
      );
    }
  }

  // For mixed paragraphs without simple brackets, just fallback to Hindi line-height for safety
  return <div className={`${hindiClass} ${className}`}>{parseText(text)}</div>;
}
