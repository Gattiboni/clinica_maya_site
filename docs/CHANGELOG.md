# Changelog — site Clínica Maya

Formato: versão acima da anterior. Versões antes de v1.0.0 são fundação e desenvolvimento, sem site no ar.

## v0.4.0 — 2026-10-29

### Lote 3a: o site público fica completo para o preview; blog lê do Sanity e o contato abre o WhatsApp

Fecha o Lote 3a (plano v1.6, Decisão 007): Atendimento on-line, Blog público (lista e post), Contato com formulário que monta a mensagem do WhatsApp, 404 e Política de privacidade. Todas as rotas do menu e do footer agora existem. Nenhum backend, nenhum dado armazenado, nenhum post no dataset: a lista mostra o estado vazio.

### Adicionado
- **`app/(site)/atendimento-online/` + `components/atendimento/`:** cinco seções da copy v1.2; passos em `<ol>`; FAQ sobre o novo `components/ui/Faq.tsx`.
- **`app/(site)/blog/` e `blog/[slug]/` + `components/blog/`:** lista com abertura, chips de categoria e grade de `CardPost` com resumo; `revalidate = 60`; filtro **no cliente** sobre a lista já carregada (`FiltroCategoria.tsx`, provedor de contexto com duas folhas, para as seções continuarem server components com grafismo); a fileira de chips só aparece quando o dataset tem categoria. Post com `generateStaticParams` em try/catch (zero slugs hoje), `dynamicParams`, linha superior com categoria e minutos, data por extenso (`dataExtenso.ts`, `Intl` pt-BR), capa opcional, corpo em Portable Text (`PortableTextPost.tsx`: normal, h1→h2, h2, h3, h4, blockquote, listas, strong, em, underline, strike, code, link externo com `rel` seguro e interno via `next/link`, imagem via `urlFor` com dimensões do `_ref`), bloco de chamada em verde (mock), relacionados (até 3 da mesma categoria, senão recentes). Estado vazio: "Em breve, os primeiros textos da equipe.", frase exata em `permitidos` da varredura. **Dependência nova: `@portabletext/react` 8.0.1** (prevista desde o plano v1.3).
- **`app/(site)/contato/` + `components/contato/`:** dois cards de abertura, "Onde estamos" com link para o Google Maps (sem iframe), redes, e `FormularioContato.tsx`, segundo client component do site: chips como `<input type="radio">` em `<fieldset>`/`<legend>`, `type="tel"`, botão desabilitado sem nome (`aria-invalid` após sair do campo), mensagem literal da copy aberta em `wa.me` com `encodeURIComponent`. Nenhum `fetch`, server action ou `localStorage`.
- **404:** `app/not-found.tsx` compõe Header, `<main>` e Footer em volta do conteúdo de `app/(site)/not-found.tsx`, que também atende `notFound()` dentro de `(site)`. Estático, sem catch-all; `/nao-existe`, `/equipe/x/y` e `/blog/nao-existe` respondem 404 no `curl -I`.
- **`app/(site)/politica-de-privacidade/`:** texto base da copy v1.2 para revisão jurídica; linha "Vigente a partir de" só renderiza quando `politicaPrivacidade.vigenteDesde` (em `lib/conteudo/clinica.ts`, vazio) tiver data.
- **`components/ui/Faq.tsx`:** `<details>`/`<summary>` movido do Emagrecimento para a base; `components/emagrecimento/Faq.tsx` vira seção fina sobre ele.
- **`lib/conteudo/{atendimento,contato,politica,blog}.ts`**; `lib/sanity/queries.ts` com slugs, categorias e relacionados (só acréscimos).

### Alterado
- `components/layout/Footer.tsx`: link "Política de privacidade" na coluna Institucional (comentário "Lote 3" removido). `components/blog/CardPost.tsx`: recebe dados resolvidos, resumo e nível de título opcionais; `components/home/Blog.tsx` só mudou a chamada. `scripts/varredura.config.json`: uma frase em `permitidos`. `docs/copy-site-v1.md` v1.2 (+ bloco de chamada do post em verde, conforme o mock).

