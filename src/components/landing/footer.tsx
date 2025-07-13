import { Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6 border-t bg-background">
      <div className="container text-center text-muted-foreground text-sm">
        <p className="flex items-center justify-center gap-1.5">
          Feito com <Heart className="h-4 w-4 text-primary" /> por uma Dorama Lover para outras.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <Link href="/politica-de-privacidade" className="hover:text-primary transition-colors">
            Política de Privacidade
          </Link>
        </div>
        <p className="mt-4">© 2024 Dorama Delight. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
