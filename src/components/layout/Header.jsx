import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

export default function Header({ 
  title, 
  showBack = false, 
  rightAction = null,
  onBack = null,
  className = ''
}) {
  const navigate = useNavigate();
  const { setPreviousScreen } = useAppContext();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={`compact-header justify-between bg-white border-b border-slate-50 sticky top-0 z-10 ${className}`}>
      <div className="flex items-center gap-3">
        {showBack ? (
          <>
            <button 
              onClick={handleBack}
              className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-brand-blue transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            {title && <span className="font-bold text-gray-900 text-lg">{title}</span>}
          </>
        ) : (
          <>
            <img src="/logo.png" alt="AeroSmart" className="w-7 h-7 rounded-full object-contain" />
            <span className="text-xs font-bold text-brand-blue">{title || 'AeroSmart'}</span>
          </>
        )}
      </div>

      {rightAction && (
        <div className="flex items-center">
          {rightAction}
        </div>
      )}
    </div>
  );
}