### Validação (β)
- **Codinho, 29/10:** `build` com e sem `.env.local` exit 0; `/blog` com revalidate 1m, `/blog/[slug]` SSG com zero slugs; sem env, só os `console.warn` esperados (Home · Blog, Blog · lista, categorias, post, slugs). Lint, `format:check`, varredura (126 arquivos, 0 ocorrências) e `test:varredura` OK. HTML: um `<h1>` por página; estado vazio em `/blog`; `/contato` com `id="agendar"`, 2 `<fieldset>`, 8 radios, `type="tel"`, `required`, botão `disabled`, zero iframe; política no footer de todas as páginas. `curl -I` 404 nas três rotas inexistentes. Formulário no Chrome headless: `href` decodificado = "Olá! Me chamo Maria Teste. Gostaria de agendar (on-line) com: Nutrição. Meu WhatsApp: (48) 99999-0000. Quero começar pelo acompanhamento nutricional."; só com nome = "Olá! Me chamo Ana Paula. Gostaria de agendar (presencial) com: Ainda não sei."; âncora `#agendar` a 80px (375) e 96px (1440) do topo. Auditoria 360 a 1920: sem rolagem horizontal; "viúvas" restantes são títulos de duas ou três palavras balanceados em duas linhas (não há como evitar sem `nowrap`); único ajuste, `whitespace-nowrap` em "on-line" na chamada final do Atendimento.
- **Console de desenvolvimento, lido nas sete rotas com e sem env:** nenhuma mensagem nossa a corrigir. As demais: aviso do Next de cross-origin para `/_next/hmr` e falha de WebSocket **só quando o site é aberto por `127.0.0.1`** (por `localhost` não acontece; solução seria `allowedDevOrigins` no `next.config.ts`); aviso de LCP sobre o círculo decorativo do footer na 404 do blog (única imagem acima da dobra nessa página); 404 do próprio recurso nas rotas inexistentes. `next dev` gera `AGENTS.md` (já ignorado).

### Pendências reconhecidas
- **Imagem do corpo do post sem campo `alt` no schema** (`body` tem `image` sem `alt`; só `mainImage` tem). O Portable Text usa `alt` quando vier e `alt=""` quando não. Correção de schema no Lote 3b (`sanity/**` fora do escopo do 3a).
- **404 de post inexistente** (`/blog/{slug}`) responde 404 com título e `noindex` certos, mas o HTML vem como `__next_error__` e o conteúdo do 404 só aparece via JavaScript; `loading.tsx` como fronteira de Suspense devolve HTML completo mas status 200. Limite do Next; mantido o 404 real.
- Mock × copy: placeholders de campo e avatar da autora no post não estão na copy e não entraram; relacionados usam o `CardPost` completo (mock mostra só categoria e título). Grafismo-3 do Contato sangra 40px (mock: 140px) para não cruzar o footer. "Ver no Google Maps" repete as classes do `LinkTexto` em vez de usá-lo (`LinkTexto` fora do escopo); unificar quando o `LinkTexto` for tocado.
- Mapa embutido fora (link ao Google Maps); entra na Fase 5 com consentimento, se a Amanda quiser. Pix explícito no Atendimento on-line e frase sobre prescrição digital: confirmar no pacote da Fase 6. Política de privacidade: CNPJ/razão social e encarregado de dados pendentes do jurídico.
- Herdadas vivas: peso do HTML com SVG inline (mitigação antes da Fase 4); header `relative` até a Fase 4; Dr. Arthur, fotos e registros da equipe, Folske × Folks, trajetória e formação da Dra. Mayara (clínica); categorias e autoras não existem no dataset (3b); favicon (Fase 5); CRM-SC e prova social (Fase 0); plano da Vercel até ~10/11.

### Decisões relacionadas
- Decisão 007 — Ordem de entrega: preview completo antes do back-office.
- Decisão 009 — Blog público e contato sem backend: filtro no cliente, 404 composto, formulário que só monta a mensagem.

---

## v0.3.0 — 2026-10-29

### Lote 2: quatro páginas internas e as camadas que a Fase 4 vai animar

