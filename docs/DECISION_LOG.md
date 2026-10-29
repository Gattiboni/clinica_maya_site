# Decision log — site Clínica Maya

Uma decisão por regra de arquitetura ou contrato. Numeração contínua.

## Decisão 001 — Stack: Next.js 16 + Tailwind 4 + Sanity desde o dia 1, no padrão da Spinhardi

**Data:** 2026-10-29 · **Owner:** Alan

**Contexto.** A proposta inicial (27/10) era Astro estático com conteúdo em arquivos, pela performance por padrão. O Alan objetou: qualquer back mínimo viraria remendo e plugar Sanity depois seria refactor. Verificação no repo `Gattiboni/spinhardi_site` mostrou o padrão real da agência: Next 16, React 19, Tailwind 4, Sanity, Supabase, Resend. Uma pessoa só revisa e commita; dois frameworks na casa é dívida organizacional.

**Decisão.** (1) **Next.js 16, App Router, TypeScript estrito**, mesmas convenções da Spinhardi (sem `src/`, `@tailwindcss/postcss`, `cacheComponents` off): um playbook só para prompts, revisão e deploy. (2) **Renderização estática por padrão em todas as páginas**; client components só para movimento e formulário; `next/image`; fontes via `next/font` — guarda-corpo que preserva o motivo de ter cogitado Astro. (3) **Sanity desde o dia 1** para todo conteúdo (equipe, áreas, dores, programas, posts, config): se é o destino, começar com arquivos e migrar é o refactor a evitar; a gestão mensal (Etapa 2 do contrato) publica sem PR. (4) **Tailwind 4 com tokens em `@theme`** e paleta padrão desligada: só as quatro cores da marca existem. (5) **Dependências entram com a feature, nunca antes**: Supabase, Resend, Recharts e `@portabletext/react` ficam fora até haver uso.

**Alternativas descartadas.** Astro + content collections (tecnicamente ideal para 10 páginas, mas segundo framework na agência; reavaliar só se a Spinhardi migrar); Next com conteúdo em arquivos e Sanity depois (refactor programado); CSS próprio sem Tailwind (consistência com a Spinhardi pesou mais).

---

## Decisão 002 — Varredura regulatória como gate automático de CI

**Data:** 2026-10-29 · **Owner:** Alan (script e ajustes de regex: Codinho)

**Contexto.** Durante os mocks (v1 a v3.1) a verificação de termos vetados (CFM, decisões da gestora, regras de linguagem da cliente) foi manual, rodada pelo Claude sobre cada export. Com código, texto nasce em muitos lugares e um deslize chega ao ar sem ninguém ler.

**Decisão.** (1) **`scripts/varredura.mjs` lê uma config externa (`varredura.config.json`)** com regex vetadas, exceções exatas e regra de H1 único; mudar regra é editar JSON, não código. (2) **Varre fonte e build:** `app/`, `components/`, `lib/`, `sanity/`, SVGs e o HTML gerado em `.next/server/app`, ignorando `<script>` (payload do React) e o HTML do Studio. (3) **Regex de termos curtos levam `\b`** (`\bTCC\b`, `\b[0-9]+ ?kg\b`): sem isso, ids de build e base64 casam em todo build — furo pego pelo Codinho no primeiro `npm run build`. (4) **`test:varredura` prova o gate** injetando termo e exigindo falha; CI roda os dois em todo PR e bloqueia merge. (5) **Conteúdo do Sanity não é varrido por este script**: o texto editado no Studio precisa do próprio gate (validação de campo ou webhook), a definir quando o Studio estiver em uso.

**Alternativas descartadas.** Lint de prosa genérico (Vale, textlint) com dicionário (dependência e config para o mesmo resultado); varrer só a fonte (perde texto montado em runtime e placeholders de dados); confiar em revisão humana (é o que se tinha nos mocks e exigia uma pessoa lendo tudo a cada rodada).

---

## Decisão 003 — Propriedade e hospedagem: Vercel no login da agência, Sanity na conta da clínica, domínio e DNS no Wix

**Data:** 2026-10-29 · **Owner:** Alan

