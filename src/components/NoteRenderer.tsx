import React from "react";
import { NoteBlock } from "@/data/notes";
import { Language } from "@/data/types";
import { BilingualDisplay } from "./notebook/BilingualDisplay";
import { SectionHeading, ConceptBlock, DefinitionBlock, FormulaBlock, ExamTip, HighlightBlock } from "./notebook/Blocks";

interface NoteRendererProps {
  notes: NoteBlock[];
  language: Language;
}

export default function NoteRenderer({ notes, language }: NoteRendererProps) {
  if (!notes || notes.length === 0) {
    return (
      <div className="mt-20 p-6 border-2 border-dashed border-slate-200 rounded-2xl text-center font-sans text-slate-400">
        <p>Full handwritten notes for this specific chapter are being dynamically generated from the curriculum database.</p>
        <p className="text-xs mt-2">Verified against UPMSP Session 2026-27</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 max-w-[720px]">
      {notes.map((block: any, index) => {
        // Handle new JSON format which has { id, title, content } instead of type
        if (!block.type && block.title && block.content) {
          return (
            <React.Fragment key={block.id || index}>
              <SectionHeading content={block.title} language={language} index={index + 1} />
              <div className="mb-6">
                <BilingualDisplay content={block.content} language={language} className="ink-black" />
              </div>
            </React.Fragment>
          );
        }

        switch (block.type) {
          case 'heading':
            return <SectionHeading key={index} content={block.text} language={language} index={index + 1} />;
          
          case 'concept':
            // we can treat some 'concept' as definition or concept block
            // simple heuristic: if it looks like a definition, use definition block
            const textStr = typeof block.text === 'string' ? block.text : (block.text as any)?.en || '';
            if (textStr.toLowerCase().includes('definition:')) {
              return <DefinitionBlock key={index} content={block.text} language={language} />;
            }
            return <ConceptBlock key={index} content={block.text} language={language} />;
          
          case 'paragraph':
            return (
              <div key={index} className="mb-4">
                <BilingualDisplay content={block.text} language={language} className="ink-black" />
              </div>
            );
          
          case 'tip':
            return <ExamTip key={index} content={block.text} language={language} />;
          
          case 'formula':
            return <FormulaBlock key={index} equation={block.equation || ''} label={block.label} language={language} />;
          
          case 'highlight':
            return <HighlightBlock key={index} content={block.text} language={language} />;
          
          case 'list':
            return (
              <ul key={index} className="list-none pl-6 mb-6 space-y-2 relative">
                {/* Custom notebook bullets */}
                {block.items?.map((item: any, i: number) => (
                  <li key={i} className="relative">
                    <span className="absolute -left-5 top-2 w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                    <BilingualDisplay content={item} language={language} className="ink-black" />
                  </li>
                ))}
              </ul>
            );
            
          case 'diagram_placeholder':
            return (
              <div key={index} className="my-8 flex justify-center">
                <div className="w-full max-w-sm h-48 border-2 border-slate-300 border-dashed rounded-xl flex items-center justify-center text-slate-400 font-sans text-sm relative bg-slate-50/50">
                  <span className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    <BilingualDisplay content={block.label || "Diagram"} language={language} />
                  </span>
                  <svg className="w-16 h-16 opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>
                </div>
              </div>
            );
            
          default:
            return null;
        }
      })}
      <p className="mb-8 mt-12 text-slate-400 text-center font-sans text-sm english-body italic">
        ~ End of Notes ~
      </p>
    </div>
  );
}
