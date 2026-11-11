# Graph Report - clinica_maya_site  (2026-11-11)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 951 nodes · 2241 edges · 61 communities (42 shown, 19 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 60 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c1a3d1bb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- varredura.mjs
- Layout raiz e página Equipe
- Assets da identidade visual
- Shell do site: Header, Footer, 404
- Contato e política de privacidade
- Home (/)
- CamadaGrafismos.tsx
- movimento.ts
- atendimento-online/page.tsx
- Secao
- (site)/page.tsx
- package.json
- Scripts de varredura regulatória
- CabecalhoSecao
- metodo/page.tsx
- CI e variáveis de ambiente
- Esqueleto v3 e regras de copy
- Plano de execução — site Clínica Maya
- tsconfig
- Página Atendimento on-line
- compilerOptions
- env
- Mapa de movimento: camadas e fotos
- Schemas Sanity do blog
- Post.tsx
- [slug]/page.tsx
- Secao.tsx
- Padrões de scroll-driven animation
- Seções da Home e conformidade CFM
- Decisão 010: CSS-first e Círculo Maya
- sanity.config.ts
- [[...tool]]/page.tsx
- dependencies
- CTA, WhatsApp e dados globais
- queries.ts
- scripts
- app/layout.tsx
- Esqueleto v0.2 (superado)
- client.ts
- v0.4.0 — 2026-10-29
- avaliacoes.ts
- PostCSS
- Padrão maskReveal
- Padrão wipe
- postcss.config.mjs
- app/page.tsx (placeholder)
- Clínica Maya — Site Project
- Blog (/blog e /blog/[slug])
- Política de privacidade (/politica-de-privacidade)
- C0 Fundo
- C2 Mídia
- C3 Conteúdo
- Componente: TituloDesencontrado
- Página: Blog
- Página: Dra. Mayara
- Primitiva: maskReveal
- Regra: Elemento LCP não anima na carga
- .env.example
- lib/dataExtenso.ts
- lib/tempoLeitura.ts

## God Nodes (most connected - your core abstractions)
1. `Secao()` - 100 edges
2. `Nevoa()` - 93 edges
3. `MOV` - 68 edges
4. `next` - 41 edges
5. `Botao()` - 33 edges
6. `CabecalhoSecao()` - 25 edges
7. `CamadaGrafismos()` - 25 edges
8. `Plano de execução — site Clínica Maya` - 23 edges
9. `LinkTexto()` - 21 edges
10. `react` - 20 edges

## Surprising Connections (you probably didn't know these)
- `Blog()` --references--> `Sanity Schema: author`  [INFERRED]
  app/(site)/blog/page.tsx → docs/plano-execucao-site-clinica-maya.md
- `Blog()` --references--> `Sanity Schema: category`  [INFERRED]
  app/(site)/blog/page.tsx → docs/plano-execucao-site-clinica-maya.md
- `Blog()` --references--> `Sanity Schema: post`  [INFERRED]
  app/(site)/blog/page.tsx → docs/plano-execucao-site-clinica-maya.md
- `Adicionado` --references--> `urlFor()`  [INFERRED]
  docs/CHANGELOG.md → lib/sanity/image.ts
- `Restrições duras (parar e reportar)` --references--> `generateMetadata()`  [INFERRED]
  docs/instrucao_codinho_noindex.md → app/(site)/blog/[slug]/page.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Coreografia de Movimento nas Páginas Internas** — docs_mapa_movimento_v1_pagina_metodo, docs_mapa_movimento_v1_pagina_online, docs_mapa_movimento_v1_componente_linhadesenhada, docs_mapa_movimento_v1_primitiva_stack, docs_mapa_movimento_v1_componente_camadagrafismos, docs_mapa_movimento_v1_componente_nevoa [EXTRACTED 0.90]
