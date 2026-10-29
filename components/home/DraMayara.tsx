import Image from "next/image";
import { LinkTexto } from "@/components/ui/LinkTexto";
import { Secao } from "@/components/ui/Secao";
import equipeMayara from "@/public/fotos/equipe-mayara.jpg";

/** §Home 7 · Dra. Mayara. Abaixo de `lg` foto e texto centralizam. */
export function DraMayara() {
  return (
    <Secao fundo="bege" className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-18">
      <Image
        src={equipeMayara}
        alt="Dra. Mayara Brasil"
        sizes="(min-width: 1024px) 380px, 100vw"
        className="aspect-[4/5] w-full max-w-[380px] justify-self-center rounded-3xl rounded-tr-[160px] object-cover object-[50%_15%] lg:justify-self-start"
      />
      <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
        <h2 className="text-h2 font-medium">Dra. Mayara Brasil</h2>
        <p className="max-w-prosa text-lead leading-relaxed">
          Médica de família, com atuação em emagrecimento, e fundadora da Clínica Maya. Reuniu na
          clínica profissionais que compartilham o mesmo jeito de cuidar: com ciência, escuta e sem
          julgamentos.
        </p>
        <p className="text-nota font-bold tracking-rotulo">
          Médica de Família · CRM SC 21112 · RQE 22484
        </p>
        <LinkTexto href="/dra-mayara-brasil" className="self-center lg:self-start">
          Conhecer a Dra. Mayara
        </LinkTexto>
      </div>
    </Secao>
  );
}
