import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./lib/sanity/env";
import { SINGLETONS, schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

const ACOES_VETADAS_EM_SINGLETON = new Set(["duplicate", "delete", "unpublish"]);

export default defineConfig({
  name: "clinica-maya",
  title: "Clínica Maya",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
    // Singletons não aparecem no menu "Criar novo documento".
    templates: (templates) => templates.filter((t) => !SINGLETONS.has(t.schemaType)),
  },
  document: {
    // Singletons não podem ser duplicados, apagados nem despublicados.
    actions: (acoes, contexto) =>
      SINGLETONS.has(contexto.schemaType)
        ? acoes.filter((acao) => !acao.action || !ACOES_VETADAS_EM_SINGLETON.has(acao.action))
        : acoes,
  },
});
