import React, { useState, useEffect } from 'react';
import { 
  Search, Bell, Globe, Activity, Crosshair, TrendingUp, 
  DollarSign, Zap, BarChart3, Database, ShieldCheck,
  Loader2, Download, X, MapPin
} from 'lucide-react';
import { 
  AreaChart, Area, ResponsiveContainer, Tooltip,
  PieChart, Pie, Cell 
} from 'recharts';

// --- DADOS DO MOTOR (Métricas Reais RABI OMNI) ---
const performanceData = [
  { metric: 'CPC Médio', before: 20.00, after: 5.00, textB: 'R$ 8 a R$ 20', textA: 'R$ 1.5 a R$ 5', impact: '-70%', color: 'text-green-400' },
  { metric: 'Taxa de Conversão', before: 2, after: 12, textB: '1% a 3%', textA: '7% a 12%', impact: '+300%', color: 'text-cyan-400' },
  { metric: 'CAC Final', before: 150, after: 55, textB: 'R$ 150,00', textA: 'R$ 55,00', impact: 'Economia Real', color: 'text-indigo-400' },
];

const taxonomyData = [
  { title: 'Procedimentos', count: '350+', desc: 'Oferta: O que as clínicas tentam vender.', icon: BarChart3 },
  { title: 'Tratamentos', count: '920+', desc: 'Demanda: A dor que tira o sono do cliente.', icon: Activity },
  { title: 'Anatomia Sniper', count: '450+', desc: 'Precisão: Onde o ajuste milimétrico é desejado.', icon: Crosshair },
  { title: 'Comercial/Intenção', count: '200+', desc: 'Conversão: O momento exato de compra.', icon: DollarSign },
  { title: 'Lasers e Marcas', count: '550+', desc: 'Tech-War: A guerra de fabricantes.', icon: Zap },
  { title: 'B2B & Cosmecêuticos', count: '960+', desc: 'Share of Pocket: Para onde o dinheiro foge.', icon: Database },
];

const mockChartData = [{ v: 20 }, { v: 45 }, { v: 35 }, { v: 80 }, { v: 65 }, { v: 100 }];
const COLORS = ['#06b6d4', '#4f46e5', '#ec4899', '#8b5cf6', '#10b981'];

