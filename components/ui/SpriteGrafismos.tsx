import { ID_SIMBOLO, lerSvg } from "@/components/ui/Grafismo";
import type { NomeGrafismo } from "@/lib/conteudo/grafismos";

/**
 * Sprite com o grafismo da página como `<symbol>`, renderizado pela
 * `CamadaGrafismos` (primeiro nó de cada página): só o símbolo da composição
 * da página (Revisão v3, lote D; antes eram os três). O grafismo da abertura
 * referencia o símbolo com `<use>`. `<use>` resolve o símbolo mesmo em
 * `display: none` e em qualquer ordem no documento. Fica na árvore da página,
 * não no Header/Footer: o payload RSC de toda página inclui também a árvore do
 * 404 global (Header e Footer de novo), e lá os paths contariam duas vezes
 * (medido: +13 KB gzip por página). A Política de privacidade (sem grafismo)
 * não carrega sprite.
 */
export function SpriteGrafismos({ nome }: { nome: NomeGrafismo }) {
  const { viewBox, conteudo } = lerSvg(nome);
  return (
    <svg aria-hidden="true" className="hidden" xmlns="http://www.w3.org/2000/svg">
      <symbol
        id={ID_SIMBOLO(nome)}
        viewBox={viewBox}
        dangerouslySetInnerHTML={{ __html: conteudo }}
      />
    </svg>
  );
}
