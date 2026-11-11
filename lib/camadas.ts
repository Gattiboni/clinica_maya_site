/**
 * Camadas de empilhamento do site, como utilitários de z-index. Única fonte
 * dos z-index: `Secao` aplica `fundo`, `simbolo` e `conteudo`; a
 * `CamadaGrafismos` aplica `grafismoGlobal`; o `Header` aplica `header`.
 *
 * Revisão v2 (3.2): nenhuma `<section>` cria stacking context (sem
 * transform, opacity, isolation, filter nem z-index; o recuo das folhas anima
 * o fundo e o Container, não a seção). Assim os fundos de todas as seções
 * (z 0) e os conteúdos de todas elas (z 20) vivem no mesmo contexto, o da
 * página, e a camada global de grafismos (z 10) fica literalmente entre os
 * dois: acima de todo fundo, abaixo de todo texto, card e foto. Exceção por
 * desenho: as folhas de pilha são `sticky` (stacking context inevitável) e
 * ficam inteiras em `conteudo`, como cartas opacas à frente da camada.
 * `simbolo` tem o mesmo z da camada global e vem depois dela no DOM: o
 * Círculo Maya decorativo pinta sobre os grafismos e sob o conteúdo.
 */
export const CAMADA = {
  fundo: "z-0",
  grafismoGlobal: "z-10",
  simbolo: "z-10",
  conteudo: "z-20",
  header: "z-30",
} as const;
