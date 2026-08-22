import { Engine } from '../Engine';
import { getManifest } from '../manifest';
import * as schemas from '../schemas';

export class PhysicsGenerator {
  constructor(private engine: Engine) {}

  async generateChapter(chapterId: string) {
    const manifest = getManifest();
    const chapter = manifest.subjects['physics'].chapters.find(c => c.id === chapterId);
    if (!chapter) throw new Error("Chapter not found in manifest");

    const baseContext = `
      Board: UPMSP (UP Board)
      Session: 2026-27
      Class: 12
      Subject: Physics
      Chapter: ${chapter.id} - ${chapter.name}
    `;

    const systemPrompt = `You are an expert Class 12 academic content writer. You must generate accurate, bilingual (English/Hindi) JSON content aligned with the UP Board syllabus. Return ONLY JSON.`;

    // 1. Generate Notes
    await this.engine.runTask({
      subjectId: 'physics',
      chapterId: chapter.id,
      section: 'notes',
      systemPrompt,
      prompt: `Generate comprehensive notes for this chapter.\n\nContext:\n${baseContext}\n\nInclude headings, paragraphs, concepts, formulas, and tips. Use the specified JSON array schema.`,
      schema: schemas.NotesSchema
    });

    // 2. Generate Formulas
    await this.engine.runTask({
      subjectId: 'physics',
      chapterId: chapter.id,
      section: 'formulas',
      systemPrompt,
      prompt: `Generate all important formulas for this chapter.\n\nContext:\n${baseContext}\n\nEnsure LaTeX equations are perfectly formatted. Use the specified JSON array schema.`,
      schema: schemas.FormulasSchema
    });

    // 3. Generate Derivations
    await this.engine.runTask({
      subjectId: 'physics',
      chapterId: chapter.id,
      section: 'derivations',
      systemPrompt,
      prompt: `Generate step-by-step derivations for this chapter.\n\nContext:\n${baseContext}\n\nEnsure steps are logically sound and bilingual. Use the specified JSON array schema.`,
      schema: schemas.DerivationsSchema
    });

    // 4. Generate Numericals
    await this.engine.runTask({
      subjectId: 'physics',
      chapterId: chapter.id,
      section: 'numericals',
      systemPrompt,
      prompt: `Generate 5-10 numerical problems with step-by-step solutions for this chapter.\n\nContext:\n${baseContext}\n\nCheck your math carefully. Use the specified JSON array schema.`,
      schema: schemas.NumericalsSchema
    });

    // 5. Generate Questions
    await this.engine.runTask({
      subjectId: 'physics',
      chapterId: chapter.id,
      section: 'questions',
      systemPrompt,
      prompt: `Generate a mix of MCQ and Subjective questions for this chapter.\n\nContext:\n${baseContext}\n\nProvide ideal answers, keywords, and bilingual text. Use the specified JSON array schema.`,
      schema: schemas.QuestionsSchema
    });

    // 6. Generate Diagrams
    await this.engine.runTask({
      subjectId: 'physics',
      chapterId: chapter.id,
      section: 'diagrams',
      systemPrompt,
      prompt: `Generate SVG diagram descriptions with labels for this chapter.\n\nContext:\n${baseContext}\n\nEnsure viewBox and labels are accurate. Use the specified JSON array schema.`,
      schema: schemas.DiagramsSchema
    });

    // 7. Generate Mindmap
    await this.engine.runTask({
      subjectId: 'physics',
      chapterId: chapter.id,
      section: 'mindmap',
      systemPrompt,
      prompt: `Generate a concept mindmap for this chapter.\n\nContext:\n${baseContext}\n\nInclude hierarchical nodes. Use the specified JSON object schema.`,
      schema: schemas.MindMapSchema
    });

    // 8. Generate Revisions
    await this.engine.runTask({
      subjectId: 'physics',
      chapterId: chapter.id,
      section: 'revisions',
      systemPrompt,
      prompt: `Generate quick 5-minute revision notes for this chapter.\n\nContext:\n${baseContext}\n\nBreak it down by core topics. Use the specified JSON array schema.`,
      schema: schemas.RevisionsSchema
    });
  }
}
