import { useState } from "react";

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "galeria", label: "Galeria" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "planta", label: "Planta" },
  { id: "comodidades", label: "Comodidades" },
  { id: "localizacao", label: "Localização" },
];

const SocialIcon = () => (
  <a
    href="https://www.instagram.com/housebitapp/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-6 h-6 text-studio-dark hover:text-studio-blue transition-colors"
    aria-label="Instagram"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>
);

const MenuIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 30V26.6667H35V30H5ZM5 21.6667V18.3333H35V21.6667H5ZM5 13.3333V10H35V13.3333H5Z"
      fill="#161F2E"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 15L7.5 10L12.5 5" stroke="#161F2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Logo() {
  return <h1 className="text-studio-dark text-2xl font-fagun font-black leading-7">Studio Universidade</h1>;
}

function ContactButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex h-10 px-8 py-4 justify-center items-center gap-2.5 rounded-full bg-studio-dark text-white font-fanun text-xl font-normal leading-5"
    >
      Entre em contato
    </button>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const renderButtons = (className: string) =>
    NAV_ITEMS.map(({ id, label }) => (
      <button
        key={id}
        onClick={() => scrollToSection(id)}
        className={className + " hover:text-studio-blue transition-colors"}
      >
        {label}
      </button>
    ));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white max-content-wrapper">
      {/* Desktop */}
      <div className="hidden lg:flex  h-20 px-10 items-center max-content-wrapper w-full">
        <Logo />
        <nav className="flex flex-1 justify-center items-center gap-16">
          {renderButtons("text-studio-dark font-fagun font-bold text-xl leading-7")}
        </nav>
        <div className="flex items-center gap-16">
          <SocialIcon />
          <ContactButton onClick={() => scrollToSection("contato")} />
        </div>
      </div>

      {/* Tablet */}
      <div className="hidden md:flex lg:hidden w-full h-20 px-10 justify-between items-center max-content-wrapper">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Menu">
          <MenuIcon />
        </button>
        <Logo />
        <div className="flex items-center gap-4">
          <SocialIcon />
          <ContactButton onClick={() => scrollToSection("contato")} />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden flex-col w-full bg-white max-content-wrapper">
        <div className="flex w-full h-16 px-6 justify-between items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Menu">
            <MenuIcon />
          </button>
          <Logo />
          <SocialIcon />
        </div>
        <ContactButton onClick={() => scrollToSection("contato")} />
        <div className="flex mx-6 mb-6 px-4 py-2 justify-center items-center gap-1 bg-studio-yellow shadow-[0_4px_12px_0_rgba(0,0,0,0.12)]">
          <span className="text-studio-blue text-center font-fanun text-base font-normal">Previsão de entrega em:</span>
          <span className="text-studio-blue font-fanun text-xl font-black">01/09/2025</span>
        </div>
      </div>

      {/* Slide Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:relative lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed top-0 left-0 w-full md:w-[279px] bg-white rounded-b-[4px] shadow-lg md:absolute md:top-20 md:left-10">
            <div className="flex justify-between items-center px-6 py-4">
              <Logo />
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <CloseIcon />
              </button>
            </div>
            <div className="px-6 py-4 border-t border-b border-black border-opacity-30">
              <nav className="flex flex-col gap-6">
                {renderButtons("text-studio-dark font-fanun text-xl font-normal leading-7 text-left")}
              </nav>
            </div>
            <div className="px-6 py-6">
              <ContactButton onClick={() => scrollToSection("contato")} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
