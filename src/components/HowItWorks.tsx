import { User, Home, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: User,
    title: "Para você",
    description: "Roupas do dia a dia, Lavagem por Cestos; Auto Serviço, Vestidos, Ternos, Blazer, Jaquetas, Seda, Linho, Couro, Tênis e muito mais. Nós aplicamos o tratamento ideal para cada tipo de peça.",
  },
  {
    icon: Home,
    title: "Para sua casa",
    description: "Lavamos Edredons, Cobertores, Colchas, Pillowtop, Coberdrom e Plumas de ganso.\n\nSomos Especialistas em Tapetes, Cortinas, Sofás, Colchão.\n\nLavamos também carrinho de bebê, cadeirinha e pelúcias.\n\nLavamos cama PET.",
  },
  {
    icon: Building2,
    title: "Para sua empresa",
    description: "Lavamos todos os tipos de uniformes com preços diferenciados para empresas e clínicas.\n\nRespeitamos a NR.\n\nEmitimos Nota Fiscal e faturamos em boleto.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Veja como é fácil deixar suas peças limpas e prontas para uso
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-none shadow-lg bg-secondary/50 hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-105 hover:shadow-xl bg-primary mb-4">
                    <step.icon className="w-8 h-8 text-primary-foreground stroke-[1.8]" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
