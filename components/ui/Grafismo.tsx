import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { ReactNode } from "react";
import { MOV } from "@/lib/movimento";

/** Os três SVGs da marca em `public/marca/grafismo-{3,4,5}.svg`. */
export const NOMES_SVG = ["3", "4", "5"] as const;
/** Os campos de linhas orgânicas da camada ambiente, em `public/marca/campo-{1,2}.svg` (usados pelo CSS como `mask-image`, via `Secao`). */
export const NOMES_CAMPO = ["campo-1", "campo-2"] as const;
type NomeSvg = (typeof NOMES_SVG)[number];
export type NomeCampo = (typeof NOMES_CAMPO)[number];
type Cor = "verde" | "bege" | "marrom";
/** Camada do mapa que define fator de parallax e amplitude de drift (tokens `--mov-*`). */
type Camada = "mundo" | "frente";
/**
 * `rotacao` e `deslocamento` seguem a seção (`--secao`); `pilha` segue a pilha
 * de folhas (`--pilha`); `inclinar` segue a capa (`--pos-capa`).
 */
type Scrub = "rotacao" | "deslocamento" | "pilha" | "inclinar";
type Recorte = 1 | 2 | 3 | 4 | 5;

type GrafismoProps = {
  /** `3`, `4` e `5` são os SVGs de `public/marca/`. */
  nome: NomeSvg;
  /** Cor do traço: `marrom` sobre bege/creme, `bege` sobre verde (como no mock). */
  cor: Cor;
  /**
   * Classes de posição em relação à seção. Regra da afinação 1 (2.7): toda
   * ponta cortada do desenho fica fora da viewport ou atrás de uma folha,
   * nunca solta no meio da tela; o slot da folha recorta nos dois eixos.
   */
  posicao: string;
  /** Classes de largura, em rem ou % (ex.: "w-80 lg:w-[35rem]"). */
  largura: string;
  /** Classe de opacidade (ex.: "opacity-35"). */
  opacidade: string;
  /** Parallax por `view()`: `mundo` fica para trás (0.3), `frente` corre à frente (0.6). */
  parallax?: Camada;
  /** Drift pelo cursor: `mundo` até 8px, `frente` até 14px; só em `pointer: fine`. */
  drift?: Camada;
  /** tilt3d pelo cursor, até 6°; só em `pointer: fine`. */
  tilt?: boolean;
  /** Rotação lenta contínua (±1,5° em 40s). Padrão: ligada em todo grafismo com parallax. */
  gira?: boolean;
  /** Propriedade ligada ao progresso da seção, da pilha ou da capa. */
  scrub?: Scrub;
  /** Wipe de 1,2s na carga (só o grafismo-3 do hero). */
  wipe?: boolean;
  /** Fragmento do SVG por `clip-path` (hoverAcende e C4), sem asset novo. */
  recorte?: Recorte;
  /** Fragmento que acende atrás de um card `hover-acende`. */
  acende?: boolean;
  /**
   * Emite os paths inline em vez de `<use>` do sprite: só para o footer e o
   * 404, que aparecem em páginas sem sprite (Política de privacidade).
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

const PARALLAX: Record<Camada, string> = {
  mundo: MOV.parallaxMundo,
  frente: MOV.parallaxFrente,
};

const DRIFT: Record<Camada, string> = {
  mundo: MOV.driftMundo,
  frente: MOV.driftFrente,
};

const SCRUB: Record<Scrub, string> = {
  rotacao: MOV.scrubRotacao,
  deslocamento: MOV.scrubDeslocamento,
  pilha: MOV.scrubPilha,
  inclinar: MOV.scrubInclinar,
};

const CLASSES_SVG = "block h-auto w-full";

type SvgLido = { viewBox: string; conteudo: string };

const arquivosLidos = new Map<NomeSvg, SvgLido>();

/** `id` do `<symbol>` de cada grafismo no sprite (`SpriteGrafismos`). */
export const ID_SIMBOLO = (nome: NomeSvg) => `grafismo-${nome}`;

/**
 * Lê o SVG de `public/marca/` (única fonte de verdade) uma vez por processo e
 * separa `viewBox` e conteúdo (os `<path>`). Os arquivos estão limpos na
 * fonte (sem `<metadata>`); `fill="currentColor"` e `fill-rule="evenodd"`
 * são reaplicados no `<svg>` que faz o `<use>`.
 */
export function lerSvg(nome: NomeSvg): SvgLido {
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
 * O grafismo em si é só um `<use>` do símbolo que o `SpriteGrafismos` define
 * uma vez por página (na primeira seção de cada página): o `viewBox` repetido
 * no `<svg>` mantém a proporção, e `fill="currentColor"` deixa a cor vir do
 * `text-*` da raiz. Com `inline`, os paths vão no próprio `<svg>`.
 */
function marcacaoSvg(nome: NomeSvg, inline: boolean): string {
  const { viewBox, conteudo } = lerSvg(nome);
  const abertura = `<svg class="${CLASSES_SVG}" viewBox="${viewBox}" fill="currentColor" fill-rule="evenodd" aria-hidden="true">`;
  return `${abertura}${inline ? conteudo : `<use href="#${ID_SIMBOLO(nome)}"/>`}</svg>`;
}

/**
 * Grafismo decorativo da marca: fora da árvore de acessibilidade e sem
 * capturar cliques. Os SVGs entram inline (server component, leitura em
 * build) como `<use>` do sprite, para a cor vir de `currentColor` e o
 * tamanho vir da largura. O símbolo corpo-mente-espírito não passa mais por
 * aqui: é o `CirculoMaya` (SVG construído à mão, afinação 1).
 *
 * Não carrega z-index próprio: a camada (`CAMADA.grafismo`, de `lib/camadas`,
 * aplicada por `Secao`) é do slot que o envolve. Assim o mesmo componente serve ao footer, que não é
 * `Secao` e mantém o grafismo sob o conteúdo pela ordem do DOM.
 *
 * Movimento (Fase 4): cada primitiva anima uma propriedade própria, então
 * cada uma vive numa camada aninhada para não brigar pela mesma `animation`:
 * raiz (posição, opacidade, parallax, recorte) → scrub → rotação lenta → drift e wipe → tilt.
 * Sem props de movimento, o render é o de antes, sem camada extra. Sem
 * suporte a scroll-driven animations, nenhuma classe tem efeito.
 */
export function Grafismo({
  nome,
  cor,
  posicao,
  largura,
  opacidade,
  parallax,
  drift,
  tilt,
  gira = Boolean(parallax),
  scrub,
  wipe,
  recorte,
  acende,
  inline = false,
  className,
}: GrafismoProps) {
  const classesRaiz = [
    "pointer-events-none absolute select-none",
    MOV.grafismoRaiz,
    CORES[cor],
    posicao,
    largura,
    opacidade,
    parallax ? PARALLAX[parallax] : "",
    recorte ? `${MOV.recorte}-${recorte}` : "",
    acende ? MOV.acende : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Camadas de dentro para fora; vazias não entram no DOM.
  const camadas = [
    tilt ? MOV.tilt3d : "",
    [drift ? DRIFT[drift] : "", wipe ? MOV.wipeCarga : ""].filter(Boolean).join(" "),
    gira ? MOV.giraLento : "",
    scrub ? SCRUB[scrub] : "",
  ].filter(Boolean);

  const svg = marcacaoSvg(nome, inline);
  if (camadas.length === 0) {
    return (
      <span aria-hidden="true" className={classesRaiz} dangerouslySetInnerHTML={{ __html: svg }} />
    );
  }

  return (
    <span aria-hidden="true" className={classesRaiz}>
      {envolver(
        <span className={MOV.grafismoCamada} dangerouslySetInnerHTML={{ __html: svg }} />,
        camadas,
      )}
    </span>
  );
}

/** Aninha `conteudo` nas camadas, da mais interna para a mais externa. */
function envolver(conteudo: ReactNode, camadas: string[]): ReactNode {
  return camadas.reduce<ReactNode>(
    (dentro, classes) => <span className={`${MOV.grafismoCamada} ${classes}`}>{dentro}</span>,
    conteudo,
  );
}
