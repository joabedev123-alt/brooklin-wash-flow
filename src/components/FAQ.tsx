import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o sistema de assinatura da Brooklin Lavanderia?",
    answer: "Você escolhe um plano mensal que se ajusta à sua necessidade, agenda as coletas pelo site ou app, e nós cuidamos de tudo: coletamos suas roupas, lavamos com cuidado e devolvemos limpas e passadas na sua casa.",
  },
  {
    question: "Quais são as modalidades de serviço disponíveis?",
    answer: "Oferecemos três planos principais: Plano 200 (15kg/mês), Plano 600 (45kg/mês) e Plano 900 (75kg/mês). Cada plano inclui coletas regulares e você pode adicionar serviços residuais ou comerciais conforme necessidade.",
  },
  {
    question: "Quanto tempo leva para receber as roupas lavadas?",
    answer: "O prazo padrão é de 48 a 72 horas após a coleta. Em casos urgentes, consulte nosso atendimento sobre opções de serviço expresso.",
  },
  {
    question: "Como funciona a coleta e entrega?",
    answer: "Você agenda a coleta pelo site ou aplicativo, separamos suas roupas em sacos (de preferência por cor ou tipo), e nosso time faz a coleta no endereço cadastrado. Após a lavagem, entregamos no mesmo local em data agendada.",
  },
  {
    question: "Qual é a taxa de cancelamento?",
    answer: "Não cobramos taxa de cancelamento. Você tem total autonomia para pausar ou cancelar sua assinatura a qualquer momento através da plataforma.",
  },
  {
    question: "Posso cancelar a assinatura a qualquer momento?",
    answer: "Sim! Oferecemos total flexibilidade. Você pode pausar, alterar ou cancelar sua assinatura quando quiser, sem multas ou taxas adicionais.",
  },
  {
    question: "O que acontece se houver dano ou extravio de uma peça?",
    answer: "Trabalhamos com muito cuidado e atenção a cada peça. Caso ocorra qualquer problema, temos uma política de ressarcimento e nossa equipe está disponível para resolver a situação de forma justa e rápida.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos cartão de crédito, débito, PIX e boleto bancário. O pagamento é processado de forma segura através da nossa plataforma.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
