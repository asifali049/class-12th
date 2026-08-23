const fs = require('fs');
const path = require('path');

const generateData = (chNum) => {
  if (chNum === 5) {
    return {
      notes: [
        {
          id: "n1",
          title: { en: "DNA Structure and Replication", hi: "डीएनए की संरचना और प्रतिकृति" },
          content: { en: "DNA is the genetic material. Watson and Crick proposed the Double Helix model. DNA replication is semi-conservative (proven by Meselson and Stahl).", hi: "डीएनए आनुवंशिक पदार्थ है। वॉटसन और क्रिक ने डबल हेलिक्स मॉडल प्रस्तावित किया। डीएनए प्रतिकृति अर्ध-संरक्षी (semi-conservative) है।" }
        },
        {
          id: "n2",
          title: { en: "Transcription", hi: "अनुलेखन (Transcription)" },
          content: { en: "Process of copying genetic information from DNA to RNA. Occurs in the nucleus.", hi: "डीएनए से आरएनए में आनुवंशिक जानकारी को कॉपी करने की प्रक्रिया।" }
        },
        {
          id: "n3",
          title: { en: "Translation & Genetic Code", hi: "स्थानांतरण (Translation) और आनुवंशिक कूट" },
          content: { en: "Translation is the polymerization of amino acids to form a protein. The genetic code is a triplet of nucleotides (codon) that codes for a specific amino acid.", hi: "स्थानांतरण एमिनो एसिड के बहुलकीकरण से प्रोटीन बनाने की प्रक्रिया है। आनुवंशिक कूट न्यूक्लियोटाइड्स (कोडॉन) का एक त्रिक है।" }
        }
      ],
      formulas: [],
      derivations: [
        {
          id: "d1",
          title: { en: "Mechanism of Translation", hi: "स्थानांतरण (Translation) की प्रक्रिया" },
          steps: [
            { en: "Charging of tRNA (Aminoacylation).", hi: "tRNA की चार्जिंग (एमीनोएसिलेशन)।" },
            { en: "Initiation: Small ribosomal subunit binds to mRNA at start codon (AUG).", hi: "दीक्षा (Initiation): छोटी राइबोसोमल सबयूनिट स्टार्ट कोडॉन (AUG) पर mRNA से जुड़ती है।" },
            { en: "Elongation: Ribosome moves along mRNA, adding amino acids.", hi: "दीर्घीकरण (Elongation): राइबोसोम mRNA के साथ आगे बढ़ता है, एमिनो एसिड जोड़ता है।" },
            { en: "Termination: Reaches a stop codon (UAA, UAG, UGA), polypeptide is released.", hi: "समापन (Termination): स्टॉप कोडॉन पर पहुँचता है, पॉलीपेप्टाइड रिलीज़ होता है।" }
          ],
          conclusion: { en: "This leads to the formation of a fully functional protein.", hi: "इससे पूरी तरह कार्यात्मक प्रोटीन का निर्माण होता है।" }
        }
      ],
      numericals: [
        {
          id: "num1",
          question: { en: "If the length of E. coli DNA is $1.36 \\text{ mm}$, calculate the number of base pairs.", hi: "यदि ई. कोलाई डीएनए की लंबाई $1.36 \\text{ mm}$ है, तो बेस जोड़े (base pairs) की संख्या की गणना करें।" },
          solution: { en: "Distance between two base pairs = $0.34 \\times 10^{-9} \\text{ m}$.\nLength of DNA = Number of bp $\\times$ distance between them.\n$1.36 \\times 10^{-3} \\text{ m} = \\text{Number of bp} \\times 0.34 \\times 10^{-9} \\text{ m}$.\nNumber of bp = $4 \\times 10^6$ bp.", hi: "दो बेस जोड़े के बीच की दूरी = $0.34 \\times 10^{-9} \\text{ m}$।\nडीएनए की लंबाई = bp की संख्या $\\times$ उनके बीच की दूरी।\n$1.36 \\times 10^{-3} \\text{ m} = \\text{bp की संख्या} \\times 0.34 \\times 10^{-9} \\text{ m}$।\nbp की संख्या = $4 \\times 10^6$ bp।" }
        }
      ],
      questions: [
        {
          id: "q_mcq_1",
          type: "mcq",
          difficulty: "Easy",
          marks: 1,
          question: { en: "In DNA, adenine always pairs with:", hi: "डीएनए में, एडेनिन हमेशा किसके साथ जुड़ता है?" },
          options: [{ en: "Guanine", hi: "ग्वानिन" }, { en: "Cytosine", hi: "साइटोसिन" }, { en: "Thymine", hi: "थायमिन" }, { en: "Uracil", hi: "यूरेसिल" }],
          correctOptionIndex: 2,
          explanation: { en: "According to Chargaff's rule, Adenine (A) pairs with Thymine (T) via two hydrogen bonds.", hi: "चारगाफ के नियम के अनुसार, एडेनिन (A) थायमिन (T) के साथ जुड़ता है।" }
        }
      ],
      diagrams: [],
      revisions: [
        {
          id: "rev1",
          topic: { en: "Start & Stop Codons", hi: "स्टार्ट और स्टॉप कोडॉन", hinglish: "Genetic Code" },
          summary: { en: "**Start Codon**: AUG (codes for Methionine).\n**Stop Codons**: UAA, UAG, UGA (do not code for any amino acid).", hi: "**स्टार्ट कोडॉन**: AUG (मेथियोनीन के लिए कोड)।\n**स्टॉप कोडॉन**: UAA, UAG, UGA (किसी भी एमिनो एसिड के लिए कोड नहीं करते)।" },
          quickRecall: []
        }
      ],
      mindmap: { id: "root", label: { en: "Molecular Basis", hi: "आणविक आधार" }, children: [{ id: "c1", label: { en: "DNA & RNA", hi: "डीएनए और आरएनए" } }, { id: "c2", label: { en: "Central Dogma", hi: "सेंट्रल डोग्मा" } }] }
    };
  }
  
  if (chNum === 6) {
    return {
      notes: [
        {
          id: "n1",
          title: { en: "Origin of Life", hi: "जीवन की उत्पत्ति" },
          content: { en: "Oparin and Haldane proposed chemical evolution. Miller-Urey experiment proved it by forming amino acids from simple gases.", hi: "ओपेरिन और हाल्डेन ने रासायनिक विकास का प्रस्ताव रखा। मिलर-यूरे प्रयोग ने इसे सिद्ध किया।" }
        },
        {
          id: "n2",
          title: { en: "Evidences for Evolution", hi: "विकास के प्रमाण" },
          content: { en: "Homologous organs (same origin, different function, e.g., forelimbs of mammals) show divergent evolution. Analogous organs (different origin, same function, e.g., wings of birds and insects) show convergent evolution.", hi: "समजात अंग (Homologous - समान उत्पत्ति, अलग कार्य) अपसारी विकास (divergent evolution) दिखाते हैं। समरूप अंग (Analogous - अलग उत्पत्ति, समान कार्य) अभिसारी विकास (convergent evolution) दिखाते हैं।" }
        },
        {
          id: "n3",
          title: { en: "Hardy-Weinberg Principle", hi: "हार्डी-वेनबर्ग सिद्धांत" },
          content: { en: "States that allele frequencies in a population are stable and is constant from generation to generation in the absence of disturbing factors.", hi: "यह बताता है कि एक समष्टि (population) में एलील आवृत्तियां (allele frequencies) स्थिर होती हैं।" }
        }
      ],
      formulas: [
        {
          id: "f1",
          title: { en: "Hardy-Weinberg Equation", hi: "हार्डी-वेनबर्ग समीकरण" },
          formula: "p^2 + 2pq + q^2 = 1",
          variables: [
            { name: "p", description: { en: "Frequency of dominant allele", hi: "प्रभावी एलील की आवृत्ति" } },
            { name: "q", description: { en: "Frequency of recessive allele", hi: "अप्रभावी एलील की आवृत्ति" } }
          ],
          applications: { en: "Used to calculate allele frequencies in a population.", hi: "समष्टि में एलील आवृत्तियों की गणना करने के लिए उपयोग किया जाता है।" }
        }
      ],
      derivations: [],
      numericals: [
        {
          id: "num1",
          question: { en: "If the frequency of a recessive allele (q) is 0.4, what is the frequency of the homozygous dominant genotype ($p^2$)?", hi: "यदि एक अप्रभावी एलील (q) की आवृत्ति 0.4 है, तो समयुग्मजी प्रभावी जीनोटाइप ($p^2$) की आवृत्ति क्या है?" },
          solution: { en: "We know $p + q = 1$. \nGiven $q = 0.4$. \nTherefore, $p = 1 - 0.4 = 0.6$.\nFrequency of homozygous dominant = $p^2 = (0.6)^2 = 0.36$.", hi: "हम जानते हैं $p + q = 1$।\nदिया गया है $q = 0.4$।\nइसलिए, $p = 1 - 0.4 = 0.6$।\nसमयुग्मजी प्रभावी (homozygous dominant) की आवृत्ति = $p^2 = (0.6)^2 = 0.36$।" }
        }
      ],
      questions: [
        {
          id: "q_mcq_1",
          type: "mcq",
          difficulty: "Easy",
          marks: 1,
          question: { en: "The wings of a bird and the wings of an insect are:", hi: "पक्षी के पंख और कीट के पंख हैं:" },
          options: [
            { en: "Homologous structures", hi: "समजात संरचनाएं" },
            { en: "Analogous structures", hi: "समरूप संरचनाएं" },
            { en: "Vestigial structures", hi: "अवशेषी संरचनाएं" },
            { en: "None of these", hi: "इनमें से कोई नहीं" }
          ],
          correctOptionIndex: 1,
          explanation: { en: "They have the same function (flying) but different anatomical structures.", hi: "उनका कार्य समान (उड़ना) है लेकिन शारीरिक संरचनाएं अलग हैं।" }
        }
      ],
      diagrams: [],
      revisions: [
        {
          id: "rev1",
          topic: { en: "Evolution Types", hi: "विकास के प्रकार", hinglish: "Divergent vs Convergent" },
          summary: { en: "**Divergent**: Homologous organs (e.g., forelimbs of whale, bat, cheetah, human).\n**Convergent**: Analogous organs (e.g., wings of butterfly and bird).", hi: "**अपसारी (Divergent)**: समजात अंग।\n**अभिसारी (Convergent)**: समरूप अंग।" },
          quickRecall: []
        }
      ],
      mindmap: { id: "root", label: { en: "Evolution", hi: "विकास" }, children: [] }
    };
  }

  if (chNum === 7) {
    return {
      notes: [
        {
          id: "n1",
          title: { en: "Common Diseases", hi: "सामान्य रोग" },
          content: { en: "Infectious diseases are transmitted from person to person (e.g., Typhoid, Malaria, AIDS). Non-infectious are not transmitted (e.g., Cancer).", hi: "संक्रामक रोग एक व्यक्ति से दूसरे व्यक्ति में फैलते हैं (उदा., टाइफाइड, मलेरिया, एड्स)। गैर-संक्रामक नहीं फैलते (उदा., कैंसर)।" }
        },
        {
          id: "n2",
          title: { en: "Immunity", hi: "प्रतिरक्षा" },
          content: { en: "Innate immunity is present at birth. Acquired immunity is pathogen-specific. B-cells produce antibodies; T-cells help B-cells.", hi: "सहज प्रतिरक्षा जन्म के समय मौजूद होती है। उपार्जित प्रतिरक्षा रोगजनक-विशिष्ट है।" }
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
          question: { en: "Which antibody is abundantly present in colostrum?", hi: "कोलोस्ट्रम में कौन सी एंटीबॉडी प्रचुर मात्रा में मौजूद होती है?" },
          options: [{ en: "IgG", hi: "IgG" }, { en: "IgA", hi: "IgA" }, { en: "IgM", hi: "IgM" }, { en: "IgE", hi: "IgE" }],
          correctOptionIndex: 1,
          explanation: { en: "Colostrum contains abundant IgA antibodies to protect the infant.", hi: "कोलोस्ट्रम में शिशु की रक्षा के लिए प्रचुर मात्रा में IgA एंटीबॉडी होती है।" }
        }
      ],
      diagrams: [],
      revisions: [
        {
          id: "rev1",
          topic: { en: "Antibody Types", hi: "एंटीबॉडी के प्रकार", hinglish: "IgA, IgE, IgG" },
          summary: { en: "**IgA**: Colostrum, Saliva.\n**IgE**: Allergic reactions.\n**IgG**: Can cross placenta.", hi: "**IgA**: कोलोस्ट्रम, लार।\n**IgE**: एलर्जी प्रतिक्रियाएं।\n**IgG**: प्लेसेंटा को पार कर सकता है।" },
          quickRecall: []
        }
      ],
      mindmap: { id: "root", label: { en: "Human Health", hi: "मानव स्वास्थ्य" }, children: [] }
    };
  }

  if (chNum === 8) {
    return {
      notes: [
        {
          id: "n1",
          title: { en: "Microbes in Household & Industry", hi: "घरेलू और उद्योग में सूक्ष्म जीव" },
          content: { en: "Lactobacillus converts milk to curd. Saccharomyces cerevisiae (yeast) is used for bread and alcohol. Penicillium produces Penicillin.", hi: "लैक्टोबैसिलस दूध को दही में बदलता है। खमीर (yeast) का उपयोग ब्रेड और शराब के लिए किया जाता है।" }
        },
        {
          id: "n2",
          title: { en: "Sewage Treatment", hi: "सीवेज उपचार" },
          content: { en: "Primary treatment is physical removal. Secondary is biological where aerobic microbes consume organic matter, reducing BOD.", hi: "प्राथमिक उपचार भौतिक निष्कासन है। द्वितीयक जैविक है जहाँ वायवीय सूक्ष्म जीव कार्बनिक पदार्थों का उपभोग करते हैं।" }
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
          question: { en: "Which microbe produces Cyclosporin A?", hi: "कौन सा सूक्ष्म जीव साइक्लोस्पोरिन ए का उत्पादन करता है?" },
          options: [
            { en: "Trichoderma polysporum", hi: "ट्राइकोडर्मा पॉलीस्पोरम" },
            { en: "Monascus purpureus", hi: "मोनस्कस परप्यूरियस" },
            { en: "Streptococcus", hi: "स्ट्रेप्टोकोकस" },
            { en: "Aspergillus niger", hi: "एस्परगिलस नाइजर" }
          ],
          correctOptionIndex: 0,
          explanation: { en: "Cyclosporin A is used as an immunosuppressant.", hi: "साइक्लोस्पोरिन ए का उपयोग इम्यूनोसप्रेसेंट के रूप में किया जाता है।" }
        }
      ],
      diagrams: [],
      revisions: [
        {
          id: "rev1",
          topic: { en: "Microbes & Products", hi: "सूक्ष्म जीव और उत्पाद", hinglish: "Microbe Products" },
          summary: { en: "Statins (Monascus purpureus)\nStreptokinase (Streptococcus)\nCitric acid (Aspergillus niger)", hi: "स्टैटिन (मोनस्कस परप्यूरियस)\nस्ट्रेप्टोकाइनेज (स्ट्रेप्टोकोकस)\nसाइट्रिक एसिड (एस्परगिलस नाइजर)" },
          quickRecall: []
        }
      ],
      mindmap: { id: "root", label: { en: "Microbes", hi: "सूक्ष्म जीव" }, children: [] }
    };
  }
};

const writeData = (chNum) => {
  const ch = 'ch' + chNum;
  const baseDir = path.join(__dirname, '../src/content/biology/chapters', ch);
  if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });
  
  const data = generateData(chNum);
  Object.keys(data).forEach(key => {
    fs.writeFileSync(path.join(baseDir, `${key}.json`), JSON.stringify(data[key], null, 2));
  });
  console.log(`Chapter ${chNum} enriched successfully!`);
};

for (let i = 5; i <= 8; i++) {
  writeData(i);
}
