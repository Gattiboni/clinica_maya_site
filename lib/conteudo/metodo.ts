export type Etapa = {
  nome: string;
  texto: string;
};

export type Diferencial = {
  titulo: string;
  texto: string;
};

/** Etapas da jornada (§Método 3); o número 1 a 4 é a posição na lista. */
export const ETAPAS: readonly Etapa[] = [
  {
    nome: "Descoberta",
    texto: "A primeira consulta: sua história, seus objetivos e o ponto de partida.",
  },
  {
    nome: "Planejamento",
    texto: "O plano individual, construído com você e com a equipe.",
  },
  {
    nome: "Acompanhamento",
    texto: "Consultas, reavaliações e suporte também entre os encontros.",
  },
  {
    nome: "Consolidação",
    texto: "Os novos hábitos viram o seu novo jeito de viver.",
  },
];

/** Diferenciais do método (§Método 4), na ordem da copy. */
export const DIFERENCIAIS: readonly Diferencial[] = [
  {
    titulo: "Humanização e ciência",
    texto: "Evidências científicas aplicadas com escuta e sensibilidade.",
  },
  {
    titulo: "Personalização",
    texto: "Nenhum plano é igual ao outro, porque nenhuma história é.",
  },
  {
    titulo: "Corpo, mente e emoções",
    texto: "As três dimensões cuidadas juntas, por uma equipe integrada.",
  },
  {
    titulo: "Comunidade",
    texto: "Você caminha acompanhada, pela equipe e por quem vive a mesma jornada.",
  },
];

/** Lista "O que a gente quer entender" (§Método 5). */
export const O_QUE_ENTENDER: readonly string[] = [
  "Sua história e o que você já tentou",
  "Rotina e contexto de vida",
  "Qualidade do sono",
  "Ansiedade e saúde emocional",
  "Relação com a comida",
];
