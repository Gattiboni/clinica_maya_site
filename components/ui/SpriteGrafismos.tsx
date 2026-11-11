import { ID_SIMBOLO, lerSvg, NOMES_SVG } from "@/components/ui/Grafismo";
import type { NomeGrafismo } from "@/lib/conteudo/grafismos";

type SpriteGrafismosProps = {
  /** Quais símbolos emitir; padrão: os três (os cards com hoverAcende usam todos). */
  nomes?: readonly NomeGrafismo[];
};

/**
 * Sprite com os grafismos da marca como `<symbol>`, uma vez por página,
 * renderizado pela `CamadaGrafismos` (primeiro nó de cada página). Cada
 * grafismo (camada global e fragmentos dos cards) só referencia o símbolo com
 * `<use>`: o HTML não repete os paths. `<use>` resolve o símbolo mesmo em
 * `display: none` e em qualquer ordem no documento. Fica na árvore da página,
 * não no Header/Footer: o payload RSC de toda página inclui também a árvore do
 * 404 global (Header e Footer de novo), e lá os paths contariam duas vezes
 * (medido: +13 KB gzip por página). Por isso o footer usa `Grafismo inline`,
 * o 404 emite só o símbolo que usa (`nomes`) e a Política de privacidade (sem
 * grafismo) não carrega sprite.
 */
export function SpriteGrafismos({ nomes = NOMES_SVG }: SpriteGrafismosProps) {
  return (
    <svg aria-hidden="true" className="hidden" xmlns="http://www.w3.org/2000/svg">
      {nomes.map((nome) => {
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
