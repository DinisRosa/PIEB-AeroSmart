import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/AppContext';
import Menu from './components/layout/Menu';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Historico from './pages/Historico';
import Dados from './pages/Dados';
import Lembretes from './pages/Lembretes';
import Rotina from './pages/Rotina';
import Registry from './pages/Registry';
import Perfil from './pages/Perfil';
import EditarPerfil from './pages/EditarPerfil';
import Definicoes from './pages/Definicoes';
import Tutorial from './pages/Tutorial';

// The global Toast component
function GlobalToast() {
  const { showToast } = useAppContext();
  return (
    <div
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
  );
}

// Pages that don't show the sidebar/nav
const NO_NAV_PAGES = ['/login', '/'];

function AppLayout() {
  const location = useLocation();
  const hideNav = NO_NAV_PAGES.includes(location.pathname);

  const routes = (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/historico" element={<Historico />} />
      <Route path="/dados" element={<Dados />} />
      <Route path="/lembretes" element={<Lembretes />} />
      <Route path="/rotina" element={<Rotina />} />
      <Route path="/registry" element={<Registry />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/editar-perfil" element={<EditarPerfil />} />
      <Route path="/definicoes" element={<Definicoes />} />
      <Route path="/tutorial" element={<Tutorial />} />
    </Routes>
  );

  if (hideNav) {
    // Login page: phone frame on mobile, centered card on desktop
    return (
      <div className="flex items-center justify-center min-h-[100dvh] bg-[#0e0e14]">
        <div className="w-full max-w-md h-[100dvh] lg:h-auto lg:min-h-[600px] lg:max-h-[800px] lg:rounded-3xl bg-white shadow-2xl relative overflow-hidden flex flex-col lg:border lg:border-white/10">
          {routes}
        </div>
        <GlobalToast />
      </div>
    );
  }

  return (
    // Desktop: full-screen layout with sidebar
    // Mobile: phone-frame layout (same as before)
    <>
      {/* ─── DESKTOP LAYOUT (lg+) ─── */}
      <div className="hidden lg:flex min-h-screen bg-[#F0F4F8] w-full">
        {/* Sidebar */}
        <aside className="w-64 xl:w-72 bg-white border-r border-slate-100 flex flex-col shrink-0 shadow-sm">
          {/* Logo */}
          <div className="px-6 py-5 border-b border-slate-50 flex items-center gap-3">
            <img src="/logo.png" alt="AeroSmart" className="w-9 h-9 rounded-full object-contain" />
            <div>
              <p className="font-bold text-brand-blue text-base leading-none">AeroSmart</p>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">Health Monitor</p>
            </div>
          </div>
          {/* Nav items — rendered by Menu in desktop mode */}
          <Menu desktop />
          {/* Bottom branding */}
          <div className="mt-auto px-6 py-4 border-t border-slate-50">
            <p className="text-[10px] text-slate-300 font-medium">v1.0 · AeroSmart © 2025</p>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-5xl mx-auto w-full h-full">
              {routes}
            </div>
          </div>
        </main>
      </div>

      {/* ─── MOBILE LAYOUT (< lg) ─── */}
      <div className="lg:hidden flex flex-col items-center justify-center min-h-[100dvh] bg-gray-100 font-sans">
        <div className="w-full max-w-md h-[100dvh] mx-auto bg-white shadow-2xl sm:rounded-2xl sm:h-[95dvh] sm:border sm:border-gray-300 relative overflow-hidden flex flex-col">
          {routes}
        </div>
      </div>

      <GlobalToast />
    </>
  );
}

function App() {
  return (
    <AppProvider>
      <Router>
        <AppLayout />
      </Router>
    </AppProvider>
  );
}

export default App;
