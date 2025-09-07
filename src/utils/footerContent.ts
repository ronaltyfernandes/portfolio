import { Linkedin, Github } from 'lucide-react';
import SvgWhatsIcon from '../components/SvgWhatsIcon';
import links from './links';

const footerContent = [
  {
    Icon: Linkedin,
    href: links.linkedin,
    hoverColor: 'hover:text-blue-500',
  },
  {
    Icon: Github,
    href: links.github,
    hoverColor: 'hover:text-gray-800',
  },
  {
    Icon: SvgWhatsIcon, // agora é um componente
    href: links.whatsapp,
    hoverColor: 'hover:text-green-600',
  },
];

export default footerContent;
