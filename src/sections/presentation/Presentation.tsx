import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PerfilPicture from '../../components/animation/PerfilPicture';
import Button from '../../components/Button';
import { siGithub } from 'simple-icons';
import { Linkedin } from 'lucide-react';
import SvgIcons from '../../components/SvgIcons';
import AnimatedText from '../../components/animation/AnimatedText';
import links from '../../utils/links';
import SvgWhatsIcon from '../../components/SvgWhatsIcon';

function Presentation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px 0px -100px 0px' }); // dispara antes e depois

  return (
    <section
      id="inicio"
      className="bg-animated-gradient relative items-center justify-center gap-4 pt-5 pb-10 lg:pt-25 xl:flex xl:h-screen xl:w-full xl:pt-0 xl:pb-0"
    >
      <motion.div
        ref={ref}
        className="m-auto mx-3 flex flex-col items-start justify-between rounded-lg bg-white p-6 shadow-lg xl:w-1/2"
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div>
          {/* Saudação */}
          <motion.h3
            className="text-blueDark mt-4 text-lg"
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            Olá,
          </motion.h3>

          {/* Nome em destaque */}
          <motion.h1
            className="text-blueDark rounded-lg border-2 bg-white p-4 text-6xl font-bold shadow-lg xl:text-8xl"
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            Sou Ronalty!
          </motion.h1>
          <div className="mt-4">
            <AnimatedText
              description="Transformando ideias em código, do conceito à entrega."
              typingSpeed={0.03}
              delay={0.8}
              fontSize="text-2xl xl:text-4xl"
              fontFamily="Orbitron"
              textColor="text-blueDark"
            />
          </div>
          <div className="mt-8">
            <AnimatedText
              description="Desenvolvedor &lt;Full Stack/&gt;"
              delay={2.5}
              fontSize="text-4xl xl:text-5xl"
              fontWeight="font-bold"
              fontFamily="Orbitron"
              textColor="text-blueDark"
            />
          </div>
        </div>

        {/* Botões */}
        <motion.div
          className="mt-10 flex w-full justify-end gap-2"
          animate={isInView ? 'show' : 'hidden'}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <Button link={links.linkedin} icon={<Linkedin />} />
          <Button link={links.github} icon={<SvgIcons icon={siGithub} />} />
          <Button link={links.whatsapp} icon={<SvgWhatsIcon />} />
        </motion.div>
      </motion.div>

      <PerfilPicture />

      {/* Meia lua decorativa */}
      <div className="absolute bottom-[-40px] left-1/2 h-[70px] w-[110%] -translate-x-1/2 rounded-t-[200%] bg-white xl:bottom-[-70px] xl:h-[150px]" />
    </section>
  );
}

export default Presentation;
