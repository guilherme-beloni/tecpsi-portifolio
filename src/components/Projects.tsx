import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* fundo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(168,85,247,0.16),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(99,102,241,0.14),transparent_55%)]" />

      <div className="relative container mx-auto px-6">
        <div
          ref={projectsRef}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">
              Produtos & Serviços que{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                vendem
              </span>{" "}
              e{" "}
              <span className="bg-gradient-to-r from-indigo-300 to-violet-400 bg-clip-text text-transparent">
                organizam
              </span>{" "}
              seu negócio
            </h2>
            <p className="text-sm lg:text-xl text-white/70 max-w-4xl mx-auto">
              Você não precisa de “mais um site”. Você precisa de um sistema que
              gere demanda, automatize processos e ajude você a tomar decisões
              com dados.
            </p>
          </div>

          {/* Mensagens de venda (dor -> solução) */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl border border-white/10 bg-gray-800/40 backdrop-blur-sm p-7">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-violet-500/15 border border-violet-400/20 flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white/85"
                    aria-hidden="true"
                  >
                    <path
                      d="M14.5 3.5c-3.2.4-6.1 2.1-8 4.9l-1.9 2.8c-.5.7-.4 1.7.2 2.3l5.1 5.1c.6.6 1.6.7 2.3.2l2.8-1.9c2.8-1.9 4.5-4.8 4.9-8 .2-1.4.2-2.7.1-3.9a.9.9 0 0 0-.8-.8c-1.2-.1-2.5-.1-3.9.1Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 15l-1 4 4-1"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.2 8.2l7.6 7.6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14.6 9.4h.01"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Destaque-se no mercado e amplie suas vendas
                  </h3>
                  <p className="mt-2 text-white/70">
                    Um site de alto desempenho com copy e UX voltados para
                    conversão — e, quando necessário, sistemas personalizados
                    para escalar o atendimento e a operação.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Performance", "SEO", "Conversão", "Integrações"].map(
                      (item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/70"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gray-800/40 backdrop-blur-sm p-7">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-indigo-500/15 border border-indigo-400/20 flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white/85"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 3.5v2M17 3.5v2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4.5 7.5h15"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.5 5.5h11c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-11c-1.1 0-2-.9-2-2v-12c0-1.1.9-2 2-2Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 11h3M8 14.5h3M13 11h3M13 14.5h3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white uppercase tracking-tight">
                    Precisando otimizar a sua agenda de clientes?
                  </h3>
                  <p className="mt-2 text-white/70">
                    Centralize a operação e ganhe previsibilidade com uma gestão
                    completa: do agendamento ao relatório.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Gestão de serviços",
                      "Agendamentos",
                      "Estoque",
                      "Vendas",
                      "Relatórios",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 border border-violet-400/15 text-white/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lista de serviços */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Criação de sites e landing pages",
                desc: "Páginas rápidas, bonitas e focadas em conversão, com SEO e performance desde a base.",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white/85"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 6.5C3 5.12 4.12 4 5.5 4h13C19.88 4 21 5.12 21 6.5v11c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 20 3 18.88 3 17.5v-11Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M3 8h18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.2 6.2h.01M8.6 6.2h.01M11 6.2h.01"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 12.5h6M7 15.5h10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Desenvolvimento de sistemas",
                desc: "Sistemas sob medida para automatizar processos, reduzir retrabalho e aumentar eficiência.",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white/85"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 2.5c-3.6 0-6.5 2.9-6.5 6.5v2.5c0 3.9 2.8 7.5 6.5 7.5s6.5-3.6 6.5-7.5V9c0-3.6-2.9-6.5-6.5-6.5Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M9 9.5h6M9 12.5h6M10 15.5h4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8.5 21h7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Programa de fidelidade",
                desc: "Transforme clientes em recorrência com pontos, recompensas, campanhas e relatórios.",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white/85"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10h16v10.5c0 .83-.67 1.5-1.5 1.5h-13C4.67 22 4 21.33 4 20.5V10Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M3 10V8.5C3 7.67 3.67 7 4.5 7h15c.83 0 1.5.67 1.5 1.5V10H3Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M12 7v15"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 7c-1.6 0-3-1.05-3-2.35C9 3.5 10.1 3 11.1 3c1.2 0 2.1.7 2.9 2.1C14.8 3.7 15.7 3 16.9 3 17.9 3 19 3.5 19 4.65 19 5.95 17.6 7 16 7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Controle de estoque e gestão financeira",
                desc: "Entrada/saída, margem, fluxo de caixa, alertas e dashboards para decisões melhores.",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white/85"
                    aria-hidden="true"
                  >
                    <path
                      d="M4.5 7.5 12 3l7.5 4.5V16.5L12 21l-7.5-4.5V7.5Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.5 7.5 12 12l7.5-4.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 12v9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 5.2 16.5 9.7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Aplicativos para celular",
                desc: "Apps para Android/iOS para atendimento, pedidos, notificações e experiência premium.",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white/85"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.5 2.8h7c1.1 0 2 .9 2 2v14.4c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V4.8c0-1.1.9-2 2-2Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M9 6.5h6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 18.5h.01"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Design incluso no pacote",
                desc: "Designer de banner e telas para sua marca parecer grande — antes mesmo do primeiro clique.",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white/85"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 20.5c0-5.8 4.7-10.5 10.5-10.5H20"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14.5 10 19 5.5c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0L11.5 7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.2 8.8 15.2 14.8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.5 21h10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-gray-800/35 backdrop-blur-sm p-7 hover:bg-gray-800/45 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Amostras (preview + saiba mais) */}
          <div className="mt-14">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                Amostras em produção
              </h3>
              <p className="mt-3 text-white/70 max-w-3xl mx-auto">
                Alguns projetos reais para você visualizar o padrão de UI,
                performance e acabamento.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "DChef",
                  url: "https://www.dchef.com.br",
                  subtitle: "Site institucional + presença digital",
                },
                {
                  title: "Dr. Matheus Kasai",
                  url: "https://www.drmatheuskasai.com",
                  subtitle: "Site profissional focado em conversão",
                },
                {
                  title: "Club+ (App)",
                  url: "https://clubmais.app",
                  subtitle: "Plataforma / app com experiência premium",
                },
              ].map((sample) => {
                // Preview sem marca d’água (screenshot automático)
                // OBS: o thum.io espera a URL "crua" no path (não encodeURIComponent)
                const screenshotUrl = `https://image.thum.io/get/width/1400/${sample.url}`;

                return (
                  <div
                    key={sample.url}
                    className="group rounded-2xl border border-white/10 bg-gray-800/35 backdrop-blur-sm overflow-hidden hover:bg-gray-800/45 transition-colors duration-300"
                  >
                    {/* Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-white/5 to-white/0">
                      {/* Placeholder discreto (se o screenshot falhar) */}
                      <div
                        className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none"
                        aria-hidden="true"
                      >
                        <div className="w-[72%] max-w-xs">
                          <div className="h-3 rounded bg-white/10" />
                          <div className="mt-3 h-3 rounded bg-white/10 w-4/5" />
                          <div className="mt-6 h-24 rounded-xl bg-white/5 border border-white/10" />
                        </div>
                      </div>

                      <img
                        src={screenshotUrl}
                        alt={`Pré-visualização de ${sample.title}`}
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                        onError={(e) => {
                          const el = e.currentTarget as HTMLImageElement;
                          el.style.display = "none";
                        }}
                      />

                      {/* Overlay hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-end justify-between gap-3 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div>
                          <div className="text-sm font-bold text-white">
                            {sample.title}
                          </div>
                        </div>
                      
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-bold text-white">
                            {sample.title}
                          </h4>
                          <p className="mt-1 text-sm text-white/70">
                            {sample.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <a
                          href={sample.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-violet-300 hover:text-violet-200 transition-colors"
                        >
                          {new URL(sample.url).host}
                        </a>
                        <a
                          href={sample.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white transition-colors"
                        >
                          <span>Visite o site</span>
                          <span className="text-white/60">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-center text-xs text-white/45">
              *As pré-visualizações são capturadas automaticamente e podem levar
              alguns segundos para atualizar.
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 p-6 sm:p-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Vamos montar a solução ideal para o seu negócio?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-white/70 max-w-2xl mx-auto lg:mx-0">
                Me conte seu cenário (segmento, volume de atendimento, dores e
                metas). Eu retorno com uma proposta objetiva de escopo e
                cronograma.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-end">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-11 px-5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-violet-600/20 hover:brightness-110 transition w-full sm:w-auto"
              >
                Pedir orçamento
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-11 px-5 rounded-lg border border-white/20 bg-white/5 text-white/90 font-semibold hover:bg-white/10 transition w-full sm:w-auto"
              >
                Tirar dúvidas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
