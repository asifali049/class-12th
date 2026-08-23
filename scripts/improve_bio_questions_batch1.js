const fs = require('fs');
const path = require('path');

const generateData = (chNum) => {
  if (chNum === 2) {
    return [
      {
        "id": "q1",
        "type": "mcq",
        "difficulty": "easy",
        "question": { "en": "Which cells in the testes synthesize and secrete testicular hormones (androgens)?", "hi": "वृषण में कौन सी कोशिकाएं वृषण हार्मोन (एण्ड्रोजन) को संश्लेषित और स्रावित करती हैं?" },
        "options": [
          { "id": "o1", "text": { "en": "Sertoli cells", "hi": "सटोली कोशिकाएं" } },
          { "id": "o2", "text": { "en": "Leydig cells", "hi": "लेडिग कोशिकाएं" } },
          { "id": "o3", "text": { "en": "Spermatogonia", "hi": "स्पर्मेटोगोनिया" } },
          { "id": "o4", "text": { "en": "Primary spermatocytes", "hi": "प्राथमिक स्पर्मेटोसाइट्स" } }
        ],
        "correctOptionId": "o2",
        "explanation": { "en": "Leydig cells (interstitial cells) are present in the interstitial spaces outside seminiferous tubules and secrete androgens.", "hi": "लेडिग कोशिकाएं शुक्रजनक नलिकाओं के बाहर मध्यवर्ती स्थानों में मौजूद होती हैं और एण्ड्रोजन स्रावित करती हैं।" }
      },
      {
        "id": "q2",
        "type": "short-answer",
        "difficulty": "medium",
        "question": { "en": "Explain the role of the acrosome in fertilization.", "hi": "निषेचन में एक्रोसोम की भूमिका स्पष्ट करें।" },
        "answer": { "en": "The acrosome is a cap-like structure at the anterior part of the sperm head. It is filled with hydrolytic enzymes (sperm lysins, e.g., hyaluronidase) that help the sperm dissolve and penetrate the zona pellucida of the ovum, thus facilitating fertilization.", "hi": "एक्रोसोम शुक्राणु के सिर के अग्र भाग पर एक टोपी जैसी संरचना है। यह एंजाइमों से भरा होता है जो शुक्राणु को अंडाणु के जोना पेलुसिडा (zona pellucida) में प्रवेश करने में मदद करते हैं।" }
      }
    ];
  }

  if (chNum === 3) {
    return [
      {
        "id": "q1",
        "type": "mcq",
        "difficulty": "medium",
        "question": { "en": "Which of the following is a hormone-releasing IUD?", "hi": "निम्नलिखित में से कौन सा हार्मोन-रिलीजिंग IUD है?" },
        "options": [
          { "id": "o1", "text": { "en": "Lippes loop", "hi": "लिपेस लूप" } },
          { "id": "o2", "text": { "en": "CuT", "hi": "CuT" } },
          { "id": "o3", "text": { "en": "LNG-20", "hi": "LNG-20" } },
          { "id": "o4", "text": { "en": "Multiload 375", "hi": "मल्टीलोड 375" } }
        ],
        "correctOptionId": "o3",
        "explanation": { "en": "LNG-20 and Progestasert are hormone-releasing IUDs that make the uterus unsuitable for implantation.", "hi": "LNG-20 और प्रोजेस्टासर्ट (Progestasert) हार्मोन-रिलीजिंग IUD हैं जो गर्भाशय को प्रत्यारोपण के लिए अनुपयुक्त बनाते हैं।" }
      }
    ];
  }
  
  if (chNum === 4) {
    return [
      {
        "id": "q1",
        "type": "mcq",
        "difficulty": "hard",
        "question": { "en": "A cross between a red-flowered plant (RR) and a white-flowered plant (rr) yields all pink (Rr) F1 offspring. This is an example of:", "hi": "लाल फूल वाले पौधे (RR) और सफेद फूल वाले पौधे (rr) के बीच क्रॉस से F1 पीढ़ी में सभी गुलाबी (Rr) संतानें उत्पन्न होती हैं। यह किसका उदाहरण है?" },
        "options": [
          { "id": "o1", "text": { "en": "Co-dominance", "hi": "सह-प्रभाविता" } },
          { "id": "o2", "text": { "en": "Incomplete dominance", "hi": "अपूर्ण प्रभाविता" } },
          { "id": "o3", "text": { "en": "Multiple allelism", "hi": "एकाधिक एलीलिज़्म" } },
          { "id": "o4", "text": { "en": "Linkage", "hi": "सहलग्नता" } }
        ],
        "correctOptionId": "o2",
        "explanation": { "en": "In incomplete dominance, the F1 phenotype does not resemble either of the parents and is in between the two (e.g., Snapdragon flowers).", "hi": "अपूर्ण प्रभाविता में, F1 फीनोटाइप माता-पिता में से किसी के जैसा नहीं होता है और दोनों के बीच में होता है।" }
      }
    ];
  }

  if (chNum === 5) {
    return [
      {
        "id": "q1",
        "type": "short-answer",
        "difficulty": "medium",
        "question": { "en": "What are Okazaki fragments? How are they joined?", "hi": "ओकाजाकी खंड (Okazaki fragments) क्या हैं? वे कैसे जुड़ते हैं?" },
        "answer": { "en": "During DNA replication, on the lagging strand (template with polarity 5'->3'), replication is discontinuous. These discontinuously synthesized short DNA fragments are called Okazaki fragments. They are later joined by the enzyme DNA ligase.", "hi": "डीएनए प्रतिकृति के दौरान, लैगिंग स्ट्रैंड (lagging strand) पर प्रतिकृति असंतत होती है। इन छोटे डीएनए खंडों को ओकाजाकी खंड कहा जाता है। बाद में वे डीएनए लाइगेज एंजाइम द्वारा जुड़ जाते हैं।" }
      }
    ];
  }

  if (chNum === 6) {
    return [
      {
        "id": "q1",
        "type": "mcq",
        "difficulty": "easy",
        "question": { "en": "The wings of a butterfly and the wings of a bird are examples of:", "hi": "तितली के पंख और पक्षी के पंख किसके उदाहरण हैं?" },
        "options": [
          { "id": "o1", "text": { "en": "Homologous organs", "hi": "समजात अंग" } },
          { "id": "o2", "text": { "en": "Analogous organs", "hi": "समरूप अंग" } },
          { "id": "o3", "text": { "en": "Vestigial organs", "hi": "अवशेषी अंग" } },
          { "id": "o4", "text": { "en": "Atavism", "hi": "पूर्वजता (Atavism)" } }
        ],
        "correctOptionId": "o2",
        "explanation": { "en": "They have different anatomical structures but perform the same function (flying), indicating convergent evolution.", "hi": "उनकी शारीरिक संरचनाएं अलग-अलग हैं लेकिन समान कार्य (उड़ान) करते हैं, जो अभिसारी विकास को दर्शाता है।" }
      }
    ];
  }

  return [];
};

const baseDir = path.join(__dirname, '../src/content/biology/chapters');

for (let ch = 2; ch <= 6; ch++) {
  const data = generateData(ch);
  if (!data || data.length === 0) continue;
  
  const chDir = path.join(baseDir, `ch${ch}`);
  const questionsPath = path.join(chDir, 'questions.json');
  if (fs.existsSync(questionsPath)) {
    fs.writeFileSync(questionsPath, JSON.stringify(data, null, 2));
    console.log(`Successfully generated Questions for Chapter ${ch}`);
  }
}
