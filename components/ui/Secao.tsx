import type { CSSProperties, ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import type { NomeCampo } from "@/components/ui/Grafismo";
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
  /** Grafismo decorativo, posicionado em absoluto dentro do slot da camada `grafismo`. */
  grafismo?: ReactNode;
  /**
   * Campo de linhas orgânicas na camada ambiente (entre o fundo e o grafismo), com deriva
   * contínua e parallax 0.2; cor conforme o fundo. Um por página ou alternando por folha.
   */
  campo?: NomeCampo;
  /** Marca a seção como folha de pilha, capa ou chamada final (Fase 4); sem suporte a scroll-driven animations, só o layout muda. */
  folha?: Folha;
  /** Classes aplicadas ao Container (ex.: grid da seção). */
  className?: string;
};

/**
 * Cor do fundo (camada `fundo`). A borda do creme vai no mesmo elemento do
 * fundo, por dentro dele (Fase 4): na seção, ficava fora do fundo e deixava
 * passar o que estivesse atrás; com a capa, o hero fixado aparecia como um
 * risco escuro na emenda entre Áreas e Dores.
 */
const FUNDOS: Record<Fundo, string> = {
  bege: "bg-bege",
  creme: "bg-creme",
  verde: "bg-verde",
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

/** Cor e opacidade do campo por fundo (tokens `--mov-campo-*`): marrom sobre claro, bege sobre verde. */
const CAMPOS: Record<Fundo, string> = {
  bege: "text-marrom opacity-(--mov-campo-claro)",
  creme: "text-marrom opacity-(--mov-campo-claro)",
  verde: "text-bege opacity-(--mov-campo-verde)",
};

/** Respiro vertical por token (`--secao-py`, em globals.css): 64/96, 48/64 e 32/48px (mobile/desktop). */
const ESPACOS: Record<Espaco, string> = {
  normal: "secao-normal",
  curto: "secao-curto",
  compacto: "secao-compacto",
};

const FOLHAS: Record<Folha, string> = {
  pilha: MOV.folha,
  capa: MOV.capa,
  cta: MOV.ctaFolha,
};

/**
 * Faixa de página em camadas (`CAMADA`, em `lib/camadas`): fundo (elemento
 * próprio em z 0, não `background` da seção), campo ambiente (z 0, depois do
 * fundo), grafismo (z 10) e conteúdo no Container (z 20).
 *
 * Folhas (afinação 1, 2.1): toda seção é uma folha. O fundo leva a classe
 * `secao-fundo`, que o CSS arredonda em cima e sombreia (exceto na primeira
 * seção do `<main>`); com scroll-driven animations a seção anterior fica presa
 * pela borda inferior enquanto esta sobe sobre ela e recua. Com isso a seção
 * passa a ter stacking context próprio e o slot de grafismo (`secao-grafismo`)
 * recorta nos dois eixos: o desenho não escapa da folha sobre a vizinha; só a
 * primeira seção mantém o recorte apenas horizontal (sangra sob o header).
 * O respiro vertical vem do token `--secao-py` (classe `secao-*`): nas folhas, o
 * padding de baixo ganha a sobreposição, para a faixa coberta ser sempre respiro.
 * `scroll-margin-top` igual à altura do header (80px; 96px a partir de `menu:`);
 * com scroll-driven animations, a classe `secao` troca para a altura compacta
 * do header sticky (72px) e publica a timeline `--secao` para o scrub dos filhos.
 */
export function Secao({
  children,
  id,
  fundo = "bege",
  espaco = "normal",
  grafismo,
  campo,
  folha,
  className,
}: SecaoProps) {
  const classesSecao = [
    MOV.secao,
    "relative scroll-mt-20 menu:scroll-mt-24",
    folha ? FOLHAS[folha] : "",
    TEXTOS[fundo],
    ESPACOS[espaco],
  ]
    .filter(Boolean)
    .join(" ");
  const classesContainer = ["relative", CAMADA.conteudo, className].filter(Boolean).join(" ");

  return (
    <section id={id} className={classesSecao}>
      <div
        aria-hidden="true"
        className={`${MOV.secaoFundo} absolute inset-0 ${CAMADA.fundo} ${FUNDOS[fundo]} ${BORDAS[fundo]}`}
      />
      {campo && <Campo nome={campo} classes={CAMPOS[fundo]} />}
      {grafismo && (
        <div
          aria-hidden="true"
          className={`${MOV.secaoGrafismo} pointer-events-none absolute inset-0 overflow-x-clip ${CAMADA.grafismo}`}
        >
          {grafismo}
        </div>
      )}
      <Container className={classesContainer}>{children}</Container>
    </section>
  );
}

/**
 * Camada ambiente (2.7): o campo preenche a folha como `mask-image` do SVG de
 * `public/marca/` sobre `background-color: currentColor` (CSS `campo-deriva`):
 * a cor vem do `text-*`, o arquivo fica em cache e nada entra no HTML nem no
 * payload RSC (inline, cada campo custaria duas vezes). `mask-size: cover`
 * equivale ao `slice`: as linhas nascem e morrem fora da caixa. Duas camadas
 * animam: parallax 0.2 por `view()` e a deriva lenta por keyframes, com escala
 * de folga para a deriva não expor as bordas.
 */
function Campo({ nome, classes }: { nome: NomeCampo; classes: string }) {
  return (
    <div
      aria-hidden="true"
      className={`${MOV.campo} ${MOV.parallaxCampo} pointer-events-none overflow-clip ${CAMADA.fundo} ${classes}`}
    >
      <span
        className={MOV.campoDeriva}
        style={{ "--campo": `url("/marca/${nome}.svg")` } as CSSProperties}
      />
    </div>
  );
}
