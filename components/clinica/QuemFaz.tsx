import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { GradeAreas } from "@/components/ui/GradeAreas";
import { LinkTexto } from "@/components/ui/LinkTexto";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";

/** §A Clínica 5 · Quem faz a clínica. Mesmos cards, mesmo array de áreas e mesmo hoverAcende da Home. */
export function QuemFaz() {
  return (
    <Secao fundo="bege">
      <div className="mb-11">
        <CabecalhoSecao
          titulo="Quem faz a clínica"
          lead="Medicina, nutrição, psicologia, terapia e saúde capilar, com profissionais que se falam entre si."
          acao={<LinkTexto href="/equipe">Conhecer a equipe</LinkTexto>}
          className={MOV.reveal}
        />
      </div>
      <GradeAreas fundoCard="creme" />
    </Secao>
  );
}
