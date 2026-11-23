/** Os três grafismos originais da marca, em `public/marca/grafismo-{3,4,5}.svg`. */
export type NomeGrafismo = "3" | "4" | "5";

/**
 * O grafismo da abertura de uma página (Revisão v3, lote B: um por página, só na seção de
 * abertura). A arte entra sempre na forma original: sem espelhar, sem recortar, só escala
 * uniforme.
 *
 * Regra das pontas (Revisão v2, 3.3): os três originais têm as pontas cortadas na borda
 * ESQUERDA da arte (conferido renderizando os SVGs). Sem espelhamento, a única âncora que deixa
 * o corte fora da viewport é a borda esquerda da tela; por isso não existe campo de âncora
 * horizontal: `sangria` diz quanto da arte fica além da borda esquerda.
 */
export type GrafismoAbertura = {
  nome: NomeGrafismo;
  /** Topo, em svh, medido do topo da página (negativo: começa acima dela). */
  topo: number;
  /** Altura em svh no desktop; a largura sai da proporção da arte. */
  altura: number;
  /** Altura em svh abaixo de `lg` (tela em retrato: a arte precisa ser menor). */
  alturaMobile: number;
  /** Quanto da arte fica além da borda esquerda da tela, em vw. */
  sangria: number;
  /** Multiplicador da opacidade-base (`--mov-grafismo-opacidade`; 1 = a base cheia). */
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

/**
 * Composição por página: o grafismo da abertura (o que era `trecho: 0` na camada global da
 * Revisão v2, com a mesma posição e o mesmo tamanho). Ponto de extensão: a composição continua
 * por página.
 *
 * O grafismo 5 não é usado em abertura (v0.7.1): confinado a uma abertura curta, só o topo da
 * arte aparece (arcos soltos e uma linha terminando no meio da tela), e a forma não lê como
 * grafismo da marca. Continua sendo arte da marca e nome válido de `NomeGrafismo`. Ponto de
 * extensão: voltar a usá-lo pede composição própria (escala e posição) para a forma inteira
 * caber na abertura. As páginas que o usavam passaram ao grafismo 3 com a composição do `blog`.
 */
export const GRAFISMOS: Record<PaginaGrafismos, GrafismoAbertura> = {
  // O grafismo-4 do hero é o maior do site: 124svh no desktop, com o topo acima da página.
  home: { nome: "4", topo: -10, altura: 124, alturaMobile: 92, sangria: 3, opacidade: 1 },
  clinica: { nome: "3", topo: 8, altura: 88, alturaMobile: 50, sangria: 4, opacidade: 1 },
  equipe: { nome: "3", topo: 8, altura: 88, alturaMobile: 50, sangria: 4, opacidade: 1 },
  metodo: { nome: "4", topo: -8, altura: 112, alturaMobile: 82, sangria: 3, opacidade: 1 },
  emagrecimento: { nome: "3", topo: 8, altura: 88, alturaMobile: 50, sangria: 4, opacidade: 1 },
  // Página de confiança, com prosa longa: mais leve.
  "dra-mayara": { nome: "4", topo: -8, altura: 112, alturaMobile: 80, sangria: 3, opacidade: 0.9 },
  atendimento: { nome: "3", topo: 8, altura: 88, alturaMobile: 50, sangria: 4, opacidade: 1 },
  blog: { nome: "3", topo: 8, altura: 88, alturaMobile: 50, sangria: 4, opacidade: 1 },
  // Leitura longa: mais leve.
  post: { nome: "3", topo: 8, altura: 88, alturaMobile: 50, sangria: 4, opacidade: 0.7 },
  contato: { nome: "4", topo: -8, altura: 112, alturaMobile: 80, sangria: 3, opacidade: 1 },
  "nao-encontrado": {
    nome: "3",
    topo: 8,
    altura: 88,
    alturaMobile: 50,
    sangria: 4,
    opacidade: 0.8,
  },
};
