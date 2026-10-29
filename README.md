# Site Clínica Maya

Site institucional da Clínica Maya (Antônio Carlos/SC). Este repositório está na **Fase 1 (fundação técnica)**: scaffold, tokens da marca, modelo de conteúdo no Sanity, varredura regulatória e CI. Nenhuma página de conteúdo real ainda.

Estado do projeto, fases e pendências: [docs/plano-execucao-site-clinica-maya.md](docs/plano-execucao-site-clinica-maya.md). Contrato de arquitetura de informação e modelo de conteúdo: [docs/esqueleto-site-clinica-maya-v3.md](docs/esqueleto-site-clinica-maya-v3.md).

## Stack

- Next.js 16 (App Router, TypeScript estrito, Turbopack), renderização estática por padrão
- Tailwind 4 com os tokens da marca em `@theme` (ver `app/globals.css`)
- Sanity 6 com Studio embutido em `/studio` (`next-sanity`)
- Fontes Lora e Alegreya Sans via `next/font/google`, self-hosted no build
- Hospedagem Vercel, Node 22, npm

## Scripts

| Script | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento em `localhost:3000` |
| `npm run build` | Build de produção (funciona sem nenhuma variável do Sanity) |
| `npm run start` | Serve o build de produção |
| `npm run lint` | ESLint (regras do Next, TypeScript e Prettier) |
| `npm run lint:fix` | ESLint corrigindo o que for automático |
| `npm run format` | Prettier em todo o repositório |
| `npm run format:check` | Prettier só conferindo |
| `npm run varredura` | Varredura regulatória: sai com 1 se encontrar termo vetado |
| `npm run test:varredura` | Prova que a varredura falha com termo injetado e volta a passar |

## Variáveis de ambiente

Copie `.env.example` para `.env.local`. Todas são opcionais para o build.

| Variável | Uso | Onde |
| --- | --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ID do projeto Sanity. Sem ela, o cliente não é instanciado e `/studio` mostra "Sanity não configurado" | Navegador e servidor |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset do Sanity. Padrão `production` | Navegador e servidor |
| `SANITY_API_READ_TOKEN` | Token de leitura, só para rascunhos ou dataset privado. Vazio em produção pública | Servidor |
| `SANITY_REVALIDATE_SECRET` | Segredo do webhook que chama `/api/revalidate` | Servidor |

Na Vercel, cadastre as mesmas quatro no projeto. No GitHub, cadastre-as como secrets com os mesmos nomes para a CI (podem ficar vazias).

## Estrutura de pastas

```
app/                    Rotas (App Router)
  layout.tsx            html lang pt-BR, fontes, metadata base
  page.tsx              Página placeholder (logo, H1, parágrafo, botão WhatsApp)
  globals.css           Import do Tailwind e tokens da marca (@theme)
  studio/[[...tool]]/   Sanity Studio embutido
  api/revalidate/       Webhook de revalidação (POST, assinatura validada)
components/
  layout/Container.tsx  Largura máxima e respiro lateral padrão
  ui/Botao.tsx          Botão sólido da marca (verde com texto bege)
lib/sanity/
  env.ts                Leitura das env vars e flag sanityConfigurado
  client.ts             Cliente de leitura (null sem projeto configurado)
  image.ts              Helper urlFor para imagens do Sanity
  queries.ts            Queries GROQ, uma por tipo (sem uso nesta fase)
sanity/
  schemaTypes/          Os seis tipos: siteConfig, area, profissional, dor, programa, post
  structure.ts          Painel do Studio (siteConfig como singleton)
sanity.config.ts        Configuração do Studio
sanity.cli.ts           Configuração do CLI do Sanity
scripts/
  varredura.mjs         Script da varredura regulatória
  varredura.config.json Termos vetados, exceções e regra de H1 (editável)
  test-varredura.mjs    Teste da varredura
public/marca/           Arquivos da identidade visual (cópias de docs/id_visual)
docs/                   Contrato, plano, instruções e identidade visual (não editar pelo código)
.github/workflows/ci.yml  CI: lint, build, varredura, teste da varredura
```

## Tokens da marca

Definidos uma única vez em `app/globals.css`, dentro de `@theme`:

- Cores: `bege` #F7EFDF (fundo), `creme` #FFFDF8 (superfícies), `verde` #3F4F4F (texto e estrutura), `marrom` #755958 (detalhes e hover). A paleta padrão do Tailwind foi desligada: só existem estas quatro. Azul não existe neste projeto.
- Fontes: `font-titulo` (Lora) e `font-texto` (Alegreya Sans).
- Raios: `rounded-pilula` (botões) e `rounded-card` (cards).

Tema escuro não entra nesta fase. O `@theme` está pronto para receber uma variante depois sem mexer nos componentes.

## Sanity Studio

1. Crie o projeto no painel do Sanity (ou peça o ID a quem criou) e preencha `.env.local`.
2. `npm run dev` e abra `localhost:3000/studio`. O painel lista Configuração do site (singleton) e as listas de Áreas, Profissionais, Dores, Programas e Posts.
3. Para o CLI (`npx sanity schema deploy`, `npx sanity dataset list` etc.), o `sanity.cli.ts` lê as mesmas variáveis.

Sem projeto configurado, `/studio` renderiza a mensagem "Sanity não configurado" e o build segue normalmente.

### Webhook de revalidação

A rota `POST /api/revalidate` já existe. No painel do Sanity (API > Webhooks) crie um webhook apontando para `https://<dominio>/api/revalidate`, dataset `production`, disparo em create, update e delete, projection `{_type, slug}` e o mesmo segredo de `SANITY_REVALIDATE_SECRET` no campo Secret. A assinatura é verificada antes de revalidar. Nesta fase a rota revalida o site inteiro; quando as páginas buscarem conteúdo com tags por tipo, a troca por `revalidateTag` está indicada no próprio arquivo.

## Varredura regulatória

`npm run varredura` percorre `app/`, `components/`, `lib/`, `sanity/`, os SVG de `public/` e, se houver build, os HTML de `.next/server/app/`. Para cada ocorrência imprime arquivo, linha e termo, e sai com código 1. Limpo, sai com 0.

A configuração fica em `scripts/varredura.config.json`:

- `proibidos`: regex, sem distinção de maiúsculas. Para adicionar um termo, acrescente uma linha.
- `permitidos`: frases exatas que anulam uma ocorrência quando a envolvem (hoje só a frase do manual sobre soluções milagrosas, em negação).
- `html`: exige exatamente um `<h1>` por HTML gerado. O HTML do Studio é ignorado porque o Studio é uma aplicação, não uma página do site.

Nos HTML gerados, o conteúdo das tags `<script>` é ignorado: é payload do React e ids de build, não texto visível. Os termos com letras curtas (`TCC`) e o padrão de quilos usam borda de palavra para não casar com hashes.

`npm run test:varredura` cria um arquivo temporário em `components/` com um termo vetado, confirma a falha, remove o arquivo e confirma que passa.

## CI

`.github/workflows/ci.yml` roda em todo pull request e em push para `main`: Node 22, `npm ci`, lint, build (com as env do Sanity vindas dos secrets, aceitando vazias), varredura e teste da varredura. Qualquer etapa vermelha bloqueia o merge.

## Decisões de convenção desta fase

- Sem `src/`: `app/`, `components/`, `lib/` e `sanity/` ficam na raiz, conforme a instrução do scaffold. Alias `@/*` aponta para a raiz.
- `@tailwindcss/postcss` em vez do plugin Turbopack sugerido pelo `create-next-app`, para manter o padrão da Spinhardi e a lista de dependências aprovada.
- `cacheComponents` desligado (padrão da Spinhardi). A revalidação usa `revalidatePath`; migrar para Cache Components é uma decisão de projeto, não desta fase.
- `styled-components` entra como dependência direta porque é peer obrigatório de `sanity` e `next-sanity`.
- `@portabletext/react` já está instalado para a Fase 3 (corpo dos posts e bios); não é usado no scaffold.
- Imagens do Sanity não têm campo de texto alternativo próprio: o site usa o nome da profissional e o título do post como `alt`.
- O singleton `siteConfig` não pode ser criado, duplicado, apagado nem despublicado pelo Studio.
- Arquivos gravados com fim de linha LF (`.gitattributes` e Prettier).
- Nenhum favicon dedicado: a metadata aponta para `public/marca/logo-vertical-verde.png`.
