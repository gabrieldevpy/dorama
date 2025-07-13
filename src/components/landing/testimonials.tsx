import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: 'Juliana S.',
    avatar: 'JS',
    image: '/app/1.png',
    dataAiHint: 'woman portrait',
    quote: 'Este PDF mudou a forma como assisto doramas! Agora, cada cena tem um significado mais profundo. É como redescobrir meu hobby favorito.',
  },
  {
    name: 'Fernanda L.',
    avatar: 'FL',
    image: '/app/2.png',
    dataAiHint: 'woman smiling',
    quote: 'Eu amei a seção sobre cultura coreana! Aprendi tanto e agora me sinto muito mais conectada com as histórias. Super recomendo!',
  },
  {
    name: 'Beatriz M.',
    avatar: 'BM',
    image: '/app/3.png',
    dataAiHint: 'person happy',
    quote: 'O guia de clichês é hilário e genial! Me diverti muito identificando os padrões e entendendo por que amamos tanto eles.',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">O que as Dorama Lovers estão dizendo</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
             <div key={index} className="animate-in fade-in slide-in-from-bottom-12 duration-500" style={{ animationDelay: `${index * 150}ms` }}>
              <Card className="p-6 h-full">
                <CardContent className="p-0 flex flex-col items-center text-center">
                  <Avatar className="w-20 h-20 mb-4 border-2 border-primary/50">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <blockquote className="text-muted-foreground italic flex-1">"{testimonial.quote}"</blockquote>
                  <p className="mt-4 font-bold font-headline text-foreground">- {testimonial.name}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
