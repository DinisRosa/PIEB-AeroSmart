import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/AppContext';

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

function App() {
  return (
    <AppProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
        <Router>
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
          <GlobalToast />
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
