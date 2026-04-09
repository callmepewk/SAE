const googleTrends = require('google-trends-api');
const KEYWORDS = require('./keywords'); 
const mongoose = require('mongoose');
const HttpsProxyAgent = require('https-proxy-agent');
const UserAgent = require('user-agents');

// --- ☁️ CONFIGURAÇÃO MONGODB ---
const MONGO_URI = process.env.MONGODB_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ [MOTOR AUTÔNOMO] CONECTADO AO MONGODB"))
    .catch(err => {
        console.error("❌ ERRO AO CONECTAR:", err);
        process.exit(1);
    });

const AnaliseSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    mercado: String,
    geo: String,
    termo_chave: String,
    termo_local: String,
    evolucao: Number,
    volume_score: Number,
    score_rabi: Number,
    perfil_mercado: String,
    status_tendencia: String,
    diretriz_tatica: String,
    diagnostico: String,
    categoria: String // <-- O CAMPO CHAVE PARA O FRONTEND
});

const IntelRABI = mongoose.model('IntelRABI', AnaliseSchema);

// --- 🛡️ CONFIGURAÇÃO DE EVASÃO ---
const delayAleatorio = (isError = false) => {
    const min = isError ? 30000 : 7000;
    const max = isError ? 60000 : 15000;
    const ms = Math.floor(Math.random() * (max - min + 1) + min);
    return new Promise(resolve => setTimeout(resolve, ms));
};

const LOCAIS_BUSCA = {
    '🇧🇷 BRASIL (Nacional)': ['BR']
};

const traduzirParaRegiao = (chave, geo, catOriginal) => {
    return KEYWORDS[catOriginal] && KEYWORDS[catOriginal][chave] 
        ? KEYWORDS[catOriginal][chave][0] 
        : chave;
};

// --- 📊 ANALISADOR DE INTELIGÊNCIA MANTENDO A SEGMENTAÇÃO ---
function gerarAnaliseOMNI(termo, cresc, interesse, local, categoria) {
    const i = parseInt(interesse);
    const e = parseFloat(cresc);
    let perfil = i > 75 ? 'ALTA ESCALA' : 'PREMIUM / NICHO';
    let tendencia = e > 30 ? 'EXPLOSÃO (TRENDING)' : e > 0 ? 'CRESCIMENTO ESTÁVEL' : 'SATURAÇÃO';
    
    // As diretrizes táticas são baseadas na categoria exata
    let insight = "Interesse geral.";
    if (categoria.includes('intencao')) insight = "Foco em conversão direta e preço.";
    else if (categoria.includes('fabricantes')) insight = "Movimentação B2B / Aquisição de máquinas.";
    else if (categoria.includes('anatomia')) insight = "Oportunidade Sniper para criativos médicos.";
    else if (categoria.includes('cosmeceuticos')) insight = "Venda cruzada / Share of Pocket.";

    return {
        'Score RABI': i + (e / 2),
        'Perfil Mercado': perfil,
        'Status Tendência': tendencia,
        'Diretriz Tática': insight,
        'Diagnóstico': `Evolução de ${e.toFixed(2)}%.`
    };
}

// --- ⚙️ O MOTOR AUTÔNOMO ---
async function executarMotorAutonomo() {
    console.log(`\n🚀 INICIANDO VARREDURA ESTRATÉGICA RABI V48...`);
    
    let banco = [];
    
    // 🎯 A SEGMENTAÇÃO (Garante que todas as abas do Frontend recebam dados)
    // O motor vai procurar essas categorias específicas no seu arquivo keywords.js
    const categoriasEstrategicas = [
        'tratamentos_pt', 
        'anatomia_pt',     // Vai para a aba Sniper
        'fabricantes_pt',  // Vai para a aba B2B
        'cosmeceuticos_pt',// Vai para a aba Farmacêuticos
        'intencao_pt'
    ];

    for (const cat of categoriasEstrategicas) {
        if (KEYWORDS[cat]) {
            const chaves = Object.keys(KEYWORDS[cat]);
            // Pega 3 termos de CADA categoria para garantir um radar diversificado sem estourar o tempo da Render
            chaves.sort(() => 0.5 - Math.random()).slice(0, 3).forEach(chave => {
                banco.push({ catOriginal: cat, chave });
            });
        }
    }

    console.log(`📡 Alvos carregados: ${banco.length} termos distribuídos por segmentação.`);
    const periodo = '30'; 

    for (const p of banco) {
        console.log(`\n🔎 [${p.catOriginal.toUpperCase()}]: ${p.chave}`);
        for (const nomeLocal in LOCAIS_BUSCA) {
            const codigos = LOCAIS_BUSCA[nomeLocal];
            for (const geo of codigos) {
                const termoTraduzido = traduzirParaRegiao(p.chave, geo, p.catOriginal);
                
                try {
                    const ua = new UserAgent({ deviceCategory: 'desktop' }).toString();
                    const res = await googleTrends.interestOverTime({
                        keyword: termoTraduzido,
                        geo: geo,
                        requestHeader: { 'User-Agent': ua },
                        startTime: new Date(Date.now() - (parseInt(periodo) * 24 * 60 * 60 * 1000))
                    });

                    const data = JSON.parse(res).default.timelineData;
                    if (data.length > 0) {
                        const vInit = data[0].value[0];
                        const vEnd = data[data.length - 1].value[0];
                        const cresc = vInit > 0 ? ((vEnd - vInit) / vInit) * 100 : 0;
                        const omniData = gerarAnaliseOMNI(p.chave, cresc, vEnd, nomeLocal, p.catOriginal);
                        
                        const novaAnalise = new IntelRABI({
                            mercado: nomeLocal,
                            geo: geo,
                            termo_chave: p.chave,
                            termo_local: termoTraduzido,
                            evolucao: cresc,
                            volume_score: vEnd,
                            score_rabi: omniData['Score RABI'],
                            perfil_mercado: omniData['Perfil Mercado'],
                            status_tendencia: omniData['Status Tendência'],
                            diretriz_tatica: omniData['Diretriz Tática'],
                            diagnostico: omniData['Diagnóstico'],
                            categoria: p.catOriginal // SALVANDO A CATEGORIA EXATA
                        });

                        await novaAnalise.save();
                        console.log(`✅ Salvo no Cofre: ${p.chave} [${cresc.toFixed(2)}%]`);
                    } else {
                        console.log(`⚠️ Sem volume recente`);
                    }
                    await delayAleatorio(); 

                } catch (err) { 
                    console.log(`❌ Falha/Bloqueio da Google API. Pulando...`);
                    await delayAleatorio(true); 
                }
            }
        }
    }

    console.log(`\n🏁 VARREDURA CONCLUÍDA. Desligando motores.`);
    mongoose.connection.close();
    process.exit(0);
}

executarMotorAutonomo();