import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { tutorialSteps } from '../data/mockData';

export default function Tutorial() {
  const navigate = useNavigate();
  const [currentTutorialStep, setCurrentTutorialStep] = useState(0);

  const nextTutorialStep = () => {
    if (currentTutorialStep < tutorialSteps.length - 1) {
      setCurrentTutorialStep(currentTutorialStep + 1);
    } else {
      navigate('/lembretes');
    }
  };

  const prevTutorialStep = () => {
    if (currentTutorialStep > 0) {
      setCurrentTutorialStep(currentTutorialStep - 1);
    }
  };

  return (
    <section className="w-full h-full bg-white overflow-hidden flex flex-col relative">
      <header className="p-6 pb-2">
        <div className="flex items-center justify-between mb-4">
          <button aria-label="Voltar" className="p-2 -ml-2" onClick={() => navigate('/lembretes')}>
            <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
          <div className="text-center flex-1">
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Guia Instrucional</p>
            <p className="text-sm font-extrabold text-gray-800">
              Passo {currentTutorialStep + 1} de 5
            </p>
          </div>
          <div className="w-10"></div>
        </div>
        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-full transition-all duration-300"
            style={{ width: `${tutorialSteps[currentTutorialStep].progress}%` }}
          ></div>
        </div>
      </header>

      <main className="flex-grow px-8 pt-4 flex flex-col overflow-y-auto">
        <div className="bg-blue-100 rounded-3xl w-full aspect-square relative flex items-center justify-center overflow-hidden mb-8">
          <img
            src={tutorialSteps[currentTutorialStep].img}
            alt="Ilustração do passo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800 leading-tight">
            {tutorialSteps[currentTutorialStep].title}
          </h1>
          <p className="text-gray-500 leading-relaxed text-sm">
            {tutorialSteps[currentTutorialStep].text}
          </p>
        </div>
      </main>

      <footer className="p-8 space-y-3 pb-10">
        <div className="flex gap-3">
          <button
            onClick={prevTutorialStep}
            className={`flex-1 bg-gray-100 text-gray-500 font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors ${currentTutorialStep === 0 ? 'opacity-50 pointer-events-none' : ''}`}
          >
            Anterior
          </button>
          <button
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
  );
}
