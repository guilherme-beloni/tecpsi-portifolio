import { useEffect, useRef, useState } from "react";
import { useContactForm } from "../hooks/useContactForm";
import EmailModal from "./EmailModal";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const { formData, formState, handleInputChange, handleSubmit, closeModal } =
    useContactForm();

  const socialLinks = [
    { name: "GitHub", icon: "🐙", url: "https://github.com" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
    { name: "Twitter", icon: "🐦", url: "https://twitter.com" },
    { name: "Email", icon: "📧", url: "mailto:contato@exemplo.com" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
              <span className=" bg-clip-text text-slate-300">
                Entre em Contato
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Vamos trabalhar juntos! Entre em contato para discutir seu próximo
              projeto
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de contato */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Vamos conversar!
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Estou aberto a novas ideias, novos projetos e oportunidades.
                  Se você tem uma ideia ou precisa de ajuda com desenvolvimento,
                  entre em contato!
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
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
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
              <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 p-6 rounded-xl border border-blue-500/20">
                <h4 className="text-lg font-semibold mb-3 text-blue-400">
                  Informações
                </h4>
                <div className="space-y-2 text-gray-300">
                  <p>📍 Presidente Prudente - SP, Brasil</p>
                  <p>⏰ Disponível para novos projetos</p>
                  <p>💼 Aberto a oportunidades</p>
                </div>
              </div>
            </div>

            {/* Formulário de contato */}
            <div className="bg-gray-700/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-600/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300 resize-none"
                    placeholder="Conte-me sobre seu projeto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-green-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {formState.isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </span>
                  ) : (
                    "Enviar Mensagem"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de confirmação */}

      <EmailModal
        isOpen={formState.showModal}
        onClose={closeModal}
        status={formState.modalStatus}
        message={formState.message}
      />
    </section>
  );
};

export default Contact;
