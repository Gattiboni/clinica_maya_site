# Plano de execução — site Clínica Maya

**v1.5 · 29/10/2026** (v1.4, v1.3, v1.2, v1.1 e v1.0 anteriores) · checklist executável · repo: `github.com/Gattiboni/clinica_maya_site`
Responsável entre parênteses: (Alan) (Claude) (Codinho) (Amanda) (Cliente). `[x]` = concluído. Este arquivo é o estado do projeto; quem abrir sabe em que pé estamos.

## Changelog v1.5

- **Lote 1 construído e aceito, aguardando commit (v0.2.0):** schema com três tipos, `lib/conteudo/`, header, footer, componentes base, Home (8 seções visíveis; Blog oculto sem post; Prova social fora), A Clínica (6 seções). Fecho: route group `app/(site)/` com o layout do site e `/studio` fora dele; `SINGLETONS` removido do `sanity.config.ts`; Lora com itálico; itálicos e setas conforme o mock. Copy em `docs/copy-site-v1.md` v1.0.1.
- **Papel do `/studio` esclarecido:** editor nativo do Sanity, ferramenta técnica (Alan, Claude), sem papel operacional e fora do handoff. Verificado no código da Spinhardi: o `/admin/blog` **seleciona** categoria entre quatro nomes fixos em código (`CATEGORIES`) e exige que os documentos de categoria já existam (`resolveCategoryId` lança erro se faltarem); o formulário **não escreve autor**. Consequências no Lote 3: `CATEGORIES` com as quatro da copy; categorias e autoras criadas **uma vez**, pelo conector Sanity na conta da clínica; **select de autora no formulário** é adaptação necessária (o site exibe "Por {área da autora}").
- **Sanity na nuvem:** dataset `production` sem schema deployado e sem documentos (conector, 29/10). `npx sanity schema deploy` só no Lote 3, com os três tipos.
- **Fotos:** sete em `public/fotos/` (checksum igual à origem). `equipe-arthur`, `equipe-bianca`, `equipe-talita`, `equipe-tania` entram no Lote 2; Alexandra, Gabriella e Beatriz seguem faltando.
- **Dinâmica corrigida:** instrução ao Codinho sai como `.md` no chat (download), **não** no repo; versiona-se código e decisão. `docs/instrucao_codinho_lote1.md` fica como exceção já escrita.
- **Achados visuais do Alan sobre o Lote 1:** página estática demais (sem camadas nem movimento, esperado antes da Fase 4), textos quebrando mal no responsivo, fotos e elementos sem recentralizar, tipografia que não escala. Vira **Lote 1.1** (correções nos componentes compartilhados, antes do Lote 2) e antecipa a coleta de referências da Fase 4 para agora, com regras de camadas definidas antes do Lote 2.
- Erro registrado: o aceite do Lote 1 afirmou `/studio` dinâmico; a rota tem `force-static` desde o scaffold. Conferir o build antes de afirmar estado de rota.

## Changelog v1.4

