import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { CardDor } from "@/components/ui/CardDor";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { DORES } from "@/lib/conteudo/dores";

/** §Home 3 · Dores. */
export function Dores() {
  return (
    <Secao
      fundo="bege"
      grafismo={
        <Grafismo
          nome="4"
          cor="marrom"
          posicao="-bottom-35 -left-30"
          largura="w-[340px]"
          opacidade="opacity-22"
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
        className="mb-12"
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DORES.map((dor) => (
          <li key={dor.titulo} className="flex">
            <CardDor dor={dor} />
          </li>
        ))}
      </ul>
    </Secao>
  );
}
