import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function EditarPerfil() {
  const navigate = useNavigate();
  const {
    profileName, setProfileName,
    profileAge, setProfileAge,
    profileBlood, setProfileBlood,
    profileHeight, setProfileHeight,
    profileWeight, setProfileWeight,
    emergencyContactName, setEmergencyContactName,
    emergencyContactPhone, setEmergencyContactPhone,
    doctor1Name, setDoctor1Name,
    doctor1Phone, setDoctor1Phone,
    doctor2Name, setDoctor2Name,
    doctor2Phone, setDoctor2Phone
  } = useAppContext();

  return (
    <section className="w-full h-full bg-[#F8FAFC] overflow-hidden flex flex-col relative">
      <header className="flex items-center p-4 sticky top-0 bg-[#F8FAFC] z-10 border-b border-gray-100">
        <button
          aria-label="Back"
          className="p-2 text-brand-blue"
          onClick={() => navigate('/perfil')}
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
          onClick={() => navigate('/perfil')}
        >
          <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
          Guardar Alterações
        </button>
      </div>
    </section>
  );
}
