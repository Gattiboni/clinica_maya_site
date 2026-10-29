import Image from "next/image";
import { Botao } from "@/components/ui/Botao";
import { LinkTexto } from "@/components/ui/LinkTexto";
import { Secao } from "@/components/ui/Secao";
import { CLINICA } from "@/lib/conteudo/clinica";
import equipeMayara from "@/public/fotos/equipe-mayara.jpg";

/** §Emagrecimento 2 · Porta de entrada. Abaixo de `lg` texto, botões e foto centralizam. */
export function PortaDeEntrada() {
  return (
    <Secao fundo="creme" className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
      <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
        <h2 className="text-h2 font-medium">A porta de entrada é a consulta</h2>
        <p className="max-w-prosa-longa text-lead">
          Se você ainda não sabe qual caminho faz sentido, comece por uma consulta com a Dra.
          Mayara. É nela que vocês desenham juntas o próximo passo, com ou sem programa. Ninguém
          precisa escolher nada antes.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 lg:justify-start">
          <Botao href={CLINICA.agendarHref}>Agendar consulta</Botao>
          <LinkTexto href="/dra-mayara-brasil">Conhecer a Dra. Mayara</LinkTexto>
        </div>
      </div>
      <Image
        src={equipeMayara}
        alt="Dra. Mayara Brasil"
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 28rem, 100vw"
        className="aspect-[4/5] w-full max-w-md justify-self-center rounded-t-[160px] rounded-b-3xl object-cover object-[50%_15%] lg:max-w-[400px] lg:justify-self-end"
      />
    </Secao>
  );
}
