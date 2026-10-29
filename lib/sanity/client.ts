import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, projectId, sanityConfigurado } from "./env";

/**
 * Cliente de leitura do Sanity. Uso exclusivo no servidor (Server Components,
 * Route Handlers): o token de leitura nunca pode chegar ao navegador.
 *
 * `null` quando o projeto não está configurado; quem consome trata o caso.
 */
export const client: SanityClient | null = sanityConfigurado
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
      perspective: "published",
      token: process.env.SANITY_API_READ_TOKEN || undefined,
    })
  : null;
