import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";

/** §Dra. Mayara 4 · Formação e registro: só a linha de registro até a formação vir da cliente (copy). Campo-2 na camada ambiente. */
export function FormacaoRegistro() {
  return (
    <Secao
      fundo="creme"
      espaco="curto"
      campo="campo-2"
      className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
    >
      <h2 className="text-h2 font-medium">Formação e registro</h2>
      <p className="text-nota font-bold tracking-rotulo">
        Médica de Família · CRM SC 21112 · RQE 22484
      </p>
    </Secao>
  );
}
