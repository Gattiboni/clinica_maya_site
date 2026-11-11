import { Botao } from "@/components/ui/Botao";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { TituloDesencontrado } from "@/components/ui/TituloDesencontrado";
import { CLINICA } from "@/lib/conteudo/clinica";
import { MOV } from "@/lib/movimento";

/** §Emagrecimento 7 · Chamada final (fundo creme e botão verde, como no mock): folha cheia com o título em duas linhas (2.8). */
export function ChamadaFinal() {
  return (
    <Secao fundo="creme" folha="cta" className="flex flex-col items-center">
      <Nevoa className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center`}>
        <TituloDesencontrado
          linhas={["O primeiro passo é sempre o mesmo:", "uma conversa"]}
          className="max-w-3xl"
        />
        <div className={`${MOV.pulsar} flex`}>
          <Botao href={CLINICA.agendarHref}>Agendar consulta</Botao>
        </div>
        <p className="text-nota">Antônio Carlos/SC e on-line para todo o Brasil</p>
      </Nevoa>
    </Secao>
  );
}
