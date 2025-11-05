import { Card, CardContent } from "@/components/ui/card";
import laveSequeImage from "@/assets/WhatsApp Image 2025-11-04 at 18.32.26 (1).jpeg";

const Plans = () => {
  return (
    <section id="planos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-secondary to-foreground bg-clip-text text-transparent mb-4">
            oque lavamos ?
          </h2>
        </div>

        {/* Seção O que lavamos - Cards */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-20 px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            {/* Card 1: Para você */}
            <Card className="border-none shadow-lg bg-secondary/50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Para você
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Roupas do dia a dia, Lavagem por Cestos; Auto Serviço, Vestidos, Ternos, Blazer, Jaquetas, Seda, Linho, Couro, Tênis e muito mais. Nós aplicamos o tratamento ideal para cada tipo de peça.
                </p>
              </CardContent>
            </Card>

            {/* Card 2: Para sua casa */}
            <Card className="border-none shadow-lg bg-secondary/50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Para sua casa
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Lavamos Edredons, Cobertores, Colchas, Pillowtop, Coberdrom e Plumas de ganso.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Somos Especialistas em Tapetes, Cortinas, Sofás, Colchão.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Lavamos também carrinho de bebê, cadeirinha e pelúcias.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Lavamos cama PET.
                </p>
              </CardContent>
            </Card>

            {/* Card 3: Para sua empresa */}
            <Card className="border-none shadow-lg bg-secondary/50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Para sua empresa
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Lavamos todos os tipos de uniformes com preços diferenciados para empresas e clínicas.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Respeitamos a NR.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Emitimos Nota Fiscal e faturamos em boleto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Seção Lave e Seque suas roupas */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-secondary to-foreground bg-clip-text text-transparent mb-4">
              Tenha seu tempo livre Lave e Seque suas roupas Conosco !
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
            {/* Espaço para Imagem */}
            <div className="animate-scale-in order-2 md:order-1 pt-4 md:pt-6">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-secondary/20">
                <div className="aspect-square">
                  <img 
                    src={laveSequeImage} 
                    alt="Lave e Seque suas roupas" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Conteúdo de Informações */}
            <div className="animate-fade-in order-1 md:order-2 space-y-4">
              <Card className="border-none shadow-lg bg-secondary/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl flex-shrink-0 w-7 text-center">🧺</span>
                      <div className="flex-1">
                        <p className="text-base font-semibold text-foreground">
                          Limite da máquina em média de até 20 a 30 peças.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xl flex-shrink-0 w-7 text-center">💲</span>
                      <div className="flex-1">
                        <p className="text-base font-semibold text-foreground">
                          Valores: 72,00 reais o cesto (Lavar e Seca)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xl flex-shrink-0 w-7 text-center">💧</span>
                      <div className="flex-1">
                        <p className="text-base font-semibold text-foreground">
                          Máquinas de alta tecnologia que não encolhem as roupas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xl flex-shrink-0 w-7 text-center">🫧</span>
                      <div className="flex-1">
                        <p className="text-base font-semibold text-foreground">
                          Produtos hipoalergênicos e que não danificam as roupas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xl flex-shrink-0 w-7 text-center">💦</span>
                      <div className="flex-1">
                        <p className="text-base font-semibold text-foreground">
                          Máquinas higienizadas a cada ciclo.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xl flex-shrink-0 w-7 text-center">⏰</span>
                      <div className="flex-1">
                        <p className="text-base font-semibold text-foreground">
                          Roupas prontas em 70 minutos.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xl flex-shrink-0 w-7 text-center">😀</span>
                      <div className="flex-1">
                        <p className="text-base font-semibold text-foreground">
                          Um preço justo para quem precisa de tempo livre !
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xl flex-shrink-0 w-7 text-center">🚗</span>
                      <div className="flex-1">
                        <p className="text-base font-semibold text-foreground">
                          Delivery Grátis por agendamento
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Observações */}
              <Card className="border-none shadow-lg bg-muted/50">
                <CardContent className="p-6">
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-3">
                      Observações:
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Nossos colaboradores estão habilitados e treinados em calcular peso, limite de roupas e tecidos que se enquadram no processo e no ciclo da máquina.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