**Contexto.** O contrato diz "tudo fica com a cliente". A verificação no Wix (29/10) mostrou que o domínio é `clinicamaya.com` (com y; a grafia "clinicamaia" que circulou desde agosto era erro de transcrição automática), renova em 22/10/2028, sem e-mail, DNS no próprio Wix. A documentação da Vercel (set/2026) diz: Hobby é não comercial; Password Protection custa US$ 20/mês por projeto no Pro; Vercel Authentication e Shareable Links existem em todos os planos. Foi criada a conta técnica `clinicamaya.digital@gmail.com`, com recuperação ligada ao `clinicamaya.ac@gmail.com` da clínica.

**Decisão.** (1) **Time Vercel `clinica-maya` sob o login do Alan**, como a Spinhardi: já é isolado por natureza e o Pro permite transferir depois; criado em Pro Trial, com decisão de plano antes do 12º dia. (2) **Produção só em Pro**, com cartão da clínica, antes de apontar o DNS: fair use do Hobby proíbe uso comercial. (3) **Previews fechados com Vercel Authentication e abertos à gestora e à cliente por Shareable Link**, sem senha paga e sem conta para elas. (4) **Sanity na conta `clinicamaya.digital@gmail.com`**, como a Spinhardi faz com a conta do cliente: ferramentas de blog e back-office da Spinhardi são reaproveitáveis trocando credenciais, ambiente e identidade. (5) **Domínio e DNS continuam no Wix**: apontar para a Vercel é trocar os 3 registros A da raiz e o CNAME de `www`; nameservers não mudam, para a cliente manter controle e poder ligar e-mail (MX) sem tocar na Vercel. (6) **Transcrição automática não é fonte de grafia nem de dado exato** (mesmo princípio vale para qualquer material gerado por IA sem verificação).

**Alternativas descartadas.** Time Vercel na conta da clínica desde o início (Hobby não permite membros; o Alan precisaria operar pelo login da cliente o tempo todo); projeto no time Gattiboni Enterprises com transferência no go-live (uma operação a mais sem ganho); nameservers na Vercel (concentra DNS fora da conta da cliente); registrar `clinicamaya.com.br` (desnecessário, o `.com` já é da clínica).

---

## Decisão 004 — Modelo de conteúdo no Sanity espelha o esqueleto v3; detalhes de programa existem mas não se exibem

**Data:** 2026-10-29 · **Owner:** Alan (schemas: Codinho, a partir da instrução de scaffold)

**Contexto.** O esqueleto v3 (13/10) define as entidades do site. O briefing da gestora (29/09) e a cliente (10/10) decidiram que o site não mostra comparativo, duração, número de consultas nem preço de programa, mas esses dados existem e importam para o comercial e para um CRM futuro.

**Decisão.** (1) **Seis tipos, nem mais nem menos:** `siteConfig`, `area`, `profissional`, `dor`, `programa`, `post`; nenhum campo fora do esqueleto, exceto o que a instrução de scaffold cravou (`slug` em `programa`). (2) **`programa.exibirDetalhes` default false** esconde duração e consultas no Studio e nas páginas; o dado fica guardado, a exibição é um boolean, não um deploy. (3) **`profissional.publicavel` e `programa.ativoNoSite` default true; `aConfirmar[]` como lista livre de strings**: pendência de dado é atributo do documento, não lembrete em chat. (4) **Só nome, slug e título são obrigatórios**: o conteúdo do mock tem lacunas conhecidas e o schema não pode impedir o cadastro parcial. (5) **`alt` de imagem entra como objeto dentro de `image` no primeiro uso real** (Lote 1 ou 3), não antes; nome da profissional e título do post servem de fallback. (6) **`categoria` de post é enum com as quatro do briefing**, não documento: categorias não são conteúdo editável nesta fase.

**Alternativas descartadas.** Conteúdo em arquivos com migração posterior (Decisão 001); campos obrigatórios completos (bloquearia o cadastro do mock); categoria como documento referenciado (flexibilidade sem demanda; reavaliar se o blog pedir categorias novas).

---

## Decisão 005 — Escopo do Sanity: só blog; copy institucional em código; back-office com Supabase Auth, no padrão da Spinhardi. Supera a 004 e o item (3) da 001

