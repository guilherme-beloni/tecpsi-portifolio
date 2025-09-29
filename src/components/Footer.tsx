const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo e descrição */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Guilherme Beloni
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Desenvolvedor Web Full Stack
            </p>
          </div>

          {/* Links de navegação */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Sobre
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Contato
            </a>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Guilherme Beloni. Todos os direitos reservados.
            </div>

            {/* Links sociais */}
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <span className="text-xl">🐙</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <span className="text-xl">💼</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <span className="text-xl">🐦</span>
              </a>
              <a
                href="mailto:contato@exemplo.com"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <span className="text-xl">📧</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mensagem adicional */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Feito com ❤️ usando React, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
