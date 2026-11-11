import { Botao } from "@/components/ui/Botao";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { TituloDesencontrado } from "@/components/ui/TituloDesencontrado";
import { CLINICA } from "@/lib/conteudo/clinica";
import { MOV } from "@/lib/movimento";

/** §A Clínica 6 · Chamada final: folha cheia com o título em duas linhas (2.8). */
export function ChamadaFinal() {
  return (
    <Secao fundo="creme" folha="cta" className="flex flex-col items-center">
      <Nevoa className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center`}>
        <TituloDesencontrado linhas={["Venha conhecer", "a Clínica Maya"]} className="max-w-3xl" />
        <div className={`${MOV.pulsar} flex`}>
          <Botao href={CLINICA.agendarHref}>Agendar presencial ou on-line</Botao>
        </div>
      </Nevoa>
    </Secao>
  );
}
