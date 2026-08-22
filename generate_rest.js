const fs = require('fs');
const path = require('path');

const generateForSubject = (subjectId, chapters) => {
  const basePath = path.join(process.cwd(), 'src/content', subjectId, 'chapters');
  
  chapters.forEach(ch => {
    const dir = path.join(basePath, ch.id);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const notes = [
      { id: "n1", title: { en: "Introduction to " + ch.name, hi: ch.name + " का परिचय" }, content: { en: "This chapter covers the basics of " + ch.name + ".", hi: "यह अध्याय " + ch.name + " के मूल सिद्धांतों को शामिल करता है।" } }
    ];
    const formulas = [];
    const derivations = [];
    const numericals = [];
    const questions = [
      {
        id: "q1", type: "subjective", difficulty: "Easy", marks: 2,
        question: { en: "Explain the importance of " + ch.name + ".", hi: ch.name + " के महत्व को समझाइए।" },
        idealAnswer: { en: "It is very important for the board exams.", hi: "यह बोर्ड परीक्षाओं के लिए बहुत महत्वपूर्ण है।" }
      }
    ];
    const diagrams = [];
    const mindmap = { id: "root", label: { en: ch.name, hi: ch.name }, children: [] };
    const revisions = [];

    fs.writeFileSync(path.join(dir, 'notes.json'), JSON.stringify(notes, null, 2));
    fs.writeFileSync(path.join(dir, 'formulas.json'), JSON.stringify(formulas, null, 2));
    fs.writeFileSync(path.join(dir, 'derivations.json'), JSON.stringify(derivations, null, 2));
    fs.writeFileSync(path.join(dir, 'numericals.json'), JSON.stringify(numericals, null, 2));
    fs.writeFileSync(path.join(dir, 'questions.json'), JSON.stringify(questions, null, 2));
    fs.writeFileSync(path.join(dir, 'diagrams.json'), JSON.stringify(diagrams, null, 2));
    fs.writeFileSync(path.join(dir, 'mindmap.json'), JSON.stringify(mindmap, null, 2));
    fs.writeFileSync(path.join(dir, 'revisions.json'), JSON.stringify(revisions, null, 2));
  });
};

const hindiChapters = [
  { id: "ch1", name: "गद्य गरिमा (Prose)" },
  { id: "ch2", name: "काव्यांजलि (Poetry)" },
  { id: "ch3", name: "कथा भारती (Stories)" },
  { id: "ch4", name: "नाटक (Drama)" },
  { id: "ch5", name: "संस्कृत दिग्दर्शिका (Sanskrit)" },
  { id: "ch6", name: "व्याकरण (Grammar)" }
];

const biologyChapters = [
  { id: "ch1", name: "Reproduction in Organisms" },
  { id: "ch2", name: "Sexual Reproduction in Flowering Plants" },
  { id: "ch3", name: "Human Reproduction" },
  { id: "ch4", name: "Reproductive Health" },
  { id: "ch5", name: "Principles of Inheritance and Variation" },
  { id: "ch6", name: "Molecular Basis of Inheritance" },
  { id: "ch7", name: "Evolution" },
  { id: "ch8", name: "Human Health and Disease" },
  { id: "ch9", name: "Strategies for Enhancement in Food Production" },
  { id: "ch10", name: "Microbes in Human Welfare" },
  { id: "ch11", name: "Biotechnology: Principles and Processes" },
  { id: "ch12", name: "Biotechnology and its Applications" },
  { id: "ch13", name: "Organisms and Populations" }
];

const englishChapters = [
  { id: "ch1", name: "Prose: The Last Lesson" },
  { id: "ch2", name: "Prose: Lost Spring" },
  { id: "ch3", name: "Prose: Deep Water" },
  { id: "ch4", name: "Poetry: My Mother at Sixty-six" },
  { id: "ch5", name: "Poetry: Keeping Quiet" },
  { id: "ch6", name: "Poetry: A Thing of Beauty" },
  { id: "ch7", name: "Vistas: The Third Level" },
  { id: "ch8", name: "Vistas: The Tiger King" },
  { id: "ch9", name: "Vistas: Journey to the end of the Earth" },
  { id: "ch10", name: "Grammar & Writing Skills" }
];

generateForSubject('hindi', hindiChapters);
generateForSubject('biology', biologyChapters);
generateForSubject('english', englishChapters);

console.log('Hindi, Biology, and English chapters generated.');
