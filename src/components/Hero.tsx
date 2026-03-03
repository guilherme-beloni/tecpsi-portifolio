const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      {/* Fundo (bem próximo da referência) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#22415f] via-[#1b334c] to-[#000000]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(255,234,252,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(135,134,138,0.20),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-14 md:pb-16">
        {/* Conteúdo principal */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
          <div className="animate-fade-in-up text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] sm:leading-[1.05] text-white">
              Software inteligente
              <br />
              para negócios reais.
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-white/70 max-w-xl mx-auto lg:mx-0">
              Soluções sob medida com IA e visão de negócio.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#about"
                className="btn-primary inline-flex items-center justify-center h-11 px-5 rounded-lg font-semibold transition w-full sm:w-auto"
              >
                Saiba Mais
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center h-11 px-5 rounded-lg font-semibold transition w-full sm:w-auto"
              >
                Contate-nos
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              {/* brilho atrás da arte */}
              <div className="absolute -inset-8 sm:-inset-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,234,252,0.35),transparent_60%)] blur-2xl" />
              <img
                src="/psi-white-stroke.png"
                alt="PSI"
                className="relative w-[220px] sm:w-[360px] lg:w-[430px] h-auto drop-shadow-[0_25px_45px_rgba(34,65,95,0.30)] select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Preview inferior (dashboard real) */}
        <div className="mt-10 sm:mt-14 lg:mt-16">
          <div className="relative overflow-visible">
            {/* Luz / glow por trás do notebook */}
            <div
              className="absolute -inset-8 sm:-inset-10 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.12),transparent_55%)] blur-2xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -inset-10 sm:-inset-12 bg-[radial-gradient(circle_at_50%_45%,rgba(255,234,252,0.28),transparent_60%)] blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            {/* Sombra no “chão” */}
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[78%] h-24 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.75),transparent_70%)] blur-xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-6xl">
              <img
                src="/model.png"
                alt="Preview do sistema em notebook e celular"
                className="relative w-full h-auto block lg:scale-110 lg:origin-center drop-shadow-[0_30px_70px_rgba(0,0,0,0.65)]"
                draggable={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
