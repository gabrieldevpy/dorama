
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export default function TermsOfServicePage() {
  const lastUpdated = new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1 className="font-headline text-3xl md:text-4xl font-bold mb-2">Termos de Uso</h1>
          <p className="text-sm text-muted-foreground">Última atualização: {lastUpdated}</p>

          <p className="mt-8">
            Bem-vindo ao Dorama Delight! Ao acessar e usar nosso site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Por favor, leia estes termos cuidadosamente antes de usar nosso site.
          </p>

          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">1. Uso do Site</h2>
          <p>
            O conteúdo das páginas deste site é para sua informação geral e uso apenas. Ele está sujeito a alterações sem aviso prévio. O uso de qualquer informação ou material neste site é inteiramente por sua conta e risco, pelo qual não seremos responsáveis.
          </p>

          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">2. Propriedade Intelectual</h2>
          <p>
            Este site contém material que é de nossa propriedade ou licenciado para nós. Este material inclui, mas не está limitado a, design, layout, aparência, e gráficos. A reprodução é proibida, exceto em conformidade com o aviso de direitos autorais, que faz parte destes termos e condições.
          </p>
          
          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">3. Links de Afiliados e Conteúdo de Terceiros</h2>
          <p>
             Nosso site pode incluir links para outros sites. Estes links são fornecidos para sua conveniência para fornecer mais informações. Eles não significam que endossamos o(s) site(s). Não temos responsabilidade pelo conteúdo do(s) site(s) vinculado(s). Alguns desses links podem ser links de afiliados, o que significa que podemos receber uma comissão se você clicar no link e fizer uma compra, sem custo adicional para você.
          </p>

          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">4. Limitação de Responsabilidade</h2>
          <p>
            Em nenhuma circunstância o Dorama Delight será responsável por quaisquer danos diretos, indiretos, especiais, incidentais ou consequenciais, incluindo, mas não se limitando a, perda de dados ou lucro, decorrentes do uso, ou da incapacidade de usar, os materiais deste site.
          </p>

          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">5. Jurisdição</h2>
          <p>
            O uso deste site e qualquer disputa decorrente de tal uso do site estão sujeitos às leis do Brasil.
          </p>
          
          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">6. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de fazer alterações em nossos Termos de Uso a qualquer momento. Quaisquer alterações serão publicadas nesta página.
          </p>

          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">7. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do e-mail: <a href="mailto:contato@doramadelight.com">contato@doramadelight.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
