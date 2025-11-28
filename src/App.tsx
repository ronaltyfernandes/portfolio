import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './styles/App.css';
import AboutMe from './sections/aboutMe/AboutMe';
import Presentation from './sections/presentation/Presentation';
import Header from './sections/header/Header';
import Projects from './sections/projects/Projects';
import Splash from './sections/splash/Splash';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Tempo EXATO do splash + loading final
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // ← tempo em milissegundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Splash key="splash" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Header />
          <Presentation />
          <Projects />
          <AboutMe />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
