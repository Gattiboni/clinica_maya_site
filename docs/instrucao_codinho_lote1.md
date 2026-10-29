NÃO COMMITAR — o commit é feito no final pelo usuário.

# Instrução ao Codinho · Lote 1: corte de schema, layout, Home e A Clínica

Plano v1.4, Fase 3, Lote 1. Decisão 005 (DECISION_LOG) é o contrato desta etapa; leia antes de abrir qualquer arquivo.

## 1. Contexto

**O que muda de rumo.** O Sanity passa a servir **só o blog** (`post`, `author`, `category`). Toda a copy institucional vive em código. A fonte da copy é `docs/copy-site-v1.md`: transcrição literal, sem reescrever, sem "melhorar". Notas `[PENDÊNCIA: ...]` desse arquivo são para humanos e **não** entram no código.

**Referências que você lê, não presume:**
- Repo atual (scaffold v0.1.0 + noindex): `app/`, `components/`, `lib/sanity/`, `sanity/`, `scripts/varredura*`, `app/globals.css` (tokens). Confira a estrutura real no próprio repo.
- Mock aprovado, desempacotado na raiz (gitignored): `mock-v3.1-home.html`, `mock-v3.1-a-clinica.html`, `mock-v3.1-header.html`, `mock-v3.1-footer.html`. Estilos inline com px, raios, opacidades e posição dos grafismos. É a referência visual; a copy vem do `docs/copy-site-v1.md` (onde os dois divergirem, a copy vence).
- Spinhardi, padrão da agência, na mesma máquina: `D:\Backup C 256\Desktop\Gattiboni Enterprises\Spinhardi\spinhardi_site\`. Nesta etapa você consulta: `studio\schemas\post.ts`, `author.ts`, `category.ts` (contrato do schema), `src\lib\sanity\queries.ts` e `src\app\(public)\blog\page.tsx` (padrão de fetch com tolerância a falha), `src\components\ui\Header.tsx` e `Footer.tsx` (padrão de componente de layout). Leitura apenas; nada é copiado com identidade visual da Spinhardi.

**Estado do mundo que não se toca:** `app/api/revalidate/route.ts`, `app/studio/**`, `lib/sanity/client.ts`, `lib/sanity/env.ts`, `lib/sanity/image.ts`, `scripts/**`, `.github/**`, `sanity.config.ts`, `sanity.cli.ts`, `app/globals.css` (tokens já existem; se faltar token, pare e reporte), `app/layout.tsx` só ganha header e footer (fontes, metadata e o `robots` temporário ficam como estão). Nenhuma dependência nova.

**Sanity:** projeto `04bzsv4z`, dataset `production`, vazio. Não há migração de documentos. Env em `.env.local` já tem os dois valores públicos; o build tem que passar **sem** env também (comportamento atual do client).

## 2. Entregáveis

### 2.1 Corte de schema · `sanity/schemaTypes/`, `sanity/structure.ts`, `lib/sanity/queries.ts`

**Propósito.** Deixar o Studio com exatamente três tipos, com nomes de campo **idênticos** aos da Spinhardi, para que o `/admin/blog` do Lote 3 seja porte, não reescrita.

**Contrato.** Espelhar `studio/schemas` da Spinhardi campo a campo, inclusive nomes em inglês:
- `post`: `title` (obrigatório), `slug` (obrigatório, source `title`), `author` (reference → `author`), `mainImage` (image, hotspot, com `alt` string dentro), `categories` (array de reference → `category`), `publishedAt` (datetime), `excerpt` (text), `body` (array de block; manter também o membro `image` com hotspot que o post atual já tem), `seoTitle`, `seoDescription`, `ogImage` (image). Preview: título e "por {autora}".
- `author`: `name`, `slug`, `image`, `bio` (array de block) **mais um campo exclusivo da Maya**: `area` (string, lista fechada: Medicina, Nutrição, Psicologia, Terapia, Saúde capilar; mesmos rótulos da copy). Motivo: o site exibe a área da autora, não o nome (esqueleto v3). Documente o campo como extensão sobre o espelho.
- `category`: `title`, `description`. Categoria vira documento referenciado, como na Spinhardi; a Decisão 004, item 6 (enum), está superada pela 005. Os quatro documentos de categoria (Emagrecimento, Saúde mental, Saúde da mulher, Saúde capilar) são criados depois, pelo Studio ou pelo admin; nada de seed em código.
- Remover `area.ts`, `dor.ts`, `profissional.ts`, `programa.ts`, `siteConfig.ts`; `index.ts` exporta os três; `SINGLETONS` sai (não há singleton). `structure.ts`: Posts, Autoras, Categorias.
- `lib/sanity/queries.ts`: só o que o blog usa. Mínimo: lista de posts publicados (`publishedAt` desc, com `author->` e `categories[]->`), post por slug, e a query da Home (3 mais recentes). Siga a forma das queries da Spinhardi. Queries dos tipos removidos saem.

**Comportamento.** `npm run build` passa; `/studio` com env lista três tipos e nada mais. Títulos de campo em português no Studio, nomes de campo em inglês no contrato.

### 2.2 Conteúdo estruturado em código · `lib/conteudo/`

**Propósito.** As listas que a copy define (áreas, dores, pilares, passos, dados globais da clínica) viram módulos tipados, importados pelas páginas. É o ponto de troca se um dia a copy institucional for para CMS: muda o módulo, não a página.

**Contrato.** Um módulo por lista, com tipo explícito e array `as const` ou tipado; um módulo `clinica.ts` com os dados globais (nome, slogan, WhatsApp, Instagram, endereço, horário, responsável técnica, destino do CTA de agendar). Conteúdo literal do `docs/copy-site-v1.md`. Nenhum texto de página fora da copy; nenhuma lista duplicada (os cards de área da Home e de A Clínica leem o mesmo array).

### 2.3 Layout · `components/layout/Header.tsx`, `components/layout/Footer.tsx`, `app/layout.tsx`

**Propósito.** Header e footer de todas as páginas, conforme `copy-site-v1.md` §Header e §Footer e os mocks `mock-v3.1-header.html` / `mock-v3.1-footer.html`.

**Comportamento.** Navegação com estado "página atual" (peso 700 e sublinhado verde); mobile com botão "Menu" que abre a mesma lista, botão Agendar sempre visível. O estado ativo e o menu mobile são os **únicos** client components permitidos nesta etapa; o restante do header e todo o footer são server components. Logo e ícones (WhatsApp, Instagram em SVG inline, como no mock) com os `alt`/`aria-label`/`title` da copy. Footer **sem** o link de Política de privacidade (comentário no código: "Lote 3"). Grafismos decorativos com `alt=""` e `aria-hidden`. `app/layout.tsx` passa a renderizar header, `children` dentro de `<main>` (um `<main>` por página, não por seção) e footer; o `Container` existente é a largura de tudo.

### 2.4 Componentes base · `components/ui/`

**Propósito.** O mínimo que Home e A Clínica compartilham, sem antecipar lotes futuros.

**Contrato.** Você decide nomes e granularidade dentro deste conjunto: seção com variante de fundo (bege, creme, verde) e slot para grafismo; cabeçalho de seção (eyebrow opcional, H2, lead opcional); card de área (usado em duas páginas); card de dor; grafismo decorativo via `next/image` com import estático de `public/marca/*.png`, posicionado por props; `Botao` existente ganha variante para fundo verde (texto verde sobre bege), se o mock a usar nos blocos escuros; confira no mock antes de criar. Nada de componente "genérico para depois".

**Regras.** Só classes Tailwind com os tokens do `@theme`; nenhum hex em `.tsx`. Imagens de foto via `next/image` com import estático (padrão do `app/page.tsx` atual) e `sizes` corretos. Um `<h1>` por página; seções usam `<h2>`.

### 2.5 Home · `app/page.tsx`

**Propósito.** Substitui o placeholder. Nove seções renderizadas na ordem da copy (§Home 1 a 10, pulando a 8). Cada seção é um componente próprio (arquivo por seção, onde você julgar; motivo: a Fase 4 anima seção a seção).

**Comportamento específico da seção Blog (§9).** Lê os 3 posts mais recentes do Sanity pela query de 2.1. Regras: (a) sem env, sem client ou com erro de rede, a seção **não renderiza** e o build não quebra: envolva o fetch em tratamento de erro e registre um `console.warn` legível (TRAP herdado da Spinhardi: `generateStaticParams` e `sitemap` batendo no Sanity sem try/catch mataram deploy); (b) sem posts publicados, a seção não renderiza; (c) a página continua estática: siga o padrão de fetch cacheado da Spinhardi (`(public)/blog/page.tsx`) com revalidação; se para isso a Home precisasse virar dinâmica, **pare e reporte**. Card: imagem de capa (`mainImage`, com `alt` do documento; sem imagem, sem `<img>`), "Categoria · N min" (minutos: calcule por contagem de palavras do `body`, ~200 palavras/min, arredondado para cima, mínimo 1; documente a regra), título, "Por {area da autora}". Link do card → `/blog/{slug}` (rota do Lote 3).

**Seção Prova social (§8).** Não existe no código além de um comentário de uma linha apontando para `docs/copy-site-v1.md` §Home 8.

### 2.6 A Clínica · `app/clinica/page.tsx`

**Propósito.** Seis seções na ordem da copy (§A Clínica). `export const metadata` com título e descrição da copy. Seção "Quem faz a clínica" reutiliza o card e o array de áreas da Home. Grade de quatro fotos do espaço com os `alt` da copy.

### 2.7 Fotos · `public/fotos/`

Sete arquivos listados no fim do `copy-site-v1.md`. **O Alan copia antes de você começar.** Se algum faltar, pare e reporte o nome; nenhuma imagem de substituição, nenhum placeholder, nenhum `alt` inventado.

## 3. Transversais

- TypeScript estrito, ESLint e Prettier limpos (`npm run lint`, `npm run format:check`).
- `npm run varredura` e `npm run test:varredura` verdes. **Não edite `scripts/varredura.config.json`**; se um texto literal da copy bater numa regra, pare e reporte (a copy foi varrida antes de chegar a você; um hit indica erro de transcrição ou regra a revisar por humano).
- Renderização estática em `/` e `/clinica`; `/studio` continua dinâmico como hoje. Confira no `prerender-manifest` e na saída do build, não presuma.
- Acessibilidade mínima: landmarks (`header`, `nav`, `main`, `footer`), um H1, imagens decorativas vazias, foco visível (o `Botao` já tem o padrão).
- Sem animação, sem parallax, sem biblioteca de movimento: Fase 4.
- Comentários de código em português, curtos, só onde explicam uma regra (minutos de leitura, seção oculta, Lote 3).

## 4. Restrições duras (parar e reportar)

1. Escopo de escrita: `sanity/schemaTypes/**`, `sanity/structure.ts`, `lib/sanity/queries.ts`, `lib/conteudo/**` (novo), `components/**`, `app/layout.tsx` (só header/footer/main), `app/page.tsx`, `app/clinica/**` (novo). Todo o resto é proibido.
2. Dependência nova em `package.json`: proibido nesta etapa. Precisa? Pare e reporte antes.
3. Alteração em `app/globals.css`, `lib/sanity/client.ts`, `lib/sanity/env.ts`, `scripts/**`, `.github/**`, `sanity.config.ts`: pare e reporte, com o motivo.
4. Nenhuma rota além de `/` e `/clinica` nesta etapa. Links para `/equipe`, `/metodo`, `/emagrecimento`, `/blog`, `/contato`, `/dra-mayara-brasil`, `/atendimento-online` ficam apontando para rotas que ainda não existem; isso é esperado e não se contorna.
5. Nenhum texto que não esteja em `docs/copy-site-v1.md`. Inclui `alt`, `aria-label`, `title`, textos de botão e metadata. Falta algo? Pare e reporte; não redija.
6. Nenhum `fetch` ao Sanity fora da seção Blog da Home.
7. Nenhum componente client além do estado ativo da navegação e do menu mobile.
8. Régua: ambiguidade local (nome de componente, divisão de arquivos, breakpoint exato, espaçamento) → escolha simples, documente em comentário ou no relatório, siga. Decisão que toque contrato de dados (campos do schema), arquitetura (renderização, dependência, client/server) ou módulo existente fora do escopo → pare e reporte.
9. Se o repo divergir desta instrução, segue o repo e avisa.
10. Nada de commit, push, deploy, `sanity deploy`, `sanity schema deploy` ou criação de documento no dataset.

## 5. Critério de aceite (β)

Validação é do Claude, no Chrome, e do Alan, na revisão. Você entrega as evidências:

1. `npm run build`: saída listando `/` e `/clinica` como estáticas, `/studio` dinâmica, `/api/revalidate` como hoje. Rodar **duas vezes**: com `.env.local` e sem (renomeie temporariamente e devolva), e colar as duas saídas no relatório.
2. `npm run lint`, `npm run format:check`, `npm run varredura` (0 ocorrências, número de arquivos varridos), `npm run test:varredura`.
3. `npm run dev` com env: `/studio` lista exatamente Posts, Autoras, Categorias. Sem documentos criados.
4. Home: nove seções na ordem da copy, sem a seção Blog (dataset vazio) e sem Prova social; portanto **oito** visíveis. A Clínica: seis seções. Header com "A Clínica" ativo em `/clinica` e nada ativo em `/`. Menu mobile funcional a 375px de largura. Checagem visual contra os mocks em 1440px e 375px.
5. Sem `.env.local`, a Home renderiza as mesmas oito seções e o console mostra um único `warn` legível da seção Blog.
6. Relatório ao final: arquivos criados e alterados, decisões tomadas pela régua (item 8), divergências encontradas entre mock, copy e repo, e qualquer ponto em que parou.

## 6. Fecho

Extras são bem-vindos se sinalizados com plano de reversão.
