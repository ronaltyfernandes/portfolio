import { useEffect, useState } from 'react';
import sections from '../../utils/sectionsCountent';
import HeaderDesktop from './HeaderDesktop';
import ModalHeader from './ModalHeader';

function Header() {
  const desktopWidth = 1024;
  const [activeSection, setActiveSection] = useState('inicio');
  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.innerWidth >= desktopWidth
  );
  const [scrolled, setScrolled] = useState(false); // detecta se scroll passou do topo

  // detecta resize
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= desktopWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // detecta scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver para activeSection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.value);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-transform duration-500 ease-in-out`}
    >
      {isDesktop ? (
        <HeaderDesktop
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          sections={sections}
          scrolled={scrolled}
        />
      ) : (
        <ModalHeader
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          sections={sections}
        />
      )}
    </header>
  );
}

export default Header;
