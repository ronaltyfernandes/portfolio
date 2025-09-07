import type { HeaderProps } from '../../types/types';

function ModalHeader({
  activeSection,
  scrollToSection,
  sections,
}: HeaderProps) {
  return (
    <div className="bg-blue fixed bottom-0 left-0 z-50 w-full shadow-lg">
      <ul className="flex h-12 items-center justify-around px-2 py-1">
        {sections.map((section) => (
          <li
            key={section.value}
            onClick={() => {
              console.log('clicou em', section.value);
              scrollToSection(section.value);
            }}
            className={`mx-5 flex flex-1 cursor-pointer flex-col items-center justify-center rounded-md py-0.25 transition-colors duration-300 ${
              activeSection === section.value
                ? 'text-blue bg-white'
                : 'text-white'
            }`}
          >
            {section.icon && <section.icon size={20} />}
            <span className="text-xs font-medium">{section.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModalHeader;
