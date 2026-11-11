import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { CAMADA } from "@/lib/camadas";
import { MOV } from "@/lib/movimento";

type Fundo = "bege" | "creme" | "verde";
/** `compacto`: metade do `normal` (vizinhas da pilha no Método, afinação 1). */
type Espaco = "normal" | "curto" | "compacto";
/**
 * `pilha`: folha de `stack` (sticky no topo compacto, recua por scrub quando a
 * seguinte sobe). `capa`: o hero da Home, coberto pela primeira folha (mapa §1.2 e §2).
 * `cta`: chamada final como folha cheia (70svh no desktop, conteúdo centralizado).
 */
type Folha = "pilha" | "capa" | "cta";

type SecaoProps = {
  children: ReactNode;
  /** Âncora da seção (ex.: `medicina` em `/equipe#medicina`). */
  id?: string;
  fundo?: Fundo;
  espaco?: Espaco;
  /**
   * Círculo Maya decorativo, posicionado em absoluto dentro do slot da camada
   * `simbolo`. Grafismo da marca não entra aqui: vive na `CamadaGrafismos`.
   */
  simbolo?: ReactNode;
  /** Marca a seção como folha de pilha, capa ou chamada final (Fase 4); sem suporte a scroll-driven animations, só o layout muda. */
  folha?: Folha;
  /** Classes aplicadas ao Container (ex.: grid da seção). */
  className?: string;
};

/**
 * Cor do fundo (camada `fundo`). A borda do creme vai no mesmo elemento do
 * fundo, por dentro dele (Fase 4): na seção, ficava fora do fundo e deixava
 * passar o que estivesse atrás.
 */
const FUNDOS: Record<Fundo, string> = {
  bege: "bg-bege",
  creme: "bg-creme",
  verde: "bg-verde",
};

/**
 * Cor sólida da superfície, exposta como `--fundo-atual` no próprio
 * `<section>` (e herdada por tudo dentro dela): quem precisa pintar "da cor do
 * fundo" lê a variável em vez de repetir o mapa: a névoa atrás do texto
 * corrido (`components/ui/Nevoa`, Decisão 012).
 */
const FUNDO_ATUAL: Record<Fundo, string> = {
  bege: "[--fundo-atual:var(--color-bege)]",
  creme: "[--fundo-atual:var(--color-creme)]",
  verde: "[--fundo-atual:var(--color-verde)]",
};

const BORDAS: Record<Fundo, string> = {
  bege: "",
  creme: "border-y border-marrom/12",
  verde: "",
};

const TEXTOS: Record<Fundo, string> = {
  bege: "text-verde",
  creme: "text-verde",
  verde: "text-bege",
};

/** Respiro vertical por token (`--secao-py`, em globals.css): 64/96, 48/64 e 32/48px (mobile/desktop). */
const ESPACOS: Record<Espaco, string> = {
  normal: "secao-normal",
  curto: "secao-curto",
  compacto: "secao-compacto",
};

/**
 * A folha de pilha é `sticky`, que cria stacking context por definição: ela
 * vai inteira para a camada de conteúdo (carta opaca à frente da camada global).
 */
const FOLHAS: Record<Folha, string> = {
  pilha: `${MOV.folha} ${CAMADA.conteudo}`,
  capa: MOV.capa,
  cta: MOV.ctaFolha,
};

/**
 * Faixa de página em camadas (`CAMADA`, em `lib/camadas`): fundo (elemento
 * próprio em z 0, não `background` da seção), símbolo decorativo opcional
 * (z 10) e conteúdo no Container (z 20).
 *
 * Revisão v2 (3.2): a `<section>` não recebe transform nem opacity, então não
 * é stacking context. O recuo da folha (escala e translação de "presa pela
 * borda inferior") é aplicado pelo CSS ao fundo, ao slot do símbolo e ao
 * Container separadamente, com a mesma animação, a mesma timeline (`--secao`)
 * e a mesma origem (o centro da seção), de modo que os três se movem como um
 * bloco só; o esmaecer continua só no Container. É isso que deixa a
 * `CamadaGrafismos` (z 10 na página) passar entre o fundo e o conteúdo de
 * todas as seções.
 *
 * Folhas (afinação 1, 2.1): toda seção é uma folha. O fundo leva a classe
 * `secao-fundo`, que o CSS arredonda em cima e sombreia (exceto na primeira
 * seção do `<main>`). O respiro vertical vem do token `--secao-py` (classe
 * `secao-*`): nas folhas, o padding de baixo ganha a sobreposição, para a
 * faixa coberta ser sempre respiro. `scroll-margin-top` igual à altura do
 * header (80px; 96px a partir de `menu:`); com scroll-driven animations, a
 * classe `secao` troca para a altura compacta do header sticky (72px) e
 * publica a timeline `--secao`.
 */
export function Secao({
  children,
  id,
  fundo = "bege",
  espaco = "normal",
  simbolo,
  folha,
  className,
}: SecaoProps) {
  const classesSecao = [
    MOV.secao,
    "relative scroll-mt-20 menu:scroll-mt-24",
    folha ? FOLHAS[folha] : "",
    TEXTOS[fundo],
    FUNDO_ATUAL[fundo],
    ESPACOS[espaco],
  ]
    .filter(Boolean)
    .join(" ");
  const classesContainer = [MOV.secaoConteudo, "relative", CAMADA.conteudo, className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classesSecao}>
      <div
        aria-hidden="true"
        className={`${MOV.secaoFundo} absolute inset-0 ${CAMADA.fundo} ${FUNDOS[fundo]} ${BORDAS[fundo]}`}
      />
      {simbolo && (
        <div
          aria-hidden="true"
          className={`${MOV.secaoSimbolo} pointer-events-none absolute inset-0 overflow-clip ${CAMADA.simbolo}`}
        >
          {simbolo}
        </div>
      )}
      <Container className={classesContainer}>{children}</Container>
    </section>
  );
}
