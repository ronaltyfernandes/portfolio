import Button from '../../components/Button';
import SvgIcons from '../../components/SvgIcons';
import type { cardProjectsProps } from '../../types/types';
import { siGithub } from 'simple-icons';
import { ExternalLink } from 'lucide-react';
import AnimatedText from '../../components/animation/AnimatedText';

function CardProjects({
  title,
  description,
  projectLink,
  codeLink,
  image,
  icons,
}: cardProjectsProps) {
  return (
    <div className="bg-blue flex h-full flex-col rounded-md p-4 shadow-2xl transition-transform duration-300 hover:scale-105">
      <div className="h-64" onClick={() => undefined}>
        <img
          onClick={() => window.open(projectLink, '_blank')}
          src={image}
          alt={`projeto ${title} imagem`}
          className="h-full w-full rounded-t-sm object-cover"
        />
      </div>

      {/* icones */}
      <div className="flex flex-1 flex-col rounded-b-sm bg-white p-3">
<div className="bg-blueDark mb-1 flex flex-wrap items-center gap-1.5 rounded-md px-2 py-2 sm:gap-2">
  {icons?.map((icon, index) => (
    <div
      key={index}
      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-white sm:h-10 sm:w-10"
    >
      <SvgIcons
        icon={icon}
      />
    </div>
  ))}
</div>

        <h2 className="text-blueDark text-4xl font-semibold">{title}</h2>

        {/* bloco fixo para descrição */}
        <div className="h-28 overflow-hidden">
          <AnimatedText
            description={description}
            fontSize="text-md"
            typingSpeed={0.01}
          />
        </div>

        <div className="mt-auto flex gap-2">
          <Button
            text="Ver Projeto"
            link={projectLink}
            icon={<ExternalLink size={24} />}
          />
          <Button
            text="Ver Código"
            link={codeLink}
            icon={<SvgIcons icon={siGithub} />}
          />
        </div>
      </div>
    </div>
  );
}

export default CardProjects;
