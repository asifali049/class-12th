const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\PC\\Desktop\\12th\\src\\content';
const subjects = [
  { name: 'biology', chapters: 13 },
  { name: 'english', chapters: 8 } // Assuming 8 chapters for English
];

const files = [
  { name: 'notes.json', content: '[\n  {\n    "id": "n1",\n    "title": {\n      "en": "Introduction",\n      "hi": "परिचय"\n    },\n    "content": {\n      "en": "Content being updated.",\n      "hi": "सामग्री अपडेट की जा रही है।"\n    }\n  }\n]' },
  { name: 'questions.json', content: '[\n  {\n    "id": "q1",\n    "type": "subjective",\n    "difficulty": "Medium",\n    "marks": 5,\n    "question": {\n      "en": "Important question being updated.",\n      "hi": "महत्वपूर्ण प्रश्न अपडेट किया जा रहा है।"\n    },\n    "idealAnswer": {\n      "en": "Answer being updated.",\n      "hi": "उत्तर अपडेट किया जा रहा है।"\n    },\n    "keywords": []\n  }\n]' },
  { name: 'formulas.json', content: '[]' },
  { name: 'derivations.json', content: '[]' },
  { name: 'numericals.json', content: '[]' },
  { name: 'diagrams.json', content: '[]' },
  { name: 'mindmap.json', content: '{\n  "id": "root",\n  "label": {\n    "en": "Chapter Overview",\n    "hi": "अध्याय अवलोकन"\n  },\n  "children": []\n}' },
  { name: 'revisions.json', content: '[\n  {\n    "id": "rev1",\n    "topic": {\n      "en": "Quick Review",\n      "hi": "त्वरित समीक्षा",\n      "hinglish": "Quick Review"\n    },\n    "summary": {\n      "en": "Summary being updated.",\n      "hi": "सारांश अपडेट किया जा रहा है।"\n    },\n    "quickRecall": []\n  }\n]' }
];

subjects.forEach(subject => {
  for (let i = 1; i <= subject.chapters; i++) {
    const chapterDir = path.join(baseDir, subject.name, 'chapters', `ch${i}`);
    
    // Create directory recursively
    if (!fs.existsSync(chapterDir)) {
      fs.mkdirSync(chapterDir, { recursive: true });
    }
    
    // Write files
    files.forEach(file => {
      const filePath = path.join(chapterDir, file.name);
      fs.writeFileSync(filePath, file.content, 'utf8');
      console.log(`Created ${filePath}`);
    });
  }
});
console.log('All files generated successfully!');
