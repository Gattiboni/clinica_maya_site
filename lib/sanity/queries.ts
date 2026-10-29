import { defineQuery } from "next-sanity";

/**
 * Queries GROQ do site, uma por tipo de documento.
 *
 * Nenhuma delas é usada nas páginas nesta fase (Fase 1, scaffold). A Fase 3
 * consome estas queries via `client.fetch(QUERY, params)` nas páginas.
 * `defineQuery` só marca a string para o Sanity TypeGen gerar os tipos depois.
 */

/** Configuração do site (singleton): nome, slogan, endereço, contatos, responsável técnica. */
export const SITE_CONFIG_QUERY = defineQuery(`*[_type == "siteConfig"][0]`);

/** Áreas de cuidado em ordem de exibição; o slug é a âncora em /equipe. */
export const AREAS_QUERY = defineQuery(`*[_type == "area"] | order(ordem asc)`);

/** Profissionais publicáveis em ordem, com a área resolvida. */
export const PROFISSIONAIS_QUERY = defineQuery(
  `*[_type == "profissional" && publicavel == true] | order(ordem asc) { ..., area-> }`,
);

/** Um profissional pelo slug. */
export const PROFISSIONAL_POR_SLUG_QUERY = defineQuery(
  `*[_type == "profissional" && slug.current == $slug][0] { ..., area-> }`,
);

/** Dores da Home em ordem, com as áreas que ajudam resolvidas. */
export const DORES_QUERY = defineQuery(`*[_type == "dor"] | order(ordem asc) { ..., areas[]-> }`);

/** Programas ativos no site em ordem. */
export const PROGRAMAS_QUERY = defineQuery(
  `*[_type == "programa" && ativoNoSite == true] | order(ordem asc)`,
);

/** Posts do blog do mais recente ao mais antigo, com a autora e a área dela. */
export const POSTS_QUERY = defineQuery(
  `*[_type == "post"] | order(data desc) { ..., autora-> { ..., area-> } }`,
);

/** Um post pelo slug. */
export const POST_POR_SLUG_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0] { ..., autora-> { ..., area-> } }`,
);
