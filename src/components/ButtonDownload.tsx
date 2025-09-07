import React from 'react';

interface ButtonProps {
  text: string;
  link: string;
  icon?: React.ReactNode;
}

function ButtonDownload({ text, link, icon }: ButtonProps) {
  return (
    <a href={link} download className="inline-block">
      <button className="hover:bg-blueDark border-blue text-blue flex items-center gap-2 rounded-md border-2 bg-white p-3 px-6 font-semibold shadow-md transition-colors duration-300 hover:text-white">
        <span>{text}</span>
        {icon && <span>{icon}</span>}
      </button>
    </a>
  );
}

export default ButtonDownload;
