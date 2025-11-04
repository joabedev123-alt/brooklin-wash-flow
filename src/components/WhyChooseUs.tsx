import { Sparkles, DollarSign, Clock, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: Sparkles,
    title: "Suas roupas sempre bem cuidadas",
    description: "Entregamos suas roupas limpas e cheirosas com tratamento adequado para cada tipo de tecido.",
  },
  {
    icon: DollarSign,
    title: "Mais economia e praticidade",
    description: "Coletamos, lavamos e entregamos na sua casa, com até 40% de economia em relação à lavanderia tradicional.",
  },
  {
    icon: Clock,
    title: "Autonomia no seu dia a dia",
    description: "Você tem controle total: agenda, pausa ou altera o serviço quando quiser, sem estresse.",
  },
  {
    icon: Heart,
    title: "O seu tempo é o nosso tempo",
    description: "Nosso serviço foi pensado para você aproveitar mais a vida e menos tempo lavando roupas.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Quatro motivos para você escolher a Brooklin Lavanderia 😉
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="animate-slide-up border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary">
                      <reason.icon className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
