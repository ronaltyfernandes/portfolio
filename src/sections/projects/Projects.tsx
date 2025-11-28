import { motion } from 'framer-motion';
import { useState } from 'react';
import projects from '../../utils/projectsCountent';
import CardProjects from './CardProjects';
import type { Variants } from 'framer-motion';

const ITEMS_PER_PAGE = 6;

function Projects() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const start = page * ITEMS_PER_PAGE;
  const visibleProjects = projects.slice(start, start + ITEMS_PER_PAGE);

  const convergeVariants: Variants = {
    hidden: (i: number) => {
      const column = i % 3; // 0=esq, 1=centro, 2=dir

      return {
        opacity: 0,
        scale: 0.8,
        x: column === 0 ? -120 : column === 2 ? 120 : 0,
        y: 50,
      };
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // easeOutExpo vibe
      },
    },
  };

  return (
    <motion.div
      id="projetos"
      className="flex-col gap-4 bg-white pt-10 xl:flex xl:w-full xl:px-20 xl:pt-30"
      initial="visible"
      animate="visible"
    >
      <div className="flex w-full justify-center">
        <h1 className="text-blueDark text-center text-7xl font-bold">
          Projetos
        </h1>
      </div>

      {/* GRID animado */}
      <motion.div
        key={page}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10 grid grid-cols-1 justify-items-center gap-10 px-3 md:grid-cols-2 xl:mt-0 xl:grid-cols-3 2xl:mt-10"
      >
        {visibleProjects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            variants={convergeVariants}
            initial="hidden"
            animate="visible"
          >
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

      {/* PAGINAÇÃO */}
      {totalPages > 1 && (
        <div className="mt-10 flex w-full items-center justify-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="bg-blueDark rounded-lg px-4 py-2 text-white disabled:opacity-30"
          >
            Anterior
          </button>

          <span className="text-blueDark text-xl font-semibold">
            {page + 1} / {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            className="bg-blueDark rounded-lg px-4 py-2 text-white disabled:opacity-30"
          >
            Próximo
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default Projects;
