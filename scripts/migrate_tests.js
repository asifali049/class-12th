const fs = require('fs');
const path = require('path');

const subjects = ['physics', 'chemistry'];
const baseDir = path.join(__dirname, '..', 'src', 'content');

subjects.forEach(subject => {
  const chaptersDir = path.join(baseDir, subject, 'chapters');
  if (fs.existsSync(chaptersDir)) {
    const chapters = fs.readdirSync(chaptersDir);
    chapters.forEach(chapter => {
      const testPath = path.join(chaptersDir, chapter, 'test.json');
      if (fs.existsSync(testPath)) {
        try {
          const content = fs.readFileSync(testPath, 'utf8');
          const data = JSON.parse(content);
          
          if (Array.isArray(data)) {
            // It's in the old array format
            console.log(`Migrating ${subject}/${chapter}/test.json...`);
            
            const newFormat = {
              id: `t_${subject}_${chapter}`,
              title: {
                en: `${subject.charAt(0).toUpperCase() + subject.slice(1)} Chapter ${chapter.replace('ch', '')} Mock Test`,
                hi: `${subject === 'physics' ? 'भौतिकी' : 'रसायन विज्ञान'} अध्याय ${chapter.replace('ch', '')} मॉक टेस्ट`
              },
              duration: 15,
              totalQuestions: data.length,
              questions: data
            };
            
            fs.writeFileSync(testPath, JSON.stringify(newFormat, null, 2), 'utf8');
            console.log(`Successfully migrated ${subject}/${chapter}/test.json`);
          } else {
            console.log(`Skipping ${subject}/${chapter}/test.json (already object format)`);
          }
        } catch (err) {
          console.error(`Error processing ${testPath}:`, err);
        }
      }
    });
  }
});
