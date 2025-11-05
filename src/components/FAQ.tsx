import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o sistema de assinatura da Brooklin Lavanderia?",
    answer: "Você escolhe um plano mensal que se ajusta à sua necessidade, agenda as coletas pelo site ou app, e nós cuidamos de tudo: coletamos suas roupas, lavamos com cuidado e devolvemos limpas e passadas na sua casa.",
  },
  {
    question: "Quais são as modalidades de serviço disponíveis?",
    answer: "Oferecemos três planos principais: Plano 200 (15kg/mês), Plano 600 (45kg/mês) e Plano 900 (75kg/mês). Cada plano inclui coletas regulares e você pode adicionar serviços residuais ou comerciais conforme necessidade.",
  },
  {
    question: "Quanto tempo leva para receber as roupas lavadas?",
    answer: "O prazo padrão é de 48 a 72 horas após a coleta. Em casos urgentes, consulte nosso atendimento sobre opções de serviço expresso.",
  },
  {
    question: "Como funciona a coleta e entrega?",
    answer: "Você agenda a coleta pelo site ou aplicativo, separamos suas roupas em sacos (de preferência por cor ou tipo), e nosso time faz a coleta no endereço cadastrado. Após a lavagem, entregamos no mesmo local em data agendada.",
  },
  {
    question: "Qual é a taxa de cancelamento?",
    answer: "Não cobramos taxa de cancelamento. Você tem total autonomia para pausar ou cancelar sua assinatura a qualquer momento através da plataforma.",
  },
  {
    question: "Posso cancelar a assinatura a qualquer momento?",
    answer: "Sim! Oferecemos total flexibilidade. Você pode pausar, alterar ou cancelar sua assinatura quando quiser, sem multas ou taxas adicionais.",
  },
  {
    question: "O que acontece se houver dano ou extravio de uma peça?",
    answer: "Trabalhamos com muito cuidado e atenção a cada peça. Caso ocorra qualquer problema, temos uma política de ressarcimento e nossa equipe está disponível para resolver a situação de forma justa e rápida.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos cartão de crédito, débito, PIX e boleto bancário. O pagamento é processado de forma segura através da nossa plataforma.",
  },
  {
    question: "Política de privacidade",
    answer: `Temos o compromisso com a transparência, a privacidade e a segurança dos dados dos nossos usuários durante todo o processo de interação com nossa loja virtual. Em nossa política de privacidade detalhamos quais informações coletamos e como as utilizamos, armazenamos e excluímos.

Os dados cadastrais dos usuários não são divulgados para terceiros, exceto quando necessários para o processo de entrega ou cobrança. Coletamos as informações que o Cliente fornece quando se cadastra e cria uma conta em nossa loja virtual.

Os seus dados pessoais serão usados com as seguintes finalidades:

• Entrega dos produtos adquiridos;
• Acompanhamento do status do seu pedido;
• Realização de trocas e devoluções;
• Para enviar comunicações sobre nossos serviços e proporcionar uma melhor experiência ao usuário.

A LGPD

A Lei Geral de Proteção de Dados (LGPD) dá ao cliente o direito de solicitar a nossa loja virtual, a qualquer momento, mediante requisição formal, informações referentes aos dados tratados.

1 - Quais informações são coletadas?

Coletamos e armazenamos os seguintes tipos de informações:

Fornecidas pelo usuário:
• Nome completo;
• Número de CPF;
• E-mail;
• Número de celular;
• Data de nascimento;
• Dados referentes aos seus endereços;
• Dados referentes aos pedidos realizados.

Coletadas automaticamente: Utilizamos cookies e pixels, coletando e armazenando determinadas informações de navegação sempre que você interage em nosso site. Por exemplo, quando você clica em anúncios, e-mails e outros conteúdos fornecidos por nós em outros sites.

Dados coletados:
• Endereço de IP;
• Informações sobre o dispositivo utilizado para a navegação;
• Produtos e categorias pesquisados ou visualizados;
• Contagem de visualizações.

2 - Como utilizamos os seus dados pessoais?

Nós utilizamos os dados pessoais para garantir um atendimento de qualidade e uma melhor experiência na sua compra. Listamos abaixo as finalidades que poderemos utilizar seus dados pessoais:

Dados cadastrais:
• Para realizar o atendimento de solicitações e dúvidas em nossa Central de Atendimento;
• Para identificar corretamente o Usuário;
• Para enviar os produtos adquiridos ou comunicações de ofertas;
• Para entrar em contato com você, quando necessário. Esse contato pode contemplar diversos assuntos, como comunicação sobre promoções e ofertas, respostas a dúvidas, respostas de reclamações e solicitações, atualizações dos pedidos realizados e informações de entrega;
• Para realizar investigações e medidas de prevenção e combate a ilícitos, fraudes, crimes financeiros e crimes de lavagem de dinheiro e/ou de financiamento ao terrorismo;
• Para colaborar com o cumprimento de ordem judicial, de autoridade competente ou de órgão fiscalizador.

Dados de Navegação:
• Para auxiliar no diagnóstico e solução de problema técnicos;
• Para desenvolver novas funcionalidades e melhorias, aprimorando a sua experiência com nossos serviços disponíveis.

3 - Com quem compartilhamos seus dados?

As informações coletadas somente serão compartilhadas quando forem necessárias: (i) para prestação adequada dos serviços objeto de suas atividades com empresas parceiras; (ii) proteção em caso de conflito; (iii) mediante decisão judicial ou requisição de autoridade competente; (iv) com empresas provedoras de infraestrutura tecnológica e operacional, como empresas intermediadoras de pagamento e provedoras de serviço de armazenamento de informações.

4 - Por quanto tempo armazenamos informações pessoais?

Armazenamos as informações dos Clientes conforme as normas de prescrição do Direito brasileiro.

5 - Quais são os direitos do titular de dados?

A partir do início da vigência da LGPD, o titular dos dados pessoais terá o direito de obter, a qualquer momento, mediante requisição formal, informações referentes aos seus dados. Estas solicitações devem ser enviadas formalmente pelo link de Fale Conosco/Contato presente em nosso site.

O prazo para retorno acerca da solicitação é de 15 dias.

Como titular dos dados seus direitos são:

• Confirmação da existência de tratamento;
• Acesso aos dados;
• Correção de dados incompletos, inexatos ou desatualizados;
• Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto nesta Lei;
• Portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da autoridade nacional, observados os segredos comercial e industrial;
• Eliminação dos dados pessoais tratados com o consentimento do titular;
• Informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados;
• Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;
• Revogação do consentimento.

6 - Transferência Internacional de Dados Pessoais

Alguns de seus dados pessoais poderão ser transferidos para outros países, por exemplo, quando utilizarmos serviços computacionais em nuvem para processamento ou armazenamento de dados, localizados fora do Brasil. Mas, não se preocupe! Observamos também nestas situações todos os requisitos estabelecidos na legislação vigente, e adotamos as melhores práticas de mercado a fim de garantir a proteção e privacidade dos seus dados pessoais.

7 - Outras informações importantes sobre proteção de dados

Estamos constantemente buscando aprimorar a experiência de nossos clientes. Assim, nossas práticas de tratamento de dados pessoais poderão sofrer alterações com a inclusão de novas funcionalidades e serviços. Se alguma mudança for feita em nossa Política de Privacidade, você receberá um e-mail.

Última atualização: 21 de Setembro de 2020.`,
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
