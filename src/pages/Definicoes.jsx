import { useNavigate } from 'react-router-dom';
import { Bluetooth, Volume2, Share2, ShieldCheck } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Definicoes() {
  const navigate = useNavigate();
  const { previousScreen } = useAppContext();

  return (
    <section className="w-full h-full bg-white overflow-hidden flex flex-col relative">
      <header className="flex items-center px-6 py-6" data-purpose="app-navigation">
        <button
          className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 mr-4"
          onClick={() => navigate(previousScreen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>
        <span className="font-bold text-slate-800 text-lg">Definições</span>
      </header>

      <div className="flex-1 overflow-y-auto px-0 pb-24">
        <section className="px-6 mb-6">
          <h1 className="text-3xl font-extrabold text-slate-800 mb-2">Definições</h1>
          <p className="text-slate-500 text-sm leading-snug">
            Personalize a sua experiência de cuidados e a conectividade do dispositivo.
          </p>
        </section>

        <section className="px-6 mb-6" data-purpose="device-management">
          <div className="bg-blue-50/30 rounded-3xl p-6 border border-blue-50/50 device-card-shadow">
            <div className="flex justify-between items-center mb-6">
              <div className="bg-cyan-300 text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-1.5 tracking-wider">
                <span className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse"></span>
                LIGAÇÃO EM DIRETO
              </div>
              <div className="text-slate-700">
                <Bluetooth className="w-5 h-5" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 leading-tight mb-2">Inalador<br />Inteligente Pro</h2>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              Última sincronização hoje às 08:45.<br />Nível da bateria a 84%.
            </p>
            <div className="flex gap-3">
              <button className="flex-1 bg-blue-700 text-white font-bold py-4 px-2 rounded-3xl text-sm transition active:scale-95">
                Reconectar
              </button>
              <button className="flex-1 bg-slate-200 text-blue-800 font-bold py-4 px-2 rounded-3xl text-sm transition active:scale-95">
                Detalhes
              </button>
            </div>
          </div>
        </section>

        <section className="px-6 space-y-4" data-purpose="navigation-options">
          <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100 cursor-pointer active:bg-slate-100 transition">
            <div className="text-blue-600 mb-3">
              <Volume2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">Som e Háptica</h3>
            <p className="text-xs text-slate-500 leading-normal">
              Personalize os tons de alarme e padrões de vibração para diferentes medicamentos.
            </p>
          </div>
          <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100 cursor-pointer active:bg-slate-100 transition">
            <div className="text-teal-600 mb-3">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">Círculo de Cuidados</h3>
            <p className="text-xs text-slate-500 leading-normal">
              Partilhe os seus dados de adesão com o seu médico de família ou familiares.
            </p>
          </div>
          <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100 cursor-pointer active:bg-slate-100 transition">
            <div className="text-orange-700 mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">Privacidade e Dados</h3>
            <p className="text-xs text-slate-500 leading-normal">
              Gira como os seus dados biométricos são armazenados e encriptados neste dispositivo.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
