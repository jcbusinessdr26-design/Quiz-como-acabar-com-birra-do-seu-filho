import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui';

interface EvolutionGraphScreenProps {
  onNext: () => void;
}

export const EvolutionGraphScreen: React.FC<EvolutionGraphScreenProps> = ({ onNext }) => {
  return (
    <div className="flex-1 flex flex-col bg-white text-[#344966] overflow-y-auto">
      <div className="px-6 py-12 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-black mb-4 text-center leading-tight text-[#344966]"
        >
          Com o plano certo, é possível reduzir as birras e ter um dia a dia muito mais calmo.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-[#4A5568] text-center text-lg font-bold mb-12 opacity-80"
        >
          Sem precisar gritar, sem perder o controle e sem se estressar.
        </motion.p>

        {/* Gráfico de Evolução */}
        <div className="w-full bg-[#1E293B] rounded-[2.5rem] p-8 mb-12 shadow-2xl relative overflow-visible">
          <div className="relative h-64 w-full">
            {/* Grid de fundo */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-10">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-full h-[1px] bg-white"></div>
              ))}
            </div>
            <div className="absolute inset-0 flex justify-between opacity-10">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="h-full w-[1px] bg-white"></div>
              ))}
            </div>

            <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full overflow-visible">
              <defs>
                <linearGradient id="graphGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Linha 1: Situação Atual / Sem Plano */}
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "linear" }}
                d="M 0 150 Q 100 160, 200 155 T 400 165" 
                fill="none" 
                stroke="white" 
                strokeWidth="2" 
                strokeDasharray="4 4"
                opacity="0.3"
              />

              {/* Área preenchida com gradiente */}
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                d="M 0 150 Q 100 140, 200 80 T 400 20 L 400 200 L 0 200 Z"
                fill="url(#graphGradient)"
              />

              {/* Linha de Evolução */}
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                d="M 0 150 Q 100 140, 200 80 T 400 20" 
                fill="none" 
                stroke="white" 
                strokeWidth="6" 
                strokeLinecap="round"
                filter="url(#glow)"
              />

              {/* Bubble: Você hoje */}
              <foreignObject x="-40" y="100" width="100" height="40">
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white px-3 py-1.5 rounded-full shadow-lg text-[10px] font-black text-[#1E293B] whitespace-nowrap border-2 border-orange-400 flex items-center gap-1"
                >
                  <span>😢</span> Você hoje
                </motion.div>
              </foreignObject>

              {/* Bubble: Você na Semana 4 */}
              <foreignObject x="300" y="-30" width="120" height="40">
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="bg-white px-3 py-1.5 rounded-full shadow-lg text-[10px] font-black text-[#1E293B] whitespace-nowrap border-2 border-green-500 flex items-center gap-1"
                >
                  <span>😊</span> Você na Semana 4
                </motion.div>
              </foreignObject>

              {/* Pontos */}
              <circle cx="0" cy="150" r="6" fill="white" />
              <motion.circle 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
                cx="400" cy="20" r="8" fill="white" 
              />
            </svg>

            {/* Labels de tempo */}
            <div className="absolute bottom-[-45px] left-0 w-full flex justify-between px-2">
              {['Hoje', 'Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'].map((label, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-1 h-1 bg-white/20 rounded-full mb-2"></div>
                  <span className="text-[8px] font-black text-white/60 uppercase tracking-tighter whitespace-nowrap">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legenda */}
        <div className="w-full space-y-4 mb-14">
          <div className="flex items-center gap-4 bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
            <span className="text-2xl">😞</span>
            <p className="text-sm font-bold text-[#4A5568]">Situação atual (Sem o plano)</p>
          </div>
          <div className="flex items-center gap-4 bg-white p-5 rounded-3xl border border-[#10B981]/20 shadow-sm">
            <span className="text-2xl">😊</span>
            <p className="text-sm font-black text-[#1E293B]">Evolução esperada <span className="text-yellow-500">(Com o plano)</span></p>
          </div>
        </div>

        <Button onClick={onNext} className="w-full py-8 text-2xl bg-[#344966] text-white hover:bg-[#2D3E57] border-none shadow-xl rounded-[2rem]">
          Ver meu plano recomendado
        </Button>
      </div>
    </div>
  );
};
