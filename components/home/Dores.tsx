import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { CardDor } from "@/components/ui/CardDor";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { DORES } from "@/lib/conteudo/dores";

/**
 * §Home 3 · Dores. O grafismo-4 sangra 48px sobre o bloco verde do Método
 * (o mock desloca 140px): o símbolo corpo-mente-espírito começa 64px abaixo
 * do topo daquela seção e a regra 9 do mapa proíbe grafismo na região dele.
 */
export function Dores() {
  return (
    <Secao
      fundo="bege"
      grafismo={
        <Grafismo
          nome="4"
          cor="marrom"
          posicao="-bottom-12 -left-30"
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
