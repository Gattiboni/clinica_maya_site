/** Chip fixo do filtro da lista (§Blog · Lista); os demais nomes vêm dos documentos `category`. */
export const ROTULO_TODOS = "Todos";

/**
 * Ordem fixa dos chips (§Blog · Lista). As categorias vindas do Sanity são
 * ordenadas por esta lista; um nome fora dela entra depois, em ordem alfabética.
 */
export const ORDEM_CATEGORIAS: readonly string[] = [
  "Emagrecimento",
  "Saúde mental",
  "Saúde da mulher",
  "Saúde capilar",
];

/** Estado vazio da lista (sem post publicado, ou categoria sem post); frase exata em `permitidos` da varredura. */
export const ESTADO_VAZIO_BLOG = "Em breve, os primeiros textos da equipe.";

/** Bloco de chamada após o corpo do post (§Blog · Post). */
export const CHAMADA_POST = {
  titulo: "Que tal conversar sobre isso com a nossa equipe?",
  texto: "A primeira consulta é o espaço certo para essa conversa, sem julgamentos.",
  botao: "Agendar consulta",
} as const;

/** Ordena nomes de categoria pela ordem da copy; desconhecidos vão para o fim, em ordem alfabética. */
export function ordenarCategorias(nomes: readonly string[]): string[] {
  const posicao = (nome: string) => {
    const indice = ORDEM_CATEGORIAS.indexOf(nome);
    return indice === -1 ? ORDEM_CATEGORIAS.length : indice;
  };
  return [...new Set(nomes)].sort((a, b) => posicao(a) - posicao(b) || a.localeCompare(b, "pt-BR"));
}
