import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ChevronDown,
  ArrowRight,
  Clock,
  BookOpen,
  Video,
  Gift,
  ShieldCheck,
  Layout,
  Volume2,
  ListChecks,
  FileText,
  Play,
  Star
} from 'lucide-react';
import { Img, Button } from './ui';

interface SalesPageProps {
  onPurchase: () => void;
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const SalesPage: React.FC<SalesPageProps> = ({ onPurchase }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FDFBF7] flex flex-col">
      {/* CABEÇALHO COM LOGO - FIXO */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#344966] py-3 px-6 flex justify-center shadow-md">
        <img 
          src="https://res.cloudinary.com/dbwe8j1uq/image/upload/v1775417666/Gemini_Generated_Image_ta0mvnta0mvnta0m-removebg-preview_mqyzbt.png" 
          alt="Logo Plano Anti-Birra" 
          className="h-[60px] w-auto object-contain"
          style={{ filter: 'brightness(0) invert(1) drop-shadow(0 0 8px rgba(255,255,255,0.3))' }}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* ESPAÇO PARA O CABEÇALHO FIXO */}
      <div className="h-[76px]"></div>

       {/* BLOCO 1 — HERO */}
      <section className="px-6 py-6 bg-[#FDFBF7] flex flex-col items-center text-center">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="w-full">
          <h2 className="text-2xl sm:text-3xl font-black text-[#2D3748] mb-2 leading-tight text-center">
           Quando a birra começar, você vai saber exatamente como agir
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={itemVariants}
          className="w-full mb-3"
        >
          <Img 
            src="https://res.cloudinary.com/dbwe8j1uq/image/upload/v1775584541/file_000000000c94720e9b975d61281ac504_ysih8t.webp" 
            className="w-full h-96 object-contain" 
          />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="w-full">
          <p className="text-[#4A5568] font-bold text-base leading-relaxed text-center mb-8 max-w-md mx-auto">
            Um plano prático no app com orientação por situação, frases prontas e apoio rápido para você agir com mais firmeza e menos estresse na hora da crise.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              onClick={scrollToOffer}
              className="bg-[#344966] hover:bg-[#1E2A45] text-white py-5 text-lg font-black border-none rounded-[2rem] w-full max-w-sm mx-auto"
            >
              QUERO SABER O QUE FAZER NA HORA DA BIRRA <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* BLOCO 2 — IDENTIFICAÇÃO */}
      <section className="px-6 py-6 bg-white">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center max-w-lg mx-auto">
            Quando a birra começa, tudo acontece rápido demais.<br/><br/>
            Seu filho grita, insiste, se joga no chão, enfrenta… e em poucos minutos o estresse sobe junto.<br/><br/>
            Você tenta manter a calma, mas sem saber exatamente o que fazer na hora, quase sempre acontece uma destas coisas:<br/><br/>
            → Você grita e se culpa depois<br/>
            → Você cede só para aquilo acabar logo<br/>
            → Você insiste do jeito errado e a situação piora<br/><br/>
            O problema não é falta de amor. É não ter um plano claro para agir no momento da crise.
          </p>
        </motion.div>
      </section>

      {/* BLOCO 3 — AGITAÇÃO DA DOR */}
      <section className="px-6 py-6 bg-[#FDFBF7]">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="w-full mb-4">
          <Img 
              src="https://res.cloudinary.com/dbwe8j1uq/image/upload/v1775587542/1775587033633_z8f5su.webp" 