- **CSS-first Motion — Client Component Exceptions** — concept_css_motion, components_layout_mundo, components_layout_aoentrar, decision_010, decision_014 [EXTRACTED 0.90]
- **Profissionais da Equipe — Cardões, Pop-ups e Página de Equipe** — alexandra_invitti_person, gabriella_sponton_person, beatriz_nietsche_person, talita_porto_person, bianca_folzke_person, tania_guesser_person, dr_arthur_hank_person, dra_mayara_brasil_person [EXTRACTED 0.95]
- **Cognitive-Behavioural Therapy Books Referenced by Gabriella** — book_judith_beck_cognitive, book_aaron_beck_depressao, book_leahy_tecnicas_terapia_cognitiva, book_linehan_tcc_borderline, book_barlow_manual_clinico [EXTRACTED 0.95]
- **Gate de Performance e Acessibilidade** — docs_mapa_movimento_v1_gate_lighthouse, docs_mapa_movimento_v1_regra_lcp, docs_mapa_movimento_v1_regra_prefers_reduced_motion, docs_mapa_movimento_v1_tecnica_css_scroll_driven, docs_mapa_movimento_v1_componente_mundo [EXTRACTED 0.95]
- **Global Graphics Layer — No Stacking Context — Névoa Haze (interdependent constraints)** — components_layout_camadagrafismos, concept_no_stacking_context, components_ui_nevoa, components_ui_secao [EXTRACTED 0.95]
- **Família de variantes de cor do logo vertical com tagline (bege, marrom, negativa, positiva, verde)** — docs_id_visual_id_visual_logo_tagline_vertical_bege, docs_id_visual_id_visual_logo_tagline_vertical_marrom, docs_id_visual_id_visual_logo_tagline_vertical_negativa, docs_id_visual_id_visual_logo_tagline_vertical_positiva, docs_id_visual_id_visual_logo_tagline_vertical_verde, marca_logo_tagline_vertical [EXTRACTED 1.00]
- **Família de variantes de cor do logo vertical (bege, marrom, negativa, positiva, verde)** — docs_id_visual_id_visual_logo_vertical_bege, docs_id_visual_id_visual_logo_vertical_marrom, docs_id_visual_id_visual_logo_vertical_negativa, docs_id_visual_id_visual_logo_vertical_positiva, docs_id_visual_id_visual_logo_vertical_verde, marca_logo_vertical [EXTRACTED 1.00]
- **Série de retratos da equipe (equipe-*.jpg)** — public_fotos_equipe_arthur, public_fotos_equipe_bianca, public_fotos_equipe_mayara, public_fotos_equipe_talita, public_fotos_equipe_tania [EXTRACTED 1.00]
- **As 10 seções da Home, na ordem do esqueleto v3** — docs_esqueleto_site_clinica_maya_v3_hero, docs_esqueleto_site_clinica_maya_v3_areas_de_cuidado, docs_esqueleto_site_clinica_maya_v3_dores, docs_esqueleto_site_clinica_maya_v3_metodo_e_circulo_maya, docs_esqueleto_site_clinica_maya_v3_como_comeca, docs_esqueleto_site_clinica_maya_v3_faixa_emagrecimento, docs_esqueleto_site_clinica_maya_v3_secao_dra_mayara, docs_esqueleto_site_clinica_maya_v3_prova_social, docs_esqueleto_site_clinica_maya_v3_secao_blog, docs_esqueleto_site_clinica_maya_v3_chamada_final [EXTRACTED 1.00]
- **Regulatory Scan CI Pipeline** — scripts_varredura_mjs, scripts_varredura_config_json, scripts_test_varredura, github_workflows_ci [EXTRACTED 1.00]
- **Sistema de Camadas e Primitivas de Movimento** — docs_mapa_movimento_v1_camada_c0, docs_mapa_movimento_v1_camada_c1, docs_mapa_movimento_v1_camada_c2, docs_mapa_movimento_v1_camada_c3, docs_mapa_movimento_v1_camada_c4, docs_mapa_movimento_v1_primitiva_parallax, docs_mapa_movimento_v1_primitiva_drift, docs_mapa_movimento_v1_primitiva_tilt3d, docs_mapa_movimento_v1_primitiva_reveal, docs_mapa_movimento_v1_primitiva_scrub [EXTRACTED 1.00]
- **Clínica Maya Team and Context Images** — public_fotos_equipe_beatriz, public_fotos_equipe_gabriella, public_fotos_metodo_1 [INFERRED 0.75]
- **Fotos que compartilham a paleta quente e natural do site** — public_fotos_clinica_1, public_fotos_clinica_2, public_fotos_clinica_3, public_fotos_clinica_4, public_fotos_equipe_mayara, public_fotos_home_2 [INFERRED 0.85]
- **Série do espaço físico da clínica (clinica-*.jpg + home-1)** — public_fotos_clinica_1, public_fotos_clinica_2, public_fotos_clinica_3, public_fotos_clinica_4, public_fotos_home_1 [INFERRED 0.85]
- **Grafismos botânicos em linha fina, cada um em par claro (bege) / escuro (marrom)** — marca_grafismo_3, marca_grafismo_4, marca_grafismo_5, marca_motivo_botanico, marca_cor_bege, marca_cor_marrom [INFERRED 0.85]
- **Família do logo vertical Clínica Maya (5 cores × com/sem tagline)** — public_marca_logo_vertical_bege, public_marca_logo_vertical_marrom, public_marca_logo_vertical_negativa, public_marca_logo_vertical_positiva, public_marca_logo_vertical_verde, public_marca_logo_tagline_vertical_bege, public_marca_logo_tagline_vertical_marrom, public_marca_logo_tagline_vertical_negativa, public_marca_logo_tagline_vertical_positiva, public_marca_logo_tagline_vertical_verde, marca_logo_vertical [INFERRED 0.95]

