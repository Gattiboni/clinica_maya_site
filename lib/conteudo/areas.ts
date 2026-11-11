export type Area = {
  nome: string;
  texto: string;
  href: string;
};

/**
 * Áreas de cuidado (§Home 2). Lidas pela Home e por A Clínica, na mesma ordem.
 * Revisão v2: o card tem só nome e texto; quem atende e a modalidade existem
 * apenas na Equipe (`lib/conteudo/equipe`).
 */
export const AREAS: readonly Area[] = [
  {
    nome: "Medicina",
    texto: "Avaliação e acompanhamento médico, com atuação em emagrecimento e saúde.",
    href: "/equipe#medicina",
  },
  {
    nome: "Nutrição",
    texto: "Alimentação que cabe na sua rotina, sem terrorismo nutricional.",
    href: "/equipe#nutricao",
  },
  {
    nome: "Psicologia",
    texto: "Espaço seguro para tratar ansiedade, autoestima e relação com a comida.",
    href: "/equipe#psicologia",
  },
  {
    nome: "Terapia",
    texto: "Terapias voltadas à saúde mental, promovendo qualidade de vida e bem-estar.",
    href: "/equipe#terapia",
  },
  {
    nome: "Saúde capilar",
    texto: "Cuidado com o couro cabeludo e com os fios, como parte do bem-estar e da saúde.",
    href: "/equipe#capilar",
  },
];