- **Escopo do Sanity corrigido: só blog.** A v1.3 (e as Decisões 001, item 3, e 004) presumiam Sanity para toda a copy institucional. O Alan corrigiu em 29/10: o Sanity entra na Maya no mesmo papel que tem na Spinhardi (blog), e a copy institucional (áreas, equipe, dores, programas, textos de página) vive em código, como na Spinhardi. Motivo: volume de edição baixo, time pequeno, ninguém a treinar em Studio. **Decisão 005** supera a 004 e o item (3) da 001. A presunção veio de um handoff de sessão que não registrou o escopo; erro de documentação, não de arquitetura.
- **Verificação na Spinhardi (29/10):** lá o Sanity guarda só `post`, `author`, `category`; copy institucional é hardcoded nos `.tsx` (pendência registrada e aceita); posts entram pelo `/admin/blog` (Supabase Auth, papéis admin/editor, write client server-only) ou pelo Studio; nenhum NDJSON ou seed existiu.
- **Blog com back-office próprio, como a Spinhardi:** `/admin/blog` com Supabase Auth e papéis, write client server-only para o Sanity, identidade visual da Maya. Quem produz conteúdo (gestora, agência) loga no site da clínica com acesso delimitado; ninguém cria conta Sanity. Supabase entra no Lote 3, porque a feature que o pede é esta.
- **Gate regulatório do blog resolvido no desenho:** a server action de publicação roda a `varredura.config.json` antes de gravar o post; fecha o item (5) da Decisão 002. Webhook pós-publicação descartado.
- **Supabase Pro desde o primeiro login real** (US$ 25/mês, cliente), não desde o go-live: Free pausa após 7 dias sem atividade (verificado em supabase.com/pricing em 29/10; a Spinhardi registrou o mesmo na D009 dela). Não existe degrau de US$ 5. Entra na conversa de planos até ~10/11, junto com o Vercel Pro.
- **Decisão (a)/(b) de carga inicial no Sanity morre:** não há conteúdo inicial a carregar. Conector Sanity do Claude passou para a conta da clínica (`clinicamaya.digital@gmail.com`; `whoami` confirma e vê só `04bzsv4z`). Serve para verificação, não para criar conteúdo. Fato que pesou: Sanity Free não tem papel Editor, só Administrator e Viewer.
- **Schema corta de seis tipos para três**, espelhando `studio/schemas` da Spinhardi (inclui `alt` em imagem, `excerpt`, `seoTitle`, `seoDescription`, `ogImage`). `/studio` embutido permanece como superfície técnica do Alan e do Claude, não da operação.
- Fase 2 encolhe para copy final em código e bios; Fase 3 Lote 1 absorve o corte de schema; Lote 3 ganha o `/admin/blog`.

## Changelog v1.3

- **Fase 1 fechada e no ar.** Scaffold commitado (`9bb760a`, v0.1.0), CI verde, produção em `https://clinica-maya-site.vercel.app`, Sanity ligado, Studio em `/studio` listando os seis tipos.
- **Vercel: corrige a v1.2.** O time `clinica-maya` foi criado **sob o login do Alan** (como a Spinhardi), não na conta da clínica: Hobby não permite membros e o Alan operaria pelo login da cliente o tempo todo. Pro permite transferir depois. Nasceu em **Pro Trial de 14 dias (29/10)**; decisão de plano antes de ~10/11. Registrado na Decisão 003.
- **Sanity na conta da clínica** (`clinicamaya.digital@gmail.com`): organização "Clínica Maya", projeto `clinica-maya-site`, id `04bzsv4z`, dataset `production`, CORS para `https://clinica-maya-site.vercel.app` e `http://localhost:3000` (e `:3333`, auto-criado, mantido). Trial de 30 dias cai para Free sozinho (~28/11); Free basta.
- **Proteção:** a Vercel liga **Standard Protection por padrão**: URLs únicas de deploy e previews de branch exigem login; só o domínio de produção é público. Para o placeholder, em vez de fechar produção, entrou **`noindex, nofollow` temporário no layout raiz** (`2f36dae`), com comentário literal mandando remover no go-live. Deployment Protection paga descartada; Shareable Link fica para a Fase 6.
- **Dinâmicas:** commit direto na `main`, sem PR (time de um). CI roda no push. Branch só se o Codinho for commitar com autorização prévia.
- **Vercel MCP:** o Claude opera o time `clinica-maya` pela conexão do Alan (autorizado em 29/10): env vars, redeploy, verificação. O Codinho **não** recebe CLI, plugin nem MCP da Vercel (prompt "Set up Vercel" da Vercel ignorado de propósito: daria ao agente poder de mutação em todos os times).
- Apêndice A: "integrative-care" trocado por "multidisciplinary" no prompt; a palavra é vetada até em material interno, para não vazar.

## Changelog v1.2

- Vercel: o projeto nasce em um time próprio da clínica (Hobby, dono `clinicamaya.digital@gmail.com`), não no time da agência. **Superado na v1.3.** Previews protegidos por Vercel Authentication + Shareable Links (gratuito); senha em preview descartada (add-on de US$ 20/mês por projeto no Pro). Upgrade para Pro com cartão da clínica só na Fase 7, porque produção comercial exige Pro.
- Conta técnica criada: `clinicamaya.digital@gmail.com` (recuperação ligada a `clinicamaya.ac@gmail.com`). Dona de Sanity, GA4 e Search Console.
- Projetos órfãos da Vercel apagados; stack v1.1 aprovada; scaffold instruído (`docs/instrucao_codinho_scaffold.md`).
- CFM pesquisado na fonte primária (Resolução 2.336/2023): depoimentos permitidos com condições, preço de consulta permitido, site de clínica precisa exibir registro da clínica no CRM e Diretor(a) Técnico(a) Médico(a). Decisões derivadas na Fase 0 e Fase 2.

