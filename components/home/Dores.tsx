import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { CardDor } from "@/components/ui/CardDor";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { DORES } from "@/lib/conteudo/dores";
import { MOV } from "@/lib/movimento";

/**
 * §Home 3 · Dores. O grafismo-4 tem as pontas cortadas à esquerda e embaixo:
 * ancorado no canto inferior esquerdo, as duas ficam fora da folha (2.7). No
 * mundo, com parallax e rotação lenta; campo-2 na camada ambiente; os cards
 * entram em sequência com profundidade.
 */
export function Dores() {
  return (
    <Secao
      fundo="bege"
      campo="campo-2"
      grafismo={
        <Grafismo
          nome="4"
          cor="marrom"
          posicao="-bottom-12 -left-30"
          largura="w-[340px]"
          opacidade="opacity-22"
          parallax="mundo"
        />
      }
    >
      <CabecalhoSecao
        titulo={
          <>
            Talvez você se reconheça <em>aqui</em>
          </>
        }
        lead="Cada uma dessas histórias pede um olhar diferente. Veja quem na clínica pode ajudar."
        className={`${MOV.reveal} mb-12`}
      />
      <ul
        className={`${MOV.revealStagger} ${MOV.profundo} grid gap-5 sm:grid-cols-2 lg:grid-cols-3`}
      >
        {DORES.map((dor) => (
          <li key={dor.titulo} className="flex">
            <CardDor dor={dor} />
          </li>
        ))}
      </ul>
    </Secao>
  );
}
