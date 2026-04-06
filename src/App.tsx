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
  const { trackEvent, getCheckoutUrl } = useTracking();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    trackEvent('PageView', { step });
    
    // Dispara 'Lead' quando o usuário chega na análise (loading screen ou diagnóstico)
    if (step === 12) {
      trackEvent('Lead');
    }
  }, [step, view]);

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
              Descubra como agir diante das birras do seu filho sem gritar, sem perder o controle e sem se estressar no dia a dia.
            </h1>
            <Img src="https://res.cloudinary.com/dbwe8j1uq/image/upload/v1775415084/Gemini_Generated_Image_fhdg3hfhdg3hfhdg_cbuxtz.webp" className="w-full h-56 object-cover rounded-3xl mb-6" />
            <p className="text-[#4A5568] text-lg mb-8 leading-relaxed text-center font-medium">
              Entenda o que está alimentando esse comportamento e tenha um plano prático para agir com mais firmeza, mais calma e menos estresse.
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
            <h2 className="text-3xl font-extrabold text-[#2D3748] mb-8 text-center leading-tight">Onde a birra ou desobediência mais acontece?</h2>
            <div className="space-y-4">
              {[
                { emoji: '🏢', text: 'Em público' },
                { emoji: '🏠', text: 'Em casa' },
                { emoji: '🛁', text: 'Na hora do banho ou de dormir' },
                { emoji: '🛑', text: 'Quando precisa parar algo que quer' }
              ].map((opt) => (
                <CardTypeB key={opt.text} emoji={opt.emoji} text={opt.text} selected={answers[3] === opt.text} onClick={() => handleSingleChoice(3, opt.text)} />
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="px-6 pb-12 pt-4 text-center">
            <h2 className="text-3xl font-extrabold text-[#2D3748] mb-8 text-center leading-tight">As birras do seu filho geralmente começam quando:</h2>
            <div className="space-y-4">
              {[
                { emoji: '🚫', text: 'Ele escuta um “não”' },
                { emoji: '🎁', text: 'Quer algo e não consegue' },
                { emoji: '⏸️', text: 'Precisa parar o que está fazendo' },
                { emoji: '😫', text: 'Já está cansado ou irritado' }
              ].map((opt) => (
                <CardTypeB key={opt.text} emoji={opt.emoji} text={opt.text} selected={answers[4] === opt.text} onClick={() => handleSingleChoice(4, opt.text)} />
              ))}
            </div>
          </div>
        );

      case 5: {
        const answer = answers[4];
        let title = "";
        let description = "";
        let items: string[] = [];

        if (answer === 'Ele escuta um “não”') {
          title = "Quando a birra começa logo depois de um “não”, isso geralmente mostra dificuldade em lidar com frustração e limite.";
          description = "Isso costuma aparecer em momentos como:";
          items = ["quando você nega algo que ele quer", "quando ele percebe que não vai conseguir o que pediu", "quando precisa aceitar uma regra"];
        } else if (answer === 'Quer algo e não consegue') {
          title = "Quando a birra começa porque ele quer algo e não consegue, isso costuma estar ligado à frustração imediata.";
          description = "Isso aparece muito em situações como:";
          items = ["quando você não compra algo", "quando ele quer continuar fazendo alguma coisa", "quando você impede uma vontade na hora"];
        } else if (answer === 'Precisa parar o que está fazendo') {
          title = "Quando a birra começa na hora de interromper uma atividade, isso costuma mostrar dificuldade com transição e mudança de comando.";
          description = "Isso aparece muito em situações como:";
          items = ["guardar brinquedos", "sair do banho ou ir para o banho", "parar de brincar", "desligar a TV ou o celular"];
        } else if (answer === 'Já está cansado ou irritado') {
          title = "Quando a birra aparece com mais força no cansaço ou irritação, o comportamento pode estar sendo agravado pelo estado emocional da criança.";
          description = "Isso costuma acontecer em momentos como:";
          items = ["fim do dia", "depois de muito estímulo", "quando ele já está impaciente", "quando o corpo e a cabeça já estão cansados"];
        }

        return (
          <div className="px-6 pb-12 pt-8 flex flex-col min-h-[75vh] items-center text-center">
            <h2 className="text-2xl font-extrabold text-[#2D3748] mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-[#4A5568] text-lg mb-6 font-medium">
              {description}
            </p>
            <div className="w-full space-y-3 mb-8">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-left">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-[#4A5568] font-bold">{item}</span>
                </div>
              ))}
            </div>
            <Button onClick={nextStep} className="mt-auto py-5 text-xl">Continuar</Button>
          </div>
        );
      }

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

      case 8: {
        const answer = answers[7];
        let title = "";
        let description = "";
        let items: string[] = [];

        if (answer === 'Repito várias vezes') {
          title = "Quando você precisa repetir muitas vezes, isso normalmente mostra que o limite ainda não está chegando de forma clara ou firme o suficiente.";
          description = "Isso costuma acontecer em situações como:";
          items = ["mandar guardar algo", "pedir para parar", "chamar para o banho", "dar um comando e não ser atendida"];
        } else if (answer === 'Acabo gritando') {
          title = "Quando a reação vira grito, normalmente o problema já passou do comportamento da criança e chegou no seu limite emocional também.";
          description = "Isso costuma acontecer em momentos como:";
          items = ["quando você já repetiu várias vezes", "quando ele te enfrenta", "quando a situação acontece na frente de outras pessoas", "quando parece que nada funciona"];
        } else if (answer === 'Tento negociar') {
          title = "Quando você tenta negociar em quase toda birra, a criança pode entender que insistir bastante aumenta a chance de conseguir o que quer.";
          description = "Isso costuma aparecer em situações como:";
          items = ["“só mais um pouco”", "“deixa só hoje”", "“prometo que vou”", "quando a conversa vira tentativa de convencer a mãe a mudar de ideia"];
        } else if (answer === 'Cedo para evitar confusão') {
          title = "Quando você cede para evitar confusão, o alívio vem na hora, mas o comportamento pode voltar ainda mais forte depois.";
          description = "Isso costuma acontecer em situações como:";
          items = ["mercado", "visita", "hora de sair", "momentos em que você quer evitar choro, escândalo ou desgaste"];
        }

        return (
          <div className="px-6 pb-12 pt-8 flex flex-col min-h-[75vh] items-center text-center">
            <h2 className="text-2xl font-extrabold text-[#2D3748] mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-[#4A5568] text-lg mb-6 font-medium">
              {description}
            </p>
            <div className="w-full space-y-3 mb-8">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-left">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-[#4A5568] font-bold">{item}</span>
                </div>
              ))}
            </div>
            <Button onClick={nextStep} className="mt-auto py-5 text-xl">Continuar</Button>
          </div>
        );
      }

      case 9:
        return (
          <div className="px-6 pb-12 pt-4 text-center">
            <h2 className="text-3xl font-extrabold text-[#2D3748] mb-8 text-center leading-tight">O que mais te incomoda nessas situações?</h2>
            <div className="space-y-4">
              {[
                { emoji: '😫', text: 'Me estresso e perco a paciência' },
                { emoji: '😳', text: 'Passo vergonha na frente dos outros' },
                { emoji: '😤', text: 'Parece que ele não me respeita' },
                { emoji: '🤷', text: 'Sinto que nada funciona' }
              ].map((opt) => (
                <CardTypeB key={opt.text} emoji={opt.emoji} text={opt.text} selected={answers[9] === opt.text} onClick={() => handleSingleChoice(9, opt.text)} />
              ))}
            </div>
          </div>
        );

      case 10:
        return (
          <div className="px-6 pb-12 pt-4 text-center">
            <h2 className="text-3xl font-extrabold text-[#2D3748] mb-8 text-center leading-tight">Com que frequência isso acontece?</h2>
            <div className="space-y-4">
              {[
                { emoji: '☁️', text: 'Quase nunca' },
                { emoji: '⛅', text: 'Algumas vezes na semana' },
                { emoji: '🌥️', text: 'Quase todos os dias' },
                { emoji: '⛈️', text: 'Várias vezes por dia' }
              ].map((opt) => (
                <CardTypeB key={opt.text} emoji={opt.emoji} text={opt.text} selected={answers[10] === opt.text} onClick={() => handleSingleChoice(10, opt.text)} />
              ))}
            </div>
          </div>
        );

      case 11:
        return (
          <div className="px-6 pb-12 flex flex-col pt-8 min-h-[75vh] items-center text-center">
            <h2 className="text-3xl font-extrabold text-[#2D3748] mb-6 leading-tight text-center">
              Pelo que você respondeu, não parece ser falta de cuidado.
            </h2>
            <Img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80" className="w-full h-48 object-cover rounded-3xl mb-6" />
            <p className="text-[#4A5568] text-lg mb-6 text-center font-medium leading-relaxed">
              Na maioria das vezes, a birra não acontece porque a mãe está fazendo tudo errado, mas porque alguns pontos acabam reforçando esse comportamento sem perceber.
            </p>
            <p className="text-[#344966] font-extrabold text-center text-lg mb-8">
              Agora vamos analisar melhor o seu caso.
            </p>
            <Button onClick={nextStep} className="mt-auto py-5 text-xl">Continuar</Button>
          </div>
        );

      case 12:
        return <LoadingScreen onComplete={nextStep} />;

      case 13:
        return <DiagnosticScreen onNext={nextStep} />;

      case 14:
        return <ReasonsScreen onNext={nextStep} />;

      case 15:
        return <EvolutionGraphScreen onNext={nextStep} />;

      case 16:
        const checkoutUrl = getCheckoutUrl('https://pay.cakto.com.br/uhn9jm2_838370');
        return <ContinuousLandingPage onPurchase={() => {
          trackEvent('InitiateCheckout');
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
        ) : step < 17 ? (
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
