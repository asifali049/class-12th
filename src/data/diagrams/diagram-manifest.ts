import { BilingualText } from "../types";

export interface DiagramManifestEntry {
  id: string;
  subject: string;
  chapterId: string;
  title: BilingualText;
  description: BilingualText;
  type: "svg" | "image" | "graph";
  importance: "high" | "medium" | "low";
  examRelevant: boolean;
  sourceType: "generated-svg" | "ai-generated" | "structured";
  assetPath: string; // "inline" if embedded, or "public/diagrams/..."
  labels?: {
    id: string;
    x: number;
    y: number;
    text: BilingualText;
  }[];
}

export const diagramManifest: DiagramManifestEntry[] = [];
