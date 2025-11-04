import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Lavanderia Brooklin" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-secondary hover:text-secondary/80 transition-colors font-medium"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className="text-secondary hover:text-secondary/80 transition-colors font-medium"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-secondary hover:text-secondary/80 transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-secondary hover:text-secondary/80 transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-secondary hover:text-secondary/80 transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
              Cadastrar
            </Button>
            <Button variant="secondary">Entrar</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-secondary/20 pt-4">
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-secondary hover:text-secondary/80 transition-colors font-medium text-left"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className="text-secondary hover:text-secondary/80 transition-colors font-medium text-left"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-secondary hover:text-secondary/80 transition-colors font-medium text-left"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-secondary hover:text-secondary/80 transition-colors font-medium text-left"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-secondary hover:text-secondary/80 transition-colors font-medium text-left"
            >
              Contato
            </button>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary w-full">
                Cadastrar
              </Button>
              <Button variant="secondary" className="w-full">Entrar</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
