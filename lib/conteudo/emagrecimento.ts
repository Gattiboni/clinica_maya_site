export type AreaEmagrecimento = {
  nome: string;
  texto: string;
  href: string;
};

export type Programa = {
  nome: string;
  texto: string;
};

export type PerguntaFrequente = {
  pergunta: string;
  resposta: string;
};

/** Quem pode fazer parte do plano (§Emagrecimento 3); o link leva à âncora da área em /equipe. */
export const AREAS_EMAGRECIMENTO: readonly AreaEmagrecimento[] = [
  {
    nome: "Medicina",
    texto:
      "Avaliação, condução e reavaliações do tratamento, com a Dra. Mayara Brasil. Presencial e on-line.",
    href: "/equipe#medicina",
  },
  {
    nome: "Nutrição",
    texto:
      "Alimentação possível para a sua rotina, sem terrorismo nutricional, com Tânia Guesser. Presencial e on-line.",
    href: "/equipe#nutricao",
  },
  {
    nome: "Psicologia",
    texto:
      "Espaço seguro para cuidar da ansiedade, da autoestima e da relação com a comida. Presencial em Antônio Carlos/SC.",
    href: "/equipe#psicologia",
  },
];

/** O que costuma fazer parte do acompanhamento (§Emagrecimento 4). */
export const ITENS_ACOMPANHAMENTO: readonly string[] = [
  "Plano de ação por escrito ao final dos encontros, para aplicar no dia a dia",
  "Suporte próximo entre as consultas",
  "Acolhimento emocional, sem julgamentos",
  "Reavaliações periódicas do plano",
  "Olhar além da balança: energia, ansiedade, sono, autoestima e comportamento",
  "Acesso ao Círculo Maya, comunidade de pacientes ativas com dicas, receitas e motivação",
];

/**
 * Programas de acompanhamento (§Emagrecimento 5): nome e uma frase, só isso.
 * Sem link, sem preço, sem duração, sem número de consultas (regra da copy; a varredura vigia).
 */
export const PROGRAMAS: readonly Programa[] = [
  {
    nome: "Maya Essencial",
    texto:
      "Uma estrutura de tratamento completa e individualizada, para começar com acompanhamento próximo.",
  },
  {
    nome: "Maya Evolução",
    texto:
      "Um programa mais abrangente, para jornadas que pedem acompanhamento mais prolongado ou mais complexas.",
  },
  {
    nome: "Maya Contínuo",
    texto: "Voltado à continuidade do cuidado, para manter o que já foi conquistado.",
  },
];

/** Perguntas frequentes (§Emagrecimento 6), na ordem da copy. */
export const PERGUNTAS_FREQUENTES: readonly PerguntaFrequente[] = [
  {
    pergunta: "Preciso escolher um programa antes de agendar?",
    resposta:
      "Não. Você começa pela consulta, e a Dra. Mayara indica o caminho que faz sentido depois de conhecer a sua história.",
  },
  {
    pergunta: "Posso fazer só a consulta?",
    resposta:
      "Pode. A consulta avulsa é uma porta de entrada, e o acompanhamento em programa é uma possibilidade, sem obrigação.",
  },
  {
    pergunta: "Posso ser acompanhada on-line?",
    resposta:
      "Sim. Medicina e nutrição atendem on-line para todo o Brasil. A psicologia, por enquanto, é presencial em Antônio Carlos/SC.",
  },
  {
    pergunta: "A psicologia faz parte do acompanhamento?",
    resposta:
      "Pode fazer, conforme a sua necessidade e a indicação da equipe. Ela também pode ser procurada separadamente.",
  },
];
