import agroBemImage from '../assets/projects/agroBemPrint.png';
import digitalBankPrint from '../assets/projects/digitalBankDesktopPrint.jpg';
import portfolioPrint from '../assets/projects/portfolioPrint.png';
import finanPrint from '../assets/projects/home-finan.png';
import emailIaPrint from '../assets/projects/email-ia-respostas.png';
import bitEdu from '../assets/projects/bitCode.png';
import {
  siJavascript,
  siTypescript,
  siTailwindcss,
  siGithub,
  siReact,
  siVite,
  siMui,
  siFigma,
  siCss,
  siNodedotjs,
  siTypeorm,
  siPostgresql,
  siDocker,
  siJsonwebtokens,
  siReactrouter,
  siPython,
  siOpenai,
  siFastapi,
} from 'simple-icons/icons';

const projectsCountent = [
  {
    title: 'Finan',
    description:
      'Aplicação Full Stack para gerenciamento de finanças pessoais com controle de receitas, despesas, categorias, metas e dashboards interativos.',
    projectLink: 'https://ronaltyfernandes.github.io/finan/#/',
    codeLink: 'https://github.com/ronaltyfernandes/finan',
    image: finanPrint,
    icons: [
      siTypescript,
      siReact,
      siVite,
      siTailwindcss,
      siReactrouter,
      siNodedotjs,
      siTypeorm,
      siJsonwebtokens,
      siPostgresql,
      siDocker,
    ],
  },
  {
    title: 'Email IA',
    description:
      'Aplicação Full Stack que utiliza Inteligência Artificial para classificar emails automaticamente e gerar respostas inteligentes, com histórico de análises e interface responsiva.',
    projectLink: 'https://email-ia-production.up.railway.app/',
    codeLink: 'https://github.com/ronaltyfernandes/email-ia',
    image: emailIaPrint,
    icons: [
      siReact,
      siVite,
      siTailwindcss,
      siPython,
      siOpenai,
      siFastapi,
      siPostgresql,
    ],
  },
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
    projectLink: 'https://ronaltyfernandes.github.io/portfolio/',
    codeLink: 'https://github.com/ronaltyfernandes/portfolio',
    image: portfolioPrint,
    icons: [siTypescript, siTailwindcss, siReact, siVite, siGithub],
  },
  {
    title: 'BitCode',
    description:
      'Um projeto feito para aprimorar minhas habilidades com o figma, criando uma pagina para um ONG fictícia que ensina programação para crianças carentes.',
    projectLink: 'https://ronaltyfernandes.github.io/BitEdu/',
    codeLink: 'https://github.com/ronaltyfernandes/BitEdu',
    image: bitEdu,
    icons: [siFigma, siJavascript, siCss, siGithub],
  },
];

export default projectsCountent;
