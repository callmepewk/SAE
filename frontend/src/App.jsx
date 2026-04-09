import React, { useState, useEffect } from 'react';
import { 
  Search, Bell, Globe, Activity, Crosshair, TrendingUp, 
  DollarSign, Zap, BarChart3, Database, ShieldCheck,
  Loader2, Download, X, SlidersHorizontal, Check, AlertTriangle,
  MessageSquare, Target, Lightbulb, AlertCircle
} from 'lucide-react';
import { 
  AreaChart, Area, BarChart, Bar, ResponsiveContainer, Tooltip,
  PieChart, Pie, Cell, XAxis, YAxis
} from 'recharts';

// --- MOCK DAS KEYWORDS E SEGMENTAÇÕES (Filter Panel) ---
const filterCategories = {
  'Tratamentos & Procedimentos': ['Toxina Botulínica', 'Preenchimento', 'Bioestimulador', 'Fios de PDO', 'Peeling Químico'],
  'Lasers & Tecnologias': ['Ultraformer MPT', 'Lavieen', 'Fotona', 'PicoSure', 'Soprano Titanium'],
  'Anatomia Sniper': ['Terço Superior', 'Olheiras', 'Malar', 'Contorno Mandibular', 'Pescoço', 'Glúteos'],
  'Perfil da Clínica': ['Estética Básica', 'Estética Avançada', 'Dermatologia', 'Clínica Premium'],
  'Região de Atuação': ['São Paulo', 'Rio de Janeiro', 'Sul', 'Nordeste', 'Brasil (Geral)'],
  'Público-Alvo': ['Classe A/B', 'Classe C', '25-35 anos', '35-50 anos', 'Feminino', 'Masculino'],
  'Objetivo Estratégico': ['Aumentar Faturamento', 'Lançar Procedimento', 'Encontrar Oportunidade', 'Dominar Concorrência'],
  'Ticket Médio Alvo': ['Até R$ 1.000', 'R$ 1.000 a R$ 3.000', 'Acima de R$ 3.000']
};

// --- DADOS DO MOTOR FIXO (Métricas Reais RABI OMNI) ---
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

// --- SISTEMA DE CONTROLE DE USO DIÁRIO ---
const DAILY_LIMIT = 5;

const checkDailyLimit = () => {
  const today = new Date().toDateString();
  const usage = JSON.parse(localStorage.getItem('sae_usage')) || { date: today, count: 0 };
  if (usage.date !== today) { usage.count = 0; usage.date = today; }
  return usage;
};

const incrementUsage = (usage) => {
  usage.count += 1;
  localStorage.setItem('sae_usage', JSON.stringify(usage));
};