**Data:** 2026-10-29 · **Owner:** Alan

**Contexto.** As Decisões 001 (item 3) e 004 presumiram Sanity para todo o conteúdo do site, com seis tipos, e a Fase 2 do plano v1.3 previa carregar a copy do mock como documentos. A presunção nasceu de um handoff de sessão que não registrou o escopo definido pelo Alan: o Sanity entra na Maya no mesmo papel que tem na Spinhardi. Verificação no repo `spinhardi_site` (29/10): Sanity guarda só `post`, `author`, `category`; copy institucional é hardcoded nos `.tsx` (pendência lá registrada e aceita); posts entram pelo `/admin/blog` (Supabase Auth, papéis admin/editor, write client server-only) ou pelo Studio; nenhum seed ou NDJSON existiu. Fatos verificados em 29/10: Supabase é Free ou Pro (US$ 25/mês), sem degrau intermediário, e Free pausa após 7 dias sem atividade (a Spinhardi registrou o mesmo na D009 dela); Sanity Free não tem papel Editor, só Administrator e Viewer. Conector Sanity do Claude migrado para a conta da clínica (`whoami`: `clinicamaya.digital@gmail.com`, vê só `04bzsv4z`).

**Decisão.** (1) **Sanity só para o blog:** três tipos, `post`, `author`, `category`, espelhando `studio/schemas` da Spinhardi (com `alt` em imagem, `excerpt`, `seoTitle`, `seoDescription`, `ogImage`); `siteConfig`, `area`, `profissional`, `dor` e `programa` saem do schema no Lote 1, junto com as queries mortas de `lib/sanity`. (2) **Copy institucional em código**, nos `.tsx`, com fonte revisável em `docs/copy-site-v1.md`: volume de edição baixo e time pequeno; editar texto institucional é commit do Alan, custo aceito e registrado (mesma pendência que a Spinhardi carrega). (3) **Back-office `/admin/blog` com Supabase Auth e papéis (admin/editor)**, write client server-only para o Sanity, mesma dinâmica e código-referência da Spinhardi (`lib/blog/actions.ts`, `lib/sanity/write-client.ts`), com a identidade visual da Maya: quem produz conteúdo (gestora, agência, pessoal de conteúdo) loga no site da clínica com acesso delimitado por papel; ninguém cria conta Sanity. (4) **Supabase entra no Lote 3, em Pro desde o primeiro login real** (US$ 25/mês, custo da cliente, decidido junto com o Vercel Pro até ~10/11): Free pausa em 7 dias e um admin usado semanalmente cairia nisso; é o mesmo Supabase que recebe CRM e agenda depois (incrementalidade, mesmo princípio da Decisão 001, item 5: a dependência entra com a feature, e a feature é esta). (5) **Varredura no publicar:** a server action de publicação roda `varredura.config.json` sobre título, resumo e corpo antes de gravar e recusa com a lista de ocorrências; fecha o item (5) da Decisão 002. É filtro de termos, não revisão: o pacote da Fase 6 e a revisão humana continuam sendo o controle. (6) **`/studio` embutido permanece** como superfície técnica (Alan, Claude), não de operação; não entra no handoff da gestora. (7) **Não há carga inicial de conteúdo**, o que encerra a decisão (a)/(b) da v1.3 sem exigir o Alan como membro do projeto da cliente; o conector na conta da clínica serve para verificação. (8) **Projeto Supabase na conta da clínica**, como o Sanity (Decisão 003, item 4).

**Alternativas descartadas.** Sanity para toda a copy (Decisão 004: ajuda na edição, mas o volume não justifica treinar quem não tem tempo nem expertise; reavaliar se a edição institucional virar rotina); só Studio para o blog, sem `/admin` (sem papéis próprios, tela genérica, gate só por webhook depois de publicado, e uma conta Sanity por pessoa de conteúdo); Supabase Free (pausa semanal em preview e produção); auth sem Supabase, Auth.js ou similar (segundo playbook de auth na agência, e o CRM futuro pediria Supabase de todo modo); carga inicial por MCP ou NDJSON (sem objeto: não há conteúdo inicial).

---

