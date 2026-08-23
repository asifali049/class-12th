const fs = require('fs');
const path = require('path');

const generateData = (chNum) => {
  return {
    revisions: [
      {
        "id": "r1",
        "type": "15-minute",
        "title": { "en": "15-Minute Revision", "hi": "15-मिनट रिवीजन" },
        "content": {
          "en": "1. **Core Concept 1**: Vital principles of Chapter " + chNum + ".\n2. **Core Concept 2**: Key biological mechanisms and their significance.\n3. **Application**: How this applies to real-world biology and exams.",
          "hi": "1. **मूल अवधारणा 1**: अध्याय " + chNum + " के महत्वपूर्ण सिद्धांत।\n2. **मूल अवधारणा 2**: प्रमुख जैविक तंत्र और उनका महत्व।\n3. **अनुप्रयोग**: यह वास्तविक दुनिया के जीव विज्ञान और परीक्षाओं पर कैसे लागू होता है।"
        }
      }
    ],
    test: {
      "id": "t1",
      "title": { "en": "Chapter " + chNum + " Mock Test", "hi": "अध्याय " + chNum + " मॉक टेस्ट" },
      "duration": 15,
      "totalQuestions": 1,
      "questions": [
        {
          "id": "q1",
          "type": "mcq",
          "difficulty": "medium",
          "question": { "en": "Identify the correct statement for Chapter " + chNum + ":", "hi": "अध्याय " + chNum + " के लिए सही कथन की पहचान करें:" },
          "options": [
            { "id": "o1", "text": { "en": "Statement 1 is true", "hi": "कथन 1 सत्य है" } },
            { "id": "o2", "text": { "en": "Statement 2 is true", "hi": "कथन 2 सत्य है" } }
          ],
          "correctOptionId": "o1",
          "explanation": { "en": "Statement 1 correctly describes the phenomenon.", "hi": "कथन 1 घटना का सही वर्णन करता है।" }
        }
      ]
    },
    flashcards: [
      {
        "id": "fc1",
        "front": { "en": "Key Term (Ch " + chNum + ")", "hi": "मुख्य शब्द (अध्याय " + chNum + ")" },
        "back": { "en": "Definition of the key term.", "hi": "मुख्य शब्द की परिभाषा।" }
      }
    ],
    mindmap: {
      "id": "mm1",
      "title": { "en": "Chapter " + chNum + " Concept Map", "hi": "अध्याय " + chNum + " अवधारणा मानचित्र" },
      "nodes": [
        { "id": "1", "label": { "en": "Chapter " + chNum, "hi": "अध्याय " + chNum }, "type": "root" },
        { "id": "2", "label": { "en": "Main Topic A", "hi": "मुख्य विषय A" }, "parent": "1" },
        { "id": "3", "label": { "en": "Main Topic B", "hi": "मुख्य विषय B" }, "parent": "1" }
      ]
    }
  };
};

const baseDir = path.join(__dirname, '../src/content/biology/chapters');

for (let ch = 7; ch <= 13; ch++) {
  const data = generateData(ch);
  const chDir = path.join(baseDir, `ch${ch}`);
  
  if (fs.existsSync(chDir)) {
    fs.writeFileSync(path.join(chDir, 'revisions.json'), JSON.stringify(data.revisions, null, 2));
    fs.writeFileSync(path.join(chDir, 'test.json'), JSON.stringify(data.test, null, 2));
    fs.writeFileSync(path.join(chDir, 'flashcards.json'), JSON.stringify(data.flashcards, null, 2));
    fs.writeFileSync(path.join(chDir, 'mindmap.json'), JSON.stringify(data.mindmap, null, 2));
    console.log(`Successfully generated auxiliary content for Chapter ${ch}`);
  }
}
