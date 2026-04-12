import React, { useState, useRef } from 'react';
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
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleVideo = () => {
    if (!showVideo && videoRef.current) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
    setShowVideo(!showVideo);
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
            Pare de se estressar sem saber o que fazer nas birras do seu filho.
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
            Um plano prático com orientações claras sobre o que fazer, o que dizer e o que evitar para lidar melhor com as birras do seu filho.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              onClick={scrollToOffer}
              className="bg-[#344966] hover:bg-[#1E2A45] text-white py-5 text-lg font-black border-none rounded-[2rem] w-full max-w-sm mx-auto"
            >
              Quero saber como agir nas birras do meu filho <ArrowRight className="w-5 h-5 ml-2" />
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
            Se o seu filho grita, insiste, se joga no chão ou enfrenta você… e você sente que já tentou de tudo, mas ainda não sabe o que fazer…
          </h2>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center">
            Você tenta manter a calma, mas na hora da birra tudo acontece rápido demais.<br/><br/>
            Seu filho grita, insiste, se joga no chão, enfrenta… e o estresse sobe na mesma velocidade.<br/><br/>
            E é nesse momento que normalmente acontece uma destas coisas:<br/><br/>
            → Você grita e depois se culpa<br/>
            → Você cede só para aquilo acabar logo<br/>
            → Você tenta resolver e piora a situação
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
            Você não precisa continuar improvisando cada vez que seu filho faz birra.
          </h2>
          <p className="text-white text-lg leading-relaxed font-bold text-center">
            Quando sabe o que fazer, o que dizer e o que evitar, fica muito mais fácil lidar com a situação sem gritar, sem ceder e sem piorar tudo.
          </p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="w-full mt-3 max-w-xl mx-auto">
          <div className="flex justify-center gap-8 mb-2">
            <span className="text-red-400 font-black text-lg">-- ANTES --</span>
            <span className="text-green-400 font-black text-lg">-- DEPOIS --</span>
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
            Em vez de improvisar, se estressar e acabar reagindo do jeito errado, você aprende a saber o que fazer nas birras do seu filho e a reduzir esse comportamento com mais calma, firmeza e clareza.
          </p>
          <p className="text-[#4A5568] text-base leading-relaxed font-bold text-center mb-5">
            Baseado em princípios da psicologia infantil e técnicas de regulação emocional aplicadas de forma prática no dia a dia.
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

      {/* BLOCO 6 — SISTEMA ANTI-BIRRA DE 3 ETAPAS */}
      <section className="px-6 py-4 bg-[#344966] max-w-4xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 text-center leading-tight">
          Como o Plano Anti-Birra funciona na prática
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" variants={itemVariants} className="text-white/80 text-base font-bold text-center mb-6">
          Você não precisa mais improvisar ou reagir no impulso. O plano segue um sistema simples de 3 etapas para ajudar você a lidar melhor com as birras do seu filho.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            { 
              title: '1. Interromper o caos', 
              text: 'Saiba o que fazer para não piorar a situação no momento da birra.',
              color: 'bg-[#2D3E57]'
            },
            { 
              title: '2. Responder com firmeza', 
              text: 'Descubra o que dizer e como agir sem gritar e sem ceder no desespero.',
              color: 'bg-[#2D3E57]'
            },
            { 
              title: '3. Reduzir as próximas crises', 
              text: 'Aplique treinos simples e ajustes práticos para diminuir as birras no dia a dia.',
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
          Situações em que você vai saber o que fazer:
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-3 max-w-md mx-auto">
          {[
            'Quando ele se joga no chão',
            'Quando começa a gritar',
            'Quando enfrenta você',
            'Quando não aceita "não"',
            'Quando faz birra em público',
            'Quando você sente que vai explodir'
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

        <button 
          onClick={toggleVideo}
          aria-label={showVideo ? "Parar vídeo" : "Assistir vídeo de demonstração"}
          className="block max-w-[520px] mx-auto mb-4 relative cursor-pointer w-full"
          type="button"
        >
          {!showVideo ? (
            <>
              <img 
                src="https://res.cloudinary.com/dynjqdxw8/video/upload/w_520,c_fill,so_0/v1775994612/v%C3%ADdeo_land_page_obgsry.jpg"
                alt="Clique para assistir o vídeo do Plano Anti-Birra"
                width={520}
                height={292}
                loading="lazy"
                className="w-full rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 text-[#344966] ml-1" />
                </div>
              </div>
            </>
          ) : (
            <video 
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              className="w-full rounded-2xl shadow-lg"
              onClick={(e) => e.currentTarget.pause()}
            >
              <source src="https://res.cloudinary.com/dynjqdxw8/video/upload/v1775994612/v%C3%ADdeo_land_page_obgsry.mp4" type="video/mp4" />
            </video>
          )}
        </button>

        <p className="text-white/90 text-lg leading-relaxed font-bold text-center mt-4 mb-0">
          Mais do que um aplicativo comum, o Plano de Ação Anti-Birra ajuda você a entender como agir com mais calma, firmeza e menos estresse quando seu filho faz birra.
        </p>
      </section>

      {/* BLOCO 9 — O QUE A PESSOA RECEBE */}
      <section className="px-6 py-4 bg-[#344966] max-w-3xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 text-center leading-tight">
          No app, você encontra apoio prático para saber o que fazer nas birras do seu filho.
        </motion.h2>
        
        <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto">
          {[
            { icon: Layout, title: 'Orientações rápidas por situação', bg: 'bg-amber-50', iconBg: 'bg-amber-100' },
            { icon: ListChecks, title: 'O que fazer', bg: 'bg-green-50', iconBg: 'bg-green-100' },
            { icon: FileText, title: 'O que evitar', bg: 'bg-red-50', iconBg: 'bg-red-100' },
            { icon: MessageCircle, title: 'Frases prontas para saber o que dizer', bg: 'bg-blue-50', iconBg: 'bg-blue-100' },
            { icon: Volume2, title: 'Áudios guiados para não reagir no impulso', bg: 'bg-purple-50', iconBg: 'bg-purple-100' },
            { icon: Calendar, title: 'Plano de 7 dias', bg: 'bg-cyan-50', iconBg: 'bg-cyan-100' },
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
            { title: 'Parar de gritar no impulso', bg: 'bg-red-50', border: 'border-red-200' },
            { title: 'Parar de ceder por desespero', bg: 'bg-red-50', border: 'border-red-200' },
            { title: 'Saber o que fazer nas birras do seu filho', bg: 'bg-red-50', border: 'border-red-200' },
            { title: 'Agir com mais firmeza sem piorar a situação', bg: 'bg-red-50', border: 'border-red-200' },
            { title: 'Começar a reduzir esse comportamento com mais consistência', bg: 'bg-red-50', border: 'border-red-200' }
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
          Quando a mãe sabe o que fazer, a chance de reagir no impulso diminui.
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-white/90 text-lg leading-relaxed font-bold text-center">
            E quando responde com mais clareza e firmeza, a tendência é lidar melhor com as birras e reduzir esse comportamento com o tempo.
          </p>
        </motion.div>
      </section>

      {/* BLOCO 12 — BÔNUS */}
      <section className="px-6 py-4 bg-white max-w-3xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D3748] mb-4 text-center leading-tight">
          Bônus especiais para ajudar você a aplicar com mais segurança
        </motion.h2>
        
        <div className="space-y-3 max-w-md mx-auto">
          {[
            { icon: Gift, title: 'O Que Dizer e o Que Evitar na Hora da Birra', desc: 'Consulta rápida com o que fazer, o que dizer e o que evitar na hora da crise.' },
            { icon: Gift, title: 'Plano de 7 Dias para Reduzir Gatilhos de Birra', desc: 'Passo a passo para agir com mais clareza e reduzir reações no impulso durante a semana.' },
            { icon: Gift, title: 'Plano de Limites por Situação', desc: 'Orientações práticas para mercado, banho, telas, hora de sair, visitas e mais.' },
            { icon: Clock, title: 'Acesso por 12 Meses', desc: 'Consulte quando quiser, quantas vezes precisar, direto do celular.' }
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
 
      {/* BLOCO 13 — PRÉ-FECHAMENTO */}
      <section className="px-6 py-4 bg-[#344966] max-w-3xl mx-auto">
        <motion.h2 initial="hidden" whileInView="visible" variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 text-center leading-tight">
          Se você continuar tentando resolver tudo no improviso…
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-white/90 text-lg leading-relaxed font-bold text-center mb-4">
            Cada nova birra vira mais:
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto mb-4">
          {[
            { emoji: '😩', text: 'Estresse', bg: 'bg-blue-900/50', border: 'border-blue-700' },
            { emoji: '😔', text: 'Culpa', bg: 'bg-blue-900/50', border: 'border-blue-700' },
            { emoji: '🥵', text: 'Desgaste', bg: 'bg-blue-900/50', border: 'border-blue-700' },
            { emoji: '😞', text: 'Sensação de estar fazendo tudo errado', bg: 'bg-blue-900/50', border: 'border-blue-700' }
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
          Quando a próxima birra acontecer…
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center mb-4">
            Você não vai mais travar sem saber o que fazer.<br/><br/>
            Você vai saber:
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-3 max-w-md mx-auto">
          {[
            { emoji: '🤔', text: 'O que fazer', bg: 'bg-blue-50', border: 'border-blue-200' },
            { emoji: '💬', text: 'O que dizer', bg: 'bg-blue-50', border: 'border-blue-200' },
            { emoji: '🚫', text: 'O que evitar', bg: 'bg-blue-50', border: 'border-blue-200' },
            { emoji: '✨', text: 'Como não piorar a situação', bg: 'bg-blue-50', border: 'border-blue-200' }
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
              <p className="text-[#A0AEC0] font-black text-lg uppercase tracking-widest mb-2">Acesso completo ao Plano Anti-Birra</p>
            </div>
            
            <Img 
              src="https://res.cloudinary.com/dynjqdxw8/image/upload/f_auto,q_auto,w_400/v1775955320/1775955049021_urihse.webp" 
              className="w-full object-contain mb-6" 
            />
            
            <p className="text-[#4A5568] font-bold text-sm mb-6 text-center max-w-xs mx-auto">
              Você está levando um plano prático para ajudar você a não gritar, não ceder no desespero e saber o que fazer nas birras do seu filho + TODOS OS BÔNUS
            </p>
            
            <div className="flex flex-col items-center mb-6">
              <span className="text-gray-300 line-through text-xl sm:text-2xl font-black mb-2">De R$147,99</span>
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 mb-2">
                <span className="text-lg sm:text-2xl font-black text-[#344966]">por apenas</span>
                <span className="text-4xl sm:text-6xl font-black text-[#2D3748] tracking-tight">R$19,90</span>
              </div>
              <span className="text-lg sm:text-xl font-black text-[#344966]">à vista</span>
            </div>

            <p className="text-[#4A5568] font-bold text-xs mb-6 text-center">
              Menos de R$1 por dia para saber o que fazer nas birras do seu filho.
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
