
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert">
            <h1 className="font-headline text-3xl md:text-4xl font-bold mb-8">Política de Privacidade</h1>
            <p>
              A sua privacidade é importante para nós. É política do Dorama Delight respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Dorama Delight, e outros sites que possuímos e operamos.
            </p>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">1. Coleta de Informações</h2>
            <p>
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
            <p>
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">2. Uso das Informações</h2>
            <p>
              Podemos utilizar as informações que coletamos de várias maneiras, incluindo para:
            </p>
            <ul>
              <li>Fornecer, operar e manter nosso site</li>
              <li>Melhorar, personalizar e expandir nosso site</li>
              <li>Entender e analisar como você usa nosso site</li>
              <li>Desenvolver novos produtos, serviços, recursos e funcionalidades</li>
              <li>Comunicar com você, diretamente ou através de um de nossos parceiros, incluindo para atendimento ao cliente, para fornecer atualizações e outras informações relacionadas ao site e para fins de marketing e promocionais</li>
              <li>Enviar-lhe emails</li>
              <li>Encontrar e prevenir fraudes</li>
            </ul>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">3. Cookies e Tecnologias de Rastreamento</h2>
            <p>
              Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.
            </p>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">4. Direitos do Usuário</h2>
            <p>
              Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez не possamos fornecer alguns dos serviços desejados.
            </p>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">5. Links para Sites de Terceiros</h2>
            <p>
              O nosso site pode ter links para sites externos que não são operados por nós (como o link de afiliado). Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
            </p>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">6. Alterações a Esta Política de Privacidade</h2>
            <p>
              Podemos atualizar nossa Política de Privacidade de tempos em tempos. Aconselhamos que você revise esta página periodicamente para quaisquer alterações. Avisaremos sobre quaisquer alterações, publicando a nova Política de Privacidade nesta página. Essas alterações entram em vigor imediatamente após serem publicadas nesta página.
            </p>

            <h2 className="font-headline text-2xl font-bold mt-8 mb-4">7. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
            </p>
            <p>Esta política é efetiva a partir de {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
