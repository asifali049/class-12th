import { Engine } from '../Engine';
import { getManifest } from '../manifest';
import * as schemas from '../schemas';

export class BiologyGenerator {
  constructor(private engine: Engine) {}

  async generateChapter(chapterId: string) {
    const manifest = getManifest();
    const chapter = manifest.subjects['biology'].chapters.find(c => c.id === chapterId);
    if (!chapter) throw new Error("Chapter not found in manifest");

    const baseContext = `
      Board: UPMSP (UP Board)
      Session: 2026-27
      Class: 12
      Subject: Biology
      Chapter: ${chapter.id} - ${chapter.name}
    `;

    const systemPrompt = `You are an expert Class 12 Biology academic content writer. Generate accurate, bilingual (English/Hindi) JSON content aligned with the UP Board syllabus. Ensure accurate biological terms, taxonomy, and processes. Return ONLY JSON.`;

    await this.engine.runTask({ subjectId: 'biology', chapterId, section: 'notes', systemPrompt, prompt: `Generate comprehensive biology notes.\n\nContext:\n${baseContext}`, schema: schemas.NotesSchema });
    await this.engine.runTask({ subjectId: 'biology', chapterId, section: 'formulas', systemPrompt, prompt: `Generate important tables, differences, and key genetic formulas/ratios.\n\nContext:\n${baseContext}`, schema: schemas.FormulasSchema });
    await this.engine.runTask({ subjectId: 'biology', chapterId, section: 'derivations', systemPrompt, prompt: `Generate step-by-step biological processes (e.g. DNA replication, human reproduction).\n\nContext:\n${baseContext}`, schema: schemas.DerivationsSchema });
    await this.engine.runTask({ subjectId: 'biology', chapterId, section: 'numericals', systemPrompt, prompt: `Generate genetics numericals or data interpretation questions.\n\nContext:\n${baseContext}`, schema: schemas.NumericalsSchema });
    await this.engine.runTask({ subjectId: 'biology', chapterId, section: 'questions', systemPrompt, prompt: `Generate MCQ and Subjective questions.\n\nContext:\n${baseContext}`, schema: schemas.QuestionsSchema });
    await this.engine.runTask({ subjectId: 'biology', chapterId, section: 'diagrams', systemPrompt, prompt: `Generate structured SVG specifications for biological diagrams with precise labels.\n\nContext:\n${baseContext}`, schema: schemas.DiagramsSchema });
    await this.engine.runTask({ subjectId: 'biology', chapterId, section: 'mindmap', systemPrompt, prompt: `Generate a concept mindmap.\n\nContext:\n${baseContext}`, schema: schemas.MindMapSchema });
    await this.engine.runTask({ subjectId: 'biology', chapterId, section: 'revisions', systemPrompt, prompt: `Generate 5-minute revision notes.\n\nContext:\n${baseContext}`, schema: schemas.RevisionsSchema });
  }
}
