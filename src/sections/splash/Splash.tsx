import { motion } from 'framer-motion';
import technologiesArray from '../../utils/technologiesArray';
import { Code, Database, Github } from 'lucide-react';

export default function Splash() {
  // quantos ícones vão cair na chuva final
  const rainingIconsCount = 50;

  // sorteia ícones aleatórios do array
  const randomIcons = Array.from({ length: rainingIconsCount }, () => {
    const randomIndex = Math.floor(Math.random() * technologiesArray.length);
    return technologiesArray[randomIndex];
  });

  const icons = [
    { id: 1, component: <Code size={104} /> },
    { id: 2, component: <Github size={104} /> },
    { id: 3, component: <Database size={104} /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 3.2 }}
      className="bg-text-blueDark fixed inset-0 z-[999] flex flex-col items-center justify-center gap-6 text-white"
    >
      {/* ÍCONES CAINDO EM CASCATA */}
      <div className="flex justify-center gap-10">
        {icons.map((icon, index) => (
          <motion.div
            key={icon.id}
            initial={{ y: -150, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              type: 'spring',
              stiffness: 120,
              delay: index * 0.3, // efeito cascata
            }}
          >
            {icon.component}
          </motion.div>
        ))}
      </div>

      {/* TEXTO APARECENDO DEPOIS */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.4 }}
        className="text-6xl font-bold tracking-wide xl:text-7xl"
      >
        Ronalty.dev
      </motion.h1>

      {/* ÍCONES CAINDO NO FINAL */}
      {randomIcons.map((icon, index) => {
        const xStart =
          Math.random() * window.innerWidth - window.innerWidth / 2; // MAIS LARGO
        const delay = 1.4 + index * 0.22; // CASCATA MAIS BONITA

        return (
          <motion.div
            key={index}
            initial={{
              y: -300 - Math.random() * 150, // COMEÇA BEM FORA DA TELA
              x: xStart,
              opacity: 0,
            }}
            animate={{
              y: window.innerHeight + 80, // TERMINA FORA DA PARTE DE BAIXO
              opacity: 1,
            }}
            transition={{
              duration: 2.2 + Math.random() * 2, // CAI MAIS DEVAGAR
              delay,
              ease: 'easeOut',
            }}
            className="absolute opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d={icon.path} />
            </svg>
          </motion.div>
        );
      })}

      {/* FADE FINAL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3, delay: 3.8 }}
        className="bg-text-blueDark absolute inset-0"
      />
    </motion.div>
  );
}
