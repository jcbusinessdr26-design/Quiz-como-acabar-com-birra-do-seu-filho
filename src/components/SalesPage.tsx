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
  Star,
  MessageCircle,
  Calendar
} from 'lucide-react';
import { Img, Button } from './ui';

interface SalesPageProps {
  onPurchase: () => void;
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
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
          style={{ filter: 'brightness(0) invert(1)' }}
          width={200}
          height={60}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* ESPAÇO PARA O CABEÇALHO FIXO */}
      <div className="h-[76px]"></div>

       {/* BLOCO 1 — HERO */}
      <section className="px-6 py-4 bg-[#FDFBF7] flex flex-col items-center text-center max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D3748] mb-2 leading-tight text-center max-w-2xl mx-auto">
            Pare de travar na hora da birra do seu filho. Saiba exatamente como reagir sem gritar, sem ceder e sem perder o controle
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={itemVariants}
          className="w-full mb-1 max-w-2xl"
        >
          <Img 
            src="https://res.cloudinary.com/dynjqdxw8/image/upload/f_auto,q_auto,w_800/v1775955318/1775955056845_rfwdgq.webp" 
            className="w-full object-contain"
            loading="eager"
            width={800}
            height={600}
            alt="Mãe lidando com birra do filho"
          />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="w-full">
          <p className="text-[#4A5568] font-bold text-base leading-relaxed text-center mb-4 max-w-md mx-auto">
            Um aplicativo simples que te ensina, de forma prática, como agir automaticamente na hora da birra, mesmo quando tudo acontece rápido demais.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <Button 
              onClick={scrollToOffer}
              className="bg-[#344966] hover:bg-[#1E2A45] text-white py-5 text-lg font-black border-none rounded-[2rem] w-full max-w-sm mx-auto"
            >
              QUERO PARAR DE TRAVAR NA HORA DA BIRRA <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
          <p className="text-[#A0AEC0] text-xs font-bold mt-3 text-center tracking-wide">
            Acesso imediato • Funciona no celular • Pagamento único
          </p>
        </motion.div>
      </section>

      {/* BLOCO 2 — IDENTIFICAÇÃO */}
      <section className="px-6 py-4 bg-white max-w-3xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D3748] mb-4 text-center leading-tight">
            Se o seu filho faz birra<br/>e você sente que, na hora, simplesmente não sabe como reagir
          </h2>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center">
            Você tenta manter a calma<br/>Mas tudo acontece rápido demais<br/><br/>
            Ele grita<br/>Se joga no chão<br/>Te enfrenta<br/><br/>
            E pior<br/>as pessoas começam a olhar<br/><br/>
            Você sente o julgamento<br/>Parece que todo mundo está te observando<br/><br/>
            E naquele momento, você<br/><br/>
            Grita e depois se culpa<br/>Cede só para acabar logo<br/>Ou trava sem saber o que fazer
          </p>
        </motion.div>
      </section>

      {/* BLOCO 3 — AGITAÇÃO DA DOR */}
      <section className="px-6 py-4 bg-[#FDFBF7] max-w-3xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="w-full mb-1 max-w-xl mx-auto">
          <Img 
              src="https://res.cloudinary.com/dbwe8j1uq/image/upload/f_auto,q_auto,w_600/v1775587542/1775587033633_z8f5su.webp" 
            className="w-full object-contain rounded-lg"
            />
        </motion.div>
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D3748] mb-3 text-center leading-tight">
          O problema não é só a birra.
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center mb-4">
            O problema é não saber o que fazer quando tudo acontece rápido.<br/>
            Quando você improvisa, entra em um ciclo:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
          {[
            { icon: '📢', title: 'Você se estressa' },
            { icon: '🏳️', title: 'Reage no impulso' },
            { icon: '📉', title: 'Sente que piorou a situação' },
            { icon: '😔', title: 'Se culpa depois' },
            { icon: '❓', title: 'E continua sem saber o que fazer da próxima vez' }
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
      <section className="px-6 py-4 bg-[#344966] max-w-3xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 text-center leading-tight">
            Você não precisa continuar passando por isso
          </h2>
          <p className="text-white text-lg leading-relaxed font-bold text-center">
            O que falta não é paciência<br/>Não é esforço<br/>E nem tentar mais<br/><br/>
            O que falta é saber como reagir automaticamente
          </p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="w-full mt-3 max-w-xl mx-auto">
          <div className="flex justify-center gap-8 mb-2">
            <span className="text-white font-black text-lg">ANTES</span>
            <span className="text-white font-black text-lg">DEPOIS</span>
          </div>
          <Img 
            src="https://res.cloudinary.com/dbwe8j1uq/image/upload/f_auto,q_auto,w_600/v1775494552/Gemini_Generated_Image_fhdg3hfhdg3hfhdg_1_mckh1z.webp" 
            className="w-full object-contain rounded-sm"
            width={600}
            height={400}
            alt="Comparativo antes e depois de aplicar o Plano Anti-Birra"
          />
        </motion.div>
      </section>

      {/* BLOCO 5 — MECANISMO */}
      <section className="px-6 py-4 bg-[#FDFBF7] max-w-3xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D3748] mb-3 text-center leading-tight">
          Plano de Ação Anti-Birra
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center mb-4">
            Isso não é um curso longo e teórico<br/><br/>
            É um atalho prático que treina você para saber exatamente como agir sem precisar pensar, travar ou improvisar<br/><br/>
            Você aprende antes<br/>E na hora da birra, simplesmente reage do jeito certo<br/><br/>
            Você não precisa abrir o app na hora<br/>Você já vai saber como agir<br/><br/>
            Funciona como um SOS mental que ativa automaticamente
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
              QUERO TER CONTROLE NA HORA DA BIRRA <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* BLOCO 6 — SISTEMA ANTI-BIRRA DE 3 ETAPAS */}
      <section className="px-6 py-4 bg-[#344966] max-w-4xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 text-center leading-tight">
          Um sistema simples de 3 passos
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" variants={itemVariants} className="text-white/80 text-base font-bold text-center mb-6">
          Você não precisa mais improvisar ou reagir no impulso.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { 
              title: '1. Parar de travar na hora', 
              text: 'Você aprende como não entrar em desespero quando a birra começa.',
              color: 'bg-[#2D3E57]'
            },
            { 
              title: '2. Saber exatamente o que dizer', 
              text: 'Respostas simples que evitam grito, confronto e desgaste.',
              color: 'bg-[#2D3E57]'
            },
            { 
              title: '3. Reduzir as próximas crises', 
              text: 'Ajustes práticos que diminuem a frequência das birras.',
              color: 'bg-[#2D3E57]'
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden" 
              whileInView="visible" 
              variants={itemVariants}
              className={`${item.color} p-5 rounded-[1.5rem] border border-[#3D4E67] text-center`}
            >
              <h4 className="font-black text-white text-lg mb-2">{item.title}</h4>
              <p className="text-white/80 text-sm font-bold">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCO 7 — TANGIBILIDADE POR SITUAÇÃO */}
      <section className="px-6 py-4 bg-[#FDFBF7] max-w-3xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D3748] mb-4 text-center leading-tight">
          Dentro do app, você encontra orientações práticas por situação
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-3 max-w-md mx-auto">
          {[
            'Ele se joga no chão',
            'Começa a gritar',
            'Te enfrenta',
            'Não aceita não',
            'Faz birra em público',
            'Não quer dormir',
            'Você sente que vai explodir'
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden" 
              whileInView="visible" 
              variants={itemVariants}
              className="flex items-center gap-3 p-4 bg-white rounded-[1rem] border border-gray-100"
            >
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="font-black text-[#344966] text-base">{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

{/* BLOCO 8 — VÍDEO */}
      <section className="px-6 py-4 bg-[#344966] max-w-3xl mx-auto">
        <p className="text-white font-black text-center text-base uppercase tracking-widest mb-3">Veja o Plano Anti-Birra por dentro</p>
        <p className="text-white/80 text-sm font-bold text-center mb-4">
          Em poucos segundos, veja como o app funciona e o que você vai encontrar dentro dele.
        </p>

        <img 
          src="https://res.cloudinary.com/dbwe8j1uq/image/upload/v1776128627/o_que_dentro_tem_dentro_do_anti_birra_oxqate.webp"
          alt="O que tem dentro do Plano Anti-Birra"
          width={520}
          height={400}
          loading="lazy"
          className="w-full rounded-2xl shadow-lg max-w-[520px] mx-auto mb-4"
        />

        <p className="text-white/90 text-lg leading-relaxed font-bold text-center mt-4 mb-4">
          Assim, quando acontecer<br/>você já sabe o que fazer<br/>não precisa pensar<br/>não reage no impulso
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="block"
        >
          <Button 
            onClick={scrollToOffer}
            className="bg-white text-[#344966] hover:bg-gray-100 py-3 text-base font-black border-none rounded-[2rem] w-full max-w-sm mx-auto"
          >
            QUERO TER CONTROLE NA HORA DA BIRRA <ArrowRight className="w-4 h-4 ml-2 inline" />
          </Button>
        </motion.div>
      </section>

      {/* BLOCO 9 — O QUE A PESSOA RECEBE */}
      <section className="px-6 py-4 bg-[#344966] max-w-3xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 text-center leading-tight">
          O que tem dentro
        </motion.h2>
        
        <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto">
          {[
            { icon: Layout, title: 'O que fazer em cada situação', bg: 'bg-amber-50', iconBg: 'bg-amber-100' },
            { icon: FileText, title: 'O que evitar', bg: 'bg-red-50', iconBg: 'bg-red-100' },
            { icon: MessageCircle, title: 'Frases prontas para momentos críticos', bg: 'bg-blue-50', iconBg: 'bg-blue-100' },
            { icon: Volume2, title: 'Áudios para controle emocional', bg: 'bg-purple-50', iconBg: 'bg-purple-100' },
            { icon: Calendar, title: 'Plano prático de 7 dias', bg: 'bg-cyan-50', iconBg: 'bg-cyan-100' },
            { icon: Play, title: 'Videoaulas complementares', bg: 'bg-pink-50', iconBg: 'bg-pink-100' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden" 
              whileInView="visible" 
              variants={itemVariants}
              className={`flex flex-col items-center gap-2 p-3 ${item.bg} rounded-[1rem] border border-gray-100`}
            >
              <div className={`w-10 h-10 ${item.iconBg} rounded-full flex items-center justify-center`}>
                <item.icon className="w-5 h-5 text-[#344966]" />
              </div>
              <span className="font-black text-[#344966] text-xs text-center">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCO 10 — BENEFÍCIOS */}
      <section className="px-6 py-4 bg-[#FDFBF7] max-w-3xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D3748] mb-4 text-center leading-tight">
          Com isso, você consegue:
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-3 max-w-md mx-auto">
          {[
            { title: 'Parar de reagir no impulso', bg: 'bg-green-50', border: 'border-green-200' },
            { title: 'Ter mais controle', bg: 'bg-blue-50', border: 'border-blue-200' },
            { title: 'Saber como agir sem travar', bg: 'bg-amber-50', border: 'border-amber-200' },
            { title: 'Evitar gritos e arrependimento', bg: 'bg-purple-50', border: 'border-purple-200' },
            { title: 'Reduzir as crises', bg: 'bg-cyan-50', border: 'border-cyan-200' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden" 
              whileInView="visible" 
              variants={itemVariants}
              className={`flex items-center gap-4 p-4 ${item.bg} rounded-[1.5rem] border ${item.border}`}
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <span className="font-black text-[#344966] text-base">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCO 11 — PROVA LÓGICA */}
      <section className="px-6 py-4 bg-[#344966] max-w-3xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 text-center leading-tight">
          Quando você tem uma resposta pronta
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-white/90 text-lg leading-relaxed font-bold text-center">
            você não trava<br/>não perde o controle<br/>não entra em desespero<br/><br/>
            E tudo muda
          </p>
        </motion.div>
      </section>

      {/* BLOCO 12 — BÔNUS */}
      <section className="px-6 py-4 bg-white max-w-3xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D3748] mb-4 text-center leading-tight">
          Bônus especiais
        </motion.h2>
        
        <div className="space-y-3 max-w-md mx-auto">
          {[
            { icon: Gift, title: 'O que dizer e o que evitar na hora da birra', desc: 'Consulta rápida com o que fazer, o que dizer e o que evitar na hora da crise.' },
            { icon: Gift, title: 'Plano de 7 dias', desc: 'Passo a passo para agir com mais clareza e reduzir reações no impulso durante a semana.' },
            { icon: Gift, title: 'Plano de limites por situação', desc: 'Orientações práticas para mercado, banho, telas, hora de sair, visitas e mais.' },
            { icon: Clock, title: 'Acesso por 12 meses', desc: 'Consulte quando quiser, quantas vezes precisar, direto do celular.' }
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
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="mt-4 max-w-sm mx-auto"
        >
          <Button 
            onClick={scrollToOffer}
            className="bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-black border-none rounded-[2rem] w-full"
          >
            Quero o Anti-birra com todos os Bônus <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </section>
 
      {/* BLOCO 13 — PRÉ-FECHAMENTO */}
      <section className="px-6 py-4 bg-[#344966] max-w-3xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 text-center leading-tight">
          Se você continuar tentando resolver tudo no improviso…
        </motion.h2>
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto mb-4">
          {[
            { emoji: '😩', text: 'Estresse', bg: 'bg-red-900/50', border: 'border-red-700' },
            { emoji: '😔', text: 'Culpa', bg: 'bg-amber-900/50', border: 'border-amber-700' },
            { emoji: '🥵', text: 'Desgaste', bg: 'bg-blue-900/50', border: 'border-blue-700' },
            { emoji: '😞', text: 'Sensação de estar fazendo tudo errado', bg: 'bg-purple-900/50', border: 'border-purple-700' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden" 
              whileInView="visible" 
              variants={itemVariants}
              className={`flex items-center justify-center gap-2 p-3 ${item.bg} rounded-[1rem] border ${item.border} text-center min-h-[52px]`}
            >
              <span className="text-xl">{item.emoji}</span>
              <span className="font-black text-white text-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-white text-lg leading-relaxed font-bold text-center">
            😊 Mas quando você sabe o que fazer, tudo muda.
          </p>
        </motion.div>
      </section>

      {/* BLOCO 14 — BLOCO DE VALOR */}
      <section className="px-6 py-4 bg-white max-w-3xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D3748] mb-4 text-center leading-tight">
          Na próxima birra, você
        </motion.h2>
        <div className="grid grid-cols-1 gap-3 max-w-md mx-auto">
          {[
            { emoji: '🤔', text: 'Não trava', bg: 'bg-green-50', border: 'border-green-200' },
            { emoji: '💬', text: 'Sabe o que dizer', bg: 'bg-blue-50', border: 'border-blue-200' },
            { emoji: '🚫', text: 'Evita piorar', bg: 'bg-red-50', border: 'border-red-200' },
            { emoji: '✨', text: 'Mantém o controle', bg: 'bg-amber-50', border: 'border-amber-200' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden" 
              whileInView="visible" 
              variants={itemVariants}
              className={`flex items-center gap-3 p-4 ${item.bg} rounded-[1rem] border ${item.border}`}
            >
              <span className="text-xl">{item.emoji}</span>
              <span className="font-black text-[#344966] text-base">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCO 15 — OFERTA */}
      <section id="offer-section" className="px-6 py-4 bg-[#344966]">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="max-w-md mx-auto">
          <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="bg-white p-6 rounded-[2.5rem] shadow-2xl border border-gray-100 text-center">
            <div className="mb-4">
              <p className="text-[#A0AEC0] font-black text-lg uppercase tracking-widest mb-2">Acesso completo ao Plano Anti-Birra com todos os bônus</p>
            </div>
            
            <Img 
              src="https://res.cloudinary.com/dynjqdxw8/image/upload/f_auto,q_auto,w_400/v1775955320/1775955049021_urihse.webp" 
              className="w-full object-contain mb-6" 
            />
            
            <div className="flex flex-col items-center mb-6">
              <span className="text-gray-300 line-through text-xl sm:text-2xl font-black mb-2">De R$147,90</span>
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 mb-2">
                <span className="text-lg sm:text-2xl font-black text-[#344966]">Por apenas</span>
                <span className="text-4xl sm:text-6xl font-black text-[#2D3748] tracking-tight">R$19,90</span>
              </div>
              <span className="text-lg sm:text-xl font-black text-[#344966]">à vista</span>
            </div>

            <p className="text-[#4A5568] font-bold text-sm mb-4 text-center">
              Oferta exclusiva de acesso inicial por tempo limitado<br/><br/>
              Você está acessando com valor reduzido enquanto o plano ainda está sendo liberado para novas mães<br/><br/>
              Menos que um lanche para ter mais controle nas situações mais difíceis com seu filho
            </p>

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
                SIM, QUERO PARAR DE TRAVAR NAS BIRRAS <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            
            <div className="flex flex-col gap-2 items-center justify-center text-green-600 font-bold text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Compra 100% segura
              </div>
              <p className="text-xs">Acesso imediato • Funciona no celular • Pagamento único</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* BLOCO 16 — GARANTIA */}
      <section className="px-6 py-6 bg-[#FDFBF7]">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="bg-white p-8 rounded-[2.5rem] shadow-xl border-2 border-green-100 text-center max-w-md mx-auto">
          <div className="mb-4">
              <img 
              src="https://res.cloudinary.com/dynjqdxw8/image/upload/f_auto,q_auto,w_200/v1773801684/ChatGPT_Image_17_de_mar._de_2026__22_41_10-removebg-preview_cau976.webp" 
              alt="Selo de Garantia" 
              className="w-48 h-48 mx-auto object-contain" 
            />
          </div>
          <h3 className="text-2xl font-black text-[#2D3748] mb-4">Teste por 7 dias, sem risco.</h3>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold">
            Se você não sentir mais clareza para lidar com as birras do seu filho, basta pedir o reembolso dentro do prazo.
          </p>
        </motion.div>
      </section>

      {/* BLOCO 17 — FAQ */}
      <section className="px-6 py-6 bg-white">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl font-black text-[#2D3748] mb-8 text-center leading-tight">
          Dúvidas Frequentes
        </motion.h2>
        
        <div className="space-y-3 max-w-lg mx-auto">
          {[
            { q: 'Isso funciona para qualquer idade?', a: 'O plano foi pensado para mães de crianças de 2 a 6 anos, especialmente entre 2 e 4 anos, que é quando as birras e crises são mais frequentes.' },
            { q: 'E se eu já tentei de tudo?', a: 'Talvez o que faltou não tenha sido esforço. Faltou um plano claro para agir na hora certa, com orientação por situação e sem precisar improvisar.' },
            { q: 'Preciso usar na hora da birra?', a: 'Não é um curso para assistir horas de conteúdo. É um plano para consultar na hora da crise, em minutos, direto pelo celular.' },
            { q: 'Vou conseguir aplicar?', a: 'Sim. O conteúdo foi organizado para ser simples, direto e fácil de consultar mesmo nos dias mais corridos e estressantes.' },
            { q: 'O acesso é imediato?', a: 'Sim. Assim que o pagamento for confirmado, você recebe acesso para começar a usar no mesmo dia, direto do celular.' },
            { q: 'Tem garantia?', a: 'Você tem 7 dias de garantia para testar com calma. Se não servir para você, é só pedir o reembolso e seu dinheiro será devolvido.' }
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
