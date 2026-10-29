import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { GradeAreas } from "@/components/ui/GradeAreas";
import { LinkTexto } from "@/components/ui/LinkTexto";
import { Secao } from "@/components/ui/Secao";

/** §A Clínica 5 · Quem faz a clínica. Mesmos cards e mesmo array de áreas da Home. */
export function QuemFaz() {
  return (
    <Secao fundo="bege">
      <CabecalhoSecao
        titulo="Quem faz a clínica"
        lead="Medicina, nutrição, psicologia, terapia e saúde capilar, com profissionais que se falam entre si."
        acao={<LinkTexto href="/equipe">Conhecer a equipe</LinkTexto>}
        className="mb-11"
      />
      <GradeAreas fundoCard="creme" />
    </Secao>
  );
}
