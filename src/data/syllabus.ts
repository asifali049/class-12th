export interface Chapter {
  id: string;
  name: string;
  hindiName?: string;
}

export interface SubjectData {
  id: string;
  name: string;
  language: string;
  chapters: Chapter[];
}

export const syllabusData: Record<string, SubjectData> = {
  physics: {
    id: "physics",
    name: "Physics (भौतिक विज्ञान)",
    language: "Hindi + English",
    chapters: [
      { id: "ch1", name: "Electric Charges and Fields", hindiName: "विद्युत आवेश तथा क्षेत्र" },
      { id: "ch2", name: "Electrostatic Potential and Capacitance", hindiName: "स्थिर वैद्युत विभव तथा धारिता" },
      { id: "ch3", name: "Current Electricity", hindiName: "विद्युत धारा" },
      { id: "ch4", name: "Moving Charges and Magnetism", hindiName: "गतिमान आवेश और चुंबकत्व" },
      { id: "ch5", name: "Magnetism and Matter", hindiName: "चुंबकत्व एवं द्रव्य" },
      { id: "ch6", name: "Electromagnetic Induction", hindiName: "विद्युत चुम्बकीय प्रेरण" },
      { id: "ch7", name: "Alternating Current", hindiName: "प्रत्यावर्ती धारा" },
      { id: "ch8", name: "Electromagnetic Waves", hindiName: "विद्युत चुम्बकीय तरंगें" },
      { id: "ch9", name: "Ray Optics and Optical Instruments", hindiName: "किरण प्रकाशिकी एवं प्रकाशिक यंत्र" },
      { id: "ch10", name: "Wave Optics", hindiName: "तरंग - प्रकाशिकी" },
      { id: "ch11", name: "Dual Nature of Radiation and Matter", hindiName: "विकिरण तथा द्रव्य की द्वैत प्रकृति" },
      { id: "ch12", name: "Atoms", hindiName: "परमाणु" },
      { id: "ch13", name: "Nuclei", hindiName: "नाभिक" },
      { id: "ch14", name: "Semiconductor Electronics", hindiName: "अर्धचालक इलेक्ट्रॉनिकी" },
    ]
  },
  chemistry: {
    id: "chemistry",
    name: "Chemistry (रसायन विज्ञान)",
    language: "Hindi + English",
    chapters: [
      { id: "ch1", name: "Solutions", hindiName: "विलयन" },
      { id: "ch2", name: "Electrochemistry", hindiName: "वैद्युत रसायन" },
      { id: "ch3", name: "Chemical Kinetics", hindiName: "रासायनिक बलगतिकी" },
      { id: "ch4", name: "The d- and f- Block Elements", hindiName: "d- एवं f- ब्लॉक के तत्व" },
      { id: "ch5", name: "Coordination Compounds", hindiName: "उपसहसंयोजक यौगिक" },
      { id: "ch6", name: "Haloalkanes and Haloarenes", hindiName: "हैलोऐल्केन तथा हैलोऐरीन" },
      { id: "ch7", name: "Alcohols, Phenols and Ethers", hindiName: "ऐल्कोहॉल, फ़ीनॉल एवं ईथर" },
      { id: "ch8", name: "Aldehydes, Ketones and Carboxylic Acids", hindiName: "ऐल्डिहाइड, कीटोन एवं कार्बोक्सिलिक अम्ल" },
      { id: "ch9", name: "Amines", hindiName: "ऐमीन" },
      { id: "ch10", name: "Biomolecules", hindiName: "जैव-अणु" },
    ]
  },
  biology: {
    id: "biology",
    name: "Biology (जीव विज्ञान)",
    language: "Hindi + English",
    chapters: [
      { id: "ch1", name: "Sexual Reproduction in Flowering Plants", hindiName: "पुष्पी पादपों में लैंगिक जनन" },
      { id: "ch2", name: "Human Reproduction", hindiName: "मानव जनन" },
      { id: "ch3", name: "Reproductive Health", hindiName: "जनन स्वास्थ्य" },
      { id: "ch4", name: "Principles of Inheritance and Variation", hindiName: "वंशागति तथा विविधता के सिद्धांत" },
      { id: "ch5", name: "Molecular Basis of Inheritance", hindiName: "वंशागति के आणविक आधार" },
      { id: "ch6", name: "Evolution", hindiName: "विकास" },
      { id: "ch7", name: "Human Health and Disease", hindiName: "मानव स्वास्थ्य तथा रोग" },
      { id: "ch8", name: "Microbes in Human Welfare", hindiName: "मानव कल्याण में सूक्ष्म जीव" },
      { id: "ch9", name: "Biotechnology: Principles and Processes", hindiName: "जैव प्रौद्योगिकी - सिद्धांत व प्रक्रम" },
      { id: "ch10", name: "Biotechnology and its Applications", hindiName: "जैव प्रौद्योगिकी एवं उसके उपयोग" },
      { id: "ch11", name: "Organisms and Populations", hindiName: "जीव और समष्टियाँ" },
      { id: "ch12", name: "Ecosystem", hindiName: "पारितंत्र" },
      { id: "ch13", name: "Biodiversity and Conservation", hindiName: "जैव-विविधता एवं संरक्षण" },
    ]
  },
  hindi: {
    id: "hindi",
    name: "सामान्य हिंदी (General Hindi)",
    language: "Hindi",
    chapters: [
      { id: "ch1", name: "गद्य गरिमा (Prose)" },
      { id: "ch2", name: "काव्यांजलि (Poetry)" },
      { id: "ch3", name: "कथा भारती (Stories)" },
      { id: "ch4", name: "संस्कृत दिग्दर्शिका" },
      { id: "ch5", name: "रश्मिरथी (खण्डकाव्य - देवरिया)" },
      { id: "ch6", name: "व्याकरण (Grammar)" },
    ]
  },
  english: {
    id: "english",
    name: "English",
    language: "English",
    chapters: [
      { id: "ch1", name: "Flamingo: The Last Lesson" },
      { id: "ch2", name: "Flamingo: Lost Spring" },
      { id: "ch3", name: "Flamingo: Deep Water" },
      { id: "ch4", name: "Flamingo: The Rattrap" },
      { id: "ch5", name: "Flamingo: Indigo" },
      { id: "ch6", name: "Flamingo: Poets and Pancakes" },
      { id: "ch7", name: "Flamingo: The Interview" },
      { id: "ch8", name: "Flamingo: Going Places" },
      { id: "ch9", name: "Flamingo (Poetry): My Mother at Sixty-six" },
      { id: "ch10", name: "Vistas (Supplementary)" },
      { id: "ch11", name: "Writing Skills" },
    ]
  }
};
