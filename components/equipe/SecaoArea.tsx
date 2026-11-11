import { CardProfissional } from "@/components/equipe/CardProfissional";
import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import type { AreaEquipe } from "@/lib/conteudo/equipe";
import { MOV } from "@/lib/movimento";

type SecaoAreaProps = {
  area: AreaEquipe;
  /** Posição na lista de áreas: define a alternância creme/bege (começa em creme). */
  indice: number;
};

/**
 * §Equipe 2 a 6 · uma seção por área, com `id` igual à âncora. Fundos alternam
 * creme/bege a partir de creme; o card usa a cor oposta. Afinação 1 (2.11):
 * título, descrição e cards centralizados (trilhas de largura fixa centradas
 * pela grade); cards entram em sequência de 60ms com profundidade; na chegada
 * por âncora (`/equipe#psicologia`) a seção alvo não anima (`:target` no CSS).
 * Os grafismos vêm da camada global da página.
 */
export function SecaoArea({ area, indice }: SecaoAreaProps) {
  const creme = indice % 2 === 0;

  return (
    <Secao id={area.id} fundo={creme ? "creme" : "bege"}>
      <Nevoa className="mx-auto mb-10 w-fit">
        <CabecalhoSecao
          titulo={area.nome}
          lead={area.descricao}
          alinhar="centro"
          className={MOV.reveal}
        />
      </Nevoa>
      <ul
        className={`${MOV.revealStagger} ${MOV.profundo} grid justify-center gap-6 [grid-template-columns:repeat(auto-fit,min(100%,22rem))]`}
      >
        {area.profissionais.map((profissional) => (
          <li key={profissional.id} className="flex">
            <CardProfissional profissional={profissional} fundo={creme ? "bege" : "creme"} />
          </li>
        ))}
      </ul>
    </Secao>
  );
}
