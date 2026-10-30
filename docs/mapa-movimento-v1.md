# Mapa de movimento e camadas: site Clínica Maya · v0.4 (contrato da Fase 4, após a afinação 1)

**30/10/2026** (v0.4: afinação 1 incorporada, seção 6; v0.3: todas as páginas mapeadas e técnica fechada, CSS-first sem biblioteca, Decisão 010; v0.2: modelo "mundo + folhas", capa no hero, `stack` e `tilt3d`; pin sai da Home e vai para a página do Método). Contrato de camadas e movimento. Não é mock: diz **o que** cada elemento faz, em que camada vive e como se comporta no scroll, no cursor, no mobile e com `prefers-reduced-motion`. O Lote 2 constrói as páginas já com as camadas; a Fase 4 liga o movimento sem reabrir estrutura. Referências de gramática (não de técnica): Oryzo (oryzo.ai, Lusion) e Pradip Dhakal (awwwards, out/2026): profundidade real, objetos que respondem, navegação por descoberta. Ambas são WebGL; aqui tudo é 2D, transform e opacity, dentro do gate Lighthouse mobile ≥ 90.

Marca manda no tom: Sábio + Cuidador. Movimento lento, contínuo, orgânico. Nada salta, nada pisca, nada persegue o cursor. A sensação é de página viva, não de página que faz truque.

---

## 1. Vocabulário

### 1.1 Camadas (ordem de empilhamento, de trás para a frente)

| Camada | O que é | Velocidade no scroll | Cursor | Mobile |
|---|---|---|---|---|
| **C0 Fundo** | cor da seção (bege, creme, verde) | 1.0 (normal) | não | igual |
| **C1 Mundo** | camada de página com os SVGs grandes (grafismo 3, 4 e 5), opacidade 0.12 a 0.35. **Estrutura (Lote 2):** z-index global, fundo da seção em 0, grafismo em 10, conteúdo em 20, seções sem stacking context próprio; um grafismo pode sangrar sobre o fundo da seção vizinha e fica sob o conteúdo dela. **Movimento (Fase 4):** `fixed` ou parallax, e folhas com margens laterais onde o mapa pedir, decididos com olho sobre o preview. A cor muda conforme a folha que passa | 0.25 a 0.4 (parece distante) | drift de até 8px, amortecido, e **tilt3d** de até 6° | parallax 0.15, sem drift, sem tilt |
| **C2 Mídia** | foto com máscara (arco, cantos), símbolo Círculo Maya | 0.9 dentro da máscara (a foto se move um pouco dentro do recorte) | não | parallax interno desligado |
| **C3 Conteúdo** | texto, cards, botões | 1.0 | hover de card: eleva 4px, sombra suave | igual, sem hover |
| **C4 Grafismo de frente** | SVG pequeno, opacidade 0.1 a 0.2, na frente da mídia; raro (hero, chamada final) | 0.6 (mais rápido que a página, parece próximo) | drift de até 14px | desligado |
| **Fixos** | header | sticky; transparente sobre o hero, ganha fundo bege e borda após 80px de rolagem; altura reduz de 96 para 72px | não | igual |

Regra de ouro das camadas: **C1 e C4 pertencem à página, não à seção.** O mundo existe antes das folhas e continua depois delas; é isso que entrelaça, sem precisar de sangria ou `overflow: visible` nas seções (a v0.1 exigia; a v0.2 não).

### 1.2 Primitivas de movimento

