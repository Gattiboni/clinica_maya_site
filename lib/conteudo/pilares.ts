export type Pilar = {
  nome: string;
  /** Uma linha, exibida na Home (§Home 4) como "Nome. Texto". */
  texto: string;
  /** Versão longa, exibida na página Método (§Método 2). */
  textoLongo: string;
};

/** Pilares do Método Maya, na ordem da copy; o número 01 a 04 é a posição na lista. */
export const PILARES: readonly Pilar[] = [
  {
    nome: "Acolher",
    texto: "Escuta ativa e sem julgamentos, antes de qualquer plano.",
    textoLongo:
      "Escuta ativa, respeito e ausência de julgamentos: compreender a sua história antes de qualquer plano.",
  },
  {
    nome: "Cuidar",
    texto: "Um plano feito para você, com base em evidências científicas.",
    textoLongo:
      "Condutas individualizadas, com base em evidências científicas e atenção à saúde como um todo.",
  },
  {
    nome: "Transformar",
    texto: "Mudanças de hábito construídas passo a passo, no seu ritmo.",
    textoLongo:
      "Mudanças sustentáveis de hábitos, de comportamento e da relação com a comida e com o autocuidado.",
  },
  {
    nome: "Consolidar",
    texto: "Acompanhamento próximo para o novo jeito de viver permanecer.",
    textoLongo:
      "Manutenção do que foi conquistado e prevenção de recaídas, com acompanhamento próximo.",
  },
];
