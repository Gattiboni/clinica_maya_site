import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { Secao } from "@/components/ui/Secao";
import { MANIFESTO } from "@/lib/conteudo/manifesto";
import { MOV } from "@/lib/movimento";

/** Blocos 1 e 3 em verde, bloco 2 em bege, como no mock. */
const FUNDOS_BLOCO = [
  "bg-verde text-bege",
  "border border-marrom/25 bg-bege text-verde",
  "bg-verde text-bege",
];

/**
 * §A Clínica 2 · Manifesto. Blocos entram em sequência de 120ms com
 * profundidade (é leitura, mais lento); no hover levantam (afinação 1, 2.6).
 * Revisão v3, lote C: sem o fragmento de grafismo que acendia atrás.
 */
export function Manifesto() {
  return (
    <Secao fundo="creme">
      <div className="mx-auto mb-12 w-fit lg:mx-0">
        <CabecalhoSecao
          titulo="O nosso manifesto"
          lead="Por que existimos, como cuidamos e o que oferecemos."
          className={MOV.reveal}
        />
      </div>
      <ul
        className={`${MOV.revealStagger} ${MOV.stagger120} ${MOV.profundo} grid gap-6 lg:grid-cols-3`}
      >
        {MANIFESTO.map((bloco, indice) => {
          return (
            <li
              key={bloco.eyebrow}
              className={`${MOV.hoverEleva} flex flex-col gap-3.5 rounded-card px-8 py-9 ${FUNDOS_BLOCO[indice]}`}
            >
              <span className="text-eyebrow font-bold uppercase">{bloco.eyebrow}</span>
              <h3 className="text-h3 font-semibold">{bloco.titulo}</h3>
              <p className="text-nota">{bloco.texto}</p>
            </li>
          );
        })}
      </ul>
    </Secao>
  );
}
