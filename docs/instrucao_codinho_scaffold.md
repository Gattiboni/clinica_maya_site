**NÃO COMMITAR — o commit é feito no final pelo usuário.**

# Instrução · Scaffold do site Clínica Maya

## 1. Contexto

Site institucional da Clínica Maya (Antônio Carlos/SC). Esta instrução é a **Fase 1 do plano** (`docs/plano-execucao-site-clinica-maya.md`): fundação técnica. Nenhuma página de conteúdo real entra aqui; isso é Fase 3.

**Estado do mundo.** A pasta local `clinica_maya_site/` já existe e contém:
- `docs/` com o contrato de arquitetura de informação (`esqueleto-site-clinica-maya-v3.md`), o plano, as instruções dos mocks e `docs/id_visual/ID VISUAL/` com 18 PNGs transparentes da marca (logos em 5 cores, grafismos 3/4/5 claro e escuro, círculo corpo-mente-espírito). **Não altere nada em `docs/`.**
- Um arquivo `Clinica Maya - Site Completo v20261014.html` (~6,7 MB, mock de referência). Ele não é código e não entra no repo.
- Nenhum `package.json`, nenhum `.git`.

Repositório remoto: `https://github.com/Gattiboni/clinica_maya_site` (vazio). O Codinho inicializa o git nesta pasta e aponta o remote; o primeiro commit é do usuário.

Stack aprovada (29/10): **Next.js 16 (App Router, TypeScript) + Tailwind 4 + Sanity**, hospedagem Vercel. Mesmo padrão do repo `Gattiboni/spinhardi_site`; onde esta instrução for omissa em convenção (lint, prettier, scripts, gerenciador de pacotes), siga o padrão da Spinhardi se tiver acesso a ele; se não tiver, escolha o padrão oficial do `create-next-app` e documente no README.

Fonte de verdade do modelo de conteúdo: seção "Modelo de conteúdo" do esqueleto v3 e a tabela da seção "Equipe". Os schemas do Sanity nascem dali; **não invente campos**.

O projeto Sanity (id, dataset) **ainda não existe**: a conta está sendo criada em paralelo. O scaffold precisa buildar sem ele.

## 2. Entregáveis

### 2.1 Projeto Next.js na raiz de `clinica_maya_site/`

- **Propósito:** aplicação Next.js 16 com App Router e TypeScript estrito, pronta para Vercel.
- **Contrato:** `npm run dev`, `npm run build`, `npm run start`, `npm run lint`, `npm run format`, `npm run varredura`, `npm run test:varredura`. Node 22. Output padrão do Next (nada de `output: 'export'`; a Vercel cuida do estático).
- **Comportamento:** todas as páginas renderizam estaticamente por padrão. Client components só onde houver interação (nada neste scaffold além do necessário para o Studio). `next/image` para toda imagem. Fontes via `next/font/google` (Lora e Alegreya Sans) com `display: swap` e expostas como CSS variables; o Next as self-hospeda no build, zero request ao Google em runtime.
- **Estrutura:** `app/`, `components/` (`ui/`, `layout/`), `lib/sanity/`, `sanity/` (schemas e config), `scripts/`, `public/`, `docs/` (existente). Decida nomes internos à vontade; o que está nomeado aqui é contrato.
- **`.gitignore`** deve cobrir o padrão do Next e também `*.html` na raiz (o mock) e `.env*.local`.
- **`.env.example`** com `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` (default `production`), `SANITY_API_READ_TOKEN` (vazio), `SANITY_REVALIDATE_SECRET` (vazio). README curto explicando cada uma.

### 2.2 Tokens da marca (Tailwind 4)

- **Propósito:** uma única fonte de cores, fontes e raios.
- **Contrato (`@theme` no CSS global):** `--color-bege: #F7EFDF`, `--color-creme: #FFFDF8`, `--color-verde: #3F4F4F`, `--color-marrom: #755958`. Nenhuma outra cor de marca; **`#103552` (azul) não existe neste projeto**. `--font-titulo` → Lora, `--font-texto` → Alegreya Sans. Raio de botão/pílula e de card como tokens.
- **Comportamento:** `body` com fundo bege e texto verde. Sem CSS fora dos tokens para cor.
- **Ponto de extensão:** tema escuro NÃO entra; deixe o `@theme` organizado para aceitar variantes depois.

### 2.3 Layout base e página placeholder

