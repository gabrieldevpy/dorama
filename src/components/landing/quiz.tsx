import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const quizQuestions = [
    {
        question: "Qual clichê NUNCA pode faltar em um bom dorama?",
        answer: "Aquele momento em que o casal principal fica preso em algum lugar e precisa passar a noite junto. É um clássico por um motivo!",
    },
    {
        question: "Se sua vida amorosa fosse um dorama, qual seria o gênero?",
        answer: "Comédia romântica com certeza! Cheia de momentos engraçados, um pouco de drama para dar emoção e, claro, um final feliz.",
    },
    {
        question: "Qual o melhor petisco para maratonar dorama?",
        answer: "Lamen (ou miojo, para os íntimos) com um ovinho mole. É a combinação perfeita para aquecer o coração durante as cenas mais emocionantes.",
    },
    {
        question: "Você prefere um CEO rico e misterioso ou um amigo de infância fofo?",
        answer: "Essa é a pergunta de um milhão de dólares! Cada um tem seu charme, mas o amigo de infância que sempre esteve lá tem um lugar especial no coração.",
    },
];

export function Quiz() {
    return (
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Quiz Dorama Lover</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Será que você é uma dorameira de carteirinha? Responda e descubra!
                    </p>
                </div>

                <Card className="max-w-2xl mx-auto shadow-lg">
                    <CardHeader>
                        <CardTitle>Responda se for capaz!</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            {quizQuestions.map((item, index) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger className="text-left hover:no-underline">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
