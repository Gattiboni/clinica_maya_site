import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./lib/sanity/env";

/**
 * Configuração do CLI do Sanity (npx sanity ...), lendo as mesmas variáveis
 * de ambiente do site. Útil para `sanity schema deploy`, `sanity dataset` etc.
 */
export default defineCliConfig({
  api: { projectId, dataset },
});
