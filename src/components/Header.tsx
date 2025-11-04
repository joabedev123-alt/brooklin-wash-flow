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
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="Lavanderia Brooklin" className="h-10 sm:h-12 w-auto" />
            <span className="hidden sm:inline text-lg sm:text-xl font-bold bg-gradient-to-r from-primary-foreground via-secondary to-primary-foreground bg-clip-text text-transparent hover:from-secondary hover:via-primary hover:to-secondary transition-all duration-500">
              Lavanderia Brooklin
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-primary-foreground hover:text-secondary transition-all duration-300 font-medium relative group"
            >
              Como Funciona
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className="text-primary-foreground hover:text-secondary transition-all duration-300 font-medium relative group"
            >
              Planos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-primary-foreground hover:text-secondary transition-all duration-300 font-medium relative group"
            >
              Depoimentos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-primary-foreground hover:text-secondary transition-all duration-300 font-medium relative group"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-primary-foreground hover:text-secondary transition-all duration-300 font-medium relative group"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <Button 
              onClick={() => window.open("https://wa.me/551155314546", "_blank")}
              variant="outline" 
              className="border-primary-foreground bg-background text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              fale conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-primary-foreground/20 pt-4">
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-primary-foreground hover:text-secondary transition-all duration-300 font-medium text-left"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className="text-primary-foreground hover:text-secondary transition-all duration-300 font-medium text-left"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-primary-foreground hover:text-secondary transition-all duration-300 font-medium text-left"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-primary-foreground hover:text-secondary transition-all duration-300 font-medium text-left"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-primary-foreground hover:text-secondary transition-all duration-300 font-medium text-left"
            >
              Contato
            </button>
            <div className="flex flex-col gap-2 mt-2">
              <Button 
                onClick={() => window.open("https://wa.me/551155314546", "_blank")}
                variant="outline" 
                className="border-primary-foreground bg-background text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full"
              >
                fale conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
