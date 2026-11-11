import { Botao } from "@/components/ui/Botao";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { TituloDesencontrado } from "@/components/ui/TituloDesencontrado";
import { CLINICA } from "@/lib/conteudo/clinica";
import { MOV } from "@/lib/movimento";

/**
 * §Home 10 · Chamada final. Fase 4 (mapa §2 H10; afinação 1, 2.8): folha
 * cheia (70svh no desktop) com o título em duas linhas desencontradas; o
 * botão faz a única pulsação do site ao entrar na viewport.
 */
export function ChamadaFinal() {
  return (
    <Secao fundo="verde" folha="cta" className="flex flex-col items-center">
      <Nevoa className={`${MOV.revealStagger} flex flex-col items-center gap-6 text-center`}>
        <TituloDesencontrado
          linhas={[
            "Que tal começar",
            <>
              por uma <em>conversa</em>?
            </>,
          ]}
          className="max-w-3xl"
        />
        <p className="max-w-prosa-curta text-lead">
          Conte com a nossa equipe para encontrar o melhor primeiro passo para você.
        </p>
        <div className={`${MOV.pulsar} flex`}>
          <Botao href={CLINICA.agendarHref} variante="bege">
            Agendar presencial ou on-line
          </Botao>
        </div>
      </Nevoa>
    </Secao>
  );
}
