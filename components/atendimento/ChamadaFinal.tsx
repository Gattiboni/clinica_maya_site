import { Botao } from "@/components/ui/Botao";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { TituloDesencontrado } from "@/components/ui/TituloDesencontrado";
import { CLINICA } from "@/lib/conteudo/clinica";
import { MOV } from "@/lib/movimento";

/** §Atendimento on-line 5 · Chamada final (bloco verde): folha cheia com o título em duas linhas (2.8). */
export function ChamadaFinal() {
  return (
    <Secao fundo="verde" folha="cta" className="flex flex-col items-center">
      <Nevoa className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center`}>
        <TituloDesencontrado
          linhas={[
            <>
              Sua consulta <span className="whitespace-nowrap">on-line</span>
            </>,
            "começa com uma mensagem",
          ]}
          className="max-w-3xl"
        />
        <div className={`${MOV.pulsar} flex`}>
          <Botao href={CLINICA.agendarHref} variante="bege">
            Agendar consulta on-line
          </Botao>
        </div>
      </Nevoa>
    </Secao>
  );
}