## Changelog v1.1

- Domínio resolvido: é `clinicamaya.com` (com y), na conta Wix da clínica, renovação 22/10/2028, sem e-mail, DNS no Wix. A grafia "clinicamaia" era erro de transcrição automática.
- Stack revisada após objeção do Alan e verificação da Spinhardi (Next 16 + Tailwind 4 + Sanity): proposta alinhada ao padrão da agência, aguardando o OK final.
- Mock v3.1 varrido e aprovado em 29/10: é a referência visual do build.
- Fotos de 27/10 identificadas (Talita, Tânia) e convertidas; 11 fotos em `revisao_mock/r20261014/web/`.
- Dinâmicas de trabalho redefinidas (abaixo). Aprovações da Amanda viram um pacote só, no preview publicado.

## Dinâmicas de trabalho

- Codinho edita o working tree; **commit é humano** (Alan revisa e commita, direto na `main`, sem PR). Branch só se o Codinho for commitar com autorização prévia.
- Instrução ao Codinho sai como `.md` no chat (download), não no repo: versiona-se código e decisão, não instrução. Exceção já escrita: `docs/instrucao_codinho_lote1.md`.
- **Testes automatizados e navegação de verificação: Claude roda no Chrome**; Alan valida e revisa, não executa teste.
- **Menos etapas:** entregas em lotes que empilham funcionalidade testável; nada de micro-etapa que não testa nem empilha.
- **Aprovações da Amanda e da cliente: um pacote só**, sobre o preview publicado, com estrutura, conteúdo e movimento prontos. Nada trava esperando aprovação parcial.
- Nenhum deploy em produção sem varredura verde e sem o pacote de aprovação.
- Releases internas fecham com changelog + decision log (`docs/CHANGELOG.md`, `docs/DECISION_LOG.md`), sem release notes.

## Stack (v1.3, em uso)

| Decisão | Escolha | Por quê | Guarda-corpo |
|---|---|---|---|
| Framework | **Next.js 16, App Router, TypeScript**, mesmo padrão da Spinhardi | Um playbook só na agência: prompts do Codinho, revisão do Alan, Sanity e Vercel já conhecidos. Qualquer back mínimo (route handler, server action) nasce no lugar certo em vez de virar remendo | **Renderização estática por padrão** em todas as páginas; client components só para movimento e formulário; `next/image`; fontes self-hosted via `next/font` |
| Conteúdo | **Copy institucional em código** (`.tsx`, como na Spinhardi). **Sanity só para o blog** (`post`, `author`, `category`); Studio embutido em `/studio` como superfície técnica | Volume de edição institucional é baixo e o time é pequeno; treinar gente em Studio é custo sem retorno. Blog é o que a gestão mensal (Etapa 2) publica | Schemas espelham `studio/schemas` da Spinhardi (Decisão 005); **projeto Sanity na conta da cliente** (`04bzsv4z`, dataset `production`); ISR com revalidação por webhook (rota existe, webhook ainda não) |
| Back-office | **Supabase Auth com papéis (admin/editor) + `/admin/blog`**, mesma dinâmica da Spinhardi (`lib/blog/actions.ts`, `lib/sanity/write-client.ts`), identidade da Maya | Quem publica (gestora, agência de conteúdo) loga no site da clínica com acesso delimitado por papel; ninguém cria conta Sanity | Varredura roda no servidor antes de gravar (Decisão 002, item 5 fechado); **Supabase Pro desde o primeiro login real** (Free pausa em 7 dias); projeto Supabase na conta da clínica |
| Estilo | **Tailwind 4** com tokens da marca em `@theme`, como na Spinhardi | Consistência com a agência; tokens definidos uma vez | Nada fora dos tokens; sem azul (varredura garante) |
| Movimento | Decidir após referências (Apêndice A): GSAP ScrollTrigger, Motion ou CSS scroll-driven | Grafismos em camada própria com parallax; página inteira com dinâmica | `prefers-reduced-motion`; Lighthouse mobile ≥ 90 é gate |
| Hospedagem | **Vercel, time `clinica-maya` sob o login do Alan** (Pro Trial até ~12/11), projeto `clinica-maya-site`, produção = `main` | Isolado por natureza; transferível no Pro; Alan opera sem usar o login da cliente | Standard Protection (padrão): previews fechados, produção aberta com `noindex` até o go-live. Pro + cartão da clínica antes do DNS (fair use: Hobby é não comercial) |
| Agendamento | `wa.me` montado no cliente; sem backend de agenda hoje | Exigência do briefing | CRM entra como server action no formulário, sobre o mesmo Supabase do back-office, sem tocar nas páginas |
| Analytics | GA4 via Google Tag com Consent Mode + Vercel Analytics | Ads e LGPD | Propriedade em conta da cliente |
| Qualidade | **Varredura regulatória como script no repo, em CI** (`scripts/varredura.mjs` + config JSON) | O gate manual vira teste automático | Roda em push na `main`; posts do blog passam pela mesma config no servidor ao publicar (Decisão 005, item 5; implementação no Lote 3) |

