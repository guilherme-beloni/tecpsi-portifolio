import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroRef.current.style.transform = `translateY(${parallax}px)`;
      }

      // Ocultar scroll indicator quando o usuário fizer scroll
      if (window.pageYOffset > 50) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative px-6 min-h-screen flex items-center justify-center overflow-hidden "
    >
      {/* Background com efeito parallax */}
      <div
        ref={heroRef}
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna de texto */}
          <div className="order-1 lg:order-1 text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
              <span className="bg-gradient-to-r  from-green-400 to-blue-500 bg-clip-text text-transparent">
                Desenvolvedor
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Full Stack.
              </span>
            </h1>

            <p className="text-base md:text-lg font-bold text-gray-300 mb-8 leading-relaxed max-w-lg">
            Desenvolvimento de aplicações modernas, performáticas e escaláveis
            para empresas que exigem excelência.
            </p>

            {/* Cards de informação com links minimalistas */}
            <div className="flex flex-row gap-4">
              <div className="bg-transparent backdrop-blur-sm p-0 flex flex-col flex-1">
                <p className="text-xs lg:text-base text-gray-300 leading-relaxed mb-3">
                  Altamente qualificado em aprimoramento progressivo, sistemas de design e engenharia de interface do usuário.
                </p>
                <a
                  href="#projects"
                  className="text-sm font-medium text-green-400 hover:text-green-300 transition-colors duration-300 relative inline-block group w-fit mt-auto"
                >
                  Ver Projetos →
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
                </a>
              </div>
              <div className="bg-transparent backdrop-blur-sm p-0 flex flex-col flex-1">
                <p className="text-xs lg:text-base text-gray-300 leading-relaxed mb-3">
                  Experiência comprovada na criação de produtos de sucesso para clientes em vários países.
                </p>
                <a
                  href="#contact"
                  className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-300 relative inline-block group w-fit mt-auto"
                >
                  Fale comigo →
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
                </a>
              </div>
            </div>
          </div>

          {/* Coluna de imagem */}
          <div className="order-2 pt-15 lg:pt-0 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decoração de fundo - verde */}
              <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 w-48 h-48 md:w-80 md:h-80 bg-green-500/20 rounded-3xl -z-10"></div>

              {/* Elementos decorativos */}
              <div className="absolute -top-3 -left-3 lg:-top-4 lg:-left-4 w-14 h-14 lg:w-20 lg:h-20 border-2 border-green-500/30 rounded-lg"></div>
              <div className="absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-4 w-12 h-12 lg:w-16 lg:h-16 border-2 border-blue-500/30 rounded-full"></div>
              <div className="absolute top-1/2 -right-6 lg:-right-8 flex flex-col gap-2">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
              </div>

              {/* Padrão de pontos */}
              <div className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 grid grid-cols-6 gap-1 lg:gap-2 opacity-50">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={i}
                    className="w-0.5 h-0.5 lg:w-1 lg:h-1 bg-green-500 rounded-full"
                  ></div>
                ))}
              </div>

              {/* Foto principal */}
              <div className="relative  w-48 h-48 md:w-80 md:h-80 overflow-hidden rounded-3xl border-4 border-gray-700/50 shadow-2xl">
                <img
                  src="/foto.png"
                  alt="Guilherme Beloni"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - apenas para desktop */}
      <div
        className={`absolute hidden md:block bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
          showScrollIndicator ? "opacity-100 animate-bounce" : "opacity-0"
        }`}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
