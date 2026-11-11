import type { ReactNode } from "react";

/**
 * Classes da névoa (`app/globals.css`). `nevoa` marca a raiz em todos os casos; `nevoa-bloco`
 * quando os filhos pintam os balões (`div`, `article`), `nevoa-propria` quando o próprio
 * elemento de texto é o balão.
 */
const NEVOA = "nevoa";
const BLOCO = "nevoa-bloco";
const PROPRIA = "nevoa-propria";

/**
 * Elementos que podem carregar a névoa. `div` é o padrão (o invólucro do bloco); os demais
 * existem para quando o próprio elemento de texto já é o bloco (um H2 solto, a lista, o
 * artigo do post) e um `div` a mais só mudaria a árvore e a animação que ele já tem.
 */
type ElementoNevoa = "div" | "article" | "ul" | "h1" | "h2" | "p";

type NevoaProps = {
  children: ReactNode;
  /** Classes do bloco (layout, reveal); a névoa não muda nada além de pôr `position: relative`. */
  className?: string;
  elemento?: ElementoNevoa;
};

/**
 * Regra (Decisão 012, rodada do balão): todo bloco de texto corrido diretamente sobre a folha
 * recebe uma névoa meio transparente da cor do fundo, que atenua o grafismo à metade; cards,
 * fotos, símbolo, header, footer e política não.
 *
 * A névoa atenua, não esconde: no repouso o balão tem `--nevoa-opacidade` (0.5) e o grafismo
 * pode passar atrás das letras a no máximo metade da intensidade. A forma segue a diagramação,
 * não a caixa do bloco: em `div`/`article`, cada filho de texto (eyebrow, título, parágrafo,
 * linha de botões, nota, lista) pinta o próprio balão na largura da própria caixa, e os
 * balões vizinhos se encostam na metade do vão, sem se sobrepor; o resultado é um balão
 * escalonado. Grupos de layout dentro do bloco (o cabeçalho de seção, os grupos do Contato, o
 * cabeçalho e o corpo do post) não pintam: repassam aos filhos. Ficam fora do balão o que é
 * `aria-hidden` (seta de rolagem, gatilho e linha do trilho), imagens e cards. Nos demais
 * elementos (`h1`, `h2`, `p`, `ul`) o balão é o do próprio elemento.
 *
 * Tudo é CSS a partir da caixa de cada filho (pseudo-elemento `::before` com `z-index: -1`,
 * acima da camada global de grafismos e abaixo de todo texto, card e foto); zero JavaScript,
 * zero medição em runtime. A `<section>` nunca ganha stacking context por causa dela. Filho
 * direto com fundo próprio (botão sólido) vai num invólucro, senão o balão pintaria sobre o
 * fundo dele. Detalhes e a tabela de vãos no comentário de `.nevoa` em `app/globals.css`.
 */
export function Nevoa({ children, className, elemento: Elemento = "div" }: NevoaProps) {
  const modo = Elemento === "div" || Elemento === "article" ? BLOCO : PROPRIA;
  return (
    <Elemento className={[NEVOA, modo, "relative", className].filter(Boolean).join(" ")}>
      {children}
    </Elemento>
  );
}
