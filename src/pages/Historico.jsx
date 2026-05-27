import { useNavigate } from 'react-router-dom';
import { Settings as SettingsIcon } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { chartData, summaryData } from '../data/mockData';
import BottomNav from '../components/layout/BottomNav';

export default function Historico() {
  const navigate = useNavigate();
  const { setPreviousScreen, timeframe, setTimeframe } = useAppContext();

  return (
    <section className="w-full h-full bg-[#F8FAFC] overflow-hidden flex flex-col relative">
      <div className="px-6 pt-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="AeroSmart" className="w-8 h-8 rounded-full object-contain" />
          <span className="text-xs font-bold text-brand-blue">AeroSmart</span>
        </div>
        <button className="text-gray-400" onClick={() => { setPreviousScreen('/historico'); navigate('/definicoes'); }}>
          <SettingsIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-24">
        <div className="py-4">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">Histórico de<br />Utilização</h1>
          <p className="text-gray-400 mt-1 text-xs">Acompanhe a sua jornada respiratória.</p>
        </div>

        <div className="bg-slate-100 p-1 rounded-2xl flex mb-4">
          <button className={`time-tab ${timeframe === 'dia' ? 'active' : ''}`} onClick={() => setTimeframe('dia')}>Dia</button>
          <button className={`time-tab ${timeframe === 'semana' ? 'active' : ''}`} onClick={() => setTimeframe('semana')}>Semana</button>
          <button className={`time-tab ${timeframe === 'mes' ? 'active' : ''}`} onClick={() => setTimeframe('mes')}>Mês</button>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 p-6 mb-4 shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Doses totais</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-bold text-gray-900">{summaryData[timeframe].total}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${summaryData[timeframe].trendUp ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'}`}>
                  {summaryData[timeframe].trend}
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">Média diária</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{summaryData[timeframe].media}</p>
            </div>
          </div>
          <div className="flex justify-between items-end px-1" id="hist-chart">
            {chartData[timeframe].map((d, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <div className="chart-bar-bg">
                  <div className={`chart-bar-fill ${d.type === 'e' ? 'emergency' : ''}`} style={{ height: `${d.h}%` }}></div>
                </div>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>{d.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mb-4 px-1">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-blue"></div>
            <span className="text-[10px] font-bold text-gray-400">Manutenção</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <span className="text-[10px] font-bold text-gray-400">Emergência</span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base font-bold text-gray-900">Atividades Recentes</h2>
          <button className="text-brand-blue text-[10px] font-bold uppercase tracking-tight">Exportar CSV</button>
        </div>

        <div className="space-y-3 pb-4">
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider px-1">Hoje</p>
          <div className="activity-item">
            <div className="flex items-center gap-3">
              <div className="activity-icon" style={{ background: '#eff6ff' }}>
                <svg className="w-5 h-5" style={{ color: '#2563eb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Dose de Manutenção</p>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-[10px] text-gray-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    08:42
                  </span>
                  <span className="text-[10px] text-gray-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    Casa
                  </span>
                </div>
              </div>
            </div>
            <span className="text-[9px] font-bold text-gray-300 uppercase">Hoje</span>
          </div>

          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider px-1 pt-2">Ontem</p>
          <div className="activity-item">
            <div className="flex items-center gap-3">
              <div className="activity-icon" style={{ background: '#f0fdf9' }}>
                <svg className="w-5 h-5" style={{ color: '#0d9488' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Dose de Manutenção</p>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-[10px] text-gray-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    23:15
                  </span>
                  <span className="text-[10px] text-gray-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    Parque da Ponte
                  </span>
                </div>
              </div>
            </div>
            <span className="text-[9px] font-bold text-gray-300 uppercase">Ontem</span>
          </div>

          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider px-1 pt-2">Anteriores</p>
          <div className="activity-item">
            <div className="flex items-center gap-3">
              <div className="activity-icon" style={{ background: '#fef2f2' }}>
                <svg className="w-5 h-5" style={{ color: '#ef4444' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Dose de Emergência</p>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-[10px] text-gray-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    15:10
                  </span>
                  <span className="text-[10px] text-gray-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    Ginásio
                  </span>
                </div>
              </div>
            </div>
            <span className="text-[9px] font-bold text-gray-300 uppercase whitespace-nowrap">24 Out</span>
          </div>

          <div className="activity-item">
            <div className="flex items-center gap-3">
              <div className="activity-icon" style={{ background: '#eff6ff' }}>
                <svg className="w-5 h-5" style={{ color: '#2563eb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Dose de Manutenção</p>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-[10px] text-gray-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    09:20
                  </span>
                  <span className="text-[10px] text-gray-400 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    Casa
                  </span>
                </div>
              </div>
            </div>
            <span className="text-[9px] font-bold text-gray-300 uppercase whitespace-nowrap">23 Out</span>
          </div>
        </div>
      </div>

      <BottomNav />
    </section>
  );
}
