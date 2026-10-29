import { CardProfissional } from "@/components/equipe/CardProfissional";
import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import type { AreaEquipe } from "@/lib/conteudo/equipe";

type SecaoAreaProps = {
  area: AreaEquipe;
  /** Posição na lista de áreas: define a alternância creme/bege (começa em creme). */
  indice: number;
};

/**
 * §Equipe 2 a 6 · uma seção por área, com `id` igual à âncora. Fundos alternam
 * creme/bege a partir de creme; o card usa a cor oposta. O grafismo só existe
 * em Psicologia, como no mock.
 */
export function SecaoArea({ area, indice }: SecaoAreaProps) {
  const creme = indice % 2 === 0;

  return (
    <Secao
      id={area.id}
      fundo={creme ? "creme" : "bege"}
      grafismo={
        area.id === "psicologia" ? (
          <Grafismo
            nome="3"
            cor="marrom"
            posicao="-right-[140px] -bottom-30"
            largura="w-80 lg:w-[420px]"
            opacidade="opacity-20"
          />
        ) : undefined
      }
    >
      <CabecalhoSecao titulo={area.nome} lead={area.descricao} className="mb-10" />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {area.profissionais.map((profissional) => (
          <li key={profissional.nome} className="flex">
            <CardProfissional profissional={profissional} fundo={creme ? "bege" : "creme"} />
          </li>
        ))}
      </ul>
    </Secao>
  );
}
