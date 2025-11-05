import { Card, CardContent } from "@/components/ui/card";
import laveSequeImage from "@/assets/WhatsApp Image 2025-11-04 at 18.32.26 (1).jpeg";
import sapatoImage from "@/assets/imagens/ChatGPT Image 4_11_2025, 12_43_51.png";
import camaBanhoImage from "@/assets/imagens/ChatGPT Image 4_11_2025, 12_41_56.png";
import cortinasImage from "@/assets/imagens/ChatGPT Image 4_11_2025, 13_29_07.png";
import roupasDelicadasImage from "@/assets/imagens/ChatGPT Image 4_11_2025, 13_47_37.png";
import casacosImage from "@/assets/imagens/ChatGPT Image 4_11_2025, 14_01_00.png";
import infantilImage from "@/assets/imagens/ChatGPT Image 4_11_2025, 14_06_45.png";
import uniformesImage from "@/assets/imagens/ChatGPT Image 4_11_2025, 14_21_59.png";
import petImage from "@/assets/imagens/ChatGPT Image 4_11_2025, 14_26_00.png";
import blackoutImage from "@/assets/imagens/ChatGPT Image 4_11_2025, 14_30_11.png";
import blackoutImage2 from "@/assets/imagens/aae5e18f-c585-4780-bf51-4e9f6869dfa7.png";

const services = [
  {
    image: sapatoImage,
    alt: "Sapato",
    title: "sapatos",
    subtitle: "Lavamos seus sapatos com o mesmo cuidado das suas roupas",
    description: "Higienização completa de calçados esportivos, sociais e casuais.\nRemovemos sujeira, odores e bactérias, mantendo o formato e o conforto originais.",
  },
  {
    image: camaBanhoImage,
    alt: "Cama e Banho",
    title: "cama e banho",
    subtitle: "Lençóis, toalhas e edredons impecáveis.",
    description: "Lavamos e higienizamos todas as peças de cama, mesa e banho — lençóis, fronhas, edredons, cobertores e toalhas — deixando tudo macio, perfumado e pronto para uso.",
  },
  {
    image: cortinasImage,
    alt: "Cortinas & Têxteis",
    title: "Cortinas & têxteis de casa",
    subtitle: "Cuidamos dos tecidos que deixam sua casa mais aconchegante.",
    description: "Lavamos e higienizamos cortinas, blackouts, voil, mantas, capas de sofá e almofadas com técnicas que removem ácaros, poeira e odores.\nTudo com cuidado profissional para manter a leveza e a beleza dos seus ambientes.",
  },
  {
    image: roupasDelicadasImage,
    alt: "Roupas Delicadas & Especiais",
    title: "Roupas Delicadas & Especiais",
    subtitle: "Cuidado premium para peças que exigem atenção extra.",
    description: "Tratamos com delicadeza cada peça especial — vestidos de festa, ternos, camisas sociais, seda, linho e tecidos finos.\nUtilizamos processos específicos e produtos adequados para preservar textura, cor e durabilidade, garantindo o toque e o caimento originais.",
  },
  {
    image: casacosImage,
    alt: "Casacos & Peças Técnicas",
    title: "Casacos & Peças Técnicas",
    subtitle: "Proteção e cuidado para roupas de frio e tecidos tecnológicos.",
    description: "Realizamos lavagem e higienização de jaquetas, casacos, parkas e peças com enchimento, preservando o formato, a textura e o desempenho térmico dos tecidos.\nCuidamos também de roupas impermeáveis e esportivas com produtos específicos e secagem controlada.",
  },
  {
    image: infantilImage,
    alt: "Infantil & Bebê",
    title: "Infantil & Bebê",
    subtitle: "Conforto e cuidado para as peças dos pequenos",
    description: "Lavamos bodies, macacões, mantinhas, cueiros e kit berço com produtos hipoalergênicos e processos suaves, preservando maciez e segurança para a pele do bebê.",
  },
  {
    image: uniformesImage,
    alt: "Uniformes & EPI",
    title: "Uniformes & EPI",
    subtitle: "Higienização profissional para quem trabalha com segurança.",
    description: "Realizamos a lavagem e desinfecção completa de uniformes profissionais, jalecos, aventais e equipamentos de proteção individual (EPI).\nRemovemos manchas, odores e resíduos industriais com produtos seguros e adequados, mantendo a integridade dos tecidos e o conforto no uso diário.",
  },
  {
    image: petImage,
    alt: "Roupas de Pet",
    title: "Roupas de Pet",
    subtitle: "Cuidado e higiene para o conforto do seu melhor amigo.",
    description: "Realizamos a lavagem e higienização completa de roupinhas, caminhas, mantas e acessórios pet.\nUtilizamos produtos neutros e hipoalergênicos, garantindo limpeza, remoção de odores e bem-estar para o seu animal de estimação.",
  },
  {
    image: blackoutImage,
    alt: "Tapetes Grandes, Couro e Camurça",
    title: "Tapetes Grandes, Couro e Camurça",
    subtitle: "Cuidado técnico para tecidos delicados e de alto valor",
    description: "Realizamos a lavagem e higienização profissional de tapetes grandes, peças de couro e camurça, com processos seguros que preservam textura, cor e maciez.\n\nRemovemos poeira, manchas e odores com produtos específicos e secagem controlada, garantindo resultados duradouros e acabamento premium.",
  },
  {
    image: blackoutImage2,
    alt: "Tapetes Grandes, Couro e Camurça",
    title: "Tapetes Grandes, Couro e Camurça",
    subtitle: "Cuidado técnico para tecidos delicados e de alto valor.",
    description: "Realizamos a lavagem e higienização profissional de tapetes grandes, peças de couro e camurça, com processos seguros que preservam textura, cor e maciez.\n\nRemovemos poeira, manchas e odores com produtos específicos e secagem controlada, garantindo resultados duradouros e acabamento premium.",
  },
];

const Plans = () => {
  return (
    <section id="planos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-secondary to-foreground bg-clip-text text-transparent mb-4">
            oque lavamos ?
          </h2>
        </div>

        {/* Seção O que lavamos - Grade */}
        <div className="max-w-7xl mx-auto mb-12 md:mb-20 px-2 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 items-start">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center h-full">
                {/* Imagem - altura fixa para alinhamento */}
                <div className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-secondary mb-4 md:mb-6 shadow-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={service.image} 
                    alt={service.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Conteúdo de texto - estrutura fixa para alinhamento */}
                <div className="flex flex-col w-full space-y-2 md:space-y-3">
                  {/* Título - altura mínima fixa */}
                  <div className="min-h-[2.5rem] md:min-h-[3rem] flex items-start justify-center">
                    <p className="text-foreground text-base sm:text-lg font-bold leading-tight px-2">
                      {service.title}
                    </p>
                  </div>
                  {/* Subtítulo - altura mínima fixa */}
                  <div className="min-h-[2.5rem] md:min-h-[3rem] flex items-start justify-center">
                    <p className="text-foreground text-xs sm:text-sm leading-relaxed underline px-2">
                      {service.subtitle}
                    </p>
                  </div>
                  {/* Descrição - altura mínima fixa */}
                  <div className="min-h-[6rem] md:min-h-[8rem] flex items-start justify-center">
                    <p className="text-muted-foreground text-xs leading-relaxed whitespace-pre-line px-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
