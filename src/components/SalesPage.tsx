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
      {/* BLOCO 1 — HERO */}
      <section className="px-6 py-8 bg-[#FDFBF7] flex flex-col items-center text-center">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="w-full">
          <h2 className="text-2xl sm:text-3xl font-black text-[#2D3748] mb-4 leading-tight text-center">
           Saiba exatamente o que fazer nas birras e crises do seu filho sem gritar, sem ceder e sem piorar a situação
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={itemVariants}
          className="w-full mb-6"
        >
          <Img 
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80" 
            className="w-full h-72 object-cover" 
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
      <section className="px-6 py-10 bg-white">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="w-full mb-6">
          <Img 
              src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=800&q=80" 
              className="w-full h-56 object-cover" 
            />
        </motion.div>
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
      <section className="px-6 py-10 bg-[#FDFBF7]">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black text-[#2D3748] mb-6 text-center leading-tight">
          O problema não é só a birra em si
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="max-w-lg mx-auto">
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center mb-8">
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
      <section className="px-6 py-10 bg-[#344966]">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="w-full mb-6">
          <Img 
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80" 
            className="w-full h-48 object-cover" 
          />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-white text-lg leading-relaxed font-bold text-center max-w-lg mx-auto">
            A boa notícia é que você não precisa mais tentar resolver a birra no improviso.<br/><br/>
            Quando sabe o que fazer, o que dizer e como agir em cada situação, fica muito mais fácil conduzir a crise com calma, firmeza e clareza com menos estresse, sem gritar, sem ceder e sem piorar tudo.
          </p>
        </motion.div>
      </section>

      {/* BLOCO 5 — MECANISMO */}
      <section className="px-6 py-10 bg-[#FDFBF7]">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black text-[#2D3748] mb-6 text-center leading-tight">
          O Plano de Ação Anti-Birra por Situação foi criado para ajudar você a lidar melhor com as birras e crises do seu filho
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="w-full mb-6">
          <div className="bg-white p-6 max-w-xs mx-auto">
            <Img 
              src="https://res.cloudinary.com/dbwe8j1uq/image/upload/v1775498332/ChatGPT_Image_6_de_abr._de_2026_13_54_08_1_pfzlv0.webp" 
              className="w-full h-56 object-cover" 
            />
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center max-w-lg mx-auto">
            O Plano de Ação Anti-Birra por Situação foi criado para ajudar você a lidar melhor com as birras e crises do seu filho, mostrando de forma prática o que fazer, o que dizer e o que evitar em cada momento difícil do dia a dia.<br/><br/>
            Assim, você consegue agir com mais calma, firmeza e menos estresse sem gritar, sem ceder no desespero e sem piorar a situação.
          </p>
        </motion.div>
      </section>

      {/* BLOCO 6 — O QUE A PESSOA RECEBE */}
      <section className="px-6 py-10 bg-white">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black text-[#2D3748] mb-8 text-center leading-tight">
          No app, você encontra apoio prático para agir melhor nas birras e crises do seu filho
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-3 max-w-md mx-auto">
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
              className="flex items-center gap-4 p-4 bg-[#FDFBF7] rounded-[1.5rem] border border-gray-100"
            >
              <item.icon className="w-6 h-6 text-[#344966] flex-shrink-0" />
              <span className="font-black text-[#344966] text-base">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCO 7 — BENEFÍCIOS */}
      <section className="px-6 py-10 bg-[#FDFBF7]">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black text-[#2D3748] mb-8 text-center leading-tight">
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
      <section className="px-6 py-10 bg-[#344966]">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black text-white mb-6 text-center leading-tight">
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
      <section className="px-6 py-10 bg-white">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black text-[#2D3748] mb-8 text-center leading-tight">
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
              <item.icon className="w-8 h-8 text-[#344966] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-black text-[#344966] text-base mb-1">{item.title}</h4>
                <p className="text-[#4A5568] text-sm font-bold opacity-80">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCO 10 — BLOCO DE VALOR / ANCORAGEM */}
      <section className="px-6 py-10 bg-[#FDFBF7]">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black text-[#2D3748] mb-6 text-center leading-tight">
          Tudo isso foi pensado para tirar você do improviso na hora da crise
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center max-w-lg mx-auto">
            Se você tivesse que descobrir tudo isso sozinha, provavelmente levaria muito mais tempo testando, errando, se estressando e tentando encontrar a melhor forma de agir em cada situação com seu filho.<br/><br/>
            E mesmo assim, a dúvida continuaria:<br/><br/>
            "Será que estou fazendo certo?"<br/>
            "Será que eu deveria ter falado diferente?"<br/>
            "Será que eu piorei a situação sem perceber?"<br/><br/>
            O Plano de Ação Anti-Birra foi criado justamente para encurtar esse caminho e ajudar você a saber o que fazer, o que dizer e como agir com mais calma, firmeza e menos estresse nos momentos mais difíceis do dia a dia.<br/><br/>
            <strong>Hoje, você não está levando apenas um app.</strong><br/><br/>
            Você está tendo acesso a um conjunto prático de orientações, frases prontas, áudios guiados, planos por situação, videoaulas complementares e bônus que ajudam você a lidar melhor com as birras e crises do seu filho sem improvisar, sem ceder no desespero e sem piorar a situação.
          </p>
        </motion.div>
      </section>

      {/* BLOCO 11 — PREÇO + CTA */}
      <section id="offer-section" className="px-6 py-10 bg-[#344966]">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="max-w-md mx-auto">
          <motion.div 
            className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 text-center"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <p className="text-[#A0AEC0] font-black text-sm uppercase tracking-widest">Pagamento único</p>
              <p className="text-[#A0AEC0] font-black text-xs uppercase tracking-widest">Acesso por 12 meses</p>
            </div>
            
            <div className="flex flex-col items-center mb-6">
              <span className="text-gray-300 line-through text-2xl font-black mb-2">De R$147,99</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-[#344966]">por apenas</span>
                <span className="text-6xl font-black text-[#2D3748] tracking-tight">R$19,90</span>
              </div>
              <span className="text-xl font-black text-[#344966]">à vista</span>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                onClick={onPurchase}
                className="bg-[#344966] hover:bg-[#1E2A45] text-white py-5 text-lg font-black shadow-[0_10px_30px_rgba(52,73,102,0.3)] border-none rounded-[2rem] w-full mb-4"
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
      <section className="px-6 py-10 bg-[#FDFBF7]">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="bg-white p-8 rounded-[2.5rem] shadow-xl border-2 border-green-100 text-center max-w-md mx-auto">
          <div className="mb-4">
            <ShieldCheck className="w-16 h-16 mx-auto text-green-500" />
          </div>
          <h3 className="text-2xl font-black text-[#2D3748] mb-4">7 dias de garantia</h3>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold">
            Você ainda conta com 7 dias de garantia para testar com calma.<br/>
            Se achar que o Plano de Ação Anti-Birra não é para você, basta pedir o reembolso dentro do prazo e seu investimento será devolvido.
          </p>
        </motion.div>
      </section>

      {/* BLOCO 13 — FAQ */}
      <section className="px-6 py-10 bg-white">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black text-[#2D3748] mb-8 text-center leading-tight">
          Dúvidas Frequentes
        </motion.h2>
        
        <div className="space-y-3 max-w-lg mx-auto">
          {[
            { q: 'Isso funciona para qualquer idade?', a: 'O Plano de Ação Anti-Birra foi pensado para ajudar mães de crianças pequenas em fases em que as birras, enfrentamentos e crises emocionais são mais frequentes. As orientações ajudam principalmente no dia a dia com crianças que ainda estão aprendendo a lidar com frustração, limites e regulação emocional.' },
            { q: 'E se eu já tentei de tudo e nada parece funcionar?', a: 'Muitas mães chegam assim: cansadas, estressadas e com a sensação de que já testaram várias coisas sem resultado. A proposta do Plano de Ação Anti-Birra não é trazer mais teoria, e sim orientar de forma prática o que fazer, o que dizer e o que evitar em cada situação para você sair do improviso.' },
            { q: 'Vou conseguir aplicar mesmo sem ter muito tempo?', a: 'Sim. O conteúdo foi pensado para ser prático e fácil de consultar. A ideia é que você consiga acessar orientações rápidas, frases prontas, áudios e materiais de apoio sem depender de horas de estudo ou vídeos longos.' },
            { q: 'Isso significa ser dura demais com meu filho?', a: 'Não. O objetivo não é incentivar rigidez excessiva, gritos ou punições descontroladas. A proposta é ajudar você a agir com mais calma, firmeza e clareza, colocando limites sem ceder no desespero e sem piorar a situação.' },
            { q: 'O acesso é imediato?', a: 'Sim. Assim que o pagamento for confirmado, você recebe acesso ao Plano de Ação Anti-Birra para começar a usar no mesmo dia.' },
            { q: 'Por quanto tempo terei acesso?', a: 'Você terá acesso por 12 meses, para consultar o material sempre que precisar e acompanhar sua evolução ao longo do tempo.' },
            { q: 'E quando parece que nada acalma meu filho?', a: 'Existem situações em que a crise parece fugir completamente do controle. Nesses momentos, ter clareza sobre como agir, o que evitar e como se posicionar faz diferença. O plano ajuda justamente a reduzir o improviso e dar mais direção para esses momentos difíceis.' },
            { q: 'Isso serve para crises mais intensas?', a: 'O Plano de Ação Anti-Birra foi pensado para orientar situações comuns de birra, enfrentamento e momentos difíceis do dia a dia. Ele não substitui acompanhamento profissional quando existem sinais mais intensos ou persistentes que precisem de avaliação específica.' },
            { q: 'Preciso assistir tudo antes de começar a aplicar?', a: 'Não. A proposta é justamente o contrário: você já consegue começar a aplicar com o que estiver mais alinhado à sua necessidade do momento, usando as orientações rápidas, frases prontas e planos por situação.' },
            { q: 'Tem garantia?', a: 'Sim. Você tem 7 dias de garantia para testar com calma. Se dentro desse prazo achar que o Plano de Ação Anti-Birra não é para você, basta pedir o reembolso.' }
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
    </div>
  );
};