## Communities (61 total, 19 thin omitted)

### Community 0 - "varredura.mjs"
Cohesion: 0.06
Nodes (43): app/globals.css, Brand Design Tokens (colours, fonts, radii), Regulatory Scan Gate, Decision 001 — Stack Choice, Decision 002 — Regulatory Scan as CI Gate, Decision 003 — Hosting & Ownership, Decision 004 — Sanity Content Model, Decision 005 — Sanity Scope: Blog Only (+35 more)

### Community 1 - "Layout raiz e página Equipe"
Cohesion: 0.07
Nodes (38): metadata, NaoEncontradoGlobal(), SiteLayout(), app/(site)/layout.tsx, NaoEncontrado(), AoEntrar(), Container(), ContainerProps (+30 more)

### Community 2 - "Assets da identidade visual"
Cohesion: 0.07
Nodes (42): Book: Depressão – Causas e Tratamento – Aaron T. Beck, Book: Manual Clínico dos Transtornos Psicológicos – David H. Barlow, Book: Cognitive Therapy – Judith S. Beck, Book: Técnicas de Terapia Cognitiva – Robert L. Leahy, Book: Terapia Cognitivo-Comportamental para Transtorno da Personalidade Borderline – Linehan, Clínica Maya, CardProfissionalProps, FUNDOS (+34 more)

### Community 3 - "Shell do site: Header, Footer, 404"
Cohesion: 0.09
Nodes (45): Corpo-Mente-Espírito (claro, linha bege), Corpo-Mente-Espírito (escuro, linha marrom), Grafismo 3 (claro) — folha/flor com haste, traço bege, Grafismo 3 (escuro) — folha/flor com haste, traço marrom, Grafismo 4 (claro) — padrão denso de folhas, traço bege, Grafismo 4 (escuro) — padrão denso de folhas, traço marrom, Grafismo 5 (claro) — três pétalas/folhas grandes, traço bege, Grafismo 5 (escuro) — três pétalas/folhas grandes, traço marrom (+37 more)

### Community 4 - "Contato e política de privacidade"
Cohesion: 0.05
Nodes (42): Adicionado, Adicionado, Adicionado, Adicionado, Alterado, Alterado, Alterado, Changelog — site Clínica Maya (+34 more)

### Community 5 - "Home (/)"
Cohesion: 0.08
Nodes (35): Esqueleto do site v0.2 (29/08, substituído pela v3), Página de campanha (/campanhas/[slug], Ads), Página Programas (/programas e /programas/[slug], removida na v3), Questões abertas v0.2 (preço, agenda das psicólogas, Maia × Maya, depoimentos), A Clínica (/clinica), Áreas de cuidado (seção 2 da Home), Atendimento on-line (/atendimento-online), Briefing de alterações da Amanda (29/09) · fonte que vence em conflito (+27 more)

