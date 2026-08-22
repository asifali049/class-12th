import { Engine } from '../Engine';
import { getManifest } from '../manifest';
import * as schemas from '../schemas';

export class ChemistryGenerator {
  constructor(private engine: Engine) {}

  async generateChapter(chapterId: string) {
    const manifest = getManifest();
    const chapter = manifest.subjects['chemistry'].chapters.find(c => c.id === chapterId);
    if (!chapter) throw new Error("Chapter not found in manifest");

    const baseContext = `
      Board: UPMSP (UP Board)
      Session: 2026-27
      Class: 12
      Subject: Chemistry
      Chapter: ${chapter.id} - ${chapter.name}
    `;

    const systemPrompt = `You are an expert Class 12 Chemistry academic content writer. Generate accurate, bilingual (English/Hindi) JSON content aligned with the UP Board syllabus. Return ONLY JSON. Ensure balanced chemical equations and correct IUPAC names.`;

    await this.engine.runTask({ subjectId: 'chemistry', chapterId, section: 'notes', systemPrompt, prompt: `Generate comprehensive chemistry notes.\n\nContext:\n${baseContext}`, schema: schemas.NotesSchema });
    await this.engine.runTask({ subjectId: 'chemistry', chapterId, section: 'formulas', systemPrompt, prompt: `Generate important formulas and chemical reactions.\n\nContext:\n${baseContext}`, schema: schemas.FormulasSchema });
    await this.engine.runTask({ subjectId: 'chemistry', chapterId, section: 'derivations', systemPrompt, prompt: `Generate physical chemistry derivations or organic reaction mechanisms.\n\nContext:\n${baseContext}`, schema: schemas.DerivationsSchema });
    await this.engine.runTask({ subjectId: 'chemistry', chapterId, section: 'numericals', systemPrompt, prompt: `Generate numericals (for physical chemistry) or reasoning questions (for organic/inorganic).\n\nContext:\n${baseContext}`, schema: schemas.NumericalsSchema });
    await this.engine.runTask({ subjectId: 'chemistry', chapterId, section: 'questions', systemPrompt, prompt: `Generate MCQ and Subjective questions.\n\nContext:\n${baseContext}`, schema: schemas.QuestionsSchema });
    await this.engine.runTask({ subjectId: 'chemistry', chapterId, section: 'diagrams', systemPrompt, prompt: `Generate SVG diagram descriptions (e.g. crystal lattices, apparatus).\n\nContext:\n${baseContext}`, schema: schemas.DiagramsSchema });
    await this.engine.runTask({ subjectId: 'chemistry', chapterId, section: 'mindmap', systemPrompt, prompt: `Generate a concept mindmap.\n\nContext:\n${baseContext}`, schema: schemas.MindMapSchema });
    await this.engine.runTask({ subjectId: 'chemistry', chapterId, section: 'revisions', systemPrompt, prompt: `Generate 5-minute revision notes.\n\nContext:\n${baseContext}`, schema: schemas.RevisionsSchema });
  }
}
