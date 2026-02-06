import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Analytics from "./components/Analytics";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll para navegação
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Analytics />
      <CustomCursor />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* Botão flutuante (WhatsApp) */}
      <a
        href={`https://wa.me/5518996809368?text=${encodeURIComponent(
          "Olá, vim pelo site e preciso de um orçamento!",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/30 hover:bg-white/10 transition-colors flex items-center justify-center"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white/85"
          aria-hidden="true"
        >
          <path
            d="M20.52 3.48A11.77 11.77 0 0 0 12.05 0C5.44 0 .07 5.36.07 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.92 11.92 0 0 0 5.8 1.48h.01c6.6 0 11.97-5.36 11.97-11.95 0-3.2-1.25-6.21-3.51-8.41ZM12.06 21.9h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.71.97.99-3.62-.23-.37a9.92 9.92 0 0 1-1.56-5.33c0-5.49 4.48-9.95 9.99-9.95a9.9 9.9 0 0 1 7.06 2.92 9.86 9.86 0 0 1 2.93 7.03c0 5.49-4.48 9.95-10.05 9.95Zm5.78-7.9c-.31-.15-1.83-.9-2.11-1-.28-.1-.49-.15-.7.15-.21.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.15-1.3-.48-2.47-1.53-.91-.81-1.52-1.81-1.7-2.12-.18-.31-.02-.48.13-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.21.05-.38-.03-.54-.08-.15-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.54.08-.82.38-.28.31-1.08 1.05-1.08 2.55s1.11 2.95 1.26 3.16c.15.21 2.18 3.32 5.28 4.66.74.32 1.31.51 1.76.65.74.24 1.41.2 1.94.12.59-.09 1.83-.75 2.09-1.48.26-.72.26-1.34.18-1.48-.08-.13-.28-.2-.59-.36Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
}

export default App;
