import { motion } from 'framer-motion';
import fotoPerfil from '../../assets/foto-animada.png';
import { useRef } from 'react';

function PerfilImpacto() {
  const targetRef = useRef(null);

  return (
    <div
      ref={targetRef}
      className="relative flex items-center justify-center"
      style={{ overflow: 'hidden' }}
    >
      <motion.img
        src={fotoPerfil}
        alt="Foto de perfil"
        className="h-128 w-128 rounded-lg object-cover shadow-2xl xl:w-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </div>
  );
}

export default PerfilImpacto;
