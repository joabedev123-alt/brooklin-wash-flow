import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
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

const plans = [
  {
    name: "Plano 200",
    price: "R$ 200,00",
    kg: "15 kg",
    collections: "2 coletas por mês",
    features: [
      "Convênio Residual: +R$15",
      "Comercial: +R$25",
      "Indicado para quem lava semanalmente até 7,5 kg",
      "Validade de crédito: 60 dias",
    ],
  },
  {
    name: "Plano 600",
    price: "R$ 600,00",
    kg: "45 kg",
    collections: "6 coletas por mês",
    features: [
      "Convênio Residual: +R$15",
      "Comercial: +R$25",
      "Ideal para famílias ou pequenas empresas",
      "Validade de crédito: 60 dias",
    ],
    popular: true,
  },
  {
    name: "Plano 900",
    price: "R$ 900,00",
    kg: "75 kg",
    collections: "10 coletas por mês",
    features: [
      "Convênio Residual: +R$15",
      "Comercial: +R$25",
      "Atende grandes famílias e uso empresarial",
      "Validade de crédito: 60 dias",
    ],
  },
];

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
    alt: "Blackout, Lã, Seda e Peças com Enchimento",
    title: "Blackout, Lã, Seda e Peças com Enchimento",
    subtitle: "Cuidado técnico para tecidos delicados e de alto valor",
    description: "Realizamos a lavagem especializada de cortinas blackout, cobertores de lã, roupas de seda e peças com enchimento, utilizando processos controlados e produtos adequados para preservar textura, brilho e volume.\nCada item recebe tratamento individual, garantindo durabilidade e acabamento impecável.",
  },
  {
    image: blackoutImage2,
    alt: "Blackout, Lã, Seda e Peças com Enchimento",
    title: "Blackout, Lã, Seda e Peças com Enchimento",
    subtitle: "Cuidado técnico para tecidos delicados e de alto valor.",
    description: "Realizamos a lavagem especializada de cortinas blackout, cobertores de lã, roupas de seda e peças com enchimento, utilizando processos controlados e produtos adequados para preservar textura, brilho e volume.\nCada item recebe tratamento individual, garantindo durabilidade e acabamento impecável.",
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

        {/* Seção de Planos */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conheça nossos planos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.slice(1).map((plan, index) => (
            <Card
              key={index}
              className={`animate-slide-up relative border-2 ${
                plan.popular
                  ? "border-primary shadow-2xl scale-105"
                  : "border-border shadow-lg"
              } hover:shadow-xl transition-all duration-300`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Mais Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4 mx-auto shadow-lg">
                  <span className="text-3xl">🧺</span>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">
                  {plan.price}
                </div>
                <p className="text-muted-foreground">/ mês</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center py-4 bg-secondary/10 rounded-lg border-2 border-secondary/20">
                  <p className="text-2xl font-bold text-foreground">{plan.kg}</p>
                  <p className="text-sm text-muted-foreground">{plan.collections}</p>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-6 text-lg shadow-lg"
                >
                  Eu quero
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
