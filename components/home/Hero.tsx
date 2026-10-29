import Image from "next/image";
import { Botao } from "@/components/ui/Botao";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { CLINICA } from "@/lib/conteudo/clinica";
import home2 from "@/public/fotos/home-2.jpg";

/**
 * §Home 1 · Hero. Abaixo de `lg` a coluna de texto centraliza e a foto fica
 * limitada a 28rem de largura e 60% da altura da viewport (escolha deste
 * lote; o mock não tem versão mobile).
 */
export function Hero() {
  return (
    <Secao
      fundo="bege"
      grafismo={
        <Grafismo
          nome="3"
          cor="marrom"
          posicao="-top-10 -right-[90px]"
          largura="w-80 lg:w-[560px]"
          opacidade="opacity-35"
        />
      }
      className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-18"
    >
      <div className="flex flex-col items-center gap-7 text-center lg:items-start lg:text-left">
        <p className="text-eyebrow font-bold uppercase">Clínica de saúde integral</p>
        <h1 className="text-display font-normal">
          Esteja bem com <em>você</em>
        </h1>
        <p className="max-w-prosa-curta text-lead">
          Medicina, nutrição, psicologia e mais especialidades num só lugar, com uma equipe que
          trabalha junta e um cuidado que começa pela escuta.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <Botao href={CLINICA.agendarHref}>Agendar consulta</Botao>
          <Botao href="/equipe">Conhecer a equipe</Botao>
        </div>
        <p className="text-nota">Atendimento presencial em Antônio Carlos/SC e também on-line.</p>
      </div>
      <Image
        src={home2}
        alt="Dra. Mayara Brasil"
        priority
        sizes="(min-width: 1024px) 45vw, (min-width: 640px) 28rem, 100vw"
        className="aspect-[4/5] max-h-[60svh] w-full max-w-md justify-self-center rounded-t-[180px] rounded-b-3xl object-cover object-[50%_20%] lg:max-h-none lg:max-w-none"
      />
    </Secao>
  );
}
