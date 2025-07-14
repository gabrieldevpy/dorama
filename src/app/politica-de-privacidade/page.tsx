import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl mx-auto prose dark:prose-invert">
          <h1>Política de Privacidade</h1>
          <p className="text-sm text-muted-foreground">Última atualização: {lastUpdated}</p>

          <p className="lead mt-8">
            A sua privacidade é de extrema importância para nós. É política do Dorama Delight respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar em nosso site e outros sites que possuímos e operamos.
          </p>

          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>

          <h2>1. Informações que Coletamos</h2>
          <h3>a. Dados Pessoais Fornecidos por Você</h3>
          <p>
            Podemos coletar informações de identificação pessoal que você nos fornece voluntariamente, como nome e endereço de e-mail, ao se inscrever em nossa newsletter, entrar em contato conosco ou participar de nossas promoções.
          </p>
          <h3>b. Dados de Uso e Navegação (Coleta Automática)</h3>
          <p>
            Ao acessar nosso site, podemos coletar automaticamente informações sobre seu dispositivo e uso, como seu endereço IP, tipo de navegador, sistema operacional, páginas visitadas, tempo gasto nas páginas, links clicados e outras estatísticas.
          </p>
          <h3>c. Cookies e Tecnologias Semelhantes</h3>
          <p>
            Utilizamos cookies para operar e administrar nosso site, bem como para coletar dados sobre sua navegação para fins de análise e marketing. Cookies são pequenos arquivos de texto que os sites armazenam em seu dispositivo. Você pode configurar seu navegador para recusar todos os cookies ou para indicar quando um cookie está sendo enviado. No entanto, se você não aceitar cookies, talvez não consiga usar algumas partes do nosso site.
          </p>

          <h2>2. Como Usamos Suas Informações</h2>
          <p>
            Usamos as informações coletadas para os seguintes propósitos:
          </p>
          <ul>
            <li><strong>Fornecer e Manter o Serviço:</strong> Para operar nosso site, processar transações e garantir que ele funcione corretamente.</li>
            <li><strong>Melhorar e Personalizar:</strong> Para entender como você usa nosso site, personalizar sua experiência e desenvolver novos produtos e recursos.</li>
            <li><strong>Comunicação:</strong> Para responder às suas perguntas, fornecer suporte ao cliente e enviar informações importantes, como atualizações de serviço e comunicados de marketing.</li>
            <li><strong>Marketing e Publicidade:</strong> Para exibir anúncios relevantes para você em nosso site e em plataformas de terceiros (como Google, Facebook e TikTok) e para medir a eficácia de nossas campanhas publicitárias.</li>
            <li><strong>Segurança:</strong> Para proteger nosso site e nossos usuários, detectando e prevenindo fraudes, violações de segurança e outras atividades prejudiciais.</li>
          </ul>

          <h2>3. Compartilhamento de Informações</h2>
          <p>
            Não compartilhamos suas informações de identificação pessoal publicamente ou com terceiros, exceto nos seguintes casos:
          </p>
           <ul>
            <li><strong>Com seu consentimento explícito.</strong></li>
            <li><strong>Para processamento externo:</strong> Podemos fornecer informações a parceiros confiáveis para que as processem para nós, com base em nossas instruções e em conformidade com esta Política de Privacidade e quaisquer outras medidas de confidencialidade e segurança apropriadas (ex: provedores de pagamento, plataformas de marketing).</li>
            <li><strong>Por motivos legais:</strong> Se acreditarmos de boa-fé que o acesso, uso, preservação ou divulgação das informações é razoavelmente necessário para cumprir qualquer lei, regulamentação, processo legal ou solicitação governamental aplicável.</li>
          </ul>
          <p>
            Nosso site pode conter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e as práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
          </p>

          <h2>4. Seus Direitos de Privacidade</h2>
          <p>
            Você tem o direito de:
          </p>
          <ul>
            <li>Acessar, corrigir ou excluir suas informações pessoais.</li>
            <li>Opor-se ao processamento de seus dados para fins de marketing direto.</li>
            <li>Solicitar a portabilidade dos dados.</li>
            <li>Retirar seu consentimento a qualquer momento.</li>
          </ul>
          <p>
            Você é livre para recusar nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
          </p>

          <h2>5. Segurança dos Dados</h2>
          <p>
            A segurança de seus dados é importante para nós. Retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Dentro de meios comercialmente aceitáveis, protegemos suas informações para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>

          <h2>6. Privacidade de Menores</h2>
          <p>
            Nosso serviço não se destina a menores de 13 anos. Não coletamos intencionalmente informações de identificação pessoal de crianças com menos de 13 anos. Se você é pai ou responsável e sabe que seu filho nos forneceu informações pessoais, entre em contato conosco para que possamos tomar as medidas necessárias.
          </p>

          <h2>7. Alterações a Esta Política de Privacidade</h2>
          <p>
            Podemos atualizar nossa Política de Privacidade de tempos em tempos. Aconselhamos que você revise esta página periodicamente para quaisquer alterações. Notificaremos sobre quaisquer alterações, publicando a nova Política de Privacidade nesta página. As alterações entram em vigor imediatamente após sua publicação.
          </p>

          <h2>8. Entre em Contato Conosco</h2>
          <p>
            Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, ou se desejar exercer seus direitos de privacidade, entre em contato conosco através do e-mail: <a href="mailto:contato@doramadelight.com">contato@doramadelight.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
