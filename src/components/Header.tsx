import { useState, useEffect } from "react";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: Array<{
    name: string;
    href: string;
    hasDropdown?: boolean;
  }> = [
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#projects", hasDropdown: false },

    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Overlay do fundo (evita “linha branca” durante a transição) */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          scrolled || isMenuOpen ? "opacity-100" : "opacity-0"
        } bg-[#22415f]/90 backdrop-blur-md shadow-lg border-b border-[#ffeafc]/20`}
        aria-hidden="true"
      />

      <nav className="relative max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 select-none"
            aria-label="Ir para o início"
          >
            <img
              src="/psi-branco.png"
              alt="PSI"
              className="h-8 md:h-12 w-auto"
              draggable={false}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-80"
                      aria-hidden="true"
                    >
                      <path
                        d="M7 10l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </a>
              ))}
            </div>
            {/*   <button
              type="button"
              aria-label="Pesquisar"
              className="h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M21 21l-4.35-4.35"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>

              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                  isMenuOpen ? " hidden" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-4 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.8 w-6" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="inline-flex items-center gap-2">
                  {item.name}
                  {item.hasDropdown ? (
                    <span className="text-white/40">▾</span>
                  ) : null}
                </span>
              </a>
            ))}
            {/*     <button
              type="button"
              className="w-full text-left text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Buscar
            </button> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
