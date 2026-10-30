export type ItemDestacado = {
  /** Trecho em negrito no início do item (ex.: "Formulário de contato."). */
  destaque: string;
  texto: string;
};

export type SecaoPolitica = {
  titulo: string;
  paragrafos: readonly string[];
  /** Lista com destaque em negrito, após os parágrafos (só em "Quais dados tratamos"). */
  itens?: readonly ItemDestacado[];
};

/**
 * Política de privacidade (§Política de privacidade), texto literal da copy
 * v1.2. Texto base para revisão jurídica na Fase 6; as notas de pendência da
 * copy não vão ao ar.
 */
export const SECOES_POLITICA: readonly SecaoPolitica[] = [
  {
    titulo: "Quem somos",
    paragrafos: [
      'Este site é da Clínica Maya, clínica de saúde integral com sede na Av. João Antônio Besen, 265, Centro, Antônio Carlos/SC, CEP 88180-211. Responsável técnica: Dra. Mayara Brasil, CRM SC 21112. Quando esta política fala em "nós", fala da Clínica Maya.',
    ],
  },
  {
    titulo: "Quais dados tratamos",
    paragrafos: [
      "O site não pede cadastro e não guarda dados pessoais em banco próprio. O que acontece em cada situação:",
    ],
    itens: [
      {
        destaque: "Formulário de contato.",
        texto:
          "Os campos que você preenche (nome, WhatsApp, área, modalidade e mensagem) são usados apenas para montar uma mensagem que é enviada pelo seu próprio aplicativo de WhatsApp para a recepção da clínica. O site não armazena esses dados. A partir daí, a conversa segue pelo WhatsApp, sob a política de privacidade do WhatsApp e sob o sigilo da clínica.",
      },
      {
        destaque: "Navegação.",
        texto:
          "Nesta versão do site não usamos cookies de análise nem de publicidade. Se passarmos a usar ferramentas de medição de audiência ou de anúncios, isso só acontecerá com o seu consentimento, pedido por um aviso no próprio site, e esta política será atualizada antes.",
      },
      {
        destaque: "Hospedagem.",
        texto:
          "O site é servido por provedores de infraestrutura que registram dados técnicos de acesso (endereço IP, data e hora, navegador) pelo tempo necessário à segurança e ao funcionamento do serviço.",
      },
    ],
  },
  {
    titulo: "Prontuário e dados de saúde",
    paragrafos: [
      "Dados de consulta, exames e prontuário não passam por este site. Eles são tratados nos sistemas da clínica, sob sigilo profissional e sob as normas do Conselho Federal de Medicina e dos demais conselhos profissionais.",
    ],
  },
  {
    titulo: "Para que usamos os dados",
    paragrafos: [
      "Para responder ao seu contato, agendar e confirmar consultas e manter o site seguro e funcionando. Não vendemos nem cedemos dados pessoais a terceiros para fins de marketing.",
    ],
  },
  {
    titulo: "Com quem compartilhamos",
    paragrafos: [
      "Com os provedores que fazem o site funcionar (hospedagem e gestão de conteúdo), com o WhatsApp quando você envia a mensagem, e com autoridades quando a lei exigir. Cada provedor trata os dados segundo a própria política e sob contrato conosco.",
    ],
  },
  {
    titulo: "Seus direitos",
    paragrafos: [
      "A Lei Geral de Proteção de Dados (Lei 13.709/2018) garante a você confirmar se tratamos seus dados, acessá-los, corrigi-los, pedir anonimização ou exclusão, revogar consentimento e obter informações sobre compartilhamentos. Para exercer qualquer direito, fale com a clínica pelo WhatsApp (48) 99620-5000 ou pessoalmente no endereço acima.",
    ],
  },
  {
    titulo: "Mudanças nesta política",
    paragrafos: [
      "Quando algo mudar, publicaremos a nova versão aqui, com a data de vigência atualizada.",
    ],
  },
];
