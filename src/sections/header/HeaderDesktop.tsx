import type { HeaderProps } from '../../types/types';

function HeaderDesktop({
  activeSection,
  scrollToSection,
  sections,
  scrolled,
}: HeaderProps) {
  return (
    <header
      className={`bg-blue fixed left-1/2 z-50 w-11/12 -translate-x-1/2 transition-all duration-500 ease-in-out ${scrolled ? 'top-8 rounded-2xl opacity-100 shadow-lg' : 'top-0 w-full'} `}
    >
      <nav>
        <div className="flex justify-between px-10 text-lg font-medium">
          {/* Logo */}
          <div className="flex gap-10 p-4 text-lg font-medium">
            <p
              onClick={() => scrollToSection('inicio')}
              className="text-blue cursor-pointer rounded-md bg-white px-2 py-1 font-bold transition duration-300 hover:scale-105"
            >
              Ronalty{' '}
              <span className="bg-blue rounded-md px-1 py-0.5 font-bold text-white">
                {`</>`}
              </span>
            </p>
          </div>

          {/* Links */}
          <ul className="flex gap-10 p-4 text-lg font-medium">
            {sections.map((section) => (
              <li
                key={section.value}
                onClick={() => scrollToSection(section.value)}
                className={`relative cursor-pointer rounded-md px-2 py-1 font-bold transition-colors duration-300 ${
                  activeSection === section.value
                    ? 'text-blue bg-white'
                    : 'text-white'
                } group`}
              >
                {section.label}
                <span
                  className={`absolute bottom-0 left-0 mt-0.5 h-0.5 w-full transition-all duration-300 ${
                    activeSection === section.value
                      ? 'bg-blue'
                      : 'scale-x-0 bg-white group-hover:scale-x-100'
                  } origin-left`}
                  style={{
                    transform:
                      activeSection === section.value ? 'scaleX(1)' : undefined,
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderDesktop;
