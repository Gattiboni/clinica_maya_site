export type Area = {
  nome: string;
  texto: string;
  quem: string;
  modalidade: string;
  href: string;
};

/** Áreas de cuidado (§Home 2). Lidas pela Home e por A Clínica, na mesma ordem. */
export const AREAS: readonly Area[] = [
  {
    nome: "Medicina",
    texto: "Avaliação e acompanhamento médico, com atuação em emagrecimento e saúde.",
    quem: "Dra. Mayara Brasil e Dr. Arthur",
    modalidade: "Presencial e on-line",
    href: "/equipe#medicina",
  },
  {
    nome: "Nutrição",
    texto: "Alimentação que cabe na sua rotina, sem terrorismo nutricional.",
    quem: "Tânia Guesser",
    modalidade: "Presencial e on-line",
    href: "/equipe#nutricao",
  },
  {
    nome: "Psicologia",
    texto: "Espaço seguro para tratar ansiedade, autoestima e relação com a comida.",
    quem: "Alexandra Invitti, Gabriella Sponton e Beatriz Nietsche",
    modalidade: "Presencial",
    href: "/equipe#psicologia",
  },
  {
    nome: "Terapia",
    texto: "Terapias voltadas à saúde mental, promovendo qualidade de vida e bem-estar.",
    quem: "Talita Porto",
    modalidade: "Presencial",
    href: "/equipe#terapia",
  },
  {
    nome: "Saúde capilar",
    texto: "Cuidado com o couro cabeludo e com os fios, como parte do bem-estar e da saúde.",
    quem: "Bianca Folske",
    modalidade: "Presencial",
    href: "/equipe#capilar",
  },
];
