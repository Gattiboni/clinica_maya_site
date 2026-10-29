import Image from "next/image";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import clinica3 from "@/public/fotos/clinica-3.jpg";

/** §Método 1 · Abertura. Abaixo de `lg` o texto centraliza e a foto vai para baixo. */
export function Abertura() {
  return (
    <Secao
      fundo="bege"
      grafismo={
        <Grafismo
          nome="4"
          cor="marrom"
          posicao="-top-[90px] -right-15"
          largura="w-64 lg:w-80"
          opacidade="opacity-35"
        />
      }
      className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16"
    >
      <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
        <h1 className="text-h1 font-medium">Método Maya</h1>
        <p className="max-w-prosa-longa text-lead">
          Humanização e ciência caminhando juntas: um jeito de cuidar que combina evidências
          científicas com escuta ativa, empatia e respeito pelo seu ritmo.
        </p>
      </div>
      <Image
        src={clinica3}
        alt="Detalhe do consultório"
        priority
        sizes="(min-width: 1024px) 420px, (min-width: 640px) 28rem, 100vw"
        className="aspect-[4/3] w-full max-w-md justify-self-center rounded-card object-cover object-[50%_55%] lg:max-w-[420px] lg:justify-self-end"
      />
    </Secao>
  );
}
