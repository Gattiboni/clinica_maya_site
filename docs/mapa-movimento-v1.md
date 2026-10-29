# Mapa de movimento e camadas: site Clínica Maya · v0.2 (rascunho para reação)

**29/10/2026** (v0.2: modelo "mundo + folhas", capa no hero, `stack` e `tilt3d`; pin sai da Home e vai para a página do Método). Contrato de camadas e movimento. Não é mock: diz **o que** cada elemento faz, em que camada vive e como se comporta no scroll, no cursor, no mobile e com `prefers-reduced-motion`. O Lote 2 constrói as páginas já com as camadas; a Fase 4 liga o movimento sem reabrir estrutura. Referências de gramática (não de técnica): Oryzo (oryzo.ai, Lusion) e Pradip Dhakal (awwwards, out/2026): profundidade real, objetos que respondem, navegação por descoberta. Ambas são WebGL; aqui tudo é 2D, transform e opacity, dentro do gate Lighthouse mobile ≥ 90.

Marca manda no tom: Sábio + Cuidador. Movimento lento, contínuo, orgânico. Nada salta, nada pisca, nada persegue o cursor. A sensação é de página viva, não de página que faz truque.

---

## 1. Vocabulário

### 1.1 Camadas (ordem de empilhamento, de trás para a frente)

| Camada | O que é | Velocidade no scroll | Cursor | Mobile |
|---|---|---|---|---|
| **C0 Fundo** | cor da seção (bege, creme, verde) | 1.0 (normal) | não | igual |
| **C1 Mundo** | plano **fixo atrás de tudo** com os SVGs grandes (grafismo 3, 4 e 5) em posições distintas, opacidade 0.12 a 0.35. As seções são folhas que deslizam por cima dele, com margens que o deixam aparecer entre e ao lado das folhas. A cor dos grafismos muda conforme a folha que passa (verde sobre bege, bege sobre verde) | 0.25 a 0.4 (parece distante) | drift de até 8px, amortecido, e **tilt3d** de até 6° | parallax 0.15, sem drift, sem tilt |
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
7. Mobile (< 1024px): sem pin, sem drift, sem tilt, parallax reduzido, reveals mantidos; `stack` e `capa` mantidos (sticky funciona), com folhas que cabem na viewport.
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

## 3. Perguntas abertas para o Alan (reagir aqui, não no código)

1. **hoverAcende** nas Áreas: é a sua ideia de "pick pelos objetos" traduzida? Ou você imaginava os grafismos **sendo** o menu (clicar no grafismo leva à área), sem card?
2. **pin** no Método: uma seção fixa de 1,5 viewport é o único momento de "cena" da Home. Quer esse peso aí, ou prefere no hero?
3. ~~Grafismos atravessando seções~~ Resolvido na v0.2 pelo modelo mundo + folhas: o `Secao` vira folha (fundo, margens, z-index acima do mundo) e o mundo é um componente de página. Estrutura a cravar no Lote 2.
4. Fotos com **máscara** nas demais páginas (Equipe, Dra. Mayara) seguem a mesma gramática do hero: arco em cima, cantos pequenos embaixo. Confirma?
5. Alguma seção onde você quer **menos** do que está aqui?

Próximas versões: v0.2 com A Clínica e páginas do Lote 2, depois de fechar a Home; v1.0 quando a abordagem técnica (Fase 4) estiver escolhida.
