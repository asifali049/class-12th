const fs = require('fs');
const path = require('path');

const generateData = (chNum) => {
  if (chNum === 9) {
    return {
      notes: [
        {
          id: "n1",
          title: { en: "Principles of Biotechnology", hi: "जैव प्रौद्योगिकी के सिद्धांत" },
          content: { en: "Involves genetic engineering (altering genetic material) and bioprocess engineering. Father of genetic engineering is Paul Berg.", hi: "इसमें आनुवंशिक इंजीनियरिंग (आनुवंशिक पदार्थ को बदलना) और बायोप्रोसेस इंजीनियरिंग शामिल है।" }
        },
        {
          id: "n2",
          title: { en: "Tools of rDNA Technology", hi: "rDNA तकनीक के साधन" },
          content: { en: "Restriction Enzymes (molecular scissors), Cloning Vectors (like pBR322 to carry DNA), and Competent host cells (like E. coli).", hi: "रेस्ट्रिक्शन एंजाइम (आणविक कैंची), क्लोनिंग वैक्टर (जैसे pBR322) और सक्षम मेजबान कोशिकाएं।" }
        }
      ],
      formulas: [],
      derivations: [
        {
          id: "d1",
          title: { en: "Steps in PCR (Polymerase Chain Reaction)", hi: "पीसीआर (PCR) के चरण" },
          steps: [
            { en: "Denaturation (94°C): Separation of DNA strands.", hi: "निष्क्रियकरण (94°C): डीएनए रज्जुकों का अलग होना।" },
            { en: "Annealing (50-60°C): Binding of primers.", hi: "तापानुशीलन (50-60°C): प्राइमर्स का जुड़ना।" },
            { en: "Extension (72°C): Taq polymerase synthesizes new strand.", hi: "प्रसार (72°C): टैक पॉलीमरेज़ नई रज्जुक का संश्लेषण करता है।" }
          ],
          conclusion: { en: "Result is amplification of the gene of interest.", hi: "रुचि के जीन का प्रवर्धन।" }
        }
      ],
      numericals: [],
      questions: [
        {
          id: "q_mcq_1",
          type: "mcq",
          difficulty: "Easy",
          marks: 1,
          question: { en: "Which enzyme is known as 'molecular scissors'?", hi: "किस एंजाइम को 'आणविक कैंची' के रूप में जाना जाता है?" },
          options: [{ en: "Ligase", hi: "लाइगेज" }, { en: "Polymerase", hi: "पॉलीमरेज़" }, { en: "Restriction Endonuclease", hi: "रेस्ट्रिक्शन एंडोन्यूक्लिएज" }, { en: "Helicase", hi: "हेलिकेज़" }],
          correctOptionIndex: 2,
          explanation: { en: "Restriction endonucleases cut DNA at specific recognition sequences.", hi: "रेस्ट्रिक्शन एंडोन्यूक्लिएज विशिष्ट अनुक्रमों पर डीएनए को काटते हैं।" }
        }
      ],
      diagrams: [],
      revisions: [
        {
          id: "rev1",
          topic: { en: "PCR Stages", hi: "पीसीआर के चरण", hinglish: "PCR Process" },
          summary: { en: "**1. Denaturation**\n**2. Annealing**\n**3. Extension**", hi: "**1. निष्क्रियकरण (Denaturation)**\n**2. तापानुशीलन (Annealing)**\n**3. प्रसार (Extension)**" },
          quickRecall: []
        }
      ],
      mindmap: { id: "root", label: { en: "Biotech Principles", hi: "बायोटेक सिद्धांत" }, children: [] }
    };
  }

  if (chNum === 10) {
    return {
      notes: [
        {
          id: "n1",
          title: { en: "Applications in Agriculture", hi: "कृषि में अनुप्रयोग" },
          content: { en: "GMOs like Bt Cotton are pest-resistant. Bt stands for Bacillus thuringiensis which produces a toxic Cry protein.", hi: "Bt कपास जैसे GMO कीट-प्रतिरोधी होते हैं।" }
        },
        {
          id: "n2",
          title: { en: "Applications in Medicine", hi: "चिकित्सा में अनुप्रयोग" },
          content: { en: "Genetically Engineered Insulin (Humulin) and Gene Therapy (first used for ADA deficiency in 1990).", hi: "जेनेटिकली इंजीनियर्ड इंसुलिन (Humulin) और जीन थेरेपी (पहली बार 1990 में ADA की कमी के लिए)।" }
        }
      ],
      formulas: [],
      derivations: [],
      numericals: [],
      questions: [
        {
          id: "q_mcq_1",
          type: "mcq",
          difficulty: "Easy",
          marks: 1,
          question: { en: "The first clinical gene therapy was given for treating:", hi: "पहली नैदानिक जीन थेरेपी किसके इलाज के लिए दी गई थी?" },
          options: [{ en: "Diabetes mellitus", hi: "डायबिटीज मेलिटस" }, { en: "Chickenpox", hi: "चिकनपॉक्स" }, { en: "Rheumatoid arthritis", hi: "रुमेटीइड गठिया" }, { en: "Adenosine deaminase (ADA) deficiency", hi: "एडेनोसिन डीएमिनेज (ADA) की कमी" }],
          correctOptionIndex: 3,
          explanation: { en: "Given in 1990 to a 4-year-old girl.", hi: "1990 में 4 साल की बच्ची को दिया गया था।" }
        }
      ],
      diagrams: [],
      revisions: [
        {
          id: "rev1",
          topic: { en: "Important Proteins", hi: "महत्वपूर्ण प्रोटीन", hinglish: "Cry proteins" },
          summary: { en: "**cryIAc / cryIIAb**: Cotton bollworms.\n**cryIAb**: Corn borer.", hi: "**cryIAc / cryIIAb**: कॉटन बॉलवर्म।\n**cryIAb**: कॉर्न बोरर।" },
          quickRecall: []
        }
      ],
      mindmap: { id: "root", label: { en: "Biotech Applications", hi: "बायोटेक अनुप्रयोग" }, children: [] }
    };
  }
  
  if (chNum === 11) {
    return {
      notes: [
        {
          id: "n1",
          title: { en: "Organisms & Environment", hi: "जीव और पर्यावरण" },
          content: { en: "Key abiotic factors: temperature, water, light, soil. Organisms respond by Regulating, Conforming, Migrating, or Suspending.", hi: "प्रमुख अजैविक कारक: तापमान, पानी, प्रकाश, मिट्टी।" }
        },
        {
          id: "n2",
          title: { en: "Population Interactions", hi: "समष्टि पारस्परिक क्रियाएँ" },
          content: { en: "Mutualism (+/+), Competition (-/-), Predation (+/-), Parasitism (+/-), Commensalism (+/0), Amensalism (-/0).", hi: "सहोपकारिता (+/+), प्रतिस्पर्धा (-/-), परभक्षण (+/-), परजीविता (+/-), सहभोजिता (+/0), अंतरजातीय परजीविता (-/0)।" }
        }
      ],
      formulas: [
        {
          id: "f1",
          title: { en: "Exponential Growth Equation", hi: "चरघातांकी वृद्धि समीकरण" },
          formula: "\\frac{dN}{dt} = rN",
          variables: [{ name: "r", description: { en: "Intrinsic rate of natural increase", hi: "प्राकृतिक वृद्धि की आंतरिक दर" } }],
          applications: { en: "Used when resources are unlimited.", hi: "संसाधन असीमित होने पर उपयोग किया जाता है।" }
        },
        {
          id: "f2",
          title: { en: "Logistic Growth Equation", hi: "लॉजिस्टिक वृद्धि समीकरण" },
          formula: "\\frac{dN}{dt} = rN \\left(\\frac{K-N}{K}\\right)",
          variables: [{ name: "K", description: { en: "Carrying capacity", hi: "वहन क्षमता" } }],
          applications: { en: "Used when resources are limited (realistic).", hi: "संसाधन सीमित होने पर उपयोग किया जाता है।" }
        }
      ],
      derivations: [],
      numericals: [],
      questions: [
        {
          id: "q_mcq_1",
          type: "mcq",
          difficulty: "Easy",
          marks: 1,
          question: { en: "An interaction where one species benefits and the other is neither harmed nor benefited is called:", hi: "एक ऐसी पारस्परिक क्रिया जहाँ एक प्रजाति को लाभ होता है और दूसरी को न तो नुकसान होता है और न ही लाभ, कहलाती है:" },
          options: [{ en: "Mutualism", hi: "सहोपकारिता" }, { en: "Commensalism", hi: "सहभोजिता" }, { en: "Parasitism", hi: "परजीविता" }, { en: "Amensalism", hi: "अंतरजातीय परजीविता" }],
          correctOptionIndex: 1,
          explanation: { en: "Commensalism is represented as (+/0).", hi: "सहभोजिता को (+/0) के रूप में दर्शाया गया है।" }
        }
      ],
      diagrams: [],
      revisions: [
        {
          id: "rev1",
          topic: { en: "Population Interactions", hi: "समष्टि पारस्परिक क्रियाएँ", hinglish: "Interactions" },
          summary: { en: "**Mutualism**: (+/+)\n**Commensalism**: (+/0)\n**Amensalism**: (-/0)", hi: "**सहोपकारिता**: (+/+)\n**सहभोजिता**: (+/0)\n**अंतरजातीय परजीविता**: (-/0)" },
          quickRecall: []
        }
      ],
      mindmap: { id: "root", label: { en: "Organisms & Populations", hi: "जीव और समष्टियाँ" }, children: [] }
    };
  }

  if (chNum === 12) {
    return {
      notes: [
        {
          id: "n1",
          title: { en: "Ecosystem Structure", hi: "पारितंत्र संरचना" },
          content: { en: "Key aspects: Productivity, Decomposition, Energy flow, Nutrient cycling.", hi: "प्रमुख पहलू: उत्पादकता, अपघटन, ऊर्जा प्रवाह, पोषक चक्रण।" }
        },
        {
          id: "n2",
          title: { en: "Ecological Pyramids", hi: "पारिस्थितिक पिरामिड" },
          content: { en: "Pyramid of Energy is always upright (10% law).", hi: "ऊर्जा का पिरामिड हमेशा सीधा होता है (10% नियम)।" }
        }
      ],
      formulas: [],
      derivations: [],
      numericals: [],
      questions: [
        {
          id: "q_mcq_1",
          type: "mcq",
          difficulty: "Easy",
          marks: 1,
          question: { en: "The pyramid of energy is:", hi: "ऊर्जा का पिरामिड होता है:" },
          options: [{ en: "Always inverted", hi: "हमेशा उल्टा" }, { en: "Always upright", hi: "हमेशा सीधा" }, { en: "Spindle shaped", hi: "तर्कु (Spindle) के आकार का" }, { en: "Variable", hi: "परिवर्तनीय" }],
          correctOptionIndex: 1,
          explanation: { en: "According to the 10% law, energy is always lost as it moves up trophic levels.", hi: "10% नियम के अनुसार, पोषी स्तरों (trophic levels) में ऊपर जाने पर ऊर्जा हमेशा नष्ट होती है।" }
        }
      ],
      diagrams: [],
      revisions: [
        {
          id: "rev1",
          topic: { en: "Food Chains", hi: "खाद्य श्रृंखलाएं", hinglish: "GFC vs DFC" },
          summary: { en: "**GFC**: Grazing Food Chain (starts with plants).\n**DFC**: Detritus Food Chain (starts with dead matter).", hi: "**GFC**: चारण खाद्य श्रृंखला (पौधों से शुरू होती है)।\n**DFC**: अपरद खाद्य श्रृंखला (मृत पदार्थ से शुरू होती है)।" },
          quickRecall: []
        }
      ],
      mindmap: { id: "root", label: { en: "Ecosystem", hi: "पारितंत्र" }, children: [] }
    };
  }

  if (chNum === 13) {
    return {
      notes: [
        {
          id: "n1",
          title: { en: "Biodiversity & Loss", hi: "जैव विविधता और हानि" },
          content: { en: "Three levels: Genetic, Species, Ecological. The 'Evil Quartet' are the 4 main causes of extinction: Habitat loss, Over-exploitation, Alien species, Co-extinctions.", hi: "तीन स्तर: आनुवंशिक, प्रजाति, पारिस्थितिक। 'एविल चौकड़ी' विलुप्ति के 4 मुख्य कारण हैं।" }
        },
        {
          id: "n2",
          title: { en: "Conservation", hi: "संरक्षण" },
          content: { en: "In-situ (on-site, e.g., National Parks). Ex-situ (off-site, e.g., Zoos, Seed banks).", hi: "स्वस्थाने (ऑन-साइट, उदा., राष्ट्रीय उद्यान)। बाह्य-स्थाने (ऑफ-साइट, उदा., चिड़ियाघर, बीज बैंक)।" }
        }
      ],
      formulas: [],
      derivations: [],
      numericals: [],
      questions: [
        {
          id: "q_mcq_1",
          type: "mcq",
          difficulty: "Easy",
          marks: 1,
          question: { en: "Which of the following is an ex-situ conservation method?", hi: "निम्नलिखित में से कौन सी बाह्य-स्थाने (ex-situ) संरक्षण विधि है?" },
          options: [{ en: "National Park", hi: "राष्ट्रीय उद्यान" }, { en: "Biosphere Reserve", hi: "बायोस्फीयर रिजर्व" }, { en: "Wildlife Sanctuary", hi: "वन्यजीव अभयारण्य" }, { en: "Botanical Garden", hi: "वनस्पति उद्यान" }],
          correctOptionIndex: 3,
          explanation: { en: "Botanical gardens protect plants outside their natural habitats.", hi: "वनस्पति उद्यान पौधों को उनके प्राकृतिक आवासों के बाहर संरक्षित करते हैं।" }
        }
      ],
      diagrams: [],
      revisions: [
        {
          id: "rev1",
          topic: { en: "Conservation", hi: "संरक्षण", hinglish: "In-situ vs Ex-situ" },
          summary: { en: "**In-situ**: National Parks, Sanctuaries.\n**Ex-situ**: Zoos, Botanical Gardens, Seed banks.", hi: "**स्वस्थाने**: राष्ट्रीय उद्यान, अभयारण्य।\n**बाह्य-स्थाने**: चिड़ियाघर, वनस्पति उद्यान, बीज बैंक।" },
          quickRecall: []
        }
      ],
      mindmap: { id: "root", label: { en: "Biodiversity", hi: "जैव-विविधता" }, children: [] }
    };
  }
};

const writeData = (chNum) => {
  const ch = 'ch' + chNum;
  const baseDir = path.join(__dirname, '../src/content/biology/chapters', ch);
  if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });
  
  const data = generateData(chNum);
  if (data) {
    Object.keys(data).forEach(key => {
      fs.writeFileSync(path.join(baseDir, `${key}.json`), JSON.stringify(data[key], null, 2));
    });
    console.log(`Chapter ${chNum} enriched successfully!`);
  }
};

for (let i = 9; i <= 13; i++) {
  writeData(i);
}
