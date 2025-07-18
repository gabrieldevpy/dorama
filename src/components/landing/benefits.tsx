import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Heart, Sparkles, BookOpenText, Users } from 'lucide-react';

const benefits = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Conexão Emocional',
    description: 'Aprenda a identificar e abraçar as emoções que os doramas despertam, aplicando-as para uma vida mais rica.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: 'Imersão Cultural',
    description: 'Vá além da tela e explore os costumes, a culinária e as curiosidades da Coreia que tornam cada dorama único.',
  },
  {
    icon: <BookOpenText className="h-8 w-8 text-primary" />,
    title: '10 Doramas Selecionados',
    description: 'Uma lista exclusiva de 10 doramas que vão te fazer rir, chorar e se apaixonar, com análises e motivos para assistir.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Comunidade Exclusiva',
    description: 'Junte-se a outras apaixonadas por doramas, troque dicas, participe de discussões e faça novas amizades.',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">O que você recebe no Guia Dorama Delight?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tudo o que você precisa para levar a magia dos seus doramas favoritos para o dia a dia.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="animate-in fade-in slide-in-from-bottom-12 duration-500" style={{ animationDelay: `${index * 150}ms` }}>
              <Card className="flex flex-col items-center text-center p-6 md:p-8 h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                <CardHeader className="p-0">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {benefit.icon}
                  </div>
                  <CardTitle className="mt-4 text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardDescription className="mt-2 flex-1">
                  {benefit.description}
                </CardDescription>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
