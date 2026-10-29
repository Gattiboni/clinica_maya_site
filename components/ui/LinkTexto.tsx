import Link from "next/link";
import type { ReactNode } from "react";

type LinkTextoProps = {
  href: string;
  children: ReactNode;
  /** `verde` sobre fundos claros; `bege` sobre bloco verde. */
  tom?: "verde" | "bege";
  className?: string;
};

const TONS = {
  verde: "text-verde hover:text-marrom focus-visible:outline-verde",
  bege: "text-bege hover:text-creme focus-visible:outline-bege",
};

/** Link de texto sublinhado, em negrito, com seta decorativa ao fim (copy, convenções). */
export function LinkTexto({ href, children, tom = "verde", className }: LinkTextoProps) {
  const classes = [
    "inline-block text-corpo font-bold whitespace-nowrap underline underline-offset-4 transition-colors",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
    TONS[tom],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={classes}>
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}
