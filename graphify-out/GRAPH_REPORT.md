# Graph Report - clinica_maya_site  (2026-10-30)

## Corpus Check
- 194 files · ~72,276 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 7 file(s) not represented in the graph (top: (none) 5, .example 1, .css 1)

## Summary
- 837 nodes · 2197 edges · 44 communities (38 shown, 6 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 55 edges (avg confidence: 0.84)
- Token cost: 567,071 input · 63,011 output

## Community Hubs (Navigation)
- Blog: rotas e cards
- Layout raiz e página Equipe
- Assets da identidade visual
- Shell do site: Header, Footer, 404
- Contato e política de privacidade
- Componentes Abertura por página
- Página Método e etapas
- Chamadas finais e Hero
- Dependências de dev e lint
- Página Emagrecimento
- Afinação 1: movimento CSS e armadilhas
- Governança: contas, domínio, papéis
- Scripts de varredura regulatória
- Home e 404 do site
- Fundação v0.1: Sanity e CI
- CI e variáveis de ambiente
- Esqueleto v3 e regras de copy
- Lote 1: copy em código e layout
- tsconfig
- Página Atendimento on-line
- Lote 3a e decisões de entrega
- Página A Clínica
- Mapa de movimento: camadas e fotos
- Schemas Sanity do blog
- Studio e webhook de revalidação
- Página Dra. Mayara Brasil
- Secao: fundos, folhas, campos
- Padrões de scroll-driven animation
- Seções da Home e conformidade CFM
- Decisão 010: CSS-first e Círculo Maya
- Dependências de runtime
- Áreas de cuidado: cards e dados
- Scripts do package.json
- CTA, WhatsApp e dados globais
- Dores: cards e dados
- Lote 2 e camadas por z-index
- Cliente Sanity e env
- Esqueleto v0.2 (superado)
- Dados do Manifesto
- Dados dos Passos
- Regras do graphify
- PostCSS

## God Nodes (most connected - your core abstractions)
1. `Secao()` - 99 edges
2. `MOV` - 66 edges
3. `Grafismo()` - 57 edges
4. `next` - 40 edges
5. `Botao()` - 29 edges
6. `CabecalhoSecao()` - 25 edges
7. `v0.5.0 — Fase 4 + afinação 1: camadas e movimento CSS-first` - 24 edges
8. `SpriteGrafismos()` - 23 edges
9. `Plano de execução — site Clínica Maya (v1.7, estado do projeto)` - 21 edges
10. `LinkTexto()` - 19 edges

## Surprising Connections (you probably didn't know these)
- `Logo vertical Clínica Maya (wordmark CLÍNICA / MAYA empilhado, display fina com pontos no lugar das barras do A e do Í)` --conceptually_related_to--> `Símbolo Maya (detalhe tipográfico: A com ponto no lugar da barra)`  [AMBIGUOUS]
  docs/id_visual/ID VISUAL/logo-vertical-marrom.png → public/marca/logo-vertical-positiva.png
- `Retrato de estúdio em fundo neutro (home-2.jpg) — retrato quadrado de pessoa sentada em cadeira de estofado bege com pés dourados, colete e calça off-white, joias douradas, cabelo cacheado, fundo liso cinza-rosado de estúdio; estilo editorial clean; paleta off-white, bege e dourado; uso provável: Home (hero/apresentação)` --semantically_similar_to--> `Retrato de Mayara (equipe-mayara.jpg) — retrato vertical de meio corpo em pé, encostada em bancada junto a janela com luz natural, vestido branco sem mangas com bordado, joias douradas discretas, parede bege; estilo editorial clean e elegante; paleta branco, bege e dourado; uso: página Equipe / página Dra. Mayara`  [AMBIGUOUS] [semantically similar]
  public/fotos/home-2.jpg → public/fotos/equipe-mayara.jpg
- `README §Estrutura de pastas` --references--> `Seis tipos Sanity do esqueleto v3 (siteConfig, area, profissional, dor, programa, post)`  [AMBIGUOUS]
  README.md → docs/DECISION_LOG.md
- `Webhook de revalidação /api/revalidate` --conceptually_related_to--> `Fase 3b · Back-office do blog (fila após aprovação da Fase 6)`  [INFERRED]
  README.md → docs/plano-execucao-site-clinica-maya.md
- `README §Decisões de convenção da Fase 1` --references--> `Padrão Spinhardi (repo Gattiboni/spinhardi_site como referência)`  [EXTRACTED]
  README.md → docs/DECISION_LOG.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Exceções de JavaScript no movimento CSS-first** — docs_decision_log_decisao_010, docs_decision_log_decisao_011, docs_decision_log_mundo_client_component, docs_decision_log_aoentrar_client_component, docs_decision_log_renderizacao_estatica_padrao [EXTRACTED 1.00]
- **Linguagem de movimento v1 (Fase 4 + afinação 1)** — docs_decision_log_scroll_driven_animations, docs_decision_log_folha_fronteira_secao, docs_decision_log_cortina_footer, docs_decision_log_circulo_maya_svg, docs_decision_log_campos_de_linhas, docs_changelog_hero_sticky_capa, docs_changelog_pilhas_sticky, docs_changelog_tokens_movimento, docs_changelog_v0_5_0 [EXTRACTED 1.00]
- **Convenções herdadas do padrão Spinhardi** — docs_decision_log_padrao_spinhardi, docs_decision_log_sanity_so_blog, docs_decision_log_supabase_back_office, docs_decision_log_copy_institucional_em_codigo, docs_decision_log_route_group_site, docs_decision_log_prefers_reduced_motion_bloco_unico, readme_decisoes_convencao_fase1 [INFERRED 0.85]
- **As 10 seções da Home, na ordem do esqueleto v3** — docs_esqueleto_site_clinica_maya_v3_hero, docs_esqueleto_site_clinica_maya_v3_areas_de_cuidado, docs_esqueleto_site_clinica_maya_v3_dores, docs_esqueleto_site_clinica_maya_v3_metodo_e_circulo_maya, docs_esqueleto_site_clinica_maya_v3_como_comeca, docs_esqueleto_site_clinica_maya_v3_faixa_emagrecimento, docs_esqueleto_site_clinica_maya_v3_secao_dra_mayara, docs_esqueleto_site_clinica_maya_v3_prova_social, docs_esqueleto_site_clinica_maya_v3_secao_blog, docs_esqueleto_site_clinica_maya_v3_chamada_final [EXTRACTED 1.00]
- **Primitivas de movimento do sistema de scroll CSS-first** — docs_mapa_movimento_v1_reveal, docs_mapa_movimento_v1_parallax, docs_mapa_movimento_v1_drift, docs_mapa_movimento_v1_maskreveal, docs_mapa_movimento_v1_scrub, docs_mapa_movimento_v1_pin, docs_mapa_movimento_v1_wipe, docs_mapa_movimento_v1_hoveracende, docs_mapa_movimento_v1_tilt3d, docs_mapa_movimento_v1_stack, docs_mapa_movimento_v1_capa, docs_mapa_movimento_v1_decisao_010_css_first [EXTRACTED 1.00]
- **Cadeia de fontes: briefing → esqueleto v3 → mock v3 → mock v3.1 → copy v1.2** — docs_esqueleto_site_clinica_maya_v3_briefing_amanda, docs_esqueleto_site_clinica_maya_v3_esqueleto_v3, docs_instrucao_mock_v3_claude_design_mock_v3, docs_instrucao_mock_v3_1_claude_design_mock_v3_1, docs_copy_site_v1_copy_site [EXTRACTED 1.00]
- **Família de variantes de cor do logo vertical (bege, marrom, negativa, positiva, verde)** — docs_id_visual_id_visual_logo_vertical_bege, docs_id_visual_id_visual_logo_vertical_marrom, docs_id_visual_id_visual_logo_vertical_negativa, docs_id_visual_id_visual_logo_vertical_positiva, docs_id_visual_id_visual_logo_vertical_verde, marca_logo_vertical [EXTRACTED 1.00]
- **Família de variantes de cor do logo vertical com tagline (bege, marrom, negativa, positiva, verde)** — docs_id_visual_id_visual_logo_tagline_vertical_bege, docs_id_visual_id_visual_logo_tagline_vertical_marrom, docs_id_visual_id_visual_logo_tagline_vertical_negativa, docs_id_visual_id_visual_logo_tagline_vertical_positiva, docs_id_visual_id_visual_logo_tagline_vertical_verde, marca_logo_tagline_vertical [EXTRACTED 1.00]
- **Grafismos botânicos em linha fina, cada um em par claro (bege) / escuro (marrom)** — marca_grafismo_3, marca_grafismo_4, marca_grafismo_5, marca_motivo_botanico, marca_cor_bege, marca_cor_marrom [INFERRED 0.85]
- **Família do logo vertical Clínica Maya (5 cores × com/sem tagline)** — public_marca_logo_vertical_bege, public_marca_logo_vertical_marrom, public_marca_logo_vertical_negativa, public_marca_logo_vertical_positiva, public_marca_logo_vertical_verde, public_marca_logo_tagline_vertical_bege, public_marca_logo_tagline_vertical_marrom, public_marca_logo_tagline_vertical_negativa, public_marca_logo_tagline_vertical_positiva, public_marca_logo_tagline_vertical_verde, marca_logo_vertical [INFERRED 0.95]
- **Conjunto de grafismos SVG da marca em currentColor (campos e grafismos)** — public_marca_campo_1_svg, public_marca_campo_2_svg, public_marca_grafismo_3_svg, public_marca_grafismo_4_svg, public_marca_grafismo_5_svg, marca_svg_currentcolor [EXTRACTED 1.00]
- **Par claro/escuro do diagrama corpo · mente · espírito** — public_marca_corpo_mente_espirito_claro, public_marca_corpo_mente_espirito_escuro, marca_triade_corpo_mente_espirito [EXTRACTED 1.00]
- **Série de retratos da equipe (equipe-*.jpg)** — public_fotos_equipe_arthur, public_fotos_equipe_bianca, public_fotos_equipe_mayara, public_fotos_equipe_talita, public_fotos_equipe_tania [EXTRACTED 1.00]
- **Série do espaço físico da clínica (clinica-*.jpg + home-1)** — public_fotos_clinica_1, public_fotos_clinica_2, public_fotos_clinica_3, public_fotos_clinica_4, public_fotos_home_1 [INFERRED 0.85]
- **Fotos que compartilham a paleta quente e natural do site** — public_fotos_clinica_1, public_fotos_clinica_2, public_fotos_clinica_3, public_fotos_clinica_4, public_fotos_equipe_mayara, public_fotos_home_2 [INFERRED 0.85]

## Communities (44 total, 6 thin omitted)

### Community 0 - "Blog: rotas e cards"
Cohesion: 0.07
Nodes (54): Blog(), metadata, revalidate, dynamicParams, generateMetadata(), generateStaticParams(), obterPost, PaginaPost() (+46 more)

### Community 1 - "Layout raiz e página Equipe"
Cohesion: 0.06
Nodes (44): alegreyaSans, lora, metadata, Equipe(), metadata, CardProfissional(), CardProfissionalProps, FUNDOS (+36 more)

### Community 2 - "Assets da identidade visual"
Cohesion: 0.08
Nodes (51): Corpo-Mente-Espírito (claro, linha bege), Corpo-Mente-Espírito (escuro, linha marrom), Grafismo 3 (claro) — folha/flor com haste, traço bege, Grafismo 3 (escuro) — folha/flor com haste, traço marrom, Grafismo 4 (claro) — padrão denso de folhas, traço bege, Grafismo 4 (escuro) — padrão denso de folhas, traço marrom, Grafismo 5 (claro) — três pétalas/folhas grandes, traço bege, Grafismo 5 (escuro) — três pétalas/folhas grandes, traço marrom (+43 more)

### Community 3 - "Shell do site: Header, Footer, 404"
Cohesion: 0.09
Nodes (29): metadata, NaoEncontradoGlobal(), SiteLayout(), AoEntrar(), Container(), ContainerProps, Footer(), TituloColuna() (+21 more)

### Community 4 - "Contato e política de privacidade"
Cohesion: 0.10
Nodes (28): Contato(), metadata, metadata, PoliticaDePrivacidade(), dataExtenso(), FORMATADOR, Agendar(), FormularioContato() (+20 more)

### Community 5 - "Componentes Abertura por página"
Cohesion: 0.12
Nodes (28): Abertura(), Abertura(), AberturaProps, Abertura(), Abertura(), Abertura(), Abertura(), Abertura() (+20 more)

### Community 6 - "Página Método e etapas"
Cohesion: 0.13
Nodes (21): metadata, Metodo(), ComoComeca(), ChamadaFinal(), ComoComeca(), Diferenciais(), Etapas(), Pilares() (+13 more)

### Community 7 - "Chamadas finais e Hero"
Cohesion: 0.22
Nodes (15): ChamadaFinal(), ChamadaFinal(), ChamadaFinal(), ChamadaFinal(), Botao(), BotaoProps, Tamanho, TAMANHOS (+7 more)

### Community 8 - "Dependências de dev e lint"
Cohesion: 0.10
Nodes (27): eslintConfig, devDependencies, eslint@^9, eslint-config-next@16.4.3, eslint-config-prettier@^10.1.8, prettier@^3.8.3, tailwindcss@^4, @tailwindcss/postcss@^4 (+19 more)

### Community 9 - "Página Emagrecimento"
Cohesion: 0.13
Nodes (19): Emagrecimento(), metadata, ChamadaFinal(), Faq(), OQueFazParte(), PortaDeEntrada(), Programas(), FRAGMENTOS (+11 more)

### Community 10 - "Afinação 1: movimento CSS e armadilhas"
Cohesion: 0.17
Nodes (23): Afinação 1 — revisão visual do Alan em 30/10 (folhas, Círculo SVG, campos, cortina, popover), Hero como capa sticky em 100svh com relógio --pos-capa via timeline-scope, Lighthouse local distorcido pelo Kaspersky (script HTTP injetado; Best Practices 81), .mascara usa overflow clip (hidden vira scroll container e zera o view() da foto), Payload RSC duplica o HTML inline (Header/Footer/404 pesam 3×; campos inline +10 KB gz), Pendências herdadas da clínica (bios, Dr. Arthur, fotos, CRM-SC, Folske × Folks, favicon, plano Vercel), Pilhas sticky (Como começa; Pilares) com trajeto 65svh por folha, lib/movimento.ts + tokens --mov-* em globals.css (durações, curva, ranges, parallax) (+15 more)

### Community 11 - "Governança: contas, domínio, papéis"
Cohesion: 0.14
Nodes (24): Conta técnica clinicamaya.digital@gmail.com (Sanity, Supabase, GA4, Search Console), Domínio clinicamaya.com no Wix (DNS no Wix, renova 22/10/2028), Time Vercel clinica-maya sob o login do Alan (Pro Trial, decisão até ~10/11), Restrições duras do Lote 1 (escopo de escrita, sem dependência, sem texto fora da copy), Instrução Codinho — noindex temporário até o go-live, robots noindex, nofollow temporário no metadata do layout raiz (commit 2f36dae), Regra 'NÃO COMMITAR — o commit é feito no final pelo usuário', Régua 'parar e reportar': ambiguidade local decide-se, contrato/arquitetura para (+16 more)

### Community 12 - "Scripts de varredura regulatória"
Cohesion: 0.12
Nodes (19): ARQUIVO_TEMP, falhar(), principal(), RAIZ, rodarVarredura(), SCRIPT, TERMO_VETADO, CAMINHO_CONFIG (+11 more)

### Community 13 - "Home e 404 do site"
Cohesion: 0.16
Nodes (16): CAMINHOS, metadata, NaoEncontrado(), Home(), metadata, revalidate, Areas(), DraMayara() (+8 more)

### Community 14 - "Fundação v0.1: Sanity e CI"
Cohesion: 0.21
Nodes (21): TRAP: next dev no Next 16 gera AGENTS.md na raiz (ignorado no .gitignore), v0.1.0 — Fundação: esqueleto técnico que se fiscaliza sozinho, Regex de termos curtos com \b (TCC, kg) para não casar com hashes de build, Sanity só blog (post, author, category espelhando studio/schemas da Spinhardi), Seis tipos Sanity do esqueleto v3 (siteConfig, area, profissional, dor, programa, post), /studio embutido como superfície técnica (Alan, Claude), fora do handoff, Tokens da marca em @theme (bege, creme, verde, marrom; Lora, Alegreya Sans), Varredura regulatória (scripts/varredura.mjs + varredura.config.json) (+13 more)

### Community 15 - "CI e variáveis de ambiente"
Cohesion: 0.09
Nodes (22): NEXT_PUBLIC_SANITY_DATASET, NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_TELEMETRY_DISABLED, SANITY_API_READ_TOKEN, SANITY_REVALIDATE_SECRET, jobs, verificar, name (+14 more)

### Community 16 - "Esqueleto v3 e regras de copy"
Cohesion: 0.17
Nodes (14): Copy do site v1.2 (fonte única da copy institucional para os .tsx), 404 (not-found), Varredura de termos e lista permitidos, Página Programas (/programas e /programas/[slug], removida na v3), Questões abertas v0.2 (preço, agenda das psicólogas, Maia × Maya, depoimentos), Briefing de alterações da Amanda (29/09) · fonte que vence em conflito, Contato e agendamento (/contato), Emagrecimento (/emagrecimento) (+6 more)

### Community 17 - "Lote 1: copy em código e layout"
Cohesion: 0.25
Nodes (17): Lote 1 — schema cortado, lib/conteudo, header/footer, Home e A Clínica, Lote 1.1 — responsividade: tipografia fluida, recentralização, grafismos SVG, Pendência: peso do HTML com SVG inline (Home 389 KB → re-traçar paths, symbol/use), TRAP herdado da Spinhardi: fetch ao Sanity em build sem try/catch derruba o deploy, v0.2.0 — Lote 1 + 1.1: Sanity encolhe para o blog, copy vira código, Copy institucional em código (lib/conteudo/, fonte docs/copy-site-v1.md), Grafismos SVG inline com fonte única em public/marca (Grafismo.tsx lê no build), Padrão Spinhardi (repo Gattiboni/spinhardi_site como referência) (+9 more)

### Community 18 - "tsconfig"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 19 - "Página Atendimento on-line"
Cohesion: 0.20
Nodes (13): AtendimentoOnline(), metadata, ComoFunciona(), Faq(), Coluna(), OQueMuda(), BlocoTextoOnline, O_QUE_MUDA (+5 more)

### Community 20 - "Lote 3a e decisões de entrega"
Cohesion: 0.23
Nodes (14): 404 de post inexistente responde 404 mas HTML vem como __next_error__ (limite do Next), Lote 3a — Atendimento on-line, Blog público, Contato, 404, Política, v0.4.0 — Lote 3a: site público completo para o preview, 404 composto (app/not-found.tsx envolve Header/main/Footer em app/(site)/not-found.tsx), Decision log — site Clínica Maya, Dependências entram com a feature, nunca antes, Blog vazio com 'Em breve, os primeiros textos da equipe.' (frase em permitidos), Filtro de categoria do blog no cliente (FiltroCategoria, contexto com duas folhas) (+6 more)

### Community 21 - "Página A Clínica"
Cohesion: 0.26
Nodes (10): AClinica(), metadata, CirculoMaya(), Espaco(), FRAGMENTOS, FUNDOS_BLOCO, Manifesto(), QuemFaz() (+2 more)

### Community 22 - "Mapa de movimento: camadas e fotos"
Cohesion: 0.19
Nodes (8): Fotos dos Lotes 1, 2 e 3a (public/fotos/), GradeAreas (os mesmos 5 cards de áreas na Home e em A Clínica), A Clínica (/clinica), Áreas de cuidado (seção 2 da Home), Hero (seção 1 da Home), Identidade visual (logos, grafismos 3/4/5, paleta bege/verde/marrom/creme), Fotos reais (home-1, home-2, equipe-*, clinica-1 a 4) substituem placeholders, Mapa de movimento e camadas v0.4 (contrato da Fase 4)

### Community 23 - "Schemas Sanity do blog"
Cohesion: 0.27
Nodes (7): sanity, AREAS_AUTORA, author, category, schemaTypes, post, structure()

### Community 24 - "Studio e webhook de revalidação"
Cohesion: 0.21
Nodes (8): CorpoWebhook, dynamic, metadata, StudioPage(), viewport, Studio(), next-sanity@^13.4.0, next-sanity

### Community 25 - "Página Dra. Mayara Brasil"
Cohesion: 0.39
Nodes (8): DraMayaraBrasil(), metadata, Abertura(), ChamadaFinal(), ComoAtende(), FormacaoRegistro(), Trajetoria(), Secao()

### Community 26 - "Secao: fundos, folhas, campos"
Cohesion: 0.17
Nodes (11): BORDAS, Campo(), CAMPOS, Espaco, ESPACOS, Folha, FOLHAS, Fundo (+3 more)

### Community 27 - "Padrões de scroll-driven animation"
Cohesion: 0.17
Nodes (9): CardPost (card de post do blog, Home e lista), FAQ em <details> (Emagrecimento e Atendimento on-line), Atendimento on-line (/atendimento-online), Blog (/blog e /blog/[slug]), Quatro etapas da jornada (Descoberta, Planejamento, Acompanhamento, Consolidação), Seção Blog da Home (3 posts recentes), Barra de progresso de leitura no post (animation-timeline: scroll(), zero JS), LinhaDesenhada (linha do tempo por scrub; Etapas, Como funciona, Como começa) (+1 more)

### Community 28 - "Seções da Home e conformidade CFM"
Cohesion: 0.20
Nodes (7): Como começa (seção 5 da Home), Faixa emagrecimento (seção 6 da Home), Home (/), Método Maya e Círculo Maya (seção 4 da Home), Método Maya (/metodo), Quatro pilares (Acolher, Cuidar, Transformar, Consolidar), Bloco Dra. Mayara (seção 7 da Home)

### Community 29 - "Decisão 010: CSS-first e Círculo Maya"
Cohesion: 0.20
Nodes (6): Círculo Maya (corpo, mente e espírito), Afinação 1 (30/10, revisão visual do Alan), AoEntrar (IntersectionObserver, data-entrou, exceção à Decisão 010), Campos de linhas (campo-1, campo-2, camada ambiente via mask-image), CirculoMaya (SVG próprio: três anéis em stroke e palavras em textPath), Mundo (client component que escreve --mx/--my em pointer: fine)

### Community 30 - "Dependências de runtime"
Cohesion: 0.17
Nodes (12): dependencies, next@16.4.3, @portabletext/react@^8.0.1, react@19.3.0, react-dom@19.3.0, sanity@^6.21.0, @sanity/image-url@^2.1.1, styled-components@^6.1.15 (+4 more)

### Community 31 - "Áreas de cuidado: cards e dados"
Cohesion: 0.27
Nodes (8): CardArea(), CardAreaProps, FRAGMENTOS, FUNDOS, GradeAreas(), GradeAreasProps, Area, AREAS

### Community 32 - "Scripts do package.json"
Cohesion: 0.20
Nodes (10): scripts, build, dev, format, format:check, lint, lint:fix, start (+2 more)

### Community 33 - "CTA, WhatsApp e dados globais"
Cohesion: 0.28
Nodes (6): Footer (Onde estamos, Institucional, linha de responsável técnica), Formulário de contato que monta mensagem e abre wa.me (nada armazenado), Dados globais (nome, slogan, WhatsApp, endereço, horário, responsável técnica), Header (navegação principal e botão Agendar), Chamada final (CTA de fechamento das páginas), Política de privacidade (/politica-de-privacidade)

### Community 34 - "Dores: cards e dados"
Cohesion: 0.43
Nodes (5): Dores(), CardDor(), CardDorProps, Dor, DORES

### Community 35 - "Lote 2 e camadas por z-index"
Cohesion: 0.39
Nodes (7): Changelog — site Clínica Maya, Lote 2 — Equipe, Método, Emagrecimento, Dra. Mayara e camadas, v0.3.0 — Lote 2: quatro páginas internas e camadas, Camadas z-index em lib/camadas.ts (CAMADA fundo 0, grafismo 10, conteúdo 20, header 30), Círculo Maya em SVG construído à mão (CirculoMaya.tsx), Regra 9 do mapa: símbolo corpo-mente-espírito só sobre fundo sólido, docs/mapa-movimento-v1.md — contrato de movimento (v0.2 → v0.4)

### Community 36 - "Cliente Sanity e env"
Cohesion: 0.57
Nodes (4): apiVersion, dataset, projectId, sanityConfigurado

### Community 37 - "Esqueleto v0.2 (superado)"
Cohesion: 0.33
Nodes (7): Esqueleto do site v0.2 (29/08, substituído pela v3), Página de campanha (/campanhas/[slug], Ads), Cinco áreas (Medicina, Nutrição, Psicologia, Terapia, Saúde capilar) com âncoras, Dores (seção 3 da Home), Dra. Mayara Brasil (/dra-mayara-brasil), Modelo de conteúdo CMS-ready (Programa, Área, Profissional, Dor, CTA), Programas Maya Essencial, Evolução e Contínuo

## Ambiguous Edges - Review These
- `README §Estrutura de pastas` → `Seis tipos Sanity do esqueleto v3 (siteConfig, area, profissional, dor, programa, post)`  [AMBIGUOUS]
  README.md · relation: references
- `Logo vertical com tagline — negativa (branca)` → `Logo vertical com tagline (wordmark + 'Esteja bem com você')`  [AMBIGUOUS]
  docs/id_visual/ID VISUAL/logo-tagline-vertical-negativa.png · relation: references
- `Logo vertical com tagline — negativa (branca)` → `Tagline 'Esteja bem com você' (serifa itálica)`  [AMBIGUOUS]
  docs/id_visual/ID VISUAL/logo-tagline-vertical-negativa.png · relation: references
- `Logo vertical — negativa (branca)` → `Logo vertical Clínica Maya (wordmark CLÍNICA / MAYA empilhado, display fina com pontos no lugar das barras do A e do Í)`  [AMBIGUOUS]
  docs/id_visual/ID VISUAL/logo-vertical-negativa.png · relation: references
- `Logo vertical Clínica Maya (wordmark CLÍNICA / MAYA empilhado, display fina com pontos no lugar das barras do A e do Í)` → `Símbolo Maya (detalhe tipográfico: A com ponto no lugar da barra)`  [AMBIGUOUS]
  public/marca/logo-vertical-positiva.png · relation: conceptually_related_to
- `Motivo botânico em linha fina (folhas, pétalas e hastes desenhadas a contorno, sem preenchimento)` → `Campo orgânico (fundo de linhas fluidas em currentColor)`  [AMBIGUOUS]
  public/marca/campo-1.svg · relation: conceptually_related_to
- `Retrato de Arthur (equipe-arthur.jpg) — retrato vertical de meio corpo sentado à mesa, jaleco branco com bordado 'CARDIOLOGIA', camisa e gravata azul-marinho, escrevendo em bloco, modelo anatômico de coração sobre a mesa, persianas brancas ao fundo; estilo clínico/formal, paleta branco e madeira; uso: página Equipe` → `Retrato editorial clean (roupa off-white, joias douradas, fundo neutro, luz suave)`  [AMBIGUOUS]
  public/fotos/equipe-arthur.jpg · relation: conceptually_related_to
- `Retrato de Mayara (equipe-mayara.jpg) — retrato vertical de meio corpo em pé, encostada em bancada junto a janela com luz natural, vestido branco sem mangas com bordado, joias douradas discretas, parede bege; estilo editorial clean e elegante; paleta branco, bege e dourado; uso: página Equipe / página Dra. Mayara` → `Retrato de estúdio em fundo neutro (home-2.jpg) — retrato quadrado de pessoa sentada em cadeira de estofado bege com pés dourados, colete e calça off-white, joias douradas, cabelo cacheado, fundo liso cinza-rosado de estúdio; estilo editorial clean; paleta off-white, bege e dourado; uso provável: Home (hero/apresentação)`  [AMBIGUOUS]
  public/fotos/home-2.jpg · relation: semantically_similar_to

## Knowledge Gaps
- **18 isolated node(s):** `Regras de uso do graphify (CLAUDE.md)`, `Gatilho /graphify (.claude/CLAUDE.md)`, `README §Scripts npm`, `TRAP: next dev no Next 16 gera AGENTS.md na raiz (ignorado no .gitignore)`, `Fase 5 · SEO, Ads, analytics (metadata, JSON-LD, Consent Mode, GA4)` (+13 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 205 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Layout raiz e página Equipe` to `Blog: rotas e cards`, `Dores: cards e dados`, `Shell do site: Header, Footer, 404`, `Contato e política de privacidade`, `Componentes Abertura por página`, `Página Método e etapas`, `Chamadas finais e Hero`, `Dependências de dev e lint`, `Página Emagrecimento`, `Home e 404 do site`, `Página Atendimento on-line`, `Página A Clínica`, `Studio e webhook de revalidação`, `Página Dra. Mayara Brasil`, `Dependências de runtime`, `Áreas de cuidado: cards e dados`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **What connects `Regras de uso do graphify (CLAUDE.md)`, `Gatilho /graphify (.claude/CLAUDE.md)`, `README §Scripts npm` to the rest of the system?**
  _18 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Blog: rotas e cards` be split into smaller, more focused modules?**
  _Cohesion score 0.07010402532790593 - nodes in this community are weakly interconnected._
- **Why does `Secao()` connect `Página Dra. Mayara Brasil` to `Blog: rotas e cards`, `Layout raiz e página Equipe`, `Dores: cards e dados`, `Shell do site: Header, Footer, 404`, `Contato e política de privacidade`, `Componentes Abertura por página`, `Página Método e etapas`, `Chamadas finais e Hero`, `Página Emagrecimento`, `Home e 404 do site`, `Página Atendimento on-line`, `Página A Clínica`, `Secao: fundos, folhas, campos`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Should `Layout raiz e página Equipe` be split into smaller, more focused modules?**
  _Cohesion score 0.05858585858585859 - nodes in this community are weakly interconnected._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `README §Estrutura de pastas` and `Seis tipos Sanity do esqueleto v3 (siteConfig, area, profissional, dor, programa, post)`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `Logo vertical com tagline — negativa (branca)` and `Logo vertical com tagline (wordmark + 'Esteja bem com você')`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._