import { Botao } from "@/components/ui/Botao";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { CLINICA } from "@/lib/conteudo/clinica";

/** §Emagrecimento 7 · Chamada final (fundo creme e botão verde, como no mock). */
export function ChamadaFinal() {
  return (
    <Secao
      fundo="creme"
      grafismo={
        <Grafismo
          nome="5"
          cor="marrom"
          posicao="-top-[70px] -right-[70px]"
          largura="w-80"
          opacidade="opacity-30"
        />
      }
      className="flex flex-col items-center gap-5 text-center"
    >
      <h2 className="max-w-3xl text-h2 font-medium">
        O primeiro passo é sempre o mesmo: uma conversa
      </h2>
      <Botao href={CLINICA.agendarHref}>Agendar consulta</Botao>
      <p className="text-nota">Antônio Carlos/SC e on-line para todo o Brasil</p>
    </Secao>
  );
}
