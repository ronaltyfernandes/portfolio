import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MouseEffect() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // CSS vars globais
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`);
      document.documentElement.style.setProperty('--my', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999] mix-blend-screen"
      animate={{
        background: `radial-gradient(
          300px circle at ${pos.x}px ${pos.y}px,
          rgba(0,150,255,0.25),
          transparent 70%
        )`,
      }}
      transition={{ duration: 0.08, ease: 'linear' }}
    />
  );
}
