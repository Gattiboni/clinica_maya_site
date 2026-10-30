import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";
import { CLINICA } from "@/lib/conteudo/clinica";

/** §Atendimento on-line 5 · Chamada final (bloco verde, sem grafismo, como no mock). */
export function ChamadaFinal() {
  return (
    <Secao fundo="verde" className="flex flex-col items-center gap-5 text-center">
      <h2 className="max-w-3xl text-h2 font-medium">
        Sua consulta <span className="whitespace-nowrap">on-line</span> começa com uma mensagem
      </h2>
      <Botao href={CLINICA.agendarHref} variante="bege">
        Agendar consulta on-line
      </Botao>
    </Secao>
  );
}
