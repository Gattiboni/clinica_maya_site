import { FormularioContato } from "@/components/contato/FormularioContato";
import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { ONDE_ESTAMOS, REDES } from "@/lib/conteudo/contato";

const CLASSES_LINK_EXTERNO =
  "inline-block self-start text-corpo font-bold underline underline-offset-4 transition-colors hover:text-marrom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde";

/**
 * §Contato 2 · Onde estamos, Redes e Formulário. `id="agendar"` na seção:
 * todo CTA "Agendar" do site chega aqui, sob o header, pelo `scroll-margin-top`
 * de `Secao`. Mapa como link de busca no Google Maps (sem iframe). O grafismo
 * fica na base esquerda com sangria curta, para não cruzar o conteúdo do footer.
 */
export function Agendar() {
  return (
    <Secao
      id="agendar"
      fundo="creme"
      grafismo={
        <Grafismo
          nome="3"
          cor="marrom"
          posicao="-bottom-10 -left-40"
          largura="w-80 lg:w-[440px]"
          opacidade="opacity-20"
        />
      }
      className="grid gap-14 lg:grid-cols-2 lg:gap-16"
    >
      <div className="flex flex-col gap-10 text-center lg:text-left">
        <div className="flex flex-col items-center gap-3 lg:items-start">
          <h2 className="text-h2 font-medium">Onde estamos</h2>
          <p className="text-corpo">
            {ONDE_ESTAMOS.linhas.map((linha, indice) => (
              <span key={linha}>
                {indice > 0 && <br />}
                {linha}
              </span>
            ))}
          </p>
          <p className="text-corpo">{ONDE_ESTAMOS.horario}</p>
          <a
            href={ONDE_ESTAMOS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={CLASSES_LINK_EXTERNO}
          >
            Ver no Google Maps <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="flex flex-col items-center gap-3 lg:items-start">
          <h2 className="text-h2 font-medium">Redes</h2>
          <ul className="flex flex-col items-center gap-2 lg:items-start">
            {REDES.map((rede) => (
              <li key={rede.url}>
                <a
                  href={rede.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={CLASSES_LINK_EXTERNO}
                >
                  {rede.exibicao}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-h2 font-medium">Prefere que a gente chame você?</h2>
        <p className="text-corpo">Deixe seu contato e retornamos pelo WhatsApp.</p>
        <FormularioContato />
      </div>
    </Secao>
  );
}
