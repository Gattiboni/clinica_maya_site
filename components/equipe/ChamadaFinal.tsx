import { Botao } from "@/components/ui/Botao";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { TituloDesencontrado } from "@/components/ui/TituloDesencontrado";
import { CLINICA } from "@/lib/conteudo/clinica";
import { MOV } from "@/lib/movimento";

/**
 * §Equipe 7 · Chamada final: folha cheia com o título em duas linhas (2.8). O
 * grafismo-4 (pontas cortadas à esquerda e embaixo) ancora no canto inferior
 * esquerdo, com as duas pontas fora da folha (2.7).
 */
export function ChamadaFinal() {
  return (
    <Secao
      fundo="verde"
      folha="cta"
      grafismo={
        <Grafismo
          nome="4"
          cor="bege"
          posicao="-bottom-24 -left-[110px]"
          largura="w-[340px]"
          opacidade="opacity-22"
          parallax="mundo"
        />
      }
      className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center`}
    >
      <TituloDesencontrado
        linhas={[
          "Não sabe com quem",
          <>
            <em>começar</em>?
          </>,
        ]}
        className="max-w-3xl"
      />
      <p className="max-w-prosa-curta text-lead">
        Nosso atendimento ajuda a encontrar quem faz mais sentido para o seu momento.
      </p>
      <Botao href={CLINICA.agendarHref} variante="bege" className={MOV.pulsar}>
        Agendar consulta
      </Botao>
      <p className="text-nota">Antônio Carlos/SC e on-line para todo o Brasil</p>
    </Secao>
  );
}
