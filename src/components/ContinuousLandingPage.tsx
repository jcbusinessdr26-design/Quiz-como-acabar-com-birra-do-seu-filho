import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Layout, 
  Clock, 
  BookOpen, 
  Video, 
  Gift, 
  Lock, 
  ArrowRight,
  XCircle,
  Quote
} from 'lucide-react';
import { Img, Button } from './ui';

interface ContinuousLandingPageProps {
  onPurchase: () => void;
}

export const ContinuousLandingPage: React.FC<ContinuousLandingPageProps> = ({ onPurchase }) => {
  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg-[#FDFBF7] flex flex-col">
      {/* BLOCO 1 — AUTORIDADE / CIÊNCIA */}
      <section className="px-6 py-6 flex flex-col items-center text-center border-b border-gray-100">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-3xl font-black text-[#2D3748] mb-4 tracking-tight">
          Baseado em evidências científicas
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" variants={itemVariants} className="text-[#344966] font-bold text-lg mb-8 opacity-80">
          Uma orientação pensada para ajudar mães a entender melhor o comportamento infantil e aplicar limites com firmeza e carinho.
        </motion.p>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="relative mb-12">
          <div className="absolute inset-0 bg-[#E6D5B8] rounded-full blur-[40px] opacity-30 transform scale-150"></div>
          <Img src="https://res.cloudinary.com/dbwe8j1uq/image/upload/v1775448475/Gemini_Generated_Image_9h5t1g9h5t1g9h5t-removebg-preview_pxqo0g.png" className="w-64 h-64 relative z-10 object-contain drop-shadow-2xl" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#344966]"></div>
          <p className="text-[#4A5568] text-xl leading-relaxed font-extrabold italic opacity-95">
            “Estudos publicados pela Oxford Academic mostram que a disciplina funciona melhor quando existe consistência, regras claras e respostas firmes.”
          </p>
        </motion.div>
      </section>

      {/* BLOCO 2 — PROVA SOCIAL */}
      <section className="px-6 py-8 bg-white">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-4xl font-black text-[#2D3748] mb-6 text-center tracking-tighter">
          Relatos de mães reais
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" variants={itemVariants} className="text-[#344966] font-bold text-xl mb-12 text-center opacity-80 max-w-sm mx-auto">
          Veja o que outras mães dizem depois de aplicar o Plano Anti-Birra.
        </motion.p>
        
        <div className="space-y-8">
          {[
            { text: "“Eu não sabia mais o que fazer, acabava gritando e me sentia péssima depois. Com o plano, aprendi a manter a calma e meu filho parou de testar tanto os limites.”", author: "Mariana S." },
            { text: "“As birras no mercado eram um pesadelo. Hoje eu sei exatamente como agir antes mesmo de começar. Mudou completamente nosso dia a dia.”", author: "Camila R." },
            { text: "“O que mais me ajudou foi entender que não era falta de educação, era só a forma como eu estava reagindo. Agora temos muito mais paz em casa.”", author: "Fernanda L." },
            { text: "“Antes eu cedia para evitar confusão, mas as birras só pioravam. Com as frases prontas e o checklist, me sinto muito mais segura agora.”", author: "Juliana M." }
          ].map((depoimento, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" variants={itemVariants} className="bg-[#FDFBF7] p-8 rounded-[3rem] border border-gray-100 shadow-xl relative">
              <Quote className="absolute -top-4 left-10 w-12 h-12 text-[#344966] opacity-10" />
              <p className="text-[#4A5568] relative z-10 text-lg font-bold leading-relaxed italic mb-6">
                {depoimento.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#344966] flex items-center justify-center font-black text-white text-lg">
                  {depoimento.author[0]}
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-[#344966] text-base">{depoimento.author}</span>
                  <span className="text-xs font-bold text-[#A0AEC0] uppercase tracking-widest">Mãe Real</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCO 3 — PLANO PRONTO */}
      <section className="px-6 py-8 bg-[#FDFBF7] flex flex-col items-center text-center">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-3xl font-black text-[#2D3748] mb-6 tracking-tight">
          O seu Plano de Ação Anti-Birra está pronto.
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" variants={itemVariants} className="text-[#344966] font-bold text-lg mb-8 opacity-80">
          Saia do estresse e da perda de controle para um dia a dia com mais respeito e calma.
        </motion.p>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="w-full mb-8">
          <Img src="https://res.cloudinary.com/dbwe8j1uq/image/upload/v1775415084/Gemini_Generated_Image_fhdg3hfhdg3hfhdg_cbuxtz.webp" className="w-full h-64 object-cover rounded-[2.5rem] shadow-2xl border-4 border-white" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="w-full max-w-sm">
          <Button onClick={onPurchase} className="bg-[#344966] text-white py-6 text-xl font-black rounded-3xl shadow-lg">
            QUERO PARAR DE ESTRESSAR COM MEU FILHO - R$19,90 <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* BLOCO 4 — O QUE MUDA NA PRÁTICA */}
      <section className="px-6 py-8 bg-white">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-3xl font-black text-[#2D3748] mb-10 text-center tracking-tight">
          O que isso ajuda a construir na prática
        </motion.h2>
        <div className="grid grid-cols-1 gap-4">
          {[
            'mais clareza na hora de agir',
            'menos gritos e menos desgaste',
            'mais firmeza para colocar limites',
            'menos estresse no dia a dia',
            'mais calma em situações difíceis',
            'mais segurança para corrigir sem perder o controle'
          ].map((benefit, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" variants={itemVariants} className="flex items-center gap-4 p-5 bg-[#FDFBF7] rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-500 shadow-sm flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="font-black text-[#344966] text-lg">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCO NOVO — O QUE É O PLANO */}
      <section className="px-6 py-8 bg-[#FDFBF7] border-t border-gray-100">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-3xl font-black text-[#2D3748] mb-6 text-center tracking-tight">
          O que é o Plano de Ação Anti-Birra?
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold opacity-90 mb-4">
            O Plano de Ação Anti-Birra é um aplicativo com orientações práticas para ajudar você a lidar com birras e desobediência sem gritar, sem perder o controle e com menos estresse no dia a dia.
          </p>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold opacity-90">
            Nele, você encontra instruções claras sobre o que fazer na hora da birra, o que evitar, como agir com mais firmeza e como parar de reforçar esse comportamento sem perceber.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-3 max-w-md mx-auto bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
          {[
            'acesso ao aplicativo',
            'guia prático em PDF',
            'frases prontas para momentos difíceis',
            'checklist de 7 dias',
            'plano de limites por situação'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-[#344966] font-black">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* BLOCO 5 — OFERTA PRINCIPAL */}
      <section id="offer-section" className="px-6 py-10 bg-[#FDFBF7] relative overflow-hidden">
        <div className="relative z-10 max-w-md mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black mb-4 text-center tracking-tight text-[#2D3748]">
            Tenha acesso ao Plano de Ação Anti-Birra e descubra o que fazer na hora da birra, como impor limites com mais clareza e como agir sem gritar e sem perder o controle.
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" variants={itemVariants} className="text-[#344966] font-bold text-lg mb-10 text-center opacity-80">
            Um aplicativo com orientações práticas, frases prontas, áudios guiados e exercícios simples para ajudar você a lidar com birras e desobediência com mais firmeza e menos estresse.
          </motion.p>
          
          <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="bg-white text-[#2D3748] p-8 sm:p-10 rounded-[3.5rem] shadow-xl border border-gray-100 relative">
            <div className="text-center mb-8">
              <p className="text-[#A0AEC0] font-black text-xs uppercase tracking-[0.3em] mb-4">Pagamento único: acesso vitalício</p>
              <div className="flex flex-col items-center">
                <span className="text-gray-300 line-through text-xl font-black mb-1">De R$197,00</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[#344966]">por R$</span>
                  <span className="text-7xl font-black text-[#2D3748] tracking-tighter">19,90</span>
                  <span className="text-xl font-black text-[#344966]">à vista</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 py-3 px-6 rounded-full mb-8 flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
              <span className="text-blue-600 font-black text-xs uppercase tracking-widest">Aproveite a oferta de lançamento</span>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ 
                scale: { transform: "none" }, 
                animate: { repeat: Infinity, duration: 2, ease: "easeInOut" } 
              }}
            >
              <Button onClick={onPurchase} className="bg-[#344966] hover:bg-[#1E2A45] text-white py-10 text-2xl font-black shadow-[0_20px_50px_rgba(52,73,102,0.3)] border-none rounded-[2.5rem] w-full transition-all duration-300">
                SIM, QUERO COMEÇAR AGORA <ArrowRight className="w-8 h-8 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BLOCO 6 — O QUE VOCÊ VAI RECEBER */}
      <section className="px-6 py-8 bg-white">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-3xl font-black text-[#2D3748] mb-10 text-center tracking-tight">
          O que você recebe ao comprar o Plano de Ação Anti-Birra
        </motion.h2>
        
        <div className="space-y-4 mb-12">
          {[
            { title: 'Acesso ao App Plano de Ação Anti-Birra', sub: 'Orientações práticas para saber como agir na hora da birra, impor limites com mais clareza e parar de reforçar esse comportamento sem perceber.' },
            { title: 'Áudios Guiados para Momentos Difíceis', sub: 'Orientações curtas para ajudar você a saber como agir em situações de birra, desafio e estresse, sem depender de vídeos longos.' },
            { title: 'Guia Prático Anti-Birra em PDF', sub: 'Um material de consulta rápida para revisar o método e aplicar com mais segurança no dia a dia.' },
            { title: 'BÔNUS 1 — Frases Prontas para Situações Difíceis', sub: 'Saiba o que dizer em momentos de birra, desafio e desobediência sem gritar, ameaçar ou ceder.' },
            { title: 'BÔNUS 2 — Checklist de 7 Dias para Reduzir Birras', sub: 'Um passo a passo simples para aplicar no dia a dia e ganhar mais consistência.' },
            { title: 'BÔNUS 3 — Plano de Limites por Situação', sub: 'Orientações práticas para momentos como mercado, banho, visitas, hora de sair e tela.' },
            { title: 'BÔNUS: acesso por 12 meses', sub: 'Reveja quando quiser e acompanhe sua evolução.' }
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" variants={itemVariants} className="flex items-start gap-5 p-5 bg-gray-50 rounded-[2rem] border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#344966] shadow-sm flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-[#2D3748] text-lg leading-tight mb-1">{item.title}</h4>
                {item.sub && <p className="text-[#4A5568] text-sm font-bold opacity-80">{item.sub}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="relative">
          <Img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80" className="w-full h-64 object-cover rounded-[2.5rem] shadow-xl" />
        </motion.div>
      </section>

      {/* BLOCO 7 — GARANTIA */}
      <section className="px-6 py-12 bg-[#FDFBF7]">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="bg-white p-12 rounded-[3.5rem] shadow-2xl border-2 border-green-100 text-center">
          <div className="mb-8">
            <Img src="https://res.cloudinary.com/dynjqdxw8/image/upload/v1773801684/ChatGPT_Image_17_de_mar._de_2026__22_41_10-removebg-preview_cau976.webp" className="w-52 h-52 mx-auto object-contain" />
          </div>
          <h2 className="text-3xl font-black text-[#2D3748] mb-6">Sua satisfação ou seu dinheiro de volta</h2>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold opacity-90">
            Você tem 7 dias de garantia para experimentar o Plano de Ação Anti-Birra. Se por algum motivo você achar que ele não é para você, basta pedir o reembolso e seu investimento será devolvido integralmente.
          </p>
        </motion.div>
      </section>

      {/* BLOCO 8 — FACILIDADE / APLICAÇÃO */}
      <section className="px-6 py-12 bg-white">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-3xl font-black text-[#2D3748] mb-8 text-center tracking-tight">
          Com poucos minutos por dia você já consegue mudar a dinâmica da sua casa
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" variants={itemVariants} className="text-[#4A5568] text-xl leading-relaxed text-center font-bold mb-12 opacity-90">
          E assim, diminuir o estresse, os gritos e a sensação de perda de controle.
        </motion.p>
        
        <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
          <h4 className="font-black text-[#344966] text-xl mb-8 text-center uppercase tracking-widest">Este plano oferece ferramentas para:</h4>
          <ul className="space-y-6">
            {[
              'entender o que realmente causa a birra no seu filho',
              'saber exatamente o que dizer e como agir na hora da crise',
              'impor limites claros sem precisar gritar ou bater',
              'recuperar a paz e a harmonia no dia a dia'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-[#2D3748] font-black text-lg leading-tight">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BLOCO NOVO — FAQ */}
      <section className="px-6 py-12 bg-white">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-3xl font-black text-[#2D3748] mb-12 text-center tracking-tight">
          Perguntas Frequentes
        </motion.h2>
        <div className="space-y-8 max-w-2xl mx-auto">
          {[
            { q: 'Isso funciona para qualquer idade?', a: 'O plano foi pensado para mães de crianças pequenas, principalmente em fases em que birras e desafios aparecem com mais frequência.' },
            { q: 'E se eu já tentei de tudo?', a: 'O objetivo aqui é ajudar você a entender o que pode estar reforçando a birra e aplicar uma resposta mais clara e mais consistente.' },
            { q: 'Vou conseguir aplicar mesmo sem ter muito tempo?', a: 'Sim. O conteúdo foi organizado para ser prático e fácil de consultar no dia a dia.' },
            { q: 'Isso significa ser dura demais com meu filho?', a: 'Não. A proposta é ajudar você a agir com firmeza e clareza, sem gritar, sem humilhar e sem ceder no desespero.' },
            { q: 'O acesso é imediato?', a: 'Sim. Assim que a compra for confirmada, você recebe acesso ao conteúdo.' }
          ].map((faq, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" variants={itemVariants} className="border-b border-gray-100 pb-6">
              <h4 className="font-black text-[#344966] text-lg mb-2">{faq.q}</h4>
              <p className="text-[#4A5568] font-bold opacity-80 leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCO 10 — CTA FINAL */}
      <section className="px-6 py-10 bg-[#0F172A] text-white text-center border-t-[12px] border-[#1E293B]">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-3xl font-black mb-10 leading-tight tracking-tighter">
          Se você quer parar de gritar e começar a educar com calma, esse é o seu próximo passo.
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="bg-white/5 backdrop-blur-2xl p-10 rounded-[3.5rem] mb-12 border border-white/10">
          <p className="text-[#E6D5B8] font-black text-6xl mb-3 tracking-tighter">R$ 27,90</p>
          <p className="text-gray-400 font-black uppercase tracking-[0.4em] text-xs">Pagamento único</p>
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Button onClick={onPurchase} className="bg-gradient-to-r from-[#E6D5B8] to-[#D9C5A0] text-[#344966] py-8 text-2xl font-black shadow-2xl border-none rounded-[2.5rem] w-full uppercase">
            SIM, QUERO COMEÇAR AGORA
          </Button>
        </motion.div>
      </section>
    </div>
  );
};
