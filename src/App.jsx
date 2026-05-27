import { useState } from 'react';
import {
  User,
  Settings as SettingsIcon,
  Bluetooth,
  Volume2,
  Share2,
  ShieldCheck,
  Info,
  CheckCircle
} from 'lucide-react';

const chartData = {
  dia: [
    { label: "8h", h: 50, type: "m" },
    { label: "12h", h: 0, type: "m" },
    { label: "16h", h: 0, type: "m" },
    { label: "20h", h: 70, type: "e" },
    { label: "22h", h: 40, type: "m" },
    { label: "24h", h: 0, type: "m" },
  ],
  semana: [
    { label: "S", h: 65, type: "m" },
    { label: "T", h: 40, type: "m" },
    { label: "Q", h: 75, type: "m" },
    { label: "Q", h: 55, type: "m" },
    { label: "S", h: 85, type: "e" },
    { label: "S", h: 30, type: "m" },
    { label: "D", h: 60, type: "m" },
  ],
  mes: [
    { label: "1", h: 40, type: "m" },
    { label: "2", h: 60, type: "m" },
    { label: "3", h: 80, type: "e" },
    { label: "4", h: 50, type: "m" },
    { label: "5", h: 70, type: "m" },
    { label: "6", h: 35, type: "m" },
    { label: "7", h: 90, type: "m" },
    { label: "8", h: 55, type: "e" },
    { label: "9", h: 45, type: "m" },
    { label: "10", h: 65, type: "m" },
  ],
};

const summaryData = {
  dia: { total: 3, media: 3.0, trend: '+2%', trendUp: true },
  semana: { total: 24, media: 3.4, trend: '-5%', trendUp: false },
  mes: { total: 98, media: 3.2, trend: '+1%', trendUp: true },
};

const tutorialSteps = [
  {
    title: "Preparar o dispositivo",
    text: "Retire a tampa e carregue a dose conforme o modelo (rode a base, fure a cápsula ou deslize a tampa até ouvir o clique).",
    img: "/passo1.png",
    progress: 20
  },
  {
    title: "Expire completamente",
    text: "Antes de usar o inalador, rode a cabeça para o lado oposto ao inalador e deite todo o ar fora até esvaziar os pulmões. Isto ajuda a preparar a inspiração correta da medicação.",
    img: "https://lh3.googleusercontent.com/aida/ADBb0uhs0-LlFa3dcnlXZKySNa5-biHp_zH5txiWRejCKzT7aQcgmxB5tLMX33f06-hLg8McR3vDcwyc8wqs015-JqZkm5ILFFNfBex42OxKrM_vsQifYrbHaYpYQelqjC9UehF9arcrvVKpfKDpnIxe0BDlKlUfB2LV9IYR29swrEYsSqleldiv4piI22GS8vxRh9zClVH9BjHEme8hAn8-XMrShBdezzRmM4qHO3riapzaqTqbmSjdEGaeuPjOz5mMhZ2LC9ZZnxjA",
    progress: 40
  },
  {
    title: "Colocar e inalar",
    text: "Coloque o bocal na boca entre os dentes (sem morder), feche bem os lábios à volta dele e tire uma inspiração rápida, profunda e com força. Não tape as entradas de ar do aparelho com os dedos.",
    img: "https://lh3.googleusercontent.com/aida/ADBb0uhPILQVaTmj5_ypzhKFoQJ3utMam7RmW4SfX9ctjwfPh-t5oEh2lMoE3ehDyNzbdBgpPJN-ExQfaIDsbCk_fHOUAweFopY7PFDirL-QXpNqYL5r3Ig_F_fqFcaD1rJZu3MI14m7qKB5KpVEdw_i5vqyjnffyydWlJIIcP3bUcl62O_hukBPdWtIoE7D3k-db4rZ3GlvEyBkFx3Bg4ixemFD3d51ASJzfATbpzD9dQgSjsa9ewJT-32YmLSn2_CziYmxB4D0FDsXDA",
    progress: 60
  },
  {
    title: "Suster a respiração",
    text: "Retire o inalador da boca e sustenha a respiração por 10 segundos para garantir que a medicação chega aos pulmões.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOFm4INSXG4jubXvNtk3LTg8Ril2BADmZ-QOMojga0osFdozP0ozq63WjxVCOUxFne42ElXall9XHYlO34i4OLGxSnZCvUmfFbPq0Qfo_nWk5WKo2k3N9otu1V-wLg-PI8bh81K7msh16_cJwiIkc4WlH6qBcM0SzY6_U6x9G-AunbL2KdQSGdMIFXs9FgBiZr-GI8g9JdqZ4MdN-Cj0exF2PwTK94wlYNP-qjwa-HM45cImHE8voex9nsrNvP8hgjFgDZW4RPyVg",
    progress: 80
  },
  {
    title: "Expire lentamente",
    text: "Solte o ar dos pulmões lentamente, sempre para longe do aparelho.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxdIdQ-28VMZuoeRKNJzRhqDt0jB03k0TMCCPMuuuqDp28_p4jeaN-UPFV3MZniEdXt5b7OU4g10YcGPcjYA68W9QVTLRmwwCNxdkhYgDUxcUSRPuFSnTbIOqBkvc68RAvIUTFOQtq8HDUkuwg_BWX-KabQcbhqMGkU_GJMrVXCnEBNQoCF4XooU8l2f12LmPTdyG6KbhCIgj2wv3FoOACM6r_RczgT8wwxAUNfMwTYAXny825tVL_Bf-577jZ5BU0J7uKzBlpG-Y",
    progress: 100
  }
];

