import { Secao } from "@/components/ui/Secao";
import { O_QUE_MUDA, QUEM_ATENDE, type BlocoTextoOnline } from "@/lib/conteudo/atendimento";
import { MOV } from "@/lib/movimento";

function Coluna({ bloco }: { bloco: BlocoTextoOnline }) {
  return (
    <div
      className={`${MOV.hoverEleva} flex flex-col gap-4 rounded-card border border-marrom/18 bg-creme px-7 py-8 text-verde lg:px-10 lg:py-10`}
    >
      <h2 className="text-h2 font-medium">{bloco.titulo}</h2>
      {bloco.paragrafos.map((paragrafo) => (
        <p key={paragrafo} className="max-w-prosa text-corpo">
          {paragrafo}
        </p>
      ))}
    </div>
  );
}

/** §Atendimento on-line 3 · O que muda em relação ao presencial e quem atende on-line, em duas colunas a partir de `lg`; cards com profundidade e hover (2.6); campo-2 na camada ambiente. */
export function OQueMuda() {
  return (
    <Secao
      fundo="bege"
      campo="campo-2"
      className={`${MOV.revealStagger} ${MOV.profundo} grid gap-6 lg:grid-cols-2 lg:gap-12`}
    >
      <Coluna bloco={O_QUE_MUDA} />
      <Coluna bloco={QUEM_ATENDE} />
    </Secao>
  );
}
