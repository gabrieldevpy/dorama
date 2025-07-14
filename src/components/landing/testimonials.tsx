import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import image1 from '@/app/1.png';
import image2 from '@/app/2.png';
import image3 from '@/app/3.png';

const testimonials = [
  {
    name: 'Juliana S.',
    avatar: 'JS',
    image: image1,
    quote: 'Este guia mudou a forma como assisto doramas! Agora, cada cena tem um significado mais profundo. É como redescobrir meu hobby favorito.',
  },
  {
    name: 'Fernanda L.',
    avatar: 'FL',
    image: image2,
    quote: 'Eu amei a seção sobre cultura coreana! Aprendi tanto e agora me sinto muito mais conectada com as histórias. Super recomendo!',
  },
  {
    name: 'Beatriz M.',
    avatar: 'BM',
    image: image3,
    quote: 'O guia de clichês é hilário e genial! Me diverti muito identificando os padrões e entendendo por que amamos tanto eles.',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">O que as Dorama Lovers estão dizendo</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
             <div key={index} className="animate-in fade-in slide-in-from-bottom-12 duration-500" style={{ animationDelay: `${index * 150}ms` }}>
              <Card className="p-6 h-full flex flex-col">
                <CardContent className="p-0 flex flex-col items-center text-center flex-1">
                  <Avatar className="w-20 h-20 mb-4 border-2 border-primary/50">
                    <Image src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <blockquote className="text-muted-foreground italic flex-1">"{testimonial.quote}"</blockquote>
                  <p className="mt-4 font-bold text-foreground">- {testimonial.name}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
