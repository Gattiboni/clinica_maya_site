export type Dor = {
  titulo: string;
  texto: string;
  quem: string;
  href: string;
};

/** Dores da Home (§Home 3), na ordem da copy. */
export const DORES: readonly Dor[] = [
  {
    titulo: "Ansiedade e comida",
    texto: "Quando comer vira válvula de escape e a culpa vem logo depois.",
    quem: "Psicologia e Medicina",
    href: "/equipe#psicologia",
  },
  {
    titulo: "Efeito sanfona",
    texto: "Dietas que funcionam por um tempo, até tudo voltar.",
    quem: "Nutrição e Medicina",
    href: "/equipe#nutricao",
  },
  {
    titulo: "Autoestima",
    texto: "Evitar o espelho, as fotos e as roupas que você gostava.",
    quem: "Psicologia e Terapia",
    href: "/equipe#psicologia",
  },
  {
    titulo: "Menopausa e climatério",
    texto: "Um corpo que muda e pede um cuidado diferente.",
    quem: "Medicina e Nutrição",
    href: "/equipe#medicina",
  },
  {
    titulo: "Cansaço constante",
    texto: "Dormir mal, acordar sem energia e não saber por onde começar.",
    quem: "Medicina e Terapia",
    href: "/equipe#medicina",
  },
  {
    titulo: "Queda de cabelo",
    texto: "Fios mais frágeis ou uma queda que preocupa e ainda não tem explicação.",
    quem: "Saúde capilar",
    href: "/equipe#capilar",
  },
];
