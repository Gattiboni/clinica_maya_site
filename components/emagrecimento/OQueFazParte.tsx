import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { ITENS_ACOMPANHAMENTO } from "@/lib/conteudo/emagrecimento";

/** §Emagrecimento 4 · O que costuma fazer parte do acompanhamento: lista em duas colunas a partir de `sm`. */
export function OQueFazParte() {
  return (
    <Secao
      fundo="creme"
      grafismo={
        <Grafismo
          nome="4"
          cor="marrom"
          posicao="-right-30 -bottom-[150px]"
          largura="w-[360px]"
          opacidade="opacity-20"
        />
      }
    >
      <CabecalhoSecao
        titulo="O que costuma fazer parte do acompanhamento"
        lead="Cada plano é individual, mas alguns cuidados aparecem em toda a jornada."
        className="mb-10"
      />
      <ul className="mx-auto grid max-w-[980px] gap-x-12 gap-y-4 sm:grid-cols-2 lg:mx-0">
        {ITENS_ACOMPANHAMENTO.map((item) => (
          <li key={item} className="flex items-start gap-3.5">
            <span aria-hidden="true" className="mt-2 size-2.5 shrink-0 rounded-full bg-marrom" />
            <p className="text-corpo">{item}</p>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