### Community 6 - "CamadaGrafismos.tsx"
Cohesion: 0.08
Nodes (35): CamadaGrafismos(), CamadaGrafismosProps, COPIAS, Item(), CardArea(), CardAreaProps, FRAGMENTOS, FUNDOS (+27 more)

### Community 7 - "movimento.ts"
Cohesion: 0.15
Nodes (23): ChamadaFinal(), ChamadaFinal(), BLOCOS, PopupProfissional(), ConteudoPoliticaProps, Botao(), BotaoProps, Tamanho (+15 more)

### Community 8 - "atendimento-online/page.tsx"
Cohesion: 0.10
Nodes (24): AtendimentoOnline(), metadata, Abertura(), ComoFunciona(), Faq(), Coluna(), OQueMuda(), Faq() (+16 more)

### Community 9 - "Secao"
Cohesion: 0.17
Nodes (19): Emagrecimento(), metadata, CAMINHOS, metadata, Abertura(), Abertura(), ChamadaFinal(), ConhecaDra() (+11 more)

### Community 10 - "(site)/page.tsx"
Cohesion: 0.12
Nodes (22): Home(), metadata, revalidate, ChamadaFinal(), ComoComeca(), DraMayara(), FaixaEmagrecimento(), Hero() (+14 more)

### Community 11 - "package.json"
Cohesion: 0.10
Nodes (27): eslintConfig, devDependencies, eslint@^9, eslint-config-next@16.4.3, eslint-config-prettier@^10.1.8, prettier@^3.8.3, tailwindcss@^4, @tailwindcss/postcss@^4 (+19 more)

### Community 12 - "Scripts de varredura regulatória"
Cohesion: 0.14
Nodes (22): Contato(), metadata, metadata, PoliticaDePrivacidade(), Agendar(), FormularioContato(), GrupoChips(), GrupoChipsProps (+14 more)

### Community 13 - "CabecalhoSecao"
Cohesion: 0.15
Nodes (17): AClinica(), metadata, Abertura(), ChamadaFinal(), CirculoMaya(), Espaco(), FRAGMENTOS, FUNDOS_BLOCO (+9 more)

### Community 14 - "metodo/page.tsx"
Cohesion: 0.13
Nodes (19): metadata, Metodo(), Abertura(), ChamadaFinal(), ComoComeca(), Diferenciais(), FRAGMENTOS, Etapas() (+11 more)

### Community 15 - "CI e variáveis de ambiente"
Cohesion: 0.09
Nodes (26): C1 Mundo, C4 Grafismo de Frente, Client Component: AoEntrar, Componente: CirculoMaya (SVG), Componente: LinhaDesenhada, Client Component: Mundo, Decisão 010: CSS-first, sem biblioteca, Gate: Lighthouse Mobile ≥ 90 (+18 more)

### Community 16 - "Esqueleto v3 e regras de copy"
Cohesion: 0.11
Nodes (24): Alexandra Invitti — Psicóloga, CRP 12/09797, Equipe(), Beatriz Nietsche — Psicóloga, CRP 12/7482, Bianca Folzke — Fisioterapeuta Tricologista, CREFITO 294907-F, Bio clínica Talita Porto.doc, Clínica Maya (Clínica Dra. Mayara Brasil Ltda), Institutional Copy in Code (lib/conteudo/), Foto: clinica-1.jpg — Fachada da Clínica Maya (+16 more)

### Community 17 - "Plano de execução — site Clínica Maya"
Cohesion: 0.09
Nodes (23): Apêndice A · Prompt de referências (Perplexity Pro), Apêndice B · Pendências de conteúdo com dono, Apêndice C · Identificadores (sem segredos), Changelog v1.1, Changelog v1.2, Changelog v1.3, Changelog v1.4, Changelog v1.5 (+15 more)

