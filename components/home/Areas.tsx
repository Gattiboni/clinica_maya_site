import { CabecalhoSecao } from "@/components/ui/CabecalhoSecao";
import { GradeAreas } from "@/components/ui/GradeAreas";
import { LinkTexto } from "@/components/ui/LinkTexto";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";

/** §Home 2 · Áreas de cuidado. Primeira folha: sobe por cima da capa e publica o relógio dela (`--pos-capa`). Campo-1 na camada ambiente. */
export function Areas() {
  return (
    <Secao fundo="creme" campo="campo-1">
      <CabecalhoSecao
        titulo="Uma clínica, várias formas de cuidar de você"
        lead="Cada área tem profissionais próprias, e todas conversam entre si para que o seu cuidado seja um só."
        acao={<LinkTexto href="/equipe">Conhecer a equipe</LinkTexto>}
        className={`${MOV.reveal} mb-12`}
      />
      <GradeAreas fundoCard="bege" />
    </Secao>
  );
}
