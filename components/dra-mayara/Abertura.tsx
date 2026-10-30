import Image from "next/image";
import { Botao } from "@/components/ui/Botao";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { SpriteGrafismos } from "@/components/ui/SpriteGrafismos";
import { CLINICA } from "@/lib/conteudo/clinica";
import { MOV } from "@/lib/movimento";
import equipeMayara from "@/public/fotos/equipe-mayara.jpg";

const INSTAGRAM_DRA_MAYARA = "dramayarabrasilm";

/**
 * §Dra. Mayara 1 · Abertura. Foto à esquerda a partir de `lg`; abaixo, foto
 * acima do texto centralizado. O grafismo-4 (pontas cortadas à esquerda e
 * embaixo) ancora no canto inferior esquerdo: a ponta esquerda fica fora da
 * tela e a de baixo, atrás da folha de Trajetória (2.7).
 * Fase 4: a foto é `priority` (LCP da página), então sem maskReveal; só o
 * parallax interno. Texto entra na carga.
 */
export function Abertura() {
  return (
    <>
      <SpriteGrafismos />
      <Secao
        fundo="bege"
        grafismo={
          <Grafismo
            nome="4"
            cor="marrom"
            posicao="-bottom-28 -left-[110px]"
            largura="w-[360px]"
            opacidade="opacity-35"
            parallax="mundo"
          />
        }
        className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-18"
      >
        <div
          className={`${MOV.mascara} aspect-[4/5] w-full max-w-md justify-self-center rounded-t-[180px] rounded-b-3xl lg:max-w-[400px] lg:justify-self-start`}
        >
          <Image
            src={equipeMayara}
            alt="Dra. Mayara Brasil"
            priority
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 28rem, 100vw"
            className={`${MOV.parallaxMidia} h-full w-full object-cover object-[50%_15%]`}
          />
        </div>
        <div
          className={`${MOV.revealCarga} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
        >
          <p className="text-eyebrow font-bold uppercase">Medicina · Responsável técnica</p>
          <h1 className="text-h1 font-medium">Dra. Mayara Brasil</h1>
          <p className="max-w-prosa text-lead">
            Médica de família, com atuação em emagrecimento, e fundadora da Clínica Maya. Uma
            trajetória guiada pela escuta.
          </p>
          <p className="text-nota font-bold tracking-rotulo">
            Médica de Família · CRM SC 21112 · RQE 22484
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Botao href={CLINICA.agendarHref}>Agendar consulta</Botao>
            <Botao href={`https://instagram.com/${INSTAGRAM_DRA_MAYARA}`} variante="contorno">
              @{INSTAGRAM_DRA_MAYARA}
            </Botao>
          </div>
        </div>
      </Secao>
    </>
  );
}
