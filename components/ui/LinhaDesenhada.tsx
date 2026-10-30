import { MOV } from "@/lib/movimento";

type Direcao = "horizontal" | "vertical";
/**
 * `secao`: desenha ao longo da passagem da seção; `pilha`: ao longo da pilha
 * de folhas; `trilho`: ao longo do invólucro `linha-trilho` que a envolve
 * (`--linha`), o mesmo relógio dos itens de `.reveal-linha`.
 */
type Timeline = "secao" | "pilha" | "trilho";

type LinhaDesenhadaProps = {
  direcao: Direcao;
  /** Número de itens ligados (os centros ficam em (i + 0,5) / pontos). */
  pontos: number;
  timeline?: Timeline;
  /** Marcadores redondos nos centros (quando os itens não têm o próprio círculo). */
  marcadores?: boolean;
  /** Classes de posição e tamanho; a linha é `absolute` por padrão, `aria-hidden`. */
  className?: string;
};

const TIMELINES: Record<Timeline, string> = {
  secao: "",
  pilha: MOV.linhaDesenhadaPilha,
  trilho: MOV.linhaDesenhadaTrilho,
};

/**
 * Linha nossa (não grafismo da marca) que liga itens numerados, desenhada por
 * scrub: `pathLength="1"` deixa o CSS animar `stroke-dashoffset` de 1 a 0 sem
 * conhecer o comprimento real. Usa `<line>` com coordenadas em percentual,
 * então acompanha qualquer largura ou altura sem `preserveAspectRatio`.
 * Horizontal: do centro do primeiro item ao centro do último (grade de colunas
 * iguais; `pontos={1}` cobre de 0 a 100%, para colunas alinhadas à esquerda).
 * Vertical: trilho de cima a baixo. Sem scroll-driven animations, a linha
 * aparece inteira.
 */
export function LinhaDesenhada({
  direcao,
  pontos,
  timeline = "secao",
  marcadores = false,
  className,
}: LinhaDesenhadaProps) {
  const meio = 100 / (2 * pontos);
  const centros =
    pontos === 1
      ? ["0%", "100%"]
      : Array.from({ length: pontos }, (_, i) => `${meio * (2 * i + 1)}%`);
  const horizontal = direcao === "horizontal";
  const classes = [
    "pointer-events-none absolute overflow-visible",
    MOV.linhaDesenhada,
    TIMELINES[timeline],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <svg aria-hidden="true" className={classes} width="100%" height="100%">
      {horizontal ? (
        <line
          x1={centros[0]}
          y1="50%"
          x2={centros[centros.length - 1]}
          y2="50%"
          pathLength={1}
          stroke="currentColor"
          strokeWidth="1"
        />
      ) : (
        <line
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          pathLength={1}
          stroke="currentColor"
          strokeWidth="1.5"
        />
      )}
      {marcadores &&
        centros.map((centro) => (
          <circle
            key={centro}
            cx={horizontal ? centro : "50%"}
            cy={horizontal ? "50%" : centro}
            r="3.5"
            fill="currentColor"
          />
        ))}
    </svg>
  );
}
