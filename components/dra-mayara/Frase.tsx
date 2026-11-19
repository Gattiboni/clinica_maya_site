import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";
import { FRASE } from "@/components/dra-mayara/conteudo";

/**
 * §Dra. Mayara · Frase em destaque (copy v1.4.1), entre a Formação e a Chamada final. Mesmo
 * padrão de citação do site (Círculo Maya em `/clinica` e a frase dos pop-ups da Equipe):
 * Lora itálico no tamanho de H3.
 */
export function Frase() {
  return (
    <Secao fundo="bege" espaco="curto" className="flex flex-col items-center lg:items-start">
      <p
        className={`${MOV.reveal} max-w-prosa-longa text-center font-titulo text-h3 leading-normal italic lg:text-left`}
      >
        {FRASE}
      </p>
    </Secao>
  );
}
