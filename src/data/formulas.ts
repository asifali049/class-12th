import { BilingualText } from "./types";

export interface Formula {
  id: string;
  title: BilingualText | string;
  equation?: string;
  formula?: string; // from JSON
  variables: Record<string, BilingualText | string> | (BilingualText | string);
  importance?: 'High' | 'Medium' | 'Low';
  unit?: BilingualText | string;
  description?: BilingualText | string;
  examTip?: BilingualText | string;
}

// Key is `${subjectId}_${chapterId}`
export const formulasData: Record<string, Formula[]> = {
  "physics_ch1": [
    {
      id: "f1",
      title: "Quantization of Charge",
      equation: "q = \u00B1 ne",
      variables: {
        "q": "Total charge",
        "n": "Number of electrons (integer)",
        "e": "Elementary charge (1.6 × 10⁻¹⁹ C)"
      },
      importance: "High"
    },
    {
      id: "f2",
      title: "Coulomb's Law (Force between two point charges)",
      equation: "F = \frac{1}{4\u03C0\u03B5_0} \cdot \frac{|q_1 q_2|}{r^2}",
      variables: {
        "F": "Electrostatic Force",
        "q1, q2": "Point charges",
        "r": "Distance between charges",
        "\u03B5_0": "Permittivity of free space (8.854 × 10⁻¹² C²/N·m²)"
      },
      importance: "High"
    },
    {
      id: "f3",
      title: "Electric Field Intensity",
      equation: "E = \frac{F}{q_0}",
      variables: {
        "E": "Electric Field",
        "F": "Force",
        "q_0": "Test charge"
      },
      importance: "High"
    },
    {
      id: "f4",
      title: "Electric Dipole Moment",
      equation: "p = q \cdot 2a",
      variables: {
        "p": "Dipole moment (Vector)",
        "q": "Magnitude of either charge",
        "2a": "Distance between charges"
      },
      importance: "High"
    }
  ],
  "physics_ch2": [
    {
      id: "f1",
      title: "Electrostatic Potential",
      equation: "V = \frac{W}{q}",
      variables: {
        "V": "Potential",
        "W": "Work done",
        "q": "Charge"
      },
      importance: "High"
    },
    {
      id: "f2",
      title: "Capacitance of a Parallel Plate Capacitor",
      equation: "C = \frac{\u03B5_0 A}{d}",
      variables: {
        "C": "Capacitance",
        "A": "Area of each plate",
        "d": "Distance between plates"
      },
      importance: "High"
    }
  ],
  "chemistry_ch1": [
    {
      id: "chem_f1",
      title: "Molarity (M)",
      equation: "M = \frac{n}{V_{in L}}",
      variables: {
        "n": "Moles of Solute",
        "V": "Volume of Solution in Litres"
      },
      importance: "High"
    },
    {
      id: "chem_f2",
      title: "Raoult's Law (Volatile Solutes)",
      equation: "P_A = P_A^\circ \cdot x_A",
      variables: {
        "P_A": "Partial pressure of component A",
        "P_A^\circ": "Vapor pressure of pure component A",
        "x_A": "Mole fraction of A"
      },
      importance: "High"
    }
  ],
  "chemistry_ch2": [
    {
      id: "chem_f3",
      title: "Nernst Equation",
      equation: "E_{cell} = E^\circ_{cell} - \frac{0.0591}{n} \log_{10} \frac{[Oxidation]}{[Reduction]}",
      variables: {
        "E_{cell}": "Cell potential",
        "E^\circ_{cell}": "Standard cell potential",
        "n": "Number of electrons transferred"
      },
      importance: "High"
    }
  ]
};
