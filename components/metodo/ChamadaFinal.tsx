import { Botao } from "@/components/ui/Botao";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { TituloDesencontrado } from "@/components/ui/TituloDesencontrado";
import { CLINICA } from "@/lib/conteudo/clinica";
import { MOV } from "@/lib/movimento";

/** §Método 6 · Chamada final: folha cheia com o título em duas linhas (2.8). */
export function ChamadaFinal() {
  return (
    <Secao fundo="verde" folha="cta" className="flex flex-col items-center">
      <Nevoa className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center`}>
        <TituloDesencontrado
          linhas={["A sua jornada começa", "com uma conversa"]}
          className="max-w-3xl"
        />
        <div className={`${MOV.pulsar} flex`}>
          <Botao href={CLINICA.agendarHref} variante="bege">
            Agendar a primeira consulta
          </Botao>
        </div>
        <p className="text-nota">Antônio Carlos/SC e on-line para todo o Brasil</p>
      </Nevoa>
    </Secao>
  );
}
