import { readFileSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import circuloClaro from "@/public/marca/corpo-mente-espirito-claro.png";
import circuloEscuro from "@/public/marca/corpo-mente-espirito-escuro.png";

type NomeSvg = "3" | "4" | "5";
type Nome = NomeSvg | "circulo";
type Cor = "verde" | "bege" | "marrom";

type GrafismoProps = {
  /** `3`, `4` e `5` são os SVGs de `public/marca/`; `circulo` é o PNG corpo-mente-espírito. */
  nome: Nome;
  /** Cor do traço: `marrom` sobre bege/creme, `bege` sobre verde (como no mock). */
  cor: Cor;
  /**
   * Classes de posição em relação à seção; deslocamentos negativos são
   * esperados (ex.: "-top-10 -right-[90px]"): o grafismo sangra sobre a seção
   * vizinha pela estrutura de camadas de `Secao`.
   */
  posicao: string;
  /** Classes de largura, em rem ou % (ex.: "w-80 lg:w-[35rem]"). */
  largura: string;
  /** Classe de opacidade (ex.: "opacity-35"). */
  opacidade: string;
};

const CORES: Record<Cor, string> = {
  verde: "text-verde",
  bege: "text-bege",
  marrom: "text-marrom",
};

const CLASSES_SVG = "block h-auto w-full";

const cache = new Map<NomeSvg, string>();

/**
 * Lê o SVG de `public/marca/` (única fonte de verdade) uma vez por processo.
 * Os arquivos estão limpos na fonte (sem `<metadata>`); `viewBox`,
 * `fill="currentColor"` e `fill-rule="evenodd"` ficam como estão.
 */
function lerSvg(nome: NomeSvg): string {
  const emCache = cache.get(nome);
  if (emCache) return emCache;

  // Caminho estaticamente delimitado a public/marca: o rastreamento do Next
  // inclui só essa pasta no bundle da função (a Home é ISR e re-renderiza fora do build).
  const svg = readFileSync(
    join(process.cwd(), "public", "marca", `grafismo-${nome}.svg`),
    "utf8",
  ).trim();

  if (!/^<svg\b[^>]*\bviewBox="[^"]+"/.test(svg) || !svg.includes("<path")) {
    throw new Error(
      `grafismo-${nome}.svg: sem <svg viewBox> ou sem <path>; não dá para injetar inline.`,
    );
  }

  const comClasses = svg.replace(/^<svg\b/, `<svg class="${CLASSES_SVG}"`);
  cache.set(nome, comClasses);
  return comClasses;
}

/**
 * Grafismo decorativo da marca: fora da árvore de acessibilidade e sem
 * capturar cliques. Os SVGs entram inline (server component, leitura em
 * build) para a cor vir de `currentColor` e o `<path>` poder ser animado
 * depois; o círculo corpo-mente-espírito continua PNG neste lote.
 *
 * Não carrega z-index próprio: a camada (`CAMADA.grafismo`, de `lib/camadas`,
 * aplicada por `Secao`) é do slot que o envolve. Assim o mesmo componente serve ao footer, que não é
 * `Secao` e mantém o grafismo sob o conteúdo pela ordem do DOM.
 */
export function Grafismo({ nome, cor, posicao, largura, opacidade }: GrafismoProps) {
  const classes = `pointer-events-none absolute select-none ${CORES[cor]} ${posicao} ${largura} ${opacidade}`;

  if (nome === "circulo") {
    return (
      <Image
        src={cor === "bege" ? circuloClaro : circuloEscuro}
        alt=""
        aria-hidden="true"
        sizes="260px"
        className={`h-auto ${classes}`}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={classes}
      dangerouslySetInnerHTML={{ __html: lerSvg(nome) }}
    />
  );
}
