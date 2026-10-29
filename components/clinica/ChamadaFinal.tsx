import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";
import { CLINICA } from "@/lib/conteudo/clinica";

/** §A Clínica 6 · Chamada final. */
export function ChamadaFinal() {
  return (
    <Secao fundo="creme" className="flex flex-col items-center gap-5 text-center">
      <h2 className="max-w-3xl text-h2 font-medium">Venha conhecer a Clínica Maya</h2>
      <Botao href={CLINICA.agendarHref}>Agendar presencial ou on-line</Botao>
    </Secao>
  );
}
