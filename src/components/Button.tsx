import React from 'react';

interface ButtonProps {
  text?: string;
  link: string;
  icon?: React.ReactNode;
}

function Button({ text, link, icon }: ButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <button
        className={`border-blue text-blue clickable hover:bg-blueDark flex cursor-pointer items-center gap-2 rounded-md border-2 bg-white p-3 px-6 font-semibold shadow-md transition-all duration-300 hover:scale-110 hover:text-white active:scale-95`}
      >
        {text && <span>{text}</span>}
        {icon && <span>{icon}</span>}
      </button>
    </a>
  );
}

export default Button;
