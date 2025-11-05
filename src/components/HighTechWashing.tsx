import { Clock, Truck, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Para adicionar um vídeo, importe o arquivo aqui e descomente a linha abaixo:
// import videoSrc from "@/assets/seu-video-aqui.mp4";

const HighTechWashing = () => {
  // Defina esta variável quando tiver o vídeo:
  const hasVideo = false; // Mude para true quando tiver o vídeo

  return (
    <section id="lavagem-alta-tecnologia" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-secondary to-foreground bg-clip-text text-transparent mb-4 px-2">
              Lavagem de alta tecnologia 😱EXCLUSIVA 😱para lavar seus tapetes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            {/* Vídeo */}
            <div className="animate-scale-in order-2 md:order-1">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-secondary/20">
                <div className="aspect-video flex items-center justify-center">
                  {hasVideo ? (
                    <video
                      // src={videoSrc}
                      controls
                      className="w-full h-full object-cover"
                      playsInline
                    >
                      Seu navegador não suporta vídeos.
                    </video>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/30 to-secondary/10">
                      <p className="text-muted-foreground text-center px-4">
                        📹 Seu vídeo será exibido aqui
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Conteúdo de texto */}
            <div className="animate-fade-in order-1 md:order-2 space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                  Olha nosso vídeo e veja que incrível o nosso processo de lavagem, que elimina vírus, ácaros, bactérias, urina animal, mal odor e toda sujidade do dia a dia.
                </p>
                
                <div className="flex items-center gap-3 mb-8">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-xl md:text-2xl font-bold text-foreground">
                    Devolvemos como se fosse novo!
                  </p>
                </div>
              </div>

              {/* Cards de informações */}
              <div className="space-y-4">
                <Card className="border-none shadow-lg bg-secondary/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground">
                          <Clock className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          ⏱ Prazo
                        </h3>
                        <p className="text-muted-foreground">
                          10 dias corridos podendo sofrer alteração
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-secondary/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground">
                          <Truck className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          🚙 Delivery GRÁTIS 🤗
                        </h3>
                        <p className="text-muted-foreground">
                          Para tapetes igual ou maior que 3m²
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighTechWashing;

