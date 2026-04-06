import React from 'react';
import { motion } from 'framer-motion';
import { Layout, ShieldCheck, Clock } from 'lucide-react';
import { Button } from './ui';

interface ReasonsScreenProps {
  onNext: () => void;
}

export const ReasonsScreen: React.FC<ReasonsScreenProps> = ({ onNext }) => {
  const reasons = [
    {
      title: 'Gatilhos da birra',
      text: 'Frustração, cansaço, mudança de rotina e excesso de estímulo podem ativar a birra com mais facilidade.',
      icon: <Layout className="w-6 h-6" />
    },
    {
      title: 'Forma de reação',
      text: 'A forma como você reage pode, sem querer, reforçar esse comportamento.',
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: 'Falta de consistência',
      text: 'Quando os limites mudam muito, a criança testa mais até descobrir o que funciona.',
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-white text-[#344966] overflow-y-auto">
      <div className="px-6 py-12 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-black mb-12 text-center leading-tight text-[#344966]"
        >
          Pelos seus sinais, estes são os 3 pontos que mais influenciam esse comportamento hoje:
        </motion.h2>

        <div className="space-y-6 mb-14 w-full">
          {reasons.map((reason, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-[#F0F4FF] rounded-2xl flex items-center justify-center text-[#344966] mb-5">
                {reason.icon}
              </div>
              <h3 className="font-black text-[#344966] text-xl mb-3">{reason.title}</h3>
              <p className="text-[#4A5568] leading-relaxed text-center text-lg font-semibold opacity-90">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>

        <Button onClick={onNext} className="w-full py-8 text-2xl bg-[#344966] text-white hover:bg-[#2D3E57] border-none shadow-xl rounded-[2rem]">
          Quero ver minha recomendação
        </Button>
      </div>
    </div>
  );
};
