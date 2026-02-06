import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const whatsappNumber = "+55 18 99680-9368";
  const whatsappUrl = `https://wa.me/5518996809368?text=${encodeURIComponent(
    "Olá, vim pelo site e preciso de um orçamento!",
  )}`;

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: "https://github.com/guilherme-beloni",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: "https://linkedin.com",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: "https://www.instagram.com/guiibeloni",
    },
    {
      name: "Email",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v9.273L12 7.545l6.545 4.549V3.82h3.819A1.636 1.636 0 0 1 24 5.457z" />
        </svg>
      ),
      url: "mailto:adsguilhermezb@gmail.com",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div
          ref={contactRef}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className=" bg-clip-text text-slate-300">Contato</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de contato */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-6 text-white">
                  Vamos criar algo grandioso juntos!
                </h3>
                <p className="text-gray-300 text-sm lg:text-xl leading-relaxed mb-8">
                  Atendemos empresas, agências e empreendedores que buscam
                  parceiros técnicos para desenvolver projetos digitais com
                  excelência.
                </p>
              </div>

              {/* Links sociais */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">
                  Conecte-se comigo
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                    >
                      <span className="text-gray-400 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Informações adicionais */}
              <div className="bg-gradient-to-r from-blue-500/10 to-violet-500/10 p-6 rounded-xl border border-blue-500/20">
                <h4 className="text-lg font-semibold mb-3 text-blue-400">
                  Informações
                </h4>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>
                      <strong>Presidente Prudente – SP</strong>
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                    <span>
                      <strong>
                        Atendimento para empresas em todo o Brasil
                      </strong>
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                    <span>
                      <strong>
                        Agenda disponível para novos projetos estratégicos
                      </strong>
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16.5c-.83 0-1.5.67-1.5 1.5V14h3v8h2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9.5C9 8.12 7.88 7 6.5 7S4 8.12 4 9.5V15H2.5v7h5z" />
                    </svg>
                    <span>
                      <strong>
                        Parcerias B2B sob demanda e contratos recorrentes
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cartão de visitas (WhatsApp) */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-800/45 to-gray-800/25 backdrop-blur-sm p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.18),transparent_55%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(99,102,241,0.14),transparent_55%)] pointer-events-none" />

              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-start items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
                  <div className="w-full">
                    <div className="text-xs tracking-widest text-white/50 uppercase">
                      Cartão de visitas
                    </div>
                    <h3 className="mt-2 text-xl sm:text-2xl font-extrabold text-white">
                      Guilherme Beloni
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-white/70 font-semibold">
                      Tech Lead & Full Stack Developer
                    </p>
                  </div>

                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <span className="text-2xl">💬</span>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5 text-center sm:text-left">
                  <div className="text-xs text-white/50">WhatsApp</div>
                  <div className="mt-1 text-base sm:text-lg font-bold text-white">
                    {whatsappNumber}
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row flex-wrap gap-3 justify-center sm:justify-start">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-violet-600/20 hover:brightness-110 transition w-full sm:w-auto"
                    >
                      Chamar no WhatsApp
                    </a>
                    <a
                      href="mailto:adsguilhermezb@gmail.com"
                      className="inline-flex items-center justify-center h-11 px-5 rounded-lg border border-white/20 bg-white/5 text-white/90 font-semibold hover:bg-white/10 transition w-full sm:w-auto"
                    >
                      Enviar e-mail
                    </a>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-white/50">
                      Tempo de resposta
                    </div>
                    <div className="mt-1 text-white font-semibold">
                      Rápido no horário comercial
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-white/50">Atendimento</div>
                    <div className="mt-1 text-white font-semibold">
                      Brasil inteiro (remoto)
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-xs text-white/45 text-center sm:text-left">
                  Prefere algo mais direto? Me chama no WhatsApp com uma frase:
                  “Quero um orçamento para…”
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
