/** Os três grafismos originais da marca, em `public/marca/grafismo-{3,4,5}.svg`. */
export type NomeGrafismo = "3" | "4" | "5";

/**
 * Um grafismo da camada global (Revisão v2, 3.2). A arte entra sempre na
 * forma original: sem espelhar, sem recortar, só escala uniforme.
 *
 * Regra das pontas (3.3): os três originais têm as pontas cortadas na borda
 * ESQUERDA da arte (conferido renderizando os SVGs). Sem espelhamento, a
 * única âncora que deixa o corte fora da viewport é a borda esquerda da tela;
 * por isso não existe campo de âncora horizontal: `sangria` diz quanto da
 * arte fica além da borda esquerda. A variação da composição vem de qual
 * grafismo, da escala, da altura na tela e do trecho da página.
 */
export type GrafismoGlobal = {
  nome: NomeGrafismo;
  /**
   * Trecho da página, em % da rolagem total, em que o grafismo passa pela
   * posição-base (`topo`). Antes disso ele vem de baixo; depois, sai por cima,
   * na velocidade do parallax global.
   */
  trecho: number;
  /** Topo na posição-base, em svh (negativo: começa acima da viewport). */
  topo: number;
  /** Altura em svh no desktop; a largura sai da proporção da arte. */
  altura: number;
  /** Altura em svh abaixo de `lg` (tela em retrato: a arte precisa ser menor). */
  alturaMobile: number;
  /** Quanto da arte fica além da borda esquerda da tela, em vw. */
  sangria: number;
  /** Multiplicador da opacidade da camada (1 = a faixa cheia dos tokens). */
  opacidade: number;
};

export type PaginaGrafismos =
  | "home"
  | "clinica"
  | "equipe"
  | "metodo"
  | "emagrecimento"
  | "dra-mayara"
  | "atendimento"
  | "blog"
  | "post"
  | "contato"
  | "nao-encontrado";

export type ComposicaoGrafismos = {
  grafismos: readonly GrafismoGlobal[];
  /**
   * Oscilações do tilt por scrub ao longo da página (ida e volta = 2): perto
   * do número de folhas, para o grafismo inclinar a cada folha que passa.
   */
  ondas: number;
};

/**
 * Composição por página. Com parallax 0.3 (0.15 no toque), cada grafismo fica
 * visível por cerca de seis viewports de rolagem; trechos em 0, 50 e 100% dão
 * no máximo dois na tela ao mesmo tempo, um saindo por cima enquanto o
 * seguinte entra por baixo. Páginas curtas levam dois ou um.
 */
export const GRAFISMOS: Record<PaginaGrafismos, ComposicaoGrafismos> = {
  // O grafismo-4 do hero é o maior do site: 124svh no desktop, com o topo acima da viewport.
  home: {
    ondas: 10,
    grafismos: [
      { nome: "4", trecho: 0, topo: -10, altura: 124, alturaMobile: 92, sangria: 3, opacidade: 1 },
      { nome: "3", trecho: 50, topo: 14, altura: 84, alturaMobile: 52, sangria: 4, opacidade: 1 },
      { nome: "5", trecho: 100, topo: 6, altura: 96, alturaMobile: 68, sangria: 3, opacidade: 1 },
    ],
  },
  clinica: {
    ondas: 6,
    grafismos: [
      { nome: "3", trecho: 0, topo: 8, altura: 88, alturaMobile: 50, sangria: 4, opacidade: 1 },
      { nome: "5", trecho: 50, topo: 4, altura: 100, alturaMobile: 70, sangria: 3, opacidade: 1 },
      { nome: "4", trecho: 100, topo: -6, altura: 108, alturaMobile: 80, sangria: 3, opacidade: 1 },
    ],
  },
  equipe: {
    ondas: 8,
    grafismos: [
      { nome: "5", trecho: 0, topo: 2, altura: 104, alturaMobile: 72, sangria: 3, opacidade: 1 },
      {
        nome: "3",
        trecho: 50,
        topo: 12,
        altura: 86,
        alturaMobile: 50,
        sangria: 4,
        opacidade: 0.85,
      },
      { nome: "4", trecho: 100, topo: -6, altura: 110, alturaMobile: 80, sangria: 3, opacidade: 1 },
    ],
  },
  metodo: {
    ondas: 8,
    grafismos: [
      { nome: "4", trecho: 0, topo: -8, altura: 112, alturaMobile: 82, sangria: 3, opacidade: 1 },
      { nome: "3", trecho: 55, topo: 12, altura: 84, alturaMobile: 50, sangria: 4, opacidade: 1 },
      { nome: "5", trecho: 100, topo: 4, altura: 98, alturaMobile: 68, sangria: 3, opacidade: 1 },
    ],
  },
  emagrecimento: {
    ondas: 8,
    grafismos: [
      { nome: "3", trecho: 0, topo: 8, altura: 88, alturaMobile: 50, sangria: 4, opacidade: 1 },
      {
        nome: "4",
        trecho: 50,
        topo: -6,
        altura: 110,
        alturaMobile: 80,
        sangria: 3,
        opacidade: 0.9,
      },
      { nome: "5", trecho: 100, topo: 4, altura: 98, alturaMobile: 68, sangria: 3, opacidade: 1 },
    ],
  },
  // Página de confiança, com prosa longa: dois grafismos, mais leves.
  "dra-mayara": {
    ondas: 4,
    grafismos: [
      { nome: "4", trecho: 0, topo: -8, altura: 112, alturaMobile: 80, sangria: 3, opacidade: 0.9 },
      {
        nome: "5",
        trecho: 100,
        topo: 4,
        altura: 98,
        alturaMobile: 68,
        sangria: 3,
        opacidade: 0.85,
      },
    ],
  },
  atendimento: {
    ondas: 4,
    grafismos: [
      { nome: "5", trecho: 0, topo: 2, altura: 104, alturaMobile: 72, sangria: 3, opacidade: 1 },
      { nome: "3", trecho: 100, topo: 12, altura: 86, alturaMobile: 50, sangria: 4, opacidade: 1 },
    ],
  },
  blog: {
    ondas: 2,
    grafismos: [
      { nome: "3", trecho: 0, topo: 8, altura: 88, alturaMobile: 50, sangria: 4, opacidade: 1 },
    ],
  },
  // Leitura longa: um grafismo só, mais leve, que sai de cena cedo.
  post: {
    ondas: 2,
    grafismos: [
      { nome: "5", trecho: 0, topo: 2, altura: 100, alturaMobile: 66, sangria: 3, opacidade: 0.7 },
    ],
  },
  contato: {
    ondas: 2,
    grafismos: [
      { nome: "4", trecho: 0, topo: -8, altura: 112, alturaMobile: 80, sangria: 3, opacidade: 1 },
      {
        nome: "3",
        trecho: 100,
        topo: 14,
        altura: 84,
        alturaMobile: 50,
        sangria: 4,
        opacidade: 0.85,
      },
    ],
  },
  "nao-encontrado": {
    ondas: 2,
    grafismos: [
      { nome: "5", trecho: 0, topo: 2, altura: 100, alturaMobile: 66, sangria: 3, opacidade: 0.8 },
    ],
  },
};
