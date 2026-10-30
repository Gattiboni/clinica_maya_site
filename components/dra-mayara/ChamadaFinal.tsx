import { Botao } from "@/components/ui/Botao";
import { Secao } from "@/components/ui/Secao";
import { TituloDesencontrado } from "@/components/ui/TituloDesencontrado";
import { CLINICA } from "@/lib/conteudo/clinica";
import { MOV } from "@/lib/movimento";

/**
 * §Dra. Mayara 5 · Chamada final: folha cheia com o título em duas linhas
 * (2.8). Os dois botões apontam para o mesmo destino, com os rótulos da copy:
 * o primeiro sólido bege, o segundo só com contorno bege, como no mock.
 */
export function ChamadaFinal() {
  return (
    <Secao
      fundo="verde"
      folha="cta"
      className={`${MOV.revealStagger} flex flex-col items-center gap-6 text-center`}
    >
      <TituloDesencontrado
        linhas={["A primeira consulta", "é o começo da jornada"]}
        className="max-w-3xl"
      />
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Botao href={CLINICA.agendarHref} variante="bege" className={MOV.pulsar}>
          Agendar presencial
        </Botao>
        <Botao href={CLINICA.agendarHref} variante="contorno-bege">
          Agendar on-line
        </Botao>
      </div>
    </Secao>
  );
}
