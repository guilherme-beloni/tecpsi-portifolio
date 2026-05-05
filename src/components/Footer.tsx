const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#000000] border-t border-[#ffeafc]/20">
      {/* glow sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,234,252,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(34,65,95,0.22),transparent_55%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffeafc]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex justify-center md:justify-start">
              <img
                src="/psi-branco.png"
                alt="PSI"
                className="h-14 md:h-16 w-auto"
                draggable={false}
                loading="lazy"
              />
            </div>

            <p className="mt-4 text-sm text-white/65 leading-relaxed text-center md:text-left max-w-md">
              Soluções digitais com foco em performance, usabilidade e escala —
              sites, sistemas e apps sob medida para negócios reais.
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4 max-w-md mx-auto md:mx-0">
              <p className="text-sm font-semibold text-white/90">
                Performance System
              </p>
              <p className="mt-1 text-xs text-white/70">
                CNPJ: 14.499.139/0001-36
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                Endereço: R MARIA CATHARINA CHIONHA GIABARDO, 381, Presidente
                Prudente, SP, BRASIL
              </p>
            </div>

            {/* Sociais */}
            <div className="mt-5 flex justify-center md:justify-start gap-3">
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/dbafer",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  label: "Email",
                  href: "mailto:fernando@tecpsi.com.br",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819v9.273L12 7.545l6.545 4.549V3.82h3.819A1.636 1.636 0 0 1 24 5.457z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={item.label}
                  className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors flex items-center justify-center"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div className="md:col-span-3">
            <div className="text-sm font-bold text-white">Navegação</div>
            <div className="mt-4 space-y-3 text-sm">
              {[
                { label: "Início", href: "#home" },
                { label: "Sobre", href: "#about" },
                { label: "Serviços", href: "#projects" },
                { label: "Contato", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-white/65 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div className="md:col-span-4">
            <div className="text-sm font-bold text-white">Contato direto</div>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href={`https://wa.me/5518996570715?text=${encodeURIComponent(
                  "Olá, vim pelo site e preciso de um orçamento!",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <span className="text-white/50">WhatsApp:</span>
                <span className="font-semibold text-white/85">
                 +55 (18) 99657-0715
                </span>
              </a>
              <a
                href="mailto:fernando@tecpsi.com.br"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <span className="text-white/50">Email:</span>
                <span className="font-semibold text-white/85">
                fernando@tecpsi.com.br
                </span>
              </a>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center justify-center h-11 px-5 rounded-lg font-semibold transition w-full sm:w-auto"
                >
                  Pedir orçamento
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/45 text-center sm:text-left">
            © {currentYear} PSI. Todos os direitos reservados.
          </p>
          <a
            href="#home"
            className="text-xs font-semibold text-white/60 hover:text-white transition-colors"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