- **reveal(stagger)**: elemento entra com opacity 0→1 e translateY 24→0px, 600ms, curva suave; filhos em sequência de 60ms. Dispara uma vez, ao entrar 15% na viewport. Vale para títulos, parágrafos, cards.
- **parallax(fator)**: translateY ligado ao scroll, proporcional à distância do centro da viewport. Fator < 1 afasta, > 1 aproxima.
- **drift(cursor, amplitude)**: deslocamento suave ligado à posição do cursor na viewport, amortecido (segue com atraso, nunca cola). Só C1 e C4.
- **maskReveal**: `clip-path` abrindo de baixo para cima ou da esquerda para a direita, 900ms. Para fotos que **não** são o elemento LCP.
- **scrub(progresso)**: propriedade ligada ao progresso do scroll dentro da seção (0 a 1). Rotação, deslocamento, opacidade. Sem easing próprio; o easing é a mão da pessoa.
- **pin(duração)**: a seção fica fixa enquanto o conteúdo interno avança por scrub. Só uma por página, só no desktop.
- **wipe**: aparecimento de grafismo por `clip-path` progressivo, simulando o traço sendo desenhado (os SVGs são contorno preenchido, não stroke; por isso wipe e não stroke-dashoffset).
- **hoverAcende**: fragmento de grafismo atrás de um card passa de opacidade 0 a 0.25 e desloca 6px no hover. É a navegação por objeto da marca.
- **tilt3d**: `perspective` + `rotate3d` de até 6° em um grafismo do mundo, ligado ao cursor (desktop) e ao progresso do scroll. Dá a sensação de folha no espaço com custo de `transform`. Acima de 6° fica artificial; é teto, não meta.
- **stack**: folhas `sticky` que se empilham no scroll, a seguinte subindo por cima da anterior, que recua 3% em escala. Só onde a narrativa é sequência de itens curtos que cabem numa viewport. Botão "próximo" discreto no desktop, rolando suave até a folha seguinte. **Sem `scroll-snap` obrigatório.**
- **capa**: o hero fica fixo enquanto a primeira folha sobe por cima; por scrub, o texto do hero esmaece, a foto recua 4% em escala e os grafismos do mundo inclinam. A pessoa "abre" o site. Mobile: igual, sem tilt.

### 1.3 Regras de performance e acessibilidade (gate)

1. Só `transform` e `opacity` animam. Nada de `top/left`, `width`, `filter` animado, `box-shadow` animado (sombra via pseudo-elemento com opacity).
2. `will-change` só enquanto a animação roda; removido depois.
3. **Elemento LCP não anima na carga além de opacity curta** (a foto do hero aparece já pronta; o que anima em volta dela são os grafismos e o texto).
4. Tudo gated por IntersectionObserver: nada roda fora da viewport.
5. Biblioteca de movimento: ≤ 30 KB gz no bundle da Home, carregada depois da hidratação; páginas sem movimento não a carregam.
6. `prefers-reduced-motion: reduce`: parallax, drift, scrub, pin e wipe desligados; reveal vira só opacity 300ms; header sem transição.
7. Touch (`pointer: coarse`) e telas < 1024px: sem drift, sem tilt, parallax reduzido, reveals mantidos; `stack` e `capa` mantidos (sticky funciona), com folhas que cabem em `100svh`.
8. Lighthouse mobile ≥ 90 em Performance medido no preview da Vercel é o critério; se uma seção furar, ela perde movimento, não a página inteira.
9. **O símbolo corpo-mente-espírito (C2) só fica sobre fundo sólido**, nunca sobre grafismo do mundo: as linhas finas dos dois se confundem e, no responsivo, a sobreposição vira ruído (achado do Alan no Lote 1.1). Onde o símbolo aparece, o mundo recua (opacidade 0 naquela região) ou o símbolo ganha um disco de fundo da cor da folha.

### 1.4 O que fica de fora, por decisão

WebGL/Three.js e cenas 3D (custo, gate, sem objeto 3D da marca); a Home inteira como folhas empilhadas (túnel; seções densas não cabem numa viewport); `scroll-snap` obrigatório (prende no mobile); smooth scroll por biblioteca (Lenis) a menos que o scrub exija (avaliar na Fase 4); cursor customizado; loaders e telas de abertura; qualquer coisa que pisque.

---

## 2. Mapa da Home (ordem da copy v1.0.1)

