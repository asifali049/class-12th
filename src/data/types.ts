// src/data/types.ts

export interface BilingualText {
  en: string;
  hi: string;
  hinglish?: string;
}

export type Language = 'en' | 'hi' | 'hinglish';

// Utility to get the correct string based on current language
export function getLocalizedText(text: BilingualText | string | undefined, lang: Language): string {
  if (!text) return '';
  if (typeof text === 'string') return text;
  if (lang === 'en') return text.en;
  if (lang === 'hi') return text.hi;
  if (lang === 'hinglish') return text.hinglish || text.hi; // Fallback to Hindi if Hinglish missing
  return text.hi; // Default fallback
}

export type NoteBlockType = 'heading' | 'paragraph' | 'concept' | 'tip' | 'formula' | 'highlight' | 'diagram_placeholder' | 'list';

export interface NoteBlock {
  type: NoteBlockType;
  text?: BilingualText | string;
  equation?: string;
  label?: BilingualText | string;
  items?: (BilingualText | string)[];
}

export type DerivationStep = {
  title?: BilingualText | string;
  content: BilingualText | string;
};

export type Derivation = {
  id: string;
  title: BilingualText | string;
  given: BilingualText | string;
  toFind: BilingualText | string;
  concept: BilingualText | string;
  steps: DerivationStep[];
  finalResult: string; // formula
  examTip?: BilingualText | string;
};

export type Numerical = {
  id: string;
  question: BilingualText | string;
  given: BilingualText | string;
  required: BilingualText | string;
  formula: string;
  substitution: string;
  calculation: string;
  finalAnswer: string;
  unit: string;
  examTip?: BilingualText | string;
  difficulty: 'easy' | 'medium' | 'hard';
};

export type Diagram = {
  id: string;
  title: BilingualText | string;
  svgContent: string;
  description: BilingualText | string;
  labels: { id: string; x: number; y: number; text: BilingualText | string }[];
};

export type MindMapNode = {
  id: string;
  label: BilingualText | string;
  children?: MindMapNode[];
};
