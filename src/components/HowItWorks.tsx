import { Calendar, CreditCard, Shirt, Truck } from "lucide-react";

const steps = [
  {
    icon: Shirt,
    title: "Escolha o que deseja lavar",
    description: "Roupas do dia a dia, sapatos, edredons, cortinas, ternos e muito mais. Nós aplicamos o tratamento ideal para cada tipo de peça.",
  },
  {
    icon: Calendar,
    title: "Escolha o plano ideal",
    description: "Selecione o plano que combina com sua rotina — residencial, comercial ou express. Flexível, prático e sob medida para você.",
  },
  {
    icon: CreditCard,
    title: "Agende e realize o pagamento",
    description: "Escolha o melhor dia e horário pelo site ou WhatsApp e pague online, sem complicação. A coleta é rápida e segura.",
  },
  {
    icon: Truck,
    title: "Receba tudo de volta, limpo e cheiroso",
    description: "Suas roupas, sapatos e tecidos são lavados, passados e entregues na sua casa com o padrão de qualidade Brooklin.",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <article
              key={index}
              className="flex flex-col items-center text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-105 hover:shadow-xl bg-secondary">
                <step.icon className="w-8 h-8 text-secondary-foreground stroke-[1.8]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-[15px] text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
