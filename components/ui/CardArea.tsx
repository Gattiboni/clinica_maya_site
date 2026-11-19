import Link from "next/link";
import type { Area } from "@/lib/conteudo/areas";
import { MOV } from "@/lib/movimento";

type CardAreaProps = {
  area: Area;
  /** Fundo do card: o oposto do fundo da seção, como no mock. */
  fundo: "bege" | "creme";
};

const FUNDOS = {
  bege: "bg-bege",
  creme: "bg-creme",
};

/**
 * Card de área de cuidado: só nome da área e texto (Revisão v2: quem atende e
 * a modalidade existem apenas na Equipe). O card inteiro é o link. Hover:
 * eleva e troca a borda (o fragmento de grafismo saiu na Revisão v3, lote C).
 */
export function CardArea({ area, fundo }: CardAreaProps) {
  return (
    <Link
      href={area.href}
      className={`${MOV.hoverEleva} flex w-full flex-col gap-3 rounded-card border border-marrom/18 px-6 py-7 text-verde transition-colors hover:border-verde focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde ${FUNDOS[fundo]}`}
    >
      <h3 className="text-h3 font-semibold">{area.nome}</h3>
      <p className="flex-1 text-nota">{area.texto}</p>
    </Link>
  );
}