- **Propósito:** provar o pipeline (fontes, tokens, imagem, build, deploy) sem conteúdo.
- **Contrato:** `app/layout.tsx` com `<html lang="pt-BR">`, metadata base (título "Clínica Maya", description neutra), fontes e tokens aplicados. `app/page.tsx` com: logo `logo-vertical-verde.png` (copiado de `docs/id_visual/ID VISUAL/` para `public/marca/` **mantendo os originais em `docs/`**), o H1 "Esteja bem com você" em Lora, um parágrafo neutro e um botão sólido verde com texto bege linkando para `https://wa.me/5548996205000`. Um H1 só.
- **Comportamento:** página 100% estática. Nada de texto além do descrito (a varredura vai rodar em cima).
- **Ponto de extensão:** `components/layout/` fica criado com um `Container` genérico; header e footer reais são Lote 1 da Fase 3. Não os implemente.

### 2.4 Sanity: schemas, cliente e Studio

- **Propósito:** o modelo de conteúdo do esqueleto v3 como schemas tipados, com Studio embutido para a gestora publicar sem PR.
- **Contrato dos schemas (`sanity/schemaTypes/`):**
  - `siteConfig` (singleton): nome, slogan, endereço (rua, número, bairro, cidade, UF, CEP), horário, whatsapp, instagramClinica, instagramDra, responsávelTécnica (nome, CRM, RQE), registroClínicaCRM (texto opcional), geoSEO (texto).
  - `area`: nome, slug (= âncora: medicina, nutricao, psicologia, terapia, capilar), descrição curta, texto público, ordem.
  - `profissional`: nome, slug, rótulo (Dra., Dr., Nutricionista…), área (ref), registro (texto), atende, modalidades (array de enum: presencial, on-line), instagram, foto (image com hotspot), bioCurta, bio (portable text), publicável (boolean), ordem, aConfirmar (array de strings livres, ex.: "modalidade", "registro").
  - `dor`: título, frase, áreas (array de ref), ordem.
  - `programa`: nome, slug, frase, ordem, ativoNoSite (boolean), exibirDetalhes (boolean, default false), duração e consultas (campos ocultos quando exibirDetalhes é false).
  - `post`: título, slug, resumo, corpo (portable text com imagem), autora (ref profissional), categoria (enum: emagrecimento, saude-mental, saude-da-mulher, saude-capilar), data, capa, seoTitle, seoDescription.
  - Todo campo que puder ser vazio no mock atual é opcional no schema; só nome/slug/título são obrigatórios.
- **Cliente (`lib/sanity/`):** client com `useCdn: true` em produção, `perspective: 'published'`; helper de imagem (`@sanity/image-url`); um arquivo de queries GROQ vazio com a assinatura de uma query por tipo, documentada e **sem uso nas páginas nesta fase**. Se as env vars de projeto estiverem vazias, o client não é instanciado e nada quebra no build.
- **Studio:** rota `app/studio/[[...tool]]/page.tsx` com `next-sanity`, `sanity.config.ts` e `sanity.cli.ts` na raiz lendo as mesmas env vars. Sem env, a rota deve renderizar uma mensagem curta "Sanity não configurado" em vez de quebrar o build.
- **Ponto de extensão:** `revalidate` por webhook (rota `app/api/revalidate/route.ts` validando `SANITY_REVALIDATE_SECRET`) pode ficar criado e documentado; o webhook em si é configurado depois pelo usuário.
- **Dependências permitidas para isto:** `next-sanity`, `sanity`, `@sanity/image-url`, `@portabletext/react`, `styled-components` apenas se o Studio exigir como peer. Nada além.

### 2.5 Varredura regulatória (`scripts/varredura.mjs` + `scripts/varredura.config.json`)

- **Propósito:** o gate que hoje é manual vira teste automático; nenhum build sobe com texto vetado.
- **Contrato:** `npm run varredura` percorre `app/`, `components/`, `lib/`, `sanity/`, `public/**/*.svg` e, se existir, `.next/server/app/**/*.html`; lê a config; sai com código 1 e lista arquivo, linha e termo em cada ocorrência; código 0 e um resumo quando limpo. Node puro, sem dependência.
- **Config inicial (editável sem tocar no script):**
  - `proibidos` (case-insensitive, regex): `integrativ`, `—`, `–`, `[0-9]+ ?kg`, `quilos`, `R\$`, `garantid`, `definitiv`, `sem esforço`, `milagr`, `TCC`, `cognitiv`, `semaglut`, `tirzepat`, `ozempic`, `monjaro|mounjaro`, `depoimento`, `antes e depois`, `renasciment`, `especialista em emagrec`, `Você merece`, `Chega de`, `Transforme sua vida`, `Não é sobre`, `protocolo`, `Maya Exclusivo`, `Maya Presença`, `psiquiatr`, `estética`, `#103552`, `\bAna\b`, `Carolina`, `em breve`, `Folks\b`.
  - `permitidos` (exceções exatas, por frase): `sem radicalismos ou soluções milagrosas` (frase do manual, em negação).
  - `html`: regra "exatamente um `<h1` por arquivo HTML".
