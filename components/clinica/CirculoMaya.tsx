import Image from "next/image";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import corpoMenteEspiritoClaro from "@/public/marca/corpo-mente-espirito-claro.png";

const CITACAO = '"No Círculo Maya, ninguém caminha sozinha."';

/** §A Clínica 4 · Círculo Maya. Abaixo de `lg` o texto centraliza sob o círculo. */
export function CirculoMaya() {
  return (
    <Secao
      fundo="verde"
      grafismo={
        <Grafismo
          nome="4"
          cor="bege"
          posicao="-right-[110px] -bottom-[170px]"
          largura="w-[360px]"
          opacidade="opacity-22"
        />
      }
      className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-18"
    >
      <Image
        src={corpoMenteEspiritoClaro}
        alt="Círculo Maya: corpo, mente e espírito"
        sizes="(min-width: 1024px) 360px, 70vw"
        className="mx-auto h-auto w-full max-w-[360px]"
      />
      <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
        <h2 className="text-h2 font-medium">O Círculo Maya</h2>
        <p className="max-w-prosa-curta text-lead">
          Corpo, mente e espírito, três dimensões de um mesmo cuidado, que só se transformam quando
          caminham juntas.
        </p>
        <p className="font-titulo text-h3 leading-normal italic">{CITACAO}</p>
      </div>
    </Secao>
  );
}
