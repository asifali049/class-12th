export type NoteBlockType = 'heading' | 'paragraph' | 'concept' | 'tip' | 'formula' | 'highlight' | 'diagram_placeholder' | 'list';

export interface NoteBlock {
  type: NoteBlockType;
  text?: string;
  equation?: string;
  label?: string;
  items?: string[];
}

// Key is `${subjectId}_${chapterId}`
export const notesData: Record<string, NoteBlock[]> = {
  "physics_ch1": [
    { type: "heading", text: "Electric Charges and Fields (विद्युत आवेश तथा क्षेत्र)" },
    { type: "concept", text: "1. Electric Charge (विद्युत आवेश):" },
    { type: "paragraph", text: "It is the fundamental property of matter that causes it to experience a force when placed in an electromagnetic field. Two types of charges exist: Positive (+) and Negative (-)." },
    { type: "tip", text: "Properties of charges like Quantization (q = ±ne) and Conservation are frequently asked as 2-mark questions in UP Board." },
    { type: "concept", text: "2. Coulomb's Law (कूलॉम का नियम):" },
    { type: "paragraph", text: "The electrostatic force between two point charges is directly proportional to the product of their magnitudes and inversely proportional to the square of the distance between them." },
    { type: "formula", equation: "F = k · (|q₁| · |q₂|) / r²", label: "where k = 1 / (4πε₀) = 9 × 10⁹ N·m²/C²" },
    { type: "highlight", text: "Important Note: Permittivity of free space (ε₀) = 8.854 × 10⁻¹² C²/(N·m²)" },
    { type: "concept", text: "3. Electric Field (विद्युत क्षेत्र):" },
    { type: "paragraph", text: "The space around a charge in which its electrical influence can be felt by another charge. Formula: E = F / q₀ (Force experienced by a unit positive test charge)." },
    { type: "diagram_placeholder", label: "Diagram: Electric Field Lines for Positive and Negative Point Charges" }
  ],
  "physics_ch2": [
    { type: "heading", text: "Electrostatic Potential and Capacitance" },
    { type: "concept", text: "1. Electrostatic Potential (स्थिर वैद्युत विभव):" },
    { type: "paragraph", text: "Electric potential at a point in an electric field is defined as the amount of work done in bringing a unit positive test charge from infinity to that point without acceleration, against the electrostatic force." },
    { type: "formula", equation: "V = W / q", label: "Unit: Volt (V) or Joules/Coulomb (J/C)" },
    { type: "concept", text: "2. Potential due to a Point Charge:" },
    { type: "formula", equation: "V = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{q}{r}", label: "For a point charge 'q' at distance 'r'" },
    { type: "paragraph", text: "Electric potential is a scalar quantity. If the charge is positive, the potential is positive; if the charge is negative, the potential is negative." },
    { type: "concept", text: "3. Equipotential Surfaces (समविभव पृष्ठ):" },
    { type: "paragraph", text: "Any surface that has the same electric potential at every point on it is called an equipotential surface." },
    { type: "list", items: [
      "No work is done in moving a test charge over an equipotential surface (W = 0).",
      "Electric field is always perpendicular to the equipotential surface.",
      "Two equipotential surfaces can never intersect each other."
    ]},
    { type: "tip", text: "Board Tip: Drawing equipotential surfaces for a point charge or an electric dipole is a very common 2-mark question in UP Board exams." },
    { type: "concept", text: "4. Capacitance (धारिता):" },
    { type: "paragraph", text: "The capacitance of a conductor is its ability to store electric charge and electric energy. It is the ratio of the charge 'q' given to a conductor to the rise in its potential 'V'." },
    { type: "formula", equation: "C = q / V", label: "Unit: Farad (F)" },
    { type: "concept", text: "5. Parallel Plate Capacitor (समांतर प्लेट संधारित्र):" },
    { type: "paragraph", text: "Consists of two large plane parallel conducting plates separated by a small distance. The capacitance depends on the area of the plates and the distance between them." },
    { type: "formula", equation: "C = \\frac{\\varepsilon_0 A}{d}", label: "Where A = Area, d = Distance between plates" },
    { type: "diagram_placeholder", label: "Diagram: Parallel Plate Capacitor with uniform Electric Field" },
    { type: "concept", text: "6. Combination of Capacitors:" },
    { type: "highlight", text: "Series Combination (श्रेणीक्रम संयोजन):" },
    { type: "formula", equation: "\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3} + ...", label: "Charge (Q) remains same across all capacitors" },
    { type: "highlight", text: "Parallel Combination (समांतर संयोजन):" },
    { type: "formula", equation: "C_{eq} = C_1 + C_2 + C_3 + ...", label: "Potential Difference (V) remains same across all capacitors" },
    { type: "concept", text: "7. Energy Stored in a Capacitor:" },
    { type: "paragraph", text: "The work done in charging a capacitor is stored as electrostatic potential energy in the electric field between the plates." },
    { type: "formula", equation: "U = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C} = \\frac{1}{2} Q V", label: "Energy stored in Joules" }
  ],
  "physics_ch3": [
    { type: "heading", text: "Current Electricity (विद्युत धारा)" },
    { type: "concept", text: "1. Electric Current:" },
    { type: "paragraph", text: "The rate of flow of electric charge through any cross-section of a conductor. I = q/t." },
    { type: "highlight", text: "Ohm's Law: V = IR" }
  ],
  "physics_ch4": [
    { type: "heading", text: "Moving Charges and Magnetism" },
    { type: "paragraph", text: "Oersted discovered that a moving charge produces a magnetic field around it." },
    { type: "formula", equation: "F = qvB \sin\theta", label: "Magnetic Force" }
  ],
  "physics_ch5": [
    { type: "heading", text: "Magnetism and Matter" },
    { type: "paragraph", text: "Earth behaves as a magnet with the magnetic field pointing approximately from the geographic south to the north." }
  ],
  "physics_ch6": [
    { type: "heading", text: "Electromagnetic Induction" },
    { type: "paragraph", text: "The phenomenon in which electric current is generated by varying magnetic fields." },
    { type: "highlight", text: "Faraday's Law of Induction" }
  ],
  "physics_ch7": [
    { type: "heading", text: "Alternating Current" },
    { type: "paragraph", text: "An alternating current (AC) is an electric current which periodically reverses direction." }
  ],
  "physics_ch8": [
    { type: "heading", text: "Electromagnetic Waves" },
    { type: "paragraph", text: "Waves that are created as a result of vibrations between an electric field and a magnetic field." }
  ],
  "physics_ch9": [
    { type: "heading", text: "Ray Optics and Optical Instruments" },
    { type: "paragraph", text: "Light travels in a straight line. Topics include Reflection, Refraction, and Lenses." }
  ],
  "physics_ch10": [
    { type: "heading", text: "Wave Optics" },
    { type: "paragraph", text: "Huygens' Principle, Interference (Young's Double Slit Experiment), and Diffraction." }
  ],
  "physics_ch11": [
    { type: "heading", text: "Dual Nature of Radiation and Matter" },
    { type: "paragraph", text: "Photoelectric effect proves the particle nature of light (photons). de Broglie wavelength proves wave nature of matter." }
  ],
  "physics_ch12": [
    { type: "heading", text: "Atoms" },
    { type: "paragraph", text: "Rutherford's model, Bohr's model of the hydrogen atom, energy levels." }
  ],
  "physics_ch13": [
    { type: "heading", text: "Nuclei" },
    { type: "paragraph", text: "Composition of nucleus, mass defect, binding energy, radioactivity, nuclear fission and fusion." }
  ],
  "physics_ch14": [
    { type: "heading", text: "Semiconductor Electronics" },
    { type: "paragraph", text: "Energy bands in solids, intrinsic and extrinsic semiconductors, p-n junction diode, logic gates." }
  ],
  "chemistry_ch1": [
    { type: "heading", text: "Solutions (विलयन)" },
    { type: "concept", text: "1. Solution (विलयन):" },
    { type: "paragraph", text: "A solution is a homogeneous mixture of two or more chemically non-reacting substances whose composition can be varied within certain limits. (Solute + Solvent = Solution)." },
    { type: "list", items: [
      "Solute (विलेय): The component present in smaller quantity.",
      "Solvent (विलायक): The component present in larger quantity."
    ]},
    { type: "concept", text: "2. Concentration Terms (सांद्रता के पद):" },
    { type: "formula", equation: "Molarity (M) = Moles of Solute / Volume of Solution (L)", label: "Unit: mol/L" },
    { type: "formula", equation: "Molality (m) = Moles of Solute / Mass of Solvent (kg)", label: "Unit: mol/kg (Temperature Independent!)" },
    { type: "tip", text: "Board Question: Why is Molality preferred over Molarity? Answer: Because molality does not change with temperature as it depends on mass, whereas molarity depends on volume which changes with temperature." },
    { type: "concept", text: "3. Raoult's Law (राउल्ट का नियम):" },
    { type: "paragraph", text: "For a solution of volatile liquids, the partial vapour pressure of each component of the solution is directly proportional to its mole fraction present in solution." }
  ],
  "chemistry_ch2": [
    { type: "heading", text: "Electrochemistry (वैद्युत रसायन)" },
    { type: "concept", text: "1. Electrochemical Cell (Galvanic Cell):" },
    { type: "paragraph", text: "A device that converts chemical energy of a spontaneous redox reaction into electrical energy. Example: Daniell Cell." },
    { type: "highlight", text: "Trick to remember Anode/Cathode: L.O.A.N (Left - Oxidation - Anode - Negative)" },
    { type: "concept", text: "2. Nernst Equation (नेर्न्स्ट समीकरण):" },
    { type: "paragraph", text: "It relates the reduction potential of a half-cell (or the total voltage of the full cell) at any point in time to the standard electrode potential, temperature, activity, and reaction quotient of the underlying reactions and species used." },
    { type: "formula", equation: "E_{cell} = E^\circ_{cell} - (0.0591 / n) \log_{10} Q", label: "At 298K" },
    { type: "concept", text: "3. Kohlrausch's Law (कोलरॉश का नियम):" },
    { type: "paragraph", text: "At infinite dilution, when dissociation is complete, each ion makes a definite contribution towards equivalent conductance of the electrolyte irrespective of the nature of the ion with which it is associated." }
  ],
  "biology_ch1": [
    { type: "heading", text: "Sexual Reproduction in Flowering Plants (पुष्पी पादपों में लैंगिक जनन)" },
    { type: "concept", text: "1. Flower Structure:" },
    { type: "paragraph", text: "A typical angiospermic flower consists of four whorls: Calyx (Sepals), Corolla (Petals), Androecium (Stamens - Male reproductive organ), and Gynoecium (Carpels/Pistils - Female reproductive organ)." },
    { type: "concept", text: "2. Microsporogenesis (लघुबीजाणुजनन):" },
    { type: "paragraph", text: "The process of formation of microspores from a pollen mother cell (PMC) through meiosis is called microsporogenesis. The microspores represent the pollen grains (Male Gametophyte)." },
    { type: "concept", text: "3. Double Fertilization (द्विनिषेचन):" },
    { type: "paragraph", text: "A unique phenomenon in angiosperms where two male gametes are released into the embryo sac. One male gamete fuses with the egg cell (Syngamy) to form a diploid zygote. The other male gamete fuses with the two polar nuclei (Triple Fusion) to form a triploid Primary Endosperm Nucleus (PEN)." },
    { type: "tip", text: "UP Board always asks 'Double Fertilization' for 3 or 5 marks. Always draw the diagram of Embryo Sac to get full marks." },
    { type: "diagram_placeholder", label: "Diagram: 7-celled, 8-nucleate Embryo Sac" }
  ],
  "english_ch1": [
    { type: "heading", text: "Flamingo: The Last Lesson" },
    { type: "concept", text: "Author: Alphonse Daudet" },
    { type: "paragraph", text: "The story is set in the days of the Franco-Prussian War (1870-1871) in which France was defeated by Prussia. The French districts of Alsace and Lorraine passed into Prussian hands." },
    { type: "concept", text: "Theme of the Story:" },
    { type: "paragraph", text: "The story highlights the pain that is inflicted on the people of a territory by its conquerors by taking away their right to study or speak their own language (Linguistic Chauvinism)." },
    { type: "highlight", text: "Character Sketch: M. Hamel" },
    { type: "paragraph", text: "M. Hamel is a dedicated French teacher who has served for 40 years in the village school. He represents true patriotism and deep love for his mother tongue. In his last lesson, he tells the students that French is the most beautiful, clearest, and most logical language in the world." },
    { type: "tip", text: "Important Question: 'Will they make them sing in German, even the pigeons?' - This signifies that nature cannot be ruled by human orders and language is a natural right." }
  ],
  "hindi_ch5": [
    { type: "heading", text: "रश्मिरथी (खण्डकाव्य - देवरिया)" },
    { type: "concept", text: "कवि: रामधारी सिंह 'दिनकर'" },
    { type: "paragraph", text: "रश्मिरथी (अर्थ: सूर्य की सारथी) रामधारी सिंह दिनकर द्वारा रचित एक अत्यंत प्रसिद्ध खण्डकाव्य है। यूपी बोर्ड में देवरिया सहित कुछ अन्य जिलों के लिए इसे पाठ्यक्रम में निर्धारित किया गया है।" },
    { type: "highlight", text: "मुख्य पात्र (Main Character): कर्ण (Karna)" },
    { type: "paragraph", text: "यह खण्डकाव्य महाभारत के महान योद्धा कर्ण के जीवन पर आधारित है। इसमें कर्ण के शौर्य, त्याग, दानवीरता और उसके साथ हुए सामाजिक अन्याय का मार्मिक चित्रण किया गया है।" },
    { type: "tip", text: "बोर्ड परीक्षा के लिए महत्वपूर्ण (Important for Board): कर्ण का चरित्र चित्रण (Character sketch of Karna) हर साल लगभग 5 अंकों में पूछा जाता है।" },
    { type: "list", items: [
      "कर्ण की दानवीरता (जब इंद्र कवच कुंडल मांगते हैं)",
      "कर्ण और कुंती का संवाद (सर्ग 6)",
      "श्रीकृष्ण की चेतावनी (सर्ग 3)"
    ]}
  ]
};
