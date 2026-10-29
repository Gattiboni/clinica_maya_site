import { Grafismo } from "@/components/ui/Grafismo";
import { Secao } from "@/components/ui/Secao";
import { PILARES } from "@/lib/conteudo/pilares";

/**
 * §Método 2 · Pilares. Bloco verde com o grafismo-3 e sem o símbolo
 * corpo-mente-espírito, como no mock (o símbolo da página fica em
 * Diferenciais, sobre fundo sólido). Cada pilar é um bloco próprio, com
 * número, nome e texto cabendo numa viewport mobile, para virar `stack` na
 * Fase 4; sem `sticky` agora. Abaixo de `lg` título e lead centralizam.
 */
export function Pilares() {
  return (
    <Secao
      fundo="verde"
      grafismo={
        <Grafismo
          nome="3"
          cor="bege"
          posicao="-top-20 -right-30"
          largura="w-80 lg:w-[460px]"
          opacidade="opacity-18"
        />
      }
    >
      <div className="mb-12 flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
        <h2 className="text-h2 font-medium">Os quatro pilares</h2>
        <p className="max-w-prosa text-lead">O que sustenta cada jornada dentro da clínica.</p>
      </div>
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PILARES.map((pilar, indice) => (
          <li
            key={pilar.nome}
            className="flex flex-col gap-3.5 rounded-card border border-bege/30 px-7 py-8"
          >
            <span className="font-titulo text-nota">{String(indice + 1).padStart(2, "0")}</span>
            <h3 className="text-h3 font-semibold">{pilar.nome}</h3>
            <p className="text-nota">{pilar.textoLongo}</p>
          </li>
        ))}
      </ol>
    </Secao>
  );
}
