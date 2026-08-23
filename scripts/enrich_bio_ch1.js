const fs = require('fs');
const path = require('path');

const ch = 'ch1';
const baseDir = path.join(__dirname, '../src/content/biology/chapters', ch);

const data = {
  notes: [
    {
      id: "n1",
      title: { en: "Structure of Flower & Pre-fertilization Events", hi: "पुष्प की संरचना और निषेचन-पूर्व घटनाएँ" },
      content: {
        en: "A typical flower has four whorls: Calyx (sepals), Corolla (petals), Androecium (stamens - male reproductive part), and Gynoecium (carpels/pistil - female reproductive part). Pre-fertilization involves the development of the anther, microsporogenesis (formation of pollen grains), and megasporogenesis (formation of embryo sac).",
        hi: "एक सामान्य फूल में चार चक्र होते हैं: बाह्यदलपुंज (Calyx), दलपुंज (Corolla), पुमंग (Androecium - नर प्रजनन अंग), और जायांग (Gynoecium - मादा प्रजनन अंग)। निषेचन-पूर्व घटनाओं में परागकोश का विकास, लघुबीजाणुजनन (परागकणों का निर्माण), और गुरुबीजाणुजनन (भ्रूणकोष का निर्माण) शामिल हैं।"
      }
    },
    {
      id: "n2",
      title: { en: "Microsporogenesis & Pollen Grain", hi: "लघुबीजाणुजनन और परागकण" },
      content: {
        en: "The process of formation of microspores from a pollen mother cell (PMC) through meiosis is microsporogenesis. A mature pollen grain has two layers: an outer hard exine (made of sporopollenin, the most resistant organic material) and an inner intine (made of cellulose and pectin). It contains a larger vegetative cell and a smaller generative cell.",
        hi: "अर्धसूत्रीविभाजन के माध्यम से पराग मातृ कोशिका (PMC) से लघुबीजाणुओं (microspores) के निर्माण की प्रक्रिया लघुबीजाणुजनन है। एक परिपक्व परागकण में दो परतें होती हैं: बाहरी कठोर बाह्यचोल (एक्सिन - स्पोरोपोलेनिन से बना) और आंतरिक अंतःचोल (इन्टिन - सेल्यूलोज और पेक्टिन से बना)। इसमें एक बड़ी कायिक कोशिका (vegetative cell) और एक छोटी जनन कोशिका (generative cell) होती है।"
      }
    },
    {
      id: "n3",
      title: { en: "Megasporogenesis & Embryo Sac", hi: "गुरुबीजाणुजनन और भ्रूणकोष" },
      content: {
        en: "The formation of megaspores from the megaspore mother cell (MMC) is called megasporogenesis. The functional megaspore develops into the female gametophyte (embryo sac). A typical mature angiosperm embryo sac is 8-nucleate but 7-celled, containing an egg apparatus (1 egg + 2 synergids), 3 antipodal cells, and a large central cell with 2 polar nuclei.",
        hi: "गुरुबीजाणु मातृ कोशिका (MMC) से गुरुबीजाणुओं के निर्माण को गुरुबीजाणुजनन कहा जाता है। कार्यात्मक गुरुबीजाणु मादा युग्मकोद्भिद (भ्रूणकोष) में विकसित होता है। एक सामान्य परिपक्व एंजियोस्पर्म भ्रूणकोष 8-केंद्रक (8-nucleate) लेकिन 7-कोशिका वाला होता है, जिसमें एक अंड उपकरण (1 अंड + 2 सहायक कोशिकाएं), 3 प्रतिव्यासांत (antipodal) कोशिकाएं और 2 ध्रुवीय केंद्रकों (polar nuclei) के साथ एक बड़ी केंद्रीय कोशिका होती है।"
      }
    },
    {
      id: "n4",
      title: { en: "Pollination & Its Types", hi: "परागण और इसके प्रकार" },
      content: {
        en: "Pollination is the transfer of pollen grains from anther to stigma. Types: Autogamy (same flower), Geitonogamy (different flower, same plant), and Xenogamy (different plant). Agents of pollination can be abiotic (wind - anemophily, water - hydrophily) or biotic (insects - entomophily, birds - ornithophily).",
        hi: "परागकोश से वर्तिकाग्र (stigma) तक परागकणों का स्थानांतरण परागण कहलाता है। प्रकार: स्वयुग्मन (Autogamy - एक ही फूल), सजातपुष्पी परागण (Geitonogamy - अलग फूल, एक ही पौधा), और परनिषेचन (Xenogamy - अलग पौधा)। परागण के कारक अजैविक (हवा - एनेमोफिली, पानी - हाइड्रोफिली) या जैविक (कीड़े - एंटोमोफिली, पक्षी - ऑर्निथोफिली) हो सकते हैं।"
      }
    },
    {
      id: "n5",
      title: { en: "Double Fertilization & Post-fertilization", hi: "दोहरा निषेचन और निषेचन-पश्च घटनाएँ" },
      content: {
        en: "Unique to angiosperms, double fertilization involves Syngamy (male gamete + egg = diploid zygote) and Triple Fusion (male gamete + 2 polar nuclei = triploid Primary Endosperm Nucleus / PEN). Post-fertilization events include development of endosperm from PEN, embryo from zygote, ovule into seed, and ovary into fruit.",
        hi: "एंजियोस्पर्म के लिए अद्वितीय, दोहरे निषेचन में युग्मक संलयन (Syngamy: नर युग्मक + अंड = द्विगुणित युग्मनज/zygote) और त्रिसंलयन (Triple Fusion: नर युग्मक + 2 ध्रुवीय केंद्रक = त्रिगुणित प्राथमिक भ्रूणपोष केंद्रक / PEN) शामिल हैं। निषेचन-पश्च घटनाओं में PEN से भ्रूणपोष का विकास, युग्मनज से भ्रूण, बीजांड से बीज और अंडाशय से फल का विकास शामिल है।"
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
          en: "Pollen grain lands on the compatible stigma and germinates to produce a pollen tube through one of the germ pores.",
          hi: "परागकण संगत वर्तिकाग्र पर गिरता है और जनन छिद्रों (germ pores) में से एक के माध्यम से पराग नलिका बनाने के लिए अंकुरित होता है।"
        },
        {
          en: "The pollen tube grows through the tissues of stigma and style and reaches the ovary.",
          hi: "पराग नलिका वर्तिकाग्र और वर्तिका के ऊतकों के माध्यम से बढ़ती है और अंडाशय (ovary) तक पहुँचती है।"
        },
        {
          en: "It enters the ovule through the micropyle and then enters one of the synergids through the filiform apparatus.",
          hi: "यह बीजांडद्वार (micropyle) के माध्यम से बीजांड में प्रवेश करती है और फिर तंतुरूप उपकरण (filiform apparatus) के माध्यम से एक सहायक कोशिका (synergid) में प्रवेश करती है।"
        },
        {
          en: "The pollen tube releases two male gametes into the cytoplasm of the synergid.",
          hi: "पराग नलिका सहायक कोशिका के कोशिकाद्रव्य में दो नर युग्मकों को छोड़ती है।"
        },
        {
          en: "**Syngamy**: One male gamete fuses with the egg cell nucleus to form a diploid zygote ($2n$).",
          hi: "**युग्मक संलयन (Syngamy)**: एक नर युग्मक द्विगुणित युग्मनज ($2n$) बनाने के लिए अंड कोशिका के केंद्रक के साथ संलयन करता है।"
        },
        {
          en: "**Triple Fusion**: The other male gamete fuses with the two polar nuclei in the central cell to produce a triploid Primary Endosperm Nucleus (PEN, $3n$).",
          hi: "**त्रिसंलयन (Triple Fusion)**: दूसरा नर युग्मक त्रिगुणित प्राथमिक भ्रूणपोष केंद्रक (PEN, $3n$) बनाने के लिए केंद्रीय कोशिका में दो ध्रुवीय केंद्रकों के साथ संलयन करता है।"
        }
      ],
      conclusion: {
        en: "Since two types of fusions (syngamy and triple fusion) take place in an embryo sac, the phenomenon is termed double fertilization.",
        hi: "चूँकि एक भ्रूणकोष में दो प्रकार के संलयन (युग्मक संलयन और त्रिसंलयन) होते हैं, इसलिए इस घटना को दोहरा निषेचन (double fertilization) कहा जाता है।"
      }
    }
  ],
  numericals: [
    {
      id: "num1",
      question: {
        en: "If the diploid number of chromosomes in a flowering plant is 24, what would be the number of chromosomes in its endosperm, synergids, and pollen grains?",
        hi: "यदि एक पुष्पी पादप में गुणसूत्रों की द्विगुणित संख्या 24 है, तो इसके भ्रूणपोष, सहायक कोशिकाओं और परागकणों में गुणसूत्रों की संख्या क्या होगी?"
      },
      solution: {
        en: "Given: Diploid number ($2n$) = 24. \nTherefore, haploid number ($n$) = 24 / 2 = 12.\n1. **Endosperm**: It is triploid ($3n$). Number of chromosomes = $3 \\times 12$ = **36**.\n2. **Synergids**: They are haploid ($n$). Number of chromosomes = **12**.\n3. **Pollen grains**: They are haploid ($n$). Number of chromosomes = **12**.",
        hi: "दिया गया है: द्विगुणित संख्या ($2n$) = 24.\nइसलिए, अगुणित संख्या ($n$) = 24 / 2 = 12.\n1. **भ्रूणपोष (Endosperm)**: यह त्रिगुणित ($3n$) होता है। गुणसूत्रों की संख्या = $3 \\times 12$ = **36**.\n2. **सहायक कोशिकाएं (Synergids)**: ये अगुणित ($n$) होती हैं। गुणसूत्रों की संख्या = **12**.\n3. **परागकण (Pollen grains)**: ये अगुणित ($n$) होते हैं। गुणसूत्रों की संख्या = **12**."
      }
    }
  ],
  questions: [
    {
      id: "q1",
      type: "objective",
      difficulty: "Easy",
      marks: 1,
      question: { en: "The highly resistant organic material present in the exine of pollen grains is:", hi: "परागकणों के बाह्यचोल (exine) में मौजूद अत्यधिक प्रतिरोधी कार्बनिक पदार्थ है:" },
      options: [
        { en: "Cellulose", hi: "सेल्यूलोज" },
        { en: "Pectin", hi: "पेक्टिन" },
        { en: "Sporopollenin", hi: "स्पोरोपोलेनिन" },
        { en: "Lignin", hi: "लिग्निन" }
      ],
      correctAnswer: 2,
      explanation: { en: "Sporopollenin is one of the most resistant organic materials known.", hi: "स्पोरोपोलेनिन ज्ञात सबसे प्रतिरोधी कार्बनिक पदार्थों में से एक है।" }
    },
    {
      id: "q2",
      type: "subjective",
      difficulty: "Medium",
      marks: 3,
      question: { en: "Differentiate between microsporogenesis and megasporogenesis.", hi: "लघुबीजाणुजनन और गुरुबीजाणुजनन के बीच अंतर स्पष्ट कीजिए।" },
      idealAnswer: { en: "1. **Microsporogenesis**: It is the process of formation of microspores (pollen grains) from a pollen mother cell (PMC) through meiosis. It occurs inside the microsporangium (anther). It results in 4 functional microspores (tetrad).\n2. **Megasporogenesis**: It is the process of formation of megaspores from a megaspore mother cell (MMC) through meiosis. It occurs inside the megasporangium (ovule). It results in 4 megaspores, out of which usually only 1 is functional and 3 degenerate.", hi: "1. **लघुबीजाणुजनन**: यह अर्धसूत्रीविभाजन के माध्यम से पराग मातृ कोशिका (PMC) से लघुबीजाणुओं (परागकणों) के निर्माण की प्रक्रिया है। यह लघुबीजाणुधानी (परागकोश) के अंदर होता है। इसके परिणामस्वरूप 4 कार्यात्मक लघुबीजाणु (चतुष्क) बनते हैं।\n2. **गुरुबीजाणुजनन**: यह अर्धसूत्रीविभाजन के माध्यम से गुरुबीजाणु मातृ कोशिका (MMC) से गुरुबीजाणुओं के निर्माण की प्रक्रिया है। यह गुरुबीजाणुधानी (बीजांड) के अंदर होता है। इसके परिणामस्वरूप 4 गुरुबीजाणु बनते हैं, जिनमें से आमतौर पर केवल 1 कार्यात्मक होता है और 3 नष्ट हो जाते हैं।" },
      keywords: [{ en: "PMC", hi: "पराग मातृ कोशिका" }, { en: "MMC", hi: "गुरुबीजाणु मातृ कोशिका" }, { en: "Microsporangium", hi: "लघुबीजाणुधानी" }]
    },
    {
      id: "q3",
      type: "subjective",
      difficulty: "Hard",
      marks: 5,
      question: { en: "Explain the structure of a typical angiosperm embryo sac with the help of a diagram description.", hi: "चित्र के वर्णन की सहायता से एक सामान्य एंजियोस्पर्म भ्रूणकोष की संरचना की व्याख्या कीजिए।" },
      idealAnswer: { en: "A typical mature angiosperm embryo sac is 8-nucleate and 7-celled. It consists of:\n1. **Egg Apparatus (at micropylar end)**: Consists of two synergids and one egg cell. Synergids have special cellular thickenings called filiform apparatus which guide the pollen tube.\n2. **Antipodal Cells (at chalazal end)**: Three cells present at the opposite end, they generally degenerate after fertilization.\n3. **Central Cell**: The largest cell, containing two polar nuclei which fuse to form a secondary nucleus before fertilization.", hi: "एक सामान्य परिपक्व एंजियोस्पर्म भ्रूणकोष 8-केंद्रक और 7-कोशिका वाला होता है। इसमें निम्न शामिल हैं:\n1. **अंड उपकरण (बीजांडद्वारी सिरे पर)**: इसमें दो सहायक कोशिकाएं (synergids) और एक अंड कोशिका होती है। सहायक कोशिकाओं में तंतुरूप उपकरण (filiform apparatus) नामक विशेष कोशिकीय स्थूलन होते हैं जो पराग नलिका का मार्गदर्शन करते हैं。\n2. **प्रतिव्यासांत कोशिकाएं (निभागीय सिरे पर)**: विपरीत सिरे पर मौजूद तीन कोशिकाएं, वे आमतौर पर निषेचन के बाद नष्ट हो जाती हैं।\n3. **केंद्रीय कोशिका**: सबसे बड़ी कोशिका, जिसमें दो ध्रुवीय केंद्रक होते हैं जो निषेचन से पहले संलयन करके एक द्वितीयक केंद्रक बनाते हैं।" },
      keywords: [{ en: "Egg Apparatus", hi: "अंड उपकरण" }, { en: "Antipodals", hi: "प्रतिव्यासांत" }, { en: "Filiform apparatus", hi: "तंतुरूप उपकरण" }]
    }
  ],
  diagrams: [
    {
      id: "dia1",
      title: { en: "Anatomy of an Angiosperm Ovule", hi: "एक एंजियोस्पर्म बीजांड की शारीरिक रचना" },
      description: { en: "A schematic representing the anatropous ovule showing funicle, micropyle, integuments, nucellus, embryo sac, and chalazal pole.", hi: "एक एनाट्रोपस बीजांड का प्रतिनिधित्व करने वाली एक योजना जिसमें फ्यूनिकल, बीजांडद्वार (micropyle), अध्यावरण (integuments), बीजांडकाय (nucellus), भ्रूणकोष और निभागीय ध्रुव (chalazal pole) दिखाया गया है।" },
      svgCode: "<svg width='200' height='200' viewBox='0 0 200 200'><circle cx='100' cy='100' r='50' fill='none' stroke='blue' stroke-width='2'/><text x='70' y='105' font-size='12' fill='black'>Embryo Sac</text></svg>"
    }
  ],
  revisions: [
    {
      id: "rev1",
      topic: { en: "Pollen Grain Walls", hi: "परागकण की दीवारें", hinglish: "Exine and Intine" },
      summary: { en: "**Exine**: Outer layer, made of Sporopollenin (highly resistant).\n**Intine**: Inner layer, made of Cellulose and Pectin (continuous).", hi: "**बाह्यचोल (Exine)**: बाहरी परत, स्पोरोपोलेनिन (अत्यधिक प्रतिरोधी) से बनी है।\n**अंतःचोल (Intine)**: आंतरिक परत, सेल्यूलोज और पेक्टिन (निरंतर) से बनी है।" },
      quickRecall: [{ en: "Germ pore = no sporopollenin", hi: "जनन छिद्र = कोई स्पोरोपोलेनिन नहीं" }]
    },
    {
      id: "rev2",
      topic: { en: "Embryo Sac Structure", hi: "भ्रूणकोष की संरचना", hinglish: "7-celled, 8-nucleate" },
      summary: { en: "**3 cells** at chalazal end (Antipodals)\n**3 cells** at micropylar end (Egg apparatus: 1 egg + 2 synergids)\n**1 large Central cell** (with 2 polar nuclei)", hi: "**3 कोशिकाएं** निभागीय सिरे पर (प्रतिव्यासांत)\n**3 कोशिकाएं** बीजांडद्वारी सिरे पर (अंड उपकरण: 1 अंड + 2 सहायक)\n**1 बड़ी केंद्रीय कोशिका** (2 ध्रुवीय केंद्रकों के साथ)" },
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
          { id: "c1a", label: { en: "Microsporogenesis (Pollen)", hi: "लघुबीजाणुजनन (पराग)" } },
          { id: "c1b", label: { en: "Megasporogenesis (Embryo Sac)", hi: "गुरुबीजाणुजनन (भ्रूणकोष)" } },
          { id: "c1c", label: { en: "Pollination", hi: "परागण" } }
        ]
      },
      {
        id: "c2",
        label: { en: "Double Fertilization", hi: "दोहरा निषेचन" },
        children: [
          { id: "c2a", label: { en: "Syngamy (Zygote)", hi: "युग्मक संलयन (युग्मनज)" } },
          { id: "c2b", label: { en: "Triple Fusion (PEN)", hi: "त्रिसंलयन (PEN)" } }
        ]
      },
      {
        id: "c3",
        label: { en: "Post-fertilization", hi: "निषेचन-पश्च" },
        children: [
          { id: "c3a", label: { en: "Endosperm & Embryo", hi: "भ्रूणपोष और भ्रूण" } },
          { id: "c3b", label: { en: "Seed & Fruit", hi: "बीज और फल" } }
        ]
      }
    ]
  },
  test: [
    {
      id: "t1",
      question: { en: "Which of the following has proved helpful in preserving pollen as fossils?", hi: "निम्नलिखित में से क्या परागकणों को जीवाश्मों के रूप में संरक्षित करने में सहायक सिद्ध हुआ है?" },
      options: [{ en: "Pollenkitt", hi: "पॉलेनकिट" }, { en: "Cellulosic intine", hi: "सेल्युलोसिक अंतःचोल" }, { en: "Oil content", hi: "तेल की मात्रा" }, { en: "Sporopollenin", hi: "स्पोरोपोलेनिन" }],
      correctAnswer: 3,
      explanation: { en: "Sporopollenin is highly resistant to degradation, acting as a preservative.", hi: "स्पोरोपोलेनिन क्षरण के प्रति अत्यधिक प्रतिरोधी है, जो एक परिरक्षक के रूप में कार्य करता है।" }
    },
    {
      id: "t2",
      question: { en: "Male gametophyte in angiosperms produces:", hi: "एंजियोस्पर्म में नर युग्मकोद्भिद (Male gametophyte) उत्पन्न करता है:" },
      options: [{ en: "Single sperm and a vegetative cell", hi: "एक शुक्राणु और एक कायिक कोशिका" }, { en: "Single sperm and two vegetative cells", hi: "एक शुक्राणु और दो कायिक कोशिकाएं" }, { en: "Three sperms", hi: "तीन शुक्राणु" }, { en: "Two sperms and a vegetative cell", hi: "दो शुक्राणु और एक कायिक कोशिका" }],
      correctAnswer: 3,
      explanation: { en: "The mature male gametophyte consists of one vegetative cell and two male gametes (sperms).", hi: "परिपक्व नर युग्मकोद्भिद में एक कायिक कोशिका और दो नर युग्मक (शुक्राणु) होते हैं।" }
    }
  ]
};

if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });

Object.keys(data).forEach(key => {
  fs.writeFileSync(path.join(baseDir, `${key}.json`), JSON.stringify(data[key], null, 2));
});

console.log('Chapter 1 enriched successfully!');