Dependências da Spinhardi: **Supabase (auth e papéis) e `@portabletext/react` entram no Lote 3**, com o `/admin/blog` e o primeiro post. Resend e Recharts ficam fora até haver feature que os peça.

---

## Fase 0 · Decisões

- [x] Stack v1.1 aprovada (Next + Sanity desde o dia 1 + Tailwind 4) (29/10)
- [x] Conta técnica da clínica criada: `clinicamaya.digital@gmail.com`; Sanity, GA4 e Search Console nascem nela (29/10)
- [ ] (Alan) **Até ~10/11:** plano do time Vercel ao fim do Pro Trial: manter Pro (US$ 20/mês, cartão de quem?) ou cair para Hobby até a Fase 7
- [ ] (Alan) **Na mesma conversa:** Supabase Pro (US$ 25/mês, cliente) antes do primeiro login real no `/admin`; Free pausa após 7 dias sem atividade. Criar o projeto Supabase na conta `clinicamaya.digital@gmail.com` quando o Lote 3 for instruído
- [ ] (Amanda + Cliente) Confirmar se a ficha do Google Maps já pertence a `clinicamaya.ac@gmail.com`; se não, decidir qual conta será dona da ficha antes de qualquer convite de gestão
- [x] Domínio verificado e resolvido: `clinicamaya.com`, Wix, sem e-mail, DNS no Wix (29/10)
- [ ] (Amanda + Cliente) Prova social, agora com a regra conhecida (CFM 2.336/2023 permite depoimentos sóbrios, sem superioridade nem resultado): escolher (a) só nota agregada + link "ver avaliações no Google" ou (b) carrossel com avaliações selecionadas pela clínica. Recomendação: (a) agora
- [ ] (Amanda + Cliente) Registrar que não mostrar preço é decisão comercial, não regulatória (CFM permite divulgar valor de consulta): manter sem preço?
- [ ] (Cliente) Informar se a Clínica Maya, como pessoa jurídica, tem inscrição no CRM-SC (o site de clínica deve exibir registro do estabelecimento e Diretor(a) Técnico(a) Médico(a) com CRM)
- [x] Fotos de 27/10 identificadas: Talita e Tânia (29/10)
- [x] Escopo da bio da Talita: somente o que manual e briefing permitem; menos é mais; ajustes depois se precisar (29/10)
- [x] Mock v3.1 varrido e aprovado: referência visual do build (29/10)

## Fase 1 · Fundação técnica — **concluída em 29/10**

