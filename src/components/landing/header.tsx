'use client';

import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const purchaseLink = 'https://seu-link-de-compra.com'; // << Altere seu link aqui

export function Header() {  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">Dorama Delight</span>
        </a>
        <Button asChild>
          <a href={purchaseLink} target="_blank" rel="noopener noreferrer">
            Acessar o Guia
          </a>
        </Button>
      </div>
    </header>
  );
}
