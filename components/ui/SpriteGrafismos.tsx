import { ID_SIMBOLO, lerSvg, NOMES_SVG } from "@/components/ui/Grafismo";

/**
 * Sprite com os três grafismos da marca como `<symbol>`, uma vez por página,
 * renderizado pela primeira seção de cada página (Hero e Aberturas, Post).
 * Cada `Grafismo` só referencia o símbolo com `<use>`: o HTML deixa de repetir
 * os paths (os campos da camada ambiente nem entram aqui: são `mask-image`)
 * (mitigação da Decisão 010, item 9, acionada na Fase 4 quando a Home passou
 * de 7 para 21 SVGs com os fragmentos do hoverAcende). `<use>` resolve o
 * símbolo mesmo em `display: none` e em qualquer ordem no documento. Fica na
 * árvore da página, não no Header/Footer: o payload RSC de toda página inclui
 * também a árvore do 404 global (Header e Footer de novo), e lá os paths
 * contariam duas vezes (medido: +13 KB gzip por página). O footer e o 404
 * usam `Grafismo inline` por isso, e a Política de privacidade (sem grafismo
 * próprio) não carrega sprite.
 */
export function SpriteGrafismos() {
  return (
    <svg aria-hidden="true" className="hidden" xmlns="http://www.w3.org/2000/svg">
      {NOMES_SVG.map((nome) => {
        const { viewBox, conteudo } = lerSvg(nome);
        return (
          <symbol
            key={nome}
            id={ID_SIMBOLO(nome)}
            viewBox={viewBox}
            dangerouslySetInnerHTML={{ __html: conteudo }}
          />
        );
      })}
    </svg>
  );
}
