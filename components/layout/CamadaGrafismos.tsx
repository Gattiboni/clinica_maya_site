import type { CSSProperties } from "react";
import { marcacaoSvg } from "@/components/ui/Grafismo";
import { SpriteGrafismos } from "@/components/ui/SpriteGrafismos";
import { CAMADA } from "@/lib/camadas";
import { GRAFISMOS, type PaginaGrafismos } from "@/lib/conteudo/grafismos";
import { MOV } from "@/lib/movimento";

type CamadaGrafismosProps = {
  /** Página cuja composição (`lib/conteudo/grafismos`) a camada desenha. */
  pagina: PaginaGrafismos;
};

const SVG_GRAFISMO = "block h-full w-auto max-w-none";

/**
 * Grafismo da abertura (Revisão v3, lote B; substitui a camada global da
 * Revisão v2): um grafismo por página, bem suave, de fundo, só na seção de
 * abertura, pulsando devagar. Server component, primeiro nó de cada página
 * (dentro do `<main>`); a composição é por página (`lib/conteudo/grafismos`).
 *
 * Confinamento (CSS, `.camada-grafismo` em `app/globals.css`): o invólucro é
 * `absolute` no `<main>`, do topo da página até o topo do que vem logo depois
 * da abertura (a primeira `section` do `<main>`), por anchor positioning, com
 * `overflow: clip`. Rola junto com a abertura (sem `sticky`, sem parallax) e é
 * recortado onde a folha seguinte começa a cobri-la. Fica em
 * `CAMADA.grafismoGlobal` (z 10): acima do fundo da abertura, abaixo do
 * conteúdo dela; a `Secao` continua sem stacking context.
 *
 * Cor: uma cópia marrom em `multiply` (todas as aberturas têm fundo claro).
 * Movimento: só o pulso de opacidade, por tempo; com `prefers-reduced-motion`,
 * parado na opacidade-base. Nada depende de scroll-driven animations.
 */
export function CamadaGrafismos({ pagina }: CamadaGrafismosProps) {
  const grafismo = GRAFISMOS[pagina];
  const estilo = {
    "--gg-topo": `${grafismo.topo}svh`,
    "--gg-altura": `${grafismo.altura}svh`,
    "--gg-altura-m": `${grafismo.alturaMobile}svh`,
    "--gg-sangria": `${grafismo.sangria}vw`,
    opacity: grafismo.opacidade,
  } as CSSProperties;

  return (
    <>
      <SpriteGrafismos nome={grafismo.nome} />
      <div
        aria-hidden="true"
        className={`${MOV.camadaGrafismo} ${CAMADA.grafismoGlobal} pointer-events-none text-marrom select-none`}
      >
        <span className={MOV.grafismoAbertura} style={estilo}>
          <span
            className={MOV.grafismoPulso}
            dangerouslySetInnerHTML={{ __html: marcacaoSvg(grafismo.nome, SVG_GRAFISMO) }}
          />
        </span>
      </div>
    </>
  );
}
