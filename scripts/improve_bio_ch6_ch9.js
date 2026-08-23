const fs = require('fs');
const path = require('path');

const generateData = (chNum) => {
  if (chNum === 6) {
    return {
      notes: [
        {
          "id": "n1",
          "title": { "en": "Origin of Life", "hi": "जीवन की उत्पत्ति" },
          "content": { "en": "Big Bang theory explains origin of universe (~20 billion years ago). Earth formed ~4.5 billion years ago. Oparin and Haldane proposed that the first form of life could have come from pre-existing non-living organic molecules (Chemical Evolution). This was proved by Urey and Miller experiment (1953) creating amino acids from CH4, H2, NH3, and water vapor at 800°C.", "hi": "बिग बैंग सिद्धांत ब्रह्मांड की उत्पत्ति की व्याख्या करता है। पृथ्वी ~4.5 अरब साल पहले बनी थी। ओपेरिन और हाल्डेन ने रासायनिक विकास का प्रस्ताव दिया, जिसे 1953 में उरे और मिलर के प्रयोग (CH4, H2, NH3 से अमीनो एसिड का निर्माण) द्वारा सिद्ध किया गया।" }
        },
        {
          "id": "n2",
          "title": { "en": "Evidences for Evolution", "hi": "विकास के प्रमाण" },
          "content": { "en": "**Paleontological**: Fossils in sedimentary rocks.\n**Homologous Organs**: Same structure, different functions (e.g. forelimbs of whales, bats, cheetah, humans). Indicates divergent evolution.\n**Analogous Organs**: Different structure, same function (e.g. wings of butterfly and birds, sweet potato and potato). Indicates convergent evolution.", "hi": "**जीवाश्म विज्ञान**: तलछटी चट्टानों में जीवाश्म।\n**समजात अंग (Homologous)**: समान संरचना, भिन्न कार्य (उदा., व्हेल, चमगादड़ के अग्रपाद)। अपसारी विकास (divergent evolution) को दर्शाता है।\n**समरूप अंग (Analogous)**: भिन्न संरचना, समान कार्य (उदा., तितली और पक्षियों के पंख)। अभिसारी विकास (convergent evolution) को दर्शाता है।" }
        },
        {
          "id": "n3",
          "title": { "en": "Theories of Evolution", "hi": "विकास के सिद्धांत" },
          "content": { "en": "**Lamarckism**: Inheritance of acquired characters (e.g. elongation of giraffe's neck).\n**Darwinism (Natural Selection)**: Branching descent and natural selection. Fitness means reproductive fitness.\n**Mutation Theory (Hugo de Vries)**: Mutations (large, random, directionless differences) cause evolution, not minor variations (Darwinian variations are small and directional).", "hi": "**लैमार्कवाद**: उपार्जित लक्षणों की वंशागति (उदा., जिराफ की गर्दन का लंबा होना)।\n**डार्विनवाद**: प्राकृतिक चयन। फिटनेस का अर्थ है प्रजनन फिटनेस।\n**उत्परिवर्तन सिद्धांत (ह्यूगो डी व्रीस)**: उत्परिवर्तन (बड़े, यादृच्छिक, दिशाहीन) विकास का कारण बनते हैं, न कि छोटे बदलाव।" }
        },
        {
          "id": "n4",
          "title": { "en": "Hardy-Weinberg Principle", "hi": "हार्डी-वेनबर्ग सिद्धांत" },
          "content": { "en": "Allele frequencies in a population are stable and constant from generation to generation (Genetic equilibrium). Equation: $p^2 + 2pq + q^2 = 1$.\nFive factors affect it: Gene migration (gene flow), Genetic drift, Mutation, Genetic recombination, and Natural selection.", "hi": "एक आबादी में एलील आवृत्तियां स्थिर रहती हैं (आनुवंशिक संतुलन)। समीकरण: $p^2 + 2pq + q^2 = 1$।\nइसे प्रभावित करने वाले पांच कारक: जीन प्रवासन, आनुवंशिक बहाव (genetic drift), उत्परिवर्तन, पुनर्संयोजन, और प्राकृतिक चयन।" }
        },
        {
          "id": "n5",
          "title": { "en": "Human Evolution", "hi": "मानव विकास" },
          "content": { "en": "Dryopithecus & Ramapithecus (15 mya) -> Australopithecines (2 mya, East African grasslands) -> Homo habilis (first human-like, brain 650-800cc) -> Homo erectus (1.5 mya, brain 900cc, ate meat) -> Neanderthal man (1,00,000-40,000 years ago, brain 1400cc, buried dead) -> Homo sapiens (arose in Africa, 75,000-10,000 years ago).", "hi": "ड्रायोपिथेकस और रामापिथेकस -> ऑस्ट्रेलोपिथेकस -> होमो हैबिलिस (पहला मानव जैसा, मस्तिष्क 650-800cc) -> होमो इरेक्टस (मांस खाता था) -> निएंडरथल मानव (मस्तिष्क 1400cc, मृतकों को दफनाता था) -> होमो सेपियन्स (अफ्रीका में उत्पन्न हुए)।" }
        }
      ],
      diagrams: [
        {
          "id": "dia1",
          "title": { "en": "Miller-Urey Experiment", "hi": "मिलर-उरे प्रयोग" },
          "description": { "en": "Experimental setup simulating conditions of early Earth.", "hi": "प्रारंभिक पृथ्वी की स्थितियों का अनुकरण करने वाला प्रायोगिक सेटअप।" },
          "svgCode": "<svg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'><style>.bg{fill:#f8fafc;}.glass{fill:none;stroke:#334155;stroke-width:3;}.water{fill:#3b82f6;opacity:0.5;}.spark{stroke:#eab308;stroke-width:2;fill:none;}</style><rect width='100%' height='100%' class='bg'/><g transform='translate(150, 100)'><circle cx='50' cy='-40' r='30' class='glass'/><circle cx='-50' cy='40' r='25' class='glass'/><path d='M-30,55 A25 25 0 0 0 -70,55 Z' class='water'/><path d='M20,-40 L-25,40' class='glass'/><path d='M75,-25 Q100,50 -25,40' class='glass'/><path d='M35,-50 L65,-30' class='spark'/><path d='M65,-50 L35,-30' class='spark'/></g></svg>",
          "labels": [
            { "id": "l1", "x": 60, "y": 25, "text": { "en": "Spark discharge (Electrodes)", "hi": "स्पार्क डिस्चार्ज" } },
            { "id": "l2", "x": 20, "y": 70, "text": { "en": "Boiling water", "hi": "उबलता पानी" } },
            { "id": "l3", "x": 80, "y": 45, "text": { "en": "Mixture of Gases", "hi": "गैसों का मिश्रण" } }
          ]
        }
      ]
    };
  }

  if (chNum === 7) {
    return {
      notes: [
        {
          "id": "n1",
          "title": { "en": "Common Diseases in Humans", "hi": "मनुष्यों में सामान्य रोग" },
          "content": { "en": "Disease causing organisms are called pathogens.\n**Bacterial**: Typhoid (Salmonella typhi, Widal test), Pneumonia (Streptococcus pneumoniae).\n**Viral**: Common cold (Rhino viruses).\n**Protozoan**: Malaria (Plasmodium spp., transmitted by female Anopheles mosquito), Amoebiasis (Entamoeba histolytica).\n**Helminthic**: Ascariasis (Ascaris lumbricoides), Elephantiasis/Filariasis (Wuchereria).\n**Fungal**: Ringworms (Microsporum, Trichophyton).", "hi": "रोग पैदा करने वाले जीवों को रोगजनक (pathogens) कहा जाता है।\n**जीवाणु**: टाइफाइड (साल्मोनेला टाइफी, विडाल टेस्ट), निमोनिया।\n**विषाणु**: सामान्य सर्दी (राइनो वायरस)।\n**प्रोटोजोआ**: मलेरिया (प्लाज्मोडियम), अमीबायसिस।\n**कृमि (Helminthic)**: एस्कारियासिस, हाथीपाँव (फाइलेरिया)।\n**कवक**: दाद (Ringworms)।" }
        },
        {
          "id": "n2",
          "title": { "en": "Life Cycle of Plasmodium", "hi": "प्लाज्मोडियम का जीवन चक्र" },
          "content": { "en": "Requires two hosts: Human and Mosquito.\n1. Infected female Anopheles mosquito bites a human, injecting **sporozoites**.\n2. Parasites reach the **liver** through blood and multiply asexually, bursting liver cells.\n3. Parasites enter **RBCs**, multiply, and burst them, releasing **hemozoin** (causes chill and high fever).\n4. Sexual stages (gametocytes) develop in RBCs.\n5. Mosquito takes up gametocytes with blood meal. Fertilization and development take place in the mosquito's intestine.\n6. Mature sporozoites migrate to the mosquito's salivary glands.", "hi": "दो मेजबानों की आवश्यकता होती है: मानव और मच्छर।\n1. मच्छर मानव को काटता है, **स्पोरोजोइट्स** इंजेक्ट करता है।\n2. परजीवी **यकृत (liver)** में बहुगुणित होते हैं।\n3. परजीवी **RBCs** में प्रवेश करते हैं, उन्हें फोड़ते हैं, जिससे **हीमोज़ोइन** निकलता है (जिससे ठंड और तेज़ बुखार होता है)।\n4. RBCs में यौन चरण (गैमेटोसाइट्स) विकसित होते हैं।\n5. मच्छर रक्त के साथ गैमेटोसाइट्स लेता है। मच्छर की आंत में निषेचन होता है।\n6. स्पोरोजोइट्स मच्छर की लार ग्रंथियों में चले जाते हैं।" }
        },
        {
          "id": "n3",
          "title": { "en": "Immunity", "hi": "प्रतिरक्षा (Immunity)" },
          "content": { "en": "**Innate Immunity**: Non-specific, present at birth. Has 4 types of barriers: Physical (Skin, Mucus), Physiological (Acid in stomach, Tears), Cellular (PMNL-neutrophils, Macrophages), Cytokine (Interferons against viruses).\n**Acquired Immunity**: Pathogen specific, characterized by memory. Primary response is low intensity; secondary response is highly intensified (anamnestic). Mediated by B-lymphocytes (produce antibodies - Humoral immune response) and T-lymphocytes (Cell-mediated immunity, responsible for graft rejection).", "hi": "**सहज प्रतिरक्षा (Innate)**: जन्म के समय मौजूद। 4 बाधाएं: शारीरिक (त्वचा), शारीरिक (पेट में एसिड), सेलुलर (मैक्रोफेज), साइटोकाइन (इंटरफेरॉन)।\n**उपार्जित प्रतिरक्षा (Acquired)**: रोगजनक विशिष्ट, स्मृति पर आधारित। B-लिम्फोसाइट्स (एंटीबॉडी का उत्पादन - Humoral) और T-लिम्फोसाइट्स (Cell-mediated, ग्राफ्ट अस्वीकृति के लिए जिम्मेदार) द्वारा मध्यस्थता।" }
        },
        {
          "id": "n4",
          "title": { "en": "AIDS (Acquired Immuno Deficiency Syndrome)", "hi": "एड्स (AIDS)" },
          "content": { "en": "Caused by Human Immunodeficiency Virus (HIV), a retrovirus. Transmission occurs via sexual contact, contaminated blood/needles, or from infected mother to child.\nHIV enters macrophages (which act like an HIV factory) and Helper T-lymphocytes (TH). It progressively decreases the number of TH cells, severely weakening the immune system. Diagnosed by ELISA.", "hi": "ह्यूमन इम्युनोडेफिशिएंसी वायरस (HIV), एक रेट्रोवायरस के कारण होता है।\nएचआईवी मैक्रोफेज (जो एचआईवी फैक्ट्री की तरह काम करते हैं) और हेल्पर T-लिम्फोसाइट्स (TH) में प्रवेश करता है। यह TH कोशिकाओं की संख्या को लगातार कम करता है, जिससे प्रतिरक्षा प्रणाली गंभीर रूप से कमजोर हो जाती है। एलिसा (ELISA) द्वारा निदान।" }
        },
        {
          "id": "n5",
          "title": { "en": "Cancer", "hi": "कैंसर" },
          "content": { "en": "Characterized by uncontrolled cell division and loss of property of **contact inhibition**. Tumors are of two types: Benign (remains confined) and Malignant (spreads to other tissues, property called **metastasis**).\nCauses: Carcinogens (X-rays, UV rays, tobacco smoke, oncogenic viruses).\nTreatment: Surgery, Radiation therapy, Chemotherapy, Immunotherapy (using alpha-interferons).", "hi": "**संपर्क निषेध (contact inhibition)** की संपत्ति के नुकसान और अनियंत्रित कोशिका विभाजन की विशेषता। ट्यूमर दो प्रकार के होते हैं: सौम्य (Benign) और घातक (Malignant - जो फैलता है, जिसे **मेटास्टेसिस** कहा जाता है)।\nकारण: कार्सिनोजेन्स (X-रे, तंबाकू का धुआं, ऑन्कोजेनिक वायरस)।\nउपचार: सर्जरी, विकिरण, कीमोथेरेपी, इम्यूनोथेरेपी (अल्फा-इंटरफेरॉन का उपयोग)।" }
        }
      ],
      diagrams: [
        {
          "id": "dia1",
          "title": { "en": "Structure of an Antibody", "hi": "एंटीबॉडी की संरचना" },
          "description": { "en": "An antibody molecule has four peptide chains: two small light chains and two longer heavy chains (H2L2).", "hi": "एक एंटीबॉडी अणु में चार पेप्टाइड श्रृंखलाएं होती हैं: दो छोटी हल्की श्रृंखलाएं (Light chains) और दो लंबी भारी श्रृंखलाएं (Heavy chains)।" },
          "svgCode": "<svg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'><style>.bg{fill:#f8fafc;}.heavy{fill:none;stroke:#3b82f6;stroke-width:8;stroke-linecap:round;}.light{fill:none;stroke:#ef4444;stroke-width:8;stroke-linecap:round;}.bond{fill:none;stroke:#334155;stroke-width:2;}</style><rect width='100%' height='100%' class='bg'/><g transform='translate(150, 150)'><path class='heavy' d='M0,50 L0,-20 L-40,-80'/><path class='heavy' d='M0,50 L0,-20 L40,-80'/><path class='light' d='M-25,-30 L-65,-90'/><path class='light' d='M25,-30 L65,-90'/><line x1='-15' y1='-30' x2='-25' y2='-30' class='bond'/><line x1='15' y1='-30' x2='25' y2='-30' class='bond'/><line x1='-5' y1='0' x2='5' y2='0' class='bond'/><line x1='-5' y1='10' x2='5' y2='10' class='bond'/></g></svg>",
          "labels": [
            { "id": "l1", "x": 65, "y": 20, "text": { "en": "Antigen binding site", "hi": "एंटीजन बाइंडिंग साइट" } },
            { "id": "l2", "x": 30, "y": 40, "text": { "en": "Light Chain", "hi": "हल्की श्रृंखला" } },
            { "id": "l3", "x": 50, "y": 70, "text": { "en": "Heavy Chain", "hi": "भारी श्रृंखला" } },
            { "id": "l4", "x": 50, "y": 55, "text": { "en": "Disulfide bonds", "hi": "डाइसल्फाइड बांड" } }
          ]
        }
      ]
    };
  }

  if (chNum === 8) {
    return {
      notes: [
        {
          "id": "n1",
          "title": { "en": "Microbes in Household & Industrial Products", "hi": "घरेलू और औद्योगिक उत्पादों में सूक्ष्मजीव" },
          "content": { "en": "**Household**: Lactobacillus (LAB) converts milk to curd, improves Vitamin B12. Saccharomyces cerevisiae (Baker's yeast) used in bread making. Propionibacterium sharmanii produces large holes in 'Swiss cheese' (large amount of CO2).\n**Industrial**: Production of beverages (fermented by yeast). Antibiotics like Penicillin discovered by Alexander Fleming from Penicillium notatum. Chemicals: Aspergillus niger (Citric acid), Acetobacter aceti (Acetic acid), Clostridium butylicum (Butyric acid), Lactobacillus (Lactic acid).", "hi": "**घरेलू**: लैक्टोबैसिलस (LAB) दूध को दही में बदलता है, विटामिन B12 बढ़ाता है। सैक्रोमाइसेस सेरेविसिए (Baker's yeast) का उपयोग ब्रेड बनाने में। 'स्विस चीज़' में Propionibacterium sharmanii (बड़ी मात्रा में CO2) के कारण बड़े छेद होते हैं।\n**औद्योगिक**: पेनिसिलियम नोटेटम से अलेक्जेंडर फ्लेमिंग द्वारा पेनिसिलिन (एंटीबायोटिक) की खोज। एस्परगिलस नाइजर (साइट्रिक एसिड)।" }
        },
        {
          "id": "n2",
          "title": { "en": "Microbes as Bioactive Molecules", "hi": "बायोएक्टिव अणुओं के रूप में सूक्ष्मजीव" },
          "content": { "en": "**Streptokinase**: Produced by Streptococcus, modified by genetic engineering to act as a 'clot buster' for removing clots from blood vessels.\n**Cyclosporin A**: Used as an immunosuppressive agent in organ transplant patients, produced by fungus Trichoderma polysporum.\n**Statins**: Produced by yeast Monascus purpureus, act as blood-cholesterol lowering agents (competitively inhibits enzyme responsible for cholesterol synthesis).", "hi": "**स्ट्रेप्टोकाइनेज**: रक्त वाहिकाओं से थक्के (clots) को हटाने के लिए 'क्लॉट बस्टर' के रूप में।\n**साइक्लोस्पोरिन ए**: अंग प्रत्यारोपण रोगियों में प्रतिरक्षादमनकारी एजेंट के रूप में उपयोग किया जाता है (कवक ट्राइकोडर्मा पॉलीस्पोरम से)।\n**स्टैटिन**: रक्त-कोलेस्ट्रॉल कम करने वाले एजेंट (यीस्ट मोनस्कस पुरप्यूरियस से)।" }
        },
        {
          "id": "n3",
          "title": { "en": "Microbes in Sewage Treatment", "hi": "सीवेज उपचार में सूक्ष्मजीव" },
          "content": { "en": "Primary treatment is physical removal of particles (filtration & sedimentation).\nSecondary (Biological) treatment involves aeration where aerobic microbes (flocs) consume organic matter, significantly reducing BOD (Biochemical Oxygen Demand).\nOnce BOD is reduced, the effluent is passed into a settling tank (flocs settle as activated sludge). A part of this is pumped to anaerobic sludge digesters, where anaerobic bacteria produce biogas (methane, H2S, CO2).", "hi": "प्राथमिक उपचार कणों को भौतिक रूप से हटाना है।\nद्वितीयक (जैविक) उपचार में वातन (aeration) शामिल है जहाँ एरोबिक सूक्ष्मजीव (flocs) कार्बनिक पदार्थों का उपभोग करते हैं, जिससे BOD (बायोकेमिकल ऑक्सीजन डिमांड) काफी कम हो जाती है।\nBOD कम होने के बाद, अवायवीय कीचड़ डाइजेस्टर में अवायवीय बैक्टीरिया बायोगैस (मीथेन, H2S, CO2) का उत्पादन करते हैं।" }
        },
        {
          "id": "n4",
          "title": { "en": "Microbes in Biogas Production & Biocontrol", "hi": "बायोगैस उत्पादन और जैव-नियंत्रण में सूक्ष्मजीव" },
          "content": { "en": "**Biogas**: Methanogens (e.g., Methanobacterium) in cattle rumen and anaerobic sludge produce biogas (predominantly methane).\n**Biocontrol Agents**: Use of biological methods for controlling plant diseases and pests.\n- Ladybird and Dragonflies control aphids and mosquitoes.\n- Bacillus thuringiensis (Bt) controls butterfly caterpillars.\n- Trichoderma (fungus) controls plant pathogens.\n- Baculoviruses (genus Nucleopolyhedrovirus) are excellent for species-specific, narrow-spectrum insecticidal applications.", "hi": "**बायोगैस**: मवेशियों के रुमेन में मेथनोजेन बायोगैस (मुख्य रूप से मीथेन) का उत्पादन करते हैं।\n**जैव-नियंत्रण (Biocontrol)**: पौधों की बीमारियों और कीटों को नियंत्रित करने के लिए जैविक तरीकों का उपयोग।\n- लेडीबर्ड और ड्रैगनफली एफिड्स और मच्छरों को नियंत्रित करते हैं।\n- बैसिलस थुरिंजिएंसिस (Bt) कैटरपिलर को नियंत्रित करता है।\n- बेकुलोवायरस प्रजाति-विशिष्ट कीटनाशक अनुप्रयोगों के लिए उत्कृष्ट हैं।" }
        }
      ],
      diagrams: []
    };
  }

  if (chNum === 9) {
    return {
      notes: [
        {
          "id": "n1",
          "title": { "en": "Principles of Biotechnology", "hi": "जैव प्रौद्योगिकी के सिद्धांत" },
          "content": { "en": "Two core techniques birthed modern biotechnology:\n1. **Genetic Engineering**: Techniques to alter the chemistry of genetic material (DNA/RNA) and introduce it into host organisms to change their phenotype.\n2. **Bioprocess Engineering**: Maintenance of sterile (microbe-free) ambience in chemical engineering processes for large-scale manufacturing of vaccines, antibodies, enzymes, etc.\nKey breakthrough: Construction of the first recombinant DNA by Cohen and Boyer (1972) by linking an antibiotic resistance gene with a native plasmid of Salmonella typhimurium.", "hi": "आधुनिक जैव प्रौद्योगिकी की दो मुख्य तकनीकें:\n1. **जेनेटिक इंजीनियरिंग**: आनुवंशिक सामग्री (DNA/RNA) के रसायन विज्ञान को बदलने और होस्ट जीव के फीनोटाइप को बदलने के लिए इसे पेश करने की तकनीक।\n2. **बायोप्रोसेस इंजीनियरिंग**: बड़े पैमाने पर टीकों, एंटीबॉडी आदि के निर्माण के लिए बाँझ (रोगाणु-मुक्त) परिवेश का रखरखाव।\nकोहेन और बोयर (1972) ने पहला पुनःसंयोजक डीएनए (recombinant DNA) बनाया था।" }
        },
        {
          "id": "n2",
          "title": { "en": "Tools of Recombinant DNA Technology", "hi": "पुनःसंयोजक डीएनए तकनीक के उपकरण" },
          "content": { "en": "**Restriction Enzymes**: 'Molecular scissors' that cut DNA at specific palindromic sequences. E.g., EcoRI cuts DNA between G and A in the sequence GAATTC, producing 'sticky ends'.\n**Cloning Vectors**: Plasmids (e.g. pBR322) and bacteriophages used to deliver alien DNA into host cells. Must have an Origin of replication (ori), a Selectable marker (like antibiotic resistance genes to identify transformants), and Cloning sites.\n**DNA Ligase**: Enzyme that acts as molecular glue to join DNA fragments.\n**Host Organism**: Competent cells (e.g., E. coli treated with divalent calcium, micro-injection, biolistics/gene gun) to take up the recombinant DNA.", "hi": "**प्रतिबंध एंजाइम (Restriction Enzymes)**: 'आणविक कैंची' जो विशिष्ट पैलिंड्रोमिक अनुक्रमों पर डीएनए को काटती हैं। उदा., EcoRI 'स्टिकी एंड्स' (sticky ends) पैदा करता है।\n**क्लोनिंग वैक्टर**: प्लास्मिड (उदा. pBR322) जिनका उपयोग विदेशी डीएनए को होस्ट में पहुंचाने के लिए किया जाता है। इसमें ऑरिजिन ऑफ रेप्लिकेशन (ori) और सिलेक्टेबल मार्कर होना चाहिए।\n**डीएनए लाइगेज**: एंजाइम जो डीएनए खंडों को जोड़ने के लिए आणविक गोंद का काम करता है।" }
        },
        {
          "id": "n3",
          "title": { "en": "Processes of Recombinant DNA Technology", "hi": "पुनःसंयोजक डीएनए तकनीक की प्रक्रियाएं" },
          "content": { "en": "1. Isolation of the Genetic Material (DNA) using enzymes (lysozyme, cellulase, chitinase, RNase, Protease) and chilling with ethanol.\n2. Cutting of DNA at specific locations using Restriction Endonucleases.\n3. Amplification of Gene of Interest using **PCR (Polymerase Chain Reaction)**. PCR involves 3 steps: Denaturation, Annealing, and Extension (using thermostable Taq polymerase).\n4. Insertion of Recombinant DNA into Host Cell/Organism.\n5. Obtaining the Foreign Gene Product using bioreactors for large scale production.\n6. Downstream Processing (Separation and purification of the product).", "hi": "1. डीएनए का अलगाव (एंजाइम और इथेनॉल का उपयोग करके)।\n2. रिस्ट्रिक्शन एंडोन्यूक्लिज़ का उपयोग करके डीएनए को काटना।\n3. **पीसीआर (PCR)** का उपयोग करके जीन का प्रवर्धन। पीसीआर के 3 चरण हैं: डिनेचुरेशन, एनीलिंग, और एक्सटेंशन (Taq पॉलीमरेज़ का उपयोग करके)।\n4. होस्ट सेल में रीकॉम्बिनेंट डीएनए डालना।\n5. बायोरेक्टर का उपयोग करके विदेशी जीन उत्पाद प्राप्त करना।\n6. डाउनस्ट्रीम प्रोसेसिंग (उत्पाद को अलग करना और शुद्ध करना)।" }
        }
      ],
      diagrams: [
        {
          "id": "dia1",
          "title": { "en": "Polymerase Chain Reaction (PCR)", "hi": "पोलीमरेज़ चेन रिएक्शन (PCR)" },
          "description": { "en": "The three steps of PCR: Denaturation (heating to separate strands), Annealing (primers bind), and Extension (Taq polymerase synthesizes new strand).", "hi": "पीसीआर के तीन चरण: डिनेचुरेशन (स्ट्रैंड्स को अलग करने के लिए हीटिंग), एनीलिंग (प्राइमर्स जुड़ते हैं), और एक्सटेंशन (Taq पॉलीमरेज़ नए स्ट्रैंड का संश्लेषण करता है)।" },
          "svgCode": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><style>.bg{fill:#f8fafc;}.dna{fill:none;stroke:#3b82f6;stroke-width:3;}.primer{fill:none;stroke:#ef4444;stroke-width:4;}.arrow{stroke:#334155;stroke-width:2;fill:none;}</style><rect width='100%' height='100%' class='bg'/><g transform='translate(50, 40)'><path class='dna' d='M0,0 L200,0'/><path class='dna' d='M0,10 L200,10'/><text x='220' y='10' font-size='12'>Region to be amplified</text></g><path class='arrow' d='M150,60 L150,90'/><text x='160' y='80' font-size='12' font-weight='bold'>Denaturation (94°C)</text><g transform='translate(50, 110)'><path class='dna' d='M0,0 L200,0'/><path class='dna' d='M0,40 L200,40'/></g><path class='arrow' d='M150,160 L150,190'/><text x='160' y='180' font-size='12' font-weight='bold'>Annealing (54°C)</text><g transform='translate(50, 210)'><path class='dna' d='M0,0 L200,0'/><path class='primer' d='M160,10 L180,10'/><path class='dna' d='M0,40 L200,40'/><path class='primer' d='M20,30 L40,30'/></g></svg>",
          "labels": []
        }
      ]
    };
  }
};

const baseDir = path.join(__dirname, '../src/content/biology/chapters');

for (let ch = 6; ch <= 9; ch++) {
  const data = generateData(ch);
  if (!data) continue;
  
  const chDir = path.join(baseDir, `ch${ch}`);
  
  const notesPath = path.join(chDir, 'notes.json');
  if (fs.existsSync(notesPath)) {
    fs.writeFileSync(notesPath, JSON.stringify(data.notes, null, 2));
  }
  
  const diagramsPath = path.join(chDir, 'diagrams.json');
  if (fs.existsSync(diagramsPath)) {
    fs.writeFileSync(diagramsPath, JSON.stringify(data.diagrams, null, 2));
  }

  console.log(`Successfully upgraded Chapter ${ch}`);
}
console.log("Batch 2 (Ch6-Ch9) improvement complete.");
