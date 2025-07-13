import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-6 border-t bg-background">
      <div className="container text-center text-muted-foreground text-sm">
        <p className="flex items-center justify-center gap-1.5">
          Feito com <Heart className="h-4 w-4 text-primary" /> por uma Dorama Lover para outras.
        </p>
        <p className="mt-2">© 2024 Dorama Delight. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
