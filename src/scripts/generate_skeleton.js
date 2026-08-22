const fs = require('fs');
const path = require('path');

// Extract syllabus data manually for the script
const syllabusData = {
  physics: {
    chapters: [
      { id: "ch1" }, { id: "ch2" }, { id: "ch3" }, { id: "ch4" }, { id: "ch5" },
      { id: "ch6" }, { id: "ch7" }, { id: "ch8" }, { id: "ch9" }, { id: "ch10" },
      { id: "ch11" }, { id: "ch12" }, { id: "ch13" }, { id: "ch14" }
    ]
  },
  chemistry: {
    chapters: [
      { id: "ch1" }, { id: "ch2" }, { id: "ch3" }, { id: "ch4" }, { id: "ch5" },
      { id: "ch6" }, { id: "ch7" }, { id: "ch8" }, { id: "ch9" }, { id: "ch10" }
    ]
  },
  biology: {
    chapters: [
      { id: "ch1" }, { id: "ch2" }, { id: "ch3" }, { id: "ch4" }, { id: "ch5" },
      { id: "ch6" }, { id: "ch7" }, { id: "ch8" }, { id: "ch9" }, { id: "ch10" },
      { id: "ch11" }, { id: "ch12" }, { id: "ch13" }
    ]
  },
  hindi: {
    chapters: [
      { id: "ch1" }, { id: "ch2" }, { id: "ch3" }, { id: "ch4" }, { id: "ch5" }, { id: "ch6" }
    ]
  },
  english: {
    chapters: [
      { id: "ch1" }, { id: "ch2" }, { id: "ch3" }, { id: "ch4" }, { id: "ch5" },
      { id: "ch6" }, { id: "ch7" }, { id: "ch8" }, { id: "ch9" }, { id: "ch10" }, { id: "ch11" }
    ]
  }
};

const contentDir = path.join(__dirname, '..', 'content');

const filesToGenerate = [
  'notes.json', 'formulas.json', 'derivations.json', 'numericals.json', 
  'questions.json', 'diagrams.json', 'mindmap.json', 'revisions.json'
];

Object.entries(syllabusData).forEach(([subjectId, subject]) => {
  subject.chapters.forEach(chapter => {
    const chapterDir = path.join(contentDir, subjectId, 'chapters', chapter.id);
    
    // Create directory if not exists
    if (!fs.existsSync(chapterDir)) {
      fs.mkdirSync(chapterDir, { recursive: true });
    }

    // Create empty array skeletons if files don't exist
    filesToGenerate.forEach(file => {
      const filePath = path.join(chapterDir, file);
      if (!fs.existsSync(filePath)) {
        if (file === 'mindmap.json') {
          fs.writeFileSync(filePath, JSON.stringify({
            id: "root",
            label: { en: "Root", hi: "मूल" },
            children: []
          }, null, 2));
        } else {
          fs.writeFileSync(filePath, '[]');
        }
      }
    });
  });
});

console.log("Skeleton folders and files generated successfully for all subjects and chapters.");
