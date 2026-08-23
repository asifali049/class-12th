const fs = require('fs');
const path = require('path');
const subjects = ['physics', 'chemistry', 'biology'];
const sections = ['notes', 'formulas', 'derivations', 'numericals', 'questions', 'diagrams', 'mindmap', 'revisions', 'test', 'flashcards'];

const reportFile = path.join(process.cwd(), 'qa_automated_report.md');
let report = '# Automated QA Report\n\n';

for (const subject of subjects) {
  report += '## Subject: ' + subject.toUpperCase() + '\n\n';
  const chaptersDir = path.join(process.cwd(), 'src', 'content', subject, 'chapters');
  if (!fs.existsSync(chaptersDir)) {
    report += 'Directory not found for ' + subject + '\n\n';
    continue;
  }
  const chapters = fs.readdirSync(chaptersDir).sort((a,b) => parseInt(a.replace('ch','')) - parseInt(b.replace('ch','')));
  for (const ch of chapters) {
    report += '### Chapter ' + ch + '\n';
    const chPath = path.join(chaptersDir, ch);
    for (const sec of sections) {
      const filePath = path.join(chPath, sec + '.json');
      if (fs.existsSync(filePath)) {
        try {
          const content = fs.readFileSync(filePath, 'utf-8');
          const data = JSON.parse(content);
          const length = Array.isArray(data) ? data.length : Object.keys(data).length;
          report += '- ' + sec + ': EXISTS (Count/Length: ' + length + ')\n';
        } catch(e) {
          report += '- ' + sec + ': INVALID JSON (' + e.message + ')\n';
        }
      } else {
        report += '- ' + sec + ': MISSING\n';
      }
    }
    report += '\n';
  }
}
fs.writeFileSync(reportFile, report);
console.log('Automated QA report generated at ' + reportFile);
