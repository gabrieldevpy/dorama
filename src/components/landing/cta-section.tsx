'use client';

import { Button } from '@/components/ui/button';
import { Flower2, Heart } from 'lucide-react';

const purchaseLink = 'https://seu-link-de-compra.com'; // << Altere seu link aqui

export function CtaSection() {
  return (
    <section id="purchase-section" className="py-20 md:py-32">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <Heart className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
          <h2 className="font-headline text-3xl md:text-5xl font-bold">
            Pronta para sua próxima obsessão?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Receba seu guia com 10 recomendações incríveis de doramas e comece a maratonar hoje mesmo. É paixão à primeira vista garantida!
          </p>
          <div className="mt-8">
            <Button 
              asChild
              size="lg" 
              className="h-14 text-xl px-10 shadow-lg shadow-primary/30 transform hover:scale-105 transition-transform duration-300" 
            >
              <a href={purchaseLink} target="_blank" rel="noopener noreferrer">
                <Flower2 className="mr-2 h-6 w-6" />
                Quero meu Guia!
              </a>
            </Button>
          </div>
          <p className="text-sm mt-4 text-muted-foreground">Acesso imediato ao material + comunidade.</p>
        </div>
      </div>
    </section>
  );
}