### H1 · Hero: a capa
- O hero é **parte do mundo**, não uma folha: fica fixo e a folha de Áreas sobe por cima dele (**capa**). É o momento de cena da Home.
- **C0** bege. **C1** grafismo-3 grande no mundo, canto superior direito, passando atrás da foto; parallax 0.3, drift 8px, tilt3d; wipe na carga (1.2s, da ponta do caule para as folhas). Continua visível atrás das folhas seguintes.
- **C2** foto da Dra. (home-2) com máscara em arco, **visível desde o primeiro frame** (é o LCP). parallax interno 0.9.
- **C3** eyebrow, H1, subtítulo, CTAs, nota: reveal em sequência na carga (não no scroll), 80ms entre eles, começando 200ms após o primeiro paint.
- **C4** grafismo-5 pequeno, canto inferior esquerdo da foto, opacidade 0.15, parallax 0.6, drift 14px.
- Indicador de rolagem discreto sob a nota, só desktop, some após o primeiro scroll.

### H2 · Áreas de cuidado: navegação por objeto
- Primeira **folha**: sobe por cima do hero (capa). **C0** creme, com margens laterais que deixam o mundo aparecer.
- **C3** título e lead: reveal. Cinco cards: reveal com stagger 60ms.
- **hoverAcende**: cada card tem um fragmento de grafismo próprio atrás (recortes dos SVGs 3, 4, 5 por `clip-path`, sem asset novo), opacidade 0 → 0.25 no hover; o card eleva 4px. É a tradução do "menu pelos objetos".
- Mobile: hover não existe; o fragmento fica fixo em opacidade 0.1 em todos.

### H3 · Dores
- Folha bege. No mundo, grafismo-4 à esquerda, parallax 0.25; quando a folha verde do Método passa por cima, ele muda de verde para bege (a folha é que muda, o mundo não).
- **C3** seis cards: reveal stagger. Hover: eleva 4px; a linha "Quem pode ajudar" ganha sublinhado animado da esquerda para a direita.

### H4 · Método e Círculo Maya
- Folha verde. **Sem pin na Home** (v0.2): o momento de cena do Método vai para a página `/metodo`, onde os quatro pilares viram `stack`.
- **C2** símbolo corpo-mente-espírito: maskReveal circular; rotação lenta por scrub (0 → 12°) enquanto a folha atravessa a viewport.
- **C3** os quatro pilares: reveal stagger 120ms; link "Conhecer o método" por último.

### H5 · Como começa
- **C0** bege. **C2** foto home-1 com máscara, maskReveal da esquerda para a direita.
- **C3** os três passos como **stack**: três folhas curtas que se empilham (número, título, texto cabem numa viewport mesmo no mobile); botão "próximo" no desktop. A **linha que liga 1 → 2 → 3** é desenhada por scrub (SVG de linha nossa, stroke-dashoffset).
- **C1** corpo-mente-espírito decorativo em opacidade 0.06, parallax 0.2.

### H6 · Faixa emagrecimento
- **C0** creme. **C3** reveal simples. Sem grafismo, sem parallax: respiro. A faixa é curta de propósito.

### H7 · Dra. Mayara
- **C0** bege. **C2** foto equipe-mayara com máscara, parallax interno 0.9, maskReveal de baixo para cima.
- **C1** grafismo-5 atrás da foto, parallax 0.3, drift 8px.
- **C3** reveal.

### H9 · Blog (quando houver post)
- **C0** creme. **C3** cards reveal stagger; hover eleva e a capa faz zoom 1 → 1.04 dentro da máscara.

### H10 · Chamada final
- **C0** verde. **C1** grafismo-5 grande, bege, opacidade 0.18, parallax 0.3. **C4** fragmento do grafismo-3, opacidade 0.1, drift 14px.
- **C3** reveal; o botão tem o único movimento "próprio" do site: ao entrar na viewport, uma pulsação única de escala 1 → 1.03 → 1 em 600ms. Uma vez.