className="w-full h-80 object-contain rounded-lg"
            />
        </motion.div>
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black text-[#2D3748] mb-3 text-center leading-tight">
          O problema não é só a birra. É não saber como agir na hora.
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="max-w-lg mx-auto">
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center mb-4">
            O problema não é só a birra. É não saber como agir com clareza quando ela começa.<br/>
            Porque quando você improvisa no calor do momento, geralmente acaba acontecendo uma destas coisas:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
          {[
            { icon: '📢', title: 'Você grita e depois se culpa' },
            { icon: '🏳️', title: 'Você cede só para aquilo acabar logo' },
            { icon: '📉', title: 'Você insiste do jeito errado e a crise aumenta' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden" 
              whileInView="visible" 
              variants={itemVariants}
              className="flex items-center gap-4 p-5 bg-white rounded-[2rem] border border-gray-100"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="font-black text-[#344966] text-lg">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCO 4 — NOVA OPORTUNIDADE */}
      <section className="px-6 py-6 bg-[#344966]">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-white text-lg leading-relaxed font-bold text-center max-w-lg mx-auto">
            Mas agora você pode parar de improvisar.<br/><br/>
            Com um plano claro na mão, você sabe o que fazer, o que dizer e como agir em cada situação. Isso muda tudo: menos estresse, menos gritos, menos culpa.<br/><br/>
            A diferença é ter orientação na hora da crise — não teoria panjang.
          </p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="w-full mt-6">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="text-sm font-black text-red-400 bg-red-50 px-3 py-1 rounded-full">ANTES</span>
            <span className="text-sm font-black text-green-400 bg-green-50 px-3 py-1 rounded-full">DEPOIS</span>
          </div>
          <Img 
            src="https://res.cloudinary.com/dbwe8j1uq/image/upload/v1775494552/Gemini_Generated_Image_fhdg3hfhdg3hfhdg_1_mckh1z.webp" 
            className="w-full h-64 object-contain rounded-sm" 
          />
        </motion.div>
      </section>

      {/* BLOCO 5 — MECANISMO */}
      <section className="px-6 py-6 bg-[#FDFBF7]">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black text-[#2D3748] mb-3 text-center leading-tight">
          Um plano prático para consultar na hora da crise
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <div style={{ maxWidth: '520px', margin: '20px auto', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', borderRadius: '16px', overflow: 'hidden' }}>
            <video 
              controls
              playsinline
              preload="metadata"
              style={{ width: '100%', display: 'block', background: '#000' }}
            >
              <source src="https://res.cloudinary.com/dbwe8j1uq/video/upload/v1775611954/InShot_20260407_191941433_crn9bc.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center max-w-lg mx-auto mt-4 mb-4">
            O Plano Anti-Birra não é mais um conteúdo solto. É um plano prático para consultar no momento em que a birra acontece. Aqui você encontra orientação por situação, frases prontas e apoio rápido para saber o que fazer, o que dizer e o que evitar — sem precisar memorizar nada.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4"
          >
            <Button 
              onClick={scrollToOffer}
              className="bg-[#344966] hover:bg-[#1E2A45] text-white py-4 text-base font-black border-none rounded-[2rem] w-full max-w-sm mx-auto block"
            >
              QUERO AGIR SEM GRITAR NEM CEDER <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* BLOCO 6 — O QUE A PESSOA RECEBE */}
      <section className="px-6 py-6 bg-[#344966]">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black text-white mb-4 text-center leading-tight">
          No app, você encontra apoio prático para agir melhor nas birras e crises do seu filho
        </motion.h2>
        
        <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto">
          {[
            { icon: Layout, title: 'O que fazer na hora da birra' },
            { icon: ListChecks, title: 'O que dizer sem gritar' },
            { icon: FileText, title: 'O que evitar para não piorar' },
            { icon: Volume2, title: 'Frases prontas por situação' },
            { icon: BookOpen, title: 'Plano para mercado, banho, telas' },
            { icon: ListChecks, title: 'Checklist prático' },
            { icon: Video, title: 'Videoaulas complementares' },
            { icon: Star, title: 'Áudios guiados para acalmar' },
            { icon: Star, title: 'Acesso por 12 meses' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden" 
              whileInView="visible" 
              variants={itemVariants}
              className="flex flex-col items-center gap-2 p-3 bg-[#2D3E57] rounded-[1rem] border border-[#3D4E67] text-center"
            >
              <item.icon className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <span className="font-black text-white text-sm">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCO 7 — BENEFÍCIOS */}
      <section className="px-6 py-6 bg-[#FDFBF7]">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black text-[#2D3748] mb-4 text-center leading-tight">
          Com isso, você consegue:
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-3 max-w-md mx-auto">
          {[
            { icon: '✓', title: 'Saber o que fazer quando ele grita, enfrenta ou se joga no chão' },
            { icon: '✓', title: 'Ter frases prontas para responder sem gritar' },
            { icon: '✓', title: 'Agir com firmeza sem precisar perder o controle' },
            { icon: '✓', title: 'Saber o que evitar para não piorar a crise' },
            { icon: '✓', title: 'Consultar rapidamente em situações como mercado, banho e telas' },
            { icon: '✓', title: 'Reduzir o estresse e a culpa depois da crise' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden" 
              whileInView="visible" 
              variants={itemVariants}
              className="flex items-center gap-4 p-4 bg-white rounded-[1.5rem] border border-gray-100"
            >
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <span className="font-black text-[#344966] text-base">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCO 8 — PROVA LÓGICA */}
      <section className="px-6 py-6 bg-[#344966]">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black text-white mb-4 text-center leading-tight">
          Quando a mãe tem um plano claro, a chance de reagir no impulso diminui
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-white/90 text-lg leading-relaxed font-bold text-center max-w-lg mx-auto">
            Quando a mãe tem um plano claro, a chance de reagir no impulso diminui.<br/><br/>
            E quando ela responde com mais clareza e consistência, a crise tende a ser conduzida com menos caos, menos culpa e mais segurança.
          </p>
        </motion.div>
      </section>

      {/* BLOCO 9 — BÔNUS */}
      <section className="px-6 py-6 bg-white">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black text-[#2D3748] mb-4 text-center leading-tight">
          Bônus especiais para ajudar você a aplicar com mais segurança no dia a dia
        </motion.h2>
        
        <div className="space-y-3 max-w-md mx-auto">
          {[
            { icon: Gift, title: 'Bônus 1 — Guia Prático em PDF', desc: 'Consulta rápida com o que fazer, dizer e evitar na hora da crise.' },
            { icon: Gift, title: 'Bônus 2 — Checklist de 7 Dias', desc: 'Passo a passo para agir com mais clareza e reduzir respostas no impulso.' },
            { icon: Gift, title: 'Bônus 3 — Plano de Limites por Situação', desc: 'Orientações para mercado, banho, telas, hora de sair e visitas.' },
            { icon: Clock, title: 'Acesso por 12 Meses', desc: 'Consulte quando quiser, quantas vezes precisar.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden" 
              whileInView="visible" 
              variants={itemVariants}
              className="flex items-start gap-4 p-5 bg-[#FDFBF7] rounded-[1.5rem] border border-gray-100"
            >
              <item.icon className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-black text-[#344966] text-base mb-1">{item.title}</h4>
                <p className="text-[#4A5568] text-sm font-bold opacity-80">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCO 10 — BLOCO DE VALOR / ANCORAGEM */}
      <section className="px-6 py-6 bg-[#FDFBF7]">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black text-[#2D3748] mb-3 text-center leading-tight">
          Tudo isso foi pensado para tirar você do improviso na hora da crise
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="w-full mb-3">
          <Img 
            src="https://res.cloudinary.com/dbwe8j1uq/image/upload/v1775663686/1775658502998_j88yno.png" 
            className="w-full h-64 sm:h-80 md:h-96 object-contain rounded-sm" 
          />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center max-w-lg mx-auto">
            Se você tivesse que descobrir tudo isso sozinha, provavelmente levaria muito mais tempo testando, errando, se estressando e tentando encontrar a melhor forma de agir em cada situação com seu filho.<br/><br/>
            E mesmo assim, a dúvida continuaria:<br/><br/>
            "Será que estou fazendo certo?"<br/>
            "Será que eu deveria ter falado diferente?"<br/>
            "Será que eu piorei a situação sem perceber?"<br/><br/>
            O Plano de Ação Anti-Birra foi criado justamente para encurtar esse caminho e ajudar você a saber o que fazer, o que dizer e como agir com mais calma, firmeza e menos estresse nos momentos mais difíceis do dia a dia.<br/><br/>
            <strong>Hoje, você não está levando apenas um app.</strong>
          </p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="w-full mb-3">
          <Img 
            src="https://res.cloudinary.com/dbwe8j1uq/image/upload/v1775495277/ChatGPT_Image_6_de_abr._de_2026_13_54_37_km51kx.webp" 
            className="w-full h-64 object-contain rounded-sm" 
          />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center max-w-lg mx-auto">
            Você está tendo acesso a um conjunto prático de orientações, frases prontas, áudios guiados, planos por situação, videoaulas complementares e bônus que ajudam você a lidar melhor com as birras e crises do seu filho sem improvisar, sem ceder no desespero e sem piorar a situação.
          </p>
        </motion.div>
      </section>

      {/* BLOCO 11 — PREÇO + CTA */}
      <section id="offer-section" className="px-6 py-6 bg-[#344966]">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="max-w-md mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="bg-white p-6 rounded-[2.5rem] shadow-2xl border border-gray-100 text-center">
            <div className="mb-6">
              <p className="text-[#A0AEC0] font-black text-sm uppercase tracking-widest">Pagamento único</p>
              <p className="text-[#A0AEC0] font-black text-xs uppercase tracking-widest">Acesso por 12 meses</p>
            </div>
            
            <div className="flex flex-col items-center mb-6">
              <span className="text-gray-300 line-through text-xl sm:text-2xl font-black mb-2">De R$147,99</span>
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 mb-2">
                <span className="text-lg sm:text-2xl font-black text-[#344966]">por apenas</span>
                <span className="text-4xl sm:text-6xl font-black text-[#2D3748] tracking-tight">R$19,90</span>
              </div>
              <span className="text-lg sm:text-xl font-black text-[#344966]">à vista</span>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <Button 
                onClick={onPurchase}
                className="bg-green-600 hover:bg-green-700 text-white py-5 text-lg font-black border-none rounded-[2rem] w-full mb-4"
              >
                QUERO ACESSAR O PLANO ANTI-BIRRA <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            
            <div className="flex items-center justify-center gap-2 text-green-600 font-bold text-sm">
              <ShieldCheck className="w-4 h-4" />
              Compra 100% segura
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* BLOCO 12 — GARANTIA */}
      <section className="px-6 py-6 bg-[#FDFBF7]">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="bg-white p-8 rounded-[2.5rem] shadow-xl border-2 border-green-100 text-center max-w-md mx-auto">
          <div className="mb-4">
              <img 
              src="https://res.cloudinary.com/dynjqdxw8/image/upload/v1773801684/ChatGPT_Image_17_de_mar._de_2026__22_41_10-removebg-preview_cau976.webp" 
              alt="Selo de Garantia" 
              className="w-48 h-48 mx-auto object-contain" 
            />
          </div>
          <h3 className="text-2xl font-black text-[#2D3748] mb-4">7 dias de garantia</h3>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold">
            Você ainda conta com 7 dias de garantia para testar com calma.<br/>
            Se achar que o Plano de Ação Anti-Birra não é para você, basta pedir o reembolso dentro do prazo e seu investimento será devolvido.
          </p>
        </motion.div>
      </section>

      {/* BLOCO 13 — FAQ */}
      <section className="px-6 py-6 bg-white">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black text-[#2D3748] mb-8 text-center leading-tight">
          Dúvidas Frequentes
        </motion.h2>
        
        <div className="space-y-3 max-w-lg mx-auto">
          {[
            { q: 'Isso funciona para qualquer idade?', a: 'O plano foi pensado para mães de crianças de 2 a 6 anos, especialmente entre 2 e 4 anos, que é quando as birras e crises são mais frequentes.' },
            { q: 'E se eu já tentei de tudo?', a: 'Talvez o que faltou não tenha sido esforço. Faltou um plano claro para agir na hora certa. Este app foi criado justamente para isso.' },
            { q: 'Não tenho tempo para mais um curso.', a: 'Não é um curso para assistir. É um plano para consultar na hora da crise. Você usa em minutos, quando mais precisa.' },
            { q: 'Não quero ser dura demais.', a: 'O foco aqui não é endurecer. É agir com firmeza, clareza e menos impulso — sem gritar, sem humilhar, sem ceder por exaustão.' },
            { q: 'Vou conseguir aplicar?', a: 'Sim. O conteúdo foi estruturado para ser simples, direto e fácil de consultar mesmo nos dias mais corridos.' },
            { q: 'O acesso é imediato?', a: 'Sim. Assim que o pagamento for confirmado, você recebe acesso para começar a usar no mesmo dia.' },
            { q: 'Tem garantia?', a: 'Você tem 7 dias de garantia para testar. Se não servir para você, é só pedir o reembolso.' }
          ].map((faq, i) => (
            <motion.div 
              key={i}
              initial="hidden" 
              whileInView="visible" 
              variants={itemVariants}
              className="bg-[#FDFBF7] rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-black text-[#344966] text-sm pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#344966] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#4A5568] font-bold text-sm leading-relaxed px-4 pb-4">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#344966] py-8 px-6 text-center">
        <p className="text-white/80 text-sm font-bold mb-2">
          © 2026 Plano de Ação Anti-Birra. Todos os direitos reservados.
        </p>
        <p className="text-white/60 text-xs">
          Este produto não substitui acompanhamento profissional.
        </p>
      </footer>
    </div>
  );
};
