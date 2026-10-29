import { Botao } from "@/components/ui/Botao";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { CLINICA } from "@/lib/conteudo/clinica";

/** §Home 10 · Chamada final. */
export function ChamadaFinal() {
  return (
    <Secao
      fundo="verde"
      grafismo={
        <Grafismo
          nome="5"
          cor="bege"
          posicao="-top-[70px] -right-[70px]"
          largura="w-80"
          opacidade="opacity-22"
        />
      }
      className="flex flex-col items-center gap-6 text-center"
    >
      <h2 className="max-w-3xl text-h2 font-medium">
        Que tal começar por uma <em>conversa</em>?
      </h2>
      <p className="max-w-prosa-curta text-lead">
        Conte com a nossa equipe para encontrar o melhor primeiro passo para você.
      </p>
      <Botao href={CLINICA.agendarHref} variante="bege">
        Agendar presencial ou on-line
      </Botao>
    </Secao>
  );
}
