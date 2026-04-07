import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Star, 
  BookOpen, 
  Layout, 
  ShieldCheck, 
  Clock, 
  Quote, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Video, 
  Gift, 
  Lock 
} from 'lucide-react';
import { Img, Button, CardTypeB, cn } from './components/ui';
import { Header } from './components/Header';
import { LoadingScreen } from './components/LoadingScreen';
import { AgePlanPage } from './components/AgePlanPage';
import { DiagnosticScreen } from './components/DiagnosticScreen';
import { ReasonsScreen } from './components/ReasonsScreen';
import { EvolutionGraphScreen } from './components/EvolutionGraphScreen';
import { ContinuousLandingPage } from './components/ContinuousLandingPage';
import { useTracking } from './hooks/useTracking';

export default function App() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [view, setView] = useState<'quiz' | 'agePlan'>('quiz');
  const [trackedSteps, setTrackedSteps] = useState<Set<number>>(new Set());
  const { trackEvent, getCheckoutUrl } = useTracking();

  const trackFbq = (event: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      if (params) {
        (window as any).fbq('trackCustom', event, params);
      } else {
        (window as any).fbq('trackCustom', event);
      }
    }
  };

  const trackFbqStandard = (event: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      if (params) {
        (window as any).fbq('track', event, params);
      } else {
        (window as any).fbq('track', event);
      }
    }
  };

  const updateUrl = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', path);
    }
  };

  const getStepUrl = (stepNumber: number): string => {
    const urlMap: Record<number, string> = {
      1: '/quiz-intro',
      2: '/quiz-step-1',
      3: '/quiz-step-2',
      4: '/quiz-step-3',
      5: '/quiz-step-4',
      6: '/quiz-step-5',
      7: '/quiz-step-6',
      8: '/quiz-step-7',
      9: '/quiz-step-8',
      10: '/quiz-step-9',
      11: '/quiz-step-10',
      12: '/quiz-step-11',
      13: '/quiz-comment',
      14: '/quiz-generating',
      15: '/quiz-result',
      16: '/quiz-result',
      17: '/quiz-result',
      18: '/quiz-offer'
    };
    return urlMap[stepNumber] || '/quiz';
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    trackEvent('PageView', { step });
    updateUrl(getStepUrl(step));
    
    if (step === 14) {
      trackEvent('Lead');
    }
  }, [step, view]);

  useEffect(() => {
    if (trackedSteps.has(step)) return;
    
    setTrackedSteps(prev => new Set(prev).add(step));

    switch (step) {
      case 2:
        trackFbq('QuizStart');
        break;
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
        trackFbq('QuizStepView', { step_number: step - 1, step_name: `pergunta_${step - 1}` });
        break;
      case 13:
        trackFbq('QuizCommentView');
        break;
      case 14:
        trackFbq('QuizResultGenerating');
        break;
      case 15:
      case 16:
      case 17:
        trackFbq('QuizResultView');
        trackFbqStandard('Lead');
        trackEvent('Lead');
        break;
      case 18:
        trackFbq('OfferView');
        break;
    }
  }, [step]);

  const handleSingleChoice = (stepNum: number, value: string) => {
    setAnswers({ ...answers, [stepNum]: value });
    setTimeout(() => setStep(step + 1), 400);
  };

  const handleMultiChoice = (stepNum: number, value: string) => {
    const current = answers[stepNum] || [];
    if (current.includes(value)) {
      setAnswers({ ...answers, [stepNum]: current.filter((v: string) => v !== value) });
    } else {
      setAnswers({ ...answers, [stepNum]: [...current, value] });
    }
  };

  const nextStep = () => setStep(step + 1);

  const pageVariants = {
    initial: { opacity: 0, scale: 0.98, y: 10 },
    in: { opacity: 1, scale: 1, y: 0 },
    out: { opacity: 0, scale: 1.02, y: -10 }
  };

  const renderQuizScreen = () => {
    switch (step) {
      case 1:
        return (
          <div className="px-6 pb-12 pt-6 flex flex-col min-h-[85vh] items-center text-center">
            <h1 className="text-3xl font-extrabold text-[#2D3748] leading-tight mb-6 text-center">
              Descubra como saber o que fazer nas birras e crises do seu filho sem gritar, sem ceder no desespero e sem piorar a situação.
            </h1>
            <Img src="https://res.cloudinary.com/dbwe8j1uq/image/upload/v1775415084/Gemini_Generated_Image_fhdg3hfhdg3hfhdg_cbuxtz.webp" className="w-full h-56 object-cover rounded-3xl mb-6" />
            <p className="text-[#4A5568] text-lg mb-8 leading-relaxed text-center font-medium">
              Descubra o que pode estar por trás dessas crises e tenha um plano prático para agir com mais clareza, mais firmeza e menos desgaste nos momentos mais difíceis.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 mb-10 text-[#344966] font-bold bg-white py-4 px-6 rounded-3xl shadow-sm border border-gray-100">
              <span className="text-sm text-center">Leva menos de 2 minutos.</span>
            </div>
            <div className="mt-auto w-full">
              <Button onClick={nextStep} className="py-5 text-xl">Começar agora <ChevronRight className="w-6 h-6" /></Button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="px-6 pb-12 pt-4 text-center">
            <h2 className="text-3xl font-extrabold text-[#2D3748] mb-8 text-center leading-tight">Qual é a idade do seu filho?</h2>
            <div className="space-y-4">
              {[
                { emoji: '👶', text: '0 a 1 ano' },
                { emoji: '🍼', text: '1 a 2 anos' },
                { emoji: '🧸', text: '2 a 3 anos' },
                { emoji: '🏃', text: '3 a 5 anos' }
              ].map((opt) => (
                <CardTypeB key={opt.text} emoji={opt.emoji} text={opt.text} selected={answers[2] === opt.text} onClick={() => handleSingleChoice(2, opt.text)} />
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="px-6 pb-12 pt-4 text-center">
            <h2 className="text-3xl font-extrabold text-[#2D3748] mb-8 text-center leading-tight">Com que frequência essas crises ou birras acontecem?</h2>
            <div className="space-y-4">
              {[
                { emoji: '☁️', text: 'Raramente' },
                { emoji: '⛅', text: 'Algumas vezes na semana' },
                { emoji: '🌥️', text: 'Quase todos os dias' },
                { emoji: '⛈️', text: 'Várias vezes por dia' }
              ].map((opt) => (
                <CardTypeB key={opt.text} emoji={opt.emoji} text={opt.text} selected={answers[3] === opt.text} onClick={() => handleSingleChoice(3, opt.text)} />
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="px-6 pb-12 pt-4 text-center">
            <h2 className="text-3xl font-extrabold text-[#2D3748] mb-8 text-center leading-tight">Onde isso mais costuma acontecer?</h2>
            <div className="space-y-4">
              {[
                { emoji: '🏠', text: 'Em casa' },
                { emoji: '🏢', text: 'Em público' },
                { emoji: '🛁', text: 'Na hora do banho ou de dormir' },
                { emoji: '🛑', text: 'Quando precisa parar algo que quer' }
              ].map((opt) => (
                <CardTypeB key={opt.text} emoji={opt.emoji} text={opt.text} selected={answers[4] === opt.text} onClick={() => handleSingleChoice(4, opt.text)} />
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="px-6 pb-12 pt-4 text-center">
            <h2 className="text-3xl font-extrabold text-[#2D3748] mb-8 text-center leading-tight">Quando a situação começa, como ela costuma ser?</h2>
            <div className="space-y-4">
              {[
                { emoji: '😤', text: 'Reclama, mas passa rápido' },
                { emoji: '😢', text: 'Chora e insiste' },
                { emoji: '🔊', text: 'Grita ou se descontrola' },
                { emoji: '😵', text: 'Parece que nada acalma' }
              ].map((opt) => (
                <CardTypeB key={opt.text} emoji={opt.emoji} text={opt.text} selected={answers[5] === opt.text} onClick={() => handleSingleChoice(5, opt.text)} />
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="px-6 pb-12 pt-4 text-center">
            <h2 className="text-3xl font-extrabold text-[#2D3748] mb-8 text-center leading-tight">Quando isso acontece, o que seu filho costuma fazer?</h2>
            <div className="space-y-4">
              {[
                { emoji: '🔊', text: 'Grita ou chora muito' },
                { emoji: '🤸', text: 'Se joga no chão' },
                { emoji: '😶', text: 'Ignora o que você fala' },
                { emoji: '😤', text: 'Responde ou enfrenta' }
              ].map((opt) => (
                <CardTypeB key={opt.text} emoji={opt.emoji} text={opt.text} selected={answers[6] === opt.text} onClick={() => handleSingleChoice(6, opt.text)} />
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="px-6 pb-12 pt-4 text-center">
            <h2 className="text-3xl font-extrabold text-[#2D3748] mb-8 text-center leading-tight">O que costuma acontecer com você nesses momentos?</h2>
            <div className="space-y-4">
              {[
                { emoji: '🔁', text: 'Repito várias vezes' },
                { emoji: '📢', text: 'Acabo gritando' },
                { emoji: '🤝', text: 'Tento negociar' },
                { emoji: '🏳️', text: 'Cedo para evitar confusão' }
              ].map((opt) => (
                <CardTypeB key={opt.text} emoji={opt.emoji} text={opt.text} selected={answers[7] === opt.text} onClick={() => handleSingleChoice(7, opt.text)} />
              ))}
            </div>
          </div>
        );

case 8:
        return (
          <div className="px-6 pb-12 pt-4 text-center">
            <h2 className="text-3xl font-extrabold text-[#2D3748] mb-8 text-center leading-tight">Quando a situação piora, o que geralmente acontece com você?</h2>
            <div className="space-y-4">
              {[
                { emoji: '💬', text: 'Tento conversar, mas não funciona' },
                { emoji: '🔁', text: 'Repito várias vezes' },
                { emoji: '📢', text: 'Acabo gritando' },
                { emoji: '🏳️', text: 'Cedo para parar mais rápido' }
              ].map((opt) => (
                <CardTypeB key={opt.text} emoji={opt.emoji} text={opt.text} selected={answers[8] === opt.text} onClick={() => handleSingleChoice(8, opt.text)} />
              ))}
            </div>
          </div>
        );

      case 9:
        return (
          <div className="px-6 pb-12 pt-4 text-center">
            <h2 className="text-3xl font-extrabold text-[#2D3748] mb-8 text-center leading-tight">Como você se sente nesses momentos?</h2>
            <div className="space-y-4">
              {[
                { emoji: '😓', text: 'Cansada, mas tentando manter a calma' },
                { emoji: '😕', text: 'Confusa sobre o que fazer' },
                { emoji: '😫', text: 'Estressada e sobrecarregada' },
                { emoji: '😵', text: 'Completamente perdida' }
              ].map((opt) => (
                <CardTypeB key={opt.text} emoji={opt.emoji} text={opt.text} selected={answers[9] === opt.text} onClick={() => handleSingleChoice(9, opt.text)} />
              ))}
            </div>
          </div>
        );

      case 10:
        return (
          <div className="px-6 pb-12 pt-4 text-center">
            <h2 className="text-3xl font-extrabold text-[#2D3748] mb-8 text-center leading-tight">Qual dessas situações mais te desafia hoje?</h2>
            <div className="space-y-4">
              {[
                { emoji: '🏢', text: 'Quando acontece em público' },
                { emoji: '🤸', text: 'Quando ele grita ou se joga no chão' },
                { emoji: '😤', text: 'Quando ele me enfrenta ou agride' },
                { emoji: '🤷', text: 'Quando nada funciona' }
              ].map((opt) => (
                <CardTypeB key={opt.text} emoji={opt.emoji} text={opt.text} selected={answers[10] === opt.text} onClick={() => handleSingleChoice(10, opt.text)} />
              ))}
            </div>
          </div>
        );

      case 11:
        return (
          <div className="px-6 pb-12 pt-4 text-center">
            <h2 className="text-3xl font-extrabold text-[#2D3748] mb-8 text-center leading-tight">O que normalmente parece dispara essas crises?</h2>
            <div className="space-y-4">
              {[
                { emoji: '🚫', text: 'Quando escuta "não"' },
                { emoji: '🎁', text: 'Quando quer algo e não consegue' },
                { emoji: '⏸️', text: 'Quando precisa parar algo' },
                { emoji: '😫', text: 'Quando está cansado ou irritado' }
              ].map((opt) => (
                <CardTypeB key={opt.text} emoji={opt.emoji} text={opt.text} selected={answers[11] === opt.text} onClick={() => handleSingleChoice(11, opt.text)} />
              ))}
            </div>
          </div>
        );

      case 12:
        return (
          <div className="px-6 pb-12 pt-4 text-center">
            <h2 className="text-3xl font-extrabold text-[#2D3748] mb-8 text-center leading-tight">Isso parece algo recente ou já virou padrão?</h2>
            <div className="space-y-4">
              {[
                { emoji: '🆕', text: 'Começou recentemente' },
                { emoji: '📅', text: 'Já acontece há algumas semanas' },
                { emoji: '📆', text: 'Já faz alguns meses' },
                { emoji: '🔄', text: 'Já virou um padrão difícil' }
              ].map((opt) => (
                <CardTypeB key={opt.text} emoji={opt.emoji} text={opt.text} selected={answers[12] === opt.text} onClick={() => handleSingleChoice(12, opt.text)} />
              ))}
            </div>
          </div>
        );

      case 13:
        return (
          <div className="px-6 pb-12 flex flex-col pt-8 min-h-[75vh] items-center text-center">
            <h2 className="text-3xl font-extrabold text-[#2D3748] mb-6 leading-tight text-center">
              Pelo que você respondeu, isso não parece ser falta de cuidado.
            </h2>
            <Img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80" className="w-full h-48 object-cover rounded-3xl mb-6" />
            <p className="text-[#4A5568] text-lg mb-6 text-center font-medium leading-relaxed">
              Na maioria das vezes, essas crises não crescem porque a mãe está fazendo tudo errado. Elas crescem porque faltam respostas mais claras para os momentos em que tudo sai do controle.
            </p>
            <p className="text-[#344966] font-extrabold text-center text-lg mb-8">
              Agora vamos analisar melhor o seu caso.
            </p>
            <Button onClick={nextStep} className="mt-auto py-5 text-xl">Continuar</Button>
          </div>
        );

      case 14:
        return <LoadingScreen onComplete={nextStep} />;

      case 15:
        return <DiagnosticScreen onNext={nextStep} />;

      case 16:
        return <ReasonsScreen onNext={nextStep} />;

      case 17:
        return <EvolutionGraphScreen onNext={nextStep} />;

      case 18:
        const checkoutUrl = getCheckoutUrl('https://pay.cakto.com.br/uhn9jm2_838370');
        return <ContinuousLandingPage onPurchase={() => {
          trackEvent('InitiateCheckout');
          trackFbqStandard('InitiateCheckout');
          window.open(checkoutUrl, '_blank');
        }} />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#2D3748] selection:bg-[#344966] selection:text-white">
      <div className="max-w-md mx-auto bg-[#FDFBF7] min-h-screen shadow-2xl relative overflow-hidden flex flex-col">
        <Header step={step} />
        
        {view === 'agePlan' ? (
          <AgePlanPage onBack={() => setView('quiz')} />
        ) : step < 19 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 flex flex-col"
            >
              {renderQuizScreen()}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="flex-1 flex items-center justify-center p-10 text-center">
            <h2 className="text-2xl font-black text-[#344966]">Fim do Funil</h2>
          </div>
        )}
      </div>
    </div>
  );
}
