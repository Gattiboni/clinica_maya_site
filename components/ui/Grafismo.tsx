import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { NomeGrafismo } from "@/lib/conteudo/grafismos";
import { MOV } from "@/lib/movimento";

/** Os três SVGs da marca em `public/marca/grafismo-{3,4,5}.svg`. */
export const NOMES_SVG = ["3", "4", "5"] as const satisfies readonly NomeGrafismo[];
type Cor = "verde" | "bege" | "marrom";
type Recorte = 1 | 2 | 3 | 4 | 5;

type GrafismoProps = {
  /** `3`, `4` e `5` são os SVGs de `public/marca/`. */
  nome: NomeGrafismo;
  /** Cor do traço: `marrom` sobre bege/creme, `bege` sobre verde. */
  cor: Cor;
  /** Classes de posição em relação ao card ou ao footer. */
  posicao: string;
  /** Classes de largura, em rem ou % (ex.: "w-72"). */
  largura: string;
  /** Classe de opacidade (ex.: "opacity-18"). */
  opacidade: string;
  /** Fragmento do SVG original por `clip-path` (hoverAcende), sem asset novo. */
  recorte?: Recorte;
  /** Fragmento que acende atrás de um card `hover-acende`. */
  acende?: boolean;
  /**
   * Emite os paths inline em vez de `<use>` do sprite: só para o footer, que
   * aparece em páginas sem sprite (Política de privacidade).
   */
  inline?: boolean;
  /** Classes extras na raiz (ex.: `footer-grafismo` para o parallax inverso da cortina). */
  className?: string;
};

const CORES: Record<Cor, string> = {
  verde: "text-verde",
  bege: "text-bege",
  marrom: "text-marrom",
};

const CLASSES_SVG = "block h-auto w-full";

type SvgLido = { viewBox: string; conteudo: string };

const arquivosLidos = new Map<NomeGrafismo, SvgLido>();

/** `id` do `<symbol>` de cada grafismo no sprite (`SpriteGrafismos`). */
export const ID_SIMBOLO = (nome: NomeGrafismo) => `grafismo-${nome}`;

/**
 * Lê o SVG de `public/marca/` (única fonte de verdade) uma vez por processo e
 * separa `viewBox` e conteúdo (os `<path>`). Os arquivos estão limpos na
 * fonte (sem `<metadata>`); `fill="currentColor"` e `fill-rule="evenodd"`
 * são reaplicados no `<svg>` que faz o `<use>`.
 */
export function lerSvg(nome: NomeGrafismo): SvgLido {
  const emCache = arquivosLidos.get(nome);
  if (emCache) return emCache;

  // Caminho estaticamente delimitado a public/marca: o rastreamento do Next
  // inclui só essa pasta no bundle da função (a Home é ISR e re-renderiza fora do build).
  const svg = readFileSync(
    join(process.cwd(), "public", "marca", `${ID_SIMBOLO(nome)}.svg`),
    "utf8",
  ).trim();

  const viewBox = /^<svg\b[^>]*\bviewBox="([^"]+)"/.exec(svg)?.[1];
  const conteudo = /^<svg\b[^>]*>([\s\S]*)<\/svg>\s*$/.exec(svg)?.[1]?.trim();
  if (!viewBox || !conteudo || !conteudo.includes("<path")) {
    throw new Error(
      `${ID_SIMBOLO(nome)}.svg: sem <svg viewBox> ou sem <path>; não dá para injetar inline.`,
    );
  }

  const lido = { viewBox, conteudo };
  arquivosLidos.set(nome, lido);
  return lido;
}

/**
 * Marcação do SVG de um grafismo: `<use>` do símbolo do sprite (o `viewBox`
 * repetido mantém a proporção; `fill="currentColor"` deixa a cor vir do
 * `text-*`) ou, com `inline`, os paths no próprio `<svg>`. `classes` permite à
 * camada global dimensionar pela altura em vez da largura.
 */
export function marcacaoSvg(nome: NomeGrafismo, inline: boolean, classes = CLASSES_SVG): string {
  const { viewBox, conteudo } = lerSvg(nome);
  const abertura = `<svg class="${classes}" viewBox="${viewBox}" fill="currentColor" fill-rule="evenodd" aria-hidden="true">`;
  return `${abertura}${inline ? conteudo : `<use href="#${ID_SIMBOLO(nome)}"/>`}</svg>`;
}

/**
 * Grafismo decorativo local: fora da árvore de acessibilidade e sem capturar
 * cliques. Desde a Revisão v2 só tem dois usos: o fragmento que acende atrás
 * dos cards (`acende` + `recorte`, um pedaço do original) e o grafismo do
 * footer (`inline`, atrás do `<main>`, fora da camada global). Os grafismos
 * das páginas vivem na `CamadaGrafismos` (`components/layout`), com a
 * composição de `lib/conteudo/grafismos`. A arte nunca é espelhada nem
 * deformada. Não carrega z-index próprio: fica sob o conteúdo pela ordem do
 * DOM (footer) ou pelo `z-index: -1` do `acende` dentro do card.
 */
export function Grafismo({
  nome,
  cor,
  posicao,
  largura,
  opacidade,
  recorte,
  acende,
  inline = false,
  className,
}: GrafismoProps) {
  const classes = [
    "pointer-events-none absolute select-none",
    CORES[cor],
    posicao,
    largura,
    opacidade,
    recorte ? `${MOV.recorte}-${recorte}` : "",
    acende ? MOV.acende : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      aria-hidden="true"
      className={classes}
      dangerouslySetInnerHTML={{ __html: marcacaoSvg(nome, inline) }}
    />
  );
}
