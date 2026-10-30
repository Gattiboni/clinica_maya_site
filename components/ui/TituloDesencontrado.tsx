import type { ReactNode } from "react";
import { MOV } from "@/lib/movimento";

type TituloDesencontradoProps = {
  /** As duas linhas visuais do título, na ordem de leitura; o texto não muda, só a quebra. */
  linhas: [ReactNode, ReactNode];
  className?: string;
};

/**
 * Título da chamada final em duas linhas desencontradas (afinação 1, 2.8): a
 * primeira alinhada à esquerda, a segunda recuada à direita, cada uma entrando
 * de um lado por `view()` (`titulo-desencontrado` no CSS). A quebra é visual,
 * um `<span>` por linha com um espaço entre eles: para leitor de tela e para
 * cópia, o H2 continua a frase inteira da copy.
 */
export function TituloDesencontrado({ linhas, className }: TituloDesencontradoProps) {
  const classes = [MOV.tituloDesencontrado, "text-h2 font-medium", className]
    .filter(Boolean)
    .join(" ");
  return (
    <h2 className={classes}>
      <span>{linhas[0]}</span> <span>{linhas[1]}</span>
    </h2>
  );
}
