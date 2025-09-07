import { motion } from 'framer-motion';
import fotoPerfil from '../../assets/foto-ronalty.jpg';

function PerfilPicture() {
  return (
    <div className="relative mx-3 mt-5 flex items-center justify-center xl:mt-0 xl:h-125 xl:w-128">
      <motion.img
        src={fotoPerfil}
        alt="Foto de perfil"
        className="rounded-xl shadow-xl xl:h-full xl:w-full xl:object-cover"
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          y: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 4,
            ease: 'easeInOut',
          },
        }}
      />
    </div>
  );
}

export default PerfilPicture;
