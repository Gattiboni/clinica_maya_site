import Link from "next/link";
import type { ReactNode } from "react";

type Variante = "verde" | "bege" | "contorno";
type Tamanho = "normal" | "pequeno";

type BotaoProps = {
  href: string;
  children: ReactNode;
  /** `verde`: sólido sobre fundo claro. `bege`: sólido sobre bloco verde. `contorno`: só borda. */
  variante?: Variante;
  tamanho?: Tamanho;
  className?: string;
};

const VARIANTES: Record<Variante, string> = {
  verde: "bg-verde text-bege hover:bg-marrom focus-visible:outline-verde",
  bege: "bg-bege text-verde hover:bg-creme focus-visible:outline-bege",
  contorno:
    "border-2 border-verde text-verde hover:border-marrom hover:text-marrom focus-visible:outline-verde",
};

const TAMANHOS: Record<Tamanho, string> = {
  normal: "px-9 py-4 text-botao",
  pequeno: "px-7 py-3 text-corpo",
};

/**
 * Botão pílula da marca. Links internos usam `next/link`; externos (WhatsApp,
 * Instagram) abrem em nova aba com rel seguro.
 */
export function Botao({
  href,
  children,
  variante = "verde",
  tamanho = "normal",
  className,
}: BotaoProps) {
  const externo = /^https?:\/\//.test(href);
  const classes = [
    "inline-flex items-center justify-center rounded-pilula font-bold whitespace-nowrap transition-colors",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
    VARIANTES[variante],
    TAMANHOS[tamanho],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (externo) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
