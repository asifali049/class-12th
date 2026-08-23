import fs from 'fs';
import path from 'path';
import { LLMProvider } from './providers/LLMProvider';
import { StatusStore, SectionStatus } from './store';
import { QualityReviewer, ReviewScore } from './QualityReviewer';
import { z } from 'zod';
import { validateLatex, validateSVG, validateBilingual } from './validators';

export interface GenerationTask {
  subjectId: string;
  chapterId: string;
  section: string;
  prompt: string;
  systemPrompt: string;
  schema: z.ZodTypeAny;
}

export class Engine {
  private reviewer: QualityReviewer;

  constructor(private provider: LLMProvider, private store: StatusStore) {
    this.reviewer = new QualityReviewer(provider);
  }

  async runTask(task: GenerationTask, maxAttempts = 3) {
    const currentStatus = this.store.getSectionStatus(task.subjectId, task.chapterId, task.section);

    if (currentStatus.status === 'approved' || currentStatus.status === 'published') {
      console.log(`[${task.subjectId}/${task.chapterId}/${task.section}] Already approved. Skipping.`);
      return;
    }

    let attempt = currentStatus.attempt || 0;
    let feedback = currentStatus.issues?.join('\n') || '';

    this.store.updateSectionStatus(task.subjectId, task.chapterId, task.section, { status: 'generating' });

    while (attempt < maxAttempts) {
      attempt++;
      console.log(`[${task.subjectId}/${task.chapterId}/${task.section}] Attempt ${attempt}/${maxAttempts}`);
      this.store.updateSectionStatus(task.subjectId, task.chapterId, task.section, { attempt });

      let prompt = task.prompt;
      if (feedback) {
        prompt += `\n\nPREVIOUS FEEDBACK TO IMPROVE UPON:\n${feedback}`;
      }

      try {
        const rawResponse = await this.provider.generate({
          systemPrompt: task.systemPrompt,
          prompt,
        });

        const match = rawResponse.match(/\[[\s\S]*\]|\{[\s\S]*\}/);
        if (!match) throw new Error("No JSON found in response");

        const parsed = JSON.parse(match[0]);

        // 1. Zod Validation
        this.store.updateSectionStatus(task.subjectId, task.chapterId, task.section, { status: 'validating' });
        const validationResult = task.schema.safeParse(parsed);
        if (!validationResult.success) {
          throw new Error("Schema validation failed: " + JSON.stringify(validationResult.error.issues));
        }

        // 2. Deterministic Validation (Custom per section, but bilingual is universal for items containing en/hi)
        // A deep check for bilingual text could be added here, but Zod schema handles it mostly.
        // We'll trust Zod for bilingual structure if we use BilingualTextSchema.

        // 3. LLM Quality Review
        this.store.updateSectionStatus(task.subjectId, task.chapterId, task.section, { status: 'reviewing' });
        const review: ReviewScore = await this.reviewer.review(parsed, task.section);

        if (review.criticalErrors && review.criticalErrors.length > 0) {
          throw new Error("CRITICAL ERRORS: " + review.criticalErrors.join(", "));
        }

        if (review.overallScore < 9) {
          throw new Error("Score below 9: " + review.overallScore + ". Issues: " + review.issues?.join(", "));
        }

        // 4. Save and Checkpoint
        this.store.updateSectionStatus(task.subjectId, task.chapterId, task.section, { 
          status: 'approved',
          score: review.overallScore,
          version: currentStatus.version + 1,
          issues: []
        });

        const chapterDir = path.join(process.cwd(), 'src/content', task.subjectId, 'chapters', task.chapterId);
        if (!fs.existsSync(chapterDir)) fs.mkdirSync(chapterDir, { recursive: true });
        
        fs.writeFileSync(path.join(chapterDir, `${task.section}.json`), JSON.stringify(parsed, null, 2));
        console.log(`[${task.subjectId}/${task.chapterId}/${task.section}] APPROVED and SAVED.`);
        return; // Success

      } catch (err: any) {
        console.error(`[${task.subjectId}/${task.chapterId}/${task.section}] Generation failed:`, err.message);
        feedback = err.message;
        this.store.updateSectionStatus(task.subjectId, task.chapterId, task.section, { 
          status: 'improving',
          issues: [err.message]
        });
      }
    }

    // Failed after max attempts
    this.store.updateSectionStatus(task.subjectId, task.chapterId, task.section, { 
      status: 'human_review_required' 
    });
    console.log(`[${task.subjectId}/${task.chapterId}/${task.section}] HUMAN REVIEW REQUIRED.`);
  }
}
