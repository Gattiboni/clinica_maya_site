import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";
import { TituloDesencontrado } from "@/components/ui/TituloDesencontrado";
import { CLINICA } from "@/lib/conteudo/clinica";
import { MOV } from "@/lib/movimento";

/** §A Clínica 6 · Chamada final: folha cheia com o título em duas linhas (2.8); campo-1 na camada ambiente. */
export function ChamadaFinal() {
  return (
    <Secao
      fundo="creme"
      folha="cta"
      campo="campo-1"
      className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center`}
    >
      <TituloDesencontrado linhas={["Venha conhecer", "a Clínica Maya"]} className="max-w-3xl" />
      <Botao href={CLINICA.agendarHref} className={MOV.pulsar}>
        Agendar presencial ou on-line
      </Botao>
    </Secao>
  );
}
