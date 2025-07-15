import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { purchaseLink } from '@/config/links';
import CapaDorama from '@/app/capa-dorama.png';

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-16 md:py-28">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 animate-in fade-in slide-in-from-left-12 duration-500">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Seu Guia Digital para o Universo dos Doramas
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
          Cansada de procurar e não achar o dorama perfeito? Nosso guia te entrega 10 recomendações incríveis e acesso a uma comunidade exclusiva de fãs. Menos drama, mais dorama!
        </p>
        <Button asChild size="lg" className="h-12 px-8 text-lg w-full sm:w-auto">
          <a href={purchaseLink} target="_blank" rel="noopener noreferrer">
            Quero meu Guia Agora!
          </a>
        </Button>
      </div>
      <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-12 duration-500">
        <Image
          src={CapaDorama}
          alt="Capa do Guia de Doramas Dorama Delight"
          width={400}
          height={520}
          className="rounded-xl shadow-2xl shadow-primary/20 transform hover:scale-105 transition-transform duration-300 w-[300px] md:w-[400px]"
          priority
        />
      </div>
    </section>
  );
}
