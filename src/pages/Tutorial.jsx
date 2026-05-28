import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { tutorialSteps } from '../data/mockData';
import Header from '../components/layout/Header';

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
      <Header 
        title={`Passo ${currentTutorialStep + 1} de 5`}
        showBack={true}
        onBack={() => navigate('/lembretes')}
        className="bg-white border-none"
      />
      <div className="px-6 pb-3 bg-white border-b border-slate-50">
        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-brand-blue h-full transition-all duration-300"
            style={{ width: `${tutorialSteps[currentTutorialStep].progress}%` }}
          ></div>
        </div>
      </div>

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

      {/* T5: Botões de navegação com min-height 44px */}
      <footer className="p-8 space-y-3 pb-10">
        <div className="flex gap-3">
          <button
            onClick={prevTutorialStep}
            className={`action-btn flex-1 bg-gray-100 text-gray-500 rounded-xl hover:bg-gray-200 transition-colors ${currentTutorialStep === 0 ? 'opacity-50 pointer-events-none' : ''}`}
          >
            Anterior
          </button>
          <button
            onClick={nextTutorialStep}
            className="action-btn flex-1 bg-slate-900 text-white rounded-xl hover:opacity-90 transition-colors"
          >
            {currentTutorialStep === 4 ? (
              <>
                Concluir <CheckCircle className="w-5 h-5 ml-2" />
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
