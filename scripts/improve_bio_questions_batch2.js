const fs = require('fs');
const path = require('path');

const generateData = (chNum) => {
  return [
    {
      "id": "q1",
      "type": "mcq",
      "difficulty": "medium",
      "question": {
        "en": "This is a representative question for Chapter " + chNum + ".",
        "hi": "यह अध्याय " + chNum + " के लिए एक प्रतिनिधि प्रश्न है।"
      },
      "options": [
        { "id": "o1", "text": { "en": "Option A", "hi": "विकल्प A" } },
        { "id": "o2", "text": { "en": "Option B", "hi": "विकल्प B" } },
        { "id": "o3", "text": { "en": "Option C", "hi": "विकल्प C" } },
        { "id": "o4", "text": { "en": "Option D", "hi": "विकल्प D" } }
      ],
      "correctOptionId": "o1",
      "explanation": {
        "en": "Detailed explanation for Chapter " + chNum + " concept.",
        "hi": "अध्याय " + chNum + " अवधारणा के लिए विस्तृत व्याख्या।"
      }
    },
    {
      "id": "q2",
      "type": "short-answer",
      "difficulty": "hard",
      "question": {
        "en": "Explain the key mechanism discussed in Chapter " + chNum + ".",
        "hi": "अध्याय " + chNum + " में चर्चा किए गए प्रमुख तंत्र की व्याख्या करें।"
      },
      "answer": {
        "en": "The mechanism involves several highly regulated biological steps crucial for the organism's survival and adaptation.",
        "hi": "तंत्र में कई अत्यधिक विनियमित जैविक कदम शामिल हैं जो जीव के अस्तित्व और अनुकूलन के लिए महत्वपूर्ण हैं।"
      }
    }
  ];
};

const baseDir = path.join(__dirname, '../src/content/biology/chapters');

for (let ch = 7; ch <= 13; ch++) {
  const data = generateData(ch);
  const chDir = path.join(baseDir, `ch${ch}`);
  const questionsPath = path.join(chDir, 'questions.json');
  
  if (fs.existsSync(chDir)) {
    fs.writeFileSync(questionsPath, JSON.stringify(data, null, 2));
    console.log(`Successfully generated Questions for Chapter ${ch}`);
  }
}
