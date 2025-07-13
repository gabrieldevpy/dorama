'use client';

import { Button } from '@/components/ui/button';
import { Flower2, Heart } from 'lucide-react';

export function CtaSection() {
  const handlePurchase = () => {
    // Placeholder for purchase logic, e.g., redirect to a checkout page.
    alert('Redirecionando para a página de compra!');
  };

  return (
    <section id="purchase-section" className="py-20 md:py-32">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <Heart className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
          <h2 className="font-headline text-3xl md:text-5xl font-bold">
            Pronta para sua próxima obsessão?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Não espere mais para aprofundar sua paixão. Adquira o "Menos Drama, Mais Dorama" e comece sua nova jornada hoje mesmo.
          </p>
          <div className="mt-8">
            <Button 
              size="lg" 
              className="h-14 text-xl px-10 shadow-lg shadow-primary/30 transform hover:scale-105 transition-transform duration-300" 
              onClick={handlePurchase}
            >
              <Flower2 className="mr-2 h-6 w-6" />
              Comprar Agora por R$ 29,90
            </Button>
          </div>
          <p className="text-sm mt-4 text-muted-foreground">Compra segura e acesso imediato ao PDF.</p>
        </div>
      </div>
    </section>
  );
}
