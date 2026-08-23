const fs = require('fs');
const path = require('path');

const generateData = (chNum) => {
  if (chNum === 1) {
    return {
      notes: [
        {
          id: "n1",
          title: { en: "Structure of Flower & Pre-fertilization Events", hi: "पुष्प की संरचना और निषेचन-पूर्व घटनाएँ" },
          content: {
            en: "A typical flower has four whorls: Calyx (sepals), Corolla (petals), Androecium (stamens), and Gynoecium (carpels). Pre-fertilization involves the development of the anther, microsporogenesis (pollen grains formation), and megasporogenesis (embryo sac formation).",
            hi: "एक सामान्य फूल में चार चक्र होते हैं: बाह्यदलपुंज (Calyx), दलपुंज (Corolla), पुमंग (Androecium), और जायांग (Gynoecium)। निषेचन-पूर्व घटनाओं में परागकोश का विकास, लघुबीजाणुजनन, और गुरुबीजाणुजनन शामिल हैं।"
          }
        },
        {
          id: "n2",
          title: { en: "Microsporogenesis & Pollen Grain", hi: "लघुबीजाणुजनन और परागकण" },
          content: {
            en: "Formation of microspores from a pollen mother cell (PMC) through meiosis is microsporogenesis. A mature pollen grain has two layers: an outer hard exine (made of sporopollenin) and an inner intine (made of cellulose and pectin). It contains a larger vegetative cell and a smaller generative cell.",
            hi: "अर्धसूत्रीविभाजन के माध्यम से पराग मातृ कोशिका (PMC) से लघुबीजाणुओं के निर्माण की प्रक्रिया लघुबीजाणुजनन है। एक परिपक्व परागकण में बाहरी कठोर बाह्यचोल (स्पोरोपोलेनिन) और आंतरिक अंतःचोल (सेल्यूलोज और पेक्टिन) होती है।"
          }
        },
        {
          id: "n3",
          title: { en: "Megasporogenesis & Embryo Sac", hi: "गुरुबीजाणुजनन और भ्रूणकोष" },
          content: {
            en: "The formation of megaspores from the megaspore mother cell (MMC) is called megasporogenesis. A typical mature angiosperm embryo sac is 8-nucleate but 7-celled, containing an egg apparatus (1 egg + 2 synergids), 3 antipodal cells, and a large central cell with 2 polar nuclei.",
            hi: "गुरुबीजाणु मातृ कोशिका (MMC) से गुरुबीजाणुओं के निर्माण को गुरुबीजाणुजनन कहा जाता है। एक सामान्य परिपक्व एंजियोस्पर्म भ्रूणकोष 8-केंद्रक लेकिन 7-कोशिका वाला होता है।"
          }
        },
        {
          id: "n4",
          title: { en: "Double Fertilization", hi: "दोहरा निषेचन" },
          content: {
            en: "Unique to angiosperms, double fertilization involves Syngamy (male gamete + egg = diploid zygote) and Triple Fusion (male gamete + 2 polar nuclei = triploid Primary Endosperm Nucleus / PEN).",
            hi: "एंजियोस्पर्म के लिए अद्वितीय, दोहरे निषेचन में युग्मक संलयन (Syngamy) और त्रिसंलयन (Triple Fusion) शामिल हैं।"
          }
        }
      ],
      formulas: [
        {
          id: "f1",
          title: { en: "Chromosome Number Formula", hi: "गुणसूत्र संख्या सूत्र" },
          formula: "n \\text{ (haploid)}, \\quad 2n \\text{ (diploid)}, \\quad 3n \\text{ (triploid)}",
          variables: [
            { name: "n", description: { en: "Gametes (Pollen, Egg), Synergids, Antipodals", hi: "युग्मक (पराग, अंड), सहायक कोशिकाएं, प्रतिव्यासांत" } },
            { name: "2n", description: { en: "Zygote, Nucellus, Integuments, MMC, PMC", hi: "युग्मनज, बीजांडकाय, अध्यावरण, MMC, PMC" } },
            { name: "3n", description: { en: "Primary Endosperm Nucleus (PEN) / Endosperm", hi: "प्राथमिक भ्रूणपोष केंद्रक (PEN) / भ्रूणपोष" } }
          ],
          applications: {
            en: "Used to determine the ploidy level of various cells in a plant.",
            hi: "पौधे में विभिन्न कोशिकाओं के प्लॉइडी स्तर (गुणसूत्रों के सेट) को निर्धारित करने के लिए उपयोग किया जाता है।"
          }
        }
      ],
      derivations: [
        {
          id: "d1",
          title: { en: "Process of Double Fertilization", hi: "दोहरे निषेचन की प्रक्रिया" },
          steps: [
            {
              en: "Pollen grain lands on the compatible stigma and germinates.",
              hi: "परागकण संगत वर्तिकाग्र पर गिरता है और अंकुरित होता है।"
            },
            {
              en: "Pollen tube grows through the style and enters the ovule.",
              hi: "पराग नलिका वर्तिका के माध्यम से बढ़ती है और बीजांड में प्रवेश करती है।"
            },
            {
              en: "**Syngamy**: One male gamete fuses with the egg cell nucleus to form a diploid zygote ($2n$).",
              hi: "**युग्मक संलयन (Syngamy)**: एक नर युग्मक द्विगुणित युग्मनज ($2n$) बनाने के लिए अंड कोशिका के साथ संलयन करता है।"
            },
            {
              en: "**Triple Fusion**: The other male gamete fuses with two polar nuclei to produce a triploid PEN ($3n$).",
              hi: "**त्रिसंलयन (Triple Fusion)**: दूसरा नर युग्मक त्रिगुणित PEN ($3n$) बनाने के लिए दो ध्रुवीय केंद्रकों के साथ संलयन करता है।"
            }
          ],
          conclusion: {
            en: "Since two fusions take place, it is termed double fertilization.",
            hi: "चूँकि दो संलयन होते हैं, इसलिए इसे दोहरा निषेचन कहा जाता है।"
          }
        }
      ],
      numericals: [
        {
          id: "num1",
          question: {
            en: "If the diploid number of chromosomes in a flowering plant is 24, what would be the number of chromosomes in its endosperm?",
            hi: "यदि एक पुष्पी पादप में गुणसूत्रों की द्विगुणित संख्या 24 है, तो इसके भ्रूणपोष में गुणसूत्रों की संख्या क्या होगी?"
          },
          solution: {
            en: "Diploid ($2n$) = 24. Haploid ($n$) = 12.\n**Endosperm** is triploid ($3n$).\nChromosomes = $3 \\times 12 = 36$.",
            hi: "द्विगुणित ($2n$) = 24. अगुणित ($n$) = 12.\n**भ्रूणपोष (Endosperm)** त्रिगुणित ($3n$) होता है।\nगुणसूत्र = $3 \\times 12 = 36$."
          }
        }
      ],
      questions: [
        {
          id: "q1",
          type: "objective",
          difficulty: "Easy",
          marks: 1,
          question: { en: "The highly resistant organic material present in the exine is:", hi: "बाह्यचोल (exine) में मौजूद अत्यधिक प्रतिरोधी कार्बनिक पदार्थ है:" },
          options: [
            { en: "Cellulose", hi: "सेल्यूलोज" },
            { en: "Pectin", hi: "पेक्टिन" },
            { en: "Sporopollenin", hi: "स्पोरोपोलेनिन" },
            { en: "Lignin", hi: "लिग्निन" }
          ],
          correctAnswer: 2,
          explanation: { en: "Sporopollenin is one of the most resistant organic materials.", hi: "स्पोरोपोलेनिन ज्ञात सबसे प्रतिरोधी कार्बनिक पदार्थों में से एक है।" }
        },
        {
          id: "q_mcq_1",
          type: "mcq",
          difficulty: "Easy",
          marks: 1,
          question: { en: "Male gametophyte in angiosperms produces:", hi: "एंजियोस्पर्म में नर युग्मकोद्भिद उत्पन्न करता है:" },
          options: [
            { en: "Single sperm and a vegetative cell", hi: "एक शुक्राणु और एक कायिक कोशिका" },
            { en: "Single sperm and two vegetative cells", hi: "एक शुक्राणु और दो कायिक कोशिकाएं" },
            { en: "Two sperms and a vegetative cell", hi: "दो शुक्राणु और एक कायिक कोशिका" },
            { en: "Three sperms", hi: "तीन शुक्राणु" }
          ],
          correctOptionIndex: 2,
          explanation: { en: "The mature male gametophyte has 1 vegetative cell and 2 sperms.", hi: "परिपक्व नर युग्मकोद्भिद में 1 कायिक कोशिका और 2 शुक्राणु होते हैं।" }
        },
        {
          id: "q_mcq_2",
          type: "mcq",
          difficulty: "Medium",
          marks: 1,
          question: { en: "Which of the following has proved helpful in preserving pollen as fossils?", hi: "निम्नलिखित में से क्या परागकणों को जीवाश्मों के रूप में संरक्षित करने में सहायक सिद्ध हुआ है?" },
          options: [
            { en: "Pollenkitt", hi: "पॉलेनकिट" },
            { en: "Cellulosic intine", hi: "सेल्युलोसिक अंतःचोल" },
            { en: "Oil content", hi: "तेल की मात्रा" },
            { en: "Sporopollenin", hi: "स्पोरोपोलेनिन" }
          ],
          correctOptionIndex: 3,
          explanation: { en: "Sporopollenin is highly resistant to degradation.", hi: "स्पोरोपोलेनिन क्षरण के प्रति अत्यधिक प्रतिरोधी है।" }
        },
        {
          id: "q2",
          type: "subjective",
          difficulty: "Medium",
          marks: 3,
          question: { en: "Differentiate between microsporogenesis and megasporogenesis.", hi: "लघुबीजाणुजनन और गुरुबीजाणुजनन के बीच अंतर स्पष्ट कीजिए।" },
          idealAnswer: { en: "Microsporogenesis forms microspores from PMC. Megasporogenesis forms megaspores from MMC.", hi: "लघुबीजाणुजनन PMC से लघुबीजाणुओं का निर्माण करता है। गुरुबीजाणुजनन MMC से गुरुबीजाणुओं का निर्माण करता है।" },
          keywords: [{ en: "PMC", hi: "पराग मातृ कोशिका" }, { en: "MMC", hi: "गुरुबीजाणु मातृ कोशिका" }]
        },
        {
          id: "q3",
          type: "subjective",
          difficulty: "Hard",
          marks: 5,
          question: { en: "Explain the structure of a typical angiosperm embryo sac.", hi: "एक सामान्य एंजियोस्पर्म भ्रूणकोष की संरचना की व्याख्या कीजिए।" },
          idealAnswer: { en: "It is 8-nucleate and 7-celled. Contains Egg Apparatus (2 synergids, 1 egg), Antipodal Cells (3 cells), and Central Cell (2 polar nuclei).", hi: "यह 8-केंद्रक और 7-कोशिका वाला होता है। इसमें अंड उपकरण (2 सहायक, 1 अंड), प्रतिव्यासांत कोशिकाएं (3 कोशिकाएं) और केंद्रीय कोशिका (2 ध्रुवीय केंद्रक) शामिल हैं।" },
          keywords: [{ en: "Egg Apparatus", hi: "अंड उपकरण" }, { en: "Antipodals", hi: "प्रतिव्यासांत" }]
        }
      ],
      diagrams: [
        {
          id: "dia1",
          title: { en: "Anatomy of an Angiosperm Ovule", hi: "एक एंजियोस्पर्म बीजांड की संरचना" },
          description: { en: "A schematic representing the anatropous ovule showing funicle, micropyle, integuments, and embryo sac.", hi: "एक एनाट्रोपस बीजांड का प्रतिनिधित्व करने वाली योजना।" },
          svgCode: "<svg width='200' height='200' viewBox='0 0 200 200'><circle cx='100' cy='100' r='50' fill='none' stroke='blue' stroke-width='2'/><text x='65' y='105' font-size='12' fill='black'>Embryo Sac (7-celled)</text></svg>"
        }
      ],
      revisions: [
        {
          id: "rev1",
          topic: { en: "Pollen Grain Walls", hi: "परागकण की दीवारें", hinglish: "Exine and Intine" },
          summary: { en: "**Exine**: Outer layer (Sporopollenin).\n**Intine**: Inner layer (Cellulose and Pectin).", hi: "**बाह्यचोल**: बाहरी परत (स्पोरोपोलेनिन)।\n**अंतःचोल**: आंतरिक परत (सेल्यूलोज और पेक्टिन)।" },
          quickRecall: [{ en: "Germ pore = no sporopollenin", hi: "जनन छिद्र = कोई स्पोरोपोलेनिन नहीं" }]
        },
        {
          id: "rev2",
          topic: { en: "Embryo Sac Structure", hi: "भ्रूणकोष की संरचना", hinglish: "7-celled, 8-nucleate" },
          summary: { en: "**3 cells** at chalazal end (Antipodals)\n**3 cells** at micropylar end (Egg apparatus)\n**1 large Central cell**", hi: "**3 कोशिकाएं** निभागीय सिरे पर (प्रतिव्यासांत)\n**3 कोशिकाएं** बीजांडद्वारी सिरे पर (अंड उपकरण)\n**1 बड़ी केंद्रीय कोशिका**" },
          quickRecall: [{ en: "Filiform apparatus = Synergids", hi: "तंतुरूप उपकरण = सहायक कोशिकाएं" }]
        }
      ],
      mindmap: {
        id: "root",
        label: { en: "Sexual Reproduction", hi: "लैंगिक जनन" },
        children: [
          {
            id: "c1",
            label: { en: "Pre-fertilization", hi: "निषेचन-पूर्व" },
            children: [
              { id: "c1a", label: { en: "Microsporogenesis", hi: "लघुबीजाणुजनन" } },
              { id: "c1b", label: { en: "Megasporogenesis", hi: "गुरुबीजाणुजनन" } },
              { id: "c1c", label: { en: "Pollination", hi: "परागण" } }
            ]
          },
          {
            id: "c2",
            label: { en: "Double Fertilization", hi: "दोहरा निषेचन" },
            children: [
              { id: "c2a", label: { en: "Syngamy", hi: "युग्मक संलयन" } },
              { id: "c2b", label: { en: "Triple Fusion", hi: "त्रिसंलयन" } }
            ]
          },
          {
            id: "c3",
            label: { en: "Post-fertilization", hi: "निषेचन-पश्च" }
          }
        ]
      }
    };
  }
  
  if (chNum === 2) {
    return {
      notes: [
        {
          id: "n1",
          title: { en: "Male Reproductive System", hi: "नर प्रजनन तंत्र" },
          content: {
            en: "Located in the pelvis region. Includes a pair of testes, accessory ducts, glands, and external genitalia. Testes are situated outside the abdominal cavity within a pouch called scrotum (maintains low temperature 2-2.5°C lower than internal body temp necessary for spermatogenesis). Each testis has about 250 testicular lobules, containing 1-3 highly coiled seminiferous tubules.",
            hi: "श्रोणि (pelvis) क्षेत्र में स्थित है। इसमें वृषण (testes) की एक जोड़ी, सहायक नलिकाएं, ग्रंथियां और बाहरी जननांग शामिल हैं। वृषण उदर गुहा के बाहर वृषणकोष (scrotum) नामक थैली में स्थित होते हैं (जो शुक्राणुजनन के लिए आवश्यक कम तापमान बनाए रखता है)।"
          }
        },
        {
          id: "n2",
          title: { en: "Female Reproductive System", hi: "मादा प्रजनन तंत्र" },
          content: {
            en: "Consists of a pair of ovaries, a pair of oviducts (fallopian tubes), uterus, cervix, vagina, and external genitalia. Ovaries produce the female gamete (ovum) and ovarian hormones. Each fallopian tube has three parts: infundibulum (with fimbriae), ampulla, and isthmus.",
            hi: "इसमें अंडाशय (ovaries) की एक जोड़ी, फैलोपियन ट्यूब, गर्भाशय, गर्भाशय ग्रीवा, योनि और बाहरी जननांग शामिल हैं। अंडाशय मादा युग्मक (अंडाणु) और डिम्बग्रंथि हार्मोन का उत्पादन करते हैं।"
          }
        },
        {
          id: "n3",
          title: { en: "Gametogenesis", hi: "युग्मकजनन" },
          content: {
            en: "Spermatogenesis: Formation of sperms in seminiferous tubules. Spermatogonia (2n) -> Primary spermatocytes (2n) -> Secondary spermatocytes (n) -> Spermatids (n) -> Spermatozoa (n). \nOogenesis: Formation of a mature female gamete. Initiated during embryonic development stage. Oogonia -> Primary Oocyte -> Secondary Oocyte -> Ovum.",
            hi: "शुक्राणुजनन: वृषण में शुक्राणुओं का निर्माण।\nअंडजनन: परिपक्व मादा युग्मक का निर्माण। भ्रूणीय विकास के दौरान शुरू होता है।"
          }
        },
        {
          id: "n4",
          title: { en: "Menstrual Cycle & Fertilization", hi: "आर्तव चक्र (Menstrual Cycle) और निषेचन" },
          content: {
            en: "Reproductive cycle in female primates. Four phases: Menstrual, Follicular (Proliferative), Ovulatory (LH surge at mid-cycle), and Luteal (Secretory). Fertilization occurs in the ampullary region of the fallopian tube.",
            hi: "प्राइमेट्स में प्रजनन चक्र। चार चरण: आर्तव, पुटकीय, अंडोत्सर्ग (मध्य चक्र में LH उछाल), और पीतपिंड (Luteal)। निषेचन फैलोपियन ट्यूब के एम्पुला क्षेत्र में होता है।"
          }
        }
      ],
      formulas: [],
      derivations: [
        {
          id: "d1",
          title: { en: "Pathway of Sperm Transport", hi: "शुक्राणु परिवहन का मार्ग" },
          steps: [
            { en: "Seminiferous Tubules", hi: "शुक्रजनक नलिकाएं (Seminiferous Tubules)" },
            { en: "Rete Testis", hi: "वृषण जालिका (Rete Testis)" },
            { en: "Vasa Efferentia", hi: "शुक्रवाहिका (Vasa Efferentia)" },
            { en: "Epididymis", hi: "अधिवृषण (Epididymis)" },
            { en: "Vas Deferens", hi: "शुक्रवाहक (Vas Deferens)" },
            { en: "Ejaculatory Duct", hi: "स्खलन नलिका (Ejaculatory Duct)" },
            { en: "Urethra", hi: "मूत्रमार्ग (Urethra)" }
          ],
          conclusion: { en: "This is the complete pathway for the exit of sperm.", hi: "यह शुक्राणु के बाहर निकलने का पूरा मार्ग है।" }
        }
      ],
      numericals: [],
      questions: [
        {
          id: "q_mcq_1",
          type: "mcq",
          difficulty: "Easy",
          marks: 1,
          question: { en: "The Leydig cells found in the human body are the secretory source of:", hi: "मानव शरीर में पाई जाने वाली लेडिग कोशिकाएं किसके स्राव का स्रोत हैं?" },
          options: [
            { en: "Progesterone", hi: "प्रोजेस्टेरोन" },
            { en: "Intestinal mucus", hi: "आंतों का बलगम" },
            { en: "Glucagon", hi: "ग्लूकागन" },
            { en: "Androgens", hi: "एण्ड्रोजन" }
          ],
          correctOptionIndex: 3,
          explanation: { en: "Leydig cells synthesize and secrete testicular hormones called androgens.", hi: "लेडिग कोशिकाएं एण्ड्रोजन नामक वृषण हार्मोन का संश्लेषण और स्राव करती हैं।" }
        },
        {
          id: "q_mcq_2",
          type: "mcq",
          difficulty: "Medium",
          marks: 1,
          question: { en: "In humans, at the end of the first meiotic division, the male germ cells differentiate into the:", hi: "मनुष्यों में, पहले अर्धसूत्रीविभाजन के अंत में, नर रोगाणु कोशिकाएं किसमें विभेदित हो जाती हैं?" },
          options: [
            { en: "Spermatids", hi: "स्पर्मेटिड्स" },
            { en: "Spermatogonia", hi: "स्पर्मेटोगोनिया" },
            { en: "Primary spermatocytes", hi: "प्राथमिक स्पर्मेटोसाइट्स" },
            { en: "Secondary spermatocytes", hi: "द्वितीयक स्पर्मेटोसाइट्स" }
          ],
          correctOptionIndex: 3,
          explanation: { en: "Primary spermatocytes (2n) undergo meiosis I to form secondary spermatocytes (n).", hi: "प्राथमिक स्पर्मेटोसाइट्स (2n) अर्धसूत्रीविभाजन I से गुजरकर द्वितीयक स्पर्मेटोसाइट्स (n) बनाते हैं।" }
        },
        {
          id: "q3",
          type: "subjective",
          difficulty: "Medium",
          marks: 3,
          question: { en: "Write the function of each of the following: (a) Seminal vesicle (b) Acrosome (c) Fimbriae", hi: "निम्नलिखित में से प्रत्येक का कार्य लिखिए: (a) शुक्राशय (b) एक्रोसोम (c) फिमब्रिया" },
          idealAnswer: { en: "(a) Seminal vesicle: Secretes seminal plasma rich in fructose. (b) Acrosome: Contains enzymes that help the sperm enter the ovum. (c) Fimbriae: Helps in collection of the ovum after ovulation.", hi: "(a) शुक्राशय: फ्रुक्टोज से भरपूर वीर्य प्लाज्मा का स्राव करता है। (b) एक्रोसोम: इसमें एंजाइम होते हैं जो शुक्राणु को अंडाणु में प्रवेश करने में मदद करते हैं। (c) फिमब्रिया: अंडोत्सर्ग के बाद अंडाणु को इकट्ठा करने में मदद करता है।" },
          keywords: [{ en: "fructose", hi: "फ्रुक्टोज" }, { en: "enzymes", hi: "एंजाइम" }, { en: "collection", hi: "इकट्ठा" }]
        }
      ],
      diagrams: [
        {
          id: "dia1",
          title: { en: "Structure of Sperm", hi: "शुक्राणु की संरचना" },
          description: { en: "Sperm has a Head (with acrosome & nucleus), Neck, Middle piece (with mitochondria), and Tail.", hi: "शुक्राणु में एक सिर (एक्रोसोम और केंद्रक के साथ), गर्दन, मध्य भाग (माइटोकॉन्ड्रिया के साथ) और पूंछ होती है।" },
          svgCode: "<svg width='200' height='200' viewBox='0 0 200 200'><path d='M50,100 Q70,70 90,100 T150,100' fill='none' stroke='blue' stroke-width='4'/><circle cx='40' cy='100' r='15' fill='lightblue'/><text x='30' y='105' font-size='10'>Head</text></svg>"
        }
      ],
      revisions: [
        {
          id: "rev1",
          topic: { en: "Spermatogenesis vs Oogenesis", hi: "शुक्राणुजनन बनाम अंडजनन", hinglish: "Spermatogenesis vs Oogenesis" },
          summary: { en: "Spermatogenesis starts at puberty. Continuous process.\nOogenesis starts during embryonic stage. Arrested at Prophase I.", hi: "शुक्राणुजनन यौवन पर शुरू होता है। सतत प्रक्रिया।\nअंडजनन भ्रूण अवस्था के दौरान शुरू होता है। प्रोफ़ेज़ I पर रुक जाता है।" },
          quickRecall: [{ en: "LH Surge = Ovulation", hi: "LH उछाल = अंडोत्सर्ग" }]
        }
      ],
      mindmap: {
        id: "root",
        label: { en: "Human Reproduction", hi: "मानव जनन" },
        children: [
          { id: "c1", label: { en: "Male System", hi: "नर तंत्र" } },
          { id: "c2", label: { en: "Female System", hi: "मादा तंत्र" } },
          { id: "c3", label: { en: "Gametogenesis", hi: "युग्मकजनन" } },
          { id: "c4", label: { en: "Menstrual Cycle", hi: "आर्तव चक्र" } }
        ]
      }
    };
  }

  if (chNum === 3) {
    return {
      notes: [
        {
          id: "n1",
          title: { en: "Reproductive Health & RCH Programs", hi: "प्रजनन स्वास्थ्य और RCH कार्यक्रम" },
          content: { en: "According to WHO, reproductive health means a total well-being in all aspects of reproduction (physical, emotional, behavioral, and social). India initiated 'family planning' programs in 1951, now operated under RCH (Reproductive and Child Health Care) programs.", hi: "डब्ल्यूएचओ (WHO) के अनुसार, प्रजनन स्वास्थ्य का अर्थ प्रजनन के सभी पहलुओं (शारीरिक, भावनात्मक, व्यवहारिक और सामाजिक) में पूर्ण रूप से स्वस्थ होना है। भारत ने 1951 में 'परिवार नियोजन' कार्यक्रम शुरू किए थे, जो अब RCH कार्यक्रमों के तहत संचालित होते हैं।" }
        },
        {
          id: "n2",
          title: { en: "Birth Control (Contraceptives)", hi: "जन्म नियंत्रण (गर्भनिरोधक)" },
          content: { en: "Natural methods (Periodic abstinence, Coitus interruptus, Lactational amenorrhea). Barrier methods (Condoms, Diaphragms). IUDs (Copper T, Mirena). Oral contraceptives (Saheli). Surgical methods (Vasectomy in males, Tubectomy in females).", hi: "प्राकृतिक विधियाँ (आवधिक संयम, सहवास व्यवधान)। बाधा विधियाँ (कंडोम, डायाफ्राम)। IUDs (कॉपर टी)। मौखिक गर्भनिरोधक (सहेली)। सर्जिकल विधियाँ (पुरुषों में वासेक्टोमी, महिलाओं में ट्यूबेक्टोमी)।" }
        },
        {
          id: "n3",
          title: { en: "MTP and STIs", hi: "एमटीपी (MTP) और यौन संचारित संक्रमण (STIs)" },
          content: { en: "Medical Termination of Pregnancy (MTP) or induced abortion is legalized in India under strict conditions. STIs are diseases transmitted through sexual intercourse (e.g., Gonorrhoea, Syphilis, HIV, Hepatitis-B).", hi: "मेडिकल टर्मिनेशन ऑफ प्रेगनेंसी (MTP) या प्रेरित गर्भपात भारत में सख्त शर्तों के तहत वैध है। एसटीआई (STIs) वे बीमारियाँ हैं जो यौन संसर्ग के माध्यम से फैलती हैं (उदा., गोनोरिया, सिफलिस, एचआईवी)।" }
        },
        {
          id: "n4",
          title: { en: "Infertility & ART", hi: "बांझपन (Infertility) और एआरटी (ART)" },
          content: { en: "Infertility is the inability to produce children. Assisted Reproductive Technologies (ART) include IVF (In vitro fertilization), ZIFT, GIFT, and ICSI to help couples have children.", hi: "बांझपन बच्चे पैदा करने में असमर्थता है। असिस्टेड रिप्रोडक्टिव टेक्नोलॉजी (ART) में IVF (इन विट्रो फर्टिलाइजेशन), ZIFT, GIFT, और ICSI शामिल हैं।" }
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
          question: { en: "The oral contraceptive 'Saheli' was developed at:", hi: "मौखिक गर्भनिरोधक 'सहेली' कहाँ विकसित किया गया था?" },
          options: [
            { en: "CDRI, Lucknow", hi: "सीडीआरआई, लखनऊ" },
            { en: "AIIMS, New Delhi", hi: "एम्स, नई दिल्ली" },
            { en: "NDRI, Karnal", hi: "एनडीआरआई, करनाल" },
            { en: "NIV, Pune", hi: "एनआईवी, पुणे" }
          ],
          correctOptionIndex: 0,
          explanation: { en: "Saheli, a non-steroidal oral contraceptive, was developed by scientists at Central Drug Research Institute (CDRI) in Lucknow.", hi: "सहेली, एक गैर-स्टेरॉयड मौखिक गर्भनिरोधक है, जिसे लखनऊ में CDRI के वैज्ञानिकों द्वारा विकसित किया गया था।" }
        },
        {
          id: "q_mcq_2",
          type: "mcq",
          difficulty: "Medium",
          marks: 1,
          question: { en: "Which of the following is a copper releasing IUD?", hi: "निम्नलिखित में से कौन सा कॉपर मुक्त करने वाला IUD है?" },
          options: [
            { en: "Lippes loop", hi: "लिप्पेस लूप" },
            { en: "Multiload 375", hi: "मल्टीलोड 375" },
            { en: "LNG-20", hi: "एलएनजी-20" },
            { en: "Progestasert", hi: "प्रोजेस्टासर्ट" }
          ],
          correctOptionIndex: 1,
          explanation: { en: "CuT, Cu7, Multiload 375 are copper releasing IUDs. LNG-20 is a hormone-releasing IUD.", hi: "CuT, Cu7, मल्टीलोड 375 कॉपर मुक्त करने वाले IUD हैं। LNG-20 एक हार्मोन मुक्त करने वाला IUD है।" }
        },
        {
          id: "q3",
          type: "subjective",
          difficulty: "Hard",
          marks: 3,
          question: { en: "Expand the following terms: (a) IVF (b) ZIFT (c) GIFT", hi: "निम्नलिखित शब्दों का विस्तार करें: (a) IVF (b) ZIFT (c) GIFT" },
          idealAnswer: { en: "(a) IVF: In Vitro Fertilization\n(b) ZIFT: Zygote Intra Fallopian Transfer\n(c) GIFT: Gamete Intra Fallopian Transfer", hi: "(a) IVF: इन विट्रो फर्टिलाइजेशन\n(b) ZIFT: जाइगोट इंट्रा फैलोपियन ट्रांसफर\n(c) GIFT: गैमीट इंट्रा फैलोपियन ट्रांसफर" },
          keywords: [{ en: "In Vitro Fertilization", hi: "इन विट्रो फर्टिलाइजेशन" }, { en: "Zygote Intra Fallopian", hi: "जाइगोट इंट्रा फैलोपियन" }, { en: "Gamete Intra Fallopian", hi: "गैमीट इंट्रा फैलोपियन" }]
        }
      ],
      diagrams: [],
      revisions: [
        {
          id: "rev1",
          topic: { en: "IUDs (Intra Uterine Devices)", hi: "IUDs (इंट्रा यूटेराइन डिवाइस)", hinglish: "Types of IUDs" },
          summary: { en: "**Non-medicated**: Lippes loop (promotes phagocytosis of sperms).\n**Copper releasing**: CuT, Multiload 375 (suppresses sperm motility).\n**Hormone releasing**: Progestasert, LNG-20 (makes uterus unsuitable for implantation).", hi: "**गैर-औषधीय**: लिप्पेस लूप (शुक्राणुओं के फागोसाइटोसिस को बढ़ावा देता है)।\n**कॉपर रिलीजिंग**: CuT, मल्टीलोड 375 (शुक्राणु की गतिशीलता को दबाता है)।\n**हार्मोन रिलीजिंग**: प्रोजेस्टासर्ट, LNG-20 (गर्भाशय को प्रत्यारोपण के लिए अनुपयुक्त बनाता है)।" },
          quickRecall: [{ en: "Saheli = Once a week pill", hi: "सहेली = सप्ताह में एक बार गोली" }]
        }
      ],
      mindmap: {
        id: "root",
        label: { en: "Reproductive Health", hi: "प्रजनन स्वास्थ्य" },
        children: [
          { id: "c1", label: { en: "Contraceptives", hi: "गर्भनिरोधक" } },
          { id: "c2", label: { en: "MTP & STIs", hi: "एमटीपी और एसटीआई" } },
          { id: "c3", label: { en: "Infertility (ART)", hi: "बांझपन (एआरटी)" } }
        ]
      }
    };
  }

  if (chNum === 4) {
    return {
      notes: [
        {
          id: "n1",
          title: { en: "Mendel's Laws of Inheritance", hi: "मेंडल के वंशागति के नियम" },
          content: { en: "Gregor Mendel conducted hybridization experiments on garden peas (Pisum sativum). He proposed Law of Dominance, Law of Segregation (alleles do not blend, separate during gamete formation), and Law of Independent Assortment.", hi: "ग्रेगर मेंडल ने उद्यान मटर (पिसम सैटिवम) पर संकरण प्रयोग किए। उन्होंने प्रभाविता का नियम (Law of Dominance), विसंयोजन का नियम (Law of Segregation - युग्मक निर्माण के दौरान अलग होना), और स्वतंत्र अपव्यूहन का नियम (Law of Independent Assortment) प्रस्तावित किया।" }
        },
        {
          id: "n2",
          title: { en: "Incomplete Dominance & Co-dominance", hi: "अपूर्ण प्रभाविता और सह-प्रभाविता" },
          content: { en: "Incomplete Dominance: F1 phenotype is intermediate (e.g., pink flowers in Snapdragon). Co-dominance: Both alleles express themselves fully in F1 (e.g., ABO blood grouping in humans).", hi: "अपूर्ण प्रभाविता (Incomplete Dominance): F1 फीनोटाइप मध्यवर्ती होता है (उदा., स्नैपड्रैगन में गुलाबी फूल)। सह-प्रभाविता (Co-dominance): दोनों एलील F1 में खुद को पूरी तरह से व्यक्त करते हैं (उदा., मनुष्यों में ABO रक्त समूह)।" }
        },
        {
          id: "n3",
          title: { en: "Chromosomal Theory of Inheritance & Linkage", hi: "वंशागति का गुणसूत्रीय सिद्धांत और सहलग्नता" },
          content: { en: "Proposed by Sutton and Boveri. Thomas Hunt Morgan proved it experimentally using Drosophila melanogaster. Linkage refers to the physical association of genes on a chromosome, which do not assort independently.", hi: "सटन और बोवेरी द्वारा प्रस्तावित। थॉमस हंट मॉर्गन ने ड्रोसोफिला मेलानोगास्टर का उपयोग करके इसे प्रयोगात्मक रूप से सिद्ध किया। सहलग्नता (Linkage) एक गुणसूत्र पर जीन के भौतिक जुड़ाव को संदर्भित करती है, जो स्वतंत्र रूप से अलग नहीं होते हैं।" }
        },
        {
          id: "n4",
          title: { en: "Genetic Disorders", hi: "आनुवंशिक विकार" },
          content: { en: "Mendelian disorders (Haemophilia, Sickle-cell anaemia, Color blindness) are determined by alteration in a single gene. Chromosomal disorders (Down's syndrome, Turner's syndrome, Klinefelter's syndrome) are caused by absence/excess of chromosomes.", hi: "मेंडेलियन विकार (हीमोफीलिया, सिकल-सेल एनीमिया, वर्णांधता) एक ही जीन में परिवर्तन से निर्धारित होते हैं। गुणसूत्रीय विकार (डाउन सिंड्रोम, टर्नर सिंड्रोम, क्लाइनफेल्टर सिंड्रोम) गुणसूत्रों की अनुपस्थिति/अधिकता के कारण होते हैं।" }
        }
      ],
      formulas: [
        {
          id: "f1",
          title: { en: "Mendelian Phenotypic Ratios", hi: "मेंडेलियन फीनोटाइपिक अनुपात" },
          formula: "\\text{Monohybrid Cross: } 3:1 \\\\ \\text{Dihybrid Cross: } 9:3:3:1",
          variables: [],
          applications: { en: "Ratios observed in F2 generation under complete dominance.", hi: "पूर्ण प्रभाविता के तहत F2 पीढ़ी में देखे गए अनुपात।" }
        },
        {
          id: "f2",
          title: { en: "Number of Gamete Types", hi: "युग्मकों के प्रकारों की संख्या" },
          formula: "2^n",
          variables: [
            { name: "n", description: { en: "Number of heterozygous gene pairs", hi: "विषमयुग्मजी (heterozygous) जीन जोड़े की संख्या" } }
          ],
          applications: { en: "Used to find out how many different types of gametes a genotype will produce.", hi: "यह पता लगाने के लिए उपयोग किया जाता है कि एक जीनोटाइप कितने प्रकार के युग्मक पैदा करेगा।" }
        }
      ],
      derivations: [
        {
          id: "d1",
          title: { en: "Monohybrid Cross (Punnett Square)", hi: "एकसंकर क्रॉस (पुन्नट स्क्वायर)" },
          steps: [
            { en: "Parents: TT (Tall) x tt (Dwarf)", hi: "माता-पिता: TT (लंबा) x tt (बौना)" },
            { en: "Gametes: T and t", hi: "युग्मक: T और t" },
            { en: "F1 Generation: Tt (All Tall)", hi: "F1 पीढ़ी: Tt (सभी लंबे)" },
            { en: "Selfing F1: Tt x Tt", hi: "F1 स्वपरागण: Tt x Tt" },
            { en: "Gametes: T, t from both sides", hi: "युग्मक: T, t दोनों तरफ से" },
            { en: "F2 Generation: TT (Tall), Tt (Tall), Tt (Tall), tt (Dwarf)", hi: "F2 पीढ़ी: TT (लंबा), Tt (लंबा), Tt (लंबा), tt (बौना)" }
          ],
          conclusion: { en: "Phenotypic ratio is 3:1. Genotypic ratio is 1:2:1.", hi: "फीनोटाइपिक अनुपात 3:1 है। जीनोटाइपिक अनुपात 1:2:1 है।" }
        }
      ],
      numericals: [
        {
          id: "num1",
          question: {
            en: "A plant with genotype AaBb is crossed with aabb. What will be the percentage of AaBb offspring?",
            hi: "AaBb जीनोटाइप वाले एक पौधे का aabb के साथ संकरण कराया जाता है। AaBb संतानों का प्रतिशत क्या होगा?"
          },
          solution: {
            en: "This is a Test Cross.\nParents: AaBb x aabb\nGametes from AaBb: AB, Ab, aB, ab\nGametes from aabb: ab\nOffspring: AaBb, Aabb, aaBb, aabb in 1:1:1:1 ratio.\nPercentage of AaBb = **25%**.",
            hi: "यह एक टेस्ट क्रॉस (Test Cross) है।\nमाता-पिता: AaBb x aabb\nAaBb से युग्मक: AB, Ab, aB, ab\naabb से युग्मक: ab\nसंतान: 1:1:1:1 अनुपात में AaBb, Aabb, aaBb, aabb।\nAaBb का प्रतिशत = **25%**।"
          }
        }
      ],
      questions: [
        {
          id: "q_mcq_1",
          type: "mcq",
          difficulty: "Easy",
          marks: 1,
          question: { en: "The genotype of a person with Turner syndrome is:", hi: "टर्नर सिंड्रोम वाले व्यक्ति का जीनोटाइप है:" },
          options: [
            { en: "44 + XXY", hi: "44 + XXY" },
            { en: "44 + XO", hi: "44 + XO" },
            { en: "44 + XYY", hi: "44 + XYY" },
            { en: "44 + XXX", hi: "44 + XXX" }
          ],
          correctOptionIndex: 1,
          explanation: { en: "Turner's syndrome is caused by the absence of one X chromosome (45, with XO).", hi: "टर्नर सिंड्रोम एक X गुणसूत्र की अनुपस्थिति के कारण होता है (45, XO के साथ)।" }
        },
        {
          id: "q_mcq_2",
          type: "mcq",
          difficulty: "Medium",
          marks: 1,
          question: { en: "A cross between F1 hybrid and its recessive parent is called:", hi: "F1 संकर (hybrid) और उसके अप्रभावी (recessive) माता-पिता के बीच के क्रॉस को कहा जाता है:" },
          options: [
            { en: "Back cross", hi: "बैक क्रॉस" },
            { en: "Test cross", hi: "टेस्ट क्रॉस" },
            { en: "Monohybrid cross", hi: "मोनोहाइब्रिड क्रॉस" },
            { en: "Dihybrid cross", hi: "डाईहाइब्रिड क्रॉस" }
          ],
          correctOptionIndex: 1,
          explanation: { en: "A test cross is used to determine the genotype of a dominant phenotype by crossing it with a homozygous recessive individual.", hi: "एक टेस्ट क्रॉस का उपयोग प्रमुख फीनोटाइप के जीनोटाइप को निर्धारित करने के लिए किया जाता है।" }
        },
        {
          id: "q3",
          type: "subjective",
          difficulty: "Hard",
          marks: 5,
          question: { en: "Describe the chromosomal theory of inheritance.", hi: "वंशागति के गुणसूत्रीय सिद्धांत (Chromosomal theory of inheritance) का वर्णन करें।" },
          idealAnswer: { en: "Proposed by Sutton and Boveri. It states that chromosomes are the vehicles of genetic heredity. Key points: 1. Both chromosomes and genes occur in pairs in diploid cells. 2. Homologous chromosomes separate during meiosis. 3. Fertilization restores the diploid condition. 4. Chromosomes segregate and assort independently, leading to genetic variation.", hi: "सटन और बोवेरी द्वारा प्रस्तावित। यह बताता है कि गुणसूत्र आनुवंशिकता के वाहन हैं। मुख्य बिंदु: 1. द्विगुणित कोशिकाओं में गुणसूत्र और जीन दोनों जोड़े में होते हैं। 2. समजात गुणसूत्र अर्धसूत्रीविभाजन के दौरान अलग होते हैं। 3. निषेचन द्विगुणित स्थिति को पुनर्स्थापित करता है। 4. गुणसूत्र अलग और स्वतंत्र रूप से अपव्यूहन करते हैं, जिससे आनुवंशिक भिन्नता होती है।" },
          keywords: [{ en: "Sutton and Boveri", hi: "सटन और बोवेरी" }, { en: "pairs", hi: "जोड़े" }, { en: "meiosis", hi: "अर्धसूत्रीविभाजन" }]
        }
      ],
      diagrams: [],
      revisions: [
        {
          id: "rev1",
          topic: { en: "Mendelian Disorders", hi: "मेंडेलियन विकार", hinglish: "Genetic Diseases" },
          summary: { en: "**Haemophilia**: Sex-linked recessive. Blood fails to clot.\n**Sickle-cell anaemia**: Autosomal recessive. RBCs become sickle-shaped.\n**Phenylketonuria**: Autosomal recessive. Lacks enzyme to convert phenylalanine to tyrosine.", hi: "**हीमोफीलिया**: सेक्स-लिंक्ड अप्रभावी। रक्त का थक्का नहीं जमता।\n**सिकल-सेल एनीमिया**: ऑटोसोमल अप्रभावी। RBC हँसिया के आकार के हो जाते हैं।\n**फेनिलकीटोन्यूरिया**: ऑटोसोमल अप्रभावी।" },
          quickRecall: [{ en: "Down Syndrome = Trisomy 21", hi: "डाउन सिंड्रोम = ट्राइसॉमी 21" }]
        }
      ],
      mindmap: {
        id: "root",
        label: { en: "Inheritance", hi: "वंशागति" },
        children: [
          { id: "c1", label: { en: "Mendel's Laws", hi: "मेंडल के नियम" } },
          { id: "c2", label: { en: "Linkage & Recombination", hi: "सहलग्नता और पुनर्संयोजन" } },
          { id: "c3", label: { en: "Genetic Disorders", hi: "आनुवंशिक विकार" } }
        ]
      }
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

for (let i = 1; i <= 4; i++) {
  writeData(i);
}