- [x] (Alan) Repo `Gattiboni/clinica_maya_site` criado (29/10)
- [x] (Alan) Projetos órfãos do Claude Design apagados da Vercel (29/10)
- [x] (Claude) Instrução de scaffold entregue: `docs/instrucao_codinho_scaffold.md` (29/10)
- [x] (Codinho) Scaffold executado; decisões reportadas e julgadas (regex `\b`, Studio fora da regra de H1, `@portabletext/react` removido, `AGENTS.md` ignorado, `alt` adiado) (29/10)
- [x] (Claude) Changelog v0.1.0 e Decisões 001 a 004 escritos; (Alan) commit `9bb760a` na `main`, CI verde (29/10)
- [x] (Alan) Time `clinica-maya` na Vercel sob o próprio login, Pro Trial; projeto `clinica-maya-site` importado do GitHub, produção = `main`; primeiro deploy READY (29/10)
- [x] (Alan) Organização "Clínica Maya" e projeto `clinica-maya-site` no Sanity, conta da clínica; id `04bzsv4z`, dataset `production`; CORS cadastrado (29/10)
- [x] (Claude) `NEXT_PUBLIC_SANITY_PROJECT_ID` e `NEXT_PUBLIC_SANITY_DATASET` na Vercel (Production + Preview + Development); redeploy; `/studio` entrega o Studio (29/10)
- [x] (Alan) `.env.local` na raiz do repo com os dois valores públicos; `SANITY_API_READ_TOKEN` e `SANITY_REVALIDATE_SECRET` vazios até precisar (29/10)
- [x] (Alan) Login no Studio em produção com a conta da clínica: seis tipos listados (29/10)
- [x] (Claude → Codinho → Alan) `noindex, nofollow` temporário no layout raiz, commit `2f36dae`, confirmado no ar (29/10)

## Fase 2 · Conteúdo

- [x] (Alan) Como os documentos entram no Sanity: **superado em 29/10 (v1.4)**. Sanity só blog; não há carga inicial. Decisão 005
- [x] (Claude) `docs/copy-site-v1.md` v1.0.1: global, header, footer, Home, A Clínica (29/10). Fonte que o Codinho transcreve; varredura cobre quando vira código
- [ ] (Claude) Copy v1.1: Equipe, Método, Emagrecimento, Dra. Mayara (Lote 2); v1.2: Atendimento on-line, Blog, Contato, 404, Política (Lote 3)
- [ ] (Claude) Redigir as bios do Dr. Arthur Hank e da Talita Porto no tom da casa e dentro das regras, com varredura; aprovação entra no pacote da Fase 6
- [x] (Claude) Sete fotos do Lote 1 em `public/fotos/` (29/10)
- [ ] (Claude) Quatro fotos da Equipe (`equipe-arthur`, `-bianca`, `-talita`, `-tania`) para `public/fotos/` no Lote 2; faltam Alexandra, Gabriella e Beatriz (clínica). `alt` de cada foto definido na copy
- [ ] (Claude) Política de privacidade base (LGPD, cookies, GA4, WhatsApp, login do back-office) para revisão jurídica no pacote da Fase 6
- [ ] (Amanda) Cobrar o que falta da clínica: fotos restantes, CRN/CRP, modalidade de Talita e Bianca, Folske × Folks, fatos da trajetória da Dra. Mayara, 3 posts reais
- [x] (Claude) Gate regulatório do conteúdo do blog: **definido na Decisão 005, item 5** (varredura no servidor ao publicar); implementação no Lote 3

## Fase 3 · Páginas (três lotes)

