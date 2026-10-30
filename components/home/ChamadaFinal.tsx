import { Botao } from "@/components/ui/Botao";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { TituloDesencontrado } from "@/components/ui/TituloDesencontrado";
import { CLINICA } from "@/lib/conteudo/clinica";
import { MOV } from "@/lib/movimento";

/**
 * §Home 10 · Chamada final. Fase 4 (mapa §2 H10; afinação 1, 2.8): folha
 * cheia (70svh no desktop) com o título em duas linhas desencontradas;
 * grafismo-5 bege no mundo com parallax (pontas cortadas em cima, fora da
 * folha); fragmento do grafismo-3 como C4 (drift de 14px, opacidade 0,1), no
 * slot de grafismo porque `Secao` não tem camada à frente da mídia; o botão
 * faz a única pulsação do site ao entrar na viewport.
 */
export function ChamadaFinal() {
  return (
    <Secao
      fundo="verde"
      folha="cta"
      grafismo={
        <>
          <Grafismo
            nome="5"
            cor="bege"
            posicao="-top-[70px] -right-[70px]"
            largura="w-80"
            opacidade="opacity-22"
            parallax="mundo"
          />
          <Grafismo
            nome="3"
            cor="bege"
            posicao="-bottom-16 -left-20"
            largura="w-72"
            opacidade="opacity-10"
            drift="frente"
            recorte={3}
          />
        </>
      }
      className={`${MOV.revealStagger} flex flex-col items-center gap-6 text-center`}
    >
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
      <Botao href={CLINICA.agendarHref} variante="bege" className={MOV.pulsar}>
        Agendar presencial ou on-line
      </Botao>
    </Secao>
  );
}