Fecha o Lote 2 da Fase 3 (plano v1.6). Entram Equipe (com âncoras por área), Método, Emagrecimento e Dra. Mayara, todas estáticas e transcritas de `docs/copy-site-v1.md` v1.1.1, e a estrutura de camadas por z-index global (Decisão 008) em todas as seções do site, Home e A Clínica incluídas. Site segue sem movimento, por desenho: o movimento é a Fase 4, agora antes do preview (Decisão 007).

### Adicionado
- **`lib/camadas.ts` — `CAMADA`:** `fundo` z-0, `grafismo` z-10, `conteudo` z-20, `header` z-30, única fonte dos z-index; importado por `Secao` e `Header`. Seções sem stacking context próprio; auditoria confirmou `overflow visible` e `z-index auto` nas 39 seções a 1440px.
- **`app/(site)/equipe/` + `components/equipe/` (Abertura, SecaoArea, CardProfissional, ChamadaFinal):** abertura com fileira de chips-âncora, cinco seções com `id` (`medicina`, `nutricao`, `psicologia`, `terapia`, `capilar`) alternando creme/bege, card de profissional com foto 4:3 opcional (sem foto, sem imagem nem placeholder), nome, atende, modalidade e Instagram em nova aba. "Dr. Arthur" só com "Cardiologia." e modalidade: a anotação interna do mock não vai ao ar.
- **`app/(site)/metodo/` + `components/metodo/` (Abertura, Pilares, Etapas, Diferenciais, ComoComeca, ChamadaFinal):** pilares em `<ol>` com quatro blocos próprios (viram `stack` na Fase 4), bloco verde com `grafismo-3`, Diferenciais em creme com o símbolo decorativo sobre fundo sólido (regra 9 do mapa), "Como tudo começa" com `home-1.jpg` e `clinica-2.jpg`.
- **`app/(site)/emagrecimento/` + `components/emagrecimento/` (Abertura, PortaDeEntrada, QuemFazParte, OQueFazParte, Programas, Faq, ChamadaFinal):** FAQ com `<details>`/`<summary>` nativos (sem client component, conteúdo sempre no DOM), ícone "+" que vira "×"; cards de programa com nome e uma frase, sem link, preço ou duração.
- **`app/(site)/dra-mayara-brasil/` + `components/dra-mayara/` (Abertura, Trajetoria, ComoAtende, FormacaoRegistro, ChamadaFinal):** única página com "~1h30"; "Formação e registro" mostra só a linha de registro (a anotação "a preencher" do mock não vai ao ar); chamada final com botão sólido bege e botão `contorno-bege`.
- **`lib/conteudo/equipe.ts`, `metodo.ts`, `emagrecimento.ts`:** texto literal da copy; `pilares.ts` ganhou `textoLongo` para o Método sem mexer no texto curto da Home.
- **`public/fotos/equipe-{arthur,bianca,talita,tania}.jpg`**, checksum igual à origem. `object-position`: Mayara `50% 12%`, Arthur `50% 18%`, Bianca `72% 30%` (mock); Tânia `50% 25%`, Talita `50% 22%` (fotos de 29/10, enquadradas pelo Codinho).
- **`Botao` variante `contorno-bege`:** borda via `inset-ring`, não `border`, para dois botões lado a lado terem a mesma altura (54px ambos a 1440, 51px a 375).
- **Itálicos do mock** em Equipe (H1 "você", chamada "começar"), Método ("jornada"), Emagrecimento (H1 "radicalismos", Programas "natural").