## Decisão 006 — Sistema de layout do front: route group `(site)`, copy em `lib/conteudo/`, tipografia fluida por tokens, grafismos SVG inline com fonte única

**Data:** 2026-10-29 · **Owner:** Alan (implementação: Codinho, Lotes 1 e 1.1)

**Contexto.** O Lote 1 foi a primeira página real. Três coisas apareceram no build que o scaffold não tinha decidido: o Studio herdou header e footer do site; a tipografia por degraus de breakpoint quebrava mal entre larguras e não recentralizava; os grafismos em PNG (dois arquivos por grafismo, claro e escuro) não serviam para o movimento previsto no mapa (cor por contexto, animação de `<path>`). O mock v3.1 define 1240px de largura de conteúdo e `object-position` por foto, mas não tem versão mobile.

**Decisão.** (1) **Route group `app/(site)/`** com o layout de header, `<main>` e footer; o layout raiz fica só com html/body, fontes, metadata e o `robots` temporário; `/studio` vive fora do grupo e ocupa a viewport inteira. Mesma solução da Spinhardi. (2) **Copy institucional em `lib/conteudo/`**, um módulo tipado por lista e um para dados globais, texto literal de `docs/copy-site-v1.md`; páginas importam, nunca redigem (herda a Decisão 005, item 2). (3) **Tipografia por tokens fluidos em `@theme`**: um token `--text-<papel>` com `clamp()` linear entre mobile e 1440px e `line-height` próprio; nenhum tamanho de fonte fora dos tokens; `text-wrap: balance` em títulos, `pretty` em parágrafos, largura de parágrafo em `ch`, sem `hyphens: auto`. (4) **Largura de conteúdo 1240px no `Container`**, respiro 16px no mobile; header, footer e seções usam o `Container`, sem largura própria. (5) **Breakpoint nomeado `--breakpoint-menu` (50rem)**: menor largura em que a navegação cabe numa linha; usado só no header. (6) **Grafismos como SVG com fonte única em `public/marca/`**: `Grafismo.tsx` (server component) lê o arquivo no build e injeta inline, cor via `currentColor`, `fill-rule="evenodd"` preservado, `aria-hidden`; sem svgr (dependência), sem copiar o `d` para TS (duas fontes). Os SVGs foram traçados dos PNGs com linhas engrossadas 3px; em tamanho grande o traço sai mais encorpado que o original, aceito. (7) **Um client component por necessidade real**: `Navegacao.tsx` (estado ativo e menu mobile); todo o resto é server component. (8) **Seção = um arquivo** em `components/<pagina>/`, para a Fase 4 animar por seção sem reabrir páginas.

**Alternativas descartadas.** Header e footer no layout raiz com o Studio escondendo-os por CSS (gambiarra; o CSS do Studio é dele); degraus de breakpoint para tipografia (foi o que quebrou); svgr para SVG como componente (dependência nova para um problema que `readFileSync` resolve); `<img src="…svg">` (não recolore via CSS, não anima `<path>`); copiar os `d` dos SVGs para um módulo TS (duas fontes de verdade); `hyphens: auto` em pt-BR (hifenização imprevisível em nomes próprios e termos clínicos).

---

## Decisão 007 — Ordem de entrega: preview completo (páginas + movimento) antes do back-office; admin segue a identidade sem o luxo do front

**Data:** 2026-10-29 · **Owner:** Alan

**Contexto.** O plano v1.5 colocava o `/admin/blog` com Supabase no Lote 3, antes do movimento e do preview. A gestora e a cliente só vão publicar depois de revisar o front inteiro, revisão que leva mais de uma semana; até lá o admin seria código parado e o Supabase Pro, custo parado. A Fase 6 já exigia "estrutura, conteúdo e movimento prontos" para a aprovação em pacote único.

