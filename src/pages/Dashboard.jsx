import { useNavigate } from 'react-router-dom';
import { Settings as SettingsIcon } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import BottomNav from '../components/layout/BottomNav';

export default function Dashboard() {
  const navigate = useNavigate();
  const { setPreviousScreen } = useAppContext();

  return (
    <section className="screen active w-[375px] h-[812px] bg-[#F8FAFC] rounded-[40px] shadow-2xl overflow-hidden flex-col relative border-[8px] border-black">
      <div className="px-6 pt-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="AeroSmart" className="w-8 h-8 rounded-full object-contain" />
          <span className="text-xs font-bold text-brand-blue">AeroSmart</span>
        </div>
        <button className="text-gray-400" onClick={() => { setPreviousScreen('/dashboard'); navigate('/definicoes'); }}>
          <SettingsIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 pb-24">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Bom dia, João.</h2>
          <p className="text-xs text-gray-400 font-medium">Pronto para a tua rotina diária?</p>
        </div>

        <div
          className="bg-brand-blue rounded-3xl p-5 text-white flex items-center justify-between shadow-lg shadow-blue-100 cursor-pointer hover:opacity-95 transition-opacity"
          onClick={() => navigate('/registry')}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-sm">Registar Inalação</h3>
              <p className="text-[10px] opacity-80">Registar uma dose manualmente</p>
            </div>
          </div>
          <svg className="w-5 h-5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-soft-blue rounded-full flex items-center justify-center text-brand-blue">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <span className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Última Utilização</span>
              <p className="font-bold text-gray-800">Hoje às 08:42</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 flex justify-between items-center">
          <div>
            <span className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Aderência</span>
            <p className="text-2xl font-bold text-gray-900 mt-1">66%</p>
            <span className="inline-flex items-center gap-1 bg-soft-blue text-brand-blue text-[9px] font-bold px-2 py-1 rounded-full mt-2">
              <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20">
                <path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd" />
              </svg>
              falta 1 dose
            </span>
          </div>
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
              <circle cx="32" cy="32" fill="transparent" r="28" className="ring-bg" strokeWidth="6" />
              <circle cx="32" cy="32" fill="transparent" r="28" className="ring-fill" strokeWidth="6" style={{ strokeDasharray: 176, strokeDashoffset: 60 }} />
            </svg>
            <span className="absolute text-[10px] font-bold">66%</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-3xl p-5 border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span className="text-[8px] uppercase font-bold text-gray-300">Estado</span>
            </div>
            <p className="font-bold text-sm">Conectado</p>
            <p className="text-[8px] text-gray-400">Sincronizado há 2m</p>
          </div>
          <div className="bg-white rounded-3xl p-5 border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h12.75V15H4.5v-4.5zM3.75 18h15a2.25 2.25 0 002.25-2.25V8.25A2.25 2.25 0 0018.75 6H3.75A2.25 2.25 0 001.5 8.25v7.5A2.25 2.25 0 003.75 18z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span className="text-[8px] uppercase font-bold text-gray-300">Bateria</span>
            </div>
            <p className="font-bold text-sm">85%</p>
            <p className="text-[8px] text-gray-400">~14h seguidas de utilização</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100">
          <span className="text-[9px] uppercase font-bold text-brand-blue tracking-wider">Estado do Inalador</span>
          <h3 className="text-xl font-bold text-gray-900 mt-2 mb-1">Nível de Medicação</h3>
          <p className="text-[9px] text-gray-400 mb-4">78/120 doses disponíveis — Ventolin Evohaler</p>
          <div className="flex items-end gap-1">
            <span className="text-4xl font-bold">65</span>
            <span className="text-lg font-bold text-gray-400 mb-1">%</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full mt-3 overflow-hidden">
            <div className="bar-fill" style={{ width: '65%' }}></div>
          </div>
        </div>

        <div className="bg-[#E9F7F5] rounded-3xl p-6 border border-[#D1ECEA]">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-white/60 rounded-full flex items-center justify-center text-[#1A9C8E]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <span className="bg-[#1A9C8E] text-white text-[8px] font-bold px-3 py-1 rounded-full uppercase">Ideal</span>
          </div>
          <h3 className="text-sm font-bold text-gray-800">Qualidade do Ar</h3>
          <p className="text-xl font-bold text-[#1A9C8E] mt-1 mb-3">12 IQA</p>
          <p className="text-[9px] text-[#1A9C8E] opacity-70 leading-relaxed">Nível de pólen baixo hoje. Ótima altura para um passeio.</p>
        </div>
      </div>

      <BottomNav />
    </section>
  );
}