### Alterado
- **`components/ui/Secao.tsx`:** fundo como `div` absoluto em z 0 (não `background` da `<section>`), slot de grafismo absoluto em z 10 com `overflow-x: clip`, `Container` em z 20, `scroll-mt-20 menu:scroll-mt-24` para âncoras sob o header. API (`prop grafismo`) inalterada: nenhum arquivo de Home ou A Clínica precisou mudar pela estrutura.
- **`components/ui/Grafismo.tsx`:** strip de `<metadata>` em runtime removido (SVGs limpos na fonte desde a v0.2.0); comentário atualizado.
- **`components/layout/Header.tsx`:** z-index vindo de `CAMADA.header`.
- **`components/home/Metodo.tsx`, `Dores.tsx` — regra 9 do mapa:** o grafismo-4 do Método foi para a base à direita (300px abaixo de `lg`, 380px acima), sem deslocamento negativo embaixo; a sangria do grafismo-4 de Dores caiu de 140px para 48px (o símbolo começa 64px abaixo do topo do bloco). Folga mínima medida: 16px em 375 e 768. TRAP: a regra 9 estava quebrada desde o Lote 1 e ninguém viu até o Alan apontar no responsivo.
- **Sangrias entre seções** (grafismo-4 de Dores no bloco do Método; ponta do grafismo-5 do Manifesto em Espaço) ficam: são o comportamento que a estrutura existe para produzir (Decisão 008, item 4).
- **`docs/copy-site-v1.md` v1.1.1:** atributos visuais do Lote 2 (grafismos, fundos, fotos, itálicos) corrigidos para bater com o mock seção a seção; a v1.1 tinha mapeado imagens pela lista de arquivos, não pela seção (erro do Claude, segundo ciclo seguido).

### Validação (β)
- **Codinho, 29/10 (Lote 2 e fecho):** `build` com e sem `.env.local` OK (sem env, só o `warn` da seção Blog); lint e `format:check` sem avisos; varredura em 94 arquivos com 0 ocorrências; `test:varredura` 2/2. HTML gerado: um `<h1>` por página, cinco `id` em `/equipe`, quatro `<details>` em `/emagrecimento`, zero "a confirmar/a preencher/informações", cinco `<em>` novos. Todos os `href="/equipe#…"` de Home, A Clínica e Emagrecimento resolvem para `id` existente; âncora `/equipe#psicologia` direta, vinda da Home e pelo chip chega com a seção a 80px (375) e 96px (1440) do topo. Auditoria 360 a 1920px nas seis páginas: sem rolagem horizontal, sem viúva, cards de mesma linha com mesma altura. Regra 9 medida por interseção de caixas (símbolo × grafismo) em Home e Método a 375/768/1024/1280/1440: zero interseções após o fecho. Antes/depois de Home e A Clínica pela estrutura de camadas: 0,05% a 0,11% dos pixels, só nas duas sangrias e no tom de bordas de 1px.
- **Claude, 29/10:** texto de `/equipe` lido no DOM de `localhost:3000` e conferido com a copy.

### Pendências reconhecidas
- **Peso do HTML com SVG inline cresce com as páginas:** Equipe 278 KB, Método 250 KB, Emagrecimento 268 KB, Dra. Mayara 175 KB (mesma causa da v0.2.0). Mitigação antes da Fase 4: simplificar os paths na origem e `<symbol>`/`<use>` nas repetições; medir no Lighthouse do preview.
- Header é `relative`; âncoras dependem de `scroll-margin-top` até o header virar sticky na Fase 4.
- Console de desenvolvimento com erros reportados pelo Alan e ainda não lidos; build, lint e varredura limpos. Ler no Lote 3a antes de assumir que são do ambiente.
- Dr. Arthur (sobrenome, CRM, descrição; "Cardiologia" só do mock), fotos de Alexandra, Gabriella e Beatriz, CRN/CRP, modalidade de Talita e Bianca, Folske × Folks, fatos da trajetória e formação da Dra. Mayara ("mais de 10 anos" vem do mock): pendências da clínica, na copy.
- "Para quem não é" (Emagrecimento) e "Origem e significado" (Método) estão no esqueleto v3 e não no mock v3.1; seguimos o mock; Amanda decide no pacote da Fase 6.
- Blog no preview sem post: estado vazio com "em breve", frase exata a entrar em `permitidos` no Lote 3a (Decisão 007, item 5).
- Herdadas vivas: links do header/footer para rotas do Lote 3a (404 até lá); Política de privacidade fora do footer; categorias e autoras não existem no dataset; favicon; Lighthouse Best Practices no preview; CRM-SC da clínica e prova social (Fase 0); plano da Vercel até ~10/11 (Supabase Pro adiado para o 3b).