### Community 18 - "tsconfig"
Cohesion: 0.13
Nodes (19): Rota /admin/blog — Back-office do Blog, CFM Resolução 2.336/2023 — Regras para Publicidade Médica, CV_EQUIPE.docx — Respostas das Profissionais à Gestora, Mapa de Movimento e Camadas – Clínica Maya v0.5, Referência: Oryzo (oryzo.ai / Lusion), Referência: Pradip Dhakal (awwwards out/2026), app/layout.tsx — Layout Raiz Next.js, scripts/varredura.mjs — Script de Varredura Regulatória (+11 more)

### Community 19 - "Página Atendimento on-line"
Cohesion: 0.19
Nodes (16): Blog(), metadata, revalidate, Abertura(), buscarNomesCategorias(), buscarPosts(), ChipsCategoria(), ContextoFiltro (+8 more)

### Community 20 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 21 - "env"
Cohesion: 0.12
Nodes (17): NEXT_PUBLIC_SANITY_DATASET, NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_TELEMETRY_DISABLED, SANITY_API_READ_TOKEN, SANITY_REVALIDATE_SECRET, jobs, verificar, name (+9 more)

### Community 22 - "Mapa de movimento: camadas e fotos"
Cohesion: 0.29
Nodes (12): CardPost(), CardPostProps, ALTURA_CAPA_CARD, DadosCardPost, dadosCardPost(), LARGURA_CAPA_CARD, Relacionados(), Blog() (+4 more)

### Community 23 - "Schemas Sanity do blog"
Cohesion: 0.12
Nodes (15): 1. Contexto, 2.1 Projeto Next.js na raiz de `clinica_maya_site/`, 2.2 Tokens da marca (Tailwind 4), 2.3 Layout base e página placeholder, 2.4 Sanity: schemas, cliente e Studio, 2.5 Varredura regulatória (`scripts/varredura.mjs` + `scripts/varredura.config.json`), 2.6 CI (`.github/workflows/ci.yml`), 2.7 README.md (+7 more)

### Community 24 - "Post.tsx"
Cohesion: 0.21
Nodes (11): dataExtenso(), FORMATADOR, COMPONENTES, dimensoesDoRef(), ImagemCorpo, ImagemDoCorpo(), PortableTextPost(), Post() (+3 more)

### Community 25 - "[slug]/page.tsx"
Cohesion: 0.21
Nodes (13): dynamicParams, generateMetadata(), generateStaticParams(), obterPost, PaginaPost(), Props, revalidate, buscarPost() (+5 more)

### Community 26 - "Secao.tsx"
Cohesion: 0.15
Nodes (12): AberturaProps, BORDAS, Espaco, ESPACOS, Folha, FOLHAS, Fundo, FUNDO_ATUAL (+4 more)

### Community 27 - "Padrões de scroll-driven animation"
Cohesion: 0.14
Nodes (13): 1. Contexto, 2.1 Corte de schema · `sanity/schemaTypes/`, `sanity/structure.ts`, `lib/sanity/queries.ts`, 2.2 Conteúdo estruturado em código · `lib/conteudo/`, 2.3 Layout · `components/layout/Header.tsx`, `components/layout/Footer.tsx`, `app/layout.tsx`, 2.4 Componentes base · `components/ui/`, 2.6 A Clínica · `app/clinica/page.tsx`, 2.7 Fotos · `public/fotos/`, 2. Entregáveis (+5 more)

### Community 28 - "Seções da Home e conformidade CFM"
Cohesion: 0.36
Nodes (9): DraMayaraBrasil(), metadata, Abertura(), ChamadaFinal(), ComoEAConsulta(), FORMACAO, Formacao(), Sobre() (+1 more)

### Community 29 - "Decisão 010: CSS-first e Círculo Maya"
Cohesion: 0.22
Nodes (8): metadata, Abertura(), CardProfissional(), SecaoArea(), SecaoAreaProps, ElementoNevoa, NevoaProps, AREAS_EQUIPE

### Community 30 - "sanity.config.ts"
Cohesion: 0.27
Nodes (7): sanity, AREAS_AUTORA, author, category, schemaTypes, post, structure()

### Community 31 - "[[...tool]]/page.tsx"
Cohesion: 0.21
Nodes (8): CorpoWebhook, dynamic, metadata, StudioPage(), viewport, Studio(), next-sanity@^13.4.0, next-sanity

