import { BilingualText } from "./types";

export interface RevisionTopic {
  id: string;
  topic: BilingualText | string;
  summary: BilingualText | string;
  quickRecall: (BilingualText | string)[];
}

// Key is `${subjectId}_${chapterId}`
export const revisionsData: Record<string, RevisionTopic[]> = {
  "physics_ch1": [
    {
      id: "rev1",
      topic: "Electric Charge & its Properties",
      summary: "Charge is quantized (q=ne), conserved, and additive. Like charges repel, unlike attract.",
      quickRecall: ["q = \u00B1ne", "e = 1.6 \u00D7 10\u207B\u00B9\u2079 C", "Charge is a scalar quantity"]
    },
    {
      id: "rev2",
      topic: "Coulomb's Law",
      summary: "Force between 2 charges depends on magnitude and medium, and is inverse square to distance.",
      quickRecall: ["F = 1/(4\u03C0\u03B5\u2080) \u00B7 q\u2081q\u2082/r\u00B2", "\u03B5\u2080 = 8.854 \u00D7 10\u207B\u00B9\u00B2 C\u00B2/N\u00B7m\u00B2"]
    },
    {
      id: "rev3",
      topic: "Electric Field & Dipole",
      summary: "Electric field E=F/q. Dipole moment p=q\u00B72a. Field lines start from +ve and end at -ve.",
      quickRecall: ["E = F/q", "p = q \u00D7 2a", "Torque on dipole: \u03C4 = pE sin\u03B8"]
    }
  ],
  "physics_ch2": [
    {
      id: "rev1",
      topic: "Electric Potential",
      summary: "Potential is work done per unit charge (V=W/q). Scalar quantity. Unit: Volt.",
      quickRecall: ["V = W/q", "Potential due to point charge: V = kq/r"]
    }
  ],
  "chemistry_ch1": [
    {
      id: "chem_r1",
      topic: "Types of Solutions",
      summary: "Solutions are homogeneous mixtures. The state of solution is determined by the solvent.",
      quickRecall: ["Solid, Liquid, Gas solutions", "Solute + Solvent"]
    },
    {
      id: "chem_r2",
      topic: "Colligative Properties",
      summary: "Depend on the number of solute particles, irrespective of their nature. Includes RLVP, elevation of BP, depression of FP, and osmotic pressure.",
      quickRecall: ["RLVP = mole fraction of solute", "\u0394T_b = K_b \cdot m", "\u0394T_f = K_f \cdot m", "\u03C0 = CRT"]
    }
  ],
  "chemistry_ch2": [
    {
      id: "chem_r3",
      topic: "Electrochemical Cell vs Electrolytic Cell",
      summary: "Electrochemical converts chemical to electrical energy (\u0394G < 0). Electrolytic converts electrical to chemical (\u0394G > 0).",
      quickRecall: ["Galvanic: Anode (-), Cathode (+)", "Electrolytic: Anode (+), Cathode (-)"]
    }
  ],
  "biology_ch1": [
    {
      id: "bio_r1",
      topic: "Pre-fertilization Events",
      summary: "Microsporogenesis forms pollen grains (male gametophyte). Megasporogenesis forms embryo sac (female gametophyte).",
      quickRecall: ["Pollen exine is made of Sporopollenin", "Typical embryo sac is 7-celled, 8-nucleate"]
    }
  ],
  "english_ch1": [
    {
      id: "eng_r1",
      topic: "The Last Lesson Summary",
      summary: "Prussian orders stop French teaching in Alsace and Lorraine. M. Hamel delivers his last emotionally charged French lesson.",
      quickRecall: ["Franz was late", "M. Hamel wore green coat", "Linguistic Chauvinism"]
    }
  ]
};
