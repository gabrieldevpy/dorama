import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { purchaseLink } from '@/config/links';
import Link from 'next/link';

export function Header() {  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 mr-4">
          <Heart className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Dorama Delight</span>
        </Link>
        
        <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6 text-sm font-medium">
                <Link href="#benefits" className="hover:text-primary transition-colors">Benefícios</Link>
                <Link href="#testimonials" className="hover:text-primary transition-colors">Depoimentos</Link>
                <Link href="#quiz" className="hover:text-primary transition-colors">Quiz</Link>
            </nav>
            <Button asChild>
              <a href={purchaseLink} target="_blank" rel="noopener noreferrer">
                Acessar o Guia
              </a>
            </Button>
        </div>
      </div>
    </header>
  );
}