### Community 32 - "dependencies"
Cohesion: 0.17
Nodes (12): dependencies, next@16.4.3, @portabletext/react@^8.0.1, react@19.3.0, react-dom@19.3.0, sanity@^6.21.0, @sanity/image-url@^2.1.1, styled-components@^6.1.15 (+4 more)

### Community 33 - "CTA, WhatsApp e dados globais"
Cohesion: 0.17
Nodes (11): CI, Decisões de convenção desta fase, Estrutura de pastas, Sanity Studio, Scripts, Site Clínica Maya, Stack, Tokens da marca (+3 more)

### Community 34 - "queries.ts"
Cohesion: 0.36
Nodes (8): CATEGORIAS_QUERY, CategoriaSanity, POST_POR_SLUG_QUERY, POSTS_HOME_QUERY, POSTS_QUERY, POSTS_RECENTES_EXCETO_QUERY, POSTS_RELACIONADOS_QUERY, SLUGS_POSTS_QUERY

### Community 35 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, dev, format, format:check, lint, lint:fix, start (+2 more)

### Community 36 - "app/layout.tsx"
Cohesion: 0.21
Nodes (4): alegreyaSans, lora, metadata, nextConfig

### Community 37 - "Esqueleto v0.2 (superado)"
Cohesion: 0.25
Nodes (7): Contexto, Critério de aceite (β), Entregável único, Fecho, Instrução Codinho — `noindex` temporário até o go-live, Restrições duras (parar e reportar), Transversais

### Community 38 - "client.ts"
Cohesion: 0.61
Nodes (4): apiVersion, dataset, projectId, sanityConfigurado

### Community 39 - "v0.4.0 — 2026-10-29"
Cohesion: 0.33
Nodes (6): Alterado, Decisões relacionadas, Lote 3a: o site público fica completo para o preview; blog lê do Sanity e o contato abre o WhatsApp, Pendências reconhecidas, v0.4.0 — 2026-10-29, Validação (β)

### Community 40 - "avaliacoes.ts"
Cohesion: 0.50
Nodes (3): Avaliacao, AVALIACOES, AVALIACOES_GOOGLE_URL

### Community 41 - "PostCSS"
Cohesion: 0.67
Nodes (3): Componente: PopupProfissional, Página: Contato, Página: Equipe

## Ambiguous Edges - Review These
- `Retrato editorial clean (roupa off-white, joias douradas, fundo neutro, luz suave)` → `Retrato de Arthur (equipe-arthur.jpg) — retrato vertical de meio corpo sentado à mesa, jaleco branco com bordado 'CARDIOLOGIA', camisa e gravata azul-marinho, escrevendo em bloco, modelo anatômico de coração sobre a mesa, persianas brancas ao fundo; estilo clínico/formal, paleta branco e madeira; uso: página Equipe`  [AMBIGUOUS]
  public/fotos/equipe-arthur.jpg · relation: conceptually_related_to
- `Retrato de Mayara (equipe-mayara.jpg) — retrato vertical de meio corpo em pé, encostada em bancada junto a janela com luz natural, vestido branco sem mangas com bordado, joias douradas discretas, parede bege; estilo editorial clean e elegante; paleta branco, bege e dourado; uso: página Equipe / página Dra. Mayara` → `Retrato de estúdio em fundo neutro (home-2.jpg) — retrato quadrado de pessoa sentada em cadeira de estofado bege com pés dourados, colete e calça off-white, joias douradas, cabelo cacheado, fundo liso cinza-rosado de estúdio; estilo editorial clean; paleta off-white, bege e dourado; uso provável: Home (hero/apresentação)`  [AMBIGUOUS]
  public/fotos/home-2.jpg · relation: semantically_similar_to
- `Logo vertical com tagline (wordmark + 'Esteja bem com você')` → `Logo vertical com tagline — negativa (branca)`  [AMBIGUOUS]
  docs/id_visual/ID VISUAL/logo-tagline-vertical-negativa.png · relation: references
