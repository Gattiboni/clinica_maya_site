import type { CSSProperties } from "react";
import { AO_ENTRAR, MOV } from "@/lib/movimento";

type Cor = "verde" | "bege" | "marrom";
type Fundo = "bege" | "creme" | "verde";

type CirculoMayaProps = {
  /** Prefixo único na página para os `id` dos arcos das palavras (`textPath`). */
  id: string;
  /** Cor do traço e das palavras: `bege` sobre verde, `marrom`/`verde` sobre claro. */
  cor: Cor;
  /** Cor da folha atrás: recorta o círculo sob cada palavra (contorno da mesma cor do fundo). */
  fundo: Fundo;
  /**
   * `true` (padrão): monta-se por tempo ao entrar na viewport (`AoEntrar`) e
   * desmonta-se por scroll ao sair. `false`: estático (decorativo).
   */
  animado?: boolean;
  /** Nome acessível quando o símbolo é conteúdo; sem ele, é decorativo (`aria-hidden`). */
  rotulo?: string;
  /** Classes de tamanho e posição (ex.: "w-full max-w-[380px]"). */
  className?: string;
};

/**
 * Geometria em pixels do PNG original (`corpo-mente-espirito-*.png`, 1569 ×
 * 1583), medida pelo canal alfa e conferida por sobreposição a 50% até casar
 * (30/10: 97% dos pixels do traço do PNG a menos de 4px do SVG a 1000px de
 * largura; o resto é diferença de glifo). Cada anel: centro, raio, ângulo em
 * que o traço começa a ser desenhado (na palavra, para terminar nela) e o arco
 * da palavra (de `a1` a `a2`, em graus com y para baixo, passando por baixo).
 * Ordem de montagem: espírito, mente, corpo.
 */
const VIEW_BOX = "0 0 1569 1583";
const FONTE = 78;
const ESPACO_LETRAS = 2;
/** Raio do arco da palavra = raio do anel + esta folga (a linha de base fica um pouco fora do traço). */
const FOLGA_PALAVRA = 16;
/** Largura do contorno da cor do fundo que recorta o anel sob a palavra. */
const RECORTE_PALAVRA = 30;

const ANEIS = [
  { palavra: "espírito", cx: 884.5, cy: 613, r: 196, inicio: 110, a1: 127, a2: 20 },
  { palavra: "mente", cx: 655.5, cy: 595, r: 495.5, inicio: 100, a1: 112.5, a2: 60 },
  { palavra: "corpo", cx: 784.5, cy: 783.5, r: 783.5, inicio: 100, a1: 108, a2: 70 },
] as const;

const CORES: Record<Cor, string> = {
  verde: "text-verde",
  bege: "text-bege",
  marrom: "text-marrom",
};

const FUNDOS: Record<Fundo, string> = {
  bege: "var(--color-bege)",
  creme: "var(--color-creme)",
  verde: "var(--color-verde)",
};

/** Arco de `a1` a `a2` (ângulos decrescentes: sentido anti-horário na tela, pela parte de baixo). */
function arco(cx: number, cy: number, r: number, a1: number, a2: number): string {
  const ponto = (a: number) => {
    const rad = (a * Math.PI) / 180;
    return `${(cx + r * Math.cos(rad)).toFixed(1)} ${(cy + r * Math.sin(rad)).toFixed(1)}`;
  };
  return `M${ponto(a1)}A${r} ${r} 0 0 0 ${ponto(a2)}`;
}

/**
 * Símbolo corpo-mente-espírito em SVG construído à mão (afinação 1, 2.4), no
 * lugar do PNG: três `<circle>` em `stroke` e as três palavras em `<textPath>`
 * com a Lora em itálico. Cada anel é um `<svg>` próprio, empilhado num quadro
 * com perspectiva, para a rotação 3D por anel (SVG interno não aceita 3D). O
 * `<circle>` tem `pathLength="1"` para o CSS desenhar com `stroke-dashoffset`,
 * e gira para o traço começar e terminar na palavra. A palavra é escrita duas
 * vezes: um contorno grosso da cor do fundo (recorta o anel por baixo dela, como
 * no PNG) e o preenchimento por cima; `paint-order` não serve porque, por glifo,
 * o contorno do seguinte comeria o anterior.
 *
 * Comportamento (CSS, `circulo-*`): com `animado`, ao entrar na viewport o
 * `AoEntrar` marca `data-entrou` e cada anel se desenha enquanto cresce de 0,7
 * para 1 com rotateX 35° → 0, em sequência de 150ms, e as palavras surgem
 * depois; ao rolar para fora, desmonta-se no sentido inverso por `view()` e
 * remonta ao voltar. Sem JavaScript ou sem suporte, fica montado e parado.
 * Regra 9 do mapa continua: só sobre fundo sólido, nada atrás dele.
 */
export function CirculoMaya({
  id,
  cor,
  fundo,
  animado = true,
  rotulo,
  className,
}: CirculoMayaProps) {
  const classes = [MOV.circulo, CORES[cor], className].filter(Boolean).join(" ");
  const acessibilidade = rotulo
    ? { role: "img", "aria-label": rotulo }
    : { "aria-hidden": true as const };
  const gatilho = animado ? { [AO_ENTRAR]: "" } : {};

  return (
    <span className={classes} {...acessibilidade} {...gatilho}>
      {ANEIS.map((anel, indice) => {
        const idArco = `${id}-${indice}`;
        const caminho = arco(anel.cx, anel.cy, anel.r + FOLGA_PALAVRA, anel.a1, anel.a2);
        const palavra = (classesExtras: string, estilo: CSSProperties) => (
          <text
            className={`${MOV.circuloPalavra} ${classesExtras}`}
            fontSize={FONTE}
            letterSpacing={ESPACO_LETRAS}
            style={estilo}
          >
            <textPath href={`#${idArco}`}>{anel.palavra}</textPath>
          </text>
        );
        return (
          <svg
            key={anel.palavra}
            className={MOV.circuloAnel}
            viewBox={VIEW_BOX}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            style={{ "--mov-anel": indice } as CSSProperties}
            aria-hidden="true"
          >
            <circle
              className={MOV.circuloTraco}
              cx={anel.cx}
              cy={anel.cy}
              r={anel.r}
              pathLength={1}
              transform={`rotate(${anel.inicio} ${anel.cx} ${anel.cy})`}
            />
            <defs>
              <path id={idArco} d={caminho} />
            </defs>
            {palavra("", {
              fill: "none",
              stroke: FUNDOS[fundo],
              strokeWidth: RECORTE_PALAVRA,
              strokeLinejoin: "round",
            })}
            {palavra("", { fill: "currentColor", stroke: "none" })}
          </svg>
        );
      })}
    </span>
  );
}