- [x] (Claude → Codinho) **Lote 1:** schema cortado para `post`, `author`, `category`; `lib/conteudo/`; header, footer, componentes base, Home, A Clínica; fecho com route group `app/(site)/` (29/10)
- [x] (Claude) Copy da Home conferida no DOM; evidências de build, varredura e DOM do Codinho aceitas (29/10)
- [ ] (Claude → Codinho) **Lote 1.1, antes do Lote 2:** correções nos componentes compartilhados a partir da lista do Alan: escala tipográfica fluida (`clamp`), quebra de texto (`text-wrap`), recentralização de fotos e elementos entre breakpoints (`object-position`, grids), breakpoint do menu (hoje 1024px), regras de camadas para grafismos (z-index, bleed entre seções) definidas com as referências da Fase 4
- [ ] (Alan) Changelog v0.2.0 + Decisão(ões) do lote; commit do Lote 1 + 1.1
- [ ] (Claude → Codinho) **Lote 2:** Equipe com âncoras, Método, Emagrecimento, Dra. Mayara
- [ ] (Claude) Testar lote 2; (Alan) revisar e commitar
- [ ] (Alan) Antes do Lote 3: projeto Supabase criado na conta da clínica; `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` e `SANITY_API_WRITE_TOKEN` (token de escrita criado na conta da clínica) em `.env.local` e na Vercel
- [ ] (Claude) Antes do Lote 3: criar pelo conector Sanity (conta da clínica) os quatro documentos `category` (Emagrecimento, Saúde mental, Saúde da mulher, Saúde capilar) e as `author` com `area`; `npx sanity schema deploy` dos três tipos
- [ ] (Claude → Codinho) **Lote 3:** Blog público e Post via Sanity (`@portabletext/react` entra aqui); **`/admin/blog` com Supabase Auth e papéis admin/editor, write client server-only, varredura no publicar**, porte do código da Spinhardi (`lib/blog`, `lib/sanity/admin.ts`, `PostForm`) com a identidade da Maya; adaptações necessárias: `CATEGORIES` da Maya e **select de autora** no formulário; Atendimento on-line, Contato com `wa.me`, 404, Política de privacidade
- [ ] (Claude) Testar lote 3; (Alan) revisar e commitar
- [ ] (Alan) Criar o webhook no Sanity (API → Webhooks) apontando para `/api/revalidate`, com `SANITY_REVALIDATE_SECRET` igual nos dois lados, quando a primeira página ler do Sanity

## Fase 4 · Movimento

- [ ] (Alan) **Antecipado para antes do Lote 2:** rodar o prompt do Apêndice A no Perplexity Pro e trazer 3 a 5 referências anotadas (o que gostou em cada uma: camadas, ritmo de scroll, tipografia)
- [ ] (Claude) Propor abordagem (biblioteca, padrões, limites) e as regras de camadas que o Lote 1.1 e o Lote 2 já seguem; (Alan) aprovar
- [ ] (Codinho) Grafismos em camada própria com parallax, reveals de seção, transições; `prefers-reduced-motion`
- [ ] (Claude) Testar em desktop e mobile no Chrome, Lighthouse mobile ≥ 90; (Alan) revisar e commitar

## Fase 5 · SEO, Ads, analytics

- [ ] (Codinho) Metadata por página, Open Graph, canonical, sitemap, robots, JSON-LD `MedicalClinic` e `Physician` sem claims
- [ ] (Codinho) Google Tag com Consent Mode e banner ligado à política de privacidade
- [ ] (Alan) GA4 e Search Console em conta da cliente
- [ ] (Amanda) Geografia das campanhas (Antônio Carlos × Grande Florianópolis) para o SEO local

## Fase 6 · Pacote de aprovação (preview publicado)

- [ ] (Alan) Gerar Shareable Link do deployment de preview para Amanda e Mayara (sem conta Vercel, sem senha; Standard Protection já fecha o preview)
- [ ] (Claude) Varredura final + Lighthouse + acessibilidade sobre o preview de produção
- [ ] (Amanda) Revisão completa do preview: estrutura, copy, bios, movimento, política de privacidade
- [ ] (Cliente) Aprovação final da Dra. Mayara no mesmo preview
- [ ] (Claude) Aplicar os ajustes do pacote em um lote; (Alan) revisar e commitar

## Fase 7 · Domínio e go-live

- [ ] (Cliente + Alan) Time Vercel em Pro com o cartão da clínica (produção comercial exige Pro; 1 assento)
- [ ] (Codinho → Alan) Remover o campo `robots` temporário de `app/layout.tsx` (comentário no código aponta este item); manter Standard Protection como está
- [ ] (Alan) Adicionar `clinicamaya.com` e `www` no projeto Vercel
- [ ] (Alan) No Wix, em Gerenciar registros DNS: trocar os 3 registros A da raiz pelo IP da Vercel e o CNAME de `www` para `cname.vercel-dns.com`. Nameservers continuam no Wix. Não há MX a preservar
- [ ] (Alan) Confirmar SSL e publicar `main`
- [ ] (Alan) Adicionar `https://clinicamaya.com` e `https://www.clinicamaya.com` nas CORS origins do Sanity
- [ ] (Amanda) Vincular o site às fichas do Google (clínica e Dra.) e ao Instagram