// --- COMPONENTE NOVO: MODAL DE RELATÓRIO (PDF READY) ---
const ReportModal = ({ data, onClose }) => {
  if (!data) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0b1121] border border-white/10 rounded-2xl w-full max-w-6xl my-8 relative shadow-[0_0_50px_rgba(6,182,212,0.15)] animate-fade-in print:bg-white print:text-black print:shadow-none print:m-0">
        
        {/* Cabeçalho do Relatório */}
        <div className="flex justify-between items-center p-6 border-b border-white/5 print:border-black/10">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="text-cyan-400 print:text-cyan-600" size={32} />
            <div>
              <h2 className="text-2xl font-black tracking-tight text-white print:text-black">Relatório Executivo OMNI</h2>
              <p className="text-sm text-gray-500 font-mono">Dossiê de Inteligência: {data.alvo.toUpperCase()}</p>
            </div>
          </div>
          <div className="flex space-x-4 print:hidden">
            <button onClick={handlePrint} className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg font-bold transition-colors">
              <Download size={18} /> <span>Exportar PDF</span>
            </button>
            <button onClick={onClose} className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-400 transition-colors">
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* 1. Resumo Executivo */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/5 p-5 rounded-xl border border-white/5">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Total de Buscas</p>
              <p className="text-3xl font-black text-white print:text-black">{data.resumo.totalBuscas.toLocaleString('pt-BR')}</p>
            </div>
            <div className="bg-white/5 p-5 rounded-xl border border-white/5">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Volume Médio</p>
              <p className="text-3xl font-black text-cyan-400">{data.resumo.volumeMedio}k</p>
            </div>
            <div className="bg-white/5 p-5 rounded-xl border border-white/5">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Evolução RABI</p>
              <p className={`text-3xl font-black ${data.resumo.crescimento > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {data.resumo.crescimento > 0 ? '+' : ''}{data.resumo.crescimento}%
              </p>
            </div>
            <div className="bg-white/5 p-5 rounded-xl border border-white/5">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Status</p>
              <p className="text-2xl font-black text-indigo-400 mt-1">{data.resumo.tendencia.toUpperCase()}</p>
            </div>
          </section>

          {/* 2 & 4. Gráficos de Tendência e Distribuição */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-[#030712] border border-white/5 p-6 rounded-xl h-[300px] print:bg-gray-50">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Evolução Temporal (90d)</h3>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.graficos.tendenciaTempo}>
                  <defs>
                    <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#1f2937' }} />
                  <Area type="monotone" dataKey="valor" stroke="#06b6d4" strokeWidth={3} fill="url(#colorTrend)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-[#030712] border border-white/5 p-6 rounded-xl h-[300px] flex flex-col print:bg-gray-50">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Distribuição Regional</h3>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={data.graficos.distRegional} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="valor">
                    {data.graficos.distRegional.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#1f2937' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* 3. Top Termos e Oportunidades */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <div className="bg-white/5 border border-white/5 p-6 rounded-xl">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Top 5 Termos Relacionados</h3>
                <ul className="space-y-3">
                  {data.mercado.topTermos.map((termo, idx) => (
                    <li key={idx} className="flex justify-between items-center bg-black/20 p-3 rounded-lg border border-white/5">
                      <span className="font-bold text-gray-200">{termo.nome}</span>
                      <span className="text-cyan-400 font-mono text-sm">{termo.volume}% match</span>
                    </li>
                  ))}
                </ul>
             </div>
             
             <div className="bg-gradient-to-br from-indigo-900/20 to-cyan-900/10 border border-cyan-500/30 p-6 rounded-xl">
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4 flex items-center space-x-2">
                  <Zap size={16} /> <span>Diretrizes de Oportunidade</span>
                </h3>
                <ul className="space-y-4">
                  {data.mercado.oportunidades.map((op, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <p className="text-sm text-gray-300 leading-relaxed">{op}</p>
                    </li>
                  ))}
                </ul>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTES UI DESACOPLADOS ---

const Navbar = ({ isScrolled, searchQuery, setSearchQuery, handleSearch, isSearching }) => (
  <nav className={`fixed top-0 w-full z-50 transition-all duration-700 px-10 py-4 flex items-center justify-between ${isScrolled ? 'bg-[#030712]/95 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'}`}>
    <div className="flex items-center space-x-12">
      <h1 className="text-5xl font-black tracking-tighter cursor-pointer flex items-center space-x-2">
        <ShieldCheck className="text-cyan-400" size={36} />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 italic">SAE</span>
        <span className="text-white not-italic font-light">OMNI</span>
      </h1>
    </div>
    <div className="flex items-center space-x-6 text-gray-400">
      
      {/* 🚀 O NOVO INPUT DE BUSCA (MOTOR TRIGGER) */}
      <form onSubmit={handleSearch} className="relative group flex items-center">
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Digite um alvo tático..." 
          className="bg-white/5 border border-white/10 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-cyan-500 w-64 transition-all focus:w-80 placeholder:text-gray-600 text-white"
          disabled={isSearching}
        />
        <button 
          type="submit" 
          disabled={isSearching || !searchQuery.trim()}
          className="absolute right-3 text-gray-400 hover:text-cyan-400 transition-colors disabled:opacity-50"
        >
          {isSearching ? <Loader2 size={18} className="animate-spin text-cyan-400" /> : <Search size={18} />}
        </button>
      </form>

      <Bell size={24} className="hover:text-cyan-400 cursor-pointer transition-colors" />
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(6,182,212,0.4)]">
        OP
      </div>
    </div>
  </nav>
);

const MetricsComparison = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
    {performanceData.map((item, idx) => (
      <div key={idx} className="bg-[#0b1121] border border-cyan-900/30 rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all" />
        <h4 className="text-gray-400 text-base font-bold uppercase tracking-widest mb-4">{item.metric}</h4>
        
        <div className="flex justify-between items-end mb-4">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Sem RABI</p>
            <p className="text-2xl text-gray-400 line-through decoration-red-500/50">{item.textB}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-cyan-500 uppercase tracking-wider mb-1 font-bold">Com RABI OMNI</p>
            <p className="text-4xl font-black text-white drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">{item.textA}</p>
          </div>
        </div>
        
        <div className={`mt-4 pt-4 border-t border-white/5 font-black text-right text-lg ${item.color}`}>
          IMPACTO: {item.impact}
        </div>
      </div>
    ))}
  </div>
);

const TaxonomyGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
    {taxonomyData.map((tax, idx) => (
      <div key={idx} className="bg-white/[0.02] border border-white/5 p-5 rounded-xl hover:bg-white/[0.04] transition-all">
        <div className="flex justify-between items-start mb-3">
          <tax.icon size={24} className="text-indigo-400" />
          <span className="bg-indigo-500/10 text-indigo-300 text-sm font-black px-3 py-1 rounded tracking-widest">{tax.count}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-200 mb-1">{tax.title}</h3>
        <p className="text-base text-gray-500 leading-relaxed">{tax.desc}</p>
      </div>
    ))}
  </div>
);

const DashboardHeader = () => (
  <header className="relative pt-40 pb-16 px-10 border-b border-white/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#030712] to-[#030712]">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-6">
            <Globe size={16} className="text-cyan-400" />
            <span className="text-sm font-bold text-cyan-400 tracking-widest uppercase">Inteligência Global Ativa</span>
          </div>
          <h1 className="text-7xl font-black tracking-tighter text-white mb-6 leading-tight">
            Cobertura de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">99.9%</span> do<br/>Comercial Médico.
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Cruzando Tecnologia, Dor, Intenção e Localidade, o motor gera virtualmente <strong className="text-white">+250.000 cenários táticos</strong> em tempo real, transformando curiosos em leads de alta fidelidade.
          </p>
        </div>

        <div className="flex space-x-4">
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center backdrop-blur-md">
            <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-2">Pontos de Contato</p>
            <p className="text-4xl font-black text-cyan-400">27.440</p>
            <p className="text-xs text-gray-600 mt-2">3.430 termos × 8 idiomas</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center backdrop-blur-md">
            <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-2">Market Value</p>
            <p className="text-4xl font-black text-indigo-400">Premium</p>
            <p className="text-xs text-gray-600 mt-2">Decididos vs Preço</p>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const ChartWidget = () => (
  <div className="bg-[#0b1121] border border-white/5 rounded-2xl p-6 h-[350px] flex flex-col relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-600" />
    <h3 className="text-base font-bold text-gray-400 uppercase tracking-widest mb-6">Projeção de Eficiência de Captação</h3>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={mockChartData}>
        <defs>
          <linearGradient id="colorOmni" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.5}/>
            <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <Tooltip contentStyle={{ backgroundColor: '#030712', border: '1px solid #1e293b', borderRadius: '8px' }} />
        <Area type="monotone" dataKey="v" stroke="#06b6d4" strokeWidth={4} fill="url(#colorOmni)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

const LiveRadar = ({ data, isLoading }) => (
  <div className="bg-[#0b1121] border border-white/5 rounded-2xl overflow-hidden mt-6">
    {isLoading ? (
        <div className="p-12 text-center text-cyan-500 font-mono text-lg animate-pulse">
            Sincronizando com Banco de Dados MONGODB...
        </div>
    ) : (
        <table className="w-full text-left">
          <thead className="bg-black/50 text-xs uppercase tracking-widest text-gray-500 border-b border-white/5">
            <tr>
              <th className="p-5">Termo Identificado</th>
              <th className="p-5">Mercado</th>
              <th className="p-5">Evolução (%)</th>
              <th className="p-5">Status RABI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {data.length > 0 ? data.map((item, i) => (
              <tr key={i} className="hover:bg-cyan-900/10 transition-colors group">
                <td className="p-5 font-bold text-lg text-gray-200 group-hover:text-cyan-400">{item.termo_chave}</td>
                <td className="p-5 text-base text-gray-400">{item.mercado}</td>
                <td className="p-5 font-mono text-lg font-bold text-green-400">+{item.evolucao?.toFixed(2)}%</td>
                <td className="p-5">
                    <span className="text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                        {item.status_tendencia || 'PROCESSANDO'}
                    </span>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" className="p-10 text-center text-gray-500 text-lg">
                  Nenhuma anomalia detectada no momento. Aguardando processamento do motor...
                </td>
              </tr>
            )}
          </tbody>
        </table>
    )}
  </div>
);

// --- APLICAÇÃO PRINCIPAL ---
export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [liveData, setLiveData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ESTADOS DO SEARCH ENGINE (NOVO)
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [reportData, setReportData] = useState(null);
  const showReport = reportData !== null;

  useEffect(() => {
    // Efeito do Header
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Conexão com o Servidor Node.js
    const fetchInteligencia = async () => {
      try {
        const response = await fetch('https://sae-9wqa.onrender.com/api/radar');
        const data = await response.json();
        setLiveData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Motor Backend Offline ou Erro de CORS", error);
        setIsLoading(false);
      }
    };

    fetchInteligencia();
    const interval = setInterval(fetchInteligencia, 10000); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // --- 🎯 FUNÇÃO CORE: HANDLE SEARCH (Trigger Lupa) ---
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);

    try {
      // Simulador de processamento do motor (Loading Netflix Style)
      // Futuramente isso será: const res = await fetch(`https://sae-9wqa.onrender.com/api/search?q=${searchQuery}`);
      await new Promise(resolve => setTimeout(resolve, 2500));

      // DADOS ESTRUTURADOS (MOCK DINÂMICO PARA TESTE FRONTEND)
      const mockDynamicReport = {
        alvo: searchQuery,
        resumo: {
          totalBuscas: Math.floor(Math.random() * 50000) + 10000,
          volumeMedio: Math.floor(Math.random() * 80) + 10,
          crescimento: (Math.random() * 200 - 50).toFixed(1),
          tendencia: Math.random() > 0.5 ? 'Explosão (Alta)' : 'Estável'
        },
        mercado: {
          topTermos: [
            { nome: `${searchQuery} antes e depois`, volume: 98 },
            { nome: `preço ${searchQuery}`, volume: 85 },
            { nome: `${searchQuery} dói`, volume: 64 },
            { nome: `melhor clinica ${searchQuery}`, volume: 42 },
            { nome: `${searchQuery} riscos`, volume: 30 },
          ],
          oportunidades: [
            `Alta demanda detectada em áreas metropolitanas para "${searchQuery}". Focar copy em dor/riscos.`,
            `O termo "${searchQuery} antes e depois" indica intenção de compra educacional profunda. Use carrosséis.`,
            `Crescimento súbito nas últimas 48h. Aumentar bid de leilão em 15% para campanhas de fundo de funil.`
          ]
        },
        graficos: {
          tendenciaTempo: Array.from({length: 30}, (_, i) => ({ dia: i, valor: Math.floor(Math.random() * 100) })),
          distRegional: [
            { name: 'São Paulo', valor: 45 }, { name: 'Rio de Janeiro', valor: 25 },
            { name: 'Minas Gerais', valor: 15 }, { name: 'Outros', valor: 15 }
          ]
        }
      };

      setReportData(mockDynamicReport);
    } catch (error) {
      console.error("Falha ao acionar motor RABI:", error);
      alert("Erro ao processar inteligência. Verifique a conexão com a API.");
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-cyan-500/30 pb-20">
      
      {/* 🚀 OVERLAY DO RELATÓRIO PDF */}
      {showReport && <ReportModal data={reportData} onClose={() => setReportData(null)} />}

      <Navbar 
        isScrolled={isScrolled} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        isSearching={isSearching}
      />
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-10 py-12 relative z-10">
        <section className="mb-20">
          <div className="flex items-center space-x-3 mb-8">
            <DollarSign className="text-cyan-400" size={32} />
            <h2 className="text-4xl font-black tracking-tight">Impacto em Performance</h2>
          </div>
          <MetricsComparison />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <Database className="text-indigo-400" size={32} />
              <h2 className="text-4xl font-black tracking-tight">Taxonomia OMNI V48</h2>
            </div>
            <TaxonomyGrid />
          </div>
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <TrendingUp className="text-cyan-400" size={32} />
              <h2 className="text-4xl font-black tracking-tight">Valuation Chart</h2>
            </div>
            <ChartWidget />
          </div>
        </section>

        <section className="mb-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Activity className="text-cyan-400 animate-pulse" size={32} />
              <h2 className="text-4xl font-black tracking-tight">Live Radar <span className="text-xl text-gray-500 font-light ml-2">(MongoDB Sync)</span></h2>
            </div>
            <div className="flex items-center space-x-2 text-sm text-cyan-400">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <span>Atualização Tempo Real</span>
            </div>
          </div>
          <LiveRadar data={liveData} isLoading={isLoading} />
        </section>

      </main>

      {/* FOOTER Estilo Terminal Unificado */}
      <footer className="fixed bottom-0 w-full bg-[#030712]/90 backdrop-blur-md border-t border-white/5 py-4 px-10 flex justify-between items-center text-sm text-gray-500 font-mono z-50">
        <div className="flex items-center space-x-8">
          <span className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_#06b6d4]"/> 
            <span className="text-cyan-400 font-bold">API CONECTADA (RENDER CLOUD)</span>
          </span>
          <span>CENÁRIOS: 252.841</span>
          <span>LATÊNCIA: 14ms</span>
        </div>

        <div className="flex space-x-6 text-xs font-sans tracking-widest uppercase">
          <a href="https://instagram.com/callmepewk" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">CTO: @callmepewk</a>
          <a href="https://instagram.com/aidoctorbr" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">@aidoctorbr</a>
          <a href="https://instagram.com/alemoraisadv" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">@alemoraisadv</a>
          <a href="https://github.com/drjauru" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">drjauru</a>
          <a href="https://youtube.com/@codigosdolaser" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">Códigos do Laser</a>
        </div>

        <div>
          SAE OMNI INTELLIGENCE CORE © 2026
        </div>
      </footer>
    </div>
  );
}