import footerContent from '../../utils/footerContent';

function Footer() {
  return (
    <footer className="text-blueSuperDark mb-20 flex h-40 flex-col items-center justify-around gap-2 bg-white md:mb-0 xl:h-15 xl:flex-row">
      <p className="order-2 text-center md:text-lg xl:order-1 xl:text-base">
        © 2025 Ronalty — Todos os direitos reservados
      </p>

      <div className="order-1 flex w-full justify-around gap-6 pt-5 xl:order-2 xl:w-auto xl:pt-0">
        {footerContent.map(({ Icon, href, hoverColor }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`scale-150 transition-colors xl:scale-100 ${hoverColor} transition-transform duration-300 hover:scale-125`}
          >
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
