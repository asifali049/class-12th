import { z } from 'zod';

export const BilingualTextSchema = z.object({
  en: z.string().min(1),
  hi: z.string().min(1),
  hinglish: z.string().optional()
});

export const NoteBlockSchema = z.object({
  type: z.enum(['heading', 'paragraph', 'concept', 'tip', 'formula', 'highlight', 'diagram_placeholder', 'list']),
  text: z.union([BilingualTextSchema, z.string()]).optional(),
  equation: z.string().optional(),
  label: z.union([BilingualTextSchema, z.string()]).optional(),
  items: z.array(z.union([BilingualTextSchema, z.string()])).optional()
});

export const NotesSchema = z.array(NoteBlockSchema);

export const FormulaSchema = z.object({
  id: z.string(),
  title: z.union([BilingualTextSchema, z.string()]),
  equation: z.string().optional(),
  formula: z.string().optional(),
  variables: z.union([z.record(z.string(), z.union([BilingualTextSchema, z.string()])), BilingualTextSchema, z.string()]),
  importance: z.enum(['High', 'Medium', 'Low']).optional(),
  unit: z.union([BilingualTextSchema, z.string()]).optional(),
  description: z.union([BilingualTextSchema, z.string()]).optional(),
  examTip: z.union([BilingualTextSchema, z.string()]).optional()
});

export const FormulasSchema = z.array(FormulaSchema);

export const DerivationStepSchema = z.object({
  title: z.union([BilingualTextSchema, z.string()]).optional(),
  content: z.union([BilingualTextSchema, z.string()])
});

export const DerivationSchema = z.object({
  id: z.string(),
  title: z.union([BilingualTextSchema, z.string()]),
  given: z.union([BilingualTextSchema, z.string()]),
  toFind: z.union([BilingualTextSchema, z.string()]),
  concept: z.union([BilingualTextSchema, z.string()]),
  steps: z.array(DerivationStepSchema),
  finalResult: z.string(),
  examTip: z.union([BilingualTextSchema, z.string()]).optional()
});

export const DerivationsSchema = z.array(DerivationSchema);

export const NumericalSchema = z.object({
  id: z.string(),
  question: z.union([BilingualTextSchema, z.string()]),
  given: z.union([BilingualTextSchema, z.string()]),
  required: z.union([BilingualTextSchema, z.string()]),
  formula: z.string(),
  substitution: z.string(),
  calculation: z.string(),
  finalAnswer: z.string(),
  unit: z.string(),
  examTip: z.union([BilingualTextSchema, z.string()]).optional(),
  difficulty: z.enum(['easy', 'medium', 'hard', 'Easy', 'Medium', 'Hard'])
});

export const NumericalsSchema = z.array(NumericalSchema);

export const QuestionSchema = z.object({
  id: z.string(),
  type: z.enum(['mcq', 'subjective']),
  difficulty: z.enum(['Easy', 'Medium', 'Hard', 'easy', 'medium', 'hard', 'Board Level']),
  marks: z.number().optional(),
  question: z.union([BilingualTextSchema, z.string()]),
  options: z.array(z.union([BilingualTextSchema, z.string()])).optional(),
  correctOptionIndex: z.number().optional(),
  idealAnswer: z.union([BilingualTextSchema, z.string()]).optional(),
  keywords: z.array(z.union([BilingualTextSchema, z.string()])).optional(),
  tips: z.union([BilingualTextSchema, z.string()]).optional(),
  explanation: z.union([BilingualTextSchema, z.string()]).optional() // backward compat
});

export const QuestionsSchema = z.array(QuestionSchema);

export const DiagramLabelSchema = z.object({
  id: z.string(),
  x: z.number(),
  y: z.number(),
  text: z.union([BilingualTextSchema, z.string()])
});

export const DiagramSchema = z.object({
  id: z.string(),
  title: z.union([BilingualTextSchema, z.string()]),
  svgContent: z.string(),
  description: z.union([BilingualTextSchema, z.string()]),
  labels: z.array(DiagramLabelSchema)
});

export const DiagramsSchema = z.array(DiagramSchema);

export const MindMapNodeSchema = z.object({
  id: z.string(),
  label: z.union([BilingualTextSchema, z.string()])
});
export type MindMapNodeType = z.infer<typeof MindMapNodeSchema> & { children?: MindMapNodeType[] };

export const MindMapNodeRecursive: z.ZodType<MindMapNodeType> = MindMapNodeSchema.extend({
  children: z.lazy(() => MindMapNodeRecursive.array().optional())
});

export const MindMapSchema = MindMapNodeRecursive;

export const RevisionTopicSchema = z.object({
  id: z.string(),
  topic: z.union([BilingualTextSchema, z.string()]).optional(),
  title: z.union([BilingualTextSchema, z.string()]).optional(), // backward compat
  summary: z.union([BilingualTextSchema, z.string()]).optional(),
  content: z.union([BilingualTextSchema, z.string()]).optional(), // backward compat
  duration: z.string().optional(), // backward compat
  quickRecall: z.array(z.union([BilingualTextSchema, z.string()])).optional()
});

export const RevisionsSchema = z.array(RevisionTopicSchema);
