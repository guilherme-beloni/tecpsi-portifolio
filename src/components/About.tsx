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
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "Tailwind CSS", level: 95 },
    { name: "JavaScript", level: 90 },
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
              <span className="text-slate-300 bg-clip-text ">Sobre Mim</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sou um desenvolvedor apaixonado por criar experiências digitais
              inovadoras e funcionais. Com foco em performance, usabilidade e
              design, busco sempre entregar soluções que realmente fazem a
              diferença.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Informações pessoais */}
            <div className="space-y-6">
              <div className="bg-gray-700/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-600/50">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-green-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                  GB
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">
                  Guilherme Beloni
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  Desenvolvedor Full Stack com mais de 3 anos de experiência
                  criando aplicações web modernas e responsivas. Especializado
                  em React, React Native, TypeScript e Node.js, sempre buscando
                  as melhores práticas e tecnologias mais recentes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700/30 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-400">3+</div>
                  <div className="text-sm text-gray-400">
                    Anos de Experiência
                  </div>
                </div>
                <div className="bg-gray-700/30 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-400">20+</div>
                  <div className="text-sm text-gray-400">
                    Projetos Concluídos
                  </div>
                </div>
              </div>
            </div>

            {/* Habilidades */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Habilidades Técnicas</h3>
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
                        className="bg-gradient-to-r from-blue-500 to-green-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl border border-blue-500/20">
                <h4 className="text-lg font-semibold mb-3 text-blue-400">
                  Áreas de Especialização
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Frontend Development",
                    "Backend Development",
                    "UI/UX Design",
                    "Mobile Development",
                    "DevOps",
                    "Cloud & Deploy",
                  ].map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm hover:bg-blue-500/20 hover:text-blue-400 transition-colors duration-300"
                    >
                      {area}
                    </span>
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
