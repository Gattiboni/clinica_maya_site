import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { PROGRAMAS } from "@/lib/conteudo/emagrecimento";
import { MOV } from "@/lib/movimento";

/**
 * §Emagrecimento 5 · Programas: nome e uma frase por card. Sem link, sem
 * preço, sem duração, sem número de consultas (regra da copy). Cards entram em
 * sequência com profundidade (rotateX 8° → 0) e levantam no hover (afinação 1,
 * 2.6, que inclui os Programas entre os cards com hover; o mapa §3 os deixava
 * sem elevação por não serem links).
 */
export function Programas() {
  return (
    <Secao fundo="bege">
      <Nevoa className="mx-auto mb-11 w-fit lg:mx-0">
        <CabecalhoSecao
          titulo={
            <>
              Depois da consulta, um caminho <em>natural</em>
            </>
          }
          lead="Para quem precisa de mais do que uma consulta, a clínica tem programas de acompanhamento. A Dra. Mayara indica qual faz sentido para o seu momento."
          className={MOV.reveal}
        />
      </Nevoa>
      <ul
        className={`${MOV.revealStagger} ${MOV.profundo} grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}
      >
        {PROGRAMAS.map((programa) => (
          <li
            key={programa.nome}
            className={`${MOV.hoverEleva} flex flex-col gap-3 rounded-card border border-marrom/18 bg-creme px-7 py-8 text-verde`}
          >
            <h3 className="text-h3 font-semibold">{programa.nome}</h3>
            <p className="text-nota">{programa.texto}</p>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
