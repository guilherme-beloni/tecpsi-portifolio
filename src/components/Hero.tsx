const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      {/* Fundo (bem próximo da referência) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1020] via-[#0a0f1f] to-[#070a12]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(168,85,247,0.20),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(99,102,241,0.18),transparent_55%)]" />
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
                className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-violet-600/20 hover:brightness-110 transition w-full sm:w-auto"
              >
                Saiba Mais
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-11 px-5 rounded-lg border border-white/20 bg-white/5 text-white/90 font-semibold hover:bg-white/10 transition w-full sm:w-auto"
              >
                Contate-nos
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              {/* brilho atrás da arte */}
              <div className="absolute -inset-8 sm:-inset-10 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.35),transparent_60%)] blur-2xl" />
              <img
                src="/logo.png"
                alt="Beloni"
                className="relative w-[220px] sm:w-[360px] lg:w-[430px] h-auto drop-shadow-[0_25px_45px_rgba(168,85,247,0.25)] select-none"
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
              className="absolute -inset-10 sm:-inset-12 bg-[radial-gradient(circle_at_50%_45%,rgba(168,85,247,0.22),transparent_60%)] blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            {/* Sombra no “chão” */}
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[78%] h-24 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.75),transparent_70%)] blur-xl pointer-events-none"
              aria-hidden="true"
            />
            <img
              src="/dash_mac.png"
              alt="Preview do dashboard no notebook"
              className="relative w-full h-auto block drop-shadow-[0_30px_70px_rgba(0,0,0,0.65)]"
              draggable={false}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
