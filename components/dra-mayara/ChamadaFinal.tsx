import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";
import { CLINICA } from "@/lib/conteudo/clinica";

/**
 * §Dra. Mayara 5 · Chamada final. Os dois botões apontam para o mesmo destino,
 * com os rótulos da copy: o primeiro sólido bege, o segundo só com contorno
 * bege, como no mock.
 */
export function ChamadaFinal() {
  return (
    <Secao fundo="verde" className="flex flex-col items-center gap-6 text-center">
      <h2 className="max-w-3xl text-h2 font-medium">A primeira consulta é o começo da jornada</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Botao href={CLINICA.agendarHref} variante="bege">
          Agendar presencial
        </Botao>
        <Botao href={CLINICA.agendarHref} variante="contorno-bege">
          Agendar on-line
        </Botao>
      </div>
    </Secao>
  );
}
