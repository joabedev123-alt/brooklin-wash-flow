import { Calendar, CreditCard, Shirt, Truck } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Escolha o seu plano mensal",
    description: "Escolha o plano ideal para você, com certeza uma opção se ajusta à sua rotina.",
  },
  {
    icon: CreditCard,
    title: "Realize o pagamento e agendamento",
    description: "Agende o dia e forma de pagamento pelo site ou aplicativo — sem necessidade de contato.",
  },
  {
    icon: Shirt,
    title: "Comece a separar suas roupas sujas",
    description: "Coloque as peças em sacos separados por cor ou tipo de roupa, sem complicação.",
  },
  {
    icon: Truck,
    title: "Receba as roupas em sua casa",
    description: "Suas roupas limpas, passadas e organizadas, no conforto da sua casa.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Veja como é fácil ter suas roupas lavadas e passadas
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="animate-slide-up text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-6 shadow-lg">
                <step.icon className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
