import { useNavigate } from 'react-router-dom';
import { Settings as SettingsIcon } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import BottomNav from '../components/layout/BottomNav';

export default function Dados() {
  const navigate = useNavigate();
  const { setPreviousScreen } = useAppContext();

  return (
    <section className="w-full h-full bg-[#F8FAFC] overflow-hidden flex flex-col relative">
      <div className="px-6 pt-12 flex justify-between items-center bg-white border-b border-slate-50">
        <div className="flex items-center gap-3 pb-3">
          <img src="/logo.png" alt="AeroSmart" className="w-8 h-8 rounded-full object-contain" />
          <span className="text-xs font-bold text-brand-blue">AeroSmart</span>
        </div>
        <button className="text-gray-400 pb-3" onClick={() => { setPreviousScreen('/dados'); navigate('/definicoes'); }}>
          <SettingsIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-24 space-y-4 pt-4">
        <div>
          <p className="text-[10px] font-bold text-teal-600 uppercase tracking-widest mb-1">Análise de Dados</p>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">Análise do Inalador</h1>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">Técnica em tempo real e métricas dos últimos 7 dias.</p>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-100 relative overflow-hidden" style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div className="flex justify-between items-start mb-1">
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider leading-tight">
              Pontuação da<br />Técnica de Inalação
            </p>
            <button className="text-[10px] font-bold text-brand-blue flex items-center gap-0.5">
              Ver tudo
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
          <div className="flex items-end gap-2 mb-1">
            <span className="text-5xl font-black text-brand-blue">92</span>
            <span className="text-lg font-bold text-gray-300 mb-1">/ 100</span>
          </div>
          <p className="text-sm font-bold text-teal-500 flex items-center gap-1 mb-5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Excelente Técnica
          </p>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-[10px] font-bold mb-1">
                <span className="text-gray-700">Consistência</span>
                <span className="text-brand-blue">88%</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full">
                <div className="bg-brand-blue h-1.5 rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[10px] font-bold mb-1">
                <span className="text-gray-700">Precisão de Tempo</span>
                <span className="text-brand-blue">95%</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full">
                <div className="bg-brand-blue h-1.5 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-3xl p-5 flex gap-3 border border-orange-100">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-400 flex-shrink-0 shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-sm">Inalador Baixo: 12 doses restantes</h3>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Com base no seu uso atual, recomendamos solicitar uma recarga nos próximos 3 dias.
            </p>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-3xl p-5 border border-emerald-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[9px] font-bold text-emerald-700 uppercase tracking-wider">Força de Pico</p>
              <p className="text-[8px] text-emerald-600 uppercase">Valor máx. de fluxo de expiração</p>
            </div>
            <button className="text-[10px] font-bold text-emerald-700 flex items-center gap-0.5">
              Ver tudo
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-full border-4 border-emerald-400 flex items-center justify-center bg-white flex-shrink-0">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <span className="text-3xl font-black text-emerald-900">42.5</span>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Intervalo Ideal</p>
            </div>
          </div>
          <div className="flex items-end justify-between h-10 gap-1">
            <div className="w-full bg-emerald-200 rounded-sm" style={{ height: '60%' }}></div>
            <div className="w-full bg-emerald-300 rounded-sm" style={{ height: '40%' }}></div>
            <div className="w-full bg-emerald-300 rounded-sm" style={{ height: '55%' }}></div>
            <div className="w-full bg-emerald-400 rounded-sm" style={{ height: '75%' }}></div>
            <div className="w-full bg-emerald-800 rounded-sm" style={{ height: '100%' }}></div>
            <div className="w-full bg-emerald-400 rounded-sm" style={{ height: '70%' }}></div>
            <div className="w-full bg-emerald-200 rounded-sm" style={{ height: '45%' }}></div>
          </div>
          <p className="text-[8px] text-center text-emerald-600 mt-2 font-bold uppercase tracking-widest">Últimas 7 Sessões</p>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-100" style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 bg-blue-50 rounded-xl text-brand-blue">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-gray-900">5.2</span>
              <span className="text-base font-medium text-gray-400">segundos</span>
            </div>
          </div>
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3">Duração Média</p>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-3">
            <p className="text-xs text-blue-800 leading-relaxed">
              <strong className="text-blue-900">Boa:</strong> Está a sentir a inalação por mais 1.2s que na semana passada, o que melhora a absorção do medicamento.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-100" style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <h3 className="text-xs font-bold text-gray-800 mb-4">Sessões Recentes</h3>
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="pb-2 font-bold text-gray-400 uppercase tracking-tighter text-[9px] w-1/3">Sessão</th>
                <th className="pb-2 font-bold text-gray-400 uppercase tracking-tighter text-[9px] text-center">Pressão<br />(Pa)</th>
                <th className="pb-2 font-bold text-gray-400 uppercase tracking-tighter text-[9px] text-right">Vel. Angular<br />(º/s)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <tr>
                <td className="py-3 text-gray-700 text-xs">Hoje,<br /><span className="text-gray-400">08:30</span></td>
                <td className="py-3 text-center font-bold text-brand-blue text-xs">34.7</td>
                <td className="py-3 text-right text-gray-400 text-xs">12.5</td>
              </tr>
              <tr>
                <td className="py-3 text-gray-700 text-xs">Ontem,<br /><span className="text-gray-400">22:15</span></td>
                <td className="py-3 text-center font-bold text-brand-blue text-xs">32.8</td>
                <td className="py-3 text-right text-gray-400 text-xs">11.8</td>
              </tr>
              <tr>
                <td className="py-3 text-gray-700 text-xs">Ontem,<br /><span className="text-gray-400">09:45</span></td>
                <td className="py-3 text-center font-bold text-brand-blue text-xs">39.1</td>
                <td className="py-3 text-right text-gray-400 text-xs">13.2</td>
              </tr>
              <tr>
                <td className="py-3 text-gray-700 text-xs">14 Out,<br /><span className="text-gray-400">18:30</span></td>
                <td className="py-3 text-center font-bold text-brand-blue text-xs">33.5</td>
                <td className="py-3 text-right text-gray-400 text-xs">12.1</td>
              </tr>
              <tr>
                <td className="py-3 text-gray-700 text-xs">14 Out,<br /><span className="text-gray-400">08:10</span></td>
                <td className="py-3 text-center font-bold text-brand-blue text-xs">34.7</td>
                <td className="py-3 text-right text-gray-400 text-xs">12.9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <BottomNav />
    </section>
  );
}