### Decisões relacionadas
- Decisão 007 — Ordem de entrega: preview completo antes do back-office; admin segue a identidade sem o luxo do front.
- Decisão 008 — Camadas por z-index global; seções sem stacking context próprio.

---

## v0.2.0 — 2026-10-29

### Lote 1: o site deixa de ser placeholder; Sanity encolhe para o blog e a copy vira código

Fecha o Lote 1 da Fase 3 (plano v1.5) e materializa a Decisão 005: o Sanity passa a servir só o blog (`post`, `author`, `category`, campos idênticos aos da Spinhardi) e toda a copy institucional vive em código, com `docs/copy-site-v1.md` como fonte. Entram header, footer, componentes base, Home (8 seções visíveis) e A Clínica (6 seções), mais o Lote 1.1 de responsividade e os grafismos em SVG.

### Adicionado
- **`app/(site)/` — route group do site:** `layout.tsx` com Header, `<main>` e Footer; `page.tsx` (Home) e `clinica/page.tsx` vivem aqui. `/studio` fica fora do grupo, direto sob o layout raiz, ocupando a viewport inteira. Motivo: no primeiro build o Studio renderizou com header e footer do site e o CSS dele deformava o header (achado do Codinho).
- **`lib/conteudo/` — copy estruturada em código:** `clinica.ts` (nome, slogan, WhatsApp, Instagram, endereço, horário, responsável técnica, destino do CTA), `navegacao.ts`, `areas.ts`, `dores.ts`, `pilares.ts`, `passos.ts`, `manifesto.ts`. Arrays tipados, texto literal da copy v1.0.1. É o ponto de troca se a copy institucional um dia for para CMS: muda o módulo, não a página.
- **`components/layout/` — Header, Footer, Navegacao:** `Navegacao.tsx` é o único client component (estado ativo + menu mobile com `aria-expanded`); botão Agendar renderizado no servidor como children. Menu desktop a partir do breakpoint `--breakpoint-menu: 50rem` (800px), menor largura em que os cinco itens e o botão cabem numa linha. Footer sem o link de Política de privacidade até o Lote 3 (comentário no código); títulos de coluna em `h2`.
- **`components/ui/` — base compartilhada:** `Secao` (fundo bege/creme/verde, espaço normal/curto, slot de grafismo), `CabecalhoSecao`, `LinkTexto` (seta decorativa `aria-hidden`), `Grafismo`, `CardArea`, `GradeAreas` (mesmo array nas duas páginas), `CardDor`. `Botao` ganhou variantes verde/bege/contorno, tamanhos normal/pequeno e `next/link` em rota interna.
- **`components/home/` e `components/clinica/` — uma seção por arquivo** (nove e seis), para a Fase 4 animar seção a seção. Prova social não existe no código além de um comentário apontando para a copy §Home 8.
- **`components/blog/CardPost.tsx` + `tempoLeitura.ts`:** card de post e minutos de leitura (palavras dos blocos `block` do `body` ÷ 200, teto, mínimo 1). Seção Blog da Home lê os 3 posts mais recentes via `lib/sanity/queries.ts`; sem env, sem client ou com erro, não renderiza e registra um `console.warn` legível; sem post publicado, não renderiza. `export const revalidate = 60`, padrão do `(public)/blog/page.tsx` da Spinhardi. TRAP herdado da Spinhardi: fetch ao Sanity em build sem try/catch derruba o deploy.
- **`sanity/schemaTypes/author.ts`, `category.ts`:** espelho de `studio/schemas` da Spinhardi (nomes de campo em inglês, títulos em português). `author` ganhou `area` (lista fechada: Medicina, Nutrição, Psicologia, Terapia, Saúde capilar; valor igual ao rótulo), única extensão sobre o espelho, porque o site exibe a área da autora.
- **`public/fotos/` — 7 fotos do Lote 1** (`home-1`, `home-2`, `equipe-mayara`, `clinica-1` a `-4`), checksum igual à origem em `revisao_mock/r20261014/web/`.
- **`public/marca/grafismo-{3,4,5}.svg`:** vetorização dos PNGs (vtracer, linhas engrossadas 3px antes do traçado), um `<path>` por arquivo, `viewBox` próprio, `fill="currentColor"`, `fill-rule="evenodd"`. Fonte única dos grafismos.
- **`docs/copy-site-v1.md` (v1.0.1), `docs/mapa-movimento-v1.md` (v0.2), `docs/instrucao_codinho_lote1.md`.**

