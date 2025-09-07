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
    <div className="bg-blue flex flex-col justify-between rounded-md p-4 shadow-2xl transition-transform duration-300 hover:scale-105">
      <div className="h-64" onClick={() => undefined}>
        <img
          onClick={() => window.open(projectLink, '_blank')}
          src={image}
          alt={`projeto ${title} imagem`}
          className="h-full w-full rounded-t-sm object-cover"
        />
      </div>
      <div className="flex h-4/5 flex-col justify-between rounded-b-sm bg-white p-3">
        <div className="bg-blueDark mb-1 flex w-full items-center gap-2 rounded-md px-2 py-2">
          {icons?.map((icon, index) => (
            <div className="rounded-sm bg-white p-1" key={index}>
              <SvgIcons icon={icon} size={28} />
            </div>
          ))}
        </div>

        <h2 className="text-blueDark text-4xl font-semibold">{title}</h2>

        {/* bloco fixo para descrição */}
        <div className="flex min-h-20 items-start">
          <AnimatedText
            description={description}
            fontSize="text-md"
            typingSpeed={0.01}
          />
        </div>

        <div className="mt-4 flex gap-2">
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
