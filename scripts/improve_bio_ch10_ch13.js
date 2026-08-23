const fs = require('fs');
const path = require('path');

const generateData = (chNum) => {
  if (chNum === 10) {
    return {
      notes: [
        {
          "id": "n1",
          "title": { "en": "Biotechnological Applications in Agriculture", "hi": "कृषि में जैव प्रौद्योगिकी के अनुप्रयोग" },
          "content": { "en": "Three options for increasing food production: Agrochemical based agriculture, Organic agriculture, and Genetically engineered crop-based agriculture. Genetically Modified Organisms (GMOs) are plants, bacteria, fungi, and animals whose genes have been altered.\nBenefits of GM plants: More tolerant to abiotic stresses (cold, drought), reduced reliance on chemical pesticides (pest-resistant crops), reduced post-harvest losses, increased efficiency of mineral usage, and enhanced nutritional value (e.g., Golden Rice - Vitamin A enriched).", "hi": "खाद्य उत्पादन बढ़ाने के तीन विकल्प: एग्रोकेमिकल आधारित कृषि, जैविक कृषि, और आनुवंशिक रूप से इंजीनियर फसल आधारित कृषि। GMO (Genetically Modified Organisms) वे जीव हैं जिनके जीन में परिवर्तन किया गया है।\nजीएम (GM) पौधों के लाभ: अजैविक तनाव (ठंड, सूखा) के प्रति अधिक सहिष्णु, रासायनिक कीटनाशकों पर कम निर्भरता, कटाई के बाद के नुकसान में कमी, और पोषण मूल्य में वृद्धि (उदा., गोल्डन राइस - विटामिन ए से भरपूर)।" }
        },
        {
          "id": "n2",
          "title": { "en": "Bt Cotton", "hi": "बीटी कपास (Bt Cotton)" },
          "content": { "en": "Bacillus thuringiensis (Bt) produces a protein crystal containing a toxic insecticidal protein (Cry protein). The toxin exists as an inactive protoxin but becomes active in the alkaline pH of the insect gut. It binds to midgut epithelial cells, creating pores that cause cell swelling and lysis, killing the insect. Specific genes (cryIAc, cryIIAb control cotton bollworms; cryIAb controls corn borer) were isolated and incorporated into crops.", "hi": "बैसिलस थुरिंजिएंसिस (Bt) एक प्रोटीन क्रिस्टल बनाता है जिसमें विषैला कीटनाशक प्रोटीन (क्राई प्रोटीन) होता है। यह विष निष्क्रिय होता है लेकिन कीट की आंत के क्षारीय pH में सक्रिय हो जाता है। यह मिडगुट उपकला कोशिकाओं से जुड़ता है, जिससे कोशिका में सूजन और मृत्यु हो जाती है। विशिष्ट जीन (cryIAc, cryIIAb) को अलग करके फसलों में डाला गया था।" }
        },
        {
          "id": "n3",
          "title": { "en": "Pest Resistant Plants (RNA Interference)", "hi": "कीट प्रतिरोधी पौधे (RNAi)" },
          "content": { "en": "A nematode *Meloidogyne incognita* infects tobacco roots, causing a reduction in yield. RNA interference (RNAi) strategy was used to prevent this. RNAi takes place in all eukaryotic organisms as a method of cellular defense. It involves silencing a specific mRNA due to a complementary dsRNA molecule that binds to and prevents translation of the mRNA (silencing).", "hi": "निमेटोड *मेलोइडोगाइन इनकोगनिटा* तंबाकू की जड़ों को संक्रमित करता है। इसे रोकने के लिए RNA इंटरफेरेंस (RNAi) रणनीति का उपयोग किया गया। RNAi सभी यूकेरियोटिक जीवों में सेलुलर रक्षा की एक विधि है। इसमें एक पूरक dsRNA अणु के कारण एक विशिष्ट mRNA को शांत (silencing) करना शामिल है, जो mRNA के अनुवाद को रोकता है।" }
        },
        {
          "id": "n4",
          "title": { "en": "Biotechnological Applications in Medicine", "hi": "चिकित्सा में जैव प्रौद्योगिकी के अनुप्रयोग" },
          "content": { "en": "**Genetically Engineered Insulin**: Insulin consists of two short polypeptide chains (chain A and chain B) linked by disulfide bridges. In mammals, insulin is synthesized as a prohormone (contains an extra C peptide which is removed during maturation). Eli Lilly (1983) prepared two DNA sequences corresponding to A and B chains and introduced them into plasmids of E. coli to produce insulin chains, which were later combined.\n**Gene Therapy**: Correction of a genetic defect diagnosed in a child/embryo. First clinical gene therapy was given in 1990 to a 4-year-old girl with Adenosine deaminase (ADA) deficiency.\n**Molecular Diagnosis**: Early detection using PCR (detects very low amounts of DNA/RNA by amplification) and ELISA (based on antigen-antibody interaction).", "hi": "**जेनेटिकली इंजीनियर इंसुलिन**: इंसुलिन में दो पॉलीपेप्टाइड श्रृंखलाएं (A और B) होती हैं। 1983 में एली लिली (Eli Lilly) ने ई. कोलाई (E. coli) का उपयोग करके ए और बी चेन का उत्पादन किया।\n**जीन थेरेपी**: आनुवंशिक दोष का सुधार। पहली जीन थेरेपी 1990 में ADA की कमी वाली 4 साल की बच्ची को दी गई थी।\n**आणविक निदान (Molecular Diagnosis)**: पीसीआर (PCR) और एलिसा (ELISA) का उपयोग करके बीमारियों का प्रारंभिक पता लगाना।" }
        },
        {
          "id": "n5",
          "title": { "en": "Transgenic Animals and Ethical Issues", "hi": "ट्रांसजेनिक जानवर और नैतिक मुद्दे" },
          "content": { "en": "Animals that have had their DNA manipulated to possess and express an extra (foreign) gene. Why are they produced? To study normal physiology, study of disease (cancer, cystic fibrosis), produce biological products (e.g., Rosie, the first transgenic cow, produced human protein-enriched milk), vaccine safety testing (mice), and chemical safety testing.\n**Ethical Issues**: GEAC (Genetic Engineering Approval Committee) makes decisions regarding the validity of GM research and the safety of introducing GM organisms. **Biopiracy** is the term used to refer to the use of bio-resources by multinational companies without proper authorization.", "hi": "जिन जानवरों के डीएनए में हेरफेर किया गया है। उन्हें क्यों बनाया जाता है? सामान्य शरीर क्रिया विज्ञान का अध्ययन, बीमारी का अध्ययन, जैविक उत्पादों का उत्पादन (उदा., रोजी गाय ने मानव प्रोटीन युक्त दूध का उत्पादन किया), वैक्सीन सुरक्षा परीक्षण।\n**नैतिक मुद्दे**: GEAC (जेनेटिक इंजीनियरिंग अप्रूवल कमेटी) GM अनुसंधान की वैधता पर निर्णय लेती है। **बायोपायरेसी**: उचित प्राधिकरण के बिना बहुराष्ट्रीय कंपनियों द्वारा जैव-संसाधनों का उपयोग।" }
        }
      ],
      diagrams: []
    };
  }

  if (chNum === 11) {
    return {
      notes: [
        {
          "id": "n1",
          "title": { "en": "Organisms and Its Environment", "hi": "जीव और उसका पर्यावरण" },
          "content": { "en": "Ecology is the study of interactions among organisms and their environment. It has four levels: organisms, populations, communities, and biomes.\nMajor Abiotic Factors:\n- **Temperature**: Most ecologically relevant factor. Organisms that tolerate a wide range of temperatures are **eurythermal**, narrow range are **stenothermal**.\n- **Water**: Essential for life. Organisms tolerant to a wide range of salinities are **euryhaline**, narrow range are **stenohaline**.\n- **Light**: Important for photosynthesis and photoperiodism.\n- **Soil**: Nature and properties depend on climate, weathering process.", "hi": "पारिस्थितिकी जीवों और उनके पर्यावरण के बीच बातचीत का अध्ययन है।\nप्रमुख अजैविक कारक:\n- **तापमान**: तापमान की एक विस्तृत श्रृंखला को सहन करने वाले जीव **यूरीथर्मल (eurythermal)** हैं, संकीर्ण सीमा वाले **स्टेनोथर्मल (stenothermal)** हैं।\n- **जल**: लवणता की एक विस्तृत श्रृंखला के प्रति सहिष्णु जीव **यूरीहेलिन (euryhaline)** हैं, संकीर्ण सीमा वाले **स्टेनोहेलिन (stenohaline)** हैं।\n- **प्रकाश**: प्रकाश संश्लेषण के लिए महत्वपूर्ण।\n- **मिट्टी**" }
        },
        {
          "id": "n2",
          "title": { "en": "Responses to Abiotic Factors", "hi": "अजैविक कारकों के प्रति प्रतिक्रियाएं" },
          "content": { "en": "**Regulate**: Maintain homeostasis (constant body temp and osmotic concentration) e.g., all birds and mammals.\n**Conform**: Body temp changes with ambient temp (most animals and nearly all plants).\n**Migrate**: Move away temporarily from stressful habitat to a more hospitable area (e.g. Siberian cranes to Keoladeo National Park, Bharatpur).\n**Suspend**: Seeds go into dormancy. Bears undergo hibernation (winter sleep). Snails undergo aestivation (summer sleep). Zooplankton undergo diapause (a stage of suspended development).", "hi": "**विनियमन (Regulate)**: होमोस्टैसिस बनाए रखना (उदा., सभी पक्षी और स्तनधारी)।\n**अनुरूप (Conform)**: शरीर का तापमान परिवेश के साथ बदलता है (ज्यादातर जानवर और पौधे)।\n**प्रवास (Migrate)**: तनावपूर्ण निवास स्थान से अस्थायी रूप से दूर जाना (उदा., साइबेरियन क्रेन)।\n**निलंबित (Suspend)**: बीज सुप्त अवस्था में चले जाते हैं। भालू हाइबरनेशन (शीतनिद्रा) में चले जाते हैं। घोंघे एस्टिवेशन (ग्रीष्मनिद्रा) से गुजरते हैं।" }
        },
        {
          "id": "n3",
          "title": { "en": "Populations", "hi": "आबादी (Populations)" },
          "content": { "en": "Attributes: Birth rates, Death rates, Sex ratio. Age pyramids show age distribution.\n**Population Growth**: Depends on Natality (B), Mortality (D), Immigration (I), Emigration (E).\n$N_{t+1} = N_t + [(B + I) - (D + E)]$\n**Growth Models**:\n1. **Exponential Growth**: Unlimited resources. Equation: $dN/dt = rN$ (r = intrinsic rate of natural increase).\n2. **Logistic Growth**: Limited resources. Follows Verhulst-Pearl Logistic Growth equation: $dN/dt = rN [(K-N)/K]$ (K = carrying capacity).", "hi": "विशेषताएं: जन्म दर, मृत्यु दर, लिंग अनुपात।\n**आबादी में वृद्धि**: जन्म (B), मृत्यु (D), आप्रवास (I), उत्प्रवास (E) पर निर्भर करती है।\n**विकास मॉडल**:\n1. **घातीय वृद्धि (Exponential Growth)**: असीमित संसाधन। समीकरण: $dN/dt = rN$\n2. **लॉजिस्टिक वृद्धि (Logistic Growth)**: सीमित संसाधन। समीकरण: $dN/dt = rN [(K-N)/K]$ (K = वहन क्षमता)।" }
        },
        {
          "id": "n4",
          "title": { "en": "Population Interactions", "hi": "आबादी की पारस्परिक क्रियाएं" },
          "content": { "en": "**Mutualism (+/+)**: Both species benefit (e.g., Lichens, Mycorrhizae).\n**Competition (-/-)**: Both species lose. Gause's Competitive Exclusion Principle states two closely related species competing for same resources cannot co-exist indefinitely.\n**Predation (+/-)**: One benefits, other is harmed. Predators act as conduits for energy transfer and keep prey populations under control.\n**Parasitism (+/-)**: Parasite benefits at the expense of host.\n**Commensalism (+/0)**: One benefits, other is unaffected (e.g., Orchid on a mango branch).\n**Amensalism (-/0)**: One is harmed, other is unaffected.", "hi": "**सहोपकारिता (Mutualism, +/+)**: दोनों प्रजातियों को लाभ होता है (उदा., लाइकेन)।\n**प्रतिस्पर्धा (Competition, -/-)**: दोनों हारते हैं। गॉस का नियम कहता है कि एक ही संसाधन के लिए प्रतिस्पर्धा करने वाली दो प्रजातियां एक साथ नहीं रह सकती हैं।\n**परभक्षण (Predation, +/-)**: एक को लाभ, दूसरे को नुकसान।\n**परजीविता (Parasitism, +/-)**: परजीवी को मेजबान की कीमत पर लाभ होता है।\n**सहभोजिता (Commensalism, +/0)**: एक को लाभ, दूसरा अप्रभावित (उदा., आम की शाखा पर आर्किड)।\n**अमेन्सालिज़्म (Amensalism, -/0)**: एक को नुकसान, दूसरा अप्रभावित।" }
        }
      ],
      diagrams: [
        {
          "id": "dia1",
          "title": { "en": "Population Growth Curves", "hi": "जनसंख्या वृद्धि वक्र" },
          "description": { "en": "a: Exponential growth (J-shaped curve). b: Logistic growth (S-shaped or Sigmoid curve).", "hi": "a: घातीय वृद्धि (J-आकार का वक्र)। b: लॉजिस्टिक वृद्धि (S-आकार या सिग्मॉइड वक्र)।" },
          "svgCode": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><style>.bg{fill:#f8fafc;}.axis{stroke:#334155;stroke-width:2;}.exp{fill:none;stroke:#ef4444;stroke-width:3;}.log{fill:none;stroke:#3b82f6;stroke-width:3;}.asymptote{stroke:#10b981;stroke-width:2;stroke-dasharray:5;}</style><rect width='100%' height='100%' class='bg'/><g transform='translate(50, 250)'><line x1='0' y1='0' x2='300' y2='0' class='axis'/><line x1='0' y1='0' x2='0' y2='-200' class='axis'/><text x='130' y='30' font-size='14'>Time (t)</text><text x='-40' y='-100' font-size='14' transform='rotate(-90, -40, -100)'>Population Density (N)</text><line x1='0' y1='-150' x2='300' y2='-150' class='asymptote'/><text x='310' y='-145' font-size='14' fill='#10b981'>K</text><path class='exp' d='M0,0 Q150,-10 200,-190'/><path class='log' d='M0,0 C100,-10 150,-145 280,-148'/><text x='210' y='-180' font-size='14' fill='#ef4444'>a</text><text x='250' y='-120' font-size='14' fill='#3b82f6'>b</text></g></svg>",
          "labels": []
        }
      ]
    };
  }

  if (chNum === 12) {
    return {
      notes: [
        {
          "id": "n1",
          "title": { "en": "Ecosystem Structure and Function", "hi": "पारिस्थितिकी तंत्र की संरचना और कार्य" },
          "content": { "en": "An ecosystem is a functional unit of nature, where living organisms interact among themselves and with the physical environment. Two basic categories: Terrestrial and Aquatic.\nFour main components function as a unit:\n1. **Productivity**: Rate of biomass production. Primary productivity (by plants), GPP (Gross Primary Productivity), NPP (Net Primary Productivity). NPP = GPP - R.\n2. **Decomposition**: Breakdown of complex organic matter into inorganic substances by decomposers. Steps: Fragmentation, leaching, catabolism, humification, and mineralization.\n3. **Energy Flow**: Unidirectional flow of energy from sun to producers and then to consumers (10% law of energy transfer).\n4. **Nutrient Cycling**.", "hi": "पारिस्थितिकी तंत्र प्रकृति की एक कार्यात्मक इकाई है, जहाँ जीवित जीव आपस में और भौतिक पर्यावरण के साथ बातचीत करते हैं।\nचार मुख्य घटक:\n1. **उत्पादकता**: बायोमास उत्पादन की दर। GPP - R = NPP.\n2. **अपघटन (Decomposition)**: अपघटकों द्वारा जटिल कार्बनिक पदार्थों का अकार्बनिक पदार्थों में टूटना।\n3. **ऊर्जा प्रवाह (Energy Flow)**: सूर्य से उत्पादकों और फिर उपभोक्ताओं तक ऊर्जा का एकदिशीय प्रवाह (ऊर्जा हस्तांतरण का 10% नियम)।\n4. **पोषक चक्र (Nutrient Cycling)**।" }
        },
        {
          "id": "n2",
          "title": { "en": "Food Chains and Webs", "hi": "खाद्य श्रृंखला और जाले" },
          "content": { "en": "**Grazing Food Chain (GFC)**: Starts with green plants (producers) -> Herbivores -> Carnivores.\n**Detritus Food Chain (DFC)**: Starts with dead organic matter -> Decomposers (saprotrophs like fungi and bacteria). In aquatic ecosystems, GFC is the major conduit for energy flow. In terrestrial ecosystems, more energy flows through DFC.\n**Food Web**: The natural interconnection of food chains.", "hi": "**ग्रेजिंग फूड चेन (GFC)**: हरे पौधों (उत्पादकों) से शुरू होती है -> शाकाहारी -> मांसाहारी।\n**डेट्राइटस फूड चेन (DFC)**: मृत कार्बनिक पदार्थों से शुरू होती है -> अपघटक (कवक और बैक्टीरिया)। जलीय पारिस्थितिक तंत्र में, GFC ऊर्जा प्रवाह का प्रमुख मार्ग है। स्थलीय पारिस्थितिक तंत्र में, अधिक ऊर्जा DFC के माध्यम से बहती है।\n**फूड वेब**: खाद्य श्रृंखलाओं का प्राकृतिक अंतर्संबंध।" }
        },
        {
          "id": "n3",
          "title": { "en": "Ecological Pyramids", "hi": "पारिस्थितिक पिरामिड" },
          "content": { "en": "Graphical representation of ecological parameters at different trophic levels.\n1. **Pyramid of Number**: Mostly upright. Invert in a tree ecosystem (one tree supports many birds/insects).\n2. **Pyramid of Biomass**: Mostly upright. Inverted in aquatic ecosystems (biomass of fishes exceeds that of phytoplankton).\n3. **Pyramid of Energy**: Always upright. Energy is always lost as heat at each step (only 10% transfers).", "hi": "विभिन्न ट्राफिक स्तरों पर पारिस्थितिक मापदंडों का चित्रमय प्रतिनिधित्व।\n1. **संख्या का पिरामिड**: ज्यादातर सीधा। एक पेड़ के पारिस्थितिकी तंत्र में उल्टा।\n2. **बायोमास का पिरामिड**: ज्यादातर सीधा। जलीय पारिस्थितिक तंत्र में उल्टा (मछलियों का बायोमास फाइटोप्लांकटन से अधिक होता है)।\n3. **ऊर्जा का पिरामिड**: हमेशा सीधा। प्रत्येक चरण में ऊर्जा हमेशा ऊष्मा के रूप में खो जाती है (केवल 10% स्थानान्तरण)।" }
        }
      ],
      diagrams: []
    };
  }

  if (chNum === 13) {
    return {
      notes: [
        {
          "id": "n1",
          "title": { "en": "Biodiversity and Its Levels", "hi": "जैव विविधता और इसके स्तर" },
          "content": { "en": "Biodiversity is the occurrence of different types of ecosystems, different species of organisms with the whole range of their variants and genes adapted to different climates.\nThree levels: **Genetic diversity** (diversity of genes within a species, e.g. Rauwolfia vomitoria producing different amounts of reserpine), **Species diversity** (variety of species within a region, e.g. Western Ghats have greater amphibian species diversity than Eastern Ghats), and **Ecological diversity** (diversity at ecosystem level).", "hi": "जैव विविधता विभिन्न प्रकार के पारिस्थितिक तंत्रों, जीवों की विभिन्न प्रजातियों और विभिन्न जलवायु के अनुकूल उनके जीन की उपस्थिति है।\nतीन स्तर: **आनुवंशिक विविधता** (एक प्रजाति के भीतर जीन की विविधता), **प्रजाति विविधता** (एक क्षेत्र के भीतर प्रजातियों की विविधता, उदा. पश्चिमी घाट में पूर्वी घाट की तुलना में अधिक उभयचर विविधता है), और **पारिस्थितिक विविधता**।" }
        },
        {
          "id": "n2",
          "title": { "en": "Patterns of Biodiversity", "hi": "जैव विविधता के प्रतिरूप" },
          "content": { "en": "**Latitudinal Gradients**: Species diversity decreases as we move away from the equator towards the poles. Tropics harbor more species than temperate or polar areas (because tropics had more evolutionary time and a more constant environment).\n**Species-Area Relationships**: Proposed by Alexander von Humboldt. Within a region, species richness increases with increasing explored area, but only up to a limit. Equation: $\\log S = \\log C + Z \\log A$.", "hi": "**अक्षांशीय प्रवणता (Latitudinal Gradients)**: भूमध्य रेखा से ध्रुवों की ओर जाने पर प्रजातियों की विविधता कम हो जाती है। उष्णकटिबंधीय क्षेत्रों में समशीतोष्ण या ध्रुवीय क्षेत्रों की तुलना में अधिक प्रजातियां हैं।\n**प्रजाति-क्षेत्र संबंध**: अलेक्जेंडर वॉन हम्बोल्ट द्वारा प्रस्तावित। एक क्षेत्र के भीतर, खोजे गए क्षेत्र के बढ़ने के साथ प्रजातियों की समृद्धि बढ़ती है, लेकिन केवल एक सीमा तक। समीकरण: $\\log S = \\log C + Z \\log A$." }
        },
        {
          "id": "n3",
          "title": { "en": "Loss of Biodiversity", "hi": "जैव विविधता का नुकसान" },
          "content": { "en": "The 'Evil Quartet' (four major causes of biodiversity loss):\n1. **Habitat loss and fragmentation**: Most important cause (e.g. cutting down the Amazon rainforest).\n2. **Over-exploitation**: E.g. extinction of Steller's sea cow, passenger pigeon.\n3. **Alien species invasions**: E.g. Nile perch introduced into Lake Victoria caused extinction of cichlid fishes. Water hyacinth in India.\n4. **Co-extinctions**: When a host species becomes extinct, its obligatory parasites also become extinct.", "hi": "'एविल क्वार्टेट' (जैव विविधता के नुकसान के चार प्रमुख कारण):\n1. **आवास की हानि और विखंडन**: सबसे महत्वपूर्ण कारण (उदा. अमेज़न वर्षावन का कटना)।\n2. **अति-शोषण (Over-exploitation)**: उदा. स्टेलर की समुद्री गाय का विलुप्त होना।\n3. **विदेशी प्रजातियों का आक्रमण**: उदा. विक्टोरिया झील में नाइल पर्च, भारत में जलकुंभी।\n4. **सह-विलुप्ति (Co-extinctions)**: जब एक मेजबान प्रजाति विलुप्त हो जाती है, तो उसके अनिवार्य परजीवी भी विलुप्त हो जाते हैं।" }
        },
        {
          "id": "n4",
          "title": { "en": "Biodiversity Conservation", "hi": "जैव विविधता संरक्षण" },
          "content": { "en": "Why conserve? Narrowly utilitarian (direct economic benefits like food, firewood, drugs), Broadly utilitarian (ecosystem services like oxygen, pollination), and Ethical reasons.\n**In situ (on site) conservation**: Conserving organisms in their natural habitat (e.g. National Parks, Sanctuaries, Biosphere Reserves, Sacred groves, Biodiversity hotspots).\n**Ex situ (off site) conservation**: Conserving threatened organisms outside their natural habitat (e.g. Zoological parks, Botanical gardens, Cryopreservation, Seed banks).", "hi": "संरक्षण क्यों करें? संकीर्ण उपयोगितावादी (भोजन, दवाएं), व्यापक उपयोगितावादी (ऑक्सीजन, परागण), और नैतिक कारण।\n**स्वस्थाने (In situ) संरक्षण**: जीवों को उनके प्राकृतिक आवास में संरक्षित करना (उदा. राष्ट्रीय उद्यान, अभयारण्य, बायोस्फीयर रिजर्व, हॉटस्पॉट)।\n**बाह्यस्थाने (Ex situ) संरक्षण**: संकटग्रस्त जीवों को उनके प्राकृतिक आवास के बाहर संरक्षित करना (उदा. चिड़ियाघर, वनस्पति उद्यान, क्रायोप्रिजर्वेशन, बीज बैंक)।" }
        }
      ],
      diagrams: []
    };
  }
};

const baseDir = path.join(__dirname, '../src/content/biology/chapters');

for (let ch = 10; ch <= 13; ch++) {
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
console.log("Batch 3 (Ch10-Ch13) improvement complete.");
