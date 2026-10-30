import { Botao } from "@/components/ui/Botao";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { TituloDesencontrado } from "@/components/ui/TituloDesencontrado";
import { CLINICA } from "@/lib/conteudo/clinica";
import { MOV } from "@/lib/movimento";

/** §Emagrecimento 7 · Chamada final (fundo creme e botão verde, como no mock): folha cheia com o título em duas linhas (2.8). */
export function ChamadaFinal() {
  return (
    <Secao
      fundo="creme"
      folha="cta"
      grafismo={
        <Grafismo
          nome="5"
          cor="marrom"
          posicao="-top-[70px] -right-[70px]"
          largura="w-80"
          opacidade="opacity-30"
          parallax="mundo"
        />
      }
      className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center`}
    >
      <TituloDesencontrado
        linhas={["O primeiro passo é sempre o mesmo:", "uma conversa"]}
        className="max-w-3xl"
      />
      <Botao href={CLINICA.agendarHref} className={MOV.pulsar}>
        Agendar consulta
      </Botao>
      <p className="text-nota">Antônio Carlos/SC e on-line para todo o Brasil</p>
    </Secao>
  );
}