### Header
- Transparente sobre o hero; após 80px, fundo bege com borda inferior e altura 72px (transição 250ms). Item ativo: sublinhado cresce da esquerda. Mobile: o menu abre com reveal stagger dos itens.

### Transições de página
- Avaliar View Transitions (fade de 150ms entre rotas) na Fase 4; só se não custar hidratação extra. Não é compromisso.

---

## 3. Mapa das páginas internas

Vocabulário da seção 1. Onde não dito, vale o padrão: título e lead com `reveal`, cards com `reveal` em stagger de 60ms, fotos com `maskReveal` e parallax interno 0.9, botões sem movimento próprio.

### A Clínica
- Abertura: grafismo-3 no mundo (parallax 0.3, drift, tilt3d); H1 e texto `reveal`.
- Manifesto: três blocos `reveal` com stagger 120ms (é leitura, mais lento); grafismo-5 no mundo.
- Espaço: quatro fotos `maskReveal` em stagger 80ms; hover: zoom 1.04 dentro da máscara.
- Círculo Maya (verde): símbolo `maskReveal` circular e rotação lenta por `scrub` (0 → 12°); regra 9: nenhum grafismo na região. Texto e citação `reveal`.
- Quem faz a clínica: `GradeAreas` com `hoverAcende`, idêntico à Home.
- Chamada final: `reveal`.

### Equipe
- Abertura: grafismo-5 no mundo; chips-âncora `reveal` em stagger 40ms.
- Seções de área: cards `reveal` em stagger 60ms; hover eleva 4px; foto zoom 1.03 dentro da máscara; grafismo-3 em Psicologia no mundo.
- Chegada por âncora (`/equipe#psicologia`): a seção destino **não** faz `reveal` (já chega visível), para não piscar na aterrissagem.
- Chamada final: `reveal`.

### Método: o momento do site
- Abertura: grafismo-4 no mundo; foto `maskReveal`.
- **Pilares = `stack`:** quatro folhas verdes `sticky` no mesmo `top`, uma por pilar (número grande, nome, texto); a seguinte sobe por cima e a anterior recua 3% em escala e 10% em opacidade por `scrub`. Botão "próximo" discreto no desktop. Grafismo-3 fixo atrás da pilha, mudando de posição por `scrub` ao longo das quatro folhas (é o único grafismo que "acompanha" uma sequência). Mobile: mesma pilha; folhas cabem em `100svh`.
- Etapas: linha 1 → 4 desenhada por `scrub` (SVG de linha nossa, `stroke-dashoffset`); itens `reveal` em stagger 120ms.
- Diferenciais: símbolo `maskReveal` circular (regra 9: sem grafismo); cards `reveal`.
- Como tudo começa: prosa `reveal`; fotos `maskReveal`; lista com marcador que aparece em stagger 80ms.
- Chamada final: `reveal`; grafismo-5 no mundo.

### Emagrecimento
- Abertura: grafismo-3 no mundo.
- Porta de entrada: foto com parallax interno 0.9 e `maskReveal`; texto `reveal`.
- Quem faz parte: três cards com `hoverAcende` (linkam para a Equipe).
- O que faz parte: grafismo-4 no mundo; seis itens `reveal` em stagger 80ms.
- Programas: três cards `reveal`; sem hover de elevação (não são links).
- FAQ: abertura do `<details>` animada (altura via `grid-template-rows` 0fr → 1fr, 250ms; ícone gira 45°); `prefers-reduced-motion` abre sem transição.
- Chamada final: grafismo-5 no mundo.

### Dra. Mayara
- Abertura: grafismo-4 no mundo; foto `maskReveal` de baixo para cima e parallax interno.
- Trajetória, Como ela atende, Formação: prosa `reveal`; nada mais. Página de confiança, não de espetáculo.
- Chamada final: `reveal`.

