import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { dataset, projectId, sanityConfigurado } from "./env";

const builder = sanityConfigurado ? createImageUrlBuilder({ projectId, dataset }) : null;

/**
 * Monta a URL de uma imagem do Sanity respeitando hotspot e crop.
 * Exemplo: `urlFor(profissional.foto)?.width(400).height(400).url()`.
 *
 * Retorna `null` quando o projeto não está configurado.
 */
export function urlFor(source: SanityImageSource) {
  return builder ? builder.image(source).auto("format").fit("max") : null;
}
