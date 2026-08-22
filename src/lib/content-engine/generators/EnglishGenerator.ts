import { Engine } from '../Engine';
import { getManifest } from '../manifest';
import * as schemas from '../schemas';

export class EnglishGenerator {
  constructor(private engine: Engine) {}

  async generateChapter(chapterId: string) {
    const manifest = getManifest();
    const chapter = manifest.subjects['english'].chapters.find(c => c.id === chapterId);
    if (!chapter) throw new Error("Chapter not found in manifest");

    const baseContext = `
      Board: UPMSP (UP Board)
      Session: 2026-27
      Class: 12
      Subject: English
      Chapter: ${chapter.id} - ${chapter.name}
    `;

    const systemPrompt = `You are an expert Class 12 English academic content writer. Generate accurate, bilingual (English/Hindi) JSON content aligned with the UP Board syllabus. Create original explanations; do not copy textbook prose. Return ONLY JSON.`;

    await this.engine.runTask({ subjectId: 'english', chapterId, section: 'notes', systemPrompt, prompt: `Generate chapter summary, central idea, characters, events, and vocabulary.\n\nContext:\n${baseContext}`, schema: schemas.NotesSchema });
    await this.engine.runTask({ subjectId: 'english', chapterId, section: 'formulas', systemPrompt, prompt: `Generate key grammar rules or vocabulary terms relevant to the chapter.\n\nContext:\n${baseContext}`, schema: schemas.FormulasSchema });
    await this.engine.runTask({ subjectId: 'english', chapterId, section: 'derivations', systemPrompt, prompt: `Generate character sketches or detailed event breakdowns.\n\nContext:\n${baseContext}`, schema: schemas.DerivationsSchema });
    await this.engine.runTask({ subjectId: 'english', chapterId, section: 'numericals', systemPrompt, prompt: `Generate writing skills practice (e.g., article, letter) related to the themes.\n\nContext:\n${baseContext}`, schema: schemas.NumericalsSchema });
    await this.engine.runTask({ subjectId: 'english', chapterId, section: 'questions', systemPrompt, prompt: `Generate extract-based, short answer, and long answer questions.\n\nContext:\n${baseContext}`, schema: schemas.QuestionsSchema });
    await this.engine.runTask({ subjectId: 'english', chapterId, section: 'diagrams', systemPrompt, prompt: `Generate timeline or relationship diagrams if applicable.\n\nContext:\n${baseContext}`, schema: schemas.DiagramsSchema });
    await this.engine.runTask({ subjectId: 'english', chapterId, section: 'mindmap', systemPrompt, prompt: `Generate a theme or plot mindmap.\n\nContext:\n${baseContext}`, schema: schemas.MindMapSchema });
    await this.engine.runTask({ subjectId: 'english', chapterId, section: 'revisions', systemPrompt, prompt: `Generate quick revision summary.\n\nContext:\n${baseContext}`, schema: schemas.RevisionsSchema });
  }
}