### Atendimento on-line
- Abertura: grafismo-5 no mundo.
- Como funciona: seis passos `reveal` em stagger 100ms; linha 1 → 6 desenhada por `scrub` (mesmo componente de linha das Etapas e de "Como começa").
- O que muda / Quem atende: `reveal`.
- FAQ: igual ao Emagrecimento. Chamada final: `reveal`.

### Blog
- Lista: abertura com grafismo-3; chips: o selecionado ganha fundo verde com transição 200ms; cards `reveal` em stagger 60ms; hover: capa zoom 1.04 dentro da máscara, título sublinha.
- Post: **barra de progresso de leitura** (2px, verde) no topo, ligada ao scroll do corpo por `animation-timeline: scroll()`, zero JS; capa `maskReveal`; corpo sem animação (texto longo não anima); bloco de chamada e relacionados `reveal`.

### Contato
- Abertura: grafismo-4 no mundo; dois cards `reveal`.
- Onde estamos / Redes: `reveal`.
- Formulário: campos `reveal` em stagger 60ms na chegada; chip selecionado com transição de borda 200ms; botão habilitando com transição de opacidade 200ms. Nada mais: é formulário.

### 404 e Política de privacidade
- Só `reveal` na abertura. Política: nenhum movimento no corpo.

### Header (todas as páginas)
- `sticky`; transparente sobre a abertura, fundo bege com borda após 80px de rolagem e altura 96 → 72px, por `animation-timeline: scroll(root)` (zero JS). Item ativo: sublinhado cresce da esquerda em 200ms. Menu mobile: itens `reveal` em stagger 40ms ao abrir.

## 4. Técnica (fechada em 29/10, Decisão 010)

**CSS-first, zero biblioteca.** Tudo que é ligado ao scroll usa **CSS scroll-driven animations** (`animation-timeline: scroll()` e `view()`, `animation-range`), guardado por `@supports (animation-timeline: view())`: navegador sem suporte (Safari antigo) vê o estado final, parado, que é o site de hoje. `capa` e `stack` são `position: sticky` com `100svh`, sem `overflow: hidden` em ancestral (quebra sticky no iOS). `reveal` também é `view()` (ligado à entrada na viewport, `animation-range: entry 0% entry 40%`), não IntersectionObserver, para manter zero JS e zero flash sem JavaScript. `hoverAcende`, FAQ, chips, sublinhados: CSS puro. **Único JavaScript de movimento:** um client component `Mundo` de poucas linhas que, em `pointer: fine`, lê o cursor e escreve duas variáveis CSS (`--mx`, `--my`) que `drift` e `tilt3d` consomem; no touch não existe. `prefers-reduced-motion: reduce` desliga todas as animações num bloco único de CSS (padrão da Spinhardi). GSAP só se uma sequência não sair em CSS, como ilha com `next/dynamic`; hoje nenhuma. Lenis fora. Gate: Lighthouse mobile ≥ 90 no preview da Vercel; seção que furar perde movimento, não a página.

## 5. Perguntas abertas para o Alan (histórico; respondidas em 29/10)

1. **hoverAcende** nas Áreas: é a sua ideia de "pick pelos objetos" traduzida? Ou você imaginava os grafismos **sendo** o menu (clicar no grafismo leva à área), sem card?
2. **pin** no Método: uma seção fixa de 1,5 viewport é o único momento de "cena" da Home. Quer esse peso aí, ou prefere no hero?
3. ~~Grafismos atravessando seções~~ Resolvido na v0.2 pelo modelo mundo + folhas: o `Secao` vira folha (fundo, margens, z-index acima do mundo) e o mundo é um componente de página. Estrutura a cravar no Lote 2.
4. Fotos com **máscara** nas demais páginas (Equipe, Dra. Mayara) seguem a mesma gramática do hero: arco em cima, cantos pequenos embaixo. Confirma?
5. Alguma seção onde você quer **menos** do que está aqui?

