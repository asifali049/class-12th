const fs = require('fs');
const path = require('path');

const physicsData = {
  ch2: {
    name: "Electrostatic Potential and Capacitance",
    notes: [
      { id: "n1", title: { en: "Electrostatic Potential", hi: "स्थिर वैद्युत विभव" }, content: { en: "Electric potential at any point is the work done in bringing a unit positive charge from infinity to that point.", hi: "अनंत से किसी बिंदु तक एकांक धनावेश को लाने में किया गया कार्य उस बिंदु पर विद्युत विभव कहलाता है।" } },
      { id: "n2", title: { en: "Capacitance", hi: "धारिता" }, content: { en: "Capacitance C = q/V. For parallel plate capacitor, C = ε₀A/d.", hi: "धारिता C = q/V। समांतर प्लेट संधारित्र के लिए, C = ε₀A/d।" } }
    ],
    formulas: [
      { id: "f1", title: { en: "Potential due to point charge", hi: "बिंदु आवेश के कारण विभव" }, formula: "V = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r}", variables: [{symbol: "q", name: {en: "Charge", hi: "आवेश"}}] }
    ],
    derivations: [], numericals: [], questions: [],
    diagrams: [
      {
        id: "dg1", title: { en: "Parallel Plate Capacitor", hi: "समांतर प्लेट संधारित्र" },
        description: { en: "Two parallel conductive plates separated by a dielectric.", hi: "दो समांतर चालक प्लेटें जो परावैद्युत द्वारा अलग होती हैं।" },
        svgContent: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="50" width="20" height="100" fill="#3b82f6"/><rect x="200" y="50" width="20" height="100" fill="#ef4444"/><line x1="50" y1="100" x2="100" y2="100" stroke="black" stroke-width="2"/><line x1="220" y1="100" x2="270" y2="100" stroke="black" stroke-width="2"/><text x="105" y="170">+Q</text><text x="205" y="170">-Q</text></svg>`,
        labels: []
      }
    ],
    mindmap: { id: "root", label: { en: "Potential & Capacitance", hi: "विभव और धारिता" }, children: [] },
    revisions: []
  },
  ch3: {
    name: "Current Electricity",
    notes: [
      { id: "n1", title: { en: "Ohm's Law", hi: "ओम का नियम" }, content: { en: "V = IR. The current is proportional to voltage.", hi: "V = IR. धारा वोल्टेज के अनुक्रमानुपाती होती है।" } }
    ],
    formulas: [
      { id: "f1", title: { en: "Ohm's Law", hi: "ओम का नियम" }, formula: "V = IR", variables: [{symbol: "I", name: {en: "Current", hi: "धारा"}}] }
    ],
    derivations: [], numericals: [], questions: [],
    diagrams: [
      {
        id: "dg1", title: { en: "Simple Circuit", hi: "सरल परिपथ" },
        description: { en: "A battery connected to a resistor.", hi: "एक बैटरी एक प्रतिरोधक से जुड़ी है।" },
        svgContent: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="50" width="200" height="100" fill="none" stroke="black" stroke-width="2"/><circle cx="100" cy="100" r="15" fill="white" stroke="black"/><text x="95" y="105">V</text><path d="M 280 50 L 290 40 L 300 60 L 310 40 L 320 50" fill="none" stroke="black" stroke-width="2"/></svg>`,
        labels: []
      }
    ],
    mindmap: { id: "root", label: { en: "Current Electricity", hi: "विद्युत धारा" }, children: [] },
    revisions: []
  },
  ch4: {
    name: "Moving Charges and Magnetism",
    notes: [
      { id: "n1", title: { en: "Lorentz Force", hi: "लॉरेंज बल" }, content: { en: "Force on a moving charge in magnetic field F = q(v x B).", hi: "चुंबकीय क्षेत्र में गतिमान आवेश पर बल F = q(v x B)।" } }
    ],
    formulas: [], derivations: [], numericals: [], questions: [],
    diagrams: [], mindmap: { id: "root", label: { en: "Magnetism", hi: "चुंबकत्व" }, children: [] }, revisions: []
  },
  ch5: {
    name: "Magnetism and Matter",
    notes: [{ id: "n1", title: { en: "Earth's Magnetism", hi: "पृथ्वी का चुंबकत्व" }, content: { en: "Earth behaves as a giant magnet.", hi: "पृथ्वी एक विशाल चुंबक की तरह व्यवहार करती है।" } }],
    formulas: [], derivations: [], numericals: [], questions: [], diagrams: [], mindmap: { id: "root", label: { en: "Magnetism & Matter", hi: "चुंबकत्व और पदार्थ" }, children: [] }, revisions: []
  },
  ch6: {
    name: "Electromagnetic Induction",
    notes: [{ id: "n1", title: { en: "Faraday's Law", hi: "फैराडे का नियम" }, content: { en: "Induced EMF is proportional to rate of change of magnetic flux.", hi: "प्रेरित EMF चुंबकीय फ्लक्स के परिवर्तन की दर के अनुक्रमानुपाती होता है।" } }],
    formulas: [], derivations: [], numericals: [], questions: [], diagrams: [], mindmap: { id: "root", label: { en: "EMI", hi: "विद्युत चुंबकीय प्रेरण" }, children: [] }, revisions: []
  },
  ch7: {
    name: "Alternating Current",
    notes: [{ id: "n1", title: { en: "AC Current", hi: "प्रत्यावर्ती धारा" }, content: { en: "Current that reverses direction periodically.", hi: "वह धारा जो समय-समय पर दिशा बदलती है।" } }],
    formulas: [], derivations: [], numericals: [], questions: [], diagrams: [], mindmap: { id: "root", label: { en: "AC", hi: "प्रत्यावर्ती धारा" }, children: [] }, revisions: []
  },
  ch8: {
    name: "Electromagnetic Waves",
    notes: [{ id: "n1", title: { en: "EM Waves", hi: "विद्युत चुंबकीय तरंगें" }, content: { en: "Waves with changing E and B fields.", hi: "बदलते E और B क्षेत्रों वाली तरंगें।" } }],
    formulas: [], derivations: [], numericals: [], questions: [], diagrams: [], mindmap: { id: "root", label: { en: "EM Waves", hi: "विद्युत चुंबकीय तरंगें" }, children: [] }, revisions: []
  },
  ch9: {
    name: "Ray Optics",
    notes: [{ id: "n1", title: { en: "Reflection", hi: "परावर्तन" }, content: { en: "Angle of incidence equals angle of reflection.", hi: "आपतन कोण परावर्तन कोण के बराबर होता है।" } }],
    formulas: [], derivations: [], numericals: [], questions: [], diagrams: [], mindmap: { id: "root", label: { en: "Ray Optics", hi: "किरण प्रकाशिकी" }, children: [] }, revisions: []
  },
  ch10: {
    name: "Wave Optics",
    notes: [{ id: "n1", title: { en: "Interference", hi: "व्यतिकरण" }, content: { en: "Superposition of two coherent light waves.", hi: "दो सुसंगत प्रकाश तरंगों का अध्यारोपण।" } }],
    formulas: [], derivations: [], numericals: [], questions: [], diagrams: [], mindmap: { id: "root", label: { en: "Wave Optics", hi: "तरंग प्रकाशिकी" }, children: [] }, revisions: []
  },
  ch11: {
    name: "Dual Nature",
    notes: [{ id: "n1", title: { en: "Photoelectric Effect", hi: "प्रकाश विद्युत प्रभाव" }, content: { en: "Emission of electrons when light hits a metal.", hi: "जब प्रकाश धातु से टकराता है तो इलेक्ट्रॉनों का उत्सर्जन।" } }],
    formulas: [], derivations: [], numericals: [], questions: [], diagrams: [], mindmap: { id: "root", label: { en: "Dual Nature", hi: "द्वैत प्रकृति" }, children: [] }, revisions: []
  },
  ch12: {
    name: "Atoms",
    notes: [{ id: "n1", title: { en: "Bohr Model", hi: "बोर मॉडल" }, content: { en: "Electrons orbit in discrete energy levels.", hi: "इलेक्ट्रॉन असतत ऊर्जा स्तरों में परिक्रमा करते हैं।" } }],
    formulas: [], derivations: [], numericals: [], questions: [], diagrams: [], mindmap: { id: "root", label: { en: "Atoms", hi: "परमाणु" }, children: [] }, revisions: []
  },
  ch13: {
    name: "Nuclei",
    notes: [{ id: "n1", title: { en: "Radioactivity", hi: "रेडियोधर्मिता" }, content: { en: "Spontaneous emission of radiation from unstable nuclei.", hi: "अस्थिर नाभिक से विकिरण का सहज उत्सर्जन।" } }],
    formulas: [], derivations: [], numericals: [], questions: [], diagrams: [], mindmap: { id: "root", label: { en: "Nuclei", hi: "नाभिक" }, children: [] }, revisions: []
  },
  ch14: {
    name: "Semiconductor Electronics",
    notes: [{ id: "n1", title: { en: "P-N Junction", hi: "P-N संधि" }, content: { en: "Interface between p-type and n-type semiconductors.", hi: "p-प्रकार और n-प्रकार अर्धचालकों के बीच इंटरफेस।" } }],
    formulas: [], derivations: [], numericals: [], questions: [], diagrams: [], mindmap: { id: "root", label: { en: "Semiconductors", hi: "अर्धचालक" }, children: [] }, revisions: []
  }
};

const basePath = path.join(process.cwd(), 'src/content/physics/chapters');

for (const [ch, data] of Object.entries(physicsData)) {
  const dir = path.join(basePath, ch);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  fs.writeFileSync(path.join(dir, 'notes.json'), JSON.stringify(data.notes, null, 2));
  fs.writeFileSync(path.join(dir, 'formulas.json'), JSON.stringify(data.formulas, null, 2));
  fs.writeFileSync(path.join(dir, 'derivations.json'), JSON.stringify(data.derivations, null, 2));
  fs.writeFileSync(path.join(dir, 'numericals.json'), JSON.stringify(data.numericals, null, 2));
  fs.writeFileSync(path.join(dir, 'questions.json'), JSON.stringify(data.questions, null, 2));
  fs.writeFileSync(path.join(dir, 'diagrams.json'), JSON.stringify(data.diagrams, null, 2));
  fs.writeFileSync(path.join(dir, 'mindmap.json'), JSON.stringify(data.mindmap, null, 2));
  fs.writeFileSync(path.join(dir, 'revisions.json'), JSON.stringify(data.revisions, null, 2));
}

console.log('Physics chapters generated.');
