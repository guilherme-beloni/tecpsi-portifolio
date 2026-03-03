import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Administração de Banco de Dados (Oracle / SQL Server / PostgreSQL)", level: 99 },
   
    { name: "Performance Tuning e Otimização de Queries", level: 99 },
 
    { name: "Modelagem de Dados e Arquitetura de Banco", level: 95 },
    { name: "Segurança de Dados e Hardening", level: 97 },
    { name: "Automação com Shell Script / PowerShell / Python", level: 90 },
    { name: "Ambientes Cloud (AWS RDS, Azure SQL, Google Cloud SQL)", level: 92 },
    { name: "Monitoramento e Troubleshooting Avançado", level: 98 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div
          ref={aboutRef}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-slate-300 bg-clip-text ">Sobre</span>
            </h2>

            <p className="text-sm text-left lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            Somos especialistas em gestão e arquitetura de dados, com foco em entregar ambientes robustos, seguros e escaláveis, alinhados aos objetivos estratégicos de cada organização.
            </p>
            <p className="text-sm text-left lg:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Com ampla experiência de mercado, apoiamos empresas na estruturação, otimização e governança de seus bancos de dados — da modelagem à alta disponibilidade, da performance à continuidade do negócio.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Informações pessoais */}
            <div className="space-y-6">
              <div className="bg-gray-700/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-600/50">
                <div className="w-30 h-30 mx-auto mb-6 rounded-full overflow-hidden border border-[#269ed0]/35 shadow-lg shadow-[#104561]/35 bg-gradient-to-br from-[#104561]/55 via-[#22415f]/45 to-[#269ed0]/35">
                  <img
                    src="/psi-symbol-grey.png"
                    alt="Equipe PSI"
                    className="w-full h-full object-contain object-center p-2"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">
                  Equipe PSI
                </h3>
                <p className="text-lg font-semibold text-center mb-4 text-[#ffeafc]">
                DBA & Analista de Dados Sênior
                </p>
                <p className="text-gray-300  text-sm lg:text-xl leading-relaxed">
                Atuamos na gestão estratégica de dados com foco em performance, segurança e alta disponibilidade. Trabalhamos com administração e arquitetura de bancos de dados, otimização de consultas e ambientes críticos. Visão analítica, responsabilidade técnica e compromisso com excelência operacional.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#22415f]/25 to-[#87868a]/25 p-6 rounded-xl border border-[#87868a]/35">
                <h4 className="text-lg font-semibold mb-4 text-[#ffeafc] text-center">
                  Números que representam minha experiência
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-700/30 p-4 rounded-lg text-left">
                    <div className="text-2xl font-bold text-[#ffeafc]">20+</div>
                    <div className="text-sm text-gray-400">
                      anos de atuação no mercado
                    </div>
                  </div>
                  <div className="bg-gray-700/30 p-4 rounded-lg text-left">
                    <div className="text-2xl font-bold text-[#ffeafc]">
                      330+
                    </div>
                    <div className="text-sm text-gray-400">
                      projetos entregues com sucesso
                    </div>
                  </div>
                  <div className="bg-gray-700/30 p-4 rounded-lg text-left">
                    <div className="text-2xl font-bold text-[#ffeafc]">
                      100%
                    </div>
                    <div className="text-sm text-gray-400">
                      feedbacks positivos
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Habilidades */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">
                Tecnologias & Especialidades
              </h3>
              <h4 className="text-xl font-semibold mb-4 text-[#ffeafc]">
                Stack Principal
              </h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-[#ffeafc] font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#22415f] to-[#87868a] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#22415f]/25 to-[#87868a]/25 rounded-xl border border-[#87868a]/35">
                <h4 className="text-lg font-semibold mb-3 text-[#ffeafc]">
                  Áreas de Atuação
                </h4>
                <div className="space-y-3">
                  {[
                    "Analista de Dados",
                    "Sistemas sob demanda",
                    "Consultor de Processos",
                    "Consultor em Otimização e Melhoria Contínua",
                    "Atuação Estratégica Técnica",
                    
                  ].map((area) => (
                    <div key={area} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#ffeafc] rounded-full"></div>
                      <span className="text-gray-300 text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