### Alterado
- **`app/globals.css` — escala tipográfica fluida:** tokens `--text-display`, `-h1`, `-h2`, `-h3`, `-lead`, `-corpo`, `-nota`, `-legenda`, `-eyebrow` em `clamp()` linear entre mobile e 1440px, cada um com `line-height`; `text-wrap: balance` em títulos e `pretty` em parágrafos; `--breakpoint-menu`. Nenhum degrau `text-4xl sm:text-5xl` sobrou nas páginas.
- **`components/layout/Container.tsx`:** largura máxima de 1240px (valor do mock) com respiro de 16px no mobile, em vez de `max-w-6xl`.
- **`components/ui/Grafismo.tsx` — SVG inline com fonte única:** server component lê `public/marca/grafismo-<n>.svg` no build (`readFileSync` a partir de `process.cwd()`), valida `viewBox` e `<path>`, injeta inline com classes; cor via `currentColor`; `aria-hidden`. Sem svgr, sem duplicar o `d` em TS.
- **`app/layout.tsx`:** só html/body, fontes, metadata e o `robots` temporário; Lora com `style: ["normal", "italic"]` (o `<em>` do H1 saía em itálico sintetizado).
- **`sanity/schemaTypes/post.ts`:** campos renomeados para o contrato da Spinhardi (`title`, `slug`, `author`, `mainImage{alt}`, `categories[]`, `publishedAt`, `excerpt`, `body`, `seoTitle`, `seoDescription`, `ogImage`); `categoria` enum da Decisão 004 (item 6) vira referência a `category`.
- **`sanity/structure.ts`:** Posts, Autoras, Categorias. **`sanity/schemaTypes/index.ts`:** exporta três tipos; `SINGLETONS` apagado. **`sanity.config.ts`:** removidos o import de `SINGLETONS`, o filtro de templates e o filtro de ações.
- **`lib/sanity/queries.ts`:** só o que o blog usa (lista publicada por `publishedAt desc` com `_createdAt` como reserva, post por slug, 3 mais recentes para a Home), com `author->` e `categories[]->`.
- **Fotos:** `object-position` por foto conforme o mock (hero `50% 20%`), proporções por breakpoint, hero no mobile limitado a 60% da altura da viewport, grade do Espaço em 2/4 colunas com proporção fixa; grids que colapsam recentralizam conteúdo.

### Removido
- `sanity/schemaTypes/area.ts`, `dor.ts`, `profissional.ts`, `programa.ts`, `siteConfig.ts` e as queries correspondentes (Decisão 005 supera a 004).
- `public/marca/grafismo-{3,4,5}-{claro,escuro}.png` (substituídos pelos SVGs; originais seguem em `docs/id_visual/`).
- `app/page.tsx` placeholder da v0.1.0 (movido com `git mv` para `app/(site)/page.tsx` e reescrito).

