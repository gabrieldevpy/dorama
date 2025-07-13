
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1 className="font-headline text-3xl md:text-4xl font-bold mb-2">Política de Privacidade</h1>
          <p className="text-sm text-muted-foreground">Última atualização: {lastUpdated}</p>

          <p className="mt-8">
            A sua privacidade é de extrema importância para nós. É política do Dorama Delight respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar em nosso site.
          </p>

          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">1. Informações que Coletamos</h2>
          <p>
            Coletamos informações de várias maneiras, incluindo quando você nos fornece diretamente, quando você navega em nosso site e de terceiros.
          </p>
          <h3 className="font-headline text-xl font-bold mt-6 mb-2">a. Dados de Uso e Navegação</h3>
          <p>
            Ao acessar nosso site, podemos coletar automaticamente informações sobre seu dispositivo e uso, como seu endereço IP, tipo de navegador, sistema operacional, páginas visitadas, tempo gasto nas páginas e links clicados.
          </p>
          <h3 className="font-headline text-xl font-bold mt-6 mb-2">b. Cookies e Tecnologias Semelhantes</h3>
          <p>
            Utilizamos cookies para operar e administrar nosso site, bem como para coletar dados sobre sua navegação. Cookies são pequenos arquivos de texto que os sites armazenam em seu dispositivo. Você pode configurar seu navegador para recusar todos os cookies ou para indicar quando um cookie está sendo enviado. No entanto, se você não aceitar cookies, talvez не consiga usar algumas partes do nosso site.
          </p>

          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">2. Como Usamos Suas Informações</h2>
          <p>
            Usamos as informações coletadas para os seguintes propósitos:
          </p>
          <ul>
            <li><strong>Fornecer e Manter o Serviço:</strong> Para operar nosso site e garantir que ele funcione corretamente.</li>
            <li><strong>Melhorar e Personalizar:</strong> Para entender como você usa nosso site e personalizar sua experiência.</li>
            <li><strong>Comunicação:</strong> Para responder às suas perguntas, fornecer suporte ao cliente e enviar informações sobre nossos produtos e serviços.</li>
            <li><strong>Marketing e Publicidade:</strong> Para exibir anúncios relevantes para você, inclusive em plataformas de terceiros como o TikTok, e para medir a eficácia de nossas campanhas.</li>
            <li><strong>Segurança:</strong> Para detectar e prevenir fraudes, violações de segurança e outras atividades prejudiciais.</li>
          </ul>

          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">3. Compartilhamento de Informações</h2>
          <p>
            Não compartilhamos suas informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei ou com seu consentimento. Podemos compartilhar dados não pessoais e agregados com parceiros de publicidade e análise.
          </p>
          <p>
            Nosso site pode conter links para sites externos, como o link de afiliado, que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e as práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>

          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">4. Seus Direitos de Privacidade</h2>
          <p>
            Você tem o direito de:
          </p>
          <ul>
            <li>Acessar, corrigir ou excluir suas informações pessoais.</li>
            <li>Opor-se ao processamento de seus dados.</li>
            <li>Solicitar a portabilidade dos dados.</li>
          </ul>
          <p>
            Você é livre para recusar nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
          </p>

          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">5. Segurança dos Dados</h2>
          <p>
            A segurança de seus dados é importante para nós. Empregamos medidas de segurança comercialmente aceitáveis para proteger suas informações contra perda, roubo, acesso não autorizado, divulgação, cópia, uso ou modificação. No entanto, lembre-se que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.
          </p>

          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">6. Privacidade de Menores</h2>
          <p>
            Nosso serviço não se destina a menores de 13 anos. Não coletamos intencionalmente informações de identificação pessoal de crianças com menos de 13 anos. Se você é pai ou responsável e sabe que seu filho nos forneceu informações pessoais, entre em contato conosco.
          </p>

          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">7. Alterações a Esta Política de Privacidade</h2>
          <p>
            Podemos atualizar nossa Política de Privacidade de tempos em tempos. Aconselhamos que você revise esta página periodicamente para quaisquer alterações. As alterações a esta Política de Privacidade entram em vigor quando são publicadas nesta página.
          </p>

          <h2 className="font-headline text-2xl font-bold mt-8 mb-4">8. Entre em Contato Conosco</h2>
          <p>
            Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco através do e-mail: <a href="mailto:contato@doramadelight.com">contato@doramadelight.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
