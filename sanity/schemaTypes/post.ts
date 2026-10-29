import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Post do blog. Espelha campo a campo `studio/schemas/post.ts` da Spinhardi
 * (nomes em inglês são contrato: o /admin/blog do Lote 3 é porte, não reescrita).
 * Única diferença: `body` aceita também imagem com hotspot, como o post do scaffold.
 */
export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (regra) => regra.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Identificador na URL (ex.: /blog/meu-post). Gerado a partir do título.",
      options: { source: "title", maxLength: 96 },
      validation: (regra) => regra.required(),
    }),
    defineField({
      name: "author",
      title: "Autora",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "mainImage",
      title: "Imagem principal",
      type: "image",
      description: "Capa do post, exibida no topo e no card da listagem.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
          description: "Descreve a imagem em uma frase, para leitor de tela e para o Google.",
        }),
      ],
    }),
    defineField({
      name: "categories",
      title: "Categorias",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "category" }] })],
    }),
    defineField({
      name: "publishedAt",
      title: "Publicado em",
      type: "datetime",
    }),
    defineField({
      name: "excerpt",
      title: "Resumo",
      type: "text",
      description: "Resumo curto, usado em cards e como reserva da descrição para SEO.",
      rows: 3,
    }),
    defineField({
      name: "body",
      title: "Conteúdo",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({ type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: "seoTitle",
      title: "Título para SEO",
      type: "string",
      description: "Se vazio, usa o título do post.",
    }),
    defineField({
      name: "seoDescription",
      title: "Descrição para SEO",
      type: "text",
      description: "Se vazia, usa o resumo.",
      rows: 3,
    }),
    defineField({
      name: "ogImage",
      title: "Imagem de compartilhamento (OG)",
      type: "image",
      description:
        "Imagem ao compartilhar o link em redes sociais. Se vazia, usa a imagem principal.",
      options: { hotspot: true },
    }),
  ],
  orderings: [
    {
      title: "Mais recentes",
      name: "publishedAt",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", author: "author.name", media: "mainImage" },
    prepare(selecao) {
      const { author } = selecao;
      return { ...selecao, subtitle: author ? `por ${author}` : undefined };
    },
  },
});
