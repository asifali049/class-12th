import { syllabusData, SubjectData, Chapter } from '../../data/syllabus';

export type ContentStatus = 'not_started' | 'generating' | 'generated' | 'validating' | 'review' | 'approved' | 'published' | 'failed';
export type SectionType = 'notes' | 'formulas' | 'derivations' | 'numericals' | 'questions' | 'diagrams' | 'mindmap' | 'revisions';

export interface VerifiedChapter extends Chapter {
  verified: boolean;
}

export interface VerifiedSubject extends SubjectData {
  verified: boolean;
  chapters: VerifiedChapter[];
}

export interface CurriculumManifest {
  session: string;
  board: string;
  class: number;
  subjects: Record<string, VerifiedSubject>;
}

export function getManifest(): CurriculumManifest {
  const verifiedSubjects: Record<string, VerifiedSubject> = {};

  for (const [id, subject] of Object.entries(syllabusData)) {
    // Determine which subjects and chapters are verified UPMSP targets
    // For this engine, we assume all defined in syllabus.ts are our targets.
    const chapters: VerifiedChapter[] = subject.chapters.map(ch => ({
      ...ch,
      verified: true
    }));

    verifiedSubjects[id] = {
      ...subject,
      verified: true,
      chapters
    };
  }

  return {
    session: "2026-27",
    board: "UPMSP",
    class: 12,
    subjects: verifiedSubjects
  };
}