### Validação (β)
- **Lote 1 + fecho (Codinho, 29/10):** `npm run build` com e sem `.env.local`: `/` e `/clinica` estáticas (`/` com revalidate 60 no `prerender-manifest`), `/studio` estática com `force-static` desde o scaffold, `/api/revalidate` dinâmica. Sem env, um único `warn` legível: "[Home · Blog] Sanity não configurado: seção Blog não renderizada". Lint, `format:check`, varredura (57 arquivos, 0 ocorrências, incluindo HTML gerado) e `test:varredura` verdes. HTML gerado: Home com 8 seções, 1 H1, 1 `main`, 1 `header`, 1 `footer`; A Clínica com 6 seções, 1 H1 e "A Clínica" com `aria-current`. Após o route group, `/studio` sem `header`/`main`/`footer` do site. Itálicos (`<em>`) e setas `aria-hidden` presentes no HTML; dois CSS do build com `font-style: italic` na `@font-face` da Lora. Menu mobile a 375px abre e fecha com `aria-expanded` alternando.
- **Copy (Claude, 29/10):** texto da Home lido no DOM de `localhost:3000` e conferido linha a linha com `docs/copy-site-v1.md`.
- **Sanity na nuvem (conector, 29/10):** projeto `04bzsv4z`, dataset `production`, nenhum schema deployado, nenhum documento. Nada do scaffold de seis tipos vazou para a nuvem.
- **Lote 1.1 (Codinho, 29/10):** build com e sem `.env.local` exit 0 (sem env, só o `warn` esperado); lint e `format:check` limpos; varredura em 60 arquivos (app 8, components 29, lib 11, sanity 5, 3 SVGs, 4 HTML) com 0 ocorrências; `test:varredura` 2/2. Grep de `grafismo-[0-9]` em código: 0; grep de `text-[`, `text-xs..9xl`, `leading-[`, `tracking-[` e hex em `components/**` e `app/(site)/**`: 0. Auditoria em 360, 390, 414, 768, 834, 1024, 1180, 1280, 1440 e 1920px, antes e depois: viúvas zeradas (`balance` também em `h3`), botões e blocos recentralizados no mobile, foto do hero a 343×429 em 375px (48% da viewport) e teto de 28rem/60svh, conteúdo crescendo de 944px (1024) a 1240px (1440+), navegação em linha a partir de 834px (largura necessária medida: 755px), sem rolagem horizontal em nenhuma largura. Capturas e `auditoria-antes/depois.json` no scratch do Codinho.

### Pendências reconhecidas
- `corpo-mente-espirito-*.png` continua PNG (tem texto em Lora); vira SVG construído à mão quando o mapa de movimento pedir. Regra nova no mapa (item 9): o símbolo só fica sobre fundo sólido, nunca sobre grafismo (achado do Alan no responsivo).
- Links do header e do footer para `/equipe`, `/metodo`, `/emagrecimento`, `/blog`, `/contato`, `/dra-mayara-brasil`, `/atendimento-online` apontam para rotas dos Lotes 2 e 3; 404 esperado até lá. Link de Política de privacidade só entra no Lote 3.
- Categorias e autoras ainda não existem no dataset; criação única pelo conector antes do Lote 3. `npx sanity schema deploy` só no Lote 3.
- "Dr. Arthur" sem sobrenome e sem CRM (como no mock); Folske × Folks; modalidade de Talita e Bianca: pendências da clínica, registradas na copy.
- Herdadas da v0.1.0 ainda vivas: favicon aponta para o PNG do logo (Fase 5); Best Practices do Lighthouse medir no preview da Vercel; registro da clínica no CRM-SC e prova social seguem na Fase 0; plano do time Vercel (e agora Supabase Pro) até ~10/11.
- `@portabletext/react` entra no Lote 3 com o primeiro corpo de post.
- **Peso do HTML com SVG inline:** Home 389 KB (132 KB gzip) com 5 grafismos, A Clínica 267 KB (93 KB gzip); os paths traçados são densos. Mitigação antes da Fase 4: simplificar os paths na origem (re-traçar com menos pontos) e `<symbol>`/`<use>` para repetições (a Home repete o 4 e o 5). Medir no Lighthouse do preview antes de decidir.
- Dois papéis do mock colapsaram em um token: chamada final (40px) e faixa de emagrecimento (32px) viraram `h2` = 36px; H3 de 20 a 24px viraram 22px. Escala `--text-*` padrão do Tailwind não foi zerada porque a página de fallback do Studio usa `text-3xl`/`text-lg`.
- Movimento e camadas: nada implementado; contrato em `docs/mapa-movimento-v1.md` v0.2, estrutura entra no Lote 2.

### Decisões relacionadas
- Decisão 005 — Escopo do Sanity: só blog; copy institucional em código; back-office com Supabase Auth.
- Decisão 006 — Sistema de layout do front: route group, copy em `lib/conteudo/`, tipografia fluida por tokens, grafismos SVG inline com fonte única.

---

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
