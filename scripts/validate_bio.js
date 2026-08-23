const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/content/biology/chapters');
const filesToCheck = [
  'notes.json', 'formulas.json', 'derivations.json', 
  'numericals.json', 'questions.json', 'diagrams.json', 
  'revisions.json', 'test.json', 'mindmap.json'
];

let allValid = true;

for (let ch = 1; ch <= 13; ch++) {
  const chDir = path.join(baseDir, `ch${ch}`);
  if (!fs.existsSync(chDir)) {
    console.log(`[ERROR] Chapter ${ch} directory is missing: ${chDir}`);
    allValid = false;
    continue;
  }
  
  filesToCheck.forEach(file => {
    const filePath = path.join(chDir, file);
    if (!fs.existsSync(filePath)) {
      console.log(`[ERROR] Chapter ${ch} missing file: ${file}`);
      allValid = false;
    } else {
      const content = fs.readFileSync(filePath, 'utf-8');
      if (content.trim().length === 0) {
        console.log(`[ERROR] Chapter ${ch} empty file: ${file}`);
        allValid = false;
      } else {
        try {
          const parsed = JSON.parse(content);
          if (Array.isArray(parsed) && parsed.length === 0) {
             console.log(`[WARN] Chapter ${ch} empty array in file: ${file}`);
          }
        } catch(e) {
          console.log(`[ERROR] Chapter ${ch} invalid JSON in file: ${file}`);
          allValid = false;
        }
      }
    }
  });
}

if (allValid) {
  console.log("Validation complete: All files are present and valid.");
} else {
  console.log("Validation complete: Found issues.");
}
