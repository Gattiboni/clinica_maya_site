import Image from "next/image";
import { LinkTexto } from "@/components/ui/LinkTexto";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";
import equipeMayara from "@/public/fotos/equipe-mayara.jpg";

/**
 * §Emagrecimento · Card "Conheça a Dra. Mayara" (Revisão v2), entre Porta de
 * entrada e Quem faz parte. Faixa compacta com um card só: horizontal e fino
 * no desktop (foto pequena em máscara à esquerda, eyebrow, texto de uma
 * linha e o link à direita), empilhado e centralizado no mobile. O card
 * Medicina de Quem faz parte continua apontando para `/equipe#medicina`.
 */
export function ConhecaDra() {
  return (
    <Secao fundo="bege" espaco="compacto">
      <div
        className={`${MOV.reveal} ${MOV.hoverEleva} mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-card border border-marrom/18 bg-creme px-7 py-7 text-center text-verde sm:flex-row sm:gap-7 sm:py-5 sm:text-left`}
      >
        <div className={`${MOV.mascara} size-20 shrink-0 rounded-t-[40px] rounded-b-xl`}>
          <Image
            src={equipeMayara}
            alt="Dra. Mayara Brasil"
            sizes="80px"
            className="h-full w-full object-cover object-[50%_12%]"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <p className="text-legenda font-bold tracking-rotulo text-marrom uppercase">
            Medicina · Responsável técnica
          </p>
          <p className="text-corpo">
            Médica de família e fundadora da clínica. Conheça a trajetória, como é a consulta e a
            formação.
          </p>
        </div>
        <LinkTexto href="/dra-mayara-brasil" className="shrink-0">
          Conheça a Dra. Mayara
        </LinkTexto>
      </div>
    </Secao>
  );
}
