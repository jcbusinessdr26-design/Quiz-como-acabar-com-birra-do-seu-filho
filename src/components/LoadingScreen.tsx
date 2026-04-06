import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Img, cn } from './ui';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 4000;
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min(100, (currentStep / steps) * 100));
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="px-6 flex flex-col items-center justify-center min-h-[75vh] text-center py-10">
      <h2 className="text-2xl font-extrabold text-[#2D3748] mb-12 leading-tight max-w-sm mx-auto text-center">
        Analisando suas respostas para identificar o que mais está alimentando as birras do seu filho...
      </h2>
      
      <div className="w-full max-w-sm mx-auto space-y-8 text-left bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
        {[
          { text: 'Avaliando o comportamento atual', start: 0, end: 25 },
          { text: 'Identificando os principais gatilhos', start: 25, end: 50 },
          { text: 'Cruzando os padrões de reação', start: 50, end: 75 },
          { text: 'Preparando seu plano de ação', start: 75, end: 100 }
        ].map((item, i) => {
          const itemProgress = Math.min(100, Math.max(0, ((progress - item.start) / (item.end - item.start)) * 100));
          const isDone = progress >= item.end;
          
          return (
            <div key={i} className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={cn(
                  "font-black text-sm uppercase tracking-widest transition-colors duration-300",
                  progress >= item.start ? "text-[#344966]" : "text-[#A0AEC0]"
                )}>
                  {item.text}
                </span>
                {isDone && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-green-500 rounded-full p-1"
                  >
                    <Check className="w-3 h-3 text-white" />
                  </motion.div>
                )}
              </div>
              <div className="w-full bg-[#EDF2F7] h-2 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-[#344966] to-[#4A658A] h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${itemProgress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