function App() {
  // Screen and UI states
  const [currentScreen, _setCurrentScreen] = useState('login');

  const setCurrentScreen = (screenId) => {
    if (screenId === 'registry') {
      const now = new Date();
      setRegDate(now.toISOString().split('T')[0]);
      setRegTime(now.toTimeString().slice(0, 5));
    }
    _setCurrentScreen(screenId);
  };

  const [timeframe, setTimeframe] = useState('semana');
  const [currentTutorialStep, setCurrentTutorialStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Form states for Registar
  const [regDate, setRegDate] = useState('');
  const [regTime, setRegTime] = useState('');
  const [regMed, setRegMed] = useState('Ventolin Evohaler');
  const [doseType, setDoseType] = useState('manutencao');
  const [regNotes, setRegNotes] = useState('');
  const [regLocation, setRegLocation] = useState('Casa');

  // Form states for Perfil / Editar Perfil
  const [profileName, setProfileName] = useState('João Silva');
  const [profileAge, setProfileAge] = useState('29');
  const [profileBlood, setProfileBlood] = useState('A+');
  const [profileHeight, setProfileHeight] = useState('168');
  const [profileWeight, setProfileWeight] = useState('64');
  const [emergencyContactName, setEmergencyContactName] = useState('Margarida Silva');
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('+351 912 345 678');
  const [doctor1Name, setDoctor1Name] = useState('Dra. Sara Martins');
  const [doctor1Phone, setDoctor1Phone] = useState('+351900000001');
  const [doctor2Name, setDoctor2Name] = useState('Dr. Diogo Marques');
  const [doctor2Phone, setDoctor2Phone] = useState('+351900000002');

  const [previousScreen, setPreviousScreen] = useState('dashboard');

  const openTutorial = () => {
    setCurrentTutorialStep(0);
    setCurrentScreen('tutorial');
  };

  const closeTutorial = () => {
    setCurrentScreen('lembretes');
  };

  const nextTutorialStep = () => {
    if (currentTutorialStep < tutorialSteps.length - 1) {
      setCurrentTutorialStep(currentTutorialStep + 1);
    } else {
      closeTutorial();
    }
  };

  const prevTutorialStep = () => {
    if (currentTutorialStep > 0) {
      setCurrentTutorialStep(currentTutorialStep - 1);
    }
  };

  const handleConfirmRegistry = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setTimeout(() => {
        setCurrentScreen('dashboard');
      }, 350);
    }, 2200);
  };

  const navScreens = [
    { id: 'login', label: 'Login' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'historico', label: 'Histórico' },
    { id: 'dados', label: 'Dados' },
    { id: 'lembretes', label: 'Lembretes' },
    { id: 'registry', label: 'Registar' },
    { id: 'perfil', label: 'Perfil' },
    { id: 'definicoes', label: 'Definições' }
  ];

  const renderBottomNav = (activeTab) => {
    const tabs = [
      {
        id: 'dashboard',
        label: 'Início',
        activeIcon: (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 4a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V4zM2 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zM12 4a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V4zM12 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        ),
        inactiveIcon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'historico',
        label: 'Histórico',
        activeIcon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        ),
        inactiveIcon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'dados',
        label: 'Dados',
        activeIcon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        ),
        inactiveIcon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'lembretes',
        label: 'Lembretes',
        activeIcon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        ),
        inactiveIcon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: 'perfil',
        label: 'Perfil',
        activeIcon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        ),
        inactiveIcon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        )
      }
    ];

    return (
      <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 flex justify-between px-6 pt-3 pb-8">
        {tabs.map(tab => {
          const isActive = tab.id === activeTab;
          if (isActive) {
            return (
              <div key={tab.id} className="flex flex-col items-center gap-1 text-brand-blue">
                <div className="w-6 h-6 flex items-center justify-center bg-soft-blue rounded-lg">
                  {tab.activeIcon}
                </div>
                <span className="text-[8px] font-bold uppercase">{tab.label}</span>
              </div>
            );
          } else {
            return (
              <div
                key={tab.id}
                className="flex flex-col items-center gap-1 text-gray-300 cursor-pointer hover:text-brand-blue transition-colors"
                onClick={() => setCurrentScreen(tab.id)}
              >
                {tab.inactiveIcon}
                <span className="text-[8px] font-bold uppercase">{tab.label}</span>
              </div>
            );
          }
        })}
      </nav>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 gap-6">

      {/* TAB NAVIGATION */}
      <div
        style={{
          background: '#1a1a26',
          border: '1px solid #2a2a3a',
          borderRadius: '99px',
          display: 'flex',
          gap: '4px',
          padding: '4px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {navScreens.map(scr => (
          <button
            key={scr.id}
            className={`tab-btn ${currentScreen === scr.id || (scr.id === 'perfil' && currentScreen === 'editar-perfil') ? 'active' : ''}`}
            onClick={() => setCurrentScreen(scr.id)}
          >
            {scr.label}
          </button>
        ))}
      </div>

      {/* ========== LOGIN SCREEN ========== */}
      {currentScreen === 'login' && (
        <section
          className="screen active w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl overflow-hidden flex-col relative border-[8px] border-black"
          id="screen-login"
        >
          <div className="px-8 pt-16 flex flex-col items-center flex-1 overflow-y-auto pb-8">
            <img
              src="/logo.jpg"
              alt="AeroSmart Logo"
              className="w-24 h-24 object-contain mb-4"
            />
            <span className="font-bold text-gray-800 tracking-tight mb-8">AeroSmart</span>
            <div className="w-full">
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">Bem-vindo de volta,</h1>
              <p className="text-sm text-gray-500 mt-2 mb-8">Faz login e começa a acompanhar a tua respiração</p>

              <div className="space-y-4">
                <div className="field-wrap">
                  <input type="email" id="login-email" placeholder=" " autoComplete="email" />
                  <label htmlFor="login-email">Email</label>
                </div>
                <div className="field-wrap" style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="login-pw"
                    placeholder=" "
                    autoComplete="current-password"
                    style={{ paddingRight: '44px' }}
                  />
                  <label htmlFor="login-pw">Palavra-passe</label>
                  <span className="pw-toggle" onClick={() => setShowPassword(!showPassword)} style={{ color: showPassword ? '#2563eb' : '#9ca3af' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </span>
                  <a href="#" className="absolute right-10 top-5 text-[10px] text-brand-blue font-bold" style={{ top: '16px', right: '44px', fontSize: '10px' }}>
                    Esqueceu-se?
                  </a>
                </div>
              </div>

              <button
                className="w-full bg-brand-blue text-white font-bold py-4 rounded-2xl mt-8 shadow-lg shadow-blue-100 hover:opacity-90 transition-opacity"
                onClick={() => setCurrentScreen('dashboard')}
              >
                Entrar
              </button>

              <div className="flex items-center my-6">
                <div className="flex-grow h-px bg-gray-100"></div>
                <span className="px-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">ou</span>
                <div className="flex-grow h-px bg-gray-100"></div>
              </div>

              <button className="w-full border border-gray-100 py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">Entra com a tua conta Google</span>
              </button>
            </div>
          </div>
          <div className="pb-8 text-center px-8">
            <p className="text-xs text-gray-500 mb-4">Novo aqui? <a className="text-brand-blue font-bold" href="#">Crie uma conta</a></p>
            <div className="flex justify-center gap-4 text-[10px] font-bold text-gray-300 uppercase tracking-tighter">
              <a href="#">Privacidade</a>
              <a href="#">Termos</a>
              <a href="#">Suporte</a>
            </div>
          </div>
        </section>
      )}

      {/* ========== DASHBOARD SCREEN ========== */}
      {currentScreen === 'dashboard' && (
        <section
          className="screen active w-[375px] h-[812px] bg-[#F8FAFC] rounded-[40px] shadow-2xl overflow-hidden flex-col relative border-[8px] border-black"
          id="screen-dashboard"
        >
          <div className="px-6 pt-12 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="AeroSmart" className="w-8 h-8 rounded-full object-contain" />
              <span className="text-xs font-bold text-brand-blue">AeroSmart</span>
            </div>
            <button className="text-gray-400" onClick={() => { setPreviousScreen(currentScreen); setCurrentScreen('definicoes'); }}>
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
              onClick={() => setCurrentScreen('registry')}
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
                  <span class="text-[8px] uppercase font-bold text-gray-300">Bateria</span>
                </div>
                <p className="font-bold text-sm">85%</p>
                <p className="text-[8px] text-gray-400">~14h seguidas de utilização</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100">
              <span className="text-[9px] uppercase font-bold text-brand-blue tracking-wider">Estado do Inalador</span>
              <h3 class="text-xl font-bold text-gray-900 mt-2 mb-1">Nível de Medicação</h3>
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

          {renderBottomNav('dashboard')}
        </section>
      )}

      {/* ========== HISTÓRICO SCREEN ========== */}
      {currentScreen === 'historico' && (
        <section
          className="screen active w-[375px] h-[812px] bg-[#F8FAFC] rounded-[40px] shadow-2xl overflow-hidden flex-col relative border-[8px] border-black"
          id="screen-historico"
        >
          <div className="px-6 pt-12 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="AeroSmart" className="w-8 h-8 rounded-full object-contain" />
              <span className="text-xs font-bold text-brand-blue">AeroSmart</span>
            </div>
            <button className="text-gray-400" onClick={() => { setPreviousScreen(currentScreen); setCurrentScreen('definicoes'); }}>
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
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${summaryData[timeframe].trendUp ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500'
                      }`}>
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

          {renderBottomNav('historico')}
        </section>
      )}

      {/* ========== DADOS SCREEN ========== */}
      {currentScreen === 'dados' && (
        <section
          className="screen active w-[375px] h-[812px] bg-[#F8FAFC] rounded-[40px] shadow-2xl overflow-hidden flex-col relative border-[8px] border-black"
          id="screen-dados"
        >
          <div className="px-6 pt-12 flex justify-between items-center bg-white border-b border-slate-50">
            <div className="flex items-center gap-3 pb-3">
              <img src="/logo.jpg" alt="AeroSmart" className="w-8 h-8 rounded-full object-contain" />
              <span className="text-xs font-bold text-brand-blue">AeroSmart</span>
            </div>
            <button className="text-gray-400 pb-3" onClick={() => { setPreviousScreen(currentScreen); setCurrentScreen('definicoes'); }}>
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
              <div className="absolute top-8 right-5 opacity-[0.07] pointer-events-none">
                <svg fill="none" height="72" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="72">
                  <path d="M7 12c-2.5 0-4.5 2-4.5 4.5S4.5 21 7 21s4.5-2 4.5-4.5V12M17 12c2.5 0 4.5 2 4.5 4.5S19.5 21 17 21s-4.5-2-4.5-4.5V12M12 4v8M9 4h6" />
                </svg>
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

          {renderBottomNav('dados')}
        </section>
      )}

      {/* ========== LEMBRETES SCREEN ========== */}
      {currentScreen === 'lembretes' && (
        <section
          className="screen active w-[375px] h-[812px] bg-[#F8FAFC] rounded-[40px] shadow-2xl overflow-hidden flex-col relative border-[8px] border-black"
          id="screen-lembretes"
        >
          <div className="px-6 pt-12 pb-3 flex justify-between items-center bg-white border-b border-gray-50">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="AeroSmart" className="w-8 h-8 rounded-full object-contain" />
              <span className="text-xs font-bold text-brand-blue">AeroSmart</span>
            </div>
            <button className="text-gray-400" onClick={() => { setPreviousScreen(currentScreen); setCurrentScreen('definicoes'); }}>
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
                  onClick={() => setCurrentScreen('rotina')}
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
                onClick={openTutorial}
                className="w-full bg-white text-brand-blue py-3 rounded-2xl font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Ver
              </button>
            </div>
          </div>

          {renderBottomNav('lembretes')}
        </section>
      )}

      {/* ========== ROTINA SCREEN ========== */}
      {currentScreen === 'rotina' && (
        <section
          className="screen active w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl overflow-hidden flex-col relative border-[8px] border-black"
          id="screen-rotina"
        >
          <div className="px-6 pt-12 pb-3 border-b border-gray-50">
            <button
              className="flex items-center gap-2 text-brand-blue font-bold text-sm hover:opacity-70 transition-opacity"
              onClick={() => setCurrentScreen('lembretes')}
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
              onClick={() => setCurrentScreen('lembretes')}
            >
              Voltar para Lembretes
            </button>
            <p className="text-[10px] text-center text-gray-400 px-4 pb-2">
              Consulte sempre o seu médico antes de realizar qualquer alteração no plano de tratamento.
            </p>
          </div>
        </section>
      )}

      {/* ========== REGISTRY SCREEN ========== */}
      {currentScreen === 'registry' && (
        <section
          className="screen active w-[375px] h-[812px] bg-[#F8FAFC] rounded-[40px] shadow-2xl overflow-hidden flex-col relative border-[8px] border-black"
          id="screen-registry"
        >
          <div className="px-6 pt-12">
            <button
              className="flex items-center gap-2 text-brand-blue font-bold text-xs hover:opacity-70 transition-opacity"
              onClick={() => setCurrentScreen('dashboard')}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              Voltar ao Início
            </button>
          </div>

          <div className="px-8 py-6 flex flex-col flex-1 overflow-y-auto pb-8">
            <h1 className="text-4xl font-bold text-gray-900 leading-[1.1]">Registar<br />Inalação</h1>
            <p className="text-sm text-gray-500 mt-3 mb-7 leading-relaxed">Insira os detalhes do seu tratamento respiratório.</p>

            <div className="space-y-4">
              <div className="bg-white rounded-3xl p-5 border border-gray-100">
                <label className="text-xs font-bold text-gray-800 block mb-3">Data e Hora</label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#f0f7ff] rounded-xl p-3 flex items-center gap-2" >
                    <input
                      type="date"
                      id="reg-date"
                      value={regDate}
                      onChange={(e) => setRegDate(e.target.value)}
                      className="bg-transparent border-none outline-none text-[10px] font-medium text-gray-700 w-full"
                      style={{ fontFamily: '"DM Mono", monospace' }}
                    />
                  </div>
                  <div className="bg-[#f0f7ff] rounded-xl p-3 flex items-center gap-2">
                    <input
                      type="time"
                      id="reg-time"
                      value={regTime}
                      onChange={(e) => setRegTime(e.target.value)}
                      className="bg-transparent border-none outline-none text-[10px] font-medium text-gray-700 w-full"
                      style={{ fontFamily: '"DM Mono", monospace' }}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-gray-100">
                <label className="text-xs font-bold text-gray-800 block mb-3">Medicamento</label>
                <div className="field-wrap">
                  <select
                    id="reg-med"
                    value={regMed}
                    onChange={(e) => setRegMed(e.target.value)}
                    className="bg-transparent border-none outline-none w-full text-[10px] font-medium text-gray-700 appearance-none cursor-pointer"
                    style={{ fontFamily: '"DM Mono", monospace', fontSize: '13px', paddingTop: '6px', paddingBottom: '6px' }}
                  >
                    <option value="BiResp Spiromax">BiResp Spiromax</option>
                    <option value="Symbicort Turbuhaler">Symbicort Turbuhaler</option>
                    <option value="Seretide Accuhaler">Seretide Accuhaler</option>
                    <option value="Relvar Ellipta">Relvar Ellipta</option>
                    <option value="Bricanyl Turbohaler">Bricanyl Turbohaler</option>
                  </select>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-gray-100">
                <label className="text-xs font-bold text-gray-800 block mb-3">Tipo de Dose</label>
                <div className="bg-[#f0f7ff] rounded-2xl p-1 flex gap-1">
                  <button
                    className={`dose-btn ${doseType === 'manutencao' ? 'active' : ''}`}
                    id="dose-manutencao"
                    onClick={() => setDoseType('manutencao')}
                  >
                    Manutenção
                  </button>
                  <button
                    className={`dose-btn ${doseType === 'emergencia' ? 'active' : ''}`}
                    id="dose-emergencia"
                    onClick={() => setDoseType('emergencia')}
                  >
                    Emergência
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-gray-100">
                <label className="text-xs font-bold text-gray-800 block mb-3">
                  Notas <span className="text-gray-300 font-normal">(opcional)</span>
                </label>
                <textarea
                  id="reg-notes"
                  placeholder="Ex: tomado após exercício, sintomas ligeiros..."
                  value={regNotes}
                  onChange={(e) => setRegNotes(e.target.value)}
                  className="w-full bg-[#f8fafc] border-none outline-none rounded-xl p-3 text-sm text-gray-700 resize-none"
                  rows="3"
                  style={{ fontFamily: '"DM Sans", sans-serif' }}
                ></textarea>
              </div>

              <div className="bg-white rounded-3xl p-5 border border-gray-100">
                <label className="text-xs font-bold text-gray-800 block mb-3">Localização</label>
                <div className="field-wrap">
                  <input
                    type="text"
                    id="reg-location"
                    placeholder=" "
                    value={regLocation}
                    onChange={(e) => setRegLocation(e.target.value)}
                  />
                  <label htmlFor="reg-location">Adicionar local atual...</label>
                </div>
              </div>

              <button
                className="w-full bg-brand-blue text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-100 hover:opacity-90 transition-opacity"
                onClick={handleConfirmRegistry}
              >
                Confirmar Registo
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ========== PERFIL SCREEN ========== */}
      {currentScreen === 'perfil' && (
        <section
          className="screen active w-[375px] h-[812px] bg-slate-50 rounded-[40px] shadow-2xl overflow-hidden flex-col relative border-[8px] border-black"
          id="screen-perfil"
        >
          <header className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-10 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="AeroSmart" className="w-10 h-10 rounded-full object-contain" />
              <span className="text-brand-blue font-bold text-lg">AeroSmart</span>
            </div>
            <button
              aria-label="Configurações"
              className="p-2 text-slate-500"
              onClick={() => { setPreviousScreen(currentScreen); setCurrentScreen('definicoes'); }}
            >
              <SettingsIcon className="w-6 h-6" />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-8 pb-24">
            <section className="flex flex-col items-center text-center mt-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-slate-200 overflow-hidden bg-slate-800">
                  <img
                    alt="João Silva"
                    className="w-full h-full object-cover opacity-80"
                    src="https://img.magnific.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=360"
                  />
                </div>
                <button
                  aria-label="Editar foto"
                  className="absolute bottom-1 right-1 bg-brand-blue text-white p-2 rounded-full border-2 border-white shadow-lg"
                  onClick={() => setCurrentScreen('editar-perfil')}
                >
                  <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="16">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    <path d="m15 5 4 4" />
                  </svg>
                </button>
              </div>
              <h1 className="mt-4 text-2xl font-bold text-slate-800">{profileName}</h1>
              <p className="text-slate-500 text-sm font-medium">ID do Paciente: CS-88203-ER</p>
            </section>

            <section className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl card-shadow border border-slate-100 flex flex-col items-start">
                <div className="bg-emerald-50 p-2 rounded-lg mb-2">
                  <svg className="text-emerald-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                    <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Idade</span>
                <span className="text-lg font-bold text-slate-700">{profileAge} Anos</span>
              </div>
              <div className="bg-white p-4 rounded-2xl card-shadow border border-slate-100 flex flex-col items-start">
                <div className="bg-orange-50 p-2 rounded-lg mb-2">
                  <svg className="text-orange-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                    <path d="m7.5 10.5 6.5-6.5L20 10.5Z" />
                    <path d="m7.5 10.5-6.5 6.5L7.5 23.5Z" />
                    <path d="m14 4 6.5 6.5-6.5 6.5Z" />
                    <path d="m7.5 10.5 6.5 6.5-6.5 6.5Z" />
                  </svg>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Condição</span>
                <span className="text-lg font-bold text-slate-700">Asma</span>
              </div>
            </section>

            <section className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100">
              <h3 className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-1">Contacto de Emergência</h3>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold text-slate-800">{emergencyContactName}</span>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <svg fill="currentColor" height="14" viewBox="0 0 24 24" width="14">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>{emergencyContactPhone}</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-brand-blue text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform">
                <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
                Notificar
              </button>
            </section>

            <section className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold px-1">Equipa de Saúde</h3>

              {/* Dra. Sara Martins */}
              <div className="bg-white p-4 rounded-2xl card-shadow border border-slate-100 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden">
                    <img
                      alt="Dra. Sara Martins"
                      className="w-full h-full object-cover"
                      src="https://www.shutterstock.com/image-photo/professional-cheerful-black-doctor-smiling-600nw-2394167785.jpg"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800">{doctor1Name}</h4>
                    <p className="text-xs text-slate-500">Médico de Família</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href={`tel:${doctor1Phone}`} className="flex-1 flex items-center justify-center gap-2 bg-brand-blue text-white text-xs font-bold py-2.5 rounded-xl active:scale-95 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" />
                    </svg>
                    Ligar
                  </a>
                  <a href={`sms:${doctor1Phone}`} className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-700 text-xs font-bold py-2.5 rounded-xl active:scale-95 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    Mensagem
                  </a>
                </div>
              </div>

              {/* Dr. Diogo Marques */}
              <div className="bg-white p-4 rounded-2xl card-shadow border border-slate-100 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden">
                    <img
                      alt="Dr. Diogo Marques"
                      className="w-full h-full object-cover"
                      src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800">{doctor2Name}</h4>
                    <p className="text-xs text-slate-500">Pneumologista</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href={`tel:${doctor2Phone}`} className="flex-1 flex items-center justify-center gap-2 bg-brand-blue text-white text-xs font-bold py-2.5 rounded-xl active:scale-95 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" />
                    </svg>
                    Ligar
                  </a>
                  <a href={`sms:${doctor2Phone}`} className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-700 text-xs font-bold py-2.5 rounded-xl active:scale-95 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    Mensagem
                  </a>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-3xl border border-slate-100 overflow-hidden card-shadow">
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <h3 className="text-base font-bold text-slate-800">Perfil de Saúde</h3>
              </div>

              <div className="divide-y divide-slate-100">
                <div className="flex items-center gap-4 px-5 py-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-brand-blue">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800">Tipo de Sangue</p>
                    <p className="text-xs text-slate-500">{profileBlood}</p>
                  </div>
                  <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>

                <div className="flex items-center gap-4 px-5 py-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-brand-blue">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 5v14M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800">Altura e Peso</p>
                    <p className="text-xs text-slate-500">{profileHeight} cm / {profileWeight} kg</p>
                  </div>
                  <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>

                <div className="flex items-center gap-4 px-5 py-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-orange-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800">Medicação</p>
                    <p className="text-xs text-slate-500">Salbutamol (Inalador), Cetirizina</p>
                  </div>
                  <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </section>
          </div>

          {renderBottomNav('perfil')}
        </section>
      )}

      {/* ========== EDITAR PERFIL SCREEN ========== */}
      {currentScreen === 'editar-perfil' && (
        <section
          className="screen active w-[375px] h-[812px] bg-[#F8FAFC] rounded-[40px] shadow-2xl overflow-hidden flex-col relative border-[8px] border-black"
          id="screen-editar-perfil"
        >
          <header className="flex items-center p-4 sticky top-0 bg-[#F8FAFC] z-10 border-b border-gray-100">
            <button
              aria-label="Back"
              className="p-2 text-brand-blue"
              onClick={() => setCurrentScreen('perfil')}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </button>
            <h1 className="text-lg font-bold text-brand-blue ml-4">Editar Perfil</h1>
          </header>

          <div className="flex-1 overflow-y-auto px-5 pb-24">
            <section className="flex flex-col items-center my-6">
              <div className="relative">
                <div className="w-28 h-28 bg-[#1E293B] rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                  <img
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                    src="https://img.magnific.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=360"
                  />
                </div>
                <button
                  aria-label="Edit photo"
                  className="absolute bottom-0 right-0 bg-brand-blue p-2 rounded-full border-2 border-white text-white shadow-md"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-3">Toque na câmara para alterar</p>
            </section>

            <section className="section-container-white">
              <h2 className="text-brand-blue font-bold mb-4 text-sm">Informações Básicas</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-500 text-[10px] mb-1 ml-1 uppercase font-semibold">Nome completo</label>
                  <input
                    className="custom-input focus:ring-2 focus:ring-blue-100"
                    type="text"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-[10px] mb-1 ml-1 uppercase font-semibold">ID de Paciente</label>
                  <div className="relative">
                    <input
                      className="custom-input custom-input-readonly pr-10"
                      readOnly
                      type="text"
                      value="+CS-911203-ER"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" fillRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <label className="block text-gray-500 text-[10px] mb-1 ml-1 uppercase font-semibold">Idade</label>
                  <input
                    className="custom-input bg-[#F8FAFC]"
                    type="text"
                    value={profileAge}
                    onChange={(e) => setProfileAge(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-[10px] mb-1 ml-1 uppercase font-semibold">Sangue</label>
                  <div className="relative">
                    <select
                      className="custom-input bg-[#F8FAFC] appearance-none"
                      value={profileBlood}
                      onChange={(e) => setProfileBlood(e.target.value)}
                    >
                      <option value="A+">A+</option>
                      <option value="O-">O-</option>
                      <option value="B+">B+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-500 text-[10px] mb-1 ml-1 uppercase font-semibold">Altura (cm)</label>
                  <input
                    className="custom-input bg-[#F8FAFC]"
                    type="text"
                    value={profileHeight}
                    onChange={(e) => setProfileHeight(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-[10px] mb-1 ml-1 uppercase font-semibold">Peso (kg)</label>
                  <input
                    className="custom-input bg-[#F8FAFC]"
                    type="text"
                    value={profileWeight}
                    onChange={(e) => setProfileWeight(e.target.value)}
                  />
                </div>
              </div>
            </section>

            <section className="section-container bg-[#F1F5F9]">
              <div className="flex items-center mb-4">
                <span className="bg-teal-100 p-1 rounded-md mr-2">
                  <svg className="h-4 w-4 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </span>
                <h2 className="text-brand-blue font-bold text-sm">Condição Respiratória</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-teal-700 text-white px-4 py-2 rounded-full text-xs font-medium shadow-sm">Asma</span>
                <span className="bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-xs font-medium">DPOC</span>
                <span className="bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-xs font-medium">Alergias</span>
                <button aria-label="Add condition" className="bg-blue-100 text-brand-blue w-8 h-8 rounded-full flex items-center justify-center font-bold">+</button>
              </div>
            </section>

            <section className="section-container border-emergency bg-[#F8F9FA]">
              <div className="flex items-center mb-4">
                <span className="text-orange-700 mr-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12.395 2.553a1 1 0 00-1.450 1.259l.741 2.223A4.5 4.5 0 0013 14.28V15h2a2 2 0 002-2v-3.95a4.5 4.5 0 00-4.605-4.497z" fillRule="evenodd"></path>
                    <path d="M7 10a3 3 0 100-6 3 3 0 000 6z"></path>
                  </svg>
                </span>
                <h2 className="text-orange-800 font-bold text-sm">Contacto de Emergência</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-[10px] mb-1 ml-1 uppercase font-semibold">Nome de Contacto</label>
                  <input
                    className="custom-input border-gray-100 border"
                    type="text"
                    value={emergencyContactName}
                    onChange={(e) => setEmergencyContactName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-[10px] mb-1 ml-1 uppercase font-semibold">Telemóvel</label>
                  <input
                    className="custom-input border-gray-100 border"
                    type="text"
                    value={emergencyContactPhone}
                    onChange={(e) => setEmergencyContactPhone(e.target.value)}
                  />
                </div>
              </div>
            </section>

            <section className="section-container bg-[#F8FAFC]">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 p-1 rounded-md mr-2">
                  <svg className="h-4 w-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </span>
                <h2 className="text-brand-blue font-bold text-sm">Equipa de Saúde</h2>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Médico de Família</p>
                <div>
                  <label className="block text-gray-400 text-[10px] mb-1 ml-1 uppercase font-semibold">Nome</label>
                  <input
                    className="custom-input border-gray-100 border"
                    type="text"
                    value={doctor1Name}
                    onChange={(e) => setDoctor1Name(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-[10px] mb-1 ml-1 uppercase font-semibold">Telemóvel</label>
                  <input
                    className="custom-input border-gray-100 border"
                    type="tel"
                    value={doctor1Phone}
                    onChange={(e) => setDoctor1Phone(e.target.value)}
                  />
                </div>

                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider pt-2">Pneumologista</p>
                <div>
                  <label className="block text-gray-400 text-[10px] mb-1 ml-1 uppercase font-semibold">Nome</label>
                  <input
                    className="custom-input border-gray-100 border"
                    type="text"
                    value={doctor2Name}
                    onChange={(e) => setDoctor2Name(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-[10px] mb-1 ml-1 uppercase font-semibold">Telemóvel</label>
                  <input
                    className="custom-input border-gray-100 border"
                    type="tel"
                    value={doctor2Phone}
                    onChange={(e) => setDoctor2Phone(e.target.value)}
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="absolute bottom-0 w-full p-5 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC] to-transparent">
            <button
              className="w-full bg-brand-blue text-white py-4 rounded-2xl font-bold flex items-center justify-center shadow-xl shadow-blue-200 active:scale-[0.98] transition-transform"
              onClick={() => setCurrentScreen('perfil')}
            >
              <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
              Guardar Alterações
            </button>
          </div>
        </section>
      )}

      {/* ========== DEFINICOES SCREEN ========== */}
      {currentScreen === 'definicoes' && (
        <section
          className="screen active w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl overflow-hidden flex-col relative border-[8px] border-black"
          id="screen-definicoes"
        >
          <header className="flex items-center px-6 py-6" data-purpose="app-navigation">
            <button
              className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 mr-4"
              onClick={() => setCurrentScreen(previousScreen)}
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
      )}

      {/* ========== TUTORIAL SCREEN ========== */}
      {currentScreen === 'tutorial' && (
        <section
          className="screen active w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl overflow-hidden flex-col relative border-[8px] border-black"
          id="screen-tutorial"
        >
          <header className="p-6 pb-2">
            <div className="flex items-center justify-between mb-4">
              <button aria-label="Voltar" className="p-2 -ml-2" onClick={closeTutorial}>
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>
              <div className="text-center flex-1">
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Guia Instrucional</p>
                <p className="text-sm font-extrabold text-gray-800" id="tutorial-step-text">
                  Passo {currentTutorialStep + 1} de 5
                </p>
              </div>
              <div className="w-10"></div>
            </div>
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full transition-all duration-300"
                id="tutorial-progress-bar"
                style={{ width: `${tutorialSteps[currentTutorialStep].progress}%` }}
              ></div>
            </div>
          </header>

          <main className="flex-grow px-8 pt-4 flex flex-col overflow-y-auto">
            <div className="bg-blue-100 rounded-3xl w-full aspect-square relative flex items-center justify-center overflow-hidden mb-8">
              <img
                id="tutorial-img"
                src={tutorialSteps[currentTutorialStep].img}
                alt="Ilustração do passo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h1 id="tutorial-title" className="text-2xl font-bold text-gray-800 leading-tight">
                {tutorialSteps[currentTutorialStep].title}
              </h1>
              <p id="tutorial-desc" className="text-gray-500 leading-relaxed text-sm">
                {tutorialSteps[currentTutorialStep].text}
              </p>
            </div>
          </main>

          <footer className="p-8 space-y-3 pb-10">
            <div className="flex gap-3">
              <button
                id="tutorial-prev-btn"
                onClick={prevTutorialStep}
                className={`flex-1 bg-gray-100 text-gray-500 font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors ${currentTutorialStep === 0 ? 'opacity-50 pointer-events-none' : ''
                  }`}
              >
                Anterior
              </button>
              <button
                id="tutorial-next-btn"
                onClick={nextTutorialStep}
                className="flex-1 bg-slate-900 text-white flex justify-center items-center gap-2 font-bold py-4 rounded-xl hover:opacity-90 transition-colors"
              >
                {currentTutorialStep === 4 ? (
                  <>
                    Concluir <CheckCircle className="w-5 h-5" />
                  </>
                ) : (
                  'Próximo'
                )}
              </button>
            </div>
          </footer>
        </section>
      )}

      {/* SUCCESS TOAST */}
      <div
        id="toast"
        style={{
          position: 'fixed',
          bottom: '40px',
          left: '50%',
          transform: showToast ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(20px)',
          background: '#1a9c8e',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: '99px',
          fontSize: '13px',
          fontWeight: 700,
          opacity: showToast ? 1 : 0,
          transition: 'all 0.35s',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          zIndex: 999,
        }}
      >
        ✓ Inalação registada com sucesso!
      </div>

    </div>
  );
}

export default App;
