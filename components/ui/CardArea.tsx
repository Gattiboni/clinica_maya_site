import Link from "next/link";
import { Grafismo } from "@/components/ui/Grafismo";
import type { Area } from "@/lib/conteudo/areas";
import { MOV } from "@/lib/movimento";

type CardAreaProps = {
  area: Area;
  /** Fundo do card: o oposto do fundo da seção, como no mock. */
  fundo: "bege" | "creme";
  /** Posição na lista: escolhe o fragmento de grafismo que acende atrás do card. */
  indice: number;
};

const FUNDOS = {
  bege: "bg-bege",
  creme: "bg-creme",
};

/**
 * Um fragmento por área, na ordem da copy: recortes dos SVGs 3, 4 e 5 por
 * `clip-path` (sem asset novo), em cantos diferentes do card.
 */
const FRAGMENTOS = [
  { nome: "3", recorte: 1, posicao: "-top-12 -right-24", largura: "w-72" },
  { nome: "4", recorte: 2, posicao: "-bottom-28 -left-20", largura: "w-64" },
  { nome: "5", recorte: 3, posicao: "-top-10 -left-24", largura: "w-72" },
  { nome: "3", recorte: 4, posicao: "-right-28 -bottom-24", largura: "w-80" },
  { nome: "4", recorte: 5, posicao: "-top-20 -right-16", largura: "w-64" },
] as const;

/** Card de área de cuidado: nome, texto, quem atende e modalidade. O card inteiro é o link. */
export function CardArea({ area, fundo, indice }: CardAreaProps) {
  const fragmento = FRAGMENTOS[indice % FRAGMENTOS.length];

  return (
    <Link
      href={area.href}
      className={`${MOV.hoverEleva} ${MOV.hoverAcende} flex w-full flex-col gap-3 rounded-card border border-marrom/18 px-6 py-7 text-verde transition-colors hover:border-verde focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde ${FUNDOS[fundo]}`}
    >
      <Grafismo
        nome={fragmento.nome}
        cor="marrom"
        posicao={fragmento.posicao}
        largura={fragmento.largura}
        opacidade="opacity-0"
        recorte={fragmento.recorte}
        acende
      />
      <h3 className="text-h3 font-semibold">{area.nome}</h3>
      <p className="flex-1 text-nota">{area.texto}</p>
      <p className="text-nota leading-snug font-bold">{area.quem}</p>
      <span className="self-start rounded-pilula border border-marrom/35 px-3 py-1 text-legenda font-bold tracking-rotulo uppercase">
        {area.modalidade}
      </span>
    </Link>
  );
}
