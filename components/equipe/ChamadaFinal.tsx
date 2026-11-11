import { Botao } from "@/components/ui/Botao";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { TituloDesencontrado } from "@/components/ui/TituloDesencontrado";
import { CLINICA } from "@/lib/conteudo/clinica";
import { MOV } from "@/lib/movimento";

/**
 * §Equipe 7 · Chamada final: folha cheia com o título em duas linhas (2.8).
 */
export function ChamadaFinal() {
  return (
    <Secao fundo="verde" folha="cta" className="flex flex-col items-center">
      <Nevoa className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center`}>
        <TituloDesencontrado
          linhas={[
            "Não sabe com quem",
            <>
              <em>começar</em>?
            </>,
          ]}
          className="max-w-3xl"
        />
        <p className="max-w-prosa-curta text-lead">
          Nosso atendimento ajuda a encontrar quem faz mais sentido para o seu momento.
        </p>
        <div className={`${MOV.pulsar} flex`}>
          <Botao href={CLINICA.agendarHref} variante="bege">
            Agendar consulta
          </Botao>
        </div>
        <p className="text-nota">Antônio Carlos/SC e on-line para todo o Brasil</p>
      </Nevoa>
    </Secao>
  );
}
