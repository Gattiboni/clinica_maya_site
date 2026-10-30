import { Botao } from "@/components/ui/Botao";
import { Grafismo } from "@/components/ui/Grafismo";
import { LinkTexto } from "@/components/ui/LinkTexto";
import { Secao } from "@/components/ui/Secao";
import { SpriteGrafismos } from "@/components/ui/SpriteGrafismos";
import { MOV } from "@/lib/movimento";

const ANCORA_FORMULARIO = "#agendar";

/**
 * §Contato 1 · Abertura com os dois cards. Os botões levam à âncora do
 * formulário (copy), não direto ao `wa.me` como no mock. Card Presencial em
 * bloco verde com botão bege; card On-line em creme com botão verde.
 * Fase 4: título e cards entram na carga, os cards em sequência depois do
 * título, com profundidade e hover (2.6). O grafismo-4 (pontas cortadas à
 * esquerda e embaixo) vai espelhado ao canto inferior direito: pontas fora da
 * tela e atrás da folha seguinte (2.7).
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
            posicao="-right-15 -bottom-24 -scale-x-100"
            largura="w-64 lg:w-80"
            opacidade="opacity-35"
            parallax="mundo"
          />
        }
        className={`${MOV.revealCarga} flex flex-col items-center gap-12 text-center lg:items-start lg:text-left`}
      >
        <h1 className="max-w-3xl text-h1 font-normal">
          Vamos <em>conversar</em>?
        </h1>
        <div
          className={`${MOV.revealCarga} ${MOV.cargaApos1} ${MOV.profundo} grid w-full max-w-4xl gap-6 text-left sm:grid-cols-2`}
        >
          <div
            className={`${MOV.hoverEleva} flex flex-col gap-4 rounded-card bg-verde px-8 py-10 text-bege`}
          >
            <h2 className="text-h2 font-semibold">Presencial</h2>
            <p className="flex-1 text-corpo">
              Na clínica, em Antônio Carlos/SC, um espaço pensado para você se sentir em casa.
            </p>
            <Botao
              href={ANCORA_FORMULARIO}
              variante="bege"
              tamanho="pequeno"
              className="self-start"
            >
              Agendar pelo WhatsApp
            </Botao>
          </div>
          <div
            className={`${MOV.hoverEleva} flex flex-col gap-4 rounded-card border border-marrom/25 bg-creme px-8 py-10 text-verde`}
          >
            <h2 className="text-h2 font-semibold">On-line</h2>
            <p className="flex-1 text-corpo">
              Por videochamada, para todo o Brasil, com medicina e nutrição.{" "}
              <LinkTexto href="/atendimento-online">Como funciona</LinkTexto>
            </p>
            <Botao href={ANCORA_FORMULARIO} tamanho="pequeno" className="self-start">
              Agendar pelo WhatsApp
            </Botao>
          </div>
        </div>
      </Secao>
    </>
  );
}