- **Teste (`npm run test:varredura`):** cria um arquivo temporário com um termo vetado, confirma que a varredura falha, remove o arquivo, confirma que passa. Sem framework de teste nesta fase; script Node simples.

### 2.6 CI (`.github/workflows/ci.yml`)

- **Propósito:** PR só mergeia com build e varredura verdes.
- **Contrato:** em `pull_request` e `push` para `main`: Node 22, instalação com lockfile, `lint`, `build` (com as env do Sanity vindas de `secrets`, aceitando vazias), `varredura`, `test:varredura`. Falha em qualquer etapa bloqueia.

### 2.7 README.md

- **Propósito:** quem clonar entende em 2 minutos.
- **Contrato:** stack, scripts, env vars, estrutura de pastas, como rodar o Studio, como rodar a varredura, link para `docs/plano-execucao-site-clinica-maya.md` como estado do projeto. Em português, sem travessão.

### 2.8 Git

- `git init` nesta pasta, branch `feat/scaffold`, `git remote add origin https://github.com/Gattiboni/clinica_maya_site.git`. **Nenhum commit.** Entregue `git status` limpo de arquivos inesperados (o mock `.html` deve aparecer como ignorado).

## 3. Transversais

- TypeScript estrito; sem `any`.
- ESLint e Prettier configurados e passando (`npm run lint` limpo).
- Todo texto visível no scaffold em português, sem travessão (a varredura garante).
- Logs de scripts legíveis por humano.
- Nada de Supabase, Resend, Recharts, analytics ou banner de cookies nesta fase.
- Imagens da marca: copiar de `docs/id_visual/ID VISUAL/` para `public/marca/` com os mesmos nomes; não converter, não otimizar, não apagar os originais.

## 4. Restrições duras (parar e reportar)

1. Escopo de escrita: tudo em `clinica_maya_site/` **exceto `docs/`** e o mock `.html`. Tocar em `docs/` é violação.
2. Dependência fora da lista (`next`, `react`, `react-dom`, `tailwindcss`, `@tailwindcss/postcss`, `typescript`, tipos, `eslint`, `eslint-config-next`, `eslint-config-prettier`, `prettier`, `next-sanity`, `sanity`, `@sanity/image-url`, `@portabletext/react`, e `styled-components` só se peer obrigatório)? **Pare e reporte antes.**
3. Nenhuma página além da placeholder e do Studio. Header, footer, Home real e demais páginas são Fase 3.
4. Nenhum campo de schema fora do contrato 2.4. Se o esqueleto v3 e esta instrução divergirem, o esqueleto vence; reporte a divergência.
5. Nenhuma cor fora dos quatro tokens. Se algo "precisar" de azul, pare e reporte.
6. Ambiguidade local (nome de componente, organização interna de pastas, formatação) → escolha simples, documente no README, siga. Decisão que afete contrato de dados, env vars, scripts ou CI → **pare e reporte**.
7. Se o repo divergir desta instrução, segue o repo e avisa.

## 5. Critério de aceite

- `npm run build` conclui **sem nenhuma env var do Sanity definida**.
- `npm run lint` limpo. `npm run varredura` sai com 0. `npm run test:varredura` prova que a varredura falha com termo injetado e volta a passar.
- Com env vars de um projeto Sanity preenchidas em `.env.local`, `/studio` abre e lista os seis tipos de documento.
- A página placeholder em `localhost:3000` mostra logo, H1 em Lora, texto em Alegreya Sans e botão verde; Lighthouse mobile ≥ 95 em todas as categorias (sem conteúdo, não há desculpa).
- `git status` mostra `docs/` intacto e o mock `.html` ignorado; nenhum commit feito.
- CI configurada; o PR `feat/scaffold` fica verde após o usuário commitar e abrir.

## 6. Fecho

Extras são bem-vindos se sinalizados com plano de reversão.
