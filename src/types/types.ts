// Import SimpleIcon type from the appropriate module
import type { LucideIcon } from 'lucide-react';
import type { SimpleIcon } from 'simple-icons'; // Adjust the import path if needed

export type cardProjectsProps = {
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  image: string;
  icons: SimpleIcon[];
};

export interface HeaderProps {
  scrolled?: boolean;
  activeSection: string;
  scrollToSection: (id: string) => void | [];
  sections: {
    label: string;
    value: string;
    icon?: LucideIcon;
  }[];
}
