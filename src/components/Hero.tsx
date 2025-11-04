import heroVideo from "@/assets/WhatsApp Video 2025-11-03 at 10.53.34.mp4";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative bg-primary pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 wave-divider overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in flex flex-col items-center text-center">
            <div className="mb-6 md:mb-8">
              <img src={logo} alt="Lavanderia Brooklin" className="h-20 sm:h-24 md:h-32 lg:h-40 w-auto mx-auto" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight px-2">
              Brooklin a maior Lavanderia do bairro
            </h1>
          </div>

          {/* Hero Video */}
          <div className="animate-scale-in max-w-full sm:max-w-md mx-auto w-full">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-2xl md:rounded-3xl shadow-2xl"
            >
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
