import Link from "next/link";
import type { Area } from "@/lib/conteudo/areas";

type CardAreaProps = {
  area: Area;
  /** Fundo do card: o oposto do fundo da seção, como no mock. */
  fundo: "bege" | "creme";
};

const FUNDOS = {
  bege: "bg-bege",
  creme: "bg-creme",
};

/** Card de área de cuidado: nome, texto, quem atende e modalidade. O card inteiro é o link. */
export function CardArea({ area, fundo }: CardAreaProps) {
  return (
    <Link
      href={area.href}
      className={`flex w-full flex-col gap-3 rounded-card border border-marrom/18 px-6 py-7 text-verde transition-colors hover:border-verde focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde ${FUNDOS[fundo]}`}
    >
      <h3 className="text-h3 font-semibold">{area.nome}</h3>
      <p className="flex-1 text-nota">{area.texto}</p>
      <p className="text-nota leading-snug font-bold">{area.quem}</p>
      <span className="self-start rounded-pilula border border-marrom/35 px-3 py-1 text-legenda font-bold tracking-rotulo uppercase">
        {area.modalidade}
      </span>
    </Link>
  );
}
