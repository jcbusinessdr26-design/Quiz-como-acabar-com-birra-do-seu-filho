import React from 'react';

export const Header = ({ step }: { step: number }) => {
  const totalQuizSteps = 16;
  // Progress starts from step 2 (first question)
  const currentStep = step - 1;
  const totalSteps = totalQuizSteps - 1;
  const progress = Math.max(0, Math.min(100, Math.round((currentStep / totalSteps) * 100)));

  const showProgress = step > 1 && step <= 16;

  return (
    <div className="sticky top-0 z-20">
      {/* Main Header */}
      <div className="pt-1.5 pb-1.5 px-6 bg-[#344966] flex flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <img 
            src="https://res.cloudinary.com/dbwe8j1uq/image/upload/v1775417666/Gemini_Generated_Image_ta0mvnta0mvnta0m-removebg-preview_mqyzbt.png" 
            alt="Logo Plano Anti-Birra" 
            className="h-[115px] w-auto object-contain brightness-0 invert"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      
      {/* Progress Bar Below Header */}
      {showProgress && (
        <div className="w-full bg-[#FDFBF7] pt-1 pb-1 px-6">
          <div className="w-full max-w-sm mx-auto">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-[#718096] uppercase tracking-wider">Progresso do Plano</span>
              <span className="text-xs font-extrabold text-[#344966]">{progress}%</span>
            </div>
            <div className="w-full bg-[#EDF2F7] h-1.5 rounded-full overflow-hidden shadow-inner">
              <div
                className="bg-[#10B981] h-full rounded-full transition-all duration-700 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
