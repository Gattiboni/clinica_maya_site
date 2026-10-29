export type Pilar = {
  nome: string;
  texto: string;
};

/** Pilares do Método Maya (§Home 4), exibidos como "Nome. Texto". */
export const PILARES: readonly Pilar[] = [
  { nome: "Acolher", texto: "Escuta ativa e sem julgamentos, antes de qualquer plano." },
  { nome: "Cuidar", texto: "Um plano feito para você, com base em evidências científicas." },
  { nome: "Transformar", texto: "Mudanças de hábito construídas passo a passo, no seu ritmo." },
  { nome: "Consolidar", texto: "Acompanhamento próximo para o novo jeito de viver permanecer." },
];
