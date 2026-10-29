import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { GradeAreas } from "@/components/ui/GradeAreas";
import { LinkTexto } from "@/components/ui/LinkTexto";
import { Secao } from "@/components/ui/Secao";

/** §Home 2 · Áreas de cuidado. */
export function Areas() {
  return (
    <Secao fundo="creme">
      <CabecalhoSecao
        titulo="Uma clínica, várias formas de cuidar de você"
        lead="Cada área tem profissionais próprias, e todas conversam entre si para que o seu cuidado seja um só."
        acao={<LinkTexto href="/equipe">Conhecer a equipe</LinkTexto>}
        className="mb-12"
      />
      <GradeAreas fundoCard="bege" />
    </Secao>
  );
}
