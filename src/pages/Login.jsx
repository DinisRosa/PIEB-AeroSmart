import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="w-full h-full bg-white overflow-hidden flex flex-col relative">
      <div className="px-8 pt-safe-top pt-4 flex flex-col items-center flex-1 overflow-y-auto pb-8">
        <img
          src="/logo.png"
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
            onClick={() => navigate('/dashboard')}
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
  );
}
