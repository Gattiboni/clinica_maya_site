import { Botao } from "@/components/ui/Botao";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { TituloDesencontrado } from "@/components/ui/TituloDesencontrado";
import { CLINICA } from "@/lib/conteudo/clinica";
import { MOV } from "@/lib/movimento";

/** §Método 6 · Chamada final: folha cheia com o título em duas linhas (2.8); grafismo-5 com as pontas cortadas na borda da folha. */
export function ChamadaFinal() {
  return (
    <Secao
      fundo="verde"
      folha="cta"
      grafismo={
        <Grafismo
          nome="5"
          cor="bege"
          posicao="-top-[70px] -right-[70px]"
          largura="w-80"
          opacidade="opacity-20"
          parallax="mundo"
        />
      }
      className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center`}
    >
      <TituloDesencontrado
        linhas={["A sua jornada começa", "com uma conversa"]}
        className="max-w-3xl"
      />
      <Botao href={CLINICA.agendarHref} variante="bege" className={MOV.pulsar}>
        Agendar a primeira consulta
      </Botao>
      <p className="text-nota">Antônio Carlos/SC e on-line para todo o Brasil</p>
    </Secao>
  );
}
