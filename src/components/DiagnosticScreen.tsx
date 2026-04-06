import React from 'react';
import { motion } from 'framer-motion';
import { Button, Img } from './ui';
import { AlertCircle } from 'lucide-react';

interface DiagnosticScreenProps {
  onNext: () => void;
}

export const DiagnosticScreen: React.FC<DiagnosticScreenProps> = ({ onNext }) => {
  return (
    <div className="flex-1 flex flex-col bg-white text-[#344966] overflow-y-auto">
      <div className="px-6 py-12 flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#344966]/60 font-bold text-sm uppercase tracking-widest mb-2 text-center"
        >
          Atenção: o nível ideal de controle das birras começa acima de 75%
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-black mb-2 text-center leading-tight text-[#344966]"
        >
          Sua pontuação hoje: <span className="text-red-600">42%</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-[#344966]/40 font-bold text-xs uppercase tracking-widest mb-10"
        >
          Faixa ideal: acima de 75%
        </motion.p>

        {/* Gráfico Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full bg-gray-50 rounded-[2.5rem] p-8 mb-10 border border-gray-100 relative overflow-hidden"
        >
          <div className="relative h-48 w-full">
            {/* Escala de fundo com gradiente */}
            <div className="absolute bottom-0 left-0 w-full h-24 rounded-2xl overflow-hidden opacity-10">
              <div className="w-full h-full bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 to-green-500"></div>
            </div>

            {/* Linha curva crescente (SVG) */}
            <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full overflow-visible">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EF4444" />
                  <stop offset="25%" stopColor="#F97316" />
                  <stop offset="75%" stopColor="#EAB308" />
                  <stop offset="100%" stopColor="#22C55E" />
                </linearGradient>
              </defs>
              <path 
                d="M 0 180 Q 100 170, 200 100 T 400 20" 
                fill="none" 
                stroke="url(#lineGradient)" 
                strokeWidth="6" 
                strokeLinecap="round"
                className="opacity-10"
              />
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M 0 180 Q 100 170, 200 100 T 400 20" 
                fill="none" 
                stroke="url(#lineGradient)" 
                strokeWidth="6" 
                strokeLinecap="round"
              />

              {/* Marcador Ideal (75%) */}
              <g transform="translate(300, 45)">
                <line x1="0" y1="0" x2="0" y2="135" stroke="#22C55E" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="0" cy="0" r="6" fill="#22C55E" />
                <text x="10" y="5" fill="#22C55E" fontSize="12" fontWeight="bold">Ideal (75%)</text>
              </g>

              {/* Marcador Você hoje (42%) */}
              <motion.g 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <line x1="168" y1="30" x2="168" y2="130" stroke="#344966" strokeWidth="2" />
                <circle cx="168" cy="130" r="8" fill="#344966" className="animate-pulse" />
                <text x="168" y="20" fill="#344966" fontSize="14" fontWeight="black" textAnchor="middle">Você hoje</text>
              </motion.g>
            </svg>

            {/* Labels de escala */}
            <div className="absolute bottom-[-25px] left-0 w-full flex justify-between text-[10px] font-black text-[#344966]/40 uppercase tracking-widest">
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full space-y-8"
        >
          <div className="space-y-6">
            <p className="text-[#344966] text-center text-xl leading-relaxed font-black">
              Pelas suas respostas, hoje o comportamento do seu filho ainda está abaixo do ideal.
            </p>
            <p className="text-[#4A5568] text-center text-base leading-relaxed font-medium">
              Isso não quer dizer que você está fazendo tudo errado. Na maioria das vezes, só existem alguns pontos que ainda estão reforçando esse padrão sem perceber.
            </p>
          </div>

          <div className="bg-red-50 p-8 rounded-[2.5rem] border border-red-100 space-y-6">
            <h3 className="text-red-600 font-black text-lg flex items-center gap-2 justify-center">
              🔴 O que isso pode estar causando hoje
            </h3>
            <ul className="space-y-3 text-[#344966] font-bold text-sm text-left max-w-[250px] mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span> birras mais frequentes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span> dificuldade de impor limites
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span> desgaste emocional
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span> mais estresse no dia a dia
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-[#344966] text-center text-base leading-relaxed font-medium">
              Se isso continua por muito tempo, pode virar um padrão difícil de corrigir.
            </p>
            <p className="text-[#344966] text-center text-base leading-relaxed font-medium">
              Quando a criança aprende que insistir funciona, ela tende a repetir esse comportamento cada vez mais. Por isso, agir da forma certa desde cedo faz diferença.
            </p>
          </div>

          <div className="py-4 space-y-8">
            <div className="space-y-4">
              <p className="text-green-600 font-black text-center text-xl">
                O lado bom é que isso pode mudar.
              </p>
              <p className="text-[#344966] font-bold text-center text-lg leading-relaxed">
                Agora vamos mostrar o que mais está alimentando esse comportamento no seu caso.
              </p>
            </div>
            
            <Button onClick={onNext} className="w-full py-8 text-2xl bg-[#344966] text-white hover:bg-[#2D3E57] border-none shadow-xl rounded-[2rem]">
              Continuar
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
