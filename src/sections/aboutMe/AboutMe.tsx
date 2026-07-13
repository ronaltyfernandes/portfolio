import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import technologiesArray from '../../utils/technologiesArray';
import ButtonDownload from '../../components/ButtonDownload';
import { Download, Code2 } from 'lucide-react';
import PerfilParallax from '../../components/animation/IconParallax';
import IconCarousel from '../../components/animation/IconCarousel';
import Footer from '../footer/Footer';
import AnimatedText from '../../components/animation/AnimatedText';
import aboutMeCountent from '../../utils/aboutMeContent';
import curriculo from '../../assets/curriculo-ronalty.pdf';

function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="sobre"
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#0a0e17]"
    >
      {/* Grid de fundo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glows */}
      <div className="bg-blueDark/20 pointer-events-none absolute top-1/4 right-1/4 h-[500px] w-[500px] translate-x-1/2 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div
        ref={ref}
        className="relative z-10 mx-auto flex w-full lg:w-8/10 max-w-5xl flex-1 flex-col items-center justify-center gap-12 px-6 py-24 2xl:flex-row 2xl:gap-16"
      >
        {/* Coluna da foto */}
        <motion.div
          className="relative flex shrink-0 items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="from-blueDark/40 absolute inset-0 -z-10 rounded-full bg-gradient-to-tr to-transparent blur-3xl" />
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
            <PerfilParallax />
          </div>
        </motion.div>

        {/* Coluna de texto */}
        <div className="flex w-full max-w-xl flex-col items-start">
          {/* Badge */}
          <motion.div
            className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            transition={{ duration: 0.5 }}
          >
            <Code2 className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-xs font-medium tracking-wide text-white/70">
              Quem eu sou
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            className="text-cyan-500 mb-3 text-sm font-semibold tracking-[0.3em] uppercase"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Um pouco da minha trajetória
          </motion.p>

          {/* Título */}
          <motion.h2
            className="text-5xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-6xl xl:text-6xl"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sobre{' '}
            <span className="from-blueDark relative bg-gradient-to-r via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Mim
            </span>
          </motion.h2>

          {/* Descrição */}
          <div className="mt-6 w-full">
            <AnimatedText
              typingSpeed={0.008}
              fontSize="text-lg text-justify xl:text-xl"
              description={aboutMeCountent.fristDescription}
              textColor="text-white/60"
            />
          </div>

          {/* CTA */}
          <motion.div
            className="mt-10 w-full"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ButtonDownload
              text="Baixar Currículo Virtual"
              link={curriculo}
              icon={<Download size={20} />}
            />
          </motion.div>
        </div>
      </div>

      {/* Carrossel de tecnologias */}
      <div className="relative z-10 mt-4 w-full border-y border-white/10 bg-white/5 py-4 backdrop-blur-sm">
        <IconCarousel icons={technologiesArray} speed={200} size={40} />
      </div>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default AboutMe;