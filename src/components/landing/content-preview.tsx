import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export function ContentPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Um Vislumbre do Paraíso dos Doramas</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Dê uma espiada no design e no conteúdo que preparamos com tanto carinho para você.
          </p>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="flex aspect-[3/4] items-center justify-center p-0">
                      <Image
                        src={`https://placehold.co/400x533.png`}
                        alt={`Preview do conteúdo do PDF ${index + 1}`}
                        width={400}
                        height={533}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        data-ai-hint="page layout document"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </div>
    </section>
  );
}
