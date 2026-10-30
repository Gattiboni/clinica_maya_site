import { CardProfissional } from "@/components/equipe/CardProfissional";
import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { Grafismo } from "@/components/ui/Grafismo";
import type { NomeCampo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import type { AreaEquipe } from "@/lib/conteudo/equipe";
import { MOV } from "@/lib/movimento";

type SecaoAreaProps = {
  area: AreaEquipe;
  /** Posição na lista de áreas: define a alternância creme/bege (começa em creme). */
  indice: number;
};

/** Campo ambiente nas áreas sem grafismo, alternando: 1ª e 4ª seções. */
const CAMPOS: Record<number, NomeCampo> = { 0: "campo-1", 3: "campo-2" };

/**
 * §Equipe 2 a 6 · uma seção por área, com `id` igual à âncora. Fundos alternam
 * creme/bege a partir de creme; o card usa a cor oposta. O grafismo só existe
 * em Psicologia, como no mock: grafismo-3 espelhado e ancorado no canto
 * superior direito, para as pontas cortadas (esquerda e topo no original)
 * caírem fora da folha (2.7). Afinação 1 (2.11): título, descrição e cards
 * centralizados (trilhas de largura fixa centradas pela grade); cards entram
 * em sequência de 60ms com profundidade; na chegada por âncora
 * (`/equipe#psicologia`) a seção alvo não anima (`:target` no CSS).
 */
export function SecaoArea({ area, indice }: SecaoAreaProps) {
  const creme = indice % 2 === 0;

  return (
    <Secao
      id={area.id}
      fundo={creme ? "creme" : "bege"}
      campo={CAMPOS[indice]}
      grafismo={
        area.id === "psicologia" ? (
          <Grafismo
            nome="3"
            cor="marrom"
            posicao="-top-20 -right-[140px] -scale-x-100"
            largura="w-80 lg:w-[420px]"
            opacidade="opacity-20"
            parallax="mundo"
            drift="mundo"
          />
        ) : undefined
      }
    >
      <CabecalhoSecao
        titulo={area.nome}
        lead={area.descricao}
        alinhar="centro"
        className={`${MOV.reveal} mb-10`}
      />
      <ul
        className={`${MOV.revealStagger} ${MOV.profundo} grid justify-center gap-6 [grid-template-columns:repeat(auto-fit,min(100%,22rem))]`}
      >
        {area.profissionais.map((profissional) => (
          <li key={profissional.nome} className="flex">
            <CardProfissional profissional={profissional} fundo={creme ? "bege" : "creme"} />
          </li>
        ))}
      </ul>
    </Secao>
  );
}
