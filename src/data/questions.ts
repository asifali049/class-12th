import { BilingualText } from "./types";

export type QuestionType = 'mcq' | 'tf' | 'subjective';
export type Difficulty = 'Easy' | 'Medium' | 'Board Level';

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  question: BilingualText | string;
  difficulty: Difficulty;
  marks: number;
}

export interface MCQQuestion extends BaseQuestion {
  type: 'mcq';
  options: (BilingualText | string)[];
  correctOptionIndex: number;
  explanation: BilingualText | string;
}

export interface TFQuestion extends BaseQuestion {
  type: 'tf';
  isTrue: boolean;
  explanation: BilingualText | string;
}

export interface SubjectiveQuestion extends BaseQuestion {
  type: 'subjective';
  idealAnswer: BilingualText | string;
  keywords: (BilingualText | string)[];
  tips?: BilingualText | string;
}

export type Question = MCQQuestion | TFQuestion | SubjectiveQuestion;

// Key is `${subjectId}_${chapterId}`
export const questionsData: Record<string, Question[]> = {
  "physics_ch1": [
    {
      id: "phy_c1_q1",
      type: "mcq",
      question: "Which of the following is the SI unit of Electric Charge?",
      options: ["Newton (N)", "Volt (V)", "Coulomb (C)", "Ampere (A)"],
      correctOptionIndex: 2,
      explanation: "The SI unit of electric charge is Coulomb (C).",
      difficulty: "Easy",
      marks: 1
    },
    {
      id: "phy_c1_q2",
      type: "tf",
      question: "Electric charge is a vector quantity.",
      isTrue: false,
      explanation: "Electric charge is a scalar quantity; it has only magnitude, not direction.",
      difficulty: "Medium",
      marks: 1
    },
    {
      id: "phy_c1_q3",
      type: "subjective",
      question: "State Coulomb's Law of Electrostatics.",
      idealAnswer: "Coulomb's Law states that the electrostatic force of attraction or repulsion between two stationary point charges is directly proportional to the product of the magnitudes of charges and inversely proportional to the square of the distance between them.",
      keywords: ["directly proportional", "product of charges", "inversely proportional", "square of distance"],
      tips: "Always write the mathematical formula F = k(q1q2)/r² after stating the definition to secure full marks.",
      difficulty: "Board Level",
      marks: 2
    }
  ],
  "chemistry_ch1": [
    {
      id: "chem_c1_q1",
      type: "mcq",
      question: "Which of the following concentration terms is independent of temperature?",
      options: ["Molarity", "Molality", "Normality", "Formality"],
      correctOptionIndex: 1,
      explanation: "Molality involves the mass of the solvent, which does not change with temperature, unlike volume which is used in Molarity.",
      difficulty: "Medium",
      marks: 1
    }
  ],
  "chemistry_ch2": [
    {
      id: "chem_c2_q1",
      type: "subjective",
      question: "State Kohlrausch's law of independent migration of ions. Why does the conductivity of a solution decrease with dilution?",
      idealAnswer: "Kohlrausch's law states that limiting molar conductivity of an electrolyte can be represented as the sum of the individual contributions of the anion and cation of the electrolyte. Conductivity always decreases with dilution for both weak and strong electrolytes because the number of ions per unit volume that carry the current in a solution decreases on dilution.",
      keywords: ["limiting molar conductivity", "sum of individual contributions", "number of ions per unit volume", "decreases"],
      tips: "This is a frequent 3-mark question. Define the law clearly and give the reason for conductivity decrease separately.",
      difficulty: "Board Level",
      marks: 3
    }
  ],
  "biology_ch1": [
    {
      id: "bio_c1_q1",
      type: "subjective",
      question: "What is double fertilization? Describe it with a diagram.",
      idealAnswer: "Double fertilization is a complex fertilization mechanism of flowering plants (angiosperms). This process involves the joining of a female gametophyte (embryo sac) with two male gametes. One sperm cell fertilizes the egg cell forming a diploid zygote (syngamy). The other sperm cell fuses with the two polar nuclei forming a triploid primary endosperm nucleus (PEN).",
      keywords: ["syngamy", "diploid zygote", "triple fusion", "primary endosperm nucleus (PEN)", "triploid"],
      tips: "Draw the 7-celled, 8-nucleate embryo sac showing the location of synergids, egg cell, polar nuclei, and antipodals.",
      difficulty: "Board Level",
      marks: 5
    }
  ],
  "english_ch1": [
    {
      id: "eng_c1_q1",
      type: "subjective",
      question: "What changes did the order from Berlin cause in school that day?",
      idealAnswer: "The order from Berlin brought everything to a standstill. M. Hamel, who was generally strict, was kind and wearing his special green coat. The usually noisy school was as quiet as Sunday morning. The village elders were sitting on the back benches to pay their respects to the teacher for his 40 years of faithful service.",
      keywords: ["quiet as Sunday morning", "village elders on back benches", "M. Hamel's special dress", "faithful service"],
      tips: "Highlight the contrast between a normal school day and that specific day to get full marks.",
      difficulty: "Board Level",
      marks: 4
    }
  ],
  "hindi_ch5": [
    {
      id: "hin_c5_q1",
      type: "subjective",
      question: "कर्ण की दानवीरता का वर्णन अपने शब्दों में कीजिए। (Describe Karna's generosity in your own words.)",
      idealAnswer: "रश्मिरथी खण्डकाव्य में कर्ण को एक महान दानवीर के रूप में दर्शाया गया है। जब देवराज इंद्र ब्राह्मण के वेश में उससे उसके अभेद्य कवच और कुंडल मांगते हैं, तो वह यह जानते हुए भी कि यह छल है, बिना संकोच अपने कवच और कुंडल दान कर देता है।",
      keywords: ["कवच कुंडल", "दानवीर", "ब्राह्मण वेश", "देवराज इंद्र"],
      tips: "उत्तर लिखते समय रश्मिरथी के संबंधित सर्ग का उल्लेख करने से अच्छे अंक मिलेंगे।",
      difficulty: "Board Level",
      marks: 5
    }
  ]
};
