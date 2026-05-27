import { useNavigate } from 'react-router-dom';
import { Settings as SettingsIcon } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import BottomNav from '../components/layout/BottomNav';

export default function Perfil() {
  const navigate = useNavigate();
  const {
    setPreviousScreen,
    profileName, profileAge, profileBlood, profileHeight, profileWeight,
    emergencyContactName, emergencyContactPhone,
    doctor1Name, doctor1Phone,
    doctor2Name, doctor2Phone
  } = useAppContext();

  return (
    <section className="screen active w-[375px] h-[812px] bg-slate-50 rounded-[40px] shadow-2xl overflow-hidden flex-col relative border-[8px] border-black">
      <header className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-10 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="AeroSmart" className="w-10 h-10 rounded-full object-contain" />
          <span className="text-brand-blue font-bold text-lg">AeroSmart</span>
        </div>
        <button
          aria-label="Configurações"
          className="p-2 text-slate-500"
          onClick={() => { setPreviousScreen('/perfil'); navigate('/definicoes'); }}
        >
          <SettingsIcon className="w-6 h-6" />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-8 pb-24">
        <section className="flex flex-col items-center text-center mt-4">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-slate-200 overflow-hidden bg-slate-800">
              <img
                alt="Profile photo"
                className="w-full h-full object-cover opacity-80"
                src="https://img.magnific.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=360"
              />
            </div>
            <button
              aria-label="Editar foto"
              className="absolute bottom-1 right-1 bg-brand-blue text-white p-2 rounded-full border-2 border-white shadow-lg"
              onClick={() => navigate('/editar-perfil')}
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
            </div>
          </div>
        </section>
      </div>

      <BottomNav />
    </section>
  );
}
