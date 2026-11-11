export type Avaliacao = {
  /** Texto literal da avaliação pública, sem as aspas. */
  texto: string;
  /** Nome com a inicial do sobrenome, como na copy. */
  nome: string;
};

/**
 * Avaliações públicas do Google (copy v1.3, Revisão v2 · Home). Transcritas
 * literalmente. Regra da copy: sem nota numérica no site e nenhuma avaliação
 * que cite peso, prazo ou resultado (CFM 2.336/2023).
 */
export const AVALIACOES: readonly Avaliacao[] = [
  {
    texto:
      "Ótimo espaço, atendimento maravilhoso na recepção e a Dra. Mayara é ótima, cuidadosa em cada detalhe e sempre atenciosa e prestativa nas diferentes necessidades dos pacientes.",
    nome: "Joice F.",
  },
  {
    texto:
      "Uma clínica acolhedora, organizada e com profissionais muito atenciosos e competentes. É muito bom ser atendida em um lugar onde somos tratados com carinho, respeito e profissionalismo.",
    nome: "Elisa",
  },
  {
    texto:
      "Desde a recepção até o atendimento com a doutora Mayara. Ela é muito atenciosa comigo e a nutri também.",
    nome: "Marivone M.",
  },
];

/** Página pública de avaliações da clínica no Google (abre em nova aba). */
export const AVALIACOES_GOOGLE_URL = "https://share.google/nynv1xQtxqTvIDMBR";
