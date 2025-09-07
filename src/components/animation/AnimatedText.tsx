import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface AnimatedTextInterface {
  description: string;
  typingSpeed?: number; // segundos por caractere
  textColor?: string; // cor do texto
  fontSize?: string; // classes tailwind
  fontFamily?: string; // classes tailwind
  fontWeight?: string; // classes tailwind
  delay?: number; // delay em segundos antes de iniciar
}

export default function AnimatedText({
  description,
  typingSpeed = 0.02,
  textColor = 'text-lightBlue',
  fontSize = 'text-lg',
  fontFamily = 'font-mono',
  fontWeight = '',
  delay = 0,
}: AnimatedTextInterface) {
  const [visibleChars, setVisibleChars] = useState(0);
  const ref = useRef(null);

  // Detecta se o componente está na tela
  const isInView = useInView(ref, { margin: '-50px 0px -50px 0px' });

  useEffect(() => {
    let interval: number;
    let timeout: number;

    if (isInView) {
      // inicia a digitação após o delay
      timeout = setTimeout(() => {
        let index = 0;
        interval = setInterval(() => {
          index++;
          setVisibleChars(index);
          if (index >= description.length && interval) clearInterval(interval);
        }, typingSpeed * 1000);
      }, delay * 1000);
    } else {
      // quando sai da tela, reseta o texto
      setVisibleChars(0);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [isInView, description, typingSpeed, delay]);

  return (
    <p
      ref={ref}
      className={`${textColor} ${fontSize} ${fontFamily} ${fontWeight} mt-3 whitespace-pre-wrap`}
    >
      {description.substring(0, visibleChars)}
      <motion.span
        className={`ml-[1px] inline-block h-[1em] w-[2px] ${textColor}`}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </p>
  );
}
