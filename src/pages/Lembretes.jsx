import { useNavigate } from 'react-router-dom';
import { Settings as SettingsIcon } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import BottomNav from '../components/layout/BottomNav';

export default function Lembretes() {
  const navigate = useNavigate();
  const { setPreviousScreen } = useAppContext();

  return (
    <section className="w-full h-full bg-[#F8FAFC] overflow-hidden flex flex-col relative">
      <div className="px-6 pt-12 pb-3 flex justify-between items-center bg-white border-b border-gray-50">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="AeroSmart" className="w-8 h-8 rounded-full object-contain" />
          <span className="text-xs font-bold text-brand-blue">AeroSmart</span>
        </div>
        <button className="text-gray-400" onClick={() => { setPreviousScreen('/lembretes'); navigate('/definicoes'); }}>
          <SettingsIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-24 pt-4 space-y-5">
        <div>
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Alertas Recentes</p>
          <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-4 flex gap-3">
            <div className="text-orange-400 mt-0.5 flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-800 font-bold text-sm">Aumento de dosagem detectado</h3>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                Usaste o inalador 3 vezes nas últimas 4 horas. Considera descansar.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-baseline mb-3">
            <h2 className="text-gray-800 font-bold text-lg">Lembretes</h2>
            <button
              className="text-brand-blue text-[10px] font-bold uppercase tracking-wider"
              onClick={() => navigate('/rotina')}
            >
              Ver Minha Rotina
            </button>
          </div>

          <div className="bg-white rounded-2xl p-5 mb-3 flex items-center justify-between border border-gray-50" style={{ boxShadow: '0 4px 15px -1px rgba(0, 0, 0, 0.05)' }}>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-gray-800">07:00</span>
              <span className="text-gray-400 text-xs font-bold">AM</span>
            </div>
            <div className="text-right">
              <h4 className="font-bold text-gray-800 text-sm">Inalador Matinal</h4>
              <p className="text-gray-400 text-[11px]">Diário · 2 inalações</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-soft-blue flex items-center justify-center text-brand-blue ml-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 flex items-center justify-between border border-gray-50" style={{ boxShadow: '0 4px 15px -1px rgba(0, 0, 0, 0.05)' }}>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-gray-800">08:30</span>
              <span className="text-gray-400 text-xs font-bold">PM</span>
            </div>
            <div className="text-right">
              <h4 className="font-bold text-gray-800 text-sm">Inalador Noturno</h4>
              <p className="text-gray-400 text-[11px]">Diário · 1 inalação</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-400 ml-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-brand-blue rounded-3xl p-5 text-white">
          <div className="mb-3">
            <svg className="w-5 h-5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2">Modo Foco ativo</h3>
          <p className="text-blue-100 text-xs leading-relaxed mb-4">
            Apenas alertas médicos críticos contornarão o seu horário de silêncio atual.
          </p>
          <button className="w-full bg-white text-brand-blue py-3 rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity">
            Editar Horário
          </button>
        </div>

        <div className="bg-orange-100 rounded-3xl p-5">
          <h3 className="text-blue-900 text-lg font-bold mb-2">Guia Instrucional</h3>
          <p className="text-blue-800 text-xs leading-relaxed mb-4">
            Observe um curto guia com dicas para a sua melhor utilização do inalador.
          </p>
          <button
            onClick={() => navigate('/tutorial')}
            className="w-full bg-white text-brand-blue py-3 rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Ver
          </button>
        </div>
      </div>

      <BottomNav />
    </section>
  );
}
