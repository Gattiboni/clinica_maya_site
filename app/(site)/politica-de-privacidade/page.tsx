import type { Metadata } from "next";
import { dataExtenso } from "@/components/blog/dataExtenso";
import { Secao } from "@/components/ui/Secao";
import { CLINICA } from "@/lib/conteudo/clinica";
import { SECOES_POLITICA } from "@/lib/conteudo/politica";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como a Clínica Maya trata os dados de quem visita o site e entra em contato.",
};

/**
 * §Política de privacidade: texto literal da copy em largura de prosa, fundo
 * bege, sem grafismo. A linha de vigência só aparece quando
 * `CLINICA.politicaPrivacidade.vigenteDesde` tiver data (Fase 7).
 */
export default function PoliticaDePrivacidade() {
  const vigencia = dataExtenso(CLINICA.politicaPrivacidade.vigenteDesde);

  return (
    <Secao fundo="bege">
      <article className="mx-auto flex max-w-prosa-longa flex-col gap-10 text-verde">
        <header className="flex flex-col gap-3">
          <h1 className="text-h1 font-normal">Política de privacidade</h1>
          {vigencia && <p className="text-nota text-marrom">Vigente a partir de {vigencia}</p>}
        </header>
        {SECOES_POLITICA.map((secao) => (
          <div key={secao.titulo} className="flex flex-col gap-4">
            <h2 className="text-h2 font-medium">{secao.titulo}</h2>
            {secao.paragrafos.map((paragrafo) => (
              <p key={paragrafo} className="text-corpo">
                {paragrafo}
              </p>
            ))}
            {secao.itens && (
              <ul className="flex list-disc flex-col gap-3 pl-6 text-corpo marker:text-marrom">
                {secao.itens.map((item) => (
                  <li key={item.destaque}>
                    <strong className="font-bold">{item.destaque}</strong> {item.texto}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </article>
    </Secao>
  );
}
