import { defineField, defineType } from "sanity";

/**
 * Categoria do blog. Espelha `studio/schemas/category.ts` da Spinhardi
 * (title, description). As quatro categorias do briefing (Emagrecimento,
 * Saúde mental, Saúde da mulher, Saúde capilar) são criadas pelo Studio ou
 * pelo admin; não há seed em código.
 */
export const category = defineType({
  name: "category",
  title: "Categoria",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string" }),
    defineField({ name: "description", title: "Descrição", type: "text", rows: 3 }),
  ],
});
