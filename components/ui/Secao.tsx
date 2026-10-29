import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

type Fundo = "bege" | "creme" | "verde";
type Espaco = "normal" | "curto";

type SecaoProps = {
  children: ReactNode;
  fundo?: Fundo;
  espaco?: Espaco;
  /** Grafismo decorativo posicionado em absoluto dentro da seção. */
  grafismo?: ReactNode;
  /** Classes aplicadas ao Container (ex.: grid da seção). */
  className?: string;
};

const FUNDOS: Record<Fundo, string> = {
  bege: "bg-bege text-verde",
  creme: "bg-creme text-verde border-y border-marrom/12",
  verde: "bg-verde text-bege",
};

const ESPACOS: Record<Espaco, string> = {
  normal: "py-16 lg:py-24",
  curto: "py-12 lg:py-16",
};

/** Faixa de página: fundo da marca, respiro vertical, grafismo opcional e Container. */
export function Secao({
  children,
  fundo = "bege",
  espaco = "normal",
  grafismo,
  className,
}: SecaoProps) {
  const classesContainer = ["relative", className].filter(Boolean).join(" ");

  return (
    <section className={`relative overflow-hidden ${FUNDOS[fundo]} ${ESPACOS[espaco]}`}>
      {grafismo}
      <Container className={classesContainer}>{children}</Container>
    </section>
  );
}
