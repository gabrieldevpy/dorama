'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { purchaseLink } from '@/config/links';

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-28">
      <div className="flex flex-col items-start gap-6 animate-in fade-in slide-in-from-left-12 duration-500">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
          Menos Drama, <br />
          <span className="text-primary">Mais Dorama.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          Sua busca pelo próximo dorama perfeito acabou. Descubra recomendações imperdíveis que vão te conquistar e acesse nossa comunidade exclusiva.
        </p>
        <Button asChild size="lg" className="h-12 px-8 text-lg">
          <a href={purchaseLink} target="_blank" rel="noopener noreferrer">
            Quero meu Guia!
          </a>
        </Button>
      </div>
      <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-12 duration-500">
        <Image
          src="https://placehold.co/400x520.png"
          alt="Capa do Guia de Doramas"
          data-ai-hint="korean drama"
          width={400}
          height={520}
          className="rounded-xl shadow-2xl shadow-primary/20 transform hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>
    </section>
  );
}
