import Image from "next/image";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";
import metodo1 from "@/public/fotos/metodo-1.jpg";

/**
 * §Método 1 · Abertura. Abaixo de `lg` o texto centraliza e a foto vai para
 * baixo. Fase 4: texto entra na carga; a foto é `priority` (LCP provável da
 * página), então fica sem maskReveal (regra 3 do mapa) e só se move dentro da
 * máscara.
 */
export function Abertura() {
  return (
    <Secao fundo="bege" className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
      <Nevoa
        className={`${MOV.revealCarga} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
      >
        <h1 className="text-h1 font-medium">Método Maya</h1>
        <p className="max-w-prosa-longa text-lead">
          Humanização e ciência caminhando juntas: um jeito de cuidar que combina evidências
          científicas com escuta ativa, empatia e respeito pelo seu ritmo.
        </p>
      </Nevoa>
      <div
        className={`${MOV.mascara} aspect-[4/3] w-full max-w-md justify-self-center rounded-card lg:max-w-[420px] lg:justify-self-end`}
      >
        <Image
          src={metodo1}
          alt="Ambiente da Clínica Maya"
          priority
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 28rem, 100vw"
          className={`${MOV.parallaxMidia} h-full w-full object-cover object-[50%_62%]`}
        />
      </div>
    </Secao>
  );
}
