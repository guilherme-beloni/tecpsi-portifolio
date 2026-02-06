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
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "React / Next.js", level: 90 },
    { name: "TypeScript / JavaScript", level: 85 },
    { name: "Node.js / Express", level: 80 },
    { name: "Tailwind CSS / Framer Motion", level: 75 },
    { name: "PostgreSQL / MongoDB / Redis", level: 70 },
    { name: "Docker / CI/CD / Cloud", level: 65 },
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
              Sou especialista em desenvolvimento full stack com foco em
              entregar soluções digitais robustas, escaláveis e alinhadas aos
              objetivos estratégicos de cada cliente.
            </p>
            <p className="text-sm text-left lg:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Com mais de 5 anos de atuação, ajudamos empresas a transformar
              ideias em produtos digitais de alto impacto — da interface ao
              backend, da prototipação ao deploy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Informações pessoais */}
            <div className="space-y-6">
              <div className="bg-gray-700/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-600/50">
                <div className="w-30 h-30 mx-auto mb-6 rounded-full overflow-hidden border border-white/10 shadow-lg shadow-black/30">
                  <img
                    src="/gui.jpeg"
                    alt="Guilherme Beloni"
                    className="w-full h-full object-cover object-center"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">
                  Guilherme Beloni
                </h3>
                <p className="text-lg font-semibold text-center mb-4 text-blue-400">
                  Tech Lead & Full Stack Developer
                </p>
                <p className="text-gray-300  text-sm lg:text-xl leading-relaxed">
                  Atuo liderando e executando projetos de alto nível com foco em
                  performance, usabilidade e escalabilidade. Trabalho com
                  tecnologias modernas como React, TypeScript, Node.js e
                  infraestrutura em nuvem. "Visão de negócio, responsabilidade
                  técnica e compromisso com entregas de excelência."
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-violet-500/10 p-6 rounded-xl border border-blue-500/20">
                <h4 className="text-lg font-semibold mb-4 text-blue-400 text-center">
                  Números que representam minha experiência
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-700/30 p-4 rounded-lg text-left">
                    <div className="text-2xl font-bold text-blue-400">5+</div>
                    <div className="text-sm text-gray-400">
                      anos de atuação no mercado
                    </div>
                  </div>
                  <div className="bg-gray-700/30 p-4 rounded-lg text-left">
                    <div className="text-2xl font-bold text-violet-400">20+</div>
                    <div className="text-sm text-gray-400">
                      projetos entregues com sucesso
                    </div>
                  </div>
                  <div className="bg-gray-700/30 p-4 rounded-lg text-left">
                    <div className="text-2xl font-bold text-purple-400">
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
              <h4 className="text-xl font-semibold mb-4 text-blue-400">
                Stack Principal
              </h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-violet-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-xl border border-blue-500/20">
                <h4 className="text-lg font-semibold mb-3 text-blue-400">
                  Áreas de Atuação
                </h4>
                <div className="space-y-3">
                  {[
                    "Desenvolvimento Web Full Stack",
                    "Sistemas sob demanda",
                    "Integrações com APIs e automações",
                    "Aplicações mobile com React Native",
                    "UI/UX orientado à performance",
                    "Deploy, monitoramento e escalabilidade em nuvem",
                  ].map((area) => (
                    <div key={area} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
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
