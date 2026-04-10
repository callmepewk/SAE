const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());

// ==========================================
// 📚 O DICIONÁRIO GLOBAL DO RABI (Escala Planetária - V33)
// ==========================================
const KEYWORDS = {
  // 🇧🇷 PORTUGUÊS (Brasil/Portugal)
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
};

// ==========================================
// 🧠 SAE CORE: SEARCH-AUTOMATION ENGINE
// Processamento Dinâmico em Memória BLINDADO
// ==========================================
const keywordsDB = [];

// Função Hash para criar determinismo nas métricas
const hashString = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash = Math.imul(31, hash) + str.charCodeAt(i) | 0;
    return Math.abs(hash);
};

console.log("⚙️ Compilando Dicionário OMNI no Motor...");
for (const [categoryKey, categoryData] of Object.entries(KEYWORDS)) {
    const categoryName = categoryKey.split('_')[0].toUpperCase();
    const languageCode = categoryKey.split('_')[1];
    
    let conceptIndex = 0; 

    for (const [mainTerm, synonyms] of Object.entries(categoryData)) {
        const seed = hashString(mainTerm);
        const volume = 10000 + (seed % 250000);
        const cpc = (seed % 40) + 2;
        const ticket = 500 + (seed % 6000);

        // 🟢 BLINDAGEM ANTI-CRASH: Força qualquer coisa a virar uma Array limpa
        let safeSynonyms = [];
        if (Array.isArray(synonyms)) {
            safeSynonyms = synonyms;
        } else if (typeof synonyms === 'string') {
            safeSynonyms = [synonyms];
        }

        keywordsDB.push({
            term: String(mainTerm).toLowerCase(),
            synonyms: safeSynonyms.map(s => String(s).toLowerCase()),
            category: categoryName,
            language: languageCode,
            conceptIndex: conceptIndex, 
            volume,
            cpc,
            ticket
        });
        
        conceptIndex++; 
    }
}
console.log(`✅ Base pronta: ${keywordsDB.length} entidades macro mapeadas (BLINDADA CONTRA ERROS).`);

// Algoritmo de Busca Fuzzy OMNI
const saeSearch = (query, filters) => {
    const q = query.toLowerCase().trim();
    let bestMatch = keywordsDB.find(k => k.term === q);
    
    if (!bestMatch) {
        bestMatch = keywordsDB.find(k => k.synonyms.includes(q));
    }
    if (!bestMatch) {
        const matches = keywordsDB.filter(k => k.term.includes(q) || k.synonyms.some(s => s.includes(q)));
        if (matches.length > 0) bestMatch = matches[0]; 
    }
    if (!bestMatch) {
        const seed = hashString(q);
        bestMatch = {
            term: query,
            synonyms: [],
            category: filters.length > 0 ? filters[0] : "Inteligência Tática",
            volume: 5000 + (seed % 50000),
            cpc: (seed % 20) + 3,
            ticket: 800 + (seed % 3000),
            language: 'pt',
            conceptIndex: 9999 // Fallback concept
        };
    }
    return bestMatch;
};

// 🟢 Busca Global de Traduções OMNI
const getOmniTranslations = (matchData) => {
    if (!matchData || matchData.conceptIndex === 9999) return null;

    const translations = keywordsDB.filter(k => 
        k.category === matchData.category && 
        k.conceptIndex === matchData.conceptIndex &&
        k.language !== matchData.language
    );

    const result = {};
    translations.forEach(t => {
        result[t.language] = t.term.replace(/\b\w/g, l => l.toUpperCase());
    });

    return result;
};

const getDailySeed = () => Math.floor(Date.now() / (1000 * 60 * 60 * 24));
const getWeeklySeed = () => Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 7));

// ==========================================
// 🛡️ ROTA RAIZ (Health Check)
// ==========================================
app.get('/', (req, res) => {
    res.json({ 
        status: "🟢 Motor SAE OMNI Online e Blindado", 
        message: "Acesso direto bloqueado. Utilize os endpoints da API (/api/radar ou /api/dossie)."
    });
});

// ==========================================
// 📡 ROTA 1: LIVE RADAR 3.0
// ==========================================
app.get('/api/radar', (req, res) => {
    const seed = getDailySeed();
    const activeMonitoring = keywordsDB.filter(k => k.language === 'pt').slice(0, 15); 

    let radarData = activeMonitoring.map((item, index) => {
        const volatilidade = (Math.sin(seed + index + hashString(item.term)) * 150); 
        const evolucao = parseFloat(volatilidade.toFixed(2));
        
        let status_tendencia = 'PROCESSANDO';
        if (evolucao > 80) status_tendencia = 'EXPLOSÃO (TRENDING)';
        else if (evolucao > 15) status_tendencia = 'ASCENSÃO SÓLIDA';
        else if (evolucao < 0) status_tendencia = 'RESFRIAMENTO (QUEDA)';
        else status_tendencia = 'ALTO RISCO DE SATURAÇÃO';

        const displayTerm = item.term.replace(/\b\w/g, l => l.toUpperCase());

        return { 
            termo_chave: displayTerm, 
            mercado: item.category,
            evolucao, 
            status_tendencia 
        };
    });

    radarData.sort((a, b) => b.evolucao - a.evolucao);

    // DEVOLVE NO FORMATO EXATO QUE O FRONTEND ESPERA
    res.json({
        data: radarData,
        meta: { current_page: 1, has_more: false }
    });
});