- `Logo vertical Clínica Maya (wordmark CLÍNICA / MAYA empilhado, display fina com pontos no lugar das barras do A e do Í)` → `Logo vertical — negativa (branca)`  [AMBIGUOUS]
  docs/id_visual/ID VISUAL/logo-vertical-negativa.png · relation: references
- `Logo vertical Clínica Maya (wordmark CLÍNICA / MAYA empilhado, display fina com pontos no lugar das barras do A e do Í)` → `Símbolo Maya (detalhe tipográfico: A com ponto no lugar da barra)`  [AMBIGUOUS]
  public/marca/logo-vertical-positiva.png · relation: conceptually_related_to
- `Tagline 'Esteja bem com você' (serifa itálica)` → `Logo vertical com tagline — negativa (branca)`  [AMBIGUOUS]
  docs/id_visual/ID VISUAL/logo-tagline-vertical-negativa.png · relation: references

## Knowledge Gaps
- **73 isolated node(s):** `Book: Depressão – Causas e Tratamento – Aaron T. Beck`, `Decision 003 — Hosting & Ownership`, `Decision 009 — Blog & Contact Without Backend`, `Book: Manual Clínico dos Transtornos Psicológicos – David H. Barlow`, `Book: Cognitive Therapy – Judith S. Beck` (+68 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 356 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **19 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Secao` to `Layout raiz e página Equipe`, `Assets da identidade visual`, `CamadaGrafismos.tsx`, `movimento.ts`, `atendimento-online/page.tsx`, `(site)/page.tsx`, `package.json`, `Scripts de varredura regulatória`, `CabecalhoSecao`, `metodo/page.tsx`, `Página Atendimento on-line`, `Mapa de movimento: camadas e fotos`, `Post.tsx`, `[slug]/page.tsx`, `Seções da Home e conformidade CFM`, `Decisão 010: CSS-first e Círculo Maya`, `[[...tool]]/page.tsx`, `dependencies`, `app/layout.tsx`?**
  _High betweenness centrality (0.142) - this node is a cross-community bridge._
- **What connects `Book: Depressão – Causas e Tratamento – Aaron T. Beck`, `Decision 003 — Hosting & Ownership`, `Decision 009 — Blog & Contact Without Backend` to the rest of the system?**
  _73 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `varredura.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.05959183673469388 - nodes in this community are weakly interconnected._
- **Why does `MOV` connect `movimento.ts` to `Layout raiz e página Equipe`, `Assets da identidade visual`, `CamadaGrafismos.tsx`, `atendimento-online/page.tsx`, `Secao`, `(site)/page.tsx`, `Scripts de varredura regulatória`, `CabecalhoSecao`, `metodo/page.tsx`, `Página Atendimento on-line`, `Mapa de movimento: camadas e fotos`, `Post.tsx`, `Secao.tsx`, `Seções da Home e conformidade CFM`, `Decisão 010: CSS-first e Círculo Maya`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Should `Layout raiz e página Equipe` be split into smaller, more focused modules?**
  _Cohesion score 0.07397959183673469 - nodes in this community are weakly interconnected._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Retrato editorial clean (roupa off-white, joias douradas, fundo neutro, luz suave)` and `Retrato de Arthur (equipe-arthur.jpg) — retrato vertical de meio corpo sentado à mesa, jaleco branco com bordado 'CARDIOLOGIA', camisa e gravata azul-marinho, escrevendo em bloco, modelo anatômico de coração sobre a mesa, persianas brancas ao fundo; estilo clínico/formal, paleta branco e madeira; uso: página Equipe`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Retrato de Mayara (equipe-mayara.jpg) — retrato vertical de meio corpo em pé, encostada em bancada junto a janela com luz natural, vestido branco sem mangas com bordado, joias douradas discretas, parede bege; estilo editorial clean e elegante; paleta branco, bege e dourado; uso: página Equipe / página Dra. Mayara` and `Retrato de estúdio em fundo neutro (home-2.jpg) — retrato quadrado de pessoa sentada em cadeira de estofado bege com pés dourados, colete e calça off-white, joias douradas, cabelo cacheado, fundo liso cinza-rosado de estúdio; estilo editorial clean; paleta off-white, bege e dourado; uso provável: Home (hero/apresentação)`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._