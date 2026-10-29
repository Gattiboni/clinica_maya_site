export type Passo = {
  titulo: string;
  texto: string;
};

/** Passos de "Como começa" (§Home 5). O número exibido é a posição na lista. */
export const PASSOS: readonly Passo[] = [
  {
    titulo: "Você agenda",
    texto:
      "Nossa recepcionista cuida da agenda de toda a equipe e ajuda a escolher com quem começar.",
  },
  {
    titulo: "A primeira consulta",
    texto:
      "Um encontro para escutar a sua história, a sua rotina e o que você precisa neste momento.",
  },
  {
    titulo: "O caminho é desenhado",
    texto: "Com uma ou mais áreas da clínica, no seu ritmo, e com acompanhamento próximo depois.",
  },
];
