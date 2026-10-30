import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";
import { TituloDesencontrado } from "@/components/ui/TituloDesencontrado";
import { CLINICA } from "@/lib/conteudo/clinica";
import { MOV } from "@/lib/movimento";

/** §Atendimento on-line 5 · Chamada final (bloco verde, sem grafismo, como no mock): folha cheia com o título em duas linhas (2.8); campo-1 na camada ambiente. */
export function ChamadaFinal() {
  return (
    <Secao
      fundo="verde"
      folha="cta"
      campo="campo-1"
      className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center`}
    >
      <TituloDesencontrado
        linhas={[
          <>
            Sua consulta <span className="whitespace-nowrap">on-line</span>
          </>,
          "começa com uma mensagem",
        ]}
        className="max-w-3xl"
      />
      <Botao href={CLINICA.agendarHref} variante="bege" className={MOV.pulsar}>
        Agendar consulta on-line
      </Botao>
    </Secao>
  );
}
