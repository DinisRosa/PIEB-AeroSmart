import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Registry() {
  const navigate = useNavigate();
  const {
    regDate, setRegDate,
    regTime, setRegTime,
    regMed, setRegMed,
    doseType, setDoseType,
    regNotes, setRegNotes,
    regLocation, setRegLocation,
    setShowToast
  } = useAppContext();

  const handleConfirmRegistry = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate('/dashboard');
    }, 2500);
  };

  return (
    <section className="w-full h-full bg-[#F8FAFC] overflow-hidden flex flex-col relative">
      <div className="px-6 pt-safe-top pt-4">
        <button
          className="flex items-center gap-2 text-brand-blue font-bold text-xs hover:opacity-70 transition-opacity"
          onClick={() => navigate('/dashboard')}
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
                  value={regDate}
                  onChange={(e) => setRegDate(e.target.value)}
                  className="bg-transparent border-none outline-none text-[10px] font-medium text-gray-700 w-full"
                  style={{ fontFamily: '"DM Mono", monospace' }}
                />
              </div>
              <div className="bg-[#f0f7ff] rounded-xl p-3 flex items-center gap-2">
                <input
                  type="time"
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
                onClick={() => setDoseType('manutencao')}
              >
                Manutenção
              </button>
              <button
                className={`dose-btn ${doseType === 'emergencia' ? 'active' : ''}`}
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
  );
}
