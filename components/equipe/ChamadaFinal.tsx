import { Botao } from "@/components/ui/Botao";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { CLINICA } from "@/lib/conteudo/clinica";

/**
 * §Equipe 7 · Chamada final. Última seção da página: o grafismo ancora no topo
 * (e não no rodapé, como no mock) para não sangrar sobre o footer.
 */
export function ChamadaFinal() {
  return (
    <Secao
      fundo="verde"
      grafismo={
        <Grafismo
          nome="4"
          cor="bege"
          posicao="-top-[150px] -left-[110px]"
          largura="w-[340px]"
          opacidade="opacity-22"
        />
      }
      className="flex flex-col items-center gap-5 text-center"
    >
      <h2 className="max-w-3xl text-h2 font-medium">
        Não sabe com quem <em>começar</em>?
      </h2>
      <p className="max-w-prosa-curta text-lead">
        Nosso atendimento ajuda a encontrar quem faz mais sentido para o seu momento.
      </p>
      <Botao href={CLINICA.agendarHref} variante="bege">
        Agendar consulta
      </Botao>
      <p className="text-nota">Antônio Carlos/SC e on-line para todo o Brasil</p>
    </Secao>
  );
}
