// O DICIONÁRIO GLOBAL DO RABI (Escala Planetária - V33)
const KEYWORDS = {
  // ==========================================
  // 🇧🇷 PORTUGUÊS (Brasil/Portugal)
  // ==========================================
procedimentos_pt: {
    // --- 💉 ERA DOS INJETÁVEIS E BIOESTIMULADORES ---
    'toxina botulínica': ['botox', 'toxina botulinica', 'botox facial', 'dysport', 'xeomin', 'nabota', 'botulift'],
    'preenchimento hialurônico': ['ácido hialurônico', 'preenchimento facial', 'juvederm', 'restylane', 'rennova'],
    'bioestimulador plla': ['sculptra', 'ácido poli-l-láctico', 'elleva', 'aesthefill', 'lanafill'],
    'bioestimulador hidroxiapatita': ['radiesse', 'hidroxiapatita de cálcio', 'diamond bioestimulador'],
    'bioestimulador híbrido': ['ellansé', 'polycaprolactone', 'harmonyca'],
    'skinbooster': ['skin booster', 'hidratação injetável', 'restylane vital', 'volite'],
    'bioremodelador tecidual': ['profhilo', 'bioremodelação', 'biorevitalização'],
    'pdrn': ['pdrn', 'polinucleotídeos', 'esperma de salmão estética', 'nucleofill'],
    'exossomos': ['exossomos', 'exosomes', 'terapia de exossomos', 'asce plus'],
    'mesoterapia facial': ['mesolift', 'intradermoterapia facial', 'nctf 135ha'],
    'mesoterapia corporal': ['enzimas para gordura', 'lipo enzimática', 'intradermoterapia corporal'],
    'hidrolipo enzimática': ['hidrolipo não cirúrgica', 'aplicação para gordura localizada'],
    'peim': ['procedimento estético injetável em microvasos', 'aplicação de vasinhos'],
    'escleroterapia': ['escleroterapia convencional', 'escleroterapia com espuma'],
    'fios de pdo liso': ['fios de pdo', 'polidioxanona', 'fios de estímulo de colágeno'],
    'fios de sustentação': ['fios de tração', 'fio espiculado', 'silhouette soft', 'fios italianos'],
    'hialuronidase': ['remoção de preenchimento', 'reversão de ácido hialurônico'],
    'rinomodelação': ['bioplastia de nariz', 'preenchimento de nariz'],
    'preenchimento labial': ['aumento de lábios', 'contorno labial', 'gloss lips'],
    'preenchimento de mandíbula': ['contorno mandibular', 'definição de mandíbula'],
    'preenchimento de malar': ['top model look', 'maçãs do rosto'],
    'preenchimento de mento': ['projeção de queixo', 'mentoplastia injetável'],
    'preenchimento de olheiras': ['tratamento de olheira profunda', 'calha lacrimal'],
    'preenchimento de têmporas': ['arqueamento de sobrancelha com preenchimento'],
    'preenchimento de glúteos': ['bioplastia de bumbum', 'volume glúteo injetável'],
    'bioestimulador de glúteos': ['sculptra glúteo', 'radiesse glúteo', 'bumbum up'],


// --- ⚡ LASERS E DISPOSITIVOS DE ENERGIA (EBDs) GLOBAL DOMINATION ---
    
    // 🔴 ABLATIVOS E CORTANTES
    'laser co2 fracionado': ['laser co2', 'co2 fracionado', 'dual deep', 'resurfacing co2', 'acupulse', 'ultrapulse', 'smartxide', 'smartxide dot', 'eco2', 'fraxis', 'edge one', 'dermal optical thermolysis', 'laser 10600nm', 'fraxel repair', 'cortex', 'pixel co2'],
    'laser erbium yag': ['fotona 4d', 'erbium 2940', 'resurfacing ablativo', 'dermablate', 'mcl31', 'action ii', 'contour trl', 'juliet', 'burane', 'etherea dualmode', 'profrac', 'laser 2940nm'],
    
    // 🟡 NÃO ABLATIVOS E FRACIONADOS
    'laser erbium glass': ['fraxel', 'resurfx', 'laser 1550nm', 'laser não ablativo', 'sellas 1550', 'mosaic', 'frax 1550', 'lux1540', 'palomar 1540'],
    'laser nd yap': ['prodeep', 'laser 1340nm', 'etherea 1340', 'rejuvenescimento capilar 1340'],
    'laser thulium': ['lavieen', 'bb laser', 'lasemd', 'lasemd ultra', 'laser de lavagem', 'pele de porcelana', 'moxi', 'fraxel dual 1927', 'frax 1940', 'laser 1927nm', 'laser de tulio', 'thulium laser'],
    
    // 💥 PICOSSEGUNDOS (PICO)
    'laser picossegundos': ['picosure', 'picoway', 'discovery pico', 'laser picossegundos', 'pico laser', 'picoplus', 'picocare', 'starwalker pqx', 'pico genesis', 'enlighten', 'pico clear', 'picosure pro'],
    
    // 🖤 Q-SWITCHED (NANOSSEGUNDOS)
    'laser q-switched': ['acroma', 'spectra', 'vektra', 'hollywood peel', 'black peel', 'medlite c6', 'revlite si', 'starwalker maqx', 'pastelle', 'helios iii', 'lucid q-ptp', 'laser toning', 'spectra xt', 'hollywood spectra', 'q-switched nd yag'],
    
    // 🩸 VASCULAR E DEPILAÇÃO (LONG PULSE & COLORIDOS)
    'laser nd yag': ['nd yag 1064nm', 'zye vascular', 'laser para telangiectasia', 'excel v', 'gentleyag', 'aerolase neo', 'clarity ii', 'fotona nd yag', 'nd yag pulso longo', 'genesis laser'],
    'laser vascular vbeam': ['vbeam perfecta', 'vbeam prima', 'dye laser', 'laser para rosácea', 'pulsed dye laser', 'pdl', 'cynergy'],
    'laser ktp e amarelo': ['laser 532nm', 'laser 577nm', 'laser para manchas vasculares', 'quadrostar proyellow', 'dermav', 'advatx', 'laser amarelo', 'excel v ktp'],
    'laser alexandrite': ['depilação alexandrite', 'gentlelase', 'apogee', 'clarity alexandrite', 'splendor x', 'motus ax', 'elite iq', 'epicarea', 'laser 755nm'],
    'laser de diodo': ['depilação a laser diodo', 'lightsheer', 'lightsheer duet', 'lightsheer desire', 'soprano titanium', 'soprano ice', 'soprano platinum', 'vectus', 'milesman', 'mediostar', 'crystal 3d', 'galaxy fiber'],
    'laser rubi': ['laser 694nm', 'remoção de tatuagem rubi', 'sinon', 'tatoostar', 'ruby star', 'q-clear'],
    
    // 🌈 LUZ INTENSA PULSADA (BBL / IPL)
    'luz intensa pulsada': ['ipl', 'luz pulsada', 'lumecca', 'bbl hero', 'etherea ipl', 'm22', 'stellar m22', 'nordlys', 'icon ipl', 'venus versa', 'lyra ipl', 'maxg', 'broadband light', 'limelight'],
    
    // 🔊 ULTRASSOM (HIFU / SUPERB)
    'ultrassom microfocado': ['ultraformer', 'ultraformer 3', 'ultraformer iii', 'ultraformer mpt', 'ultherapy', 'liftera', 'hifu', 'accutyte', 'doublo', 'utims', 'v-max', 'hipro', 'sofwave', 'superb technology'],
    'ultrassom macrofocado': ['scizer', 'liposonix', 'quebra de gordura por ultrassom', 'ultrafocus', 'hifu corporal'],
    
    // ⚡ RADIOFREQUÊNCIA (AGULHADA E INJETÁVEL)
    'radiofrequência microagulhada': ['morpheus8', 'potenza', 'agnis', 'scarlet rf', 'secret rf', 'sylfirm x', 'endymed intensif', 'vivace', 'genius rf', 'intracel', 'infinit rf', 'voluderm'],
    'radiofrequência subdérmica': ['profound rf', 'facetite', 'bodytite', 'accutite', 'agnes rf', 'thermitight', 'thermirf'],
    
    // 🌡️ RADIOFREQUÊNCIA (NÃO INVASIVA)
    'radiofrequência convencional': ['hertix', 'freeze', 'vênus legacy', 'accent prime', 'thermage', 'thermage flx', 'exilis ultra 360', 'trusculpt', 'nuera tight', 'forma', 'vela shape', 'vanquish me', 'tripollar', 'evoke'],
    'radiofrequência fracionada ablacao': ['fraxx', 'wavetronic', 'sublative rf', 'emmatrix', 'venus viva'],
    
    // ❄️ CRIOTERAPIA
    'criolipólise de sucção': ['coolsculpting', 'coolsculpting elite', 'clatuu alpha', 'cristal cryolipolysis', 'zeltiq', 'cooltech', 'congelamento de gordura'],
    'criolipólise de placas': ['criodermis', 'asgard vc10', 'coolplas', 'criolipolise sem sucção'],
    
    // 🌊 CHOQUE E CAMPO MAGNÉTICO
    'ondas de choque': ['thork', 'x-wave', 'zwave', 'cellutone', 'ondas acústicas para celulite', 'd-actor'],
    'campo eletromagnético': ['emsculpt neo', 'cmslim', 'estimulação muscular', 'cooltone', 'tesla former', 'trusculpt flex', 'zeta', 'z-field'],
    
    // ⚡ PLASMA E OUTROS
    'jato de plasma': ['plasma pen', 'eletrocautério estético', 'plasma fibroblast', 'plexr', 'neogen', 'plasmage', 'opus plasma', 'jett plasma'],
    'eletrolifting': ['galvanopuntura', 'tratamento de rugas com corrente'],
    'carboxiterapia': ['carbox corporal', 'carbox facial', 'infusão de co2'],
    'ozonioterapia estética': ['ozônio para gordura', 'ozônio para celulite'],
    'hidradermabrasão': ['hydrafacial', 'aquapure', 'peeling de água', 'dermaclear'],
    'microdermoabrasão': ['peeling de diamante', 'peeling de cristal'],
    'ledterapia': ['fotobiomodulação', 'máscara de led', 'luz azul acne', 'healite'],
    'endermologia': ['lpg', 'vacuoterapia', 'massageador a vácuo', 'vela shape 3'],
    'pressoterapia': ['drenagem pneumática', 'botas de compressão'],

  // --- 🔪 CIRURGIA PLÁSTICA, ALTA DEFINIÇÃO E CIRURGIAS A LASER ---
    
    // 🪚 CONTORNO CORPORAL E LIPOASPIRAÇÃO (CLÁSSICA E A LASER)
    'lipoaspiração hd': ['lipo de alta definição', 'lipo lad', 'lipo vlaser', 'lipoescultura hd', 'ugraft'],
    'lipoaspiração convencional': ['vibrolipo', 'hidrolipo com corte', 'minilipo'],
    'lipoaspiração a laser': ['laserlipólise', 'lipo a laser', 'smartlipo', 'slimlipo', 'fotona tightsculpting', 'lipo laser'],
    'retração de pele a plasma': ['renuvion', 'j-plasma', 'argoplasma', 'retração de pele pós lipo', 'plasma de hélio'],
    'radiofrequência subdérmica cirúrgica': ['bodytite', 'facetite', 'necktite', 'accutite', 'lipo com radiofrequência'],
    'abdominoplastia': ['dermolipectomia', 'mini abdominoplastia', 'abdominoplastia a laser'],

    // 🍈 MAMAS
    'mamoplastia de aumento': ['prótese de silicone', 'implante de mama', 'silicone recuperação rápida', 'r24r'],
    'mamoplastia redutora': ['redução de mama', 'mastopexia', 'mastopexia com alça muscular', 'mastopexia a laser', 'lifting de mama sem corte'],
    'explante de silicone': ['remoção de prótese', 'doença do silicone', 'cápsula do silicone'],
    
    // 👁️ OLHOS E TERÇO SUPERIOR
    'blefaroplastia superior': ['cirurgia de pálpebras', 'olhar cansado', 'excesso de pele nos olhos'],
    'blefaroplastia inferior': ['bolsas nos olhos', 'olheira cirúrgica'],
    'blefaroplastia a laser': ['blefaro a laser', 'cirurgia de pálpebra a laser', 'corte a laser pálpebra', 'blefaroplastia sem corte', 'plexr pálpebra', 'madonna lift'],
    'brow lift': ['lifting de sobrancelha', 'castanhares', 'brow lift a laser', 'endoscopia de sobrancelha'],
    
    // 🎭 FACE E PESCOÇO (LIFTING E ENDOLASER)
    'facelift': ['ritidoplastia', 'lifting facial cirúrgico', 'minilifting'],
    'deep plane facelift': ['lifting facial profundo', 'rejuvenescimento cirúrgico total', 'smas facelift'],
    'endolaser facial': ['endolift', 'laser endovenoso facial', 'laser subcutâneo', 'lifting a laser', 'fio de laser', 'fotona smooth facial', 'endolight'],
    'lipo de papada cirúrgica': ['lipoaspiração de submento', 'lipo de queixo'],
    'lipo de papada a laser': ['endolaser de papada', 'lipo laser submento', 'endolift papada', 'emagrecimento facial a laser'],
    'bichectomia': ['remoção da bola de bichat', 'afinar o rosto', 'bichectomia a laser'],
    
    // 👃 NARIZ, ORELHA E MENTO
    'rinoplastia': ['cirurgia de nariz', 'rinoplastia estruturada', 'rinoplastia ultrassônica', 'piezo rinoplastia'],
    'rinoplastia a laser': ['afinamento de nariz a laser', 'rinomodelação fotona', 'laser no nariz'],
    'otoplastia': ['cirurgia de orelha de abano', 'otoplastia a laser', 'otoplastia sem corte', 'earshut'],
    'mentoplastia': ['cirurgia de queixo', 'prótese de mento', 'avanço de mento'],
    'lobuloplastia': ['correção de orelha rasgada', 'costurar lóbulo'],
    
    // 🍑 GLÚTEOS
    'gluteoplastia': ['prótese de glúteo', 'enxerto de gordura no bumbum', 'brazilian butt lift', 'bbl cirurgia'],
    'endolaser corporal': ['endolift glúteo', 'retração de celulite a laser', 'subcisão a laser para celulite', 'cellulaze'],
    
    // 🌸 CIRURGIA ÍNTIMA
    'ninfoplastia': ['labioplastia cirúrgica', 'redução de pequenos lábios'],
    'ninfoplastia a laser': ['cirurgia íntima a laser', 'labioplastia a laser', 'corte a laser região íntima'],
    'rejuvenescimento íntimo a laser': ['monalisa touch', 'laser vaginal', 'fotona íntimo', 'estreitamento vaginal a laser', 'laser de co2 íntimo', 'atrófia vaginal a laser'],
    
    // 🩸 VASCULAR CIRÚRGICO E HIPERIDROSE
    'cirurgia vascular a laser': ['endolaser varizes', 'evlt', 'ablação venosa a laser', 'cirurgia de varizes a laser', 'secagem de varizes a laser'],
    'tratamento de hiperidrose a laser': ['lipoaspiração axilar a laser', 'remoção de glândulas de suor a laser', 'miradry'],

    // --- 💇 CAPILAR E TRICOLOGIA ---
    'transplante capilar fue': ['implante capilar sem cicatriz'],
    'transplante capilar fut': ['transplante de tira capilar'],
    'mmp capilar': ['microinfusão de medicamentos na pele', 'mesoterapia capilar'],
    'microagulhamento capilar': ['dermaroller no couro cabeludo'],
    'rigenera': ['regeneração capilar por células tronco'],
    'led capilar': ['capacete de led', 'laser de baixa potência para queda'],

    // --- 🌿 ESTÉTICA AVANÇADA E COMPLEMENTAR ---
    'limpeza de pele': ['limpeza profunda', 'extração de cravos'],
    'peeling de fenol': ['fenol profundo', 'fenol localizado'],
    'peeling químico médio': ['peeling de tca', 'peeling de ata'],
    'peeling químico superficial': ['peeling de glicólico', 'peeling de mandélico', 'peeling de retinoico'],
    'dermaplaning': ['raspagem facial com lâmina'],
    'microagulhamento ipca': ['indução percutânea de colágeno'],
    'drenagem linfática': ['drenagem pós operatório', 'método renata frança'],
    'massagem modeladora': ['massagem redutora', 'lipo massagem'],
    'liberação miofascial': ['massagem para tecidos profundos'],
    'maderoterapia': ['terapia com madeira', 'massagem com pantalas'],
    'terapia neural': ['tratamento regenerativo dor e estética'],
    'soroterapia': ['iv therapy', 'soro da beleza', 'vitamina na veia'],
    'bb glow': ['camuflagem de pele', 'efeito base'],
    'micropigmentação de sobrancelha': ['microblading', 'fio a fio'],
    'micropigmentação labial': ['lip tint semipermanente'],
    'micropigmentação capilar': ['camuflagem de calvície'],
    'camuflagem de estrias': ['tatuagem para estrias'],

    "ajuste_de_modiolo": ['modíolo', 'canto da boca caído', 'músculo risório', 'rugas de expressão no modíolo'],
    'escultura de arco do cupido': ['arco do cupido', 'v do lábio', 'filtro labial', 'definição de arco do cupido'],
    'preenchimento de tubérculo labial': ['tubérculo central', 'volume no centro do lábio', 'lábio de boneca'],
    'arqueamento de cauda de sobrancelha': ['cauda da sobrancelha', 'sobrancelha caída', 'fox eyes ponta'],
    'estética de lóbulo de orelha': ['lóbulo da orelha murcho', 'orelha rasgada', 'preenchimento de lóbulo', 'rejuvenescimento de orelha'],
    'correção de sulco labiomentoniano': ['sulco labiomentoniano', 'vinco abaixo do lábio', 'queixo dividido'],
    'suporte de goteira lacrimal': ['goteira lacrimal', 'canal lacrimal', 'vale lacrimal', 'olheira profunda interna'],
    'projeção de eminência malar': ['eminência malar', 'osso da bochecha', 'malar superior', 'malar lateral'],
    'definição de ângulo da mandíbula': ['ângulo da mandíbula', 'goníaco', 'ramo da mandíbula', 'mandíbula quadrada'],
    'trabalho de músculo platisma': ['bandas platismais', 'cordas no pescoço', 'músculo do pescoço', 'neck lifting nefertiti'],
    'preenchimento de fossa temporal': ['têmporas fundas', 'fossa temporal', 'rosto cadavérico', 'lateral da testa'],

    // --- 🎯 ANATOMIA SNIPER (MICRO-SEGMENTAÇÃO CORPORAL) ---
    'gordura pré-axilar': ['gordura axilar', 'gordura perto da mama', 'gordura que sai no sutiã', 'prega axilar'],
    'estética de dorso das mãos': ['mãos envelhecidas', 'veias saltadas na mão', 'dorso da mão murcho', 'manchas nas mãos'],
    'definição de linha alba': ['linha alba', 'entrada da barriga', 'definição abdominal central', 'six pack'],
    'tratamento de gordura infraumbilical': ['gordura abaixo do umbigo', 'pochete', 'abdômen inferior'],
    'escultura de crista ilíaca': ['crista ilíaca', 'osso do quadril', 'v da barriga', 'flanco inferior'],
    'gordura suprapatelar': ['gordura no joelho', 'acima do joelho', 'joelho gordo', 'flacidez no joelho'],
    'fossa supraclavicular': ['saboneteira', 'osso da saboneteira murcho', 'preenchimento de saboneteira'],
    'bananinha glútea': ['gordura embaixo do bumbum', 'dobra glútea inferior', 'bananinha'],
    'interno de braço': ['tchauzinho', 'face interna do braço', 'flacidez braquial'],
    'monte de vênus': ['gordura pubiana', 'monte de vênus proeminente', 'estética do púbis'],
    'região sacra': ['gordura no final das costas', 'região lombar baixa', 'covinha das costas'],
    'fossa poplítea': ['atrás do joelho', 'retenção atrás do joelho', 'circulação poplítea'],
    'tendão de aquiles estético': ['tornozelo grosso', 'definição de tornozelo', 'gordura no calcanhar'],

    // --- 🎯 SEGMENTAÇÃO DE TERÇOS E PLANOS ---
    'terço médio facial': ['maçã do rosto', 'sustentação facial central', 'reestruturação de terço médio'],
    'terço inferior facial': ['contorno de rosto baixo', 'mandíbula e queixo', 'linha do bumbum facial'],
    'terço superior facial': ['testa e olhos', 'olhar cansado', 'arqueamento total'],
    'plano profundo (deep plane)': ['deep plane', 'camada smas', 'reposicionamento muscular', 'estética profunda']

  },
  tratamentos_pt: {
    // --- 🎭 ENVELHECIMENTO FACIAL (LINHAS E RUGAS) ---
    'rugas na testa': ['rugas na testa', 'linhas na testa', 'rugas frontais', 'testa franzida'],
    'glabela': ['rugas entre as sobrancelhas', 'bravo', 'cara de brava', 'vinco na glabela'],
    'pés de galinha': ['rugas ao redor dos olhos', 'rugas orbiculares', 'pés de galinha'],
    'rugas infraorbitais': ['rugas embaixo dos olhos', 'linhas finas nos olhos'],
    'código de barras': ['rugas acima da boca', 'rugas periorais', 'rugas de fumante'],
    'bigode chinês': ['sulco nasogeniano', 'dobra do nariz à boca', 'bigode chines'],
    'linhas de marionete': ['rugas de marionete', 'canto da boca caído', 'linhas de tristeza'],
    'rugas no pescoço': ['colar de vênus', 'linhas no pescoço', 'pescoço enrugado'],
    'rugas no colo': ['rugas no decote', 'sleep lines', 'amassado no colo'],
    'linhas de expressão': ['linhas finas', 'primeiras rugas', 'prevenção de rugas'],

    // --- 📐 FLACIDEZ E CONTORNO (FACIAL) ---
    'flacidez facial': ['rosto derretido', 'pele do rosto caída', 'perda de firmeza facial'],
    'bochecha de buldogue': ['jowls', 'bochecha caída', 'perda do contorno da mandíbula'],
    'papada': ['queixo duplo', 'gordura no submento', 'papada de gordura', 'papada de pele'],
    'olheiras profundas': ['olheira funda', 'sulco lacrimal', 'olho encovado'],
    'olheiras escuras': ['olheira roxa', 'olheira pigmentada', 'olheira marrom'],
    'bolsas nos olhos': ['bolsa de gordura nos olhos', 'olhos inchados'],
    'pálpebra caída': ['flacidez de pálpebra', 'excesso de pele nos olhos', 'ptose palpebral'],
    'perda de volume facial': ['rosto murcho', 'maçã do rosto caída', 'perda de gordura facial'],

    // --- ☁️ MANCHAS E PIGMENTAÇÃO ---
    'melasma': ['melasma resistente', 'mancha de gravidez', 'hiperpigmentação facial'],
    'sardas': ['efélides', 'sardas no rosto', 'manchas de sardas'],
    'manchas de sol': ['lentigo solar', 'manchas senis', 'manchas de sol na mão'],
    'manchas pós acne': ['mancha vermelha de espinha', 'mancha escura de acne'],
    'hiperpigmentação pós inflamatória': ['mancha após ferida', 'mancha de queimadura'],
    'ceratose actínica': ['manchas ásperas de sol', 'lesões pré-cancerosas solares'],
    'vitiligo estético': ['manchas brancas na pele', 'perda de pigmento'],

    // --- 🌋 ACNE E TEXTURA DA PELE ---
    'acne ativa': ['espinhas inflamadas', 'acne vulgar', 'espinha interna', 'cravos e espinhas'],
    'acne adulta': ['acne mulher adulta', 'acne hormonal'],
    'cicatrizes de acne': ['marcas de espinha', 'buracos no rosto', 'pele de laranja acne'],
    'poros dilatados': ['poros abertos', 'poros sujos', 'como fechar os poros'],
    'pele oleosa': ['brilho excessivo no rosto', 'oleosidade no nariz', 'pele sebosa'],
    'pele seca': ['pele descamando', 'pele ressecada', 'pele esticando'],
    'pele sensível': ['rosácea', 'couperose', 'pele avermelhada', 'sensibilidade facial'],
    'textura irregular': ['pele áspera', 'relevo da pele ruim', 'pele sem brilho'],
    'milium': ['pontinhos brancos no rosto', 'bolinhas de queratina'],
    'queratose pilar': ['bolinhas no braço', 'pele de galinha'],

    // --- ⚖️ GORDURA LOCALIZADA E MEDIDAS ---
    'gordura abdominal': ['gordura na barriga', 'estômago alto', 'pneu na barriga'],
    'flancos': ['pneuzinhos laterais', 'gordura na cintura'],
    'gordura nas costas': ['gordura do sutiã', 'dobras nas costas'],
    'gordura no braço': ['gordura do tchauzinho', 'braço gordo'],
    'gordura nas coxas': ['gordura no interno de coxa', 'coxas grossas'],
    'gordura no joelho': ['gordura acima do joelho'],
    'bananinha': ['gordura embaixo do bumbum', 'bananinha glútea'],
    'culote': ['gordura no culote', 'lateral da coxa'],
    'gordura axilar': ['gordura perto da axila', 'gordura do peito'],

    // --- 🍊 CELULITE E FLACIDEZ CORPORAL ---
    'celulite': ['furinhos na pele', 'aspecto casca de laranja', 'fibrose de celulite'],
    'celulite infectada': ['lipedema', 'dor na gordura', 'celulite dolorida'],
    'flacidez corporal': ['pele solta no corpo', 'flacidez de braço', 'flacidez pós parto'],
    'umbigo triste': ['flacidez em cima do umbigo', 'pele rugosa na barriga'],
    'estrias brancas': ['estrias antigas', 'estrias largas'],
    'estrias vermelhas': ['estrias novas', 'estrias de gravidez'],

    // --- 💉 VASCULAR E CIRCULAÇÃO ---
    'vasinhos no rosto': ['veias finas no rosto', 'vasos no nariz'],
    'vasinhos nas pernas': ['telangiectasias', 'aranhas vasculares', 'microvarizes'],
    'retenção de líquidos': ['inchaço nas pernas', 'edema', 'corpo inchado'],
    'rosácea': ['rosto sempre vermelho', 'vasos de rosácea'],

    // --- 💇 CAPILAR E COURO CABELUDO ---
    'calvície masculina': ['alopecia androgenética', 'entradas no cabelo', 'careca'],
    'queda de cabelo feminina': ['cabelo ralo', 'perda de volume capilar', 'eclúvio telógeno'],
    'falha na barba': ['barba rala', 'buracos na barba'],
    'caspa': ['seborreia', 'couro cabeludo descamando', 'coceira na cabeça'],
    'cabelo quebradiço': ['fios fracos', 'cabelo que não cresce'],

    // --- 👙 ESTÉTICA ÍNTIMA ---
    'escurecimento íntimo': ['virilha escura', 'manchas na região íntima'],
    'flacidez íntima': ['grandes lábios murchos', 'frouxidão vaginal'],
    'ressecamento vaginal': ['atrofia vaginal', 'dor na relação estético'],

    // --- 🚑 CICATRIZES E OUTROS ---
    'cicatriz cirúrgica': ['cicatriz de cesárea', 'cicatriz de abdominoplastia', 'quelóide'],
    'cicatriz de queimadura': ['marca de queimadura na pele'],
    'hiperidrose': ['suor excessivo nas axilas', 'suor nas mãos'],
    'tatuagem indesejada': ['remover tatuagem', 'apagar micropigmentação'],
    'remoção de verrugas': ['acrocórdons', 'bolinhas de carne no pescoço'],

    // --- 🎯 ESQUADRÃO SNIPER: QUEIXAS ANATÔMICAS MILIMÉTRICAS ---
    "perda_de_arco_do_cupido": ['lábio sem definição', 'v do lábio sumindo', 'boca sem contorno'],
    'lóbulo de orelha murcho': ['orelha enrugada', 'lóbulo fino', 'orelha que não segura brinco'],
    'sulco labiomentoniano': ['vinco no queixo', 'queixo dividido', 'ruga abaixo do lábio'],
    'fossa temporal funda': ['têmpora funda', 'rosto de caveira', 'emagrecimento facial excessivo'],
    'gordura pré-axilar': ['gordura que pula do sutiã', 'gordura na frente da axila', 'dobra na axila'],
    'mãos envelhecidas': ['veias saltadas nas mãos', 'mão de velha', 'dorso da mão sem volume'],
    'fossa supraclavicular funda': ['saboneteira funda', 'osso do pescoço aparente'],
    'gordura suprapatelar': ['gordura acima do joelho', 'joelho com pele sobrando'],
    'bananinha glútea': ['gordura abaixo do bumbum', 'dobra dupla no bumbum'],
    'monte de vênus proeminente': ['púbis inchado', 'gordura no monte de vênus'],
    'flacidez de interno de coxa': ['coxa mole por dentro', 'pele sobrando nas pernas'],

    // --- 🧬 CAMADA MOLECULAR: TRATAMENTOS POR ATIVOS (Skin-Intellectual) ---
    'tratamento com ácido tranexâmico': ['tranexâmico para melasma', 'injeção para manchas'],
    'estimulação com glutationa': ['clareamento com glutationa', 'antioxidante injetável'],
    'rejuvenescimento com retinol': ['skincare com retinol', 'ácido retinóico rugas'],
    'hidratação com niacinamida': ['vitamina b3 para pele', 'controle de poros niacinamida'],
    'clareamento com cysteamine': ['cisteamina para melasma', 'creme para manchas fortes'],
    'uso de hidroquinona': ['medo de hidroquinona', 'efeito rebote hidroquinona'],
    'suplementação de colágeno verisol': ['colágeno que funciona', 'tomar colágeno para pele'],

    // --- ⚠️ GESTÃO DO MEDO: COMPLICAÇÕES E RECUPERAÇÃO ---
    'erro no preenchimento': ['boca torta', 'preenchimento com caroço', 'nódulo de ácido hialurônico'],
    'efeito tyndall': ['preenchimento azulado', 'olheira azul após preencher'],
    'ptose pós botox': ['pálpebra caída após botox', 'sobrancelha pesada botox'],
    'edema persistente': ['rosto inchado que não desce', 'retenção após procedimento'],
    'fibrose pós lipo': ['caroço após lipoaspiração', 'barriga irregular pós cirurgia'],
    'efeito rebote laser': ['mancha que voltou pior', 'rosto queimado por laser'],
    'necrose estética': ['mancha roxa após preenchimento', 'dor forte após injetável'],
    'biofilme': ['infecção após preenchimento', 'inflamação tardia'],

    // --- 🔥 GATILHOS EMOCIONAIS E GÍRIAS DE BUSCA ---
    'rosto cansado': ['olhar de cansaço', 'cara de acabada', 'tirar o aspecto cansado'],
    'rosto derretido': ['efeito bulldog', 'pele caindo', 'bochecha caída'],
    'bumbum na nuca': ['levantar o bumbum', 'glúteo firme', 'projeto bumbum'],
    'barriga negativa': ['abdômen definido', 'barriga sem dobra'],
    'efeito filtro instagram': ['pele perfeita', 'rosto de porcelana', 'efeito photoshop real'],
    'boca de pato': ['medo de boca de pato', 'preenchimento labial natural'],
    'rosto de travesseiro': ['pillow face', 'excesso de preenchimento', 'rosto inchado de botox']
  
  },
// ==========================================
  // 🎯 MAPA ANATÔMICO E MICRO-SEGMENTAÇÃO (O Mapa do Tesouro)
  // Dores, Gírias, Gordurinhas e Emagrecimento por Região
  // ==========================================
  anatomia_pt: {
    // --- 👱‍♀️ FACE E MICRO-REGIÕES FACIAIS ---
    'face_geral': ['face', 'rosto', 'facial', 'pele do rosto', 'contorno facial', 'harmonização facial', 'emagrecimento facial', 'rosto gordo', 'afinar o rosto', 'bichectomia'],
    'terco_superior': ['testa', 'fronte', 'glabela', 'sobrancelha', 'têmporas', 'rosto encovado', 'têmpora funda'],
    'regiao_periorbital': ['olhos', 'olheiras', 'pálpebras', 'pés de galinha', 'goteira lacrimal', 'bolsas embaixo dos olhos', 'olhar cansado', 'pálpebra caída'],
    'terco_medio': ['maçã do rosto', 'malar', 'zigomático', 'bochechas', 'bochecha caída', 'bigode chinês', 'centro do rosto', 'top model look'],
    'nariz': ['nariz', 'dorso nasal', 'ponta do nariz', 'nariz largo', 'nariz batata', 'aba nasal', 'rinomodelação', 'afinar nariz'],
    'regiao_perioral_e_labios': ['boca', 'lábios', 'código de barras', 'arco do cupido', 'canto da boca', 'linhas de marionete', 'sorriso gengival', 'boca torta', 'lábio fino'],
    'terco_inferior_e_mandibula': ['mandíbula', 'linha da mandíbula', 'maxilar', 'queixo', 'mento', 'bochecha de buldogue', 'jowls', 'contorno do queixo', 'queixo duplo', 'rosto quadrado', 'mandíbula marcada'],

    // --- 🧣 PESCOÇO, COLO E NUCA ---
    'papada_e_submento': ['papada', 'submento', 'gordura submentoniana', 'queixo duplo', 'papo', 'gordura embaixo do queixo', 'pescoço gordo', 'lipo de papada', 'lipo de queixo'],
    'pescoco': ['pescoço', 'rugas no pescoço', 'colar de vênus', 'flacidez no pescoço', 'pescoço de peru', 'bandas do platisma', 'cordas no pescoço'],
    'colo': ['colo', 'decote', 'rugas no colo', 'marcas de dormir', 'sleep lines', 'manchas no peito', 'flacidez no decote', 'rejuvenescimento do colo'],
    'nuca_e_cervical': ['nuca', 'gordura na nuca', 'cupim', 'giba', 'giba de búfalo', 'gordura cervical', 'dorso cervical'],

    // --- 👙 TRONCO, ABDÔMEN E COSTAS ---
    'abdomen_geral': ['abdômen', 'barriga', 'abdominal', 'gordura na barriga', 'flacidez abdominal', 'pós-gestação', 'definição abdominal', 'barriga chapada', 'emagrecer barriga', 'lipo', 'abdominoplastia', 'secagem de barriga'],
    'abdomen_inferior': ['pochete', 'pé da barriga', 'gordura infraumbilical', 'barriguinha', 'gordura pélvica', 'gordurinha embaixo do umbigo', 'barriga avental', 'dobra na barriga'],
    'abdomen_superior': ['estômago alto', 'gordura supraumbilical', 'dobra do estômago', 'barriga estufada'],
    'umbigo': ['umbigo', 'umbigo triste', 'flacidez no umbigo', 'umbigo caído', 'sobra de pele no umbigo', 'umbigo de lipo'],
    'flancos_e_cintura': ['flancos', 'pneuzinhos', 'gordura flancos', 'gordura lateral', 'cintura', 'afinar cintura', 'curva da cintura', 'gordura do cós da calça', 'cintura fina'],
    'costas_e_lombar': ['costas', 'gordura nas costas', 'dobras nas costas', 'gordura do sutiã', 'dobrinha do sutiã', 'lombar', 'gordura sacral', 'flanco traseiro', 'pneu nas costas', 'costas largas'],
    'mamas_e_axilas': ['peito', 'seios', 'mamas', 'gordura na axila', 'gordurinha do sutiã', 'prega axilar', 'gordura pré-axilar', 'gordura no suvaco', 'ginecomastia', 'peito masculino gordo'],

    // --- 🦵 MEMBROS INFERIORES E GLÚTEOS ---
    'gluteos': ['glúteos', 'bumbum', 'nádegas', 'levantamento de glúteos', 'volume glúteos', 'estética glúteos', 'celulite glúteos', 'bumbum na nuca', 'bumbum caído', 'flacidez no bumbum', 'aumentar bumbum', 'empinar bumbum'],
    'bananinha_glutea': ['bananinha', 'gordura embaixo do bumbum', 'dobra glútea', 'dobrinha do bumbum', 'gordura subglútea', 'bumbum duplo'],
    'depressao_trocanterica': ['hip dips', 'buraco na lateral do quadril', 'depressão lateral', 'afundamento no bumbum', 'quadril afundado', 'buraco na perna'],
    'coxas_geral': ['coxas', 'pernas', 'gordura nas pernas', 'emagrecer pernas', 'celulite nas pernas', 'flacidez nas pernas', 'pernas grossas', 'perna flácida'],
    'coxa_interna': ['interno de coxa', 'coxa roçando', 'atrito entre pernas', 'gordura no meio da perna', 'flacidez na virilha', 'coxa grossa', 'assadura nas pernas', 'vão entre as pernas'],
    'culote': ['culote', 'gordura lateral da coxa', 'quadril largo', 'cartucheiras', 'gordura no quadril', 'diminuir quadril'],
    'joelhos': ['joelhos', 'gordura no joelho', 'gordurinha acima do joelho', 'gordura suprapatelar', 'joelho gordo', 'flacidez no joelho', 'joelho enrugado', 'rosto no joelho'],
    'panturrilha_e_tornozelo': ['panturrilha', 'batata da perna', 'tornozelo', 'tornozelo grosso', 'cankles', 'gordura no tornozelo', 'tendão de aquiles estético', 'afinar tornozelo'],

    // --- 💪 MEMBROS SUPERIORES ---
    'bracos': ['braços', 'tchauzinho', 'flacidez nos braços', 'gordura no braço', 'braço gordo', 'emagrecer braço', 'interno do braço', 'tríceps flácido', 'braço de polenta', 'braço roliço'],
    'maos': ['mãos', 'dorso das mãos', 'mão envelhecida', 'mão de velha', 'veias nas mãos', 'manchas nas mãos', 'rejuvenescimento das mãos', 'mão ossuda'],

    // --- 🌸 REGIÃO ÍNTIMA ---
    'regiao_intima': ['região íntima', 'estética íntima', 'clareamento íntimo', 'rejuvenescimento íntimo', 'flacidez íntima', 'virilha escura', 'manchas na virilha', 'clarear virilha'],
    'grandes_labios': ['grandes lábios', 'lábios vaginais', 'flacidez nos grandes lábios', 'murchamento íntimo', 'preenchimento íntimo', 'lábio vaginal escuro', 'ninfoplastia'],
    'monte_de_venus': ['monte de vênus', 'capô de fusca', 'gordura no púbis', 'gordura na região íntima', 'púbis alto', 'lipo de púbis', 'gordura pubiana'],

    // --- 📉 EMAGRECIMENTO E CONTORNO CORPORAL GERAL ---
    'emagrecimento_geral': ['emagrecimento', 'perda de peso', 'perder gordura', 'emagrecer rápido', 'redução de medidas', 'perder barriga', 'queimar gordura', 'secagem de gordura', 'lipólise', 'déficit calórico estético', 'perder medida', 'secar rápido'],
    'tipos_de_gordura': ['gordura localizada', 'gordurinha', 'gordura resistente', 'gordura teimosa', 'gordura dura', 'gordura mole', 'gordura visceral', 'fibrose', 'caroço de gordura'],
    'retencao_e_lipedema': ['retenção de líquido', 'corpo inchado', 'inchaço', 'edema', 'lipedema', 'gordura dolorida', 'perna pesada', 'celulite inflamatória', 'linfedema', 'drenagem linfática', 'desinchar']
  },
// ==========================================
  // 1. INTENÇÃO DE COMPRA E PSICOLOGIA DO CONSUMIDOR (OMNI)
  // ==========================================
   intencao_compra_pt: {

    'valor_e_investimento': [

      'preço', 'valor', 'custo', 'quanto custa', 'orçamento', 'investimento', 'tabela de preços',

      'promoção', 'pacote', 'custo-benefício', 'formas de pagamento', 'parcelamento',

      'financiamento estético', 'cupom de desconto', 'valor da sessão', 'preço médio',

      'estética barata', 'clínica popular', 'preço botox 2024', 'preço bioestimulador',

      'combo estética', 'black friday estética', 'oferta relâmpago', 'preço justo'

    ],

    'confianca_e_autoridade': [

      'melhor clínica', 'especialista em', 'melhor médico', 'referência em', 'onde fazer',

      'indicação', 'avaliações', 'doutor', 'clínica de luxo', 'médico das famosas',

      'atendimento premium', 'CRM médico', 'clínica licenciada', 'especialista RQE',

      'dermatologista SBD', 'clínica premiada', 'melhor biomédico', 'esteta de confiança',

      'clínica com nota máxima', 'médico renomado', 'autoridade em harmonização'

    ],

    'prova_social_e_vlog': [

      'antes e depois', 'fotos reais', 'resultado', 'depoimentos', 'casos reais',

      'vlog procedimento', 'diário de recuperação', 'minha experiência com', 'resenha',

      'fotos dia a dia', 'quem já fez', 'resultado imediato', 'vídeo de aplicação',

      'relato real', 'fotos sem filtro', 'evolução tratamento',
    ],
// ==========================================
  // 🚨 GESTÃO DE CRISE E INTERCORRÊNCIAS (O MERCADO DO MEDO E REVERSÃO)
  // ==========================================
  complicacoes_e_intercorrencias_pt: {
    // 🧠 VISÃO DO PROFISSIONAL (Termos Técnicos, Diagnóstico e Protocolos)
    'isquemia_e_necrose': [
      'oclusão vascular', 'isquemia tecidual', 'necrose incipiente', 'sinal de livedo reticular', 
      'branqueamento após preenchimento', 'comprometimento vascular', 'obstrução arterial', 
      'amaurose pós preenchimento', 'cegueira por ácido hialurônico', 'síndrome de nicolau'
    ],
    'reacoes_tardias_e_infeccoes': [
      'etip', 'edema tardio intermitente e persistente', 'granuloma de corpo estranho', 
      'nódulo inflamatório', 'biofilme', 'infecção subclínica', 'abscesso pós preenchimento', 
      'celulite facial infecciosa', 'erisipela pós procedimento', 'rejeição de pdo'
    ],
    'complicacoes_toxina': [
      'ptose palpebral', 'ptose superciliar', 'diplopia pós botox', 'assimetria de sorriso', 
      'efeito mefisto', 'sobrancelha diabólica', 'paresia facial', 'resistência botulínica', 
      'anticorpos neutralizantes toxina'
    ],
    'lesoes_e_queimaduras': [
      'hiperpigmentação pós-inflamatória', 'pih', 'queimadura de segundo grau laser', 
      'lesão do nervo facial', 'neuropraxia', 'dano nervoso', 'efeito tyndall', 
      'migração de preenchedor', 'fibrose cicatricial intensa'
    ],
    'protocolos_de_salvamento': [
      'protocolo de hialuronidase', 'dose alta hialuronidase', 'uso de sildenafil estetica', 
      'câmara hiperbárica necrose', 'pulsoterapia com corticoide', 'algoritmo de oclusão', 
      'manejo de complicações faciais'
    ],
    // 😭 VISÃO DO PACIENTE (Sintomas, Desespero e Linguagem Leiga)
    'sintomas_fisicos_e_visuais': [
      'boca torta', 'rosto deformado', 'caroço no lábio', 'bolinha dura no preenchimento', 
      'rosto muito inchado', 'inchaço que não passa', 'mancha roxa que não sai', 
      'pele preta após preenchimento', 'dor insuportável no rosto', 'rosto quente e vermelho', 
      'pus no preenchimento', 'pálpebra caída', 'olho não fecha', 'sorriso torto'
    ],
    'medo_e_panico': [
      'medo de necrose', 'botox deu errado', 'ácido hialurônico entupiu veia', 
      'fiquei cega com preenchimento', 'preenchimento necrosou', 'rosto caindo', 
      'laser manchou meu rosto', 'queimadura de laser na perna', 'buraquinho no rosto após espinha'
    ],
    'arrependimento_e_reversao': [
      'como tirar ácido hialurônico', 'dissolver preenchimento', 'como reverter botox', 
      'botox passa logo?', 'arrepender de preenchimento labial', 'tirar boca de pato', 
      'remover fios de pdo', 'derreter ácido hialurônico', 'antídoto preenchimento'
    ],
    'consequencias_juridicas_e_conflito': [
      'processar clínica de estética', 'erro médico estética', 'indenização por erro estético', 
      'esteticista errou', 'dentista errou botox', 'advogado erro médico estética', 
      'denunciar clínica de estética', 'vítima de harmonização facial'
    ]
  },
       
  // ==========================================
  // 2. MARCAS DE INJETÁVEIS (O MAPA DAS MOLÉCULAS)
  // ==========================================
// ==========================================
  // 2. MARCAS DE INJETÁVEIS (O MAPA GLOBAL E K-BEAUTY)
  // O Dossiê Absoluto de Fármacos e Dispositivos Injetáveis
  // ==========================================
  marcas_injetaveis_pt: {
    
    // 🧬 TOXINAS BOTULÍNICAS (Oligopólio e Genéricos)
    'toxinas': [
      // Linha Americana / Europeia
      'Botox', 'Dysport', 'Xeomin', 'Jeuveau', 'Azzalure', 'Bocouture', 'Alluzience', 
      'Daxxify', 'Nuceiva', 'Vistabel', 'Myobloc',
      // Linha Asiática / K-Tox / Nacionais
      'Nabota', 'Botulift', 'Prosigne', 'Botulax', 'Innotox', 'Coretox', 'Letybo', 
      'Neuronox', 'Meditoxin', 'Liztox', 'Rentox', 'Hutox', 'Wondertox', 'Toxta', 
      'Metox', 'K-tox', 'Siax', 'Hengli', 'Lantox', 'Relatox', 'Zentox'
    ],

    // 💧 PREENCHEDORES (Ácido Hialurônico e Não-Hialurônicos)
    'preenchedores': [
      // Allergan (Juvederm)
      'Juvederm', 'Juvederm Voluma', 'Juvederm Volbella', 'Juvederm Vollure', 'Juvederm Volux', 'Juvederm Ultra XC',
      // Galderma (Restylane)
      'Restylane', 'Restylane Lyft', 'Restylane Silk', 'Restylane Kysse', 'Restylane Defyne', 'Restylane Refyne', 'Restylane Contour', 'Restylane Volyme',
      // Rennova (Nacional/Importado)
      'Rennova', 'Rennova Fill', 'Rennova Lift', 'Rennova Deep', 'Rennova Diamond', 'Rennova Ultra Deep',
      // Europeus e Premium
      'Belotero', 'Belotero Balance', 'Belotero Intense', 'Belotero Volume',
      'Teosyal', 'Teosyal RHA', 'Teosyal Redensity 2', 'Teosyal Kiss',
      'Perfectha', 'Varioderm', 'Algeness', 'Stylage', 'Saypha', 'Revanesse', 'Hylaform', 
      'Etermis', 'Neauvia', 'Princess Filler', 'Amalian', 'Aliaxin', 'Aquamid',
      // Linha Sul-Coreana (K-Beauty / Mercado Cinza e Legalizado)
      'Neuramis', 'Revolax', 'Dermalax', 'e.p.t.q.', 'Bellast', 'Chaeum', 'Tesoro', 
      'Celosome', 'Sardenya', 'Hyafilia', 'Zishel', 'Elravie', 'Rejeunesse', 'Yvoire', 'Apriline', 'Pluryal'
    ],

    // 💎 BIOESTIMULADORES E FIOS (Tracionamento e Colágeno)
    'bioestimuladores_e_fios': [
      // Ácido Poli-L-Láctico (PLLA)
      'Sculptra', 'Elleva', 'AestheFill', 'Gana Fill', 'Lenisna', 'Juvelook', 'Olidia', 'PowerFill', 'Etrebelle', 'Reborn',
      // Hidroxiapatita de Cálcio (CaHA)
      'Radiesse', 'Radiesse Plus', 'Diamond', 'Facetem', 'Crystalys',
      // Policaprolactona (PCL) e Híbridos
      'Ellanse', 'HarmonyCa', 'Gouri',
      // Colágeno Injetável
      'Nithya', 'Linerase',
      // Fios de Sustentação e PDO
      'Fio Silhouette', 'Fios de PDO', 'i-Thread', 'Mint Lift', 'Miracu', 'Fios Aptos', 
      'Fios Double Needle', 'Fios Cog', 'Fios Espiculados', 'Fios Parafuso', 'Fios Matrix', 
      'White Rose', 'Medikoh', 'NeoGenesis', 'Croquis', 'Fios de sustentação absorb'
    ],

    // ✨ BIOREMODELADORES, SKINBOOSTERS E PDRN (DNA de Salmão)
    'bioremodeladores_e_skin': [
      // Bioremodeladores puros
      'Profhilo', 'Profhilo Structura', 'Karisma', 'Viscoderm',
      // Skinboosters (Hidratação Profunda)
      'Restylane Vital', 'Restylane Vital Light', 'Volite', 'Teosyal Redensity 1', 
      'Neauvia Hydro Deluxe', 'Aquashine',
      // PDRN e Exossomos (Medicina Regenerativa)
      'Rejuran', 'Rejuran Healer', 'Rejuran S', 'Rejuran I', 'Nucleofill', 'Plinest', 
      'Lumi Eyes', 'Vitaran', 'Twac', 'Kiara Reju', 'Phillex',
      // Mesclas Clássicas de Rejuvenescimento
      'NCTF 135HA', 'Jalupro', 'RRS Hyalift', 'M-HA 10', 'Cytocare', 'H-DNA', 'Skinive', 'Xela Rederm'
    ],

    // 🔥 ESVAZIADORES (FAT DISSOLVERS), ENZIMAS E MESOTERAPIA B2B
    'mesoterapia_e_ativos': [
      // Marca Oficial Esvaziadores
      'Kybella', 'Belkyra', 'Aqualyx', 'Lipodissolve', 'Lemon Bottle', 'Lipo-Lab', 
      'Kabelline', 'V-Line', 'Dermaheal LL', 'Cincelar Plus', 'Prostrolane Inner B',
      // Mesclas e Laboratórios de Mesoterapia (Brasil e Global)
      'PB Serum', 'Lipo Enzimática', 'Desoxicolato', 'Lipossomas de Girassol', 
      'Mesohyal', 'Toskani', 'Innoaesthetics', 'Fusion Mesotherapy', 'Smart GR', 
      'Biometil', 'PHD Estetic', 'Samana', 'Cosmobeauty Injetáveis',
      // Gestão de Complicações
      'Hialuronidase', 'Liporase', 'Hialozima', 'Lidocaína'
    ]
  },
   },
// ==========================================
  // 3. FABRICANTES INTERNACIONAIS (Expansão Elite)
  // ==========================================
  fabricantes_lasers_internacionais_pt: {
    'alma_lasers': ['Alma Lasers', 'Soprano Ice', 'Soprano Titanium', 'Soprano Platinum', 'Harmony XL Pro', 'Accent Prime', 'Pixel CO2', 'Legato', 'DermaClear', 'Alma Hybrid', 'Opus Plasma'],
    'candela_syneron': ['Syneron Candela', 'GentleLase', 'GentleMax Pro', 'Vbeam Perfecta', 'PicoWay', 'Nordlys', 'Profound RF', 'Velashape III', 'Frax 1550', 'Exilis'],
    'cynosure': ['Cynosure', 'PicoSure', 'Elite IQ', 'Icon Palomar', 'SculpSure', 'Potenza RF', 'TempSure', 'Apogee', 'Revlite SI', 'PicoSure Pro'],
    'lumenis': ['Lumenis', 'LightSheer Desire', 'LightSheer Duet', 'M22', 'ResurFX', 'Splendor X', 'Acupulse', 'UltraPulse', 'LightSheer Quattro', 'Stellar M22'],
    'quanta_system': ['Quanta System', 'Discovery Pico', 'Thunder MT', 'Chrome Lase', 'Youlaser MT', 'Evo Light', 'Cyber Ho'],
    'solta_medical': ['Solta Medical', 'Thermage FLX', 'Fraxel Dual', 'Clear + Brilliant', 'Liposonix'],
    'cutera': ['Cutera', 'truSculpt iD', 'truSculpt Flex', 'Excel V+', 'Enlighten Picossegundos', 'Secret RF', 'AviClear'],
    'lutronic': ['Lutronic', 'Spectra XT', 'LaseMD Ultra', 'Clarity II', 'Genius RF', 'Hollywood Spectra', 'DermaV', 'Healite'],
    'sciton': ['Sciton', 'BBL Hero', 'BroadBand Light', 'Halo Laser', 'Joule X', 'ClearView', 'Moxi', 'Bare HR'],
    'deka': ['Deka Laser', 'SmartXide DOT', 'Motus AX', 'Onda Coolwaves', 'Luxea', 'SmartXide Touch', 'RedTouch'],
    'btl_aesthetics': ['BTL Aesthetics', 'Emsculpt Neo', 'Exilis Ultra 360', 'Emsella', 'Emface', 'Vanquish ME', 'Exion'],
    'inmode': ['InMode', 'Morpheus8', 'BodyTite', 'FaceTite', 'Evoke', 'Lumecca IPL', 'DiolazeXL', 'AccuTite', 'EmpowerRF'],
    'asclepion': ['Asclepion', 'MeDioStar', 'MCL31 Dermablate', 'QuadroStarPro', 'Juliet'],
    'venus_concept': ['Venus Concept', 'Venus Legacy', 'Venus Versa', 'Venus Bliss', 'Venus Viva', 'Venus Glow'],
    'sinclair_cocoon': ['Sinclair', 'Cocoon Medical', 'Cooltech', 'Primelase', 'Elyrion', 'Viora', 'Cooltech Define'],
    'aerolase': ['Aerolase', 'Neo Elite', 'Era Elite'],
    'sofwave_medical': ['Sofwave', 'Superb Technology', 'Synchronous Parallel Beam'],
    'jeisys_medical': ['Jeisys', 'Ultracel Q+', 'LinearZ', 'Matrix RF', 'Edge ONE'],
    'wontech': ['Wontech', 'Pastelle', 'Cosmo', 'Picocare', 'Lavieen'],
    'sincoheren': ['Sincoheren', 'Coolplas', 'Monaliza Laser', 'Razorlase']
  },

  // ==========================================
  // 4. FABRICANTES E DISTRIBUIDORES NACIONAIS (Expansão Total)
  // ==========================================
  fabricantes_lasers_nacionais_pt: {
    'vydence': ['Vydence Medical', 'Etherea MX', 'Etherea Pro', 'Acroma QS', 'DualMode', 'Inkie', 'Zye Laser', 'Plataforma Etherea'],
    'industra': ['Industra Technologies', 'Solon Multi Station', 'Eko CO2', 'Solon RF', 'Agnes RF', 'Solon Laser', 'Eko Laser'],
    'adoxy': ['Adoxy', 'Andrus Criofrequência', 'Asgard VC10', 'Hygiapulse', 'Holonyx', 'Metodologia Adoxy'],
    'tkl': ['TKL Laser', 'TKL CO2', 'TKL Diode', 'Galaxy Fiber Evo', 'Vektra QS', 'Vektra Laser'],
    'medsystems': ['Medsystems', 'Ultraformer III', 'Ultraformer MPT', 'Scizer', 'Clatuu Alpha', 'Liftera', 'Lavieen', 'Sizer', 'Classys Brasil'],
    'medisystems': ['Medisystems', 'StarWalker Fotona', 'TightSculpting', 'SkyWalker', 'Fotona 4D Brasil'],
    'pontual': ['Pontual Estética', 'Chrome Laser Brasil', 'Discovery Pico Brasil'],
    'kld': ['KLD Biosistemas', 'Ascua', 'Hertix RF', 'Lyra IPL', 'X-Wave Brasil', 'Kavix'],
    'ibramed': ['Ibramed', 'Antares', 'Lyra', 'Thork', 'Dermosteam', 'Ares', 'Nany', 'Polarys'],
    'loktal': ['Loktal', 'Wavetronic', 'Fraxx', 'Megapulse'],
    'medicalsan': ['Medical San', 'Ultrafocus', 'Criodermis', 'Ethernia', 'Lipocavitação'],
    'tonederm': ['Tone Derm', 'Spectra G3', 'Narniah', 'Lipocavity'],
    'bioset': ['Bio-set', 'Linis', 'Criocuplace', 'Maxishape', 'Endocavity'],
    'htm_eletronica': ['HTM Eletrônica', 'Light Pulse', 'Hibridi', 'Ultrafocus', 'Stimulus'],
    'mmoptics': ['MM Optics', 'Laserpulse', 'Vacuoderm', 'Lumina']
  },

  // ==========================================
  // 5. TIPOS DE TECNOLOGIA (A FÍSICA DA LUZ - COMPLETA)
  // ==========================================
  tipos_tecnologia_laser_pt: {
    'ablativos': ['Laser CO2 Fracionado', 'Laser Erbium YAG 2940nm', 'Resurfacing Ablativo', 'Peeling de Fenol Laser', 'Laser 10600nm', 'Ablação por Plasma'],
    'nao_ablativos': ['Laser Erbium Glass 1550nm', 'Laser Nd:YAG 1064nm', 'Rejuvenescimento não ablativo', 'Laser de Diodo Estético', 'Laser 1340nm', 'Sublative RF'],
    'thulium_bb_laser': ['Laser de Thulium 1927nm', 'BB Laser', 'Lavieen', 'LaseMD', 'Laser de Lavagem', 'Glass Skin'],
    'picossegundos': ['Laser de Picossegundos', 'Pico Laser', 'Picosure', 'Picoway', 'Discovery Pico', 'Pico-Toning'],
    'q_switched': ['Laser Q-Switched', 'Acroma', 'Spectra', 'Vektra', 'Hollywood Peel', 'Carbon Peel', 'Remoção de Tatuagem'],
    'vascular_e_amarelo': ['Laser Vascular', 'Vbeam Perfecta', 'Laser KTP 532nm', 'Laser Amarelo 577nm', 'Dye Laser', 'Laser 585nm', 'Laser para Rosácea'],
    'depilacao_e_diodo': ['Laser de Diodo Depilação', 'Laser Alexandrite', 'Laser Rubi', 'Luz Intensa Pulsada Depilação', 'Laser 755nm', 'Laser 808nm', 'Laser 1064nm Long Pulse'],
    'ultrassom_hifu': ['Ultrassom Microfocado', 'HIFU', 'Ultraformer', 'Ultherapy', 'Liftera', 'Sofwave', 'Ultrassom Macrofocado', 'Mente'],
    'radiofrequencia_e_plasma': ['Radiofrequência Microagulhada', 'Morpheus8', 'Potenza', 'Scarlet RF', 'Plasma Frio', 'Jato de Plasma', 'Fibroblast'],
    'luz_e_led': ['IPL', 'Luz Pulsada', 'Lumecca', 'BBL Hero', 'Fotorejuvenescimento', 'LEDterapia', 'Terapia Fotodinâmica', 'PDT'],
    'criolipolise_e_ondas': ['Criolipólise', 'Coolsculpting', 'Cristal Cryolipolysis', 'Clatuu Alpha', 'Onda Coolwaves', 'Micro-ondas Estético', 'Ondas de Choque']
  },

  // ==========================================
  // 6. COMPARAÇÕES ESTRATÉGICAS (CONFLITOS DE MERCADO)
  // ==========================================
comparacoes_estrategicas_pt: {
    'conflitos_injetaveis': [
      'Botox ou Preenchimento', 'Diferença entre Botox e Preenchimento',
      'Sculptra ou Radiesse', 'Sculptra ou Ellansé', 'Sculptra ou Elleva',
      'Radiesse ou Diamond', 'AestheFill ou Sculptra', 'Elleva ou Sculptra',
      'Profhilo ou Skinbooster', 'Profhilo ou Ácido Hialurônico',
      'PDRN ou Skinbooster', 'Exossomos ou PDRN', 'Juvelook ou Sculptra',
      'Preenchimento ou Bioestimulador', 'Fios de PDO ou Preenchimento',
      'Fios de Sustentação ou Bioestimulador', 'Harmonização ou Naturalidade'
    ],
    'conflitos_tecnologias_faciais': [
      'Ultraformer ou Ultherapy', 'Ultraformer ou Liftera', 'Ultraformer ou Sofwave',
      'Ultraformer ou Lavieen', 'Lavieen ou CO2 Fracionado', 'Lavieen ou Spectra',
      'Morpheus8 ou Ultraformer', 'Morpheus8 ou Potenza', 'Potenza ou RF Microagulhada',
      'Fotona ou Ultraformer', 'Fotona 4D ou StarWalker', 'BBL Hero ou Lumecca',
      'Luz Pulsada ou Laser para Manchas', 'Microagulhamento ou Laser CO2',
      'Peeling de Fenol ou Laser CO2', 'HIFU ou Radiofrequência'
    ],
    'conflitos_tecnologias_corporais': [
      'Coolsculpting ou Criolipólise de placas', 'Coolsculpting ou Scizer',
      'Emsculpt ou CM Slim', 'Emsculpt Neo ou Bioestimulador',
      'Enzimas ou Criolipólise', 'Lipo Enzimática ou Lipo HD',
      'Onda Coolwaves ou Ultraformer', 'Velashape ou Endermologia',
      'BodyTite ou Lipoaspiração', 'Morpheus8 Corporal ou Scizer'
    ],
    'conflitos_marcas_dispositivos': [
      'Ultraformer III ou Ultraformer MPT', 'Soprano Titanium ou Ice Platinum',
      'LightSheer ou Soprano', 'Etherea ou Solon', 'Etherea ou Zye',
      'Lavieen ou BB Laser', 'Picosure ou Picoway', 'Discovery Pico ou Picosure',
      'Medsystems ou Vydence', 'Fotona ou Alma Lasers', 'Sincoheren ou Medical San'
    ],
    'conflitos_custo_beneficio': [
      'Laser ou Peeling para Melasma', 'Bioestimulador ou Fios para Flacidez',
      'HIFU ou Cirurgia de Pálpebras', 'Rinomodelação ou Rinoplastia',
      'Lipo de Papada com Enzimas ou Laser', 'Vale a pena fazer Ultraformer'
    ]
  },
  // ==========================================
  // 7. COSMECÊUTICOS DE LUXO (SHARE OF POCKET)
  // ==========================================
  cosmeceuticos_luxo_pt: {
    'skinceuticals': ['Skinceuticals', 'CE Ferulic', 'Phloretin CF', 'Blemish + Age Defense', 'H.A. Intensifier', 'Discoloration Defense', 'Silymarin CF'],
    'isdin': ['ISDIN', 'Fotoprotector ISDIN', 'Isdinceutics', 'K-Ox Eyes', 'Isdin Melaclear', 'Eryfotona Ak-NMSC'],
    'la_roche_premium': ['La Roche-Posay', 'Effaclar Serum', 'Hyalu B5', 'Pure Vitamin C10', 'Anthelios UV Mune 400', 'Retinol B3'],
    'vichy_premium': ['Vichy', 'Mineral 89', 'Liftactiv Specialist', 'Vichy Neovadiol', 'Dercos Técnica Capilar'],
    'marcas_med_grade': ['Mesoestetic', 'Obagi Medical', 'Zo Skin Health', 'Skinmedica', 'Skinive', 'Bioderma Sensibio', 'Caudalie Vinoperfect'],
    'ativos_farmacia': ['Vitanol A', 'Azelan', 'Epiduo', 'Manteccorp Ivy C', 'Adcos Filtro Solar com Cor', 'Profuse Essence']
  },

  // ==========================================
  // 8. INSUMOS E LOGÍSTICA B2B (ESPIONAGEM INDUSTRIAL)
  // ==========================================
  b2b_logistica_pt: {
    'locacao_de_equipamentos': [
      'Locação de Ultraformer', 'Aluguel de Lavieen', 'Locação de Laser CO2', 
      'Aluguel de Soprano Titanium', 'Locação de Scizer', 'Aluguel de Etérea MX', 
      'Locação de máquinas de estética', 'Aluguel de Criolipólise', 'Locação de Morpheus8'
    ],
    'suprimentos_medicos': [
      'Comprar Cânulas', 'Microcânula 22G', 'Microcânula 25G', 'Seringa BD 1ml', 
      'Agulha 30G estetica', 'Ponteira Ultraformer original', 'Ponteira Morpheus descartável',
      'Gel condutor galão', 'Álcool 70 hospitalar', 'Luva nitrílica rosa', 'Máscara PFF2'
    ],
    'comercio_de_toxina': [
      'Botox atacado', 'Comprar Dysport médico', 'Distribuidora de injetáveis', 
      'Soro fisiológico 0.9%', 'Anestésico TKTX', 'Creme anestésico manipulado',
      'Hialuronidase comprar', 'Bioestimulador preço revenda'
    ]

    },

  // ==========================================
  // 🟢 NOVO: FÁRMACOS, GENÉRICOS E MANIPULADOS (In & Out)
  // O Arsenal Médico de Preparo e Complicações
  // ==========================================
// ==========================================
  // 🟢 FÁRMACOS, GENÉRICOS, MANIPULADOS E MESOTERAPIA (In & Out)
  // O Arsenal Médico: Skincare, Nutracêuticos, Emagrecimento e Recuperação
  // ==========================================
  farmacos_e_manipulados_pt: {
    
    // 💉 ANESTÉSICOS E MANEJO DA DOR
    'anestesicos_topicos_e_injetaveis': [
      'lidocaína', 'tetracaína', 'benzocaína', 'tktx', 'dermomax', 'emla',
      'pomada anestésica manipulada', 'anestésico para microagulhamento', 
      'prilocaína', 'ropivacaína', 'bupivacaína', 'mepivacaína', 
      'anestesia odontológica para preenchimento', 'creme anestésico potente', 'pumice anestésico'
    ],

    // 🛡️ PROFILAXIA, ANTIBIÓTICOS E ANTIEQUIMOSES (Roxos)
    'profilaxia_e_prevencao': [
      'aciclovir', 'valaciclovir', 'prevenção de herpes labial', 'profilaxia pós peeling',
      'arnica montana', 'vitamina k', 'prevenção de hematomas', 'bromelina', 'heparina sódica',
      'cefalexina', 'amoxicilina', 'azitromicina', 'pomada antibiótica', 'nebacetin', 
      'mupirocina', 'gel para roxos', 'hirudoid', 'thrombocid'
    ],

    // 🩹 REPARAÇÃO DE BARREIRA E CICATRIZAÇÃO PÓS-PROCEDIMENTO
    'pos_procedimento_cicatrizacao': [
      'dexpantenol', 'bepantol', 'cicaplast', 'reparador de barreira cutânea', 
      'creme calmante pós laser', 'epidrat calm', 'profuse nutrel', 'cicalfate', 
      'kelo-cote', 'stratamed', 'dersani', 'óleo de girassol ozonizado', 
      'pomada cicatrizante', 'adesivo hidrocoloide', 'tegaderm', 'micropore cirúrgico',
      'polissulfato de mucopolissacarídeo', 'creme com pantenol'
    ],

    // 🛑 ANTI-INFLAMATÓRIOS E CORTICOIDES (Orais e Tópicos)
    'anti_inflamatorios_e_corticoides': [
      'dexametasona', 'prednisona', 'corticoide para inchaço', 'anti-inflamatório pós cirúrgico', 
      'ibuprofeno estética', 'betametasona', 'triancinolona injetável', 'corticoide para queloide', 
      'desonida', 'hidrocortisona', 'nimesulida', 'celecoxibe', 'cetoprofeno'
    ],

    // ☁️ DESPIGMENTANTES, ÁCIDOS E MANEJO DE MELASMA
    'despigmentantes_e_melasma': [
      'ácido tranexâmico oral', 'ácido tranexâmico tópico', 'cisteamina', 'cysteamine',
      'hidroquinona manipulada', 'arbutin', 'alfa arbutin', 'ácido kójico', 'ácido fítico',
      'fórmula tríplice', 'fórmula de kligman', 'peeling de margarida', 'ácido azeilaico', 
      'vitamina c tópica alta concentração', 'niacinamida', 'thiamidol', 'ácido mandélico', 
      'ácido glicólico', 'ácido retinóico', 'tretinoína', 'vitanol a', 'vitacid', 
      'suavicid', 'hormoskin', 'blancy', 'klasssis', 'pigmentclar'
    ],

    // 💊 NUTRACÊUTICOS, IN & OUT E FOTOPROTEÇÃO ORAL
    'nutraceuticos_e_fotoprotecao_oral': [
      'polypodium leucotomos', 'picnogenol', 'filtro solar em cápsula', 'oli-ola', 
      'exsynutriment', 'bio-arct', 'fosfolipídeos de caviar', 'fc oral', 'luteína', 
      'astaxantina', 'glycoxil', 'extrato de romã', 'pomegranate', 'fotoproteção oral'
    ],

    // ✨ SUPLEMENTAÇÃO ANTI-AGING E NUTRICOSMÉTICOS
    'suplementacao_preventiva': [
      'verisol', 'peptídeos bioativos de colágeno', 'glutationa', 'vitamina c lipossomal', 
      'coenzima q10', 'resveratrol', 'silício orgânico', 'nutricolin', 'biotina', 
      'ácido hialurônico oral', 'pantogar', 'pill food', 'pqq', 'nmn', 'nad+', 'siliciu max'
    ],

    // 🌋 MANEJO DE ACNE E OLEOSIDADE (Tópicos e Hormonais)
    'tratamento_acne_hormonal': [
      'espironolactona', 'roacutan', 'isotretinoína', 'antibiótico para acne', 
      'ácido azelaico manipulado', 'espirolactona para estética', 'peróxido de benzoíla', 
      'adapaleno', 'epiduo', 'clindamicina', 'sabonete de ácido salicílico', 
      'roacutan manipulado', 'ciproterona', 'flutamida'
    ],

    // 💧 ATIVOS INJETÁVEIS (Mesoterapia, Intradermoterapia e Esvaziadores)
    'ativos_injetaveis_mesoterapia': [
      'desoxicolato de sódio', 'l-carnitina injetável', 'cafeína injetável', 'crisina', 
      'meliloto', 'rutina', 'silício orgânico injetável', 'dmae injetável', 'enzimas lipolíticas', 
      'vitamina c injetável', 'mescla para flacidez', 'mescla para gordura localizada', 
      'intradermoterapia ativos', 'enzima de papada', 'esvaziadores de gordura', 'lipolíticos'
    ],

    // 💇 TERAPIA CAPILAR FARMACOLÓGICA
    'terapia_capilar_farmacos': [
      'minoxidil oral', 'minoxidil tópico', 'finasterida', 'dutasterida', 'latanoprosta', 
      'bimatoprosta', 'fatores de crescimento capilar', 'igf capilar', 'vegf', 
      'terapia capilar manipulada', 'shampoo de cetoconazol', 'loção capilar manipulada'
    ],

    // ⚖️ GERENCIAMENTO DE PESO E METABOLISMO (Impacto Estético)
    'emagrecimento_e_metabolismo': [
      'ozempic para emagrecer', 'wegovy', 'saxenda', 'liraglutida', 'semaglutida', 
      'mounjaro', 'tirzepatida', 'morosil', 'orlistat', 'bupropiona para emagrecer', 
      'naltrexona', 'caneta para emagrecer', 'inibidor de apetite', 'faseolamina', 'cactinea'
    ]
  },
  // ==========================================
  // 🇺🇸 INGLÊS (English)
  // ==========================================
  procedimentos_en: {
    'botulinum toxin': ['botox', 'botulinum toxin', 'forehead botox', 'baby botox', 'preventative botox', 'botox for wrinkles', 'facial botox', 'dysport', 'xeomin'],
    'fillers': ['fillers', 'dermal fillers', 'lip fillers', 'hyaluronic acid', 'cheek fillers', 'jawline filler', 'tear trough filler', 'undereye filler', 'chin filler', 'nasolabial fold filler', 'smile lines filler'],
    'collagen biostimulator': ['collagen biostimulator', 'sculptra', 'radiesse', 'ellanse', 'collagen induction', 'biostimulators', 'injectable biostimulator'],
    'skinbooster': ['skinbooster', 'skin boosters', 'injectable hydration', 'deep skin hydration', 'profhilo', 'restylane vital'],
    'microneedling': ['microneedling', 'facial microneedling', 'dermapen', 'dermaroller', 'collagen induction therapy', 'rf microneedling', 'potenza', 'morpheus8'],
    'chemical peel': ['chemical peel', 'facial peel', 'glycolic peel', 'tca peel', 'phenol peel', 'retinol peel', 'peeling', 'skin peel', 'salicylic peel'],
    'diamond peel': ['diamond peel', 'microdermabrasion', 'diamond microdermabrasion', 'skin resurfacing', 'mechanical exfoliation'],
    'facial cleansing': ['facial', 'deep cleansing facial', 'medical facial', 'blackhead extraction', 'comedone extraction', 'pore cleansing', 'deep facial cleansing'],
    'laser hair removal': ['laser hair removal', 'permanent hair removal', 'diode laser', 'alexandrite laser', 'ipl hair removal', 'nd yag laser hair removal', 'bikini laser hair removal'],
    'co2 laser': ['co2 laser', 'fractional co2 laser', 'fractionated co2', 'laser resurfacing', 'ablative laser', 'fractional laser', 'acne scar laser'],
    'laser for dark spots': ['laser for spots', 'dark spot laser', 'laser for hyperpigmentation', 'melasma laser', 'sun spot removal', 'pico laser', 'q switched laser'],
    'laser tattoo removal': ['tattoo removal', 'laser tattoo removal', 'picosure', 'remove tattoo laser'],
    'vascular laser': ['vascular laser', 'spider vein laser', 'broken capillaries laser', 'rosacea laser', 'vbeam', 'laser for redness'],
    'radiofrequency': ['radiofrequency', 'rf therapy', 'rf skin tightening', 'radiofrequency facial', 'body radiofrequency', 'rf aesthetics', 'skin tightening'],
    'hifu': ['hifu', 'high intensity focused ultrasound', 'ultherapy', 'ultraformer', 'liftera', 'ultrasound face lift', 'microfocused ultrasound'],
    'aesthetic ultrasound': ['ultrasound', 'cavitation', 'ultrasound cavitation', 'aesthetic ultrasound', 'body ultrasound'],
    'cryolipolysis': ['cryolipolysis', 'coolsculpting', 'fat freezing', 'fat freeze', 'coolsculpting stomach', 'localized fat freezing'],
    'carboxytherapy': ['carboxytherapy', 'carboxy facial', 'stretch marks carboxy', 'under eye carboxy', 'co2 injection aesthetics'],
    'mesotherapy': ['mesotherapy', 'mesotherapy facial', 'lipolytic injections', 'fat dissolving injections', 'skin pricking', 'meso face'],
    'fat dissolving enzymes': ['fat dissolving', 'lipolytic enzymes', 'kybella', 'enzyme injections', 'lipo injections', 'non surgical lipo'],
    'pdo threads': ['pdo threads', 'thread lift', 'fox eyes threads', 'mint threads', 'lifting threads', 'facial threads', 'collagen threads'],
    'facial harmonization': ['facial harmonization', 'facial balancing', 'face contouring', 'full face rejuvenation', 'facial sculpting'],
    'plasma pen': ['plasma pen', 'fibroblast plasma', 'plasma lift', 'plasma fibroblast therapy', 'jato de plasma'],
    'hydradermabrasion': ['hydrafacial', 'hydradermabrasion', 'hydro facial', 'deep hydration facial', 'facial hydration'],
    'led therapy': ['led therapy', 'led facial', 'phototherapy led', 'light therapy aesthetics', 'blue light therapy', 'red light therapy'],
    'slimming massage': ['slimming massage', 'body contouring massage', 'anti cellulite massage', 'shaping massage', 'manual remodeling'],
    'lymphatic drainage': ['lymphatic drainage', 'post op massage', 'lymphatic drainage massage', 'body detox massage', 'manual lymphatic drainage'],
    'endermologie': ['endermologie', 'lpg endermologie', 'vacuum therapy', 'cellu m6'],
    'ipl': ['ipl', 'intense pulsed light', 'photofacial', 'fotofacial', 'ipl photorejuvenation'],
    'bb glow': ['bb glow', 'bb glow facial', 'semi permanent foundation'],
    'eyebrow design': ['eyebrow design', 'brow shaping', 'perfect eyebrows'],
    'micropigmentation': ['micropigmentation', 'microblading', 'permanent makeup', 'lip blush', 'eyebrow embroidery'],
    'hair transplant': ['hair transplant', 'hair graft', 'fue hair transplant', 'fut hair transplant', 'hair restoration'],
    'hair microneedling': ['hair microneedling', 'scalp microneedling', 'microneedling for hair loss', 'scalp dermaroller'],
    'general laser': ['laser', 'aesthetic laser', 'dermatological laser', 'facial laser', 'body laser', 'non ablative laser', 'erbium laser', 'erbium yag', 'ruby laser', 'thulium laser', 'pico laser', 'picosecond laser', 'q switched', 'laser pigment', 'laser equipment', 'laser device', 'laser machine', 'aesthetic laser platform', 'medical laser', 'laser for sale', 'buy laser', 'purchase laser', 'used laser', 'refurbished laser', 'new laser', 'laser resale', 'laser rental', 'laser leasing', 'rent laser', 'laser hire']
  },
  tratamentos_en: {
    'stretch marks': ['stretch marks', 'stretch mark treatment', 'remove stretch marks', 'white stretch marks', 'red stretch marks'],
    'acne': ['acne', 'pimples', 'acne treatment', 'cystic acne', 'adult acne', 'hormonal acne'],
    'melasma': ['melasma', 'dark spots', 'skin spots', 'melasma treatment', 'hyperpigmentation', 'sun spots'],
    'sagging skin': ['sagging skin', 'skin laxity', 'loose skin', 'face sagging', 'body sagging'],
    'hair loss': ['hair loss', 'balding', 'alopecia', 'hair treatment', 'female hair loss', 'thinning hair', 'male pattern baldness'],
    'dark circles': ['dark circles', 'under eye circles', 'dark undereyes', 'sunken eyes'],
    'localized fat': ['localized fat', 'stubborn fat', 'belly fat', 'fat reduction', 'body fat'],
    'cellulite': ['cellulite', 'cellulite treatment', 'reduce cellulite', 'dimples'],
    'facial rejuvenation': ['facial rejuvenation', 'skin rejuvenation', 'anti aging', 'younger skin'],
    'enlarged pores': ['enlarged pores', 'open pores', 'large pores', 'shrink pores'],
    'scars': ['scars', 'acne scars', 'scar treatment', 'surgical scars', 'burn scars', 'burn marks'],
    'rosacea': ['rosacea', 'rosacea treatment', 'red face', 'facial redness'],
    'patchy beard': ['patchy beard', 'beard growth', 'grow beard'],
    'skin whitening': ['skin whitening', 'skin lightening', 'brightening', 'intimate whitening'],
    'double chin': ['double chin', 'double chin reduction', 'submental fat'],
    'wrinkles': ['wrinkles', 'fine lines', 'expression lines', 'deep wrinkles'],
    'spider veins': ['spider veins', 'leg veins', 'facial veins', 'telangiectasia'],
    'facial redness': ['facial redness', 'red skin', 'flushing'],
    'sensitive skin': ['sensitive skin', 'sensitized skin', 'skin sensitivity'],
    'uneven skin texture': ['uneven skin texture', 'rough skin', 'skin texture', 'smooth skin'],
    'skin quality': ['skin quality', 'healthy skin', 'glowy skin'],
    'body rejuvenation': ['body rejuvenation', 'anti aging body'],
    'inch loss': ['inch loss', 'body slimming', 'weight loss aesthetics'],
    'body contouring': ['body contouring', 'body sculpting', 'body shaping'],
    'water retention': ['water retention', 'bloating', 'swelling', 'edema'],
    'intimate spots': ['intimate spots', 'genital hyperpigmentation', 'dark bikini area'],
    'intimate rejuvenation': ['intimate rejuvenation', 'vaginal rejuvenation', 'intimate aesthetics'],
    'intimate laxity': ['intimate laxity', 'vaginal tightening', 'vaginal firmness'],
    'dandruff': ['dandruff', 'seborrheic dermatitis', 'flaky scalp'],
    'oily skin': ['oily skin', 'excessive oil', 'oil control'],
    'dry skin': ['dry skin', 'dehydrated skin', 'skin hydration']
  },
  anatomia_en: {
    'face': ['face', 'facial', 'facial skin', 'face contour', 'facial harmonization', 'face balancing', 'facial wrinkles', 'dark circles'],
    'abdomen': ['abdomen', 'stomach', 'belly', 'belly fat', 'stomach fat', 'abdominal laxity', 'post-pregnancy', 'mommy makeover', 'abs definition'],
    'glutes': ['glutes', 'buttocks', 'butt', 'butt lift', 'bbl', 'butt volume', 'butt aesthetics', 'butt cellulite'],
    'thighs': ['thighs', 'inner thighs', 'back of thighs', 'thigh fat', 'thigh cellulite', 'thigh rubbing', 'chafing'],
    'flanks': ['flanks', 'love handles', 'flank fat', 'side fat', 'waist fat', 'waistline'],
    'arms': ['arms', 'arm', 'bat wings', 'bingo wings', 'arm laxity', 'sagging arms', 'arm fat'],
    'double chin': ['double chin', 'submental', 'submental fat', 'jawline contour', 'under chin fat'],
    'back': ['back', 'back fat', 'back rolls', 'bra fat', 'bra bulge'],
    'intimate area': ['intimate area', 'vaginal area', 'intimate aesthetics', 'intimate whitening', 'intimate rejuvenation', 'intimate laxity', 'vaginal tightening'],
    'neck and chest': ['neck', 'decolletage', 'neck wrinkles', 'tech neck', 'neck laxity', 'turkey neck', 'chest spots', 'sun damage chest']
  },
  intencao_compra_en: {
    'value_and_investment': ['price', 'cost', 'how much', 'quote', 'budget', 'investment', 'price list', 'promo', 'deals', 'financing', 'payment plans', 'discount code'],
    'trust_and_authority': ['best clinic', 'specialist near me', 'top doctor', 'expert in', 'where to get', 'recommendation', 'reviews', 'board certified', 'luxury clinic', 'celebrity doctor', 'premium service', 'licensed clinic'],
    'social_proof_and_vlog': ['before and after', 'real photos', 'results', 'testimonials', 'real cases', 'procedure vlog', 'recovery diary', 'my experience with', 'review', 'day by day photos', 'who has done it'],
    'safety_and_fears': ['risks', 'danger', 'complications', 'side effects', 'adverse events', 'does it hurt', 'anesthesia', 'recovery', 'downtime', 'aftercare', 'contraindications', 'who is not a candidate', 'procedure mistake', 'necrosis'],
    'maintenance_and_cycle': ['longevity', 'how long does it last', 'maintenance', 'frequency', 'sessions needed', 'touch up', 'attack phase', 'rebound effect', 'loss of results', 'repeat procedure'],
    'geolocation_proximity': ['near me', 'in my city', 'at home service', 'best in the area', 'clinic in [city]', 'locations'],
    'education_and_competition': ['course', 'specialization', 'model call', 'workshop', 'professional training', 'post-grad', 'physician mentoring']
  },

  marcas_injetaveis_en: {
    'toxins': ['Botox Allergan', 'Dysport', 'Xeomin', 'Jeuveau', 'Daxxify', 'Nabota', 'Botulax'],
    'fillers': ['Juvederm', 'Restylane', 'Revanesse', 'Belotero', 'Teosyal', 'Perfectha', 'RHA Collection', 'Yvoire'],
    'biostimulators': ['Sculptra', 'Radiesse', 'Ellanse', 'AestheFill', 'Gana Fill', 'Calcium Hydroxylapatite', 'PLLA'],
    'skinboosters_brands': ['Profhilo', 'Restylane Vital', 'Juvederm Volite', 'NCTF 135HA', 'Skin Revitalization', 'Redensity 1']
  },

  tipos_tecnologia_laser_en: {
    'ablative': ['Fractional CO2 Laser', 'Erbium YAG 2940nm', 'Ablative Resurfacing', 'Laser Phenol Peel'],
    'non_ablative': ['Erbium Glass 1550nm', 'Nd:YAG 1064nm', 'Non-ablative rejuvenation', 'Aesthetic Diode Laser'],
    'thulium_bb_laser': ['Thulium Laser 1927nm', 'BB Laser', 'Lavieen', 'LaseMD', 'Glass Skin Laser'],
    'picosecond': ['Picosecond Laser', 'Pico Laser', 'Picosure', 'Picoway', 'Discovery Pico', 'Pico Tattoo Removal'],
    'q_switched': ['Q-Switched Laser', 'Acroma', 'Spectra', 'Vektra', 'Laser Melasma Treatment'],
    'vascular_ktp': ['Vascular Laser', 'Vbeam Perfecta', 'KTP Laser 532nm', 'Spider Vein Laser', 'Dye Laser'],
    'hair_removal_physics': ['Diode Laser Hair Removal', 'Alexandrite Laser', 'Ruby Laser', 'IPL Hair Removal'],
    'ultrasound_hifu': ['Microfocused Ultrasound', 'HIFU', 'Ultraformer', 'Ultherapy', 'Liftera', 'Softwave'],
    'rf_microneedling': ['Radiofrequency Microneedling', 'Morpheus8', 'Potenza', 'Secret RF', 'Sylfirm X'],
    'ipl_bbl': ['IPL', 'Intense Pulsed Light', 'Lumecca', 'BBL Hero', 'Photofacial'],
    'cryolipolysis_physics': ['Cryolipolysis', 'Coolsculpting', 'Fat Freezing', 'Clatuu Alpha']
  },

  comparacoes_estrategicas_en: {
    'procedure_doubts': ['Botox or Fillers', 'Lavieen vs CO2', 'Ultraformer or Biostimulator', 'Sculptra or Radiesse', 'Morpheus8 vs Ultraformer'],
    'brand_doubts': ['Ultraformer III or MPT', 'Soprano Titanium vs Ice', 'Coolsculpting or Emsculpt']
  },
  // ==========================================
  // 🇪🇸 ESPANHOL (Español)
  // ==========================================
  procedimentos_es: {
    'toxina botulínica': ['botox', 'toxina botulinica', 'toxina botulínica', 'botox facial', 'botox estético', 'botox frente', 'botox arrugas', 'botox preventivo', 'toxina botulínica estética'],
    'relleno': ['relleno', 'relleno facial', 'relleno de labios', 'ácido hialurónico', 'acido hialuronico', 'relleno ojeras', 'relleno surco nasogeniano', 'relleno mentón', 'relleno mandíbula', 'relleno mandibula', 'relleno malar', 'relleno surco'],
    'bioestimulador de colágeno': ['bioestimulador', 'bioestimulador de colageno', 'bioestimulador de colágeno', 'sculptra', 'radiesse', 'ellanse', 'estimulación de colágeno', 'estimulador de colageno'],
    'skinbooster': ['skinbooster', 'skin booster', 'hidratación inyectable', 'hidratacion inyectable', 'hidratación profunda de la piel', 'hidratacion profunda de la piel', 'hidratación profunda'],
    'microneedling': ['microneedling', 'microagujas facial', 'microagujas piel', 'dermapen', 'dermaroller', 'inducción percutánea de colágeno', 'ipc', 'microagujas estético'],
    'peeling químico': ['peeling quimico', 'peeling químico', 'peeling facial', 'peeling ácido', 'peeling de acido', 'peeling de fenol', 'peeling de retinoico', 'peeling superficial', 'peeling médio', 'peeling profundo', 'peeling', 'peeling retinoico', 'peeling mandélico'],
    'peeling de diamante': ['peeling diamante', 'peeling de diamante', 'microdermoabrasión', 'microdermoabrasao', 'dermoabrasión estética', 'dermoabrasión'],
    'limpieza de pele': ['limpieza de piel', 'limpieza facial', 'limpieza profunda', 'extracción de pontos negros', 'extracao de cravos', 'remoción de comedones', 'remocao de comedoes', 'extracción puntos negros'],
    'depilación láser': ['depilación láser', 'depilacion laser', 'laser depilación', 'laser depilacion', 'depilación definitiva', 'depilacion definitiva', 'láser alexandrita', 'láser diodo', 'láser nd yag depilación', 'eliminación definitiva de vello'],
    'láser co2': ['laser co2', 'laser co2 fraccionado', 'laser fraccionado co2', 'laser resurfacing', 'láser ablativo', 'láser rejuvenecimiento', 'láser cicatriz acné', 'láser estrías', 'láser arrugas'],
    'láser para manchas': ['laser manchas', 'laser para manchas', 'laser pigmentación', 'laser pigmentacao', 'láser melasma', 'láser manchas solares', 'láser léntigos', 'láser pecas'],
    'eliminación de tatuajes con láser': ['eliminación de tatuajes', 'remocao de tatuagem', 'eliminación de tatuajes con láser', 'laser tattoo removal', 'láser borrar tatuaje'],
    'láser vascular': ['láser vascular', 'láser vasos', 'láser telangiectasia', 'láser rosácea', 'láser arañitas', 'láser angioma'],
    'radiofrecuencia': ['radiofrecuencia', 'radiofrecuencia facial', 'radiofrecuencia corporal', 'radiofrecuencia piel', 'radiofrecuencia flacidez', 'rf estética'],
    'ultrasonido microfocalizado': ['ultrasonido microfocalizado', 'ultrasonido microfocalizado facial', 'ultraformer', 'liftera', 'hifu', 'lifting ultrasonido'],
    'ultrasonido estético': ['ultrasonido', 'ultrasonido estético', 'ultrasonido corporal', 'ultrasonido cavitacional'],
    'criolipólisis': ['criolipólisis', 'criolipolisis', 'criolipolisis grasa', 'criolipólisis grasa localizada', 'congelamiento de grasa', 'criolipolisis abdominal', 'crio grasa'],
    'carboxiterapia': ['carboxiterapia', 'carbox facial', 'carbox corporal', 'carbox estrías', 'carbox ojeras', 'aplicación de co2 estético'],
    'intradermoterapia': ['intradermoterapia', 'mesoterapia', 'mesoterapia facial', 'mesoterapia corporal', 'mesoterapia grasa localizada', 'inyección estética pele', 'mesoterapia estética'],
    'enzimas para grasa': ['enzimas grasa', 'enzimas grasa localizada', 'aplicación de enzimas', 'lipo enzimatica', 'lipo enzimática', 'lipolíticos', 'inyección grasa localizada', 'lipo sin cirugía'],
    'hilos de pdo': ['hilos pdo', 'hilo de pdo', 'hilos de sustentación', 'hilos de tracción', 'lifting con hilos', 'hilo lifting', 'hilos faciales'],
    'armonización facial': ['armonización facial', 'armonización orofacial', 'procedimientos faciales', 'full face', 'armonización completa'],
    'pen de plasma': ['jato de plasma', 'plasma pen', 'plasma fibroblast', 'plasma lifting', 'plasma piel', 'plasma estético', 'plasma lift'],
    'hidrodermoabrasión': ['hidrodermoabrasao', 'hidrodermoabrasión', 'hydrafacial', 'limpieza hydrafacial', 'hidratación profunda facial', 'hidratación facial', 'hidratación estética'],
    'fototerapia led': ['ledterapia', 'led facial', 'fototerapia led', 'luz led estética', 'fotobiomodulación', 'terapia led'],
    'masaje modelador': ['masaje modelador', 'masaje reductor', 'masaje corporal estético', 'masaje grasa localizada', 'modelador corporal', 'masaje estético'],
    'drenaje linfático': ['drenaje linfático', 'drenaje post operatorio', 'drenaje corporal', 'drenaje estético', 'drenaje'],
    'endermología': ['endermologia', 'vacuoterapia', 'vacuoterapia'],
    'luz intensa pulsada': ['luz pulsada', 'luz intensa pulsada', 'ipl', 'fototerapia'],
    'bb glow': ['bb glow', 'bb glow facial', 'efecto base permanente'],
    'diseño de cejas': ['diseño de ceja', 'diseño cejas', 'cejas perfectas'],
    'micropigmentación': ['micropigmentación', 'microblading', 'ceja pelo a pelo', 'micropigmentación labial'],
    'dermopigmentação': ['dermopigmentación', 'pigmentación estética'],
    'implante capilar': ['implante capilar', 'trasplante capilar', 'fue capilar', 'fut capilar', 'restauración capilar'],
    'microneedling capilar': ['microneedling capilar', 'dermaroller capilar', 'dermapen capilar', 'inducción colageno capilar'],
    'láser geral': ['láser', 'láser estético', 'láser dermatológico', 'láser facial', 'láser corporal', 'láser no ablativo', 'láser erbium', 'láser erbium yag', 'láser rubí', 'láser thulium', 'láser pico', 'láser picosegundos', 'láser q switched', 'láser pigmento', 'equipo láser', 'aparato láser', 'máquina láser estética', 'plataforma láser estética', 'plataforma láser dermatológica', 'láser profissional estética', 'láser médico dermatológico', 'venta láser', 'comprar láser', 'compra láser', 'láser usado', 'láser seminuevo', 'láser nuevo', 'reventa láser', 'cambio láser', 'permuta láser', 'alquiler láser', 'locación láser', 'rentar láser', 'láser alquiler', 'láser locación estética', 'alquilar equipo láser', 'láser estética', 'láser clínica estética', 'láser dermatología', 'láser para clínica', 'láser para estética']
  },
  tratamentos_es: {
    'estrías': ['estrias', 'tratamiento estrías', 'borrar estrías', 'estrías blancas', 'estrías rojas'],
    'acné': ['acne', 'granos', 'tratamiento acné', 'grano inflamado', 'acné adulto'],
    'melasma': ['melasma', 'macchie escure', 'manchas en la piel', 'aclarar melasma', 'hiperpigmentación', 'manchas solares'],
    'flacidez': ['flacidez', 'flacidez facial', 'flacidez corporal', 'piel flácida'],
    'caída del cabello': ['caída del cabello', 'calvicie', 'alopecia', 'tratamiento capilar', 'caída capilar femenina', 'adelgazamiento capilar', 'caída capilar masculina', 'calvicie masculina', 'alopecia androgenética'],
    'ojeras': ['ojeras', 'ojera profunda', 'ojera oscura'],
    'grasa localizada': ['grasa localizada', 'grasa abdominal', 'reducción de grasa'],
    'celulitis': ['celulitis', 'tratamiento celulitis', 'reducir celulitis'],
    'rejuvenecimiento facial': ['rejuvenecimiento facial', 'rejuvenecer pele', 'anti edad', 'anti aging'],
    'poros dilatados': ['poros dilatados', 'poros abiertos', 'cerrar poros'],
    'cicatrices': ['cicatriz', 'cicatriz acné', 'tratamiento cicatriz', 'cicatriz quirúrgica', 'cicatriz cirugía', 'mejorar cicatriz cirugía', 'cicatriz quemadura', 'marca quemadura', 'tratamiento quemadura piel'],
    'rosácea': ['rosacea', 'rosácea', 'tratamiento rosácea'],
    'barba irregular': ['barba irregular', 'crecimiento barba'],
    'aclaramiento de piel': ['aclaramiento piel', 'aclaramiento facial', 'aclaramiento íntimo'],
    'papada': ['papada', 'reducción papada', 'grasa submentoniana'],
    'arrugas': ['arrugas', 'líneas de expresión', 'arrugas profundas'],
    'arañitas': ['vasitos', 'arañitas piernas', 'arañitas rostro', 'telangiectasia'],
    'enrojecimento facial': ['enrojecimiento facial', 'piel enrojecida', 'rubor facial'],
    'piel sensible': ['piel sensible', 'piel sensibilizada', 'sensibilidad facial'],
    'textura irregular de la piel': ['textura irregular', 'piel irregular', 'piel áspera', 'mejorar textura piel'],
    'calidad de la piel': ['calidad de la piel', 'mejora de la piel', 'piel saludable', 'skin quality'],
    'rejuvenecimiento corporal': ['rejuvenecimiento corporal', 'rejuvenecer corpo', 'anti edad corporal'],
    'reducción de medidas': ['reducción medidas', 'disminuir medidas', 'adelgazamiento estético'],
    'moldeado corporal': ['moldeado corporal', 'contorno corporal', 'escultura corporal'],
    'retención de líquidos': ['retención líquidos', 'hinchazón corporal', 'drenaje retención líquido'],
    'manchas íntimas': ['mancha íntima', 'mancha genital', 'hiperpigmentación íntima'],
    'rejuvenecimento íntimo': ['rejuvenecimiento íntimo', 'estética íntima', 'tratamiento íntimo'],
    'flacidez íntima': ['flacidez íntima', 'flacidez vaginal', 'firmeza vaginal'],
    'caspa': ['caspa', 'dermatite seborreica', 'descamación cuero cabelludo'],
    'piel grasa': ['piel grasa', 'oleosidad excesiva', 'control grasa'],
    'piel seca': ['piel seca', 'deshidratación de la piel', 'hidratación profunda piel']
  },
  anatomia_es: {
    'face': ['cara', 'rostro', 'facial', 'piel del rostro', 'contorno facial', 'armonización facial', 'arrugas faciales', 'ojeras'],
    'abdomen': ['abdomen', 'vientre', 'panza', 'barriga', 'grasa abdominal', 'grasa en la barriga', 'flacidez abdominal', 'post-parto', 'definición abdominal'],
    'glúteos': ['glúteos', 'nalgas', 'cola', 'trasero', 'levantamiento de glúteos', 'volumen de glúteos', 'estética de glúteos', 'celulitis en glúteos'],
    'muslos': ['muslos', 'muslo interno', 'muslo posterior', 'grasa en los muslos', 'celulitis en muslos', 'roce entre las piernas'],
    'flancos': ['flancos', 'rollitos', 'michelines', 'grasa en flancos', 'grasa lateral', 'cintura'],
    'brazos': ['brazos', 'brazo', 'alas de murciélago', 'flacidez en brazos', 'grasa en los brazos'],
    'papada': ['papada', 'submentón', 'grasa submentoniana', 'doble mentón', 'contorno mandibular'],
    'espalda': ['espalda', 'grasa en la espalda', 'rollos en la espalda', 'grasa del sujetador', 'grasa del corpiño'],
    'zona íntima': ['zona íntima', 'área genital', 'estética íntima', 'blanqueamiento íntimo', 'rejuvenecimiento íntimo', 'flacidez íntima'],
    'cuello y escote': ['cuello', 'escote', 'arrugas en el cuello', 'flacidez en el cuello', 'manchas en el escote']
  },
  intencao_compra_es: {
    'valor_e_inversion': ['precio', 'valor', 'costo', 'cuánto cuesta', 'presupuesto', 'inversión', 'lista de precios', 'promoción', 'paquete', 'costo-beneficio', 'formas de pago', 'cuotas', 'financiamiento estético', 'cupón de descuento'],
    'confianza_y_autoridad': ['mejor clínica', 'especialista en', 'mejor médico', 'referencia en', 'dónde hacerse', 'indicación', 'reseñas', 'doctor', 'clínica de lujo', 'médico de las famosas', 'atención premium', 'colegiado', 'clínica autorizada'],
    'prueba_social_y_vlog': ['antes y después', 'fotos reales', 'resultado', 'testimonios', 'casos reales', 'vlog procedimiento', 'diario de recuperación', 'mi experiencia con', 'reseña', 'fotos día a día', 'quién ya se lo hizo'],
    'seguridad_y_miedos': ['riesgos', 'peligro', 'complicaciones', 'efectos secundarios', 'intercurrencia', 'duele', 'anestesia', 'recuperación', 'postoperatorio', 'cuidados después', 'contraindicaciones', 'quién no puede hacerse', 'error en procedimiento', 'necrosis'],
    'mantenimiento_y_ciclo': ['duración', 'cuánto dura', 'mantenimiento', 'frecuencia', 'sesiones necesarias', 'retoque', 'fase de ataque', 'efecto rebote', 'pérdida de resultado', 'repetir procedimiento'],
    'geolocalizacion_proximidad': ['cerca de mí', 'en mi ciudad', 'servicio a domicilio', 'mejor de la zona', 'clínica en [ciudad]', 'sucursales'],
    'educacion_y_competencia': ['curso de', 'especialización para', 'vagas para modelo', 'workshop', 'capacitación para profesionales', 'posgrado en', 'mentoría para médicos']
  },

  marcas_injetaveis_es: {
    'toxinas': ['Botox Allergan', 'Dysport', 'Xeomin', 'Nabota', 'Botulift', 'Botulax'],
    'preenchedores': ['Juvederm', 'Restylane', 'Rennova', 'Belotero', 'Teosyal', 'Perfectha', 'Varioderm', 'Yvoire'],
    'bioestimuladores': ['Sculptra', 'Radiesse', 'Ellanse', 'Elleva', 'AestheFill', 'Hidroxiapatita de Calcio', 'PLLA'],
    'skinboosters_marcas': ['Profhilo', 'Restylane Vital', 'Juvederm Volite', 'NCTF 135HA', 'Biorevitalización']
  },

  tipos_tecnologia_laser_es: {
    'ablativos': ['Láser CO2 Fraccionado', 'Láser Erbium YAG 2940nm', 'Resurfacing Ablativo', 'Peeling de Fenol Láser'],
    'no_ablativos': ['Láser Erbium Glass 1550nm', 'Láser Nd:YAG 1064nm', 'Rejuvenecimiento no ablativo', 'Láser de Diodo Estético'],
    'thulium_bb_laser': ['Láser de Tulio 1927nm', 'BB Laser', 'Lavieen', 'LaseMD', 'Láser efecto porcelana'],
    'picossegundos': ['Láser de Picosegundos', 'Pico Láser', 'Picosure', 'Picoway', 'Discovery Pico', 'Eliminación de tatuajes'],
    'q_switched': ['Láser Q-Switched', 'Acroma', 'Spectra', 'Vektra', 'Tratamiento de Melasma'],
    'vascular_ktp': ['Láser Vascular', 'Vbeam Perfecta', 'Láser KTP 532nm', 'Láser para varices', 'Dye Laser'],
    'depilacion_fisica': ['Láser de Diodo Depilación', 'Láser Alejandrita', 'Láser Rubí', 'Luz Intensa Pulsada'],
    'ultrassom_hifu': ['Ultrasonido Microfocalizado', 'HIFU', 'Ultraformer', 'Ultherapy', 'Liftera', 'Accutyte'],
    'radiofrequencia_microagulhada': ['Radiofrecuencia Microagujada', 'Morpheus8', 'Potenza', 'Secret RF'],
    'luz_intensa_pulsada': ['IPL', 'Luz Pulsada', 'Lumecca', 'BBL Hero', 'Fotorejuvenecimiento'],
    'criolipolise_fisica': ['Criolipólisis', 'Coolsculpting', 'Criolipólisis plana', 'Clatuu Alpha']
  },

  comparacoes_estrategicas_es: {
    'dudas_procedimientos': ['Botox o Relleno', 'Lavieen o CO2', 'Ultraformer o Bioestimulador', 'Sculptra o Radiesse', 'Morpheus8 o Ultraformer'],
    'dudas_marcas': ['Ultraformer III o MPT', 'Soprano Titanium o Ice', 'Coolsculpting o Criolipólisis']
  },
  // ==========================================
  // 🇫🇷 FRANCÊS (Français)
  // ==========================================
  procedimentos_fr: {
    'toxine botulique': ['botox', 'toxine botulique', 'botox visage', 'botox front', 'rides du lion botox', 'botox préventif', 'injections botox', 'dysport', 'xeomin'],
    'comblement': ['comblement', 'acide hyaluronique', 'injection acide hyaluronique', 'augmentation levres', 'comblement cernes', 'jawline contouring', 'comblement rides', 'pommettes acide hyaluronique', 'menton acide hyaluronique'],
    'biostimulateur de collagène': ['biostimulateur', 'biostimulateur de collagène', 'sculptra', 'radiesse', 'ellansé', 'induction de collagène', 'stimulation collagène'],
    'skinbooster': ['skinbooster', 'skin booster', 'hydratation injectable', 'profhilo', 'hydratation profunda', 'mésolift'],
    'microneedling': ['microneedling', 'microneedling visage', 'dermapen', 'dermaroller', 'induction collagène thérapie', 'morpheus8', 'microneedling rf'],
    'peeling chimique': ['peeling chimique', 'peeling visage', 'peeling aux acides', 'peeling glycolique', 'peeling tca', 'peeling phénol', 'peeling superficiel', 'peeling moyen', 'peeling profond'],
    'peeling diamant': ['peeling diamant', 'microdermabrasion', 'dermabrasion esthétique', 'resurfaçage de la peau'],
    'nettoyage de peau': ['nettoyage de peau', 'soin du visage', 'nettoyage profond', 'extraction points noirs', 'soin visage purifiant'],
    'épilation laser': ['épilation laser', 'epilation laser', 'laser épilation', 'épilation définitive', 'laser diode', 'laser alexandrite', 'laser nd yag', 'épilation maillot laser'],
    'laser co2': ['laser co2', 'laser co2 fractionné', 'laser fractionné', 'resurfaçage laser', 'laser ablatif', 'rajeunissement laser', 'laser cicatrices acné'],
    'laser pour taches': ['laser taches', 'laser taches brunes', 'laser pigmentation', 'laser mélasma', 'laser taches solaires', 'laser lentigo', 'picolaser'],
    'détatouage laser': ['détatouage', 'détatouage laser', 'enlever tatouage laser', 'picosure', 'laser détatouage'],
    'laser vasculaire': ['laser vasculaire', 'laser couperose', 'laser rosacée', 'laser varicosités', 'laser angiome', 'vbeam'],
    'radiofréquence': ['radiofréquence', 'radiofrequence visage', 'radiofréquence corps', 'raffermissement peau rf', 'radiofréquence esthétique'],
    'hifu': ['hifu', 'ultrasons focalisés', 'hifu visage', 'ultherapy', 'ultraformer', 'lifting sans chirurgie'],
    'ultrasons esthétiques': ['ultrasons', 'ultrasons esthétiques', 'ultrasons corps', 'cavitation'],
    'cryolipolyse': ['cryolipolyse', 'coolsculpting', 'mincir par le froid', 'destruction graisse froid', 'cryolipolyse ventre'],
    'carboxythérapie': ['carboxythérapie', 'carboxy visage', 'carboxy vergetures', 'carboxy cernes'],
    'mésothérapie': ['mésothérapie', 'mesothérapie visage', 'mesothérapie corps', 'mésothérapie cellulite', 'injections esthétiques'],
    'enzymes lipolytiques': ['enzymes graisse', 'lipolyse enzymatique', 'dissoudre graisse', 'injection brûle graisse'],
    'fils tenseurs': ['fils tenseurs', 'fils pdo', 'fils de suspension', 'lifting par fils', 'fils crantés', 'lifting non chirurgical'],
    'harmonisation faciale': ['harmonisation faciale', 'profiloplastie', 'full face esthétique', 'rééquilibrage visage'],
    'plasma pen': ['plasma pen', 'fibroblast plasma', 'jato de plasma', 'plasma lift', 'plasma esthétique'],
    'hydradermabrasion': ['hydradermabrasion', 'hydrafacial', 'soin hydrafacial', 'nettoyage hydro-facial'],
    'ledthérapie': ['ledthérapie', 'led visage', 'photothérapie led', 'luminothérapie esthétique', 'photobiomodulation'],
    'massage modelant': ['massage modelant', 'massage amincissant', 'massage minceur', 'massage palper rouler'],
    'drainage lymphatique': ['drainage lymphatique', 'drainage post opératório', 'massage drainage', 'drainage lymphatique manuel'],
    'endermologie': ['endermologie', 'lpg', 'cellu m6', 'lpg endermologie', 'traitement cellulite lpg'],
    'lumière intense pulsée': ['lumière pulsée', 'ipl', 'lampe flash', 'photorajeunissement'],
    'bb glow': ['bb glow', 'bb glow visage', 'teint parfait permanent'],
    'soin des sourcils': ['design sourcils', 'restructuration sourcils', 'épilation sourcils'],
    'micropigmentation': ['micropigmentation', 'microblading', 'maquillage permanent', 'dermopigmentation'],
    'greffe de cheveux': ['greffe de cheveux', 'implant capillaire', 'transplante capillaire', 'fue cheveux', 'fut cheveux'],
    'microneedling capillaire': ['microneedling capillaire', 'mésothérapie capillaire', 'traitement chute de cheveux led'],
    'laser geral': ['laser esthétique', 'laser dermatologique', 'laser ablatif', 'laser non ablativo', 'achat laser', 'location laser', 'laser occasion', 'plateforme laser']
  },
  tratamentos_fr: {
    'vergetures': ['vergetures', 'traitement vergetures', 'enlever vergetures', 'vergetures blanches', 'vergetures rouges'],
    'acné': ['acné', 'boutons', 'traitement acné', 'acné adulte', 'boutons visage'],
    'mélasma': ['mélasma', 'masque de grossesse', 'taches brunes', 'hyperpigmentation', 'taches de soleil'],
    'relâchement cutané': ['relâchement cutané', 'peau lâche', 'flaccidité visage', 'ptose cutanée'],
    'chute de cheveux': ['chute de cheveux', 'perte de cheveux', 'calvitie', 'alopécie', 'traitement calvitie', 'chute capillaire'],
    'cernes': ['cernes', 'cernes creux', 'cernes foncés', 'poches sous les yeux'],
    'graisse localisée': ['graisse localisée', 'bourrelets', 'graisse abdominale', 'réduction de graisse'],
    "cellulite": ["cellulite", "traitement cellulite", "peau d'orange", "réduire cellulite"],
    'rajeunissement facial': ['rajeunissement facial', 'anti-âge', 'rajeunir la peau', 'soin anti-rides'],
    'pores dilatés': ['pores dilatés', 'pores ouverts', 'resserrer les pores'],
    'cicatrices': ['cicatrice', 'cicatrice acné', 'traitement cicatrice', 'cicatrice chirurgicale', 'cicatrice brûlure'],
    'rosacée': ['rosacée', 'couperose', 'rougeurs visage', 'traitement rosacée'],
    'barbe clairsemée': ['barbe clairsemée', 'trous barbe', 'pousse de barbe'],
    'éclaircissement de la peau': ['éclaircissement peau', 'blanchiment peau', 'teint éclatant'],
    'double menton': ['double menton', 'réduction double menton', 'graisse sous-mentonnière'],
    "rides": ["rides", "ridules", "rides d'expression", "rides profondes"],
    'varicosités': ['varicosités', 'petits vaisseaux', 'veines jambes', 'télangiectasies'],
    'rougeurs faciales': ['rougeurs visage', 'érythrose', 'flush visage'],
    'peau sensible': ['peau sensible', 'peau réactive', 'sensibilité cutanée'],
    'texture de peau irrégulière': ['texture peau', 'grain de peau', 'peau rugueuse', 'améliorer grain de peau'],
    'qualité de la peau': ['qualité de la peau', 'éclat de la peau', 'skin quality'],
    'rajeunissement corporel': ['rajeunissement corps', 'anti-âge corps'],
    'perte de centimètres': ['perte de centimètres', 'amincissement corps', 'minceur estética'],
    'remodelage corporel': ['remodelage corps', 'contouring corps', 'silhouette sculptée'],
    "rétention d'eau": ["rétention d'eau", "gonflement", "jambes lourdes", "oedème"],
    'taches intimes': ['hyperpigmentation intime', 'éclaircissement zone intime'],
    'rajeunissement intime': ['rajeunissement intime', 'estética intime', 'réjuvénation vaginale'],
    'laxité intime': ['laxité intime', 'fermeté vaginale', 'sécheresse intime'],
    'pellicules': ['pellicules', 'dermatite seborréique', 'cuir chevelu gras'],
    'peau grasse': ['peau grasse', 'excès de sébum', 'brillance visage'],
    'peau sèche': ['peau sèche', 'déshydratation cutanée', 'hydratation intense']
  },
  anatomia_fr: {
    'face': ['visage', 'facial', 'peau du visage', 'contour du visage', 'harmonisation faciale', 'rides du visage', 'cernes'],
    'abdomen': ['abdomen', 'ventre', 'graisse abdominale', 'relâchement abdominal', 'post-grossesse', 'définition abdominale'],
    'glutes': ['fessiers', 'fesses', 'lifting des fesses', 'volume fessier', 'esthétique fessière', 'cellulite fesses'],
    'thighs': ['cuisses', 'intérieur des cuisses', 'arrière des cuisses', 'graisse des cuisses', 'cellulite des cuisses', 'frottement entre les jambes'],
    'flanks': ['flancs', "poignées d'amour", 'graisse des flancs', 'graisse latérale', 'taille'],
    'arms': ['bras', 'ailes de chauve-souris', 'relâchement des bras', 'graisse des bras'],
    'double chin': ['double menton', 'sous-menton', 'graisse sous-mentonnière', 'contour mandibulaire'],
    'back': ['dos', 'graisse du dos', 'plis du dos', 'graisse du soutien-gorge'],
    'intimate area': ['zone intime', 'région génitale', 'esthétique intime', 'blanchiment intime', 'rajeunissement intime', 'laxité intime'],
    'neck and chest': ['cou', 'décolleté', 'rides du cou', 'relâchement du cou', 'taches sur le décolleté']
  },
  intencao_compra_fr: {
    'valeur_et_investissement': ['prix', 'tarif', 'coût', 'combien ça coûte', 'devis', 'budget', 'investissement', 'liste de prix', 'promo', 'offres', 'financement', 'paiement en plusieurs fois', 'code promo'],
    'confiance_et_autorite': ['meilleure clinique', 'spécialiste près de chez moi', 'meilleur médecin', 'expert en', 'où aller', 'recommandation', 'avis', 'certifié', 'clinique de luxe', 'médecin des stars', 'service premium', 'clinique agréée'],
    'preuve_sociale_et_vlog': ['avant après', 'photos réelles', 'résultats', 'témoignages', 'cas réels', 'vlog procédure', 'journal de récupération', 'mon expérience avec', 'avis client', 'photos jour après jour', 'qui l’a déjà fait'],
    'securite_et_peurs': ['risques', 'danger', 'complications', 'effets secondaires', 'douleur', 'anesthésie', 'récupération', "éviction sociale", 'soins après', 'contre-indications', 'pour qui', 'erreur procédure', 'nécrose'],
    'maintenance_et_cycle': ['longévité', 'durée de vie', 'entretien', 'fréquence', 'nombre de séances', 'retouche', 'phase d’attaque', 'effet rebond', 'perte de résultat', 'refaire le soin'],
    'geolocalisation_proximite': ['proche de moi', 'dans ma ville', 'à domicile', 'meilleur du quartier', 'clinique à [ville]', 'adresses'],
    'education_et_concurrence': ['formation', 'spécialisation', 'recherche modèle', 'atelier', 'formation professionnelle', 'post-doctorat', 'mentorat médical']
  },

  marcas_injetaveis_fr: {
    'toxines': ['Botox Allergan', 'Dysport', 'Xeomin', 'Azzalure', 'Bocouture', 'Nabota'],
    'fillers': ['Juvederm', 'Restylane', 'Teosyal', 'Belotero', 'Stylage', 'Perfectha', 'RHA Collection', 'Yvoire', 'Vivacy'],
    'biostimulateurs': ['Sculptra', 'Radiesse', 'Ellanse', 'AestheFill', 'Lanluma', 'Hydroxyapatite de calcium', 'PLLA'],
    'skinboosters_marcas': ['Profhilo', 'Restylane Vital', 'Juvederm Volite', 'NCTF 135HA', 'Révitalisation cutanée', 'Redensity 1']
  },

  tipos_tecnologia_laser_fr: {
    'ablatif': ['Laser CO2 fractionné', 'Erbium YAG 2940nm', 'Resurfaçage ablatif', 'Peeling Phénol Laser'],
    'non_ablatif': ['Erbium Glass 1550nm', 'Nd:YAG 1064nm', 'Rajeunissement non ablatif', 'Laser Diode Esthétique'],
    'thulium_bb_laser': ['Laser Thulium 1927nm', 'BB Laser', 'Lavieen', 'LaseMD', 'Peau de porcelaine laser'],
    'picosseconde': ['Laser Picosseconde', 'Pico Laser', 'Picosure', 'Picoway', 'Discovery Pico', 'Détatouage Pico'],
    'q_switched': ['Laser Q-Switched', 'Acroma', 'Spectra', 'Vektra', 'Traitement Mélasma Laser'],
    'vasculaire_ktp': ['Laser Vasculaire', 'Vbeam Perfecta', 'Laser KTP 532nm', 'Laser Varicosités', 'Laser à colorant pulsé'],
    'epilation_physique': ['Épilation Laser Diode', 'Laser Alexandrite', 'Laser Rubis', 'Épilation Lumière Pulsée'],
    'ultrasons_hifu': ['Ultrasons Focalisés', 'HIFU', 'Ultraformer', 'Ultherapy', 'Liftera', 'Softwave'],
    'rf_microneedling': ['Microneedling Radiofréquence', 'Morpheus8', 'Potenza', 'Secret RF', 'Sylfirm X'],
    'ipl_bbl': ['IPL', 'Lumière Intense Pulsée', 'Lumecca', 'BBL Hero', 'Photofacial'],
    'cryolipolyse_physique': ['Cryolipolyse', 'Coolsculpting', 'Mincir par le froid', 'Clatuu Alpha']
  },

  comparacoes_estrategicas_fr: {
    'doutes_procedure': ['Botox ou Injection', 'Lavieen vs CO2', 'Ultraformer ou Biostimulateur', 'Sculptra ou Radiesse', 'Morpheus8 vs Ultraformer'],
    'doutes_marques': ['Ultraformer III ou MPT', 'Soprano Titanium vs Ice', 'Coolsculpting ou Emsculpt']
  },
  // ==========================================
  // 🇮🇹 ITALIANO (Italiano)
  // ==========================================
  procedimentos_it: {
    'tossina botulinica': ['botox', 'tossina botulinica', 'botox viso', 'botox fronte', 'rughe d’espressione botox', 'botox preventivo', 'iniezioni botox', 'dysport', 'xeomin'],
    'filler': ['filler', 'filler viso', 'acido ialuronico', 'filler labbra', 'filler occhiaie', 'jawline contouring', 'filler rughe', 'filler zigomi', 'filler mento'],
    'biostimolatore di collagene': ['biostimolatore', 'biostimolatore di collagene', 'sculptra', 'radiesse', 'ellansé', 'induzione di collagene', 'stimolazione collagene'],
    'skinbooster': ['skinbooster', 'skin booster', 'idratazione iniettabile', 'profhilo', 'idratazione profonda pelle', 'mesolift'],
    'microneedling': ['microneedling', 'microneedling viso', 'dermapen', 'dermaroller', 'terapia di induzione del collagene', 'morpheus8', 'microneedling rf'],
    'peeling chimico': ['peeling chimico', 'peeling viso', 'peeling agli acidi', 'peeling glicolico', 'peeling tca', 'peeling fenolo', 'peeling superficiale', 'peeling profondo'],
    'peeling al diamante': ['peeling diamante', 'microdermoabrasione', 'dermoabrasione estetica', 'levigatura pelle'],
    'pulizia del viso': ['pulizia del viso', 'pulizia viso profonda', 'estrazione punti neri', 'pulizia viso medica', 'trattamento viso purificante'],
    'epilazione laser': ['epilazione laser', 'laser peli', 'rimozione peli laser', 'epilazione definitiva', 'laser a diodo', 'laser alessandrite', 'laser nd yag', 'epilazione laser inguine'],
    'laser co2': ['laser co2', 'laser co2 frazionato', 'laser frazionato', 'resurfacing laser', 'laser ablativo', 'ringiovanimento laser', 'laser cicatrici acne'],
    'laser per macchie': ['laser macchie', 'laser macchie viso', 'laser pigmentazione', 'laser melasma', 'laser macchie solari', 'laser lentigo', 'picolaser'],
    'rimozione tatuaggi laser': ['rimozione tatuaggi', 'rimozione tatuaggi laser', 'cancellare tatuaggio laser', 'picosure', 'laser rimozione tattoo'],
    'laser vascolare': ['laser vascolare', 'laser capillari', 'laser rosacea', 'laser teleangectasie', 'laser angioma', 'vbeam'],
    'radiofrequenza': ['radiofrequenza', 'radiofrequenza viso', 'radiofrequenza corpo', 'rassodamento pelle rf', 'radiofrequenza estetica'],
    'hifu': ['hifu', 'ultrasuoni focalizzati', 'hifu viso', 'ultherapy', 'ultraformer', 'lifting non chirurgico'],
    'ultrasuoni estetici': ['ultrasuoni', 'ultrasuoni estetici', 'ultrasuoni corpo', 'cavitazione'],
    'criolipolisi': ['criolipolisi', 'coolsculpting', 'dimagrimento localizzato freddo', 'distruzione grasso freddo', 'criolipolisi addome'],
    'carbossiterapia': ['carbossiterapia', 'carbossi viso', 'carbossi smagliature', 'carbossi occhiaie'],
    'mesoterapia': ['mesoterapia', 'mesoterapia viso', 'mesoterapia corpo', 'mesoterapia cellulite', 'iniezioni estetiche'],
    'enzimi lipolitici': ['enzimi grasso', 'lipolisi enzimatica', 'sciogliere grasso iniezioni', 'iniezioni sciogligrasso'],
    'fili tensori': ['fili tensori', 'fili pdo', 'fili di sospensione', 'lifting con fili', 'fili biostimolanti', 'lifting non chirurgico'],
    'armonizzazione viso': ['armonizzazione viso', 'profiloplastica', 'full face estetica', 'bilanciamento facciale'],
    'plasma pen': ['plasma pen', 'fibroblast plasma', 'jato de plasma', 'plasma lift', 'plasma estetico'],
    'idrodermoabrasione': ['idrodermoabrasione', 'hydrafacial', 'pulizia hydrafacial', 'idratazione profonda viso'],
    'ledterapia': ['ledterapia', 'led viso', 'fototerapia led', 'luce led estetica', 'fotobiomodulazione'],
    'massaggio modellante': ['massaggio modellante', 'massaggio riducente', 'massaggio corpo estetico', 'massaggio dimagrante'],
    'linfodrenaggio': ['linfodrenaggio', 'linfodrenaggio post operatório', 'massaggio linfodrenante', 'metodo vodder'],
    'endermologia': ['endermologia', 'lpg', 'cellu m6', 'trattamento cellulite lpg'],
    'luce pulsata': ['luce pulsata', 'ipl', 'fotoringiovanimento', 'fototerapia'],
    'bb glow': ['bb glow', 'bb glow viso', 'fondotinta permanente'],
    'design sopracciglia': ['disegno sopracciglia', 'architettura sopracciglia', 'modellamento sopracciglia'],
    'micropigmentazione': ['micropigmentazione', 'microblading', 'trucco permanente', 'dermopigmentazione'],
    'trapianto capelli': ['trapianto capelli', 'autotrapianto capelli', 'fue capelli', 'fut capelli', 'impianto capelli'],
    'microneedling capelli': ['microneedling capelli', 'mesoterapia capelli', 'trattamento caduta capelli'],
    'laser geral': ['laser estetico', 'laser dermatologico', 'piattaforma laser', 'noleggio laser', 'laser usato', 'vendita laser']
  },
  tratamentos_it: {
    'smagliature': ['smagliature', 'trattamento smagliature', 'rimuovere smagliature', 'smagliature bianche', 'smagliature rosse'],
    'acne': ['acne', 'brufoli', 'trattamento acne', 'acne adulta', 'punti neri'],
    'melasma': ['melasma', 'macchie scure', 'macchie sulla pele', 'schiarimento melasma', 'iperpigmentazione', 'macchie solari'],
    'lassità cutanea': ['lassità cutanea', 'pelle rilassata', 'cedimento viso', 'pelle flaccida'],
    'caduta capelli': ['caduta capelli', 'calvizie', 'alopecia', 'trattamento capelli', 'caduta capelli donna', 'diradamento capelli'],
    'occhiaie': ['occhiaie', 'occhiaie profonde', 'occhiaie scure', 'borse sotto gli occhi'],
    'grasso localizzato': ['grasso localizzato', 'adipe localizzato', 'grasso addominale', 'riduzione grasso'],
    'cellulite': ['cellulite', 'trattamento cellulite', 'buccia d’arancia', 'ridurre cellulite'],
    'ringiovanimento viso': ['ringiovanimento viso', 'anti età', 'ringiovanire pele', 'anti aging'],
    'pori dilatati': ['pori dilatati', 'pori aperti', 'restringere pori'],
    'cicatrici': ['cicatrice', 'cicatrice acne', 'trattamento cicatrici', 'cicatrice chirurgica', 'cicatrice ustione'],
    'rosacea': ['rosacea', 'couperose', 'arrossamento viso', 'trattamento rosacea'],
    'barba a chiazze': ['barba a chiazze', 'crescita barba', 'folta barba'],
    'schiarimento pele': ['schiarimento pelle', 'sbiancamento pelle', 'uniformare colorito'],
    'doppio mento': ['doppio mento', 'riduzione doppio mento', 'grasso sottomento'],
    'rughe': ['rughe', 'linee di espressione', 'rughe profonde'],
    'capillari': ['capillari', 'capillari gambe', 'teleangectasie', 'vene varicose'],
    'rossore facciale': ['rossore viso', 'eritrosi', 'vampate viso'],
    'pele sensibile': ['pelle sensibile', 'pelle reattiva', 'ipersensibilità cutanea'],
    'texture pele': ['grana della pelle', 'pelle irregolare', 'pelle ruvida', 'migliorare texture pelle'],
    'qualità della pele': ['qualità della pelle', 'pelle sana', 'skin quality'],
    'ringiovanimento corpo': ['ringiovanimento corpo', 'anti età corpo'],
    'riduzione misure': ['riduzione misure', 'dimagrimento estetico', 'perdere centimetri'],
    'rimodellamento corpo': ['rimodellamento corpo', 'body contouring', 'scultura corpo'],
    'ritenzione idrica': ['ritenzione idrica', 'gonfiore gambe', 'edema'],
    'macchie intime': ['macchie intime', 'iperpigmentazione intima', 'schiarimento zone intime'],
    'ringiovanimento intimo': ['ringiovanimento intimo', 'estetica intima', 'ringiovanimento vaginale'],
    'lassità intima': ['lassità intima', 'tono vaginale', 'secchezza intima'],
    'forfora': ['forfora', 'dermatite seborroica', 'desquamazione cuoio capelluto'],
    'pele grassa': ['pelle grassa', 'eccesso di sebo', 'pelle lucida'],
    'pele secca': ['pelle secca', 'disidratazione cutanea', 'idratazione intensa']
  },
  anatomia_it: {
    'face': ['viso', 'faccia', 'facciale', 'pelle del viso', 'contorno viso', 'armonizzazione viso', 'rughe del viso', 'occhiaie'],
    'abdomen': ['addome', 'pancia', 'grasso addominale', 'lassità addominale', 'post-gravidanza', 'definizione addominale'],
    'glutes': ['glutei', 'sedere', 'natiche', 'lifting glutei', 'volume glutei', 'estetica glutei', 'cellulite glutei'],
    'thighs': ['cosce', 'interno coscia', 'parte posteriore cosce', 'grasso cosce', 'cellulite cosce', 'sfregamento tra le gambe'],
    'flanks': ['fianchi', "maniglie dell'amore", 'grasso fianchi', 'grasso laterale', 'vita'],
    'arms': ['braccia', 'braccio', 'ali di pipistrello', 'lassità braccia', 'grasso braccia'],
    'double chin': ['doppio mento', 'sottomento', 'grasso sottomentoniero', 'contorno mandibolare'],
    'back': ['schiena', 'grasso sulla schiena', 'rotolini schiena', 'grasso reggiseno'],
    'intimate area': ['zona intima', 'area genitale', 'estetica intima', 'schiarimento intimo', 'ringiovanimento intimo', 'lassità intima'],
    'neck and chest': ['collo', 'decollete', 'rughe collo', 'lassità collo', 'macchie decollete']
  },
  intencao_compra_it: {
    'valore_e_investimento': ['prezzo', 'costo', 'quanto costa', 'preventivo', 'budget', 'investimento', 'listino prezzi', 'promozione', 'offerte', 'finanziamento', 'pagamento a rate', 'codice sconto'],
    'fiducia_e_autorita': ['migliore clinica', 'specialista vicino a me', 'miglior medico', 'esperto in', 'dove farlo', 'raccomandazione', 'recensioni', 'medico certificato', 'clinica di lusso', 'medico dei famosi', 'servizio premium', 'clinica autorizzata'],
    'prova_sociale_e_vlog': ['prima e dopo', 'foto reali', 'risultati', 'testimonianze', 'casi reali', 'vlog procedura', 'diario di guarigione', 'la mia esperienza con', 'recensione', 'foto giorno per giorno', 'chi lo ha fatto'],
    'sicurezza_e_paure': ['rischi', 'pericolo', 'complicazioni', 'effetti collaterali', 'dolore', 'anestesia', 'guarigione', 'tempi di recupero', 'cura post', 'controindicazioni', 'chi non può farlo', 'errore procedura', 'necrosi'],
    'mantenimento_e_ciclo': ['durata', 'quanto dura', 'mantenimento', 'frequenza', 'sedute necessarie', 'ritocco', 'fase di attacco', 'effetto rebound', 'perdita di risultato', 'ripetere il trattamento'],
    'geolocalizzazione_proximita': ['vicino a me', 'nella mia città', 'servizio a domicilio', 'migliore della zona', 'clinica a [città]', 'sedi'],
    'educazione_e_concorrenza': ['corso di', 'specializzazione', 'ricerca modelli', 'workshop', 'formazione professionale', 'post-laurea', 'mentorship medica']
  },

  marcas_injetaveis_it: {
    'tossine': ['Botox Allergan', 'Dysport', 'Xeomin', 'Azzalure', 'Bocouture', 'Nabota', 'Vistabex'],
    'filler': ['Juvederm', 'Restylane', 'Belotero', 'Teosyal', 'Algeness', 'Perfectha', 'RHA Collection', 'Yvoire', 'Neauvia'],
    'biostimolatori': ['Sculptra', 'Radiesse', 'Ellanse', 'Elleva', 'AestheFill', 'Idrossiapatite di calcio', 'PLLA'],
    'skinboosters_brands': ['Profhilo', 'Restylane Vital', 'Juvederm Volite', 'NCTF 135HA', 'Biorivitalizzazione', 'Redensity 1']
  },

  tipos_tecnologia_laser_it: {
    'ablativo': ['Laser CO2 Frazionato', 'Laser Erbium YAG 2940nm', 'Resurfacing Ablativo', 'Peeling al Fenolo Laser'],
    'non_ablativo': ['Laser Erbium Glass 1550nm', 'Laser Nd:YAG 1064nm', 'Ringiovanimento non ablativo', 'Laser a Diodo Estetico'],
    'thulium_bb_laser': ['Laser al Tullio 1927nm', 'BB Laser', 'Lavieen', 'LaseMD', 'Pelle di porcellana laser'],
    'picosecondi': ['Laser a Picosecondi', 'Pico Laser', 'Picosure', 'Picoway', 'Discovery Pico', 'Rimozione tatuaggi Pico'],
    'q_switched': ['Laser Q-Switched', 'Acroma', 'Spectra', 'Vektra', 'Trattamento Melasma Laser'],
    'vascolare_ktp': ['Laser Vascolare', 'Vbeam Perfecta', 'Laser KTP 532nm', 'Laser Capillari', 'Dye Laser'],
    'epilazione_fisica': ['Epilazione Laser a Diodo', 'Laser Alessandrite', 'Laser al Rubino', 'Luce Pulsata Epilazione'],
    'ultrasuoni_hifu': ['Ultrasuoni Focalizzati', 'HIFU', 'Ultraformer', 'Ultherapy', 'Liftera', 'Softwave'],
    'rf_microneedling': ['Radiofrequenza Microneedling', 'Morpheus8', 'Potenza', 'Secret RF', 'Sylfirm X'],
    'ipl_bbl': ['IPL', 'Luce Pulsata Intensa', 'Lumecca', 'BBL Hero', 'Fotoringiovanimento'],
    'criolipolisi_fisica': ['Criolipolisi', 'Coolsculpting', 'Dimagrimento a freddo', 'Clatuu Alpha']
  },

  comparacoes_estrategicas_it: {
    'dubbi_procedura': ['Botox o Filler', 'Lavieen vs CO2', 'Ultraformer o Biostimolatore', 'Sculptra o Radiesse', 'Morpheus8 vs Ultraformer'],
    'dubbi_marche': ['Ultraformer III o MPT', 'Soprano Titanium vs Ice', 'Coolsculpting o Emsculpt']
  },
  // ==========================================
  // 🇰🇷 COREANO (한국어)
  // ==========================================
  procedimentos_ko: {
    '보툴리눔 톡신': ['보톡스', '보툴리눔 톡신', '이마 보톡스', '사각턱 보톡스', '주름 보톡스', '스킨 보톡스', '미용 보톡스', '엘러간', '디스포트'],
    '필러': ['필러', '코 필러', '입술 필러', '턱끝 필러', '팔자주름 필러', '히알루론산 필러', '이마 필러', '볼필러', '애교살 필러'],
    '콜라겐 생성 촉진제': ['콜라겐 주사', '스컬트라', '레디에스', '엘란쎄', '콜라겐 재생', '쥬베룩', '울트라콜'],
    '스킨부스터': ['스킨부스터', '리쥬란 힐러', '샤넬주사', '물광주사', '엑소좀', '피부 수분 주사', '프로파일로'],
    '마이크로니들링': ['MTS', '마이크로니들링', '더마펜', '더마롤러', '프락셀', '포텐자', '모피어스8'],
    '화학적 필링': ['화학 필링', '알라딘 필링', '산필링', '글리콜산 필링', 'TCA 필링', '페놀 필링', '피부 박피'],
    '다이아몬드 필링': ['다이아몬드 필링', '미세박피술', '박피술', '피부 스케일링'],
    '피부 관리': ['피부 관리', '딥클렌징', '모공 청소', '블랙헤드 제거', '압출', '에스테틱 관리'],
    '레이저 제모': ['레이저 제모', '제모 레이저', '영구 제모', '겨드랑이 제모', '비키니 라인 제모', '다리 제모'],
    'CO2 레이저': ['CO2 레이저', '프락셀 레이저', '탄산가스 레이저', '점 제거 레이저', '흉터 레이저'],
    '색소 레이저': ['색소 레이저', '기미 레이저', '잡티 제거', '레이저 토닝', '피코 토닝', '멜라즈'],
    '문신 제거 레이저': ['문신 제거', '타투 제거', '레이저 문신 제거', '피코슈어'],
    '혈관 레이저': ['혈관 레이저', '안면홍조 레이저', '모세혈관 확장증', '브이빔', '시너지 레이저'],
    '고주파 리프팅': ['고주파 리프팅', '인모드', '써마지', '피부 탄력 레이저', 'RF 리프팅'],
    'HIFU 리프팅': ['HIFU', '슈링크', '울쎄라', '리프팅 레이저', '고강도 집속 초음파', '리프테라'],
    '미용 초음파': ['초음파 관리', 'LDM', '물방울 리프팅', '초음파 마사지'],
    '냉동지방분해술': ['냉동지방분해', '쿨스컬프팅', '젤틱', '지방 냉동', '복부 지방 분해'],
    '카복시테라피': ['카복시', '이산화탄소 주사', '지방 분해 카복시', '튼살 카복시'],
    '메조테라피': ['메조테라피', '얼굴 메조', '비만 메조', '지방 분해 주사'],
    '지방 분해 주사': ['윤곽주사', '지방분해주사', '브이 라인 주사', '이중턱 주사', '컷주사'],
    'PDO 실리프팅': ['실리프팅', 'PDO 실', '녹는 실 리프팅', '민트실', '리프팅 실'],
    '얼굴 윤곽 교정': ['안면 윤곽', '얼굴 밸런싱', '풀페이스 필러', '페이스 컨투어링'],
    '플라즈마 펜': ['플라즈마 펜', '플라즈마 리프팅', '플라스마 피부 관리'],
    '하이드라더마브레이전': ['아쿠아필', '하이드라페이셜', '수분 필링', '모공 스케일링'],
    'LED 테라피': ['LED 마스크', '광선 치료', '컬러 테라피', '피부 재생 LED'],
    '경락 마사지': ['경락 마사지', '체형 관리', '슬리밍 마사지', '독소 배출 마사지'],
    '림프 마사지': ['림프 드레나쥐', '림프 순환 마사지', '붓기 관리', '사후 관리 마사지'],
    '엔더몰로지': ['엔더몰로지', 'LPG 마사지', '셀룰라이트 관리 마사지'],
    'IPL': ['IPL', '광회춘술', '잡티 레이저', '포토 토닝'],
    'BB 글로우': ['BB 글로우', '반영구 파운데이션', '피부톤 보정'],
    '눈썹 디자인': ['눈썹 왁싱', '눈썹 정리', '눈썹 모양'],
    '반영구 화장': ['반영구', '눈썹 문신', '마이크로블레이딩', '입술 문신'],
    '모발 이식': ['모발 이식', '헤어 라인 교정', 'FUE 모발 이식', '비절개 모발 이식'],
    '두피 마이크로니들링': ['두피 MTS', '탈모 치료', '두피 관리', '모근 강화'],
    '전체 레이저': ['피부과 레이저', '미용 장비', '레이저 장비 매매', '레이저 리스', '중고 레이저']
  },
  tratamentos_ko: {
    '튼살': ['튼살', '튼살 제거', '튼살 치료', '하얀 튼살', '빨간 튼살'],
    '여드름': ['여드름', '트러블', '여드름 치료', '성인 여드름', '좁쌀 여드름'],
    '기미': ['기미', '잡티', '검버섯', '피부 미백', '멜라닌 색소'],
    '피부 처짐': ['피부 처짐', '얼굴 처짐', '탄력 저하', '늘어진 피부'],
    '탈모': ['탈모', '대머리', '탈모 치료', '여성 탈모', '정수리 탈모', 'M자 탈모'],
    '다크서클': ['다크서클', '눈밑 꺼짐', '눈가 주름', '눈밑 지방'],
    '국소 지방': ['국소 지방', '군살', '복부 비만', '체지방 감소'],
    '셀룰라이트': ['셀룰라이트', '셀룰라이트 제거', '허벅지 셀룰라이트'],
    '얼굴 재생': ['피부 재생', '안티에이징', '동안 피부', '노화 방지'],
    '넓은 모공': ['모공 축소', '넓은 모공', '모공 관리', '모공 쪼이기'],
    '흉터': ['흉터', '여드름 흉터', '수술 흉터', '화상 흉터', '흉터 제거'],
    '주사비': ['주사비', '딸기코', '안면홍조', '홍조 치료'],
    '듬성듬성한 수염': ['수염 발모', '수염 기르기', '수염 관리'],
    '피부 미백': ['피부 미백', '화이트닝', '피부톤 개선'],
    '이중턱': ['이중턱', '턱살', '이중턱 제거'],
    '주름': ['주름', '잔주름', '팔자주름', '눈가 주름'],
    '모세혈관': ['모세혈관', '실핏줄', '하지정맥류', '거미양 정맥'],
    '안면 홍조': ['안면 홍조', '붉은 얼굴', '얼굴 붉기'],
    '민감성 피부': ['민감성 피부', '예민한 피부', '피부 진정'],
    '거친 피부 결': ['피부 결', '거친 피부', '피부 요철', '매끄러운 피부'],
    '피부 건강': ['피부 컨디션', '건강한 피부', '피부 광택'],
    '바디 재생': ['바디 탄력', '체형 관리', '바디 리프팅'],
    '사이즈 감소': ['사이즈 감소', '다이어트 시술', '체중 감량'],
    '바디 컨투어링': ['바디 라인', '몸매 교정', 'S라인 관리'],
    '부종': ['부종', '붓기', '몸이 부을 때', '수분 정체'],
    '색소 침착': ['색소 침착', '겨드랑이 미백', '사타구ni 미백'],
    '여성 성형': ['여성 성형', '질 타이트닝', '여성 미용'],
    '여성 이완증': ['질 이완증', '여성 탄력', '질 건조증'],
    '비듬': ['비듬', '지루성 피부염', '두피 가려움'],
    '지성 피부': ['지성 피부', '개기름', '피지 조절'],
    '건성 피부': ['건성 피부', '피부 건조', '속당김', '수분 공급']
  },
  anatomia_ko: {
    'face': ['얼굴', '안면', '페이스', '얼굴 피부', '얼굴 윤곽', '안면 윤곽', '얼굴 주름', '다크서클'],
    'abdomen': ['복부', '배', '뱃살', '복부 비만', '복부 탄력', '산후 관리', '복근 정의'],
    'glutes': ['엉덩이', '힙', '힙업', '엉덩이 볼륨', '엉덩이 성형', '엉덩이 셀룰라이트'],
    'thighs': ['허벅지', '안쪽 허벅지', '뒷 허벅지', '허벅지 살', '허벅지 셀룰라이트', '다리 쓸림'],
    'flanks': ['옆구리', '옆구리살', '러브핸들', '허리 라인', '허리'],
    'arms': ['팔', '팔뚝', '팔뚝살', '처진 팔뚝', '팔 탄력'],
    'double chin': ['이중턱', '턱살', '브이라인', '턱끝', '하악 윤곽'],
    'back': ['등', '등살', '뒷태', '브래지어 라인 살'],
    'intimate area': ['시크릿존', '와이존', '여성 성형', '미백 주사', '질 타이트닝', '여성 탄력'],
    'neck and chest': ['목', '데콜테', '목주름', '목 탄력', '가슴 윗부분 잡티']
  },
  intencao_compra_ko: {
    'value_and_investment': ['가격', '비용', '얼마', '견적', '예산', '투자', '가격표', '이벤트', '패키지', '가성비', '결제 방법', '할부', '미용 할부', '할인 코드'],
    'trust_and_authority': ['잘하는곳', '내 주변 전문가', '유명한 의사', '전문가', '어디서 하나요', '추천', '리뷰', '전문의', '고급 클리닉', '연예인 병원', '프리미엄 서비스', '허가된 병원'],
    'social_proof_and_vlog': ['전후사진', '실제 사진', '결과', '후기', '실제 사례', '시술 브이로그', '회복 일기', '내돈내산', '리뷰', '일자별 사진', '실제 경험'],
    'safety_and_fears': ['부작용', '위험', '합병증', '주의사항', '통증', '마취', '회복', '회복기간', '사후관리', '금기사항', '부적합 대상', '시술 실수', '괴사'],
    'maintenance_and_cycle': ['유지기간', '얼마나 가나요', '유지보수', '주기', '필요 횟수', '리터치', '집중 단계', '요요 현상', '효과 상실', '재시술'],
    'geolocation_proximity': ['가까운 곳', '우리 동네', '방문 서비스', '지역 최고', '클리닉 [도시]', '지점'],
    'education_and_competition': ['교육 과정', '전문화', '모델 구함', '워크숍', '전문가 교육', '대학원', '의사 멘토링']
  },

  marcas_injetaveis_ko: {
    'toxins': ['보톡스 엘러간', '디스포트', '제오민', '주보', '나보타', '보툴렉스', '메디톡신'],
    'fillers': ['쥬비덤', '레스틸렌', '뉴라미스', '벨로테로', '테오시알', '퍼펙타', '아띠에르', '이브아르'],
    'biostimulators': ['스컬트라', '레디에스', '엘란쎄', '쥬베룩', '에스테필', '가나필', '칼슘 하이드록시아파타이트', 'PLLA'],
    'skinboosters_brands': ['프로파일로', '리쥬란 힐러', '쥬비덤 볼라이트', 'NCTF 135HA', '피부 재생', '엑소좀']
  },

  tipos_tecnologia_laser_ko: {
    'ablative': ['프락셀 CO2 레이저', '어븀야그 2940nm', '박피성 리서페이싱', '페놀 필 레이저'],
    'non_ablative': ['어븀글라스 1550nm', 'Nd:YAG 1064nm', '비박피성 재생', '미용 다이오드 레이저'],
    'thulium_bb_laser': ['툴륨 레이저 1927nm', 'BB 레이저', '라비앙', '라셈드', '유리피부 레이저'],
    'picosecond': ['피코초 레이저', '피코 레이저', '피코슈어', '피코웨이', '디스커버리 피코', '피코 문신 제거'],
    'q_switched': ['Q-스위치 레이저', '아크로마', '스펙트라', '벡터라', '기미 레이저 치료'],
    'vascular_ktp': ['혈관 레이저', '브이빔 퍼펙타', 'KTP 레이저 532nm', '실핏줄 레이저', '다이 레이저'],
    'hair_removal_physics': ['다이오드 제모 레이저', '알렉산드라이트 레이저', '루비 레이저', 'IPL 제모'],
    'ultrasound_hifu': ['미세집속 초음파', 'HIFU', '울트라포머', '울쎄라', '리프테라', '슈링크'],
    'rf_microneedling': ['고주파 마이크로니들링', '모피어스8', '포텐자', '시크릿 RF', '실펌 X'],
    'ipl_bbl': ['IPL', '강력펄스광선', '루메카', 'BBL 히어로', '포토페이셜'],
    'cryolipolysis_physics': ['냉동지방분해', '쿨스컬프팅', '지방 냉동', '클라투 알파']
  },

  comparacoes_estrategicas_ko: {
    'procedure_doubts': ['보톡스 필러 차이', '라비앙 vs CO2', '울트라포머 vs 바이오스티뮬레이터', '스컬트라 vs 레디에스', '모피어스8 vs 울트라포머'],
    'brand_doubts': ['울트라포머 III vs MPT', '소프라노 티타늄 vs 아이스', '슈링크 vs 울쎄라']
  },
  // ==========================================
  // 🇯🇵 JAPONÊS (日本語)
  // ==========================================
  procedimentos_ja: {
    'ボツリヌストキシン': ['ボトックス', 'ボツリヌストキシン', '額 ボトックス', 'エラ ボトックス', 'シワ ボトックス', 'スキンボトックス', '美容ボトックス', 'アラガン', 'ディスポート'],
    'フィラー': ['フィラー', '鼻 フィラー', '唇 フィラー', '顎 フィラー', 'ほうれい線 フィラー', 'ヒアルロン酸注入', '額 フィラー', '頬 フィラー', '涙袋 フィラー'],
    'コラーゲンブースター': ['コラーゲン注射', 'スカルプトラ', 'レディエッセ', 'エランセ', 'コラーゲン生成', 'ジュベルック', 'ウルトラコール'],
    'スキンブースター': ['スキンブースター', 'リジュラン', 'シャネル注射', '水光注射', 'エクソソーム', '肌水分注射', 'プロファイロ'],
    'マイクロニードリング': ['MTS', 'マイクロニードリング', 'ダー마ペン', 'ダーマローラー', 'フラクセル', 'ポテンツァ', 'モフィウス8'],
    'ケミカルピーリング': ['ケミカルピーリング', 'アラジンピーリング', '酸ピーリング', 'グリコール酸ピーリング', 'TCAピーリング', 'フェノールピーリング', '剥離'],
    'ダイヤモンドピーリング': ['ダイヤモンドピーリング', 'マイクロダーマブレーション', '皮フ剥離術', 'スキンピーリング'],
    'スキンケア': ['スキンケア', 'ディープクレンジング', '毛穴掃除', 'ブラックヘッド除去', '角栓取り', 'エステ管理'],
    'レーザー脱毛': ['レーザー脱毛', '脱毛レーザー', '永久脱毛', '脇 脱毛', 'VIO 脱毛', '足 脱毛'],
    'CO2レーザー': ['CO2レーザー', 'フラクセルレーザー', '炭酸ガスレーザー', 'ほくろ除去レーザー', '傷跡レーザー'],
    '色素レーザー': ['色素レーザー', 'シミ取りレーザー', 'そばかす除去', 'レーザートーニング', 'ピコトーニング', 'メラズ'],
    'タトゥー除去レーザー': ['刺青除去', 'タトゥー除去', 'レーザータトゥー除去', 'ピコシュア'],
    '血管レーザー': ['血管レーザー', '赤ら顔レーザー', '毛細血管拡張症', 'Vビーム', 'シナジーレーザー'],
    '高周波リ프팅': ['高周波リフティング', 'インモード', 'サーマクール', '肌弾力レーザー', 'RFリ프팅'],
    'HIFUリ프팅': ['HIFU', 'ハイフ', 'ウルセラ', 'リフティングレーザー', '高密度焦点式超音波', 'リフテラ'],
    '美容超音波': ['超音波管理', 'LDM', '水玉リフティング', '超音波マッサージ'],
    '脂肪冷却': ['冷却脂肪融解', 'クールスカルプティング', 'ゼルティック', '脂肪凍結', '腹部脂肪分解'],
    'カーボメッド': ['カーボメッド', '二酸化炭素注射', '脂肪分解炭酸ガス', '肉割れ カーボ'],
    'メソセラピー': ['メソセラピー', '顔 メソ', '肥満 メソ', '脂肪溶解注射'],
    '脂肪溶解注射': ['輪郭注射', '脂肪分解注射', 'Vライン注射', '二重顎注射', 'BNLS'],
    'PDO糸リフト': ['糸リフト', 'PDO糸', '溶ける糸リフト', 'ミントリフト', 'リフトアップ糸'],
    '顔面輪郭矯正': ['輪郭形成', '顔バランス', 'フルフェイスフィラー', 'フェイスコントゥアリング'],
    'プラズマペン': ['プラズマペン', 'プラズマリフト', 'プラズマスキンケア'],
    'ハイドラフェイシャル': ['アクアピール', 'ハイドラフェイシャル', '水分ピーリング', '毛穴洗浄'],
    'LEDセラピー': ['LEDマスク', '光線療法', 'カラーセラピー', '肌再生LED'],
    '経絡マッサージ': ['経絡マッサージ', '体型管理', 'スリミングマッサージ', 'デトックスマッサージ'],
    'リンパマッサージ': ['リンパドレナージュ', 'リンパ循環マッサージ', '浮腫み管理', '術後マッサージ'],
    'エンダモロジー': ['エンダモロジー', 'LPGマッサージ', 'セルライト管理'],
    'IPL': ['IPL', '光フェイシャル', 'シミ取りレーザー', 'フォトフェイシャル'],
    'BBグロウ': ['BBグロウ', '半永久ファンデーション', '肌トーン補正'],
    'アイブロウデザイン': ['眉毛ワックス', '眉毛整理', '眉毛デザイン'],
    'アートメイク': ['半永久メイク', '眉毛アートメイク', 'マイクロブレーディング', 'リップアートメイク'],
    '自毛植毛': ['植毛', 'ヘアライン矯正', 'FUE植毛', '切らない植毛'],
    '頭皮マイクロニードリング': ['頭皮MTS', '薄毛治療', '頭皮ケア', '毛根強化'],
    'レーザー全般': ['美容レーザー', '美容機器', 'レーザー機器販売', 'レーザーリース', '中古レーザー']
  },
  tratamentos_ja: {
    '肉割れ': ['肉割れ', 'ストレッチマーク', '肉割れ除去', '肉割れ治療', '白い肉割れ', '赤い肉割れ'],
    'ニキビ': ['ニキビ', '肌荒れ', 'ニキビ治療', '大人ニキビ', '白ニキビ'],
    'シミ': ['シミ', 'くすみ', 'そばかす', '美白', 'メラニン色素'],
    '肌のたるみ': ['肌のたるみ', '顔のたるみ', '弾力低下', '伸びた皮膚'],
    '薄毛': ['抜け毛', 'ハゲ', '薄毛治療', '女性の薄毛', 'つむじハゲ', 'M字ハゲ'],
    'クマ': ['クマ', '目の下のクマ', '目の下のたるみ', '目の下の脂肪'],
    '局所脂肪': ['局所脂肪', '余分な脂肪', '腹部肥満', '体脂肪減少'],
    'セルライト': ['セルライト', 'セルライト除去', '太もも セルライト'],
    '顔の再生': ['肌再生', 'アン치エイジング', '若返り', '老化防止'],
    '毛穴の開き': ['毛穴縮小', '毛穴の開き', '毛穴ケア', '毛穴引き締め'],
    '傷跡': ['傷跡', 'ニキビ跡', '手術跡', '火傷跡', '傷跡除去'],
    '酒さ': ['酒さ', '赤ら顔', '顔の赤み', '酒さ治療'],
    'まばらな髭': ['髭 育毛', '髭を生やす', '髭管理'],
    '肌の美白': ['肌の美白', 'ホワイトニング', '肌トーン改善'],
    '二重顎': ['二重顎', '顎下の肉', '二重顎除去'],
    'シワ': ['シワ', '小じわ', 'ほうれい線', '目尻のシワ'],
    '毛細血管': ['毛細血管', '赤ら顔', '下肢静맥瘤', 'クモ状静脈'],
    '顔面紅潮': ['顔面紅潮', '赤い顔', '顔の赤み'],
    '敏感肌': ['敏感肌', 'デリケート肌', '肌の鎮静'],
    '肌のざらつき': ['肌質改善', '肌のざらつき', '肌の凹凸', 'なめらかな肌'],
    '肌の健康': ['肌のコンディション', '健康な肌', '肌のツヤ'],
    'ボディ再生': ['ボディのハリ', '体型管理', 'ボディリフティング'],
    'サイズダウン': ['サイズダウン', 'ダイエット施術', '体重減少'],
    'ボディコントゥアリング': ['ボディライン', '体型矯正', 'Sライン管理'],
    '浮腫': ['浮腫', 'むくみ', '体の腫れ', '水分停滞'],
    '色素沈着': ['色素沈着', '脇の黒ずみ', 'デリケートゾーンの黒ずみ'],
    '女性器形成': ['膣縮小', '膣タイトニング', '女性用美容'],
    '女性器の緩み': ['膣の緩み', '女性の弾力', '膣の乾燥'],
    'フケ': ['フケ', '脂漏性皮膚炎', '頭皮のかゆみ'],
    '脂性肌': ['脂性肌', 'テカリ', '皮脂コントロール'],
    '乾燥肌': ['乾燥肌', '肌の乾燥', 'インナードライ', '水分補給']
  },
  anatomia_ja: {
    'face': ['顔', 'フェイシャル', '顔の肌', '輪郭', '顔面輪郭', '小顔', '顔のシワ', 'クマ'],
    'abdomen': ['腹部', 'お腹', 'お腹の脂肪', '腹部のたるみ', '産後ケア', '腹筋'],
    'glutes': ['お尻', 'ヒップ', 'ヒップアップ', 'お尻のボリューム', '美尻', 'お尻のセルライト'],
    'thighs': ['太もも', '内もも', '太ももの裏', '太ももの脂肪', '太もものセルライト', '股擦れ'],
    'flanks': ['腰回り', '脇腹', 'わき腹の脂肪', 'ウエストライン', 'ウエスト'],
    'arms': ['腕', '二の腕', '振袖肉', '二の腕のたるみ', '二の腕の脂肪'],
    'double chin': ['二重顎', 'あご下の肉', 'フェイスライン', '顎の輪郭'],
    'back': ['背中', '背中の肉', '背中の段々', 'はみ肉'],
    'intimate area': ['デリケートゾーン', 'VIO', 'フェムケア', 'デリケートゾーンの美白', '膣タイトニング', 'フェイシャルタイトニング'],
    'neck and chest': ['首', 'デコルテ', '首のシワ', '首のたるみ', 'デコルテのシミ']
  },
  intencao_compra_ja: {
    'value_and_investment': ['料金', '価格', 'いくら', '見積もり', '予算', '投資', '料金表', 'キャンペーン', 'パック', 'コスパ', '支払い方法', '分割払い', '美容ローン', 'クーポン'],
    'trust_and_authority': ['おすすめ クリニック', '近くの専門医', '名医', '専門家', 'どこがいい', '紹介', '口コミ', '認定医', '高級クリニック', '芸能人御用達', 'プレミアムサービス', '認可クリニック'],
    'social_proof_and_vlog': ['ビフォーアフター', '症例写真', '結果', '体験談', '症례', '施術Vlog', 'ダウンタイム日記', '私の体験', 'レポ', '経過写真', 'やってみた'],
    'safety_and_fears': ['リスク', '危険', '合併症', '副作用', '痛み', '麻酔', '回復', 'ダウンタイム', 'アフターケア', '禁忌', '受けられない人', '失敗', '壊死'],
    'maintenance_and_cycle': ['持ち', 'いつまで続く', 'メンテナンス', '頻度', '必要な回数', 'リタッチ', 'アタック期', 'リバウンド', '効果が切れる', '再施術'],
    'geolocation_proximity': ['近くの', '地元の', '出張サービス', '地域一番', 'クリニック [都市名]', '店舗'],
    'education_and_competition': ['講習', '専門化', 'モニター募集', 'ワークショップ', 'プロ向け研修', '大学院', '医師向け指導']
  },

  marcas_injetaveis_ja: {
    'toxins': ['アラガン ボトックス', 'ディスポート', 'ゼオミン', 'ジュボ', 'ナボタ', 'ボツラックス'],
    'fillers': ['ジュビ덤', 'レスチレン', 'ベロテロ', 'テオシアル', 'パーフェクタ', 'RHAコレクション', 'イヴォアール', 'ニュービア'],
    'biostimulators': ['スカルプトラ', 'レディエッセ', 'エランセ', 'エステフィル', 'ガナフィル', 'ハイドロキシアパタイト', 'PLLA'],
    'skinboosters_brands': ['プロファイロ', 'レスチレンヴィタール', 'ジュビダームボライト', 'NCTF 135HA', '肌質改善', 'リジュラン']
  },

  tipos_tecnologia_laser_ja: {
    'ablative': ['炭酸ガスレーザー', 'エルビウムヤグレーザー 2940nm', 'アブレイティブ', 'フェノールピーリング'],
    'non_ablative': ['フラクショナル 1550nm', 'Nd:YAG 1064nm', '非侵襲的若返り', 'ダイオードレーザー 美容'],
    'thulium_bb_laser': ['ツリウムレーザー 1927nm', 'BBレーザー', 'ラヴィアン', 'ラゼムド', '水光レーザー'],
    'picosecond': ['ピコ秒レーザー', 'ピコレーザー', 'ピコシュア', 'ピコウェイ', 'ディスカバリーピコ', 'ピコ刺青除去'],
    'q_switched': ['Qスイッチレーザー', 'アクロマ', 'スペクトラ', 'ベクトラ', '肝斑レーザー治療'],
    'vascular_ktp': ['血管レーザー', 'Vビーム', 'KTPレーザー 532nm', '毛細血管レーザー', '色素レーザー'],
    'hair_removal_physics': ['ダイオードレーザー脱毛', 'アレキサンドライトレーザー', 'ルビーレーザー', 'IPL脱毛'],
    'ultrasound_hifu': ['高密度焦点式超音波', 'ハイフ', 'ウルトラフォーマー', 'ウルセラ', 'リフテラ', 'ソフウェーブ'],
    'rf_microneedling': ['高周波マイクロニードル', 'モフィウス8', 'ポテンツァ', 'シークレットRF', 'シルファームX'],
    'ipl_bbl': ['IPL', 'インテンスパルスライト', 'ルメッカ', 'BBLヒーロー', 'フォトフェイシャル'],
    'cryolipolysis_physics': ['脂肪冷却', 'クールスカルプティング', '脂肪凍結', 'クラツーアルファ']
  },

  comparacoes_estrategicas_ja: {
    'procedure_doubts': ['ボトックス ヒアルロン酸 違い', 'ラヴィアン vs CO2', 'ハイフ vs 糸リフト', 'スカルプトラ vs レディエッセ', 'モフィウス8 vs ハイフ'],
    'brand_doubts': ['ウルトラフォーマー III vs MPT', 'ソプラノチタニウム vs アイス', 'クールスカルプティング vs ハイフ']
  },
  // ==========================================
  // 🇨🇳 CHINÊS MANDARIM (中文)
  // ==========================================
  procedimentos_zh: {
    '肉毒素': ['肉毒素', '肉毒杆菌', '瘦脸针', '除皱针', '瘦腿针', '保妥适', '弥散度', '肉毒毒素', '祛皱'],
    '填充': ['填充', '面部填充', '玻尿酸', '丰唇', '填充泪沟', '隆鼻', '丰太阳穴', '垫下巴', '玻尿酸隆鼻', '玻尿酸填充'],
    '胶原蛋白增生剂': ['胶原蛋白', '童颜针', '少女针', '舒颜萃', '艾莉薇', '胶原蛋白再生', '刺激胶原蛋白'],
    '水光针': ['水光针', '水光补水', '菲洛嘉', '瑞蓝', '润致', '皮肤深层补水', '水光注射', '动能素'],
    '微针': ['微针', '黄金微针', '微针美容', '滚轮微针', '德玛莎', '微针疗法', '胶原蛋白诱导'],
    '化学剥脱术': ['刷酸', '果酸换肤', '化学剥脱', '面部去角质', '水杨酸换肤', '深层换肤'],
    '钻石微雕': ['钻石微雕', '微晶磨皮', '皮肤打磨', '物理去角质'],
    '皮肤深度清洁': ['小气泡', '皮肤清洁', '深度清洁', '黑头导出', '毛孔清洁', '美容院面部护理'],
    '激光脱毛': ['激光脱毛', '脱毛', '永久脱毛', '腋下脱毛', '比基尼脱毛', '冰点脱毛', '家用脱毛仪'],
    'CO2点阵激光': ['CO2点阵激光', '二氧化碳激光', '点阵激光', '激光焕肤', '祛疤激光', '去痘印激光'],
    '去斑激光': ['去斑激光', '皮秒', '超皮秒', '激光祛斑', '美白激光', '祛黑素', '光子嫩肤'],
    '激光洗纹身': ['洗纹身', '激光祛纹身', '祛除刺青', '皮秒洗纹身'],
    '血管激光': ['血管激光', '祛红血丝', '激光祛斑点', '染料激光', '红脸修复'],
    '射频美容': ['射频', '热玛吉', '射频紧致', '射频瘦身', '电波拉皮', '热力塑'],
    '超声刀': ['超声刀', 'HIFU', '热拉提', '7D聚拉提', '超声提升', '超声波拉皮', '极速提拉'],
    '美容超音波': ['超声波美容', '超声波导入', 'LDM', '水滴提升'],
    '冷冻减脂': ['冷冻减脂', '酷塑', '冷冻溶脂', '减少脂肪', '腹部减脂'],
    '二氧化碳治疗': ['二氧化碳疗法', '碳酸美容', '腹部注气疗法'],
    '中胚层疗法': ['中胚层疗法', '美塑疗法', '注射美容', '溶脂针'],
    '溶脂针': ['溶脂针', '面部溶脂', '瘦脸针', '双下巴溶脂'],
    '线雕': ['线雕', '埋线提升', 'PDO线', '蛋白线', '全脸提升', '大V线'],
    '面部轮廓塑造': ['轮廓固定', '面部平衡', '全脸改造', '五官微调'],
    '等离子笔': ['等离子', '等离子笔', '等离子紧致', '等离子美容'],
    '海菲秀': ['海菲秀', '水磨皮', '深层补水清洁', '毛孔吸尘器'],
    'LED光疗': ['LED美容仪', '光疗', '红蓝光', '皮肤修复', '冷光美容'],
    '塑形按摩': ['塑形按摩', '推拿', '瘦身按摩', '淋巴按摩'],
    '淋巴排毒': ['淋巴排毒', '术后按摩', '消肿按摩', '淋巴引流'],
    '真空吸引术': ['真空压力治疗', '真空按摩', '结缔组织按摩'],
    '光子嫩肤': ['光子嫩肤', 'IPL', '强脉冲光', '嫩肤'],
    '半永久定妆': ['半永久', '半永久粉底', '驻颜粉底'],
    '纹眉': ['纹眉', '修眉', '画眉', '雾眉'],
    '纹绣': ['纹绣', '半永久化妆', '飘眉', '纹唇'],
    '植发': ['植发', '头发种植', 'FUE植发', '无痕植发', '防脱发治疗'],
    '头皮微针': ['头皮微针', '生发治疗', '头皮护理', '毛囊养护'],
    '激光设备': ['美容激光仪', '医美设备', '激光机租赁', '二手激光仪', '激光机销售']
  },
  tratamentos_zh: {
    '妊娠纹': ['妊娠纹', '生长纹', '祛除妊娠纹', '白色妊娠纹', '红色妊娠纹'],
    '痤疮': ['痤疮', '痘痘', '祛痘', '青春痘', '痘肌护理'],
    '黄褐斑': ['黄褐斑', '色斑', '晒斑', '美白祛斑', '色素沉着'],
    '皮肤松弛': ['皮肤松弛', '松弛', '面部下垂', '提升紧致'],
    '脱发': ['脱发', '秃顶', '掉发', '生发', '女性脱发', '雄性秃'],
    '黑眼圈': ['黑眼圈', '眼袋', '眼周老化', '泪沟'],
    '局部脂肪': ['局部脂肪', '赘肉', '腹部脂肪', '减脂'],
    '赛璐璐': ['赛璐璐', '橘皮组织', '脂肪团', '消除橘皮'],
    '面部年轻化': ['面部年轻化', '抗衰', '抗老', '焕肤'],
    '毛孔粗大': ['毛孔粗大', '收缩毛孔', '毛孔护理'],
    '疤痕': ['疤痕', '痘坑', '痘印', '疤痕修复', '烧伤疤痕'],
    '玫瑰痤疮': ['玫瑰痤疮', '酒槽鼻', '红脸', '皮肤敏感'],
    '胡须稀疏': ['胡须生长', '修剪胡须', '蓄须'],
    '皮肤美白': ['美白', '冷白皮', '肤色暗沉', '提亮'],
    '双下巴': ['双下巴', '下颌缘模糊', '祛双下巴'],
    '皱纹': ['皱纹', '细纹', '抬头纹', '鱼尾纹', '法令纹'],
    '红血丝': ['红血丝', '毛细血管', '腿部血丝'],
    '面部潮红': ['脸红', '潮红', '阵发性潮红'],
    '敏感肌': ['敏感肌', '屏障受损', '修护'],
    '肤质粗糙': ['肤质粗糙', '皮肤不平', '去角质'],
    '肤质健康': ['肤质', '好皮肤', '皮肤光泽'],
    '身体紧致': ['身体紧致', '身体抗衰', '紧致'],
    '尺寸减少': ['瘦身', '塑形', '减寸'],
    '身体塑形': ['塑形', '形体雕刻', '身体线条'],
    '水肿': ['水肿', '身体浮肿', '消肿'],
    '色素暗沉': ['色素沉着', '腋下美白', '私处美白'],
    '私密整形': ['私密整形', '私密紧致', '私密美容'],
    '私密松弛': ['私密松弛', '缩阴', '私密保养'],
    '头皮屑': ['头皮屑', '脂溢性皮炎', '头皮痒'],
    '油性皮肤': ['油皮', '大油田', '控油'],
    '干性皮肤': ['干皮', '缺水', '补水']
  },
  anatomia_zh: {
    'face': ['面部', '脸部', '面部皮肤', '脸部轮廓', '面部轮廓固定', '面部平衡', '脸部皱纹', '黑眼圈'],
    'abdomen': ['腹部', '肚子', '肚子肉', '腹部脂肪', '腹部松弛', '产后修复', '马甲线'],
    'glutes': ['臀部', '屁股', '提臀', '丰臀', '臀部美容', '臀部结节'],
    'thighs': ['大腿', '大腿内侧', '大腿后侧', '大腿脂肪', '大腿橘皮', '大腿摩擦'],
    'flanks': ['侧腰', '腰部脂肪', '赘肉', '腰线', '腰围'],
    'arms': ['手臂', '胳膊', '蝴蝶袖', '拜拜肉', '手臂松弛', '手臂脂肪'],
    'double chin': ['双下巴', '下颌缘', '下巴肉', '下颌轮廓'],
    'back': ['背部', '后背', '背部脂肪', '背部褶皱', '副乳'],
    'intimate area': ['私密', '私密整形', '私密美白', '私密紧致', '私密抗衰'],
    'neck and chest': ['颈部', '脖子', '颈纹', '颈部松弛', '低胸部位斑点']
  },
  intencao_compra_zh: {
    'value_and_investment': ['价格', '多少钱', '费用', '预算', '报价单', '投资', '价目表', '团购', '优惠卷', '性价比', '分期付款', '医美贷款', '折扣码'],
    'trust_and_authority': ['哪家医院好', '口碑医生', '名医', '专家推荐', '哪里做比较好', '知名机构', '三甲医院医美', '靠谱诊所', '网红医院', '明星同款', '高端医疗', '执业资格'],
    'social_proof_and_vlog': ['前后对比图', '真实照片', '效果怎么样', '亲身经历', '真实案例', '医美Vlog', '恢复期记录', '小红书种草', '亲测记录', '术后日记', '谁做过'],
    'safety_and_fears': ['风险', '副作用', '并发症', '注意事项', '疼不疼', '麻药', '恢复期', '术后护理', '禁忌症', '不适合人群', '医美事故', '毁容', '坏死'],
    'maintenance_and_cycle': ['维持多久', '有效期', '后期保养', '频率', '需要做几次', '补打', '疗程', '反弹', '效果失效', '二次手术'],
    'geolocation_proximity': ['附近', '同城医美', '上门服务', '本地推荐', '[城市]诊所', '分店地址'],
    'education_and_competition': ['培训班', '进修课程', '招募模特', '公开课', '医生导师', '医美学院', '专业培训']
  },

  marcas_injetaveis_zh: {
    'toxins': ['保妥适', '衡力', '吉适', '西马', '乐提葆', '天使之吻', '白毒'],
    'fillers': ['乔雅登', '瑞蓝', '艾莉薇', '伊婉', '海薇', '嗨体', '菲欧曼', '贝尔塔'],
    'biostimulators': ['舒颜萃', '童颜针', '少女针', '艾维岚', '濡白天使', '聚左旋乳酸', '羟基磷灰石'],
    'skinboosters_brands': ['菲洛嘉', '水光针', '瑞蓝唯瑅', '丝丽', '布鲁内罗', '三文鱼针', '外泌体']
  },

  tipos_tecnologia_laser_zh: {
    'ablative': ['点阵二氧化碳激光', '铒激光 2940nm', '剥脱性焕肤', '深层磨皮'],
    'non_ablative': ['非剥脱点阵', '1064nm 激光', '非侵入性抗衰', '半导体激光'],
    'thulium_bb_laser': ['铥激光 1927nm', 'BB激光', '拉薇恩', '莱瑟', '瓷肌激光'],
    'picosecond': ['皮秒激光', '超皮秒', 'Picosure', 'Picoway', '赛诺秀', '激光洗纹身'],
    'q_switched': ['调Q激光', '净肤雷射', '黑脸娃娃', '白瓷娃娃', '去黄美白'],
    'vascular_ktp': ['血管激光', '染料激光', 'Vbeam', '祛红血丝激光', '毛细血管扩张'],
    'hair_removal_physics': ['冰点脱毛', '翠绿宝石激光', '红宝石激光', '脉冲光脱毛'],
    'ultrassom_hifu': ['超声刀', 'HIFU', '热拉提', '超声炮', '7D聚拉提', '超声提升'],
    'rf_microneedling': ['黄金微针', '摩菲斯8', '相宜美', '热玛吉', '射频紧肤'],
    'ipl_bbl': ['光子嫩肤', '强脉冲光', 'M22 AOPT', 'BBL超光子', '黑金超光子'],
    'cryolipolysis_physics': ['冷冻减脂', '酷塑', '冷冻溶脂', '塑形']
  },

  comparacoes_estrategicas_zh: {
    'procedure_doubts': ['肉毒素还是玻尿酸', '热玛吉和超声刀区别', '水光针多久打一次', '黄金微针好还是超声炮好'],
    'brand_doubts': ['保妥适和衡力区别', '超皮秒和皮秒哪个好', '酷塑还是优立塑']
  },
};

module.exports = KEYWORDS;