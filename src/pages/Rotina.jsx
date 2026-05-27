import { useNavigate } from 'react-router-dom';

export default function Rotina() {
  const navigate = useNavigate();

  return (
    <section className="w-full h-full bg-white overflow-hidden flex flex-col relative">
      <div className="px-6 pt-12 pb-3 border-b border-gray-50">
        <button
          className="flex items-center gap-2 text-brand-blue font-bold text-sm hover:opacity-70 transition-opacity"
          onClick={() => navigate('/lembretes')}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
          Plano de Medicação
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-10 pt-5 space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Minha Rotina</h1>
          <p className="text-gray-400 text-sm mt-1">Acompanhe o seu plano de prevenção respiratória diário.</p>
        </div>

        <div className="bg-brand-blue rounded-2xl p-4 flex items-center gap-4 text-white">
          <div className="w-12 h-12 rounded-full border-4 border-white/30 flex items-center justify-center font-bold text-sm flex-shrink-0">
            3/3
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest opacity-80">Dose Diária</p>
            <p className="text-lg font-bold">3 Inalações</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative pl-4 border-l-2 border-brand-blue bg-white rounded-r-2xl border border-gray-100 p-4" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' }}>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="bg-blue-50 p-2 rounded-xl">
                  <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-brand-blue font-bold text-xs">Uso Diário</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-blue-900">07:00</span>
                <span className="text-xs font-bold text-blue-900 ml-1">AM</span>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="font-bold text-gray-800 text-sm">Inalação Matinal</h3>
              <p className="text-xs text-gray-400 mt-1">Realize 2 inalações completas para estabilizar as vias aéreas.</p>
            </div>
            <div className="flex gap-2 mt-3">
              <span className="bg-gray-100 text-gray-500 text-[9px] px-3 py-1 rounded-full font-bold uppercase">Manutenção</span>
              <span className="bg-blue-50 text-brand-blue text-[9px] px-3 py-1 rounded-full font-bold uppercase">2 doses</span>
            </div>
          </div>

          <div className="relative pl-4 border-l-2 border-orange-400 bg-white rounded-r-2xl border border-gray-100 p-4" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)' }}>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="bg-orange-50 p-2 rounded-xl">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-orange-500 font-bold text-xs">Uso Diário</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-orange-900">08:30</span>
                <span className="text-xs font-bold text-orange-900 ml-1">PM</span>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="font-bold text-gray-800 text-sm">Inalação Noturna</h3>
              <p className="text-xs text-gray-400 mt-1">Realize 1 inalação para garantir proteção durante o sono.</p>
            </div>
            <div className="flex gap-2 mt-3">
              <span className="bg-gray-100 text-gray-500 text-[9px] px-3 py-1 rounded-full font-bold uppercase">Manutenção</span>
              <span className="bg-orange-50 text-orange-500 text-[9px] px-3 py-1 rounded-full font-bold uppercase">1 dose</span>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-4 h-4 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <h3 className="font-bold text-orange-900 text-sm">Por que seguir o plano?</h3>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Os inaladores de manutenção são utilizados diariamente para manter as vias respiratórias estáveis. Ao contrário dos inaladores de emergência, constroem uma proteção contínua ao longo do tempo.
          </p>
          <p className="text-xs text-gray-600 leading-relaxed mb-4">
            Manter uma dose constante evita que as vias respiratórias se tornem sensíveis aos gatilhos da asma, reduzindo drasticamente a necessidade do inalador de alívio rápido.
          </p>
          <button className="w-full bg-blue-900 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            Saber mais sobre inaladores
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <button
          className="w-full bg-blue-50 text-brand-blue py-4 rounded-2xl font-bold border border-blue-100 hover:opacity-90 transition-opacity"
          onClick={() => navigate('/lembretes')}
        >
          Voltar para Lembretes
        </button>
        <p className="text-[10px] text-center text-gray-400 px-4 pb-2">
          Consulte sempre o seu médico antes de realizar qualquer alteração no plano de tratamento.
        </p>
      </div>
    </section>
  );
}
