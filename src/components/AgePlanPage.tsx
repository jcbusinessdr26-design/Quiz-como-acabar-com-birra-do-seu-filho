import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { CardTypeB, Button } from './ui';

interface AgePlanPageProps {
  onBack: () => void;
}

export const AgePlanPage = ({ onBack }: AgePlanPageProps) => {
  const agePlans = [
    {
      age: '0–3 meses',
      description: 'O sono ainda é muito imaturo, com despertares frequentes e pouca previsibilidade ao longo do dia e da noite.',
      cta: 'Ver fase 0–3 meses'
    },
    {
      age: '4–6 meses',
      description: 'O sono começa a ficar mais organizado, mas o bebê ainda pode acordar durante a noite e depender bastante da forma como adormece.',
      cta: 'Ver fase 4–6 meses'
    },
    {
      age: '7–12 meses',
      description: 'Nessa fase, o bebê já consegue responder melhor à rotina e ao ambiente, e a constância começa a fazer mais diferença no resultado.',
      cta: 'Ver fase 7–12 meses'
    },
    {
      age: '1–2 anos',
      description: 'A criança já entende mais o ambiente, reage mais à rotina e pode começar a mostrar resistência para dormir quando não há previsibilidade.',
      cta: 'Ver fase 1–2 anos'
    },
    {
      age: '2–3 anos',
      description: 'A criança pode resistir mais à hora de dormir, testar limites e querer prolongar o momento de ir para a cama.',
      cta: 'Ver fase 2–3 anos'
    },
    {
      age: '3–5 anos',
      description: 'A criança já entende bem a lógica da rotina, mas pode resistir ao sono, pedir presença constante ou criar dificuldade para desacelerar à noite.',
      cta: 'Ver fase 3–5 anos'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="px-6 pb-12 pt-4 bg-[#FDFBF7] min-h-screen"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-[#344966] font-bold mb-8 hover:opacity-70 transition-opacity"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Voltar</span>
      </button>

      <motion.h1 variants={itemVariants} className="text-3xl font-black text-[#2D3748] mb-4 leading-tight text-center tracking-tight">
        Plano por idade
      </motion.h1>
      
      <motion.p variants={itemVariants} className="text-[#4A5568] text-lg mb-10 text-center leading-relaxed font-medium opacity-90">
        Escolha a faixa etária do seu filho para entender o que costuma ser esperado nessa fase, o que mais atrapalha o sono e o que priorizar primeiro.
      </motion.p>

      <div className="space-y-6">
        {agePlans.map((plan, i) => (
          <motion.div key={i} variants={itemVariants}>
            <button
              onClick={() => console.log(`Navigating to ${plan.age}`)}
              className="flex flex-col items-center w-full p-6 rounded-[2rem] border-2 border-transparent bg-white shadow-sm hover:shadow-md hover:border-gray-200 transition-all text-center group"
            >
              <h3 className="text-xl font-black text-[#344966] mb-3">{plan.age}</h3>
              <p className="text-[#4A5568] text-base leading-relaxed mb-6 font-semibold opacity-80 text-center">
                {plan.description}
              </p>
              <div className="flex items-center justify-center gap-2 text-[#344966] font-black text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                {plan.cta} <ChevronRight className="w-4 h-4" />
              </div>
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
