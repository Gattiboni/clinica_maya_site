import type { CSSProperties } from "react";
import { marcacaoSvg } from "@/components/ui/Grafismo";
import { SpriteGrafismos } from "@/components/ui/SpriteGrafismos";
import { CAMADA } from "@/lib/camadas";
import { GRAFISMOS, type GrafismoGlobal, type PaginaGrafismos } from "@/lib/conteudo/grafismos";
import { MOV } from "@/lib/movimento";

type CamadaGrafismosProps = {
  /** Página cuja composição (`lib/conteudo/grafismos`) a camada desenha. */
  pagina: PaginaGrafismos;
  /**
   * `todos` (padrão): os três símbolos, que os cards com hoverAcende também
   * usam. `usados`: só os da composição (404, cuja árvore entra no payload RSC
   * de toda página).
   */
  sprite?: "todos" | "usados";
};

/** As duas cópias da composição: uma escurece os fundos claros, a outra clareia o verde. */
const COPIAS = [
  { classe: MOV.globalMarrom, cor: "text-marrom" },
  { classe: MOV.globalBege, cor: "text-bege" },
] as const;

const SVG_GLOBAL = "block h-full w-auto max-w-none";

function Item({ grafismo }: { grafismo: GrafismoGlobal }) {
  const estilo = {
    "--gg-trecho": `${grafismo.trecho}%`,
    "--gg-topo": `${grafismo.topo}svh`,
    "--gg-altura": `${grafismo.altura}svh`,
    "--gg-altura-m": `${grafismo.alturaMobile}svh`,
    "--gg-sangria": `${grafismo.sangria}vw`,
    opacity: grafismo.opacidade,
  } as CSSProperties;

  // De fora para dentro: parallax (scroll da página) → tilt por scrub → rotação lenta → drift → tilt do cursor.
  return (
    <span className={MOV.globalItem} style={estilo}>
      <span className={`${MOV.globalCamada} ${MOV.globalInclina}`}>
        <span className={`${MOV.globalCamada} ${MOV.giraLento}`}>
          <span className={`${MOV.globalCamada} ${MOV.driftMundo}`}>
            <span
              className={`${MOV.globalCamada} ${MOV.tilt3d}`}
              dangerouslySetInnerHTML={{ __html: marcacaoSvg(grafismo.nome, false, SVG_GLOBAL) }}
            />
          </span>
        </span>
      </span>
    </span>
  );
}

/**
 * Camada global de grafismos (Revisão v2, 3.2): os originais da marca
 * flutuando ACIMA de todos os fundos e ABAIXO de todo texto, card e foto, na
 * página inteira. Server component, primeiro nó de cada página (dentro do
 * `<main>`); a composição é por página (`lib/conteudo/grafismos`).
 *
 * Estrutura: um invólucro `absolute inset-0` com `overflow: clip` (recorta a
 * camada ao palco: os grafismos nunca aparecem sobre o footer da cortina) e,
 * dentro dele, duas janelas `sticky` de uma viewport, sobrepostas, em
 * `CAMADA.grafismoGlobal` (z 10, entre o fundo z 0 e o conteúdo z 20 das
 * seções, que não criam stacking context). É o efeito de `position: fixed;
 * inset: 0` pedido na instrução, com o recorte no fim do palco que o `fixed`
 * não daria.
 *
 * Cor (escolha documentada, testada nos três fundos): duas cópias da mesma
 * composição com `mix-blend-mode`. A marrom em `multiply` escurece bege e
 * creme e quase some no verde; a bege em `screen` clareia o verde e some nos
 * claros. A troca acompanha a folha que passa pixel a pixel (inclusive o canto
 * arredondado), sem `clip-path` ligado ao scroll e sem repintura: é só
 * composição. As janelas precisam ser o próprio stacking context que mistura
 * com a página, por isso são duas e o invólucro não tem z-index.
 *
 * Movimento: parallax pelo scroll da página (fator em token; o grafismo cruza
 * a tela no trecho da composição), tilt por scrub, rotação lenta, drift e
 * tilt pelo cursor. No toque: sem drift nem tilt, parallax menor. Sem
 * scroll-driven animations ou com `prefers-reduced-motion`, só o primeiro
 * grafismo aparece, parado na posição-base.
 */
export function CamadaGrafismos({ pagina, sprite = "todos" }: CamadaGrafismosProps) {
  const { grafismos, ondas } = GRAFISMOS[pagina];
  const usados = [...new Set(grafismos.map((grafismo) => grafismo.nome))];

  return (
    <>
      <SpriteGrafismos nomes={sprite === "usados" ? usados : undefined} />
      <div
        aria-hidden="true"
        className={`${MOV.global} pointer-events-none absolute inset-0 overflow-clip select-none`}
        style={{ "--gg-ondas": ondas } as CSSProperties}
      >
        {COPIAS.map((copia) => (
          <div
            key={copia.classe}
            className={`${MOV.globalJanela} ${copia.classe} ${copia.cor} ${CAMADA.grafismoGlobal}`}
          >
            {grafismos.map((grafismo) => (
              <Item key={`${grafismo.nome}-${grafismo.trecho}`} grafismo={grafismo} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
