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
            Saiba como lidar com as birras do seu filho sem gritar, sem ceder no desespero e sem piorar a situação.
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
          <p className="text-[#4A5568] font-bold text-base leading-relaxed text-center mb-4 max-w-md mx-auto">
            Um aplicativo prático para mães que se estressam, passam constrangimento e sentem que já tentaram de tudo, mas ainda não sabem como lidar com as birras do filho na hora em que elas acontecem.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              onClick={scrollToOffer}
              className="bg-[#344966] hover:bg-[#1E2A45] text-white py-5 text-lg font-black border-none rounded-[2rem] w-full max-w-sm mx-auto"
            >
              SIM, QUERO ACABAR COM AS BIRRAS DO MEU FILHO <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
          <p className="text-[#A0AEC0] text-xs font-bold mt-3 text-center tracking-wide">
            Acesso imediato • Funciona no celular • Pagamento único
          </p>
        </motion.div>
      </section>

      {/* BLOCO 2 — IDENTIFICAÇÃO */}
      <section className="px-6 py-6 bg-white">
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl font-black text-[#2D3748] mb-4 text-center leading-tight">
            Na hora da birra, tudo acontece rápido demais.
          </h2>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center max-w-lg mx-auto">
            Você tenta manter a calma, mas em poucos segundos seu filho grita, insiste, se joga no chão, enfrenta… e o estresse sobe na mesma velocidade.<br/><br/>
            Você sente que precisa resolver aquilo na hora, mas no fundo não sabe exatamente o que fazer.<br/><br/>
            E é nesse momento que normalmente acontece uma destas coisas:<br/><br/>
            → Você grita e depois se culpa<br/>
            → Você cede só para aquilo acabar logo<br/>
            → Você insiste do jeito errado e a crise aumenta
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
          O problema não é só a birra em si.
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants} className="max-w-lg mx-auto">
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center mb-4">
            O problema é não saber como lidar com clareza quando a crise começa.<br/>
            Porque quando você improvisa no calor do momento, geralmente entra em um ciclo que se repete:
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
          {[
            { icon: '📢', title: 'Você se estressa e reage por impulso' },
            { icon: '🏳️', title: 'Sente que piorou a situação' },
            { icon: '📉', title: 'E continua sem saber como agir da próxima vez' }
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
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 text-center leading-tight">
            A boa notícia é que você não precisa mais continuar lidando com isso no improviso.
          </h2>
          <p className="text-white text-lg leading-relaxed font-bold text-center max-w-lg mx-auto">
            Quando você entende melhor como agir, o que dizer e o que evitar, fica muito mais fácil conduzir esses momentos com mais calma, firmeza e menos estresse.<br/><br/>
            Sem gritar.<br/>
            Sem ceder no desespero.<br/>
            Sem piorar tudo.
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
          O Plano de Ação Anti-Birra foi feito para isso.
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-[#4A5568] text-lg leading-relaxed font-bold text-center max-w-lg mx-auto mb-4">
            Em vez de improvisar, se estressar e acabar reagindo do jeito errado, você aprende a lidar melhor com as birras do seu filho e a reduzir esse comportamento com mais calma, firmeza e clareza.
          </p>
          <p className="text-[#4A5568] text-base leading-relaxed font-bold text-center max-w-lg mx-auto mb-5">
            O Plano de Ação Anti-Birra é um aplicativo prático para mães que não sabem mais como lidar com as birras dos filhos — principalmente quando o estresse sobe, a criança enfrenta e tudo parece sair do controle.
          </p>

          <p className="text-[#2D3748] font-black text-center text-base uppercase tracking-widest mb-3">Veja o Plano Anti-Birra por dentro</p>
          <p className="text-[#4A5568] text-sm font-bold text-center max-w-md mx-auto mb-4">
            Em poucos segundos, veja como o app funciona na prática e o que você vai encontrar dentro dele.
          </p>

          <div style={{ maxWidth: '520px', margin: '0 auto 16px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', borderRadius: '16px', overflow: 'hidden' }}>
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
            Mais do que um aplicativo comum, o Plano de Ação Anti-Birra ajuda você a entender como agir com mais calma, firmeza e menos estresse quando seu filho faz birra.
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
          No app, você encontra apoio prático para lidar melhor com as birras do seu filho.
        </motion.h2>
        
        <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto">
          {[
            { icon: Layout, title: 'Orientações rápidas para agir na hora da crise' },
            { icon: ListChecks, title: 'Respostas práticas para diferentes tipos de birra' },
            { icon: FileText, title: 'Frases prontas para saber o que dizer sem gritar' },
            { icon: Volume2, title: 'Áudios guiados para ajudar você a manter a calma' },
            { icon: BookOpen, title: 'Planos por situação para os momentos mais difíceis' },
            { icon: ListChecks, title: 'Checklist prático para reduzir reações impulsivas' },
            { icon: Video, title: 'Videoaulas: como lidar com crises de raiva' },
            { icon: Star, title: 'Videoaulas: como reduzir gritos e trazer mais calma' },
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
            { icon: '✓', title: 'Lidar melhor com as birras do seu filho' },
            { icon: '✓', title: 'Reduzir reações impulsivas no desespero' },
            { icon: '✓', title: 'Agir com mais firmeza sem precisar gritar' },
            { icon: '✓', title: 'Diminuir o risco de ceder por exaustão' },
            { icon: '✓', title: 'Conduzir a situação com mais clareza' },
            { icon: '✓', title: 'Se sentir mais segura no dia a dia' },
            { icon: '✓', title: 'Ajudar a reduzir esse comportamento com mais consistência' }
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
          Quando a mãe entende melhor como agir, a chance de reagir no impulso diminui.
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" variants={itemVariants}>
          <p className="text-white/90 text-lg leading-relaxed font-bold text-center max-w-lg mx-auto">
            E quando ela responde com mais clareza, firmeza e consistência, a tendência é lidar melhor com as birras do filho e reduzir esse comportamento com menos caos, menos culpa e mais segurança.
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
            { icon: Gift, title: 'Bônus 1 — Guia Prático em PDF', desc: 'Consulta rápida com o que fazer, o que dizer e o que evitar na hora da crise.' },
            { icon: Gift, title: 'Bônus 2 — Frases Prontas para Situações Difíceis', desc: 'Saiba exatamente o que dizer quando a birra começa, sem gritar e sem ceder.' },
            { icon: Gift, title: 'Bônus 3 — Checklist de 7 Dias', desc: 'Passo a passo para agir com mais clareza e reduzir reações no impulso durante a semana.' },
            { icon: Gift, title: 'Bônus 4 — Plano de Limites por Situação', desc: 'Orientações práticas para mercado, banho, telas, hora de sair, visitas e mais.' },
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
            Você está tendo acesso a um plano prático com orientações, frases prontas, áudios guiados, planos por situação, videoaulas complementares e bônus que ajudam você a lidar melhor com as birras do seu filho e a reduzir esse comportamento com mais calma, firmeza e menos estresse.
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
            Você tem 7 dias para testar com calma.<br/>
            Se perceber que o Plano de Ação Anti-Birra não é para você, basta pedir o reembolso dentro do prazo e seu investimento será devolvido integralmente, sem burocracia.
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
            { q: 'E se eu já tentei de tudo?', a: 'Talvez o que faltou não tenha sido esforço. Faltou um plano claro para agir na hora certa, com orientação por situação e sem precisar improvisar.' },
            { q: 'Não tenho tempo para mais um curso.', a: 'Não é um curso para assistir horas de conteúdo. É um plano para consultar na hora da crise, em minutos, direto pelo celular.' },
            { q: 'Não quero ser dura demais com meu filho.', a: 'O foco aqui não é endurecer. É agir com firmeza e clareza — sem gritar, sem humilhar e sem ceder por exaustão.' },
            { q: 'Será que vou conseguir aplicar?', a: 'Sim. O conteúdo foi organizado para ser simples, direto e fácil de consultar mesmo nos dias mais corridos e estressantes.' },
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