Próximas versões: v0.2 com A Clínica e páginas do Lote 2, depois de fechar a Home; v1.0 quando a abordagem técnica (Fase 4) estiver escolhida.

## 6. Afinação 1 (30/10, revisão visual do Alan): o que mudou no contrato

Vale sobre as seções anteriores; onde conflitar, esta vence.

- **Folha em toda fronteira de seção (todas as páginas):** a seção N+1 entra por cima de N com canto superior de 32px e sombra para cima; N fica presa pela borda inferior durante 14svh de sobreposição, recua a 0.97 e o conteúdo esmaece a 0.9. É "peel", não pin: N nunca tem conteúdo escondido. Primeira seção de cada página não recua. Consequência: a sangria de grafismo entre seções (Decisão 008, item 4) deixa de existir por desenho.
- **Capa (hero da Home):** desktop em `sticky` real com o hero cabendo em `100svh`; foto recua 0.94 e sobe 5% na máscara, texto esmaece e sobe 24px, grafismo inclina. Mobile: translação por borda inferior com foto em parallax. Enquanto há rolagem, há movimento na foto.
- **Pilhas:** trajeto de 65svh por folha, folha `min(56svh, 32rem)` no desktop; a folha 2 começa a cobrir a 1 com a 1 inteira na tela.
- **Círculo Maya em SVG próprio** (`CirculoMaya`): três círculos em stroke (traço token `--mov-circulo-traco`) e três palavras em `textPath` Lora itálico, geometria calibrada sobre o PNG (97% dos pixels a menos de 4px). Monta-se por tempo ao entrar (desenho + escala 0.7→1 + rotateX 35°→0, 600ms por anel, 150ms entre eles, palavras depois) e desmonta-se por scroll ao sair. O PNG do símbolo saiu de uso em todo o site.
- **Profundidade padrão:** cards entram com rotateX 8°→0 e têm hover `perspective(800px) rotateX(2°) translateY(-4px)`; títulos e eyebrows entram com rotateX 10° pela base; números das pilhas e linhas do tempo fazem pop 0.6→1.04→1. `hoverAcende` também no Manifesto e nos Diferenciais.
- **Camada ambiente: campos de linhas** (`campo-1`, `campo-2`, SVG vetorial que nasce e morre fora do quadro), via `mask-image`, em 3 a 4 folhas por página, deriva ±2%/±1° em 100s, parallax 0.2. Grafismos da marca com rotação ±1,5° em 40s. **Regra das pontas:** toda ponta cortada de um grafismo fica fora da viewport ou atrás de folha (espelhar ou ancorar no canto quando preciso).
- **CTA em cortina:** chamada final como folha de 70svh com título em duas linhas desencontradas (`TituloDesencontrado`, texto intacto) entrando de lados opostos; footer `sticky; bottom: 0` atrás do `<main>` opaco, revelado quando a última folha sobe; grafismo do footer com parallax inverso.
- **Voltar ao topo:** botão flutuante por `scroll(root)`, aparece após 100svh e some 70svh antes do fim; `id="topo"` no header.
- **Política como modal:** `popover` nativo a partir do formulário de contato, com "Fechar" e "Voltar ao formulário"; a página continua existindo.
- **`AoEntrar`:** segundo client component de movimento (IntersectionObserver, marca `data-entrou` uma vez a 20%), só para pops de tempo (Círculo, números). Exceção registrada à Decisão 010.
- **Equipe:** área, descrição e cards centralizados; cards sem affordance de clique até existirem bios (ponto de extensão: popover por profissional).
- **Linhas do tempo:** Etapas (Método) e Como funciona (Atendimento) com `LinhaDesenhada` por scrub e cada item revelando quando a linha o alcança.
- Sem movimento por decisão: cards do Blog (até haver post), Círculo em Diferenciais abaixo de `md`, aberturas não recuam.
