import { Engine } from '../Engine';
import { getManifest } from '../manifest';
import * as schemas from '../schemas';

export class HindiGenerator {
  constructor(private engine: Engine) {}

  async generateChapter(chapterId: string) {
    const manifest = getManifest();
    const chapter = manifest.subjects['hindi'].chapters.find(c => c.id === chapterId);
    if (!chapter) throw new Error("Chapter not found in manifest");

    const baseContext = `
      Board: UPMSP (UP Board)
      Session: 2026-27
      Class: 12
      Subject: Hindi / General Hindi
      Chapter: ${chapter.id} - ${chapter.name}
    `;

    const systemPrompt = `You are an expert Class 12 Hindi academic content writer. Generate accurate, bilingual (Hindi/English) JSON content aligned with the UP Board syllabus. Provide formal Hindi and explanatory English. Do not use machine-translated literal Hindi. Return ONLY JSON.`;

    await this.engine.runTask({ subjectId: 'hindi', chapterId, section: 'notes', systemPrompt, prompt: `Generate पाठ परिचय, लेखक/कवि परिचय, सारांश, and भावार्थ.\n\nContext:\n${baseContext}`, schema: schemas.NotesSchema });
    await this.engine.runTask({ subjectId: 'hindi', chapterId, section: 'formulas', systemPrompt, prompt: `Generate key व्याकरण (grammar) rules or काव्य सौंदर्य (poetic beauty) elements.\n\nContext:\n${baseContext}`, schema: schemas.FormulasSchema });
    await this.engine.runTask({ subjectId: 'hindi', chapterId, section: 'derivations', systemPrompt, prompt: `Generate detailed व्याख्या (explanations) with संदर्भ and प्रसंग.\n\nContext:\n${baseContext}`, schema: schemas.DerivationsSchema });
    await this.engine.runTask({ subjectId: 'hindi', chapterId, section: 'numericals', systemPrompt, prompt: `Generate writing skills practice (e.g., निबंध, पत्र लेखन).\n\nContext:\n${baseContext}`, schema: schemas.NumericalsSchema });
    await this.engine.runTask({ subjectId: 'hindi', chapterId, section: 'questions', systemPrompt, prompt: `Generate MCQ, अतिलघु, लघु, and विस्तृत उत्तरीय प्रश्न.\n\nContext:\n${baseContext}`, schema: schemas.QuestionsSchema });
    await this.engine.runTask({ subjectId: 'hindi', chapterId, section: 'diagrams', systemPrompt, prompt: `Generate structural diagrams if applicable (e.g. grammar charts).\n\nContext:\n${baseContext}`, schema: schemas.DiagramsSchema });
    await this.engine.runTask({ subjectId: 'hindi', chapterId, section: 'mindmap', systemPrompt, prompt: `Generate a theme or character mindmap.\n\nContext:\n${baseContext}`, schema: schemas.MindMapSchema });
    await this.engine.runTask({ subjectId: 'hindi', chapterId, section: 'revisions', systemPrompt, prompt: `Generate quick revision summary.\n\nContext:\n${baseContext}`, schema: schemas.RevisionsSchema });
  }
}
