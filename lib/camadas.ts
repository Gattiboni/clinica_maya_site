/**
 * Camadas de empilhamento do site (mapa de movimento v0.2, C0/C1/C3 e o header),
 * como utilitários de z-index. Única fonte dos z-index: `Secao` aplica `fundo`,
 * `grafismo` e `conteudo`; o `Header` aplica `header`; o footer e a Fase 4
 * importam daqui, não de um componente.
 *
 * As seções não criam stacking context próprio (sem z-index, transform,
 * filter, opacity < 1, isolation ou contain: paint), então as camadas de todas
 * as seções vivem no mesmo contexto, o da página: um grafismo com deslocamento
 * negativo sangra sobre o fundo da seção vizinha e fica sob o conteúdo dela.
 * É a estrutura que a Fase 4 anima; hoje é só empilhamento.
 */
export const CAMADA = {
  fundo: "z-0",
  grafismo: "z-10",
  conteudo: "z-20",
  header: "z-30",
} as const;
