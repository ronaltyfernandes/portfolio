import { motion } from 'framer-motion';
import projects from '../../utils/projectsCountent';
import CardProjects from './CardProjects';
import type { Variants } from 'framer-motion';

function Projects() {
  // Variants para os cards
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // anima cada card com atraso
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      id="projetos"
      className="flex-col gap-4 bg-white pt-10 xl:flex xl:h-screen xl:w-full xl:px-20 xl:pt-30"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="flex w-full justify-center">
        <h1 className="text-blueDark flex text-center text-7xl font-bold">
          Projetos
        </h1>
      </div>

      <motion.div className="mt-10 grid grid-cols-1 justify-items-center gap-10 px-3 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <motion.div key={project.title} variants={cardVariants}>
            <CardProjects
              codeLink={project.codeLink}
              description={project.description}
              image={project.image}
              projectLink={project.projectLink}
              title={project.title}
              icons={project.icons}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
