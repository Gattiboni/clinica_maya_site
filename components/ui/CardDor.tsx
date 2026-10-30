import Link from "next/link";
import type { Dor } from "@/lib/conteudo/dores";
import { MOV } from "@/lib/movimento";

type CardDorProps = {
  dor: Dor;
};

/**
 * Card de dor: título, frase e quem pode ajudar. O card inteiro é o link.
 * Hover: eleva 4px e a linha "Quem pode ajudar" ganha sublinhado da esquerda.
 */
export function CardDor({ dor }: CardDorProps) {
  return (
    <Link
      href={dor.href}
      className={`${MOV.hoverEleva} flex w-full flex-col gap-2.5 rounded-card border border-marrom/18 bg-creme px-6 py-7 text-verde transition-colors hover:border-verde focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde`}
    >
      <h3 className="text-h3 font-semibold">{dor.titulo}</h3>
      <p className="flex-1 text-nota">{dor.texto}</p>
      <p className="mt-1.5 border-t border-marrom/20 pt-3 text-nota leading-snug">
        <span className={`${MOV.sublinhaHover} text-marrom`}>Quem pode ajudar:</span>{" "}
        <strong className="font-bold">{dor.quem}</strong>
      </p>
    </Link>
  );
}
