import { useEffect, useRef, useState } from 'react';

export default function useCollision() {
  const ref = useRef(null);
  const [data, setData] = useState({ glow: false, parallax: false });

  useEffect(() => {
    const el = ref.current;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const mx = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--mx')
      );
      const my = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--my')
      );

      const isNear =
        mx > rect.left - 80 &&
        mx < rect.right + 80 &&
        my > rect.top - 80 &&
        my < rect.bottom + 80;

      const isVeryNear =
        mx > rect.left - 20 &&
        mx < rect.right + 20 &&
        my > rect.top - 20 &&
        my < rect.bottom + 20;

      // Atualiza CSS Vars para o efeito físico
      el.style.setProperty('--left', rect.left);
      el.style.setProperty('--top', rect.top);
      el.style.setProperty('--width', rect.width);
      el.style.setProperty('--height', rect.height);

      setData({
        glow: isNear,
        parallax: isVeryNear,
      });
    };

    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);

  return { ref, data };
}
