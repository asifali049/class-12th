import fs from 'fs';
import path from 'path';
import * as schemas from '../../lib/content-engine/schemas';
import { validateLatex, validateNumerical, validateSVG, validateBilingual } from '../../lib/content-engine/validators';
import { getManifest } from '../../lib/content-engine/manifest';

const manifest = getManifest();

// Validate existing content files
async function run() {
  const subjectId = process.argv[2] || 'physics';
  const chapterId = process.argv[3] || 'ch1';
  
  const contentDir = path.join(process.cwd(), 'src/content', subjectId, 'chapters', chapterId);
  
  if (!fs.existsSync(contentDir)) {
    console.error(`Directory not found: ${contentDir}`);
    process.exit(1);
  }

  const sections: Record<string, any> = {
    'notes': schemas.NotesSchema,
    'formulas': schemas.FormulasSchema,
    'derivations': schemas.DerivationsSchema,
    'numericals': schemas.NumericalsSchema,
    'questions': schemas.QuestionsSchema,
    'diagrams': schemas.DiagramsSchema,
    'mindmap': schemas.MindMapSchema,
    'revisions': schemas.RevisionsSchema
  };

  let hasErrors = false;

  for (const [section, schema] of Object.entries(sections)) {
    const filePath = path.join(contentDir, `${section}.json`);
    if (!fs.existsSync(filePath)) {
      console.log(`[${section}] ⚠️ File missing`);
      continue;
    }

    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      
      // If the file is basically empty or placeholder from skeleton script, skip deep validation
      if (Array.isArray(data) && data.length === 0) {
         console.log(`[${section}] ℹ️ Empty array (Skeleton)`);
         continue;
      }
      if (data && data.id === 'root' && data.children && data.children.length === 0) {
         console.log(`[${section}] ℹ️ Empty mindmap (Skeleton)`);
         continue;
      }

      const result = schema.safeParse(data);
      if (!result.success) {
        console.error(`[${section}] ❌ Zod Schema Error:`);
        console.error(JSON.stringify(result.error.issues, null, 2));
        hasErrors = true;
        continue;
      }

      // Add basic determinisic checking logic 
      if (section === 'formulas') {
        let latexError = false;
        for (const item of data) {
           if (item.equation && !validateLatex(item.equation)) latexError = true;
           if (item.formula && !validateLatex(item.formula)) latexError = true;
        }
        if (latexError) {
          console.error(`[${section}] ❌ LaTeX Error`);
          hasErrors = true;
          continue;
        }
      }

      console.log(`[${section}] ✓ Valid`);

    } catch (e: any) {
      console.error(`[${section}] ❌ Parse Error: ${e.message}`);
      hasErrors = true;
    }
  }

  if (hasErrors) {
    console.error("\n❌ Validation Failed");
    process.exit(1);
  } else {
    console.log("\n✓ All sections valid");
  }
}

run().catch(console.error);
