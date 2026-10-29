/**
 * Variáveis de ambiente do Sanity, lidas uma vez e compartilhadas por
 * cliente, helper de imagem, Studio e CLI.
 *
 * Todas são opcionais: sem projeto configurado, `sanityConfigurado` é
 * falso, o cliente não é instanciado e o build segue normalmente.
 */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

/** Data de versão da API do Sanity (formato AAAA-MM-DD). */
export const apiVersion = "2026-10-29";

export const sanityConfigurado = projectId.length > 0;
