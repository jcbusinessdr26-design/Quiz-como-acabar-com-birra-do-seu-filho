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
           Saiba exatamente o que fazer nas birras e crises do seu filho sem gritar, sem ceder e sem piorar a situação
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
            Um aplicativo com orientações práticas para mães que querem saber como agir em momentos de birra, enfrentamento e crise sem entrar em desespero, sem ceder por exaustão e sem transformar a situação em algo ainda pior.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              onClick={scrollToOffer}
              className="bg-[#344966] hover:bg-[#1E2A45] text-white py-5 text-lg font-black border-none rounded-[2rem] w-full max-w-sm mx-auto"
            >
              SIM, QUERO COMEÇAR AGORA <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* BLOCO 2 — IDENTIFICAÇÃO */}
      <section className="px-6 py-6 bg-white">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center max-w-lg mx-auto">
            Você tenta manter a calma, mas na hora da birra tudo acontece rápido demais.<br/><br/>
            Seu filho grita, insiste, se joga no chão, enfrenta… e o estresse sobe na mesma velocidade.<br/><br/>
            Você sente que precisa resolver aquilo na hora, mas no fundo… não sabe exatamente o que fazer.<br/><br/>
            E é nesse momento que vem o grito, a culpa depois… ou até aquela sensação de que qualquer atitude pode piorar ainda mais a situação.
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
          O problema não é só a birra em si
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="max-w-lg mx-auto">
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center mb-4">
            O problema não é só a birra em si.<br/>
            É não saber como agir com clareza quando a crise começa.<br/>
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
            A boa notícia é que você não precisa mais tentar resolver a birra no improviso.<br/><br/>
            Quando sabe o que fazer, o que dizer e como agir em cada situação, fica muito mais fácil conduzir a crise com calma, firmeza e clareza com menos estresse, sem gritar, sem ceder e sem piorar tudo.
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
          O Plano de Ação Anti-Birra por Situação foi criado para ajudar você a lidar melhor com as birras e crises do seu filho
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
            O Plano de Ação Anti-Birra por Situação foi criado para ajudar você a lidar melhor com as birras e crises do seu filho, mostrando de forma prática o que fazer, o que dizer e o que evitar em cada momento difícil do dia a dia. Assim, você consegue agir com mais calma, firmeza e menos estresse sem gritar, sem ceder no desespero e sem piorar a situação.
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
              QUERO AGIR MELHOR NAS BIRRAS <ArrowRight className="w-4 h-4 ml-2 inline" />
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
            { icon: Layout, title: 'Orientações rápidas para agir na hora da crise' },
            { icon: ListChecks, title: 'Respostas práticas para diferentes tipos de birra' },
            { icon: FileText, title: 'Frases prontas para saber o que dizer sem gritar' },
            { icon: Volume2, title: 'Áudios guiados para ajudar você a manter a calma' },
            { icon: BookOpen, title: 'Planos por situação para os momentos mais difíceis do dia a dia' },
            { icon: ListChecks, title: 'Checklist prático para reduzir reações impulsivas' },
            { icon: Video, title: 'Videoaulas complementares' },
            { icon: Star, title: 'Como lidar com crises de raiva e ansiedade' },
            { icon: Star, title: 'Como reduzir os gritos e trazer mais calma para dentro de casa' }
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
            { icon: '✓', title: 'Saber o que fazer na hora da birra' },
            { icon: '✓', title: 'Evitar reações impulsivas no desespero' },
            { icon: '✓', title: 'Agir com mais firmeza sem precisar gritar' },
            { icon: '✓', title: 'Reduzir o risco de ceder por exaustão' },
            { icon: '✓', title: 'Conduzir a situação com mais clareza' },
            { icon: '✓', title: 'Se sentir mais segura nas crises do dia a dia' }
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
        
        <div className="space-y-4 max-w-md mx-auto">
          {[
            { icon: Gift, title: 'Bônus 1 — Guia Prático Anti-Birra em PDF', desc: 'Um material de consulta rápida para revisar o que fazer na hora da crise, entender os pontos principais e aplicar com mais segurança no dia a dia.' },
            { icon: Gift, title: 'Bônus 2 — Checklist de 7 Dias para Reduzir Birras', desc: 'Um passo a passo simples para ajudar você a agir com mais clareza ao longo da semana e reduzir respostas no impulso.' },
            { icon: Gift, title: 'Bônus 3 — Plano de Limites por Situação', desc: 'Orientações práticas para momentos como mercado, banho, hora de sair, telas, visitas e outras situações em que a birra costuma aparecer.' },
            { icon: Clock, title: 'Bônus 4 — Acesso por 12 Meses', desc: 'Reveja tudo quando quiser e acompanhe sua evolução com mais tranquilidade ao longo do tempo.' }
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
                SIM, QUERO COMEÇAR AGORA <ArrowRight className="w-5 h-5 ml-2" />
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
            { q: 'Isso funciona para qualquer idade?', a: 'O Plano de Ação Anti-Birra foi pensado para ajudar mães de crianças pequenas em fases em que as birras, enfrentamentos e crises emocionais são mais frequentes.' },
            { q: 'E se eu já tentei de tudo?', a: 'A proposta não é trazer mais teoria, e sim orientar de forma prática o que fazer em cada situação para você sair do improviso.' },
            { q: 'Vou conseguir aplicar?', a: 'Sim. O conteúdo foi pensado para ser prático e fácil de consultar, sem depender de horas de estudo.' },
            { q: 'O acesso é imediato?', a: 'Sim. Assim que o pagamento for confirmado, você recebe acesso para começar a usar no mesmo dia.' },
            { q: 'Tem garantia?', a: 'Sim. Você tem 7 dias de garantia para testar. Se não servir para você, é só pedir o reembolso.' }
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