// --- COMPONENTE: SMART FORM PANEL ---
const SmartFilterPanel = ({ isOpen, selectedFilters, toggleFilter, onSearch, isSearching }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-14 right-0 w-[600px] bg-[#0b1121]/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] z-50 animate-fade-in flex flex-col max-h-[80vh]">
      <div className="p-5 border-b border-white/5">
        <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest flex items-center">
          <SlidersHorizontal size={16} className="mr-2" /> Parametrização Tática
        </h3>
        <p className="text-xs text-gray-400 mt-1">Selecione os vetores para guiar a inteligência do consultor.</p>
      </div>
      
      <div className="p-5 overflow-y-auto custom-scrollbar flex-1 space-y-6">
        {Object.entries(filterCategories).map(([category, items]) => (
          <div key={category}>
            <p className="text-xs text-gray-500 font-bold uppercase mb-3 tracking-wider">{category}</p>
            <div className="flex flex-wrap gap-2">
              {items.map(item => {
                const isSelected = selectedFilters.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleFilter(item)}
                    className={`text-xs px-3 py-1.5 rounded-full transition-all flex items-center space-x-1 border ${
                      isSelected 
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.2)]' 
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-gray-200'
                    }`}
                  >
                    <span>{item}</span>
                    {isSelected && <Check size={12} />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="p-5 border-t border-white/5 bg-black/20 rounded-b-xl flex justify-between items-center">
        <span className="text-xs font-mono text-gray-500">
          {selectedFilters.length} vetores selecionados
        </span>
        <button 
          onClick={onSearch}
          disabled={isSearching || selectedFilters.length === 0}
          className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center shadow-[0_0_15px_rgba(6,182,212,0.3)]"
        >
          {isSearching ? <Loader2 size={16} className="animate-spin mr-2" /> : <Activity size={16} className="mr-2" />}
          GERAR ANÁLISE ESTRATÉGICA
        </button>
      </div>
    </div>
  );
};

// --- COMPONENTE: DASHBOARD DE RELATÓRIO CONSULTIVO ---
const ReportDashboard = ({ data, onClose, onNewSearch }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex justify-center overflow-y-auto">
      <div className="w-full max-w-7xl min-h-screen bg-[#030712] relative animate-fade-in print:bg-white print:text-black">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-50 bg-[#030712]/90 backdrop-blur-md border-b border-white/5 p-6 flex justify-between items-center print:hidden">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/20">
              <ShieldCheck className="text-cyan-400" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tight">Dossiê Estratégico: {data.keyword.toUpperCase()}</h2>
              <div className="flex space-x-3 text-sm font-mono text-gray-500 mt-1">
                <span>SEGMENTO: {data.category}</span>
                <span>•</span>
                <span>GEO: {data.region}</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <button onClick={onNewSearch} className="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg text-sm font-bold transition-colors">Nova Pesquisa</button>
            <button onClick={() => window.print()} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-bold transition-colors flex items-center space-x-2">
              <Download size={16} /> <span>Exportar PDF</span>
            </button>
            <button onClick={onClose} className="p-2 bg-white/5 hover:bg-red-500/20 hover:text-red-400 rounded-lg text-gray-400 transition-colors"><X size={20} /></button>
          </div>
        </div>

        <div className="p-8 max-w-6xl mx-auto space-y-10 pb-32">
          
          {/* 1. VISÃO ESTRATÉGICA DO CONSULTOR (NARRATIVA) */}
          <section className="bg-gradient-to-br from-indigo-900/10 to-cyan-900/5 border border-indigo-500/20 rounded-2xl p-8 relative overflow-hidden print:border-gray-300 print:bg-gray-50">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
            <h3 className="text-xl font-black text-white mb-6 flex items-center tracking-tight print:text-black">
              <MessageSquare className="mr-3 text-indigo-400" size={24}/> Visão do Especialista
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-2 flex items-center"><Target size={14} className="mr-2"/> Leitura de Mercado</h4>
                <p className="text-gray-300 leading-relaxed text-sm print:text-gray-800">{data.narrative.intro}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2 flex items-center"><Lightbulb size={14} className="mr-2"/> Interpretação Estratégica</h4>
                <p className="text-gray-300 leading-relaxed text-sm print:text-gray-800">{data.narrative.interpretation}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-2 flex items-center"><TrendingUp size={14} className="mr-2"/> Posicionamento Recomendado</h4>
                <p className="text-gray-300 leading-relaxed text-sm print:text-gray-800">{data.narrative.positioning}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-red-400 uppercase tracking-widest mb-2 flex items-center"><AlertCircle size={14} className="mr-2"/> Riscos Identificados</h4>
                <p className="text-gray-300 leading-relaxed text-sm print:text-gray-800">{data.narrative.risks}</p>
              </div>
            </div>
          </section>

          {/* 2. LEITURA DE DADOS (MÉTRICAS EXPLICADAS) */}
          <section>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center print:text-black"><Activity className="mr-2 text-cyan-400" size={20}/> Termômetro de Demanda</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#0b1121] p-6 rounded-2xl border border-white/5 print:border-gray-200">
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2">Volume de Busca</p>
                <p className="text-4xl font-black text-white print:text-black mb-3">{data.metrics.volume.toLocaleString('pt-BR')}</p>
                <p className="text-xs text-gray-400 leading-relaxed border-t border-white/10 pt-3 print:text-gray-600 print:border-gray-200">
                  <strong className="text-cyan-400 print:text-cyan-600">O que significa:</strong> {data.metrics.volumeText}
                </p>
              </div>
              <div className="bg-[#0b1121] p-6 rounded-2xl border border-white/5 print:border-gray-200">
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2">Crescimento (90d)</p>
                <p className={`text-4xl font-black mb-3 ${data.metrics.growth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {data.metrics.growth > 0 ? '+' : ''}{data.metrics.growth}%
                </p>
                <p className="text-xs text-gray-400 leading-relaxed border-t border-white/10 pt-3 print:text-gray-600 print:border-gray-200">
                  <strong className="text-green-400 print:text-green-600">O que indica:</strong> {data.metrics.growthText}
                </p>
              </div>
              <div className="bg-[#0b1121] p-6 rounded-2xl border border-white/5 print:border-gray-200">
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2">Concorrência Direta</p>
                <p className="text-4xl font-black text-indigo-400 mb-3">{data.metrics.competition}/100</p>
                <p className="text-xs text-gray-400 leading-relaxed border-t border-white/10 pt-3 print:text-gray-600 print:border-gray-200">
                  <strong className="text-indigo-400 print:text-indigo-600">Interpretação:</strong> {data.metrics.compText}
                </p>
              </div>
            </div>
          </section>

          {/* 3. FINANCEIRO & PRODUTOS (COMBINADO) */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 print:border-gray-200 print:bg-transparent">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center print:text-gray-600">
                <DollarSign className="mr-2 text-green-400" size={16}/> Engenharia Financeira Estimada
              </h3>
              
              <div className="flex justify-between items-end mb-6 pb-6 border-b border-white/5 print:border-gray-200">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Custo Médio (Insumos)</p>
                  <p className="text-2xl font-black text-gray-300 print:text-gray-800">R$ {data.financials.avgCost.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Ticket Médio Cobrado</p>
                  <p className="text-2xl font-black text-white print:text-black">R$ {data.financials.avgPrice.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-green-500 font-bold uppercase tracking-widest">ROI Potencial Bruto</p>
                  <p className="text-3xl font-black text-green-400">{data.financials.roi}%</p>
                </div>
                <p className="text-sm text-gray-400 italic bg-black/20 p-3 rounded-lg print:text-gray-600 print:bg-gray-50">
                  "{data.financials.analysis}"
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 print:border-gray-200 print:bg-transparent">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center print:text-gray-600">
                <Database className="mr-2 text-indigo-400" size={16}/> Arsenal Recomendado (Insumos & Lasers)
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-indigo-400 font-bold uppercase mb-2">Principais Insumos</p>
                  <ul className="space-y-2">
                    {data.inputs.map((input, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300 print:text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /><span>{input}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/5 print:border-gray-200">
                  <p className="text-xs text-yellow-400 font-bold uppercase mb-2">Tecnologias Associadas</p>
                  <ul className="space-y-2">
                    {data.technologies.map((tech, idx) => (
                      <li key={idx} className="flex justify-between items-center text-sm bg-black/20 px-3 py-2 rounded-lg print:bg-gray-50">
                        <span className="font-bold text-gray-200 print:text-gray-800">{tech.name} <span className="text-xs text-gray-500 font-normal ml-1">({tech.origin})</span></span>
                        <span className="font-mono text-cyan-400">Ref: R$ {tech.sessionCost}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 4. VISUALIZAÇÃO GRÁFICA */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[350px]">
             <div className="bg-[#0b1121] border border-white/5 p-6 rounded-2xl flex flex-col print:border-gray-200 print:bg-transparent">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 print:text-gray-600">Evolução da Demanda OMNI</h3>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.charts.timeline}>
                  <defs>
                    <linearGradient id="colorOmniChart" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip contentStyle={{ backgroundColor: '#030712', borderColor: '#1f2937' }} />
                  <Area type="monotone" dataKey="valor" stroke="#06b6d4" strokeWidth={3} fill="url(#colorOmniChart)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-[#0b1121] border border-white/5 p-6 rounded-2xl flex flex-col print:border-gray-200 print:bg-transparent">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 print:text-gray-600">Distribuição Regional Primária</h3>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={data.market.topRegionsData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="valor">
                    {data.market.topRegionsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#1f2937' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

// --- COMPONENTES UI: NAVBAR & BUSCA ---
const Navbar = ({ isScrolled, searchQuery, setSearchQuery, handleSearch, isSearching, usageInfo }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (item) => {
    setSelectedFilters(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const onSubmit = () => {
    handleSearch(searchQuery, selectedFilters);
    setShowFilters(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-700 px-10 py-4 flex items-center justify-between ${isScrolled ? 'bg-[#030712]/95 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'}`}>
      <div className="flex items-center space-x-12">
        <h1 className="text-5xl font-black tracking-tighter cursor-pointer flex items-center space-x-2">
          <ShieldCheck className="text-cyan-400" size={36} />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 italic">SAE</span>
          <span className="text-white not-italic font-light">OMNI</span>
        </h1>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="relative flex items-center">
          <div className="relative z-50 flex items-center">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Digite um alvo tático livre..." 
              className="bg-white/5 border border-white/10 rounded-l-full py-2 pl-5 pr-10 text-sm focus:outline-none focus:border-cyan-500 w-64 transition-all focus:w-80 placeholder:text-gray-600 text-white"
              disabled={isSearching}
            />
            <button 
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-2 text-sm border-y border-r rounded-r-full transition-colors flex items-center space-x-2 ${
                showFilters || selectedFilters.length > 0
                  ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' 
                  : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
              }`}
            >
              <SlidersHorizontal size={16} />
              <span className="font-bold">Filtros</span>
              {selectedFilters.length > 0 && <span className="bg-cyan-400 text-black text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center ml-1">{selectedFilters.length}</span>}
            </button>
          </div>
          
          <SmartFilterPanel isOpen={showFilters} selectedFilters={selectedFilters} toggleFilter={toggleFilter} onSearch={onSubmit} isSearching={isSearching} />
        </div>

        <div className="hidden lg:flex items-center space-x-2 text-xs font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-400">
          <Activity size={14} className={usageInfo.count >= DAILY_LIMIT ? 'text-red-400' : 'text-green-400'}/>
          <span>{usageInfo.count}/{DAILY_LIMIT} Consultas</span>
        </div>

        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(6,182,212,0.4)]">OP</div>
      </div>
    </nav>
  );
};


// --- APLICAÇÃO PRINCIPAL ---
export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [liveData, setLiveData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [reportData, setReportData] = useState(null);
  const [usageInfo, setUsageInfo] = useState({ date: '', count: 0 });
  const [showLimitAlert, setShowLimitAlert] = useState(false);

  useEffect(() => {
    setUsageInfo(checkDailyLimit());
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const fetchInteligencia = async () => {
      try {
        const response = await fetch('https://sae-9wqa.onrender.com/api/radar');
        const data = await response.json();
        setLiveData(data);
        setIsLoading(false);
} catch (error) {
        console.error("Alerta de conexão com o Motor:", error);
        setIsLoading(false);
      }
    };
    fetchInteligencia();
    const interval = setInterval(fetchInteligencia, 10000); 

    return () => { window.removeEventListener('scroll', handleScroll); clearInterval(interval); };
  }, []);

  // --- 🎯 CORE: HANDLE SEARCH E SCHEMA DO BOT CONSULTIVO ---
  const handleSearch = async (query, filters) => {
    const currentUsage = checkDailyLimit();
    if (currentUsage.count >= DAILY_LIMIT) {
      setShowLimitAlert(true);
      return;
    }

    setIsSearching(true);
    setShowLimitAlert(false);

    try {
      // Mock do tempo de processamento do Bot
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const keywordTarget = query || filters.join(' + ') || 'Análise de Mercado Ampla';
      
      // O SCHEMA DE DADOS DINÂMICOS CONSULTIVOS
      const mockDynamicSchema = {
        category: filters.length > 0 ? "Análise Multi-Filtro" : "Busca Direta Livre",
        keyword: keywordTarget,
        region: filters.find(f => filterCategories['Região de Atuação'].includes(f)) || "Brasil (Nacional)",
        narrative: {
          intro: `Ao processar os dados para "${keywordTarget}", identificamos um padrão comportamental forte na base consumidora. Há uma latência de desejo reprimido que as clínicas padrão não estão atendendo.`,
          interpretation: "Isso indica que o mercado não está buscando preço, mas sim 'segurança percebida'. A alta demanda somada à barreira de entrada moderada sugere uma janela de oportunidade iminente.",
          positioning: "Do ponto de vista estratégico, a recomendação é distanciar-se da guerra de preços. Embale este procedimento como uma 'solução premium' com foco no resultado anatômico, não no insumo.",
          risks: "O principal risco é o 'Efeito Comoditização'. Clínicas adjacentes estão começando a oferecer isso como isca de baixo custo. A diferenciação no atendimento é obrigatória."
        },
        metrics: {
          volume: Math.floor(Math.random() * 80000) + 15000,
          volumeText: "Este volume reflete uma demanda consistente e em fase de expansão. O paciente já sabe o que quer.",
          growth: parseFloat((Math.random() * 250 - 30).toFixed(1)),
          growthText: "Demonstra um aquecimento recente do mercado. Modismos caem rápido, mas esta inclinação sugere tendência duradoura.",
          competition: Math.floor(Math.random() * 40) + 60,
          compText: "Barreira de entrada moderada-alta. O tráfego pago nesta área exige criativos extremamente qualificados."
        },
        financials: {
          avgCost: Math.floor(Math.random() * 300) + 150,
          avgPrice: Math.floor(Math.random() * 1500) + 800,
          get roi() { return Math.floor(((this.avgPrice - this.avgCost) / this.avgCost) * 100) },
          analysis: "A margem operacional permite absorver um CAC (Custo de Aquisição) mais alto. Invista agressivamente no topo de funil."
        },
        inputs: ["Ácido Hialurônico (Alta Viscoelasticidade)", "Bioestimulador PLLA", "Cânulas 22G", "Anestésico Tópico Composto"],
        technologies: [
          { name: "Ultraformer MPT", origin: "Nacionalizado", sessionCost: 1800 },
          { name: "Lavieen Thulium", origin: "Internacional", sessionCost: 900 }
        ],
        market: {
          saturation: "Média-Alta",
          topRegionsData: [
            { name: 'São Paulo (Capital)', valor: 45 }, { name: 'RJ (Zona Sul)', valor: 25 },
            { name: 'Campinas / Interior', valor: 15 }, { name: 'Outras', valor: 15 }
          ]
        },
        charts: {
          timeline: Array.from({length: 6}, (_, i) => ({ mes: `M${i+1}`, valor: Math.floor(Math.random() * 100) + 20 })),
          procedures: [
            { name: "Preenchimento", valor: 85 }, { name: "Bioestimulador", valor: 65 }, 
            { name: "Fios", valor: 40 }, { name: "Laser", valor: 30 }
          ]
        }
      };

      incrementUsage(currentUsage);
      setUsageInfo(currentUsage);
      setReportData(mockDynamicSchema);

    } catch (error) {
      console.error("Falha RABI:", error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-cyan-500/30 pb-20">
      
      {reportData && <ReportDashboard data={reportData} onClose={() => setReportData(null)} onNewSearch={() => { setReportData(null); setSearchQuery(''); }} />}
      
      {showLimitAlert && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-red-500/10 border border-red-500/50 backdrop-blur-md px-6 py-4 rounded-xl flex items-center space-x-4 animate-fade-in shadow-[0_0_30px_rgba(239,68,68,0.2)]">
          <AlertTriangle className="text-red-400" size={24} />
          <div>
            <p className="font-bold text-red-100">Limite de Consultoria Atingido</p>
            <p className="text-sm text-red-200/70">O limite de {DAILY_LIMIT} análises do plano atual foi excedido. Retorne amanhã ou faça o upgrade.</p>
          </div>
          <button onClick={() => setShowLimitAlert(false)} className="ml-4 p-1 hover:bg-white/10 rounded"><X size={16} className="text-red-300"/></button>
        </div>
      )}

      <Navbar 
        isScrolled={isScrolled} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        isSearching={isSearching}
        usageInfo={usageInfo}
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
          </div>
          <LiveRadar data={liveData} isLoading={isLoading} />
        </section>
      </main>

      <footer className="fixed bottom-0 w-full bg-[#030712]/90 backdrop-blur-md border-t border-white/5 py-4 px-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-mono z-40 gap-4">
        <div className="flex items-center space-x-8">
          <span className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_#06b6d4]"/> 
            <span className="text-cyan-400 font-bold">API CONECTADA (RENDER CLOUD)</span>
          </span>
          <span className="hidden md:inline">CENÁRIOS: 252.841</span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-sans tracking-widest uppercase">
          <a href="https://instagram.com/callmepewk" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">CTO: @callmepewk</a>
          <a href="https://instagram.com/aidoctorbr" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">@aidoctorbr</a>
        </div>

        <div className="hidden lg:block">
          SAE OMNI INTELLIGENCE CORE © 2026
        </div>
      </footer>
    </div>
  );
}

// --- Funções Auxiliares dos Componentes Visuais (Mantidas Absolutamente) ---
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
        </div>
      </div>
    </div>
  </header>
);

const MetricsComparison = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <p className="text-sm text-cyan-500 uppercase tracking-wider mb-1 font-bold">Com RABI</p>
            <p className="text-4xl font-black text-white">{item.textA}</p>
          </div>
        </div>
        <div className={`mt-4 pt-4 border-t border-white/5 font-black text-right text-lg ${item.color}`}>IMPACTO: {item.impact}</div>
      </div>
    ))}
  </div>
);

const TaxonomyGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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

const ChartWidget = () => (
  <div className="bg-[#0b1121] border border-white/5 rounded-2xl p-6 h-[320px] flex flex-col relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-600" />
    <h3 className="text-base font-bold text-gray-400 uppercase tracking-widest mb-6">Eficiência de Captação</h3>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={mockChartData}>
        <defs>
          <linearGradient id="colorOmni" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.5}/>
            <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="v" stroke="#06b6d4" strokeWidth={4} fill="url(#colorOmni)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

const LiveRadar = ({ data, isLoading }) => (
  <div className="bg-[#0b1121] border border-white/5 rounded-2xl overflow-hidden">
    {isLoading ? (
      <div className="p-12 text-center text-cyan-500 font-mono text-lg animate-pulse">Sincronizando com Banco de Dados MONGODB...</div>
    ) : (
      <table className="w-full text-left">
        <thead className="bg-black/50 text-xs uppercase tracking-widest text-gray-500 border-b border-white/5">
          <tr><th className="p-5">Termo Identificado</th><th className="p-5">Mercado</th><th className="p-5">Evolução (%)</th><th className="p-5">Status RABI</th></tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {data.length > 0 ? data.map((item, i) => (
            <tr key={i} className="hover:bg-cyan-900/10 transition-colors group">
              <td className="p-5 font-bold text-lg text-gray-200">{item.termo_chave}</td>
              <td className="p-5 text-gray-400">{item.mercado}</td>
              <td className="p-5 font-mono font-bold text-green-400">+{item.evolucao?.toFixed(2)}%</td>
              <td className="p-5"><span className="text-xs font-black uppercase px-3 py-1.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">{item.status_tendencia || 'PROCESSANDO'}</span></td>
            </tr>
          )) : (
            <tr><td colSpan="4" className="p-10 text-center text-gray-500">Nenhuma anomalia detectada.</td></tr>
          )}
        </tbody>
      </table>
    )}
  </div>
);