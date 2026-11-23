import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { NomeGrafismo } from "@/lib/conteudo/grafismos";

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
 * `text-*`). Único consumidor: o grafismo da abertura (`CamadaGrafismos`), que
 * dimensiona pela altura via `classes`. Desde a Revisão v3, lote C, não há
 * mais grafismo fora da abertura (rodapé e fragmentos dos cards saíram), e
 * com eles o componente `Grafismo` e a marcação inline.
 */
export function marcacaoSvg(nome: NomeGrafismo, classes: string): string {
  const { viewBox } = lerSvg(nome);
  return `<svg class="${classes}" viewBox="${viewBox}" fill="currentColor" fill-rule="evenodd" aria-hidden="true"><use href="#${ID_SIMBOLO(nome)}"/></svg>`;
}