// ==========================================
// 🎯 ROTA 2: DOSSIÊ MCKINSEY
// ==========================================
app.post('/api/dossie', (req, res) => {
    const { keyword, filters, region } = req.body;
    const weekSeed = getWeeklySeed();
    
    const searchTarget = keyword || (filters && filters.length > 0 ? filters.join(' ') : 'Análise Geral');
    const saeData = saeSearch(searchTarget, filters || []);
    const globalTranslations = getOmniTranslations(saeData);
    
    const baseVolume = saeData.volume;
    const baseCpc = saeData.cpc;
    const baseTicket = saeData.ticket;
    const displayTerm = saeData.term.toUpperCase();
    
    const potRevenue = (baseVolume * 0.02 * baseTicket); 
    const hashData = hashString(searchTarget);

    const chartData = Array.from({ length: 6 }).map((_, i) => ({
        v: Math.floor(10 + Math.abs(Math.sin(weekSeed + i + hashData) * 90))
    }));

    const responseSchema = {
        keyword: displayTerm,
        region: region || "Brasil (Nacional)",
        category: saeData.category,
        global_terms: globalTranslations,
        
        marketScore: {
            overall_score: `${Math.floor(65 + (Math.abs(Math.sin(hashData)) * 34))}/100`, 
            market_average: "72/100",
            best_keyword: (saeData.synonyms && saeData.synonyms[0]) ? saeData.synonyms[0].toUpperCase() : displayTerm,
            total_potential: `R$ ${(potRevenue / 1000000).toFixed(1)}M/mês`
        },
        
        saasBenchmarks: {
            conversion: "2.8%", visitor_to_lead: "5.5%", lead_to_customer: "14.2%",
            trial_to_paid: "22.5%", churn: "3.8%", cac: "R$ 450,00"
        },
        
        esteticaBenchmarks: {
            lead_to_client: `${(8 + (Math.abs(Math.cos(hashData)) * 10)).toFixed(1)}%`, 
            ticket_medio: `R$ ${baseTicket.toLocaleString('pt-BR')}`, 
            cac: `R$ ${Math.floor(baseCpc * 8.5)},00`, 
            roi_ads: `${Math.floor(200 + (Math.abs(Math.sin(hashData)) * 400))}%`, 
            retorno_clientes: "65%", 
            whatsapp_conversion: "19.5%"
        },
        
        keywordsAnalysis: [
            { keyword: `${displayTerm} Valor`, volume: Math.floor(baseVolume * 0.8), competition: "Alta", difficulty: "78/100", conversion_estimate: "3.5%", score: "82/100" },
            { keyword: `${displayTerm} Antes e Depois`, volume: Math.floor(baseVolume * 1.5), competition: "Extrema", difficulty: "95/100", conversion_estimate: "1.2%", score: "45/100" },
            { keyword: `${displayTerm} Riscos`, volume: Math.floor(baseVolume * 0.4), competition: "Média", difficulty: "55/100", conversion_estimate: "8.2%", score: "94/100" }
        ],

        narrative: {
            status: "SÍNTESE OMNI (SAE)",
            context: `Motor SAE identificou ${baseVolume.toLocaleString('pt-BR')} buscas para "${displayTerm}". Tração concentrada no topo de funil da categoria ${saeData.category}.`,
            analysis: `O CAC projetado de R$ ${Math.floor(baseCpc * 8.5)} frente a um ticket de R$ ${baseTicket.toLocaleString('pt-BR')} apresenta margem líquida excelente.`,
            interpretation: "Cenário de oportunidade confirmada. A ausência de diferenciação técnica dos concorrentes locais permite ancoragem de preço.",
            recommendation: `Implementar modelo de pacotes focados em ${displayTerm} para diluir o CAC.`,
            risk: "Custo por clique (CPC) em tendência de alta nas próximas semanas."
        },
        
        comparison: [
            { metric: 'Volume Mensal Est.', br: baseVolume.toLocaleString('pt-BR'), global: (baseVolume * 14).toLocaleString('pt-BR'), delta: '+14% BR' },
            { metric: 'Taxa de Conversão (Ads)', br: '1.5%', global: '2.8%', delta: '-1.3% BR' },
            { metric: 'Ticket Médio (USD)', br: `$ ${(baseTicket / 5).toFixed(0)}`, global: '$ 650', delta: 'Oportunidade' }
        ],

        projections: {
            m3: `Aumento de 15% na retenção via cross-sell da categoria ${saeData.category}.`,
            m6: "Necessidade de atualização de protocolo para manter o LTV elevado.",
            trends: [`Associação Híbrida de ${displayTerm}`, "Protocolos Express", "Alta Definição"],
            chartData: chartData 
        },

        topProcedures: [
            { name: `Protocolo ${displayTerm} 3D`, volume: Math.floor(baseVolume * 0.3).toString(), ticket: (baseTicket * 1.5).toLocaleString('pt-BR'), interpretation: "Venda cruzada." },
            { name: "Manutenção Preventiva", volume: Math.floor(baseVolume * 0.15).toString(), ticket: (baseTicket * 0.8).toLocaleString('pt-BR'), interpretation: "Aumento de LTV." }
        ],
        topLasers: [
            { type: "HIFU", name: "Ultraformer MPT", maker: "Classys", origin: "Coreia", cost: "R$ 400k", roi: "6 Meses", apps: "Lifting" },
            { type: "Ablativo", name: "CO2 Fracionado", maker: "Diversos", origin: "Global", cost: "R$ 150k", roi: "3 Meses", apps: "Resurfacing" }
        ]
    };

    setTimeout(() => {
        res.json(responseSchema);
    }, 1000); 
});

app.listen(PORT, () => {
    console.log(`🚀 Motor SAE OMNI ONLINE na porta ${PORT}`);
});