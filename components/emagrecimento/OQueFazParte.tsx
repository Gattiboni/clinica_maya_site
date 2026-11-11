import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { ITENS_ACOMPANHAMENTO } from "@/lib/conteudo/emagrecimento";
import { MOV } from "@/lib/movimento";

/**
 * §Emagrecimento 4 · O que costuma fazer parte do acompanhamento: lista em
 * duas colunas a partir de `sm`, itens em sequência de 80ms.
 */
export function OQueFazParte() {
  return (
    <Secao fundo="creme">
      <Nevoa className="mx-auto mb-10 w-fit lg:mx-0">
        <CabecalhoSecao
          titulo="O que costuma fazer parte do acompanhamento"
          lead="Cada plano é individual, mas alguns cuidados aparecem em toda a jornada."
          className={MOV.reveal}
        />
      </Nevoa>
      <Nevoa
        elemento="ul"
        className={`${MOV.revealStagger} ${MOV.stagger80} mx-auto grid max-w-[980px] gap-x-12 gap-y-4 sm:grid-cols-2 lg:mx-0`}
      >
        {ITENS_ACOMPANHAMENTO.map((item) => (
          <li key={item} className="flex items-start gap-3.5">
            <span aria-hidden="true" className="mt-2 size-2.5 shrink-0 rounded-full bg-marrom" />
            <p className="text-corpo">{item}</p>
          </li>
        ))}
      </Nevoa>
    </Secao>
  );
}
