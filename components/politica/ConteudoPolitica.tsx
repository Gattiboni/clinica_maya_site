import { dataExtenso } from "@/components/blog/dataExtenso";
import { CLINICA } from "@/lib/conteudo/clinica";
import { SECOES_POLITICA } from "@/lib/conteudo/politica";
import { MOV } from "@/lib/movimento";

type ConteudoPoliticaProps = {
  /** `pagina`: H1 e entrada na carga; `modal`: H2 (o popover não é uma página) e sem movimento. */
  contexto: "pagina" | "modal";
  /** `id` do título, para o `aria-labelledby` do modal. */
  idTitulo?: string;
};

/**
 * Texto da Política de privacidade (copy v1.2, literal), compartilhado pela
 * página `/politica-de-privacidade` e pelo modal aberto a partir do formulário
 * de contato (afinação 1, 2.10). A linha de vigência só aparece quando
 * `CLINICA.politicaPrivacidade.vigenteDesde` tiver data (Fase 7). Nenhum
 * movimento no corpo.
 */
export function ConteudoPolitica({ contexto, idTitulo }: ConteudoPoliticaProps) {
  const vigencia = dataExtenso(CLINICA.politicaPrivacidade.vigenteDesde);
  const Titulo = contexto === "pagina" ? "h1" : "h2";
  const Subtitulo = contexto === "pagina" ? "h2" : "h3";

  return (
    <article className="mx-auto flex max-w-prosa-longa flex-col gap-10 text-verde">
      <header className={`${contexto === "pagina" ? MOV.revealCarga : ""} flex flex-col gap-3`}>
        <Titulo id={idTitulo} className="text-h1 font-normal">
          Política de privacidade
        </Titulo>
        {vigencia && <p className="text-nota text-marrom">Vigente a partir de {vigencia}</p>}
      </header>
      {SECOES_POLITICA.map((secao) => (
        <div key={secao.titulo} className="flex flex-col gap-4">
          <Subtitulo className="text-h2 font-medium">{secao.titulo}</Subtitulo>
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
  );
}
