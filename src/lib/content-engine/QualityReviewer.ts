import { LLMProvider } from './providers/LLMProvider';
import { z } from 'zod';

export const ReviewScoreSchema = z.object({
  overallScore: z.number(),
  accuracy: z.number(),
  syllabusAlignment: z.number(),
  hindiQuality: z.number(),
  englishQuality: z.number(),
  hinglishQuality: z.number(),
  completeness: z.number(),
  examRelevance: z.number(),
  technicalFormatting: z.number(),
  issues: z.array(z.string()),
  criticalErrors: z.array(z.string()),
  improvements: z.array(z.string())
});

export type ReviewScore = z.infer<typeof ReviewScoreSchema>;

export class QualityReviewer {
  constructor(private provider: LLMProvider) {}

  async review(content: any, sectionType: string): Promise<ReviewScore> {
    const prompt = `
    You are an expert academic reviewer for UP Board Class 12 Science.
    Review the following generated ${sectionType} content.
    Score each aspect from 0 to 10.
    If there are any critical errors (wrong formulas, wrong facts, missing required Hindi/English, hallucinated syllabus), list them in criticalErrors.
    Return ONLY a JSON matching this exact structure:
    {
      "overallScore": 9.2,
      "accuracy": 9.5,
      "syllabusAlignment": 10,
      "hindiQuality": 9,
      "englishQuality": 9.5,
      "hinglishQuality": 8.8,
      "completeness": 9,
      "examRelevance": 9.5,
      "technicalFormatting": 10,
      "issues": [],
      "criticalErrors": [],
      "improvements": []
    }
    
    Content to review:
    ${JSON.stringify(content, null, 2)}
    `;

    const responseText = await this.provider.generate({
      systemPrompt: "You are a stringent academic quality reviewer. Output only JSON.",
      prompt
    });

    try {
      const match = responseText.match(/\{[\s\S]*\}/);
      if (match) {
        return ReviewScoreSchema.parse(JSON.parse(match[0]));
      }
      throw new Error("No JSON object found in response");
    } catch (e) {
      console.error("Failed to parse review score:", responseText);
      return {
        overallScore: 0, accuracy: 0, syllabusAlignment: 0, hindiQuality: 0, englishQuality: 0, hinglishQuality: 0, completeness: 0, examRelevance: 0, technicalFormatting: 0,
        issues: [], criticalErrors: ["Review parsing failed"], improvements: []
      };
    }
  }
}