**Decisão.** (1) **Lote 3 dividido em 3a e 3b:** 3a entrega o que a paciente vê (Atendimento on-line, Contato com `wa.me`, 404, Política de privacidade, Blog público); 3b entrega o back-office (Supabase Auth + papéis, `/admin/blog`, varredura no publicar, categorias e autoras, `schema deploy`, webhook) e **entra na fila depois da aprovação da Fase 6**. (2) **Fase 4 (movimento) vem antes da Fase 6**: o preview que as duas revisam já tem o movimento do mapa. (3) **Supabase Pro só quando o 3b começar** (mesma regra da Decisão 005, item 4, deslocada no tempo); a decisão de ~10/11 fica só com a Vercel. (4) **Admin usa a identidade da marca em tokens de cor e tipografia, e só isso:** sem mapa de movimento, sem grafismos, sem camadas, sem transições. Porte do código da Spinhardi com a identidade trocada. (5) **Blog no preview:** sem post publicado, a lista mostra um estado vazio com "em breve", que o Alan considera o mais honesto por ora; a frase exata entra em `permitidos` da varredura (a regra que veta "em breve" existe para não anunciar serviço futuro, não para um blog vazio). Se a gestora entregar os 3 posts reais já pendentes, o Claude cria categorias e autoras pelo conector e carrega os posts na conta da clínica.

**Alternativas descartadas.** Admin antes do preview (código e custo parados por semanas); posts de exemplo inventados para o preview (conteúdo fabricado em ambiente que pode vazar e que a varredura não cobre); esconder o Blog do menu até haver post (o menu é o do briefing e a Amanda precisa revisar o blog no preview); estado vazio sem "em breve" (proposta do Claude; o Alan preferiu a frase direta).

---

## Decisão 008 — Camadas por z-index global: fundo 0, grafismo 10, conteúdo 20, header 30; seções sem stacking context próprio

**Data:** 2026-10-29 · **Owner:** Alan (implementação: Codinho, Lote 2)

**Contexto.** O mapa de movimento v0.2 descreve um "mundo" de grafismos atrás de folhas que passam por cima. Implementá-lo como plano `fixed` exigiria folhas com margens laterais, mudança visual que o mock não tem e que só faz sentido com movimento. Era preciso uma estrutura que entregasse o entrelaçamento (grafismo cruzando a fronteira entre seções) sem alterar o visual do Lote 1 e que a Fase 4 pudesse animar sem reabrir seção.

**Decisão.** (1) **Quatro camadas como utilitários de z-index em `lib/camadas.ts`** (`CAMADA.fundo` z-0, `grafismo` z-10, `conteudo` z-20, `header` z-30), única fonte; `Secao` aplica as três primeiras, `Header` a última; footer e Fase 4 importam daqui. (2) **`Secao` não cria stacking context**: sem `z-index`, `transform`, `filter`, `opacity < 1`, `isolation` ou `contain: paint`; o fundo é um `div` absoluto em z 0, não `background` da `<section>`; o slot de grafismo é absoluto em z 10 com `overflow-x: clip` (deslocamento lateral negativo não gera rolagem; o vertical sangra); o `Container` leva z 20. Resultado: um grafismo sangra sobre o fundo da seção vizinha e fica sob o conteúdo dela. (3) **O z-index fica no slot, não no `Grafismo`**: o footer usa `Grafismo` fora de `Secao` e em z 10 ele passaria por cima do texto (furo pego pelo Codinho). (4) **Sangria é comportamento, não bug**: as duas que apareceram em Home e A Clínica ficam; só a regra 9 do mapa (símbolo corpo-mente-espírito sempre sobre fundo sólido) limita onde um grafismo pode chegar, resolvida por posição e deslocamento, nunca por prop que desliga a estrutura. (5) **`scroll-margin-top` igual à altura do header** em toda `Secao`, para âncoras (`/equipe#psicologia`) chegarem com o título visível; vale até o header virar sticky na Fase 4. (6) **`fixed` versus parallax e folhas com margens** são escolhas da Fase 4, com olho sobre o preview; a estrutura não as impede.

**Alternativas descartadas.** Mundo `fixed` atrás de folhas com margens (muda o visual antes do movimento existir); `overflow: visible` por seção com grafismo no layout da página (mapa v0.1; mesmo resultado com mais acoplamento); z-index dentro do `Grafismo` (quebra o footer); prop `sangria` para desligar o comportamento por seção (gambiarra que esconde o problema de posição; reavaliar só se a Fase 4 pedir).

---
