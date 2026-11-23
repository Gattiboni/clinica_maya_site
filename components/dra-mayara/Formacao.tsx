import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";
import { FORMACAO, REGISTRO } from "@/components/dra-mayara/conteudo";

/** §Dra. Mayara · Formação (copy v1.4.1): lista na ordem da copy e a linha de registro. */
export function Formacao() {
  return (
    <Secao fundo="creme" espaco="curto" className="flex flex-col items-center lg:items-start">
      <div
        className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
      >
        <h2 className="text-h2 font-medium">Formação</h2>
        <ul className="flex max-w-prosa-longa flex-col gap-3 text-left">
          {FORMACAO.map((item) => (
            <li key={item} className="flex items-start gap-3.5">
              <span aria-hidden="true" className="mt-2 size-2.5 shrink-0 rounded-full bg-marrom" />
              <p className="text-corpo">{item}</p>
            </li>
          ))}
        </ul>
        <p className="text-nota font-bold tracking-rotulo">{REGISTRO}</p>
      </div>
    </Secao>
  );
}
