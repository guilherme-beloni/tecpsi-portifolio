import { useEffect, useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 2,
      title: "Saddles - E-commerce Platform",
      description:
        "Plataforma de e-commerce moderna com carrinho de compras, sistema de pagamentos e painel administrativo completo.",
      image: "/p1.jpg",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      liveUrl: "https://saddles.vercel.app",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Job Beta - Rust Platform",
      description:
        "Plataforma de vagas de emprego desenvolvida em Rust com interface moderna e sistema de busca avançada.",
      image: "/p2.jpg",
      technologies: ["Rust", "React", "TypeScript", "PostgreSQL"],
      liveUrl: "https://job-beta-rust.vercel.app",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description:
        "Ferramenta de análise de redes sociais com métricas detalhadas e relatórios personalizáveis.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Website pessoal responsivo com animações suaves e design minimalista.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Chat Application",
      description:
        "Aplicação de chat em tempo real com salas privadas, compartilhamento de arquivos e criptografia.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Socket.io", "Node.js", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Bloquear scroll quando modal estiver aberto
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup: restaurar scroll quando componente desmontar
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div
          ref={projectsRef}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-slate-300 bg-clip-text ">
                Meus Projetos
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Uma seleção dos meus projetos mais recentes e impactantes
            </p>
          </div>

          {/* Grid de projetos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Imagem do projeto */}
                <div className="relative overflow-hidden">
                  {project.image && project.image !== "/api/placeholder/600/400" ? (
                    <div className="relative w-full h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ) : (
                    <div className="w-full h-64 bg-gray-700/50 animate-pulse overflow-hidden">
                      {/* Skeleton para imagem */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-600/30 to-gray-700/30 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                        <div className="absolute top-4 left-4 w-8 h-8 bg-gray-600/50 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-4 right-4 w-12 h-3 bg-gray-600/50 rounded animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-4 bg-gray-600/50 rounded animate-pulse"></div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Overlay com botões */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
                      >
                        Ver Detalhes
                      </button>
                      <a
                        href={project.liveUrl}
                        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 transform hover:scale-105"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>

                {/* Conteúdo do card */}
                <div className="p-6">
                  {project.image && project.image !== "/api/placeholder/600/400" ? (
                    <>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-xs font-semibold rounded-full">
                            Destaque
                          </span>
                        )}
                      </div>

                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tecnologias */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Skeleton para título */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="h-6 bg-gray-700/50 rounded animate-pulse w-3/4"></div>
                        <div className="h-5 bg-gray-700/50 rounded-full animate-pulse w-16"></div>
                      </div>

                      {/* Skeleton para descrição */}
                      <div className="space-y-2 mb-4">
                        <div className="h-4 bg-gray-700/50 rounded animate-pulse w-full"></div>
                        <div className="h-4 bg-gray-700/50 rounded animate-pulse w-5/6"></div>
                        <div className="h-4 bg-gray-700/50 rounded animate-pulse w-4/6"></div>
                      </div>

                      {/* Skeleton para tecnologias */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="h-6 bg-gray-700/50 rounded-full animate-pulse w-16"></div>
                        <div className="h-6 bg-gray-700/50 rounded-full animate-pulse w-20"></div>
                        <div className="h-6 bg-gray-700/50 rounded-full animate-pulse w-14"></div>
                        <div className="h-6 bg-gray-700/50 rounded-full animate-pulse w-18"></div>
                      </div>
                    </>
                  )}

                  {/* Links */}
                  <div className="flex space-x-4">
                    {project.image && project.image !== "/api/placeholder/600/400" ? (
                      <>
                        <a
                          href={project.liveUrl}
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center space-x-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>🌐</span>
                          <span className="text-sm">Live Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                          </svg>
                          <span className="text-sm">Código</span>
                        </a>
                      </>
                    ) : (
                      <>
                        <div className="h-4 bg-gray-700/50 rounded animate-pulse w-20"></div>
                        <div className="h-4 bg-gray-700/50 rounded animate-pulse w-16"></div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de detalhes do projeto */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  ✕
                </button>
              </div>

              <div className="w-full h-80 rounded-lg mb-6 overflow-hidden">
                {selectedProject.image && selectedProject.image !== "/api/placeholder/600/400" ? (
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🚀</div>
                  </div>
                )}
              </div>

              <p className="text-gray-300 mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Tecnologias Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={selectedProject.liveUrl}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Código
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
