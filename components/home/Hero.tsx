import Image from "next/image";
import { Botao } from "@/components/ui/Botao";
import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { CLINICA } from "@/lib/conteudo/clinica";
import { MOV } from "@/lib/movimento";
import clinica1 from "@/public/fotos/clinica-1.jpg";

/**
 * §Home 1 · Hero. Abaixo de `lg` a coluna de texto centraliza e a foto fica
 * limitada a 28rem de largura.
 *
 * Revisão v2: a foto é a fachada (`clinica-1.jpg`, paisagem). A máscara fica
 * em 4:3 no mobile e 5:4 no desktop, com o arco em cima, para a fachada
 * aparecer inteira (letreiro, entrada e jardim); `object-position` centrado
 * no letreiro. Continua sendo o LCP: visível desde o primeiro frame, sem
 * maskReveal. O grafismo-4 grande ao fundo vem da `CamadaGrafismos` da página.
 *
 * A capa (mapa §2 H1; afinação 1, 2.2; Revisão v2, 3.2): a seção não é mais
 * `sticky` nem transformada. Ela rola normalmente com `overflow: clip`, e o
 * fundo e o Container descem na mesma medida (translação pelo relógio da
 * entrada de Áreas, `--pos-capa`): o hero parece parado enquanto a folha
 * seguinte o cobre, e a seção continua sem stacking context, para a camada
 * global passar entre o fundo e o conteúdo. Pelo mesmo relógio a foto recua
 * (0.94, desktop) e sobe dentro da máscara, e o texto esmaece e sobe 24px
 * (mobile: só esmaece nos últimos 30%). Os textos entram em sequência na
 * carga (200ms + 80ms por item). O indicador de rolagem (desktop) some nos
 * primeiros 80px de scroll.
 */
export function Hero() {
  return (
    <Secao
      fundo="bege"
      folha="capa"
      espaco="curto"
      className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-18"
    >
      <Nevoa
        className={`${MOV.capaEsmaece} ${MOV.revealCarga} flex flex-col items-center gap-7 text-center lg:items-start lg:text-left`}
      >
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
        <span aria-hidden="true" className="hidden text-marrom lg:block">
          <svg
            className={MOV.indicadorRolagem}
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 4v15M6 13l6 6 6-6" />
          </svg>
        </span>
      </Nevoa>
      <div
        className={`${MOV.mascara} ${MOV.capaRecua} aspect-[4/3] w-full max-w-md justify-self-center rounded-t-[120px] rounded-b-3xl lg:aspect-[5/4] lg:max-h-[calc(100svh-10rem)] lg:max-w-none lg:rounded-t-[180px]`}
      >
        <Image
          src={clinica1}
          alt="Fachada da Clínica Maya"
          priority
          sizes="(min-width: 1024px) 45vw, (min-width: 640px) 28rem, 100vw"
          className={`${MOV.capaFoto} h-full w-full object-cover object-[40%_50%]`}
        />
      </div>
    </Secao>
  );
}
