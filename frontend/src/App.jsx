import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Bell, Globe, Activity, Crosshair, TrendingUp, 
  DollarSign, Zap, BarChart3, Database, ShieldCheck,
  Loader2, Download, X, SlidersHorizontal, Check, AlertTriangle,
  MessageSquare, Target, Lightbulb, AlertCircle, MapPin, 
  ChevronDown, Flame, Snowflake, ArrowUpRight
} from 'lucide-react';
import { 
  AreaChart, Area, ResponsiveContainer, Tooltip,
  PieChart, Pie, Cell
} from 'recharts';

// --- MOCK DAS KEYWORDS E SEGMENTAÇÕES (Filter Panel & Autocomplete) ---
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

const autocompleteDatabase = [
  { term: 'Toxina Botulínica', cat: 'Procedimento' }, { term: 'Preenchimento Labial', cat: 'Procedimento' },
  { term: 'Bioestimulador de Colágeno', cat: 'Tratamento' }, { term: 'Fios de PDO', cat: 'Procedimento' },
  { term: 'Ultraformer MPT', cat: 'Laser' }, { term: 'Lavieen', cat: 'Laser' },
  { term: 'Fotona 4D', cat: 'Laser' }, { term: 'Morpheus8', cat: 'Radiofrequência' },
  { term: 'Terço Superior', cat: 'Anatomia' }, { term: 'Contorno Mandibular', cat: 'Anatomia' },
  { term: 'Papada', cat: 'Anatomia' }, { term: 'Melasma', cat: 'Tratamento' },
  { term: 'Flacidez Facial', cat: 'Tratamento' }, { term: 'Gordura Localizada', cat: 'Tratamento' }
];

// --- FALLBACK PARA QUANDO O RENDER ESTIVER DORMINDO (Melhor UX) ---
const fallbackRadarData = [
  { termo_chave: 'Sincronizando...', mercado: 'Iniciando Motor', evolucao: 0, status_tendencia: 'AGUARDANDO OMNI' }
];

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

// --- SISTEMA DE CONTROLE DE USO DIÁRIO ---
const DAILY_LIMIT = 100; // CTO GOD MODE

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

