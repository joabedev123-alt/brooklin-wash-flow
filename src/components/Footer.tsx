import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contato" className="relative bg-primary pt-20 pb-8 overflow-hidden">
      {/* Wave decoration at top */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-background">
        <svg
          className="absolute bottom-0 w-full h-20"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="hsl(48, 100%, 50%)"
            d="M0,50 Q360,100 720,50 T1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Brooklin Lavanderia
            </h3>
            <p className="text-secondary/80 leading-relaxed">
              Lavamos por você. Coleta e entrega de roupas em São Paulo e região.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Links Úteis</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("como-funciona")}
                  className="text-secondary/80 hover:text-secondary transition-colors"
                >
                  Como funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("planos")}
                  className="text-secondary/80 hover:text-secondary transition-colors"
                >
                  Planos
                </button>
              </li>
              <li>
                <a href="#" className="text-secondary/80 hover:text-secondary transition-colors">
                  Indique um amigo
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary/80 hover:text-secondary transition-colors">
                  Política de privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <a
                  href="mailto:contato@lavanderiabrooklin.com.br"
                  className="text-secondary/80 hover:text-secondary transition-colors"
                >
                  contato@lavanderiabrooklin.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <a
                  href="tel:+551155314546"
                  className="text-secondary/80 hover:text-secondary transition-colors"
                >
                  (11) 5531-4546
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <span className="text-secondary/80">
                  Rua Ribeiro do Vale, 596 – Brooklin, São Paulo
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/20 pt-8 text-center">
          <p className="text-secondary/70 text-sm">
            © 2025 Lavanderia Brooklin. Todos os direitos reservados.
          </p>
          <p className="text-secondary/60 text-xs mt-2">
            Design inspirado no modelo Vualá.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
