interface SvgIconsProps {
  icon: {
    path: string;
    viewBox?: string;
    hex?: string;
    size?: number;
  };
  color?: string;
  size?: number;
}

function SvgIcons({ icon, color, size = 24 }: SvgIconsProps) {
  const fillColor = color ?? icon.hex ?? '#2563eb';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={icon.viewBox || '0 0 24 24'}
      width={size}
      height={size}
      className="inline-block transition-transform duration-300 hover:scale-125"
    >
      <path d={icon.path} fill={`#${fillColor}`} />
    </svg>
  );
}

export default SvgIcons;
