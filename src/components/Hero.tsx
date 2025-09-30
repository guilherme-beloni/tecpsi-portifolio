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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-green-500 to-slate-500 bg-clip-text text-transparent">
              Desenvolvedor Full Stack
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transformando ideias em soluções digitais com tecnologia e design
            moderno.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-green-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-600 text-gray-300 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Fale comigo
            </a>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-slate-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/5 left-40 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1 right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/8 right-1/8 w-40 h-40 bg-slate-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Scroll indicator - apenas para desktop */}
      <div className={`absolute hidden md:block bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
        showScrollIndicator ? 'opacity-100 animate-bounce' : 'opacity-0'
      }`}>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
