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

  const partners = [
    { name: "HGS Sistemas", logo: "/parceiros/image1.jpeg" },
    { name: "Vivotek", logo: "/parceiros/image3.jpeg" },
    { name: "Volkswagen Financial Services", logo: "/parceiros/image4.png" },
    { name: "Banco BV", logo: "/parceiros/image5.png" },
    { name: "Accenture", logo: "/parceiros/image6.png" },
    { name: "BMC", logo: "/parceiros/image7.png" },
    { name: "Synchro", logo: "/parceiros/image9.png" },
    { name: "SMSystem", logo: "/parceiros/image10.jpeg" },
    { name: "HP", logo: "/parceiros/image13.png" },
    { name: "CWS Tecnologia", logo: "/parceiros/image14.png" },
    { name: "IBM", logo: "/parceiros/image15.png" },
    { name: "TechX", logo: "/parceiros/image16.png" },
    { name: "Grupo Athia", logo: "/parceiros/image17.png" },
    { name: "Nova Rolamentos", logo: "/parceiros/image18.jpeg" },
    { name: "Isapa", logo: "/parceiros/image20.png" },
    { name: "Entelgy", logo: "/parceiros/image21.png" },
    { name: "ConsulTI", logo: "/parceiros/image22.jpeg" },
    { name: "Stefanini", logo: "/parceiros/image23.png" },
    { name: "Arvore do Bem", logo: "/parceiros/image24.png" },
    { name: "TOTVS", logo: "/parceiros/image26.jpeg" },
    { name: "Vlab", logo: "/parceiros/image27.png" },
    { name: "Engetex Inspecoes", logo: "/parceiros/image28.png" },
  ];

  return (
    <section id="projects" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* fundo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(255,234,252,0.16),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(34,65,95,0.28),transparent_55%)]" />

      <div className="relative container mx-auto px-6">
        <div
          ref={projectsRef}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-white">
            Soluções em Dados que{" "}
              <span className="bg-gradient-to-r from-[#ffeafc] to-[#87868a] bg-clip-text text-transparent">
              estruturam
              </span>{" "}
              e{" "}
              <span className="bg-gradient-to-r from-[#87868a] to-[#ffeafc] bg-clip-text text-transparent">
              impulsionam
              </span>{" "}
              seu negócio
            </h2>
            <p className="text-sm lg:text-xl text-white/70 max-w-4xl mx-auto">
              Você precisa de uma estrutura segura, performática e bem governada, que organize informações, reduza riscos e apoie decisões estratégicas com dados confiáveis.
            </p>
          </div>

          {/* Mensagens de venda (dor -> solução) */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl border border-white/10 bg-gray-800/40 backdrop-blur-sm p-7">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-[#22415f]/40 border border-[#87868a]/35 flex items-center justify-center shrink-0">
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
                <div className="h-11 w-11 rounded-xl bg-[#87868a]/30 border border-[#ffeafc]/20 flex items-center justify-center shrink-0">
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
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[#22415f]/35 border border-[#87868a]/35 text-white/85"
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
                title: "Otimização de Performance e Tuning",
                desc: "Análise e ajuste de queries, índices e recursos para máxima eficiência e redução de custos operacionais.",
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
                title: "Alta Disponibilidade e Disaster Recovery",
                desc: "Implementação de clusters, replicações, backups e planos de contingência para garantir disponibilidade contínua.",
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
                title: "Governança e Segurança da Informação",
                desc: "Controle de acessos, auditorias, políticas de segurança e conformidade para proteção estratégica dos dados.",
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
                title: "Análise de Dados e Inteligência para Negócios",
                desc: "Transformação de dados em informações estratégicas por meio de relatórios, dashboards e indicadores de performance.",
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
                title: "Consultoria em Processos e Melhoria Contínua",
                desc: "Diagnóstico técnico e otimização de fluxos operacionais, aumentando eficiência, confiabilidade e tomada de decisão baseada em dados.",
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
                title: "Migração e Modernização de Ambientes de Dados",
                desc: "Planejamento e execução de migrações com mínima indisponibilidade, evolução tecnológica e ganho de performance em ambientes legados.",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white/85"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 6.5C4 5.12 5.12 4 6.5 4h11C18.88 4 20 5.12 20 6.5v11c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 20 4 18.88 4 17.5v-11Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M8 12h8M13 8l3 4-3 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
                    <h3 className="text-lg font-bold text-white group-hover:text-[#ffeafc] transition-colors duration-300">
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

          {/* Parceiros atendidos */}
          <div className="mt-14">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              Empresas que confiaram em nossa atuação
              </h3>
              <p className="mt-3 text-white/70 max-w-3xl mx-auto">
              Organizações e operações que confiaram em nossa expertise para fortalecer seus ambientes de dados e processos críticos.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="group rounded-2xl border border-[#87868a]/35 bg-gray-800/35 backdrop-blur-sm p-4 sm:p-5 hover:bg-gray-800/45 transition-colors duration-300"
                >
                  <div className="h-20 sm:h-24 rounded-xl bg-white/95 flex items-center justify-center p-3">
                    <img
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                  <p className="mt-3 text-center text-sm font-semibold text-white/85 group-hover:text-[#ffeafc] transition-colors">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>

           
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-[#87868a]/35 bg-gradient-to-r from-[#22415f]/25 to-[#87868a]/20 p-6 sm:p-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
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
                className="btn-primary inline-flex items-center justify-center h-11 px-5 rounded-lg font-semibold transition w-full sm:w-auto"
              >
                Pedir orçamento
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center h-11 px-5 rounded-lg font-semibold transition w-full sm:w-auto"
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
