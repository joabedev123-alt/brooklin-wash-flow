import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Joanna Leite",
    location: "Pinheiros",
    text: "Sou cliente da Brooklin há mais de um ano e sempre fui muito bem atendida. As roupas chegam impecáveis, com cheiro agradável e muito bem dobradas. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Ricardo Santos",
    location: "Vila Mariana",
    text: "Praticidade e qualidade em um só lugar! Não preciso mais me preocupar com lavanderia. O serviço é pontual e minhas roupas voltam sempre perfeitas. Vale muito a pena!",
    rating: 5,
  },
  {
    name: "Marina Costa",
    location: "Moema",
    text: "Excelente custo-benefício! Além de economizar tempo, ainda pago menos do que gastava na lavanderia tradicional. O atendimento é super atencioso e resolvem tudo pelo app.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Saiba mais com quem já usa a Brooklin Lavanderia
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-2 border-border shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="border-t border-border pt-4">
                        <p className="font-semibold text-secondary">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
