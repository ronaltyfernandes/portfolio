import { motion } from 'framer-motion';
import technologiesArray from '../../utils/technologiesArray';
import ButtonDownload from '../../components/ButtonDownload';
import { Download } from 'lucide-react';
import PerfilParallax from '../../components/animation/IconParallax';
import IconCarousel from '../../components/animation/IconCarousel';
import Footer from '../footer/Footer';
import AnimatedText from '../../components/animation/AnimatedText';
import aboutMeCountent from '../../utils/aboutMeContent';

function AboutMe() {
  return (
    <div
      id="sobre"
      className="bg-animated-gradient relative flex min-h-screen flex-col"
    >
      <div className="relative flex flex-col items-center justify-center gap-4 xl:w-full xl:justify-around 2xl:flex-row 2xl:px-70">
        {/* meia lua no topo */}
        <div className="absolute top-[-0px] left-1/2 h-[70px] w-[110%] -translate-x-1/2 rounded-b-[200%] bg-white xl:bottom-[-70px] 2xl:h-[150px]" />

        <div className="mt-30 flex items-center justify-center px-3 xl:h-full 2xl:mt-60 2xl:w-1/2">
          <PerfilParallax />
        </div>

        <motion.div
          className="mx-3 flex flex-col justify-between gap-4 rounded-lg bg-white p-4 py-10 shadow-lg xl:w-1/2 xl:p-10 2xl:mt-60 2xl:h-128"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h2
            className="text-blueDark text-center text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Sobre Mim
          </motion.h2>

          <AnimatedText
            typingSpeed={0.008}
            fontSize="text-xl text-justify xl:text-xl md-text-2xl"
            description={aboutMeCountent.fristDescription}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="w-full justify-center"
          >
            <ButtonDownload
              text="Baixar Currículo Virtual"
              link={''}
              icon={<Download size={24} />}
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-10 flex w-full items-center justify-start rounded-md bg-white xl:mt-20">
        <IconCarousel icons={technologiesArray} speed={200} size={40} />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutMe;
