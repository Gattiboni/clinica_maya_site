import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { CAMADA } from "@/lib/camadas";

type Fundo = "bege" | "creme" | "verde";
type Espaco = "normal" | "curto";

type SecaoProps = {
  children: ReactNode;
  /** Âncora da seção (ex.: `medicina` em `/equipe#medicina`). */
  id?: string;
  fundo?: Fundo;
  espaco?: Espaco;
  /** Grafismo decorativo, posicionado em absoluto dentro do slot da camada `grafismo`. */
  grafismo?: ReactNode;
  /** Classes aplicadas ao Container (ex.: grid da seção). */
  className?: string;
};

/** Cor do fundo (camada `fundo`); a borda do creme fica na própria seção, para não alterar a altura. */
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

const ESPACOS: Record<Espaco, string> = {
  normal: "py-16 lg:py-24",
  curto: "py-12 lg:py-16",
};

/**
 * Faixa de página em três camadas (`CAMADA`, em `lib/camadas`): fundo
 * (elemento próprio em z 0, não `background` da seção), grafismo (z 10) e
 * conteúdo no Container (z 20).
 * A seção em si é `overflow: visible` e sem z-index; o slot do grafismo
 * recorta só no eixo horizontal, para um deslocamento negativo à direita ou
 * à esquerda não criar rolagem lateral, e deixa o vertical sangrar.
 * `scroll-margin-top` igual à altura do header (80px; 96px a partir de `menu:`)
 * para âncoras chegarem com o título visível.
 */
export function Secao({
  children,
  id,
  fundo = "bege",
  espaco = "normal",
  grafismo,
  className,
}: SecaoProps) {
  const classesSecao = [
    "relative scroll-mt-20 menu:scroll-mt-24",
    TEXTOS[fundo],
    BORDAS[fundo],
    ESPACOS[espaco],
  ]
    .filter(Boolean)
    .join(" ");
  const classesContainer = ["relative", CAMADA.conteudo, className].filter(Boolean).join(" ");

  return (
    <section id={id} className={classesSecao}>
      <div aria-hidden="true" className={`absolute inset-0 ${CAMADA.fundo} ${FUNDOS[fundo]}`} />
      {grafismo && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 overflow-x-clip ${CAMADA.grafismo}`}
        >
          {grafismo}
        </div>
      )}
      <Container className={classesContainer}>{children}</Container>
    </section>
  );
}
