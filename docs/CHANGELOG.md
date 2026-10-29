# Changelog — site Clínica Maya

Formato: versão acima da anterior. Versões antes de v1.0.0 são fundação e desenvolvimento, sem site no ar.

## v0.1.0 — 2026-10-29

### Fundação: o esqueleto técnico existe, builda sem conteúdo e já se fiscaliza sozinho

Fecha a Fase 1 do plano. Nada de página real ainda; o que entrou é o pipeline inteiro provado de ponta a ponta: Next 16 estático, tokens da marca, Sanity com os seis tipos do modelo de conteúdo, Studio embutido, varredura regulatória como teste e CI que bloqueia PR com termo vetado.

### Adicionado
- **`app/` — aplicação Next.js 16 (App Router, TS estrito):** `layout.tsx` com `lang="pt-BR"`, metadata base e fontes Lora + Alegreya Sans via `next/font/google` (self-hospedadas no build, zero request ao Google em runtime). `page.tsx` placeholder: logo `public/marca/logo-vertical-verde.png`, um H1 "Esteja bem com você", botão verde para `wa.me/5548996205000`. Build gera 4 rotas, todas estáticas exceto `/api/revalidate`. Sem `src/`, alias `@/*` na raiz, `cacheComponents` desligado (padrão Spinhardi). TRAP: `npm run dev` no Next 16 gera `AGENTS.md` na raiz; está no `.gitignore` de propósito.
- **`app/globals.css` — tokens Tailwind 4:** `@theme` com a paleta padrão do Tailwind **desligada**; existem só `--color-bege #F7EFDF`, `--color-creme #FFFDF8`, `--color-verde #3F4F4F`, `--color-marrom #755958`, fontes `--font-titulo` e `--font-texto`, raios de pílula e card. Azul `#103552` não existe no projeto e a varredura garante isso.
- **`sanity/` + `sanity.config.ts` + `sanity.cli.ts` — modelo de conteúdo:** seis tipos espelhando o esqueleto v3: `siteConfig` (singleton), `area` (slug = âncora `/equipe#…`), `profissional` (`modalidades[]` + `aConfirmar[]`, `publicavel` default true), `dor`, `programa` (`exibirDetalhes` default false esconde duração/consultas; `ativoNoSite` default true), `post` (categoria enum com as 4 do briefing). Só nome/slug/título obrigatórios. Sem campo `alt` em imagem nesta versão (ver pendências).
- **`lib/sanity/` — cliente:** `useCdn` em produção, `perspective: 'published'`, helper de imagem, arquivo de queries GROQ com uma assinatura por tipo e **nenhum uso em página**. Sem env vars o client não instancia e o build passa.
- **`app/studio/[[...tool]]/` — Studio embutido:** com env renderiza o Studio; sem env, a rota mostra "Sanity não configurado" em vez de quebrar.
- **`app/api/revalidate/route.ts` — ponto de extensão:** valida `SANITY_REVALIDATE_SECRET`; o webhook em si ainda não existe no Sanity.
- **`scripts/varredura.mjs` + `scripts/varredura.config.json` — gate regulatório:** percorre `app/`, `components/`, `lib/`, `sanity/`, `public/**/*.svg` e `.next/server/app/**/*.html`; 33 regex vetadas em config editável; exceção única `sem radicalismos ou soluções milagrosas`; regra de exatamente um `<h1>` por HTML (Studio em `html.ignorar`). Conteúdo de `<script>` é ignorado nos HTML (payload do React, não texto). TRAP: `[0-9]+ ?kg` e `TCC` precisam de `\b` nas bordas, senão ids de build e base64 (`4KG2`, `0KGgo`) casam em todo build.
- **`npm run test:varredura`:** injeta termo vetado em arquivo temporário, exige falha, remove, exige sucesso. Node puro.
- **`.github/workflows/ci.yml`:** Node 22, `npm ci`, lint, build, varredura, test:varredura em PR e push para `main`. Secrets do Sanity opcionais; build passa vazios.
- **`README.md`, `.env.example`, `.nvmrc`, `.gitattributes` (LF), ESLint + Prettier** com scripts `lint:fix` e `format:check`.
- **`docs/`:** esqueleto v3, plano de execução (v1.2), instruções dos mocks e do scaffold, `id_visual/` com os 18 PNGs originais da marca (cópia em `public/marca/` para uso). Este changelog e o `DECISION_LOG.md` nascem aqui.

### Validação (β)
- `npm run build` sem nenhuma env do Sanity: OK, 4 rotas. `npm run lint` e `format:check`: limpos.
- `npm run varredura`: 0 ocorrências em 23 arquivos, incluindo o HTML do build. `npm run test:varredura`: falha com termo injetado, volta a passar.
- Lighthouse mobile em `next start` local: Performance 97, Acessibilidade 100, SEO 100, Best Practices 81. O 81 é o Kaspersky da máquina injetando script HTTP em toda página do Chrome; única penalidade. Medição que vale é no preview da Vercel.
- `/studio` com project id fictício: build inclui o Studio, rota responde 200 com o HTML do Studio. Listagem dos seis tipos depende do projeto Sanity real (ainda não existe).
- `git status`: 81 arquivos novos, mock `.html` e `.next` ignorados, nenhum commit.

### Pendências reconhecidas
- Projeto Sanity ainda não criado (nasce na conta `clinicamaya.digital@gmail.com`); `.env.local` vazio; Studio não validado contra schema real.
- `alt` de imagem: entra como objeto dentro do campo `image` no primeiro uso real (Lote 1/3), não foi inventado agora.
- `@portabletext/react` removido nesta versão; instala no Lote 3, com o primeiro corpo de post.
- Best Practices do Lighthouse medir no preview da Vercel, fora do Kaspersky.
- Favicon aponta para o PNG do logo; conjunto de ícones de verdade é Fase 5.
- Copy da Equipe na Fase 3 não pode citar "Ana" (veto na varredura, decisão da gestora em 14/10); o esqueleto v3 ainda cita e não é varrido.
- Vercel: time `clinica-maya` criado em Pro Trial (14 dias a partir de 29/10). Antes do dia 12, decidir: downgrade para Hobby até a publicação ou manter Pro. Produção comercial exige Pro.
- Registro da clínica no CRM-SC (obrigação de exibição no site, CFM 2.336/2023) e decisão sobre prova social seguem na Fase 0 do plano.

### Decisões relacionadas
- Decisão 001 — Next 16 + Tailwind 4 + Sanity desde o dia 1, no padrão da Spinhardi.
- Decisão 002 — Varredura regulatória como gate automático de CI.
- Decisão 003 — Propriedade e hospedagem: Vercel, Sanity, domínio e DNS.
- Decisão 004 — Modelo de conteúdo no Sanity espelha o esqueleto v3; detalhes de programa existem mas não se exibem.

---