## Fase 8 · Entrega e pós

- [ ] (Alan) Entregar à cliente a conta técnica `clinicamaya.digital@gmail.com` (senha, 2FA, recuperação); decidir se o time Vercel é transferido para a conta da clínica e se o repo migra para uma organização GitHub da clínica ou permanece em Gattiboni com a cliente como colaboradora
- [ ] (Claude) Handoff: como publicar post no `/admin/blog`, convidar e remover editor, trocar foto de post; quem acessa o quê (Studio não entra no handoff da gestora)
- [ ] (Claude) Backlog: CRM no formulário (sobre o Supabase existente), agenda integrada, carrossel de avaliações curado (rota b), e-mail profissional no domínio, CFP e CFN para as bios da equipe, copy institucional para CMS só se a edição virar rotina (mesma pendência que a Spinhardi registra)

---

## Apêndice A · Prompt de referências (Perplexity Pro)

```
I'm building a website for a small Brazilian multidisciplinary clinic (medicine, nutrition, psychology, hair health) whose brand is warm and organic: beige background (#F7EFDF), deep green accent (#3F4F4F), earthy brown details (#755958), serif headlines (Lora) with sans body (Alegreya Sans), and a set of abstract organic line-art "grafismos" (flowing curves) that are part of the visual identity.

I need visual and technical references for two things:

1. Decorative organic shapes that live on their own layer in front of the page background, drift gently and respond to scroll with subtle parallax, so the page feels alive instead of flat. Not particles, not blobs, not 3D: thin organic line-art floating with depth. Please find 5 to 8 live websites (ideally wellness, clinics, boutique hospitality or editorial brands) that do this well, with URLs, and describe what each one does technically if known.

2. Scroll choreography for a long-form marketing site: section reveals, staggered card entrances, soft transitions between sections and between pages, that stay elegant and never gimmicky. Same deliverable: 5 to 8 live examples with URLs.

Then compare the main implementation routes for a Next.js 16 App Router site in 2026: GSAP with ScrollTrigger (now free), Motion (motion.dev), Lenis for smooth scrolling, and native CSS scroll-driven animations. For each: bundle size, browser support as of 2026, how it handles prefers-reduced-motion, interplay with React Server Components, and the impact on Core Web Vitals. Cite sources with links. I care about performance (this site must score 90+ on Lighthouse mobile and receive Google Ads traffic) more than about spectacle.
```

## Apêndice B · Pendências de conteúdo com dono

Avaliações do Google (Amanda) · fotos e registros das demais profissionais (clínica) · modalidade de Talita e Bianca (clínica) · Folske × Folks (clínica) · fatos da trajetória da Dra. Mayara (cliente) · prova social (CFM) · política de privacidade (jurídico) · 3 posts reais (Amanda) · geografia das campanhas (Amanda) · origem do nome, fora do site (cliente).

## Apêndice C · Identificadores (sem segredos)

| O quê | Valor |
|---|---|
| Repo | `github.com/Gattiboni/clinica_maya_site`, branch `main` |
| Vercel | time `clinica-maya` (`team_F6aOsxGwW2ppNJK6fTCGUstp`), projeto `clinica-maya-site` (`prj_6yoBgmmQQBn34fLFKMLrwgMNC6Zv`), produção `https://clinica-maya-site.vercel.app` |
| Sanity | org "Clínica Maya", projeto `clinica-maya-site`, id `04bzsv4z`, dataset `production`, Studio em `/studio` |
| Supabase | projeto a criar na conta `clinicamaya.digital@gmail.com` antes do Lote 3; Pro desde o primeiro login real |
| Contas | Sanity, Supabase e futuros GA4/Search Console: `clinicamaya.digital@gmail.com` · Wix (domínio): `clinicamaya.ac@gmail.com` · Vercel e GitHub: login do Alan |
| Domínio | `clinicamaya.com`, Wix, renova 22/10/2028, DNS no Wix (A 185.230.63.107 / .186 / .171; CNAME www → cdn3.wixdns.net; sem MX) |
| Commits | `9bb760a` scaffold v0.1.0 · `2f36dae` noindex temporário |
