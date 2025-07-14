import { Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 border-t bg-background/95">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
        <div className="flex items-center gap-1.5 order-2 md:order-1">
          Feito com <Heart className="h-4 w-4 text-primary" /> por uma Dorama Lover para outras.
          <p className="text-muted-foreground/80">© {new Date().getFullYear()} Dorama Delight.</p>
        </div>
        <div className="flex items-center gap-4 order-1 md:order-2">
          <Link href="/politica-de-privacidade" className="hover:text-primary transition-colors">
            Política de Privacidade
          </Link>
          <Link href="/termos-de-uso" className="hover:text-primary transition-colors">
            Termos de Uso
          </Link>
           <a href="#" className="hover:text-primary transition-colors">
            Voltar ao Topo
          </a>
        </div>
      </div>
    </footer>
  );
}