// --- COMPONENTE: GEO SELECTOR & SMART SEARCH BAR ---
const SmartSearchBar = ({ onSearch, isSearching }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  
  const [geoScope, setGeoScope] = useState(null); 
  const [isGeoConfirmed, setIsGeoConfirmed] = useState(false);
  const [showGeoPrompt, setShowGeoPrompt] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) setShowSuggestions(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.length > 1) {
      const filtered = autocompleteDatabase.filter(item => item.term.toLowerCase().includes(val.toLowerCase()));
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSelectTerm = (term) => {
    setQuery(term);
    setShowSuggestions(false);
  };

  const toggleFilter = (item) => {
    setSelectedFilters(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!isGeoConfirmed) {
      setShowGeoPrompt(true);
      return;
    }
    if (query.trim() || selectedFilters.length > 0) {
      onSearch(query, selectedFilters, geoScope);
      setShowFilters(false);
    }
  };

  return (
    <div className="relative flex items-center" ref={searchRef}>
      
      <button 
        type="button"
        onClick={() => setShowGeoPrompt(!showGeoPrompt)}
        className={`px-4 py-2 text-sm border-y border-l rounded-l-full transition-colors flex items-center space-x-2 z-50 ${
          isGeoConfirmed ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'bg-red-500/10 border-red-500/30 text-red-400 animate-pulse'
        }`}
      >
        <MapPin size={16} />
        <span className="font-bold hidden md:block">{isGeoConfirmed ? geoScope : 'Localização Necessária'}</span>
        <ChevronDown size={14} />
      </button>

      <form onSubmit={handleSubmit} className="relative z-40 flex items-center">
        <input 
          type="text" 
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.length > 1 && setShowSuggestions(true)}
          placeholder="Alvo tático (ex: Morpheus8, Papada)..." 
          className="bg-[#0b1121] border-y border-white/10 py-2 pl-4 pr-12 text-sm focus:outline-none focus:border-cyan-500 w-48 lg:w-80 transition-all text-white placeholder:text-gray-600"
          disabled={isSearching}
        />
        <button 
          type="submit" 
          disabled={isSearching || (!query.trim() && selectedFilters.length === 0)}
          className="absolute right-3 text-gray-400 hover:text-cyan-400 transition-colors disabled:opacity-50"
        >
          {isSearching ? <Loader2 size={16} className="animate-spin text-cyan-400" /> : <Search size={16} />}
        </button>
      </form>

      <button 
        type="button"
        onClick={() => setShowFilters(!showFilters)}
        className={`px-4 py-2 text-sm border-y border-r rounded-r-full transition-colors flex items-center space-x-2 z-40 ${
          showFilters || selectedFilters.length > 0 ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
        }`}
      >
        <SlidersHorizontal size={16} />
        <span className="font-bold hidden md:block">Filtros</span>
        {selectedFilters.length > 0 && <span className="bg-cyan-400 text-black text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center ml-1">{selectedFilters.length}</span>}
      </button>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-12 left-32 w-full max-w-md bg-[#0b1121]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] z-50 overflow-hidden">
          <div className="p-2 bg-white/5 border-b border-white/10 text-xs font-bold text-gray-500 uppercase tracking-widest">Base de Inteligência OMNI</div>
          <ul>
            {suggestions.map((item, idx) => (
              <li key={idx} onClick={() => handleSelectTerm(item.term)} className="px-4 py-3 hover:bg-cyan-500/10 cursor-pointer flex justify-between items-center border-b border-white/5 last:border-0 group">
                <span className="text-gray-300 font-medium group-hover:text-cyan-400">{item.term}</span>
                <span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-white/5 text-gray-500">{item.cat}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showGeoPrompt && !isGeoConfirmed && (
        <div className="absolute top-14 left-0 w-80 bg-[#0b1121] border border-cyan-500/30 rounded-xl shadow-2xl z-50 p-5 animate-fade-in">
          <div className="flex items-center space-x-3 mb-4 border-b border-white/10 pb-3">
            <Globe className="text-cyan-400" size={20} />
            <h3 className="font-bold text-white tracking-tight">Detectamos: São Paulo - SP</h3>
          </div>
          <p className="text-xs text-gray-400 mb-4">Para gerar projeções precisas, defina a amplitude do radar antes da busca:</p>
          <div className="space-y-2">
            <button onClick={() => { setGeoScope('São Paulo (Estadual)'); setIsGeoConfirmed(true); setShowGeoPrompt(false); }} className="w-full text-left px-4 py-2 text-sm bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 rounded border border-white/5 transition-colors">🎯 Usar Radar Local (SP)</button>
            <button onClick={() => { setGeoScope('Brasil (Nacional)'); setIsGeoConfirmed(true); setShowGeoPrompt(false); }} className="w-full text-left px-4 py-2 text-sm bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 rounded border border-white/5 transition-colors">🇧🇷 Radar Nacional (Brasil)</button>
            <button onClick={() => { setGeoScope('Global (Mundo)'); setIsGeoConfirmed(true); setShowGeoPrompt(false); }} className="w-full text-left px-4 py-2 text-sm bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 rounded border border-white/5 transition-colors">🌍 Radar Global</button>
          </div>
        </div>
      )}

      {showFilters && (
        <div className="absolute top-14 right-0 w-80 md:w-[600px] bg-[#0b1121]/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] z-50 animate-fade-in flex flex-col max-h-[80vh]">
          <div className="p-5 border-b border-white/5">
            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest flex items-center">
              <SlidersHorizontal size={16} className="mr-2" /> Parametrização Tática
            </h3>
          </div>
          <div className="p-5 overflow-y-auto custom-scrollbar flex-1 space-y-6">
            {Object.entries(filterCategories).map(([category, items]) => (
              <div key={category}>
                <p className="text-xs text-gray-500 font-bold uppercase mb-3 tracking-wider">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => {
                    const isSelected = selectedFilters.includes(item);
                    return (
                      <button key={item} type="button" onClick={() => toggleFilter(item)} className={`text-xs px-3 py-1.5 rounded-full transition-all flex items-center space-x-1 border ${isSelected ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.2)]' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-gray-200'}`}>
                        <span>{item}</span>{isSelected && <Check size={12} />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="p-5 border-t border-white/5 bg-black/20 rounded-b-xl flex justify-between items-center">
            <span className="text-xs font-mono text-gray-500">{selectedFilters.length} vetores selecionados</span>
            <button onClick={handleSubmit} disabled={isSearching || (!query && selectedFilters.length === 0)} className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg text-sm transition-all disabled:opacity-50 flex items-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              {isSearching ? <Loader2 size={16} className="animate-spin mr-2" /> : <Activity size={16} className="mr-2" />}
              GERAR ANÁLISE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- COMPONENTE: DOSSIÊ MCKINSEY (REPORT DASHBOARD V3) ---
const ReportDashboard = ({ data, onClose, onNewSearch }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#030712]/95 backdrop-blur-2xl flex justify-center overflow-y-auto custom-scrollbar">
      <div className="w-full max-w-[1400px] min-h-screen bg-transparent relative animate-fade-in print:bg-white print:text-black">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 p-6 px-10 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 rounded-xl flex items-center justify-center border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <Database className="text-cyan-400" size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tighter text-white uppercase">{data.keyword}</h2>
              <div className="flex items-center space-x-3 text-sm font-mono text-cyan-400 mt-1">
                <span className="flex items-center"><MapPin size={12} className="mr-1"/> {data.region}</span>
                <span>|</span>
                <span>STATUS: {data.narrative?.status || "OMNI CONNECTED"}</span>
              </div>
              {/* OMNI TRANSLATIONS BADGE */}
              {data.global_terms && Object.keys(data.global_terms).length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {Object.entries(data.global_terms).slice(0, 5).map(([lang, term]) => (
                    <span key={lang} className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-400 uppercase flex items-center">
                      <span className="text-cyan-400 font-bold mr-1">{lang}:</span> {term}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex space-x-3">
            <button onClick={onNewSearch} className="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-lg text-sm font-bold transition-colors">Nova Pesquisa</button>
            <button onClick={() => window.print()} className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-sm font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center space-x-2">
              <Download size={16} /> <span>Dossiê Executivo (PDF)</span>
            </button>
            <button onClick={onClose} className="p-2.5 bg-white/5 hover:bg-red-500/20 hover:text-red-400 rounded-lg text-gray-400 transition-colors"><X size={24} /></button>
          </div>
        </div>

        <div className="p-10 space-y-10 pb-32">
          
          {/* SCORE BOARD */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-cyan-900/40 to-[#0b1121] border border-cyan-500/30 rounded-2xl p-6 shadow-[0_0_20px_rgba(6,182,212,0.15)] flex flex-col justify-center items-center text-center">
              <p className="text-xs font-black text-cyan-400 uppercase tracking-widest mb-2">Score de Oportunidade OMNI</p>
              <p className="text-6xl font-black text-white drop-shadow-md">{data.marketScore?.overall_score || "N/A"}</p>
            </div>
            <div className="bg-[#0b1121] border border-white/10 rounded-2xl p-6 flex flex-col justify-center text-center">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Média Geral do Mercado</p>
              <p className="text-4xl font-black text-gray-300">{data.marketScore?.market_average || "N/A"}</p>
            </div>
            <div className="bg-[#0b1121] border border-white/10 rounded-2xl p-6 flex flex-col justify-center text-center">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Potencial Est. (Receita/Mês)</p>
              <p className="text-4xl font-black text-green-400">{data.marketScore?.total_potential || "N/A"}</p>
            </div>
            <div className="bg-[#0b1121] border border-white/10 rounded-2xl p-6 flex flex-col justify-center text-center">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Termo Mais Rentável</p>
              <p className="text-2xl font-black text-indigo-400 truncate w-full px-2" title={data.marketScore?.best_keyword}>{data.marketScore?.best_keyword || "N/A"}</p>
            </div>
          </section>

          {/* 1. NARRATIVA CONSULTORIA (MCKINSEY STYLE) */}
          <section className="bg-[#0b1121] border border-white/10 rounded-2xl p-8 shadow-xl">
            <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-6 flex items-center">
              <MessageSquare className="mr-2 text-indigo-400" size={16}/> Executive Summary & Inteligência
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-sm text-gray-300 leading-relaxed">
              <div className="md:col-span-1 bg-black/20 p-5 rounded-xl border border-white/5">
                <p className="text-cyan-400 font-bold uppercase mb-2 text-xs">Contexto Macro</p>
                {data.narrative?.context}
              </div>
              <div className="md:col-span-1 bg-black/20 p-5 rounded-xl border border-white/5">
                <p className="text-indigo-400 font-bold uppercase mb-2 text-xs">Análise de Dados</p>
                {data.narrative?.analysis}
              </div>
              <div className="md:col-span-1 bg-black/20 p-5 rounded-xl border border-white/5">
                <p className="text-yellow-400 font-bold uppercase mb-2 text-xs">Interpretação</p>
                {data.narrative?.interpretation}
              </div>
              <div className="md:col-span-1 bg-gradient-to-b from-green-500/10 to-transparent p-5 rounded-xl border border-green-500/20">
                <p className="text-green-400 font-bold uppercase mb-2 text-xs">Recomendação Tática</p>
                {data.narrative?.recommendation}
              </div>
              <div className="md:col-span-1 bg-gradient-to-b from-red-500/10 to-transparent p-5 rounded-xl border border-red-500/20">
                <p className="text-red-400 font-bold uppercase mb-2 text-xs">Risco e Saturação</p>
                {data.narrative?.risk}
              </div>
            </div>
          </section>

          {/* 2. BRASIL VS GLOBAL & PROJEÇÕES */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-[#0b1121] border border-white/10 rounded-2xl p-8">
              <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-6 flex items-center">
                <Globe className="mr-2 text-cyan-400" size={16}/> Benchmarking: {data.region} vs Global
              </h3>
              <table className="w-full text-left">
                <thead className="border-b border-white/10 text-xs uppercase text-gray-500">
                  <tr><th className="pb-3">Métrica</th><th className="pb-3 text-cyan-400">{data.region}</th><th className="pb-3 text-indigo-400">Global (Média)</th><th className="pb-3 text-right">Delta OMNI</th></tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {data.comparison && data.comparison.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02]">
                      <td className="py-4 font-bold text-gray-300">{row.metric}</td>
                      <td className="py-4 text-white font-mono">{row.br}</td>
                      <td className="py-4 text-gray-400 font-mono">{row.global}</td>
                      <td className={`py-4 text-right font-black ${row.delta.includes('+') || row.delta.includes('Oportunidade') ? 'text-green-400' : 'text-red-400'}`}>{row.delta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* PROJEÇÕES DO ORÁCULO */}
            <div className="bg-gradient-to-br from-indigo-900/20 to-black border border-indigo-500/30 rounded-2xl p-8 relative overflow-hidden">
               <div className="absolute -right-10 -top-10 text-indigo-500/10"><TrendingUp size={150} /></div>
               <h3 className="text-xs font-black text-indigo-400 uppercase tracking-[0.2em] mb-6 flex items-center relative z-10">
                <Target className="mr-2" size={16}/> Future Projection (Oráculo)
              </h3>
              <div className="space-y-6 relative z-10">
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <p className="text-xs text-gray-500 uppercase mb-1">Horizonte 3 Meses</p>
                  <p className="text-sm text-gray-200 font-medium">{data.projections?.m3}</p>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                  <p className="text-xs text-gray-500 uppercase mb-1">Horizonte 6 Meses</p>
                  <p className="text-sm text-gray-200 font-medium">{data.projections?.m6}</p>
                </div>
                <div>
                  <p className="text-xs text-indigo-400 font-bold uppercase mb-2">Sub-Tendências Emergentes:</p>
                  <ul className="space-y-2">
                    {data.projections?.trends && data.projections.trends.map((t, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-center"><ArrowUpRight size={12} className="text-green-400 mr-2"/> {t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 3. TOP PROCEDIMENTOS E LASERS DERIVADOS */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#0b1121] border border-white/10 rounded-2xl p-8">
              <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-6 flex items-center">
                <Activity className="mr-2 text-cyan-400" size={16}/> Top 5 Procedimentos Correlatos
              </h3>
              <div className="space-y-4">
                {data.topProcedures && data.topProcedures.map((proc, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-xl flex flex-col border border-white/5 hover:border-cyan-500/30 transition-colors">
                    <div className="flex justify-between items-center mb-2 border-b border-white/5 pb-2">
                      <div>
                        <p className="font-bold text-white text-sm">{proc.name}</p>
                        <p className="text-xs text-gray-500 mt-1">Ticket Médio: <span className="text-green-400">R$ {proc.ticket}</span></p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold uppercase text-gray-400">Demanda</p>
                        <p className="font-mono font-black text-cyan-400">{proc.volume}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 italic">"{proc.interpretation}"</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0b1121] border border-white/10 rounded-2xl p-8">
              <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-6 flex items-center">
                <Zap className="mr-2 text-yellow-400" size={16}/> Top Hardware & EBDs Recomendados
              </h3>
              <div className="space-y-4">
                {data.topLasers && data.topLasers.map((laser, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-xl flex justify-between items-center border border-white/5 hover:border-yellow-500/30 transition-colors">
                    <div>
                      <p className="font-bold text-white text-sm flex items-center">
                        {laser.name} <span className="ml-2 text-[10px] bg-white/10 px-2 py-0.5 rounded text-gray-400">{laser.type}</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{laser.maker} • Origem: {laser.origin}</p>
                      <p className="text-xs text-indigo-400 mt-1">Foco: {laser.apps}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold uppercase text-gray-400">ROI Est.</p>
                      <p className="font-mono font-black text-yellow-400">{laser.roi}</p>
                      <p className="text-[10px] text-gray-500 mt-1">Custo: {laser.cost}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

// --- APLICAÇÃO PRINCIPAL ---
export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [liveData, setLiveData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        const fetchedData = await response.json();
        
        // 🟢 FIX: Validação robusta de Array. Fallback se API falhar silenciosamente.
        if (fetchedData && Array.isArray(fetchedData.data)) {
          setLiveData(fetchedData.data);
        } else {
          setLiveData(fallbackRadarData);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Alerta de conexão com o Motor:", error);
        setLiveData(fallbackRadarData);
        setIsLoading(false);
      }
    };
    
    fetchInteligencia();
    const interval = setInterval(fetchInteligencia, 10000); 

    return () => { window.removeEventListener('scroll', handleScroll); clearInterval(interval); };
  }, []);

  // --- 🎯 CORE: HANDLE SEARCH CONECTADO AO MOTOR REAL ---
  const handleSearch = async (query, filters, geo) => {
    const currentUsage = checkDailyLimit();
    if (currentUsage.count >= DAILY_LIMIT) {
      setShowLimitAlert(true);
      return;
    }

    setIsSearching(true);
    setShowLimitAlert(false);

    try {
      const keywordTarget = query || filters.join(' + ') || 'Análise de Mercado Ampla';
      
      // 🟢 FIX: Chamada real. Se a API estiver offline, vai cair no Catch e gerar fallback para não travar a UX.
      const response = await fetch('https://sae-9wqa.onrender.com/api/dossie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          keyword: keywordTarget, 
          filters: filters, 
          region: geo || "Brasil (Nacional)" 
        })
      });

      if (!response.ok) throw new Error(`Status HTTP: ${response.status}`);

      const realDynamicSchema = await response.json();

      incrementUsage(currentUsage);
      setUsageInfo(currentUsage);
      setReportData(realDynamicSchema);

    } catch (error) {
      console.error("Falha RABI (Servidor Indisponível/Erro):", error);
      alert("⚠️ O Motor SAE (Backend) não respondeu a tempo ou está offline. \nCertifique-se de que o Render fez o deploy da última versão do motor.js!");
      setIsSearching(false); // Libera o botão de busca
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-cyan-500/30 pb-20">
      
      {reportData && <ReportDashboard data={reportData} onClose={() => setReportData(null)} onNewSearch={() => { setReportData(null); }} />}
      
      {showLimitAlert && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-red-500/10 border border-red-500/50 backdrop-blur-md px-6 py-4 rounded-xl flex items-center space-x-4 animate-fade-in shadow-[0_0_30px_rgba(239,68,68,0.2)]">
          <AlertTriangle className="text-red-400" size={24} />
          <div>
            <p className="font-bold text-red-100">Limite de Consultoria Atingido</p>
            <p className="text-sm text-red-200/70">O limite de {DAILY_LIMIT} análises foi excedido. Retorne amanhã ou faça o upgrade.</p>
          </div>
          <button onClick={() => setShowLimitAlert(false)} className="ml-4 p-1 hover:bg-white/10 rounded"><X size={16} className="text-red-300"/></button>
        </div>
      )}

      {/* NAVBAR V53 */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-700 px-4 md:px-10 py-4 flex items-center justify-between ${isScrolled ? 'bg-[#030712]/95 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'}`}>
        <div className="flex items-center space-x-12">
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter cursor-pointer flex items-center space-x-2">
            <ShieldCheck className="text-cyan-400" size={36} />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 italic hidden md:block">SAE</span>
            <span className="text-white not-italic font-light hidden md:block">OMNI</span>
          </h1>
        </div>
        
        <SmartSearchBar onSearch={handleSearch} isSearching={isSearching} />

        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center space-x-2 text-xs font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-400">
            <Activity size={14} className={usageInfo.count >= DAILY_LIMIT ? 'text-red-400' : 'text-green-400'}/>
            <span>{usageInfo.count}/{DAILY_LIMIT} Consultas</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(6,182,212,0.4)]">OP</div>
        </div>
      </nav>
      
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 md:px-10 py-12 relative z-10">
        
        {/* LIVE RADAR 3.0 */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Activity className="text-cyan-400 animate-pulse" size={32} />
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">Live Radar 3.0 <span className="text-xl text-gray-500 font-light ml-2 hidden md:inline">(Sinais Vitais do Mercado)</span></h2>
            </div>
          </div>
          <div className="bg-[#0b1121] border border-white/5 rounded-2xl overflow-hidden shadow-2xl overflow-x-auto">
            {isLoading ? (
              <div className="p-12 text-center text-cyan-500 font-mono text-lg animate-pulse">Sincronizando com Banco de Dados MONGODB...</div>
            ) : (
              <table className="w-full text-left min-w-[800px]">
                <thead className="bg-black/50 text-xs uppercase tracking-widest text-gray-500 border-b border-white/5">
                  <tr><th className="p-5">Termo Identificado / Anomalia</th><th className="p-5">Mercado</th><th className="p-5">Força do Sinal (%)</th><th className="p-5">Status Preditivo</th></tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {liveData.length > 0 ? liveData.map((item, i) => {
                    const evolucao = item.evolucao || 0;
                    let StatusIcon = TrendingUp;
                    let statusColor = "text-indigo-400 bg-indigo-500/20 border-indigo-500/30";
                    let statusText = item.status_tendencia || 'PROCESSANDO';

                    if (evolucao > 100) { StatusIcon = Flame; statusColor = "text-red-400 bg-red-500/20 border-red-500/30"; statusText = "EXPLOSÃO (TRENDING)"; }
                    else if (evolucao > 20) { StatusIcon = ArrowUpRight; statusColor = "text-green-400 bg-green-500/20 border-green-500/30"; statusText = "ASCENSÃO SÓLIDA"; }
                    else if (evolucao < 0) { StatusIcon = Snowflake; statusColor = "text-cyan-400 bg-cyan-500/20 border-cyan-500/30"; statusText = "RESFRIAMENTO (QUEDA)"; }
                    else if (evolucao === 0) { StatusIcon = Loader2; statusColor = "text-gray-400 bg-gray-500/20 border-gray-500/30 animate-pulse"; statusText = "AGUARDANDO OMNI"; }
                    else { StatusIcon = AlertCircle; statusColor = "text-yellow-400 bg-yellow-500/20 border-yellow-500/30"; statusText = "ALTO RISCO DE SATURAÇÃO"; }

                    return (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="p-5 font-bold text-lg text-gray-200 group-hover:text-cyan-400">{item.termo_chave}</td>
                        <td className="p-5 text-gray-400">{item.mercado}</td>
                        <td className={`p-5 font-mono font-black text-lg ${evolucao > 0 ? 'text-green-400' : evolucao < 0 ? 'text-red-400' : 'text-gray-400'}`}>{evolucao > 0 ? '+' : ''}{evolucao.toFixed(2)}%</td>
                        <td className="p-5">
                          <span className={`text-xs font-black uppercase px-3 py-1.5 rounded flex items-center w-max border ${statusColor}`}>
                            <StatusIcon size={14} className="mr-2" /> {statusText}
                          </span>
                        </td>
                      </tr>
                    );
                  }) : (
                    <tr><td colSpan="4" className="p-10 text-center text-gray-500">Aguardando novo processamento do Motor RABI...</td></tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </section>

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
              <h2 className="text-4xl font-black tracking-tight">Projeção de Crescimento</h2>
            </div>
            {/* 🟢 FIX: O componente agora recebe os dados ou usa o mock como fallback */}
            <ChartWidget data={mockChartData} />
          </div>
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
          <a href="https://instagram.com/alemoraisadv" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">@alemoraisadv</a>
          <a href="https://github.com/drjauru" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">drjauru</a>
          <a href="https://youtube.com/@codigosdolaser" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">Códigos do Laser</a>
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
  <header className="relative pt-40 pb-16 px-4 md:px-10 border-b border-white/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#030712] to-[#030712]">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full mb-6">
            <Globe size={16} className="text-cyan-400" />
            <span className="text-sm font-bold text-cyan-400 tracking-widest uppercase">Global Market Intelligence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-tight">
            O motor preditivo do<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Comercial Médico.</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Mais do que métricas. Uma consultoria algorítmica desenhada para antecipar o fluxo de capital, expor saturações tecnológicas e guiar a aquisição de pacientes de alto ticket.
          </p>
        </div>
        <div className="flex space-x-4 w-full md:w-auto justify-center">
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center backdrop-blur-md w-full">
            <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-2">Monitoramento Ativo</p>
            <p className="text-4xl font-black text-cyan-400">+1.2M</p>
            <p className="text-xs text-gray-600 mt-2">Dores e Termos Clínicos</p>
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
            <p className="text-sm text-cyan-500 uppercase tracking-wider mb-1 font-bold">Com OMNI</p>
            <p className="text-4xl font-black text-white">{item.textA}</p>
          </div>
        </div>
        <div className={`mt-4 pt-4 border-t border-white/5 font-black text-right text-lg ${item.color}`}>IMPACTO: {item.impact}</div>
      </div>
    ))}
  </div>
);

const TaxonomyGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

// 🟢 FIX: O ChartWidget agora recebe 'data' dinâmico
const ChartWidget = ({ data }) => (
  <div className="bg-[#0b1121] border border-white/5 rounded-2xl p-6 h-[320px] flex flex-col relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-600" />
    <h3 className="text-base font-bold text-gray-400 uppercase tracking-widest mb-6">Eficiência Predita de Captação</h3>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
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