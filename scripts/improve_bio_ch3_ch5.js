const fs = require('fs');
const path = require('path');

const generateData = (chNum) => {
  if (chNum === 3) {
    return {
      notes: [
        {
          "id": "n1",
          "title": { "en": "Reproductive Health & RCH", "hi": "प्रजनन स्वास्थ्य और RCH" },
          "content": { "en": "According to WHO, reproductive health means a total well-being in all aspects of reproduction (physical, emotional, behavioral, and social). India initiated family planning in 1951, now under Reproductive and Child Health Care (RCH) programs to create awareness and provide medical facilities.", "hi": "डब्ल्यूएचओ के अनुसार, प्रजनन स्वास्थ्य का अर्थ प्रजनन के सभी पहलुओं में पूर्ण कल्याण है। भारत ने 1951 में परिवार नियोजन शुरू किया, जो अब RCH कार्यक्रमों के तहत संचालित होता है।" }
        },
        {
          "id": "n2",
          "title": { "en": "Birth Control Methods", "hi": "जन्म नियंत्रण विधियाँ" },
          "content": { "en": "**Natural**: Periodic abstinence (avoiding days 10-17), Coitus interruptus, Lactational amenorrhea.\n**Barrier**: Condoms (protects against STIs), Diaphragms, Cervical caps.\n**IUDs**: Non-medicated (Lippes loop), Copper-releasing (CuT, Multiload 375), Hormone-releasing (Progestasert, LNG-20).\n**Oral Pills**: Contains progestogens or progestogen-estrogen combinations (e.g. Saheli).\n**Surgical**: Vasectomy (males), Tubectomy (females).", "hi": "**प्राकृतिक**: आवधिक संयम, सहवास व्यवधान।\n**बाधा**: कंडोम, डायाफ्राम।\n**IUDs**: कॉपर-रिलीजिंग (CuT), हार्मोन-रिलीजिंग (LNG-20)।\n**मौखिक गोलियां**: सहेली (Saheli)।\n**सर्जिकल**: वासेक्टोमी (पुरुषों में), ट्यूबेक्टोमी (महिलाओं में)।" }
        },
        {
          "id": "n3",
          "title": { "en": "Medical Termination of Pregnancy (MTP)", "hi": "गर्भावस्था का चिकित्सीय समापन (MTP)" },
          "content": { "en": "Intentional or voluntary termination of pregnancy before full term. Legalized in India in 1971 with strict conditions to prevent illegal female foeticides. Safe during the first trimester (up to 12 weeks of pregnancy).", "hi": "गर्भावस्था को स्वेच्छा से समाप्त करना। भारत में 1971 में वैध किया गया। पहली तिमाही (12 सप्ताह) के दौरान सुरक्षित है।" }
        },
        {
          "id": "n4",
          "title": { "en": "Sexually Transmitted Infections (STIs)", "hi": "यौन संचारित संक्रमण (STIs)" },
          "content": { "en": "Diseases transmitted through sexual intercourse (e.g., Gonorrhoea, Syphilis, Genital herpes, Chlamydiasis, Genital warts, Trichomoniasis, Hepatitis-B, HIV). Except for Hepatitis-B, genital herpes, and HIV infections, other diseases are completely curable if detected early.", "hi": "यौन संसर्ग से फैलने वाली बीमारियाँ (गोनोरिया, सिफलिस, एचआईवी)। हेपेटाइटिस-बी, जननांग दाद और एचआईवी को छोड़कर, अन्य बीमारियाँ जल्दी पता चलने पर पूरी तरह से ठीक हो सकती हैं।" }
        },
        {
          "id": "n5",
          "title": { "en": "Infertility & ART", "hi": "बांझपन और ART" },
          "content": { "en": "Inability to produce children despite unprotected sexual cohabitation. Assisted Reproductive Technologies (ART) include:\n**IVF-ET**: In vitro fertilization followed by embryo transfer (ZIFT up to 8 blastomeres, IUT for >8 blastomeres).\n**GIFT**: Transfer of an ovum into the fallopian tube of another female.\n**ICSI**: Sperm is directly injected into the ovum in the lab.\n**IUI**: Artificial insemination into the uterus.", "hi": "असुरक्षित यौन सहवास के बावजूद बच्चे पैदा करने में असमर्थता। एआरटी (ART) में शामिल हैं: IVF (इन विट्रो फर्टिलाइजेशन), ZIFT (जाइगोट इंट्रा फैलोपियन ट्रांसफर), GIFT, ICSI (इंट्रा-साइटोप्लाज्मिक स्पर्म इंजेक्शन), और IUI।" }
        }
      ],
      diagrams: [
        {
          "id": "dia1",
          "title": { "en": "Surgical Birth Control Methods", "hi": "सर्जिकल जन्म नियंत्रण विधियाँ" },
          "description": { "en": "Vasectomy in males and Tubectomy in females.", "hi": "पुरुषों में वासेक्टोमी और महिलाओं में ट्यूबेक्टोमी।" },
          "svgCode": "<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'><style>.bg{fill:#f8fafc;}.duct{fill:none;stroke:#fb7185;stroke-width:4;}.cut{fill:none;stroke:#dc2626;stroke-width:2;stroke-dasharray:4;}.organ{fill:#fecdd3;stroke:#e11d48;stroke-width:2;}</style><rect width='100%' height='100%' class='bg'/><g transform='translate(100,100)'><circle cx='0' cy='30' r='20' class='organ'/><path class='duct' d='M0,10 C0,-30 40,-50 40,-80'/><line x1='-10' y1='-20' x2='20' y2='-10' class='cut'/><line x1='10' y1='-30' x2='30' y2='-20' class='cut'/><text x='-40' y='65' font-size='12'>Testis</text><text x='15' y='-45' font-size='12' font-weight='bold' fill='#dc2626'>Vasectomy</text></g><g transform='translate(300,100)'><path class='organ' d='M-20,0 C-20,30 20,30 20,0 L20,-30 C20,-50 -20,-50 -20,-30 Z'/><path class='duct' d='M-20,-10 C-50,-20 -60,0 -80,-10'/><path class='duct' d='M20,-10 C50,-20 60,0 80,-10'/><line x1='-60' y1='-30' x2='-40' y2='10' class='cut'/><line x1='40' y1='10' x2='60' y2='-30' class='cut'/><text x='-15' y='45' font-size='12'>Uterus</text><text x='15' y='-45' font-size='12' font-weight='bold' fill='#dc2626'>Tubectomy</text></g></svg>",
          "labels": []
        }
      ]
    };
  }

  if (chNum === 4) {
    return {
      notes: [
        {
          "id": "n1",
          "title": { "en": "Mendel's Laws of Inheritance", "hi": "मेंडल के वंशागति के नियम" },
          "content": { "en": "Gregor Mendel conducted hybridization experiments on garden peas (Pisum sativum) for 7 years. He proposed:\n**Law of Dominance**: In a dissimilar pair of factors, one dominates (dominant) the other (recessive).\n**Law of Segregation**: Alleles do not blend; they segregate randomly during gamete formation, so a gamete receives only one allele.\n**Law of Independent Assortment**: When two pairs of traits are combined, segregation of one pair is independent of the other (seen in Dihybrid cross).", "hi": "ग्रेगर मेंडल ने उद्यान मटर पर संकरण प्रयोग किए। उन्होंने प्रस्तावित किया:\n**प्रभाविता का नियम**: कारकों के एक विषम जोड़े में, एक दूसरे पर हावी होता है।\n**विसंयोजन का नियम**: एलील मिश्रित नहीं होते हैं; वे युग्मक निर्माण के दौरान अलग हो जाते हैं।\n**स्वतंत्र अपव्यूहन का नियम**: जब दो जोड़े गुणों को मिलाया जाता है, तो एक जोड़े का पृथक्करण दूसरे से स्वतंत्र होता है।" }
        },
        {
          "id": "n2",
          "title": { "en": "Incomplete Dominance & Co-dominance", "hi": "अपूर्ण प्रभाविता और सह-प्रभाविता" },
          "content": { "en": "**Incomplete Dominance**: The F1 phenotype is intermediate between the dominant and recessive phenotypes. Example: Flower color in Snapdragon (Antirrhinum), where Red (RR) x White (rr) gives Pink (Rr) flowers.\n**Co-dominance**: Both alleles express themselves fully in the F1 heterozygote. Example: ABO blood grouping in humans (AB blood type has both A and B antigens).", "hi": "**अपूर्ण प्रभाविता**: F1 फीनोटाइप मध्यवर्ती होता है। उदाहरण: स्नैपड्रैगन में फूलों का रंग, जहाँ लाल (RR) x सफेद (rr) से गुलाबी (Rr) फूल मिलते हैं।\n**सह-प्रभाविता**: दोनों एलील F1 में खुद को पूरी तरह से व्यक्त करते हैं। उदाहरण: मनुष्यों में ABO रक्त समूह।" }
        },
        {
          "id": "n3",
          "title": { "en": "Chromosomal Theory of Inheritance", "hi": "वंशागति का गुणसूत्रीय सिद्धांत" },
          "content": { "en": "Proposed by Walter Sutton and Theodore Boveri. It states that chromosomes are the vehicles of genetic heredity. The pairing and separation of a pair of chromosomes would lead to the segregation of a pair of factors they carried. Thomas Hunt Morgan verified this using fruit flies (Drosophila melanogaster).", "hi": "सटन और बोवेरी द्वारा प्रस्तावित। यह बताता है कि गुणसूत्र आनुवंशिक आनुवंशिकता के वाहक हैं। थॉमस हंट मॉर्गन ने ड्रोसोफिला मेलानोगास्टर का उपयोग करके इसे सिद्ध किया।" }
        },
        {
          "id": "n4",
          "title": { "en": "Linkage and Recombination", "hi": "सहलग्नता और पुनर्संयोजन" },
          "content": { "en": "**Linkage**: The physical association of genes on the same chromosome. Closely located genes show strong linkage and low recombination.\n**Recombination**: The generation of non-parental gene combinations due to crossing over during meiosis.", "hi": "**सहलग्नता**: एक ही गुणसूत्र पर जीन का भौतिक जुड़ाव।\n**पुनर्संयोजन**: अर्धसूत्रीविभाजन के दौरान क्रॉसिंग ओवर के कारण गैर-पैतृक जीन संयोजनों का निर्माण।" }
        },
        {
          "id": "n5",
          "title": { "en": "Sex Determination", "hi": "लिंग निर्धारण" },
          "content": { "en": "**XX-XY type**: Found in humans and Drosophila (Males XY, Females XX).\n**XX-XO type**: Found in many insects like grasshopper (Males XO, Females XX).\n**ZZ-ZW type**: Found in birds (Females ZW, Males ZZ - here female is heterogametic).\nIn humans, the sex of the baby is determined by the father's sperm (X or Y).", "hi": "**XX-XY प्रकार**: मनुष्यों और ड्रोसोफिला में पाया जाता है।\n**XX-XO प्रकार**: टिड्डे जैसे कीड़ों में।\n**ZZ-ZW प्रकार**: पक्षियों में पाया जाता है (मादा विषमयुग्मकी होती है)।\nमनुष्यों में, बच्चे का लिंग पिता के शुक्राणु द्वारा निर्धारित होता है।" }
        },
        {
          "id": "n6",
          "title": { "en": "Genetic Disorders", "hi": "आनुवंशिक विकार" },
          "content": { "en": "**Mendelian Disorders**: Alteration in a single gene. e.g., Haemophilia (sex-linked recessive), Sickle-cell anaemia (autosomal recessive), Color blindness, Phenylketonuria, Thalassemia.\n**Chromosomal Disorders**: Absence, excess, or abnormal arrangement of chromosomes. e.g., Down's syndrome (Trisomy of chromosome 21), Klinefelter's syndrome (44+XXY), Turner's syndrome (44+XO).", "hi": "**मेंडेलियन विकार**: एक जीन में परिवर्तन। उदा., हीमोफीलिया, सिकल-सेल एनीमिया, वर्णांधता।\n**गुणसूत्रीय विकार**: गुणसूत्रों की अनुपस्थिति या अधिकता। उदा., डाउन सिंड्रोम (गुणसूत्र 21 की ट्राइसॉमी), क्लाइनफेल्टर सिंड्रोम (XXY), टर्नर सिंड्रोम (XO)।" }
        }
      ],
      diagrams: [
        {
          "id": "dia1",
          "title": { "en": "Monohybrid Cross (Punnett Square)", "hi": "एकसंकर क्रॉस (पुन्नट स्क्वायर)" },
          "description": { "en": "Cross between Tall (TT) and Dwarf (tt) pea plants.", "hi": "लंबे (TT) और बौने (tt) मटर के पौधों के बीच क्रॉस।" },
          "svgCode": "<svg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'><style>.bg{fill:#f8fafc;}.line{stroke:#334155;stroke-width:2;}.text{fill:#1e293b;font-family:sans-serif;font-weight:bold;font-size:20px;}</style><rect width='100%' height='100%' class='bg'/><g transform='translate(50,50)'><line x1='0' y1='66' x2='200' y2='66' class='line'/><line x1='0' y1='133' x2='200' y2='133' class='line'/><line x1='66' y1='0' x2='66' y2='200' class='line'/><line x1='133' y1='0' x2='133' y2='200' class='line'/><rect x='0' y='0' width='200' height='200' fill='none' class='line'/><text x='25' y='-10' class='text'>T</text><text x='90' y='-10' class='text'>t</text><text x='-20' y='45' class='text'>T</text><text x='-20' y='110' class='text'>t</text><text x='20' y='45' class='text'>TT</text><text x='85' y='45' class='text'>Tt</text><text x='20' y='110' class='text'>Tt</text><text x='85' y='110' class='text'>tt</text></g></svg>",
          "labels": []
        }
      ]
    };
  }

  if (chNum === 5) {
    return {
      notes: [
        {
          "id": "n1",
          "title": { "en": "DNA Structure", "hi": "डीएनए की संरचना" },
          "content": { "en": "DNA is a long polymer of deoxyribonucleotides. Watson and Crick proposed the Double Helix model in 1953 based on X-ray diffraction data by Franklin and Wilkins, and Chargaff's rules (A=T, G=C).\nFeatures:\n- Two polynucleotide chains with anti-parallel polarity (5'->3' and 3'->5').\n- Bases pair through Hydrogen bonds (A forms 2 H-bonds with T; G forms 3 H-bonds with C).\n- Pitch of the helix is 3.4 nm, with ~10 base pairs per turn.", "hi": "डीएनए डीऑक्सीराइबोन्यूक्लियोटाइड का एक लंबा बहुलक है। वॉटसन और क्रिक ने 1953 में डबल हेलिक्स मॉडल प्रस्तावित किया।\nविशेषताएं:\n- एंटी-पैरेलल ध्रुवीयता के साथ दो पॉली न्यूक्लियोटाइड श्रृंखलाएं।\n- हाइड्रोजन बांड के माध्यम से आधार जोड़ी (A=T, G≡C)।" }
        },
        {
          "id": "n2",
          "title": { "en": "Packaging of DNA Helix", "hi": "डीएनए हेलिक्स की पैकेजिंग" },
          "content": { "en": "In prokaryotes (e.g. E. coli), DNA is held with some proteins in a region called the **nucleoid**.\nIn eukaryotes, DNA is wrapped around a positively charged histone octamer to form a **nucleosome**. Nucleosomes constitute the repeating unit of a structure in the nucleus called **chromatin**. Chromatin is packaged to form chromosomes.", "hi": "प्रोकैरियोट्स में, डीएनए को **न्यूक्लियॉइड** में रखा जाता है।\nयूकेरियोट्स में, डीएनए धनात्मक आवेशित हिस्टोन ऑक्टामर के चारों ओर लिपटकर **न्यूक्लियोसोम** बनाता है। न्यूक्लियोसोम मिलकर क्रोमैटिन (chromatin) बनाते हैं, जो गुणसूत्र बनाने के लिए पैक होता है।" }
        },
        {
          "id": "n3",
          "title": { "en": "The Search for Genetic Material", "hi": "आनुवंशिक पदार्थ की खोज" },
          "content": { "en": "**Griffith's Experiment (1928)**: Transforming principle using Streptococcus pneumoniae (R strain and S strain) in mice.\n**Avery, MacLeod, McCarty (1944)**: Proved the transforming principle is DNA by using proteases, RNases, and DNases.\n**Hershey and Chase (1952)**: Unequivocally proved DNA is the genetic material using T2 bacteriophage grown in radioactive Phosphorus (32P) and Sulfur (35S).", "hi": "**ग्रिफिथ का प्रयोग (1928)**: स्ट्रेप्टोकोकस निमोनिया का उपयोग करके ट्रांसफॉर्मिंग सिद्धांत।\n**हर्शे और चेस (1952)**: रेडियोधर्मी फास्फोरस (32P) और सल्फर (35S) में उगाए गए T2 बैक्टीरियोफेज का उपयोग करके स्पष्ट रूप से साबित किया कि डीएनए आनुवंशिक सामग्री है।" }
        },
        {
          "id": "n4",
          "title": { "en": "DNA Replication", "hi": "डीएनए प्रतिकृति" },
          "content": { "en": "Replication is **semi-conservative** (Meselson and Stahl experiment using 15N and 14N isotopes).\nThe main enzyme is **DNA-dependent DNA polymerase**. Replication occurs in the 5' $\\rightarrow$ 3' direction. On one strand (leading strand), replication is continuous. On the other (lagging strand), it is discontinuous (forming Okazaki fragments, joined by DNA ligase).", "hi": "प्रतिकृति **अर्ध-संरक्षी (semi-conservative)** है। मुख्य एंजाइम **डीएनए पॉलीमरेज़** है। प्रतिकृति 5' $\\rightarrow$ 3' दिशा में होती है। एक स्ट्रैंड पर प्रतिकृति निरंतर होती है। दूसरे स्ट्रैंड पर यह असंतत होती है (ओकाजाकी खंड)।" }
        },
        {
          "id": "n5",
          "title": { "en": "Transcription and Translation", "hi": "अनुलेखन (Transcription) और अनुवाद (Translation)" },
          "content": { "en": "**Transcription**: Copying genetic info from one strand of DNA into RNA using RNA polymerase. Eukaryotes have split genes (exons and introns) requiring splicing to form mRNA.\n**Translation**: Polymerization of amino acids to form a polypeptide. Ribosomes read the mRNA codons, and tRNAs bring the corresponding amino acids.", "hi": "**अनुलेखन**: आरएनए पॉलीमरेज़ का उपयोग करके डीएनए से आरएनए में आनुवंशिक जानकारी की प्रतिलिपि बनाना।\n**अनुवाद**: पॉलीपेप्टाइड बनाने के लिए अमीनो एसिड का पोलीमराइजेशन। राइबोसोम mRNA को पढ़ते हैं, और tRNA अमीनो एसिड लाते हैं।" }
        },
        {
          "id": "n6",
          "title": { "en": "Genetic Code and Lac Operon", "hi": "जेनेटिक कोड और लैक ओपेरॉन" },
          "content": { "en": "**Genetic Code**: Triplet codons (61 code for 20 amino acids, 3 are stop codons). It is unambiguous, degenerate, and universal. AUG is the start codon (codes for Methionine).\n**Lac Operon**: Gene regulation in prokaryotes (Jacob and Monod). Lactose is the inducer which binds to the repressor protein, allowing RNA polymerase to transcribe the structural genes (z, y, a).", "hi": "**जेनेटिक कोड**: ट्रिपलेट कोडन। यह स्पष्ट और सार्वभौमिक है। AUG प्रारंभ कोडन है।\n**लैक ओपेरॉन**: प्रोकैरियोट्स में जीन विनियमन। लैक्टोज इंड्यूसर (inducer) है जो रिप्रेसर से जुड़ता है, जिससे संरचनात्मक जीनों का अनुलेखन होता है।" }
        }
      ],
      diagrams: [
        {
          "id": "dia1",
          "title": { "en": "Replication Fork", "hi": "प्रतिकृति कांटा (Replication Fork)" },
          "description": { "en": "Continuous and discontinuous synthesis of DNA on the template strands.", "hi": "टेम्पलेट स्ट्रैंड्स पर डीएनए का निरंतर और असंतत संश्लेषण।" },
          "svgCode": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><style>.bg{fill:#f8fafc;}.template{fill:none;stroke:#1e40af;stroke-width:4;}.new{fill:none;stroke:#ef4444;stroke-width:3;}.text{fill:#1e293b;font-family:sans-serif;font-weight:bold;font-size:14px;}</style><rect width='100%' height='100%' class='bg'/><g transform='translate(50,150)'><path class='template' d='M0,0 L100,0 C150,0 200,-50 300,-50'/><path class='template' d='M0,20 L100,20 C150,20 200,70 300,70'/><path class='new' d='M300,-35 L160,-35 C140,-35 120,-15 100,-15'/><path class='new' d='M150,55 L120,55'/><path class='new' d='M200,55 L160,55'/><path class='new' d='M250,55 L210,55'/><path class='new' d='M300,55 L260,55'/><text x='310' y='-45' class='text'>3'</text><text x='310' y='-30' class='text' fill='#ef4444'>5'</text><text x='100' y='-25' class='text' fill='#ef4444'>3'</text><text x='310' y='75' class='text'>5'</text><text x='310' y='60' class='text' fill='#ef4444'>3'</text></g></svg>",
          "labels": [
            { "id": "l1", "x": 60, "y": 20, "text": { "en": "Leading strand (Continuous)", "hi": "लीडिंग स्ट्रैंड (निरंतर)" } },
            { "id": "l2", "x": 60, "y": 80, "text": { "en": "Lagging strand (Okazaki fragments)", "hi": "लैगिंग स्ट्रैंड (ओकाजाकी खंड)" } }
          ]
        }
      ]
    };
  }
};

const baseDir = path.join(__dirname, '../src/content/biology/chapters');

for (let ch = 3; ch <= 5; ch++) {
  const data = generateData(ch);
  if (!data) continue;
  
  const chDir = path.join(baseDir, `ch${ch}`);
  
  // Overwrite notes.json
  const notesPath = path.join(chDir, 'notes.json');
  if (fs.existsSync(notesPath)) {
    let existingNotes = [];
    try {
      existingNotes = JSON.parse(fs.readFileSync(notesPath, 'utf-8'));
    } catch(e) {}
    // Replace with new comprehensive notes
    fs.writeFileSync(notesPath, JSON.stringify(data.notes, null, 2));
  }
  
  // Overwrite diagrams.json
  const diagramsPath = path.join(chDir, 'diagrams.json');
  if (fs.existsSync(diagramsPath)) {
    fs.writeFileSync(diagramsPath, JSON.stringify(data.diagrams, null, 2));
  }

  console.log(`Successfully upgraded Chapter ${ch}`);
}
console.log("Batch 1 (Ch3-Ch5) improvement complete.");
