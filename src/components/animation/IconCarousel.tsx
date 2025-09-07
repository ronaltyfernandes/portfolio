import { motion, useMotionValue } from 'framer-motion';
import SvgIcons from '../../components/SvgIcons';
import type { SimpleIcon } from 'simple-icons';
import { useEffect, useState } from 'react';

interface IconCarouselProps {
  icons: SimpleIcon[];
  speed?: number; // px por segundo
  size?: number;
}

export default function IconCarousel({
  icons,
  speed = 50,
  size = 38,
}: IconCarouselProps) {
  const duplicatedIcons = [...icons, ...icons];
  const xTop = useMotionValue(0); // linha superior
  const [hovered, setHovered] = useState(false);

  const gapPx = 8;
  const itemWidth = size * 2 + gapPx;
  const totalWidth = icons.length * itemWidth;
  const xBottom = useMotionValue(-totalWidth); // linha inferior (movimento oposto)

  // animação das duas linhas
  useEffect(() => {
    let animationFrame: number;
    let lastTime: number | null = null;

    const step = (time: number) => {
      if (lastTime !== null) {
        const delta = (time - lastTime) / 1000;
        const currentSpeed = hovered ? speed / 2 : speed;

        // linha superior -> esquerda
        let newXTop = xTop.get() - currentSpeed * delta;
        if (newXTop <= -totalWidth) newXTop += totalWidth;
        xTop.set(newXTop);

        // linha inferior -> direita
        let newXBottom = xBottom.get() + currentSpeed * delta;
        if (newXBottom >= 0) newXBottom -= totalWidth; // loop contínuo
        xBottom.set(newXBottom);
      }
      lastTime = time;
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [xTop, xBottom, hovered, speed, totalWidth]);

  return (
    <div
      className="bg-blueDark overflow-hidden py-3 lg:rounded-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* desktop: uma linha */}
      <div className="hidden w-max gap-2 lg:flex">
        <motion.div className="flex gap-2" style={{ x: xTop }}>
          {duplicatedIcons.map((icon, index) => (
            <div
              key={index}
              style={{ width: size * 2, height: size * 2 }}
              className="flex shrink-0 items-center justify-center rounded-md bg-white"
            >
              <SvgIcons icon={icon} size={size} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* mobile: duas linhas */}
      <div className="flex flex-col gap-2 lg:hidden">
        <motion.div className="flex gap-2" style={{ x: xTop }}>
          {duplicatedIcons.map((icon, index) => (
            <div
              key={index}
              style={{ width: size * 2, height: size * 2 }}
              className="flex shrink-0 items-center justify-center rounded-md bg-white"
            >
              <SvgIcons icon={icon} size={size} />
            </div>
          ))}
        </motion.div>

        <motion.div className="flex gap-2" style={{ x: xBottom }}>
          {duplicatedIcons.map((icon, index) => (
            <div
              key={index}
              style={{ width: size * 2, height: size * 2 }}
              className="flex shrink-0 items-center justify-center rounded-md bg-white"
            >
              <SvgIcons icon={icon} size={size} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
