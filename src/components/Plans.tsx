import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

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

const Plans = () => {
  return (
    <section id="planos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Conheça nossos planos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
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
                  <span className="bg-primary text-secondary px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Mais Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4 mx-auto">
                  <span className="text-3xl">🧺</span>
                </div>
                <CardTitle className="text-2xl font-bold text-secondary mb-2">
                  {plan.name}
                </CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">
                  {plan.price}
                </div>
                <p className="text-muted-foreground">/ mês</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center py-4 bg-muted/50 rounded-lg">
                  <p className="text-2xl font-bold text-secondary">{plan.kg}</p>
                  <p className="text-sm text-muted-foreground">{plan.collections}</p>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-secondary font-semibold py-6 text-lg"
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
