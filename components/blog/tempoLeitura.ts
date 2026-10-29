import type { BlocoTexto } from "@/lib/sanity/queries";

const PALAVRAS_POR_MINUTO = 200;

/**
 * Tempo de leitura em minutos: conta as palavras dos blocos de texto do `body`
 * (imagens e outros membros ficam de fora), divide por 200 palavras/min e
 * arredonda para cima. Mínimo 1, inclusive para corpo vazio.
 */
export function tempoLeitura(body: BlocoTexto[] | null | undefined): number {
  const palavras = (body ?? [])
    .filter((bloco) => bloco._type === "block")
    .flatMap((bloco) => bloco.children ?? [])
    .map((filho) => filho.text ?? "")
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(palavras / PALAVRAS_POR_MINUTO));
}
