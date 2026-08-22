import { Diagram } from "@/data/types";

export function validateDiagram(diagram: Diagram): string[] {
  const errors: string[] = [];

  if (!diagram.id) {
    errors.push("Diagram ID is missing.");
  }

  if (!diagram.title || (!(diagram.title as any).en && !(diagram.title as any).hi)) {
    errors.push(`Diagram ${diagram.id} is missing a bilingual title.`);
  }

  if (!diagram.svgContent || diagram.svgContent.trim() === "" || diagram.svgContent === "<svg></svg>") {
    errors.push(`Diagram ${diagram.id} has empty or missing svgContent.`);
  } else {
    // Check for valid viewBox
    if (!diagram.svgContent.includes("viewBox=")) {
      errors.push(`Diagram ${diagram.id} is missing viewBox in svgContent.`);
    }
  }

  // If there are labels, ensure they have valid coordinates and text
  if (diagram.labels) {
    diagram.labels.forEach((label, index) => {
      if (typeof label.x !== 'number' || typeof label.y !== 'number') {
        errors.push(`Diagram ${diagram.id} label at index ${index} has invalid coordinates.`);
      }
      if (!label.text || (!(label.text as any).en && !(label.text as any).hi)) {
        errors.push(`Diagram ${diagram.id} label at index ${index} is missing bilingual text.`);
      }
    });
  }

  return errors;
}
