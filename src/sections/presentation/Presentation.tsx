import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PerfilPicture from '../../components/animation/PerfilPicture';
import { siGithub } from 'simple-icons';
import { Linkedin, ArrowDown, MapPin } from 'lucide-react';
import SvgIcons from '../../components/SvgIcons';
import AnimatedText from '../../components/animation/AnimatedText';
import links from '../../utils/links';

const techStack = ['React', 'Node.js', 'TypeScript', 'Nest.js', 'Python', 'Docker', 'kotlin'];

function Presentation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px 0px -100px 0px' });

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0a0e17] py-20 xl:py-0"
    >
      {/* Grid de fundo */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow principal */}
      <div className="bg-blueDark/25 pointer-events-none absolute top-1/4 left-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 flex w-full lg:w-8/10 flex-col items-center px-6 xl:flex-row">
        {/* Coluna de texto */}
        <div className="flex w-full max-w-xl flex-col items-start">
          {/* Badge de status */}
          <motion.div
            className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            transition={{ duration: 0.5 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium tracking-wide text-white/70">
              Disponível para novos projetos
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
            Desenvolvedor Full Stack
          </motion.p>

          {/* Nome */}
          <motion.h1
            className="text-5xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-6xl xl:text-6xl"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Olá, eu sou{' '}
            <span className="from-blueDark relative bg-gradient-to-r via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Ronalty
            </span>
          </motion.h1>

          {/* Frase de efeito */}
          <div className="mt-6">
            <AnimatedText
              description="Transformando ideias em código, do conceito à entrega."
              typingSpeed={0.03}
              delay={0.9}
              fontSize="text-lg xl:text-xl"
              fontFamily="Orbitron"
              textColor="text-white/60"
            />
          </div>

          {/* Tech stack */}
          <motion.div
            className="mt-8 flex flex-wrap gap-2"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 1.4 } },
            }}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
          >
            {techStack.map((tech) => (
              <motion.span
                key={tech}
                variants={fadeUp}
                transition={{ duration: 0.4 }}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:items-center"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="from-blueDark group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-transform hover:scale-[1.03] active:scale-95"
            >
              Vamos conversar
              <ArrowDown className="h-4 w-4 -rotate-90 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="flex items-center gap-3">
              <motion.a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-colors hover:border-white/20 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-colors hover:border-white/20 hover:text-white"
              >
                <SvgIcons icon={siGithub} color="ffffff" />
              </motion.a>
            </div>
          </motion.div>

          {/* Localização */}
          <motion.div
            className="mt-8 flex items-center gap-2 text-xs text-white/40"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <MapPin className="h-3.5 w-3.5" />
            Brasil · Atendimento remoto
          </motion.div>
        </div>

        {/* Coluna da foto */}
        <motion.div
          className="relative flex shrink-0 items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="from-blueDark/40 absolute inset-0 -z-10 rounded-full bg-gradient-to-tr to-transparent blur-3xl" />
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
            <PerfilPicture />
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 xl:flex"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Presentation;