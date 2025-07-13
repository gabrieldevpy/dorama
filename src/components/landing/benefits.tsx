import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Heart, Sparkles, BookOpenText } from 'lucide-react';

const benefits = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: 'Conecte-se com as Emoções',
    description: 'Aprenda a identificar e abraçar as emoções que os doramas despertam em você, aplicando-as para uma vida mais rica e com menos drama.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: 'Mergulhe na Cultura Coreana',
    description: 'Vá além da tela e explore os costumes, curiosidades e a riqueza da cultura coreana que tornam cada dorama único.',
  },
  {
    icon: <BookOpenText className="h-8 w-8 text-primary" />,
    title: '10 Recomendações Exclusivas',
    description: 'Descubra 10 doramas selecionados a dedo que vão te fazer rir, chorar e se apaixonar, com análises e motivos para assistir.',
  },
];

export function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Tudo que você precisa para Dorama-izar sua vida</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Um guia feito com carinho para quem ama doramas e quer levar a magia deles para o dia a dia.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="animate-in fade-in slide-in-from-bottom-12 duration-500" style={{ animationDelay: `${index * 150}ms` }}>
              <Card className="flex flex-col items-center text-center p-8 h-full transition-transform duration-300 hover:-translate-y-2">
                <CardHeader className="p-0">
                  {benefit.icon}
                  <CardTitle className="mt-4">{benefit.title}</CardTitle>
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
