import agroBemImage from '../assets/projects/agroBemPrint.png';
import digitalBankPrint from '../assets/projects/digitalBankDesktopPrint.jpg';
import portfolioPrint from '../assets/projects/portfolioPrint.png';
import {
  siJavascript,
  siTypescript,
  siTailwindcss,
  siGithub,
  siReact,
  siVite,
  siMui,
} from 'simple-icons/icons';

const projectsCountent = [
  {
    title: 'Digital Bank',
    description:
      'Inspirado em um desafio do Frontend Mentor, desenvolvido para praticar conceitos de Front-end. A aplicação simula a interface de um banco digital moderno.',
    projectLink: 'https://ronaltyfernandes.github.io/DigitalBank/',
    codeLink: 'https://github.com/ronaltyfernandes/DigitalBank',
    image: digitalBankPrint,
    icons: [siJavascript, siTailwindcss, siReact, siVite, siGithub],
  },
  {
    title: 'AgroBem',
    description:
      'Projeto Com fim Educacional de uma landing page para uma empresa fictícia do setor agrícola, destacando seus serviços e valores.',
    projectLink: 'https://ronaltyfernandes.github.io/agroBem/',
    codeLink: 'https://github.com/ronaltyfernandes/agroBem',
    image: agroBemImage,
    icons: [siJavascript, siTailwindcss, siReact, siVite, siGithub, siMui],
  },
  {
    title: 'Portfólio',
    description:
      'O projeto conta com animações, design responsivo e integração de tecnologias modernas, servindo como vitrine para meus trabalhos e experiências.',
    projectLink: 'https://linkdoproj1.com',
    codeLink: 'https://linkdoproj1.com',
    image: portfolioPrint,
    icons: [siTypescript, siTailwindcss, siReact, siVite, siGithub],
  },
];

export default projectsCountent;
