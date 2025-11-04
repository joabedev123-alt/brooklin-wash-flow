import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative bg-primary pt-32 pb-20 md:pt-40 md:pb-32 wave-divider overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
              A sua lavanderia delivery por assinatura
            </h1>
            <p className="text-lg md:text-xl text-secondary/80 mb-8 leading-relaxed">
              Suas roupas limpas, passadas e organizadas, toda semana, na porta da sua casa.
            </p>
          </div>

          {/* Hero Image */}
          <div className="animate-scale-in">
            <img
              src={heroImage}
              alt="Pessoa usando smartphone para agendar lavanderia"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
