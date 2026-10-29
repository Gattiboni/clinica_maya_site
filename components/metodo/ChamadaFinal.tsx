import { Botao } from "@/components/ui/Botao";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { CLINICA } from "@/lib/conteudo/clinica";

/** §Método 6 · Chamada final. */
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
          opacidade="opacity-20"
        />
      }
      className="flex flex-col items-center gap-5 text-center"
    >
      <h2 className="max-w-3xl text-h2 font-medium">A sua jornada começa com uma conversa</h2>
      <Botao href={CLINICA.agendarHref} variante="bege">
        Agendar a primeira consulta
      </Botao>
      <p className="text-nota">Antônio Carlos/SC e on-line para todo o Brasil</p>
    </Secao>
  );
}
