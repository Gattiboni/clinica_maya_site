/**
 * Movimento (Fase 4, mapa de movimento v0.3, Decisão 010; afinação 1 de
 * 30/10): só as constantes que precisam existir em código para componente e
 * CSS não divergirem. Os valores de afinação (durações, fatores, ângulos,
 * opacidades) vivem como tokens `--mov-*` em `app/globals.css`; aqui ficam
 * nomes de classe, atributos e limites que o CSS repete por `nth-child`.
 * Sem lógica.
 */

/** Filhos com stagger por `nth-child` no CSS (`.stagger > :nth-child(1..8)`). */
export const MAX_FILHOS_STAGGER = 8;

/** Folhas de uma pilha com timeline nomeada (`--folha-1` a `--folha-8`). */
export const MAX_FOLHAS = 8;

/** Fragmentos de grafismo recortados por `clip-path` (`.recorte-1` a `.recorte-5`). */
export const MAX_RECORTES = 5;

/**
 * Atributos do `AoEntrar` (único IntersectionObserver do site, exceção da
 * Decisão 010 autorizada na afinação 1): o elemento pede com `data-ao-entrar`
 * e recebe `data-entrou` uma vez, ao entrar 20% na viewport. O CSS liga as
 * animações de tempo (pop dos números, montagem do Círculo Maya) a `[data-entrou]`.
 */
export const AO_ENTRAR = "data-ao-entrar";
export const ENTROU = "data-entrou";
/** Fração visível que dispara o `AoEntrar` (espelhada no comentário do CSS: `entry 25%` é a guarda). */
export const AO_ENTRAR_LIMIAR = 0.2;

/** Nomes de classe das primitivas do mapa, como o CSS as declara. */
export const MOV = {
  /** Entrada por `view()`: opacity 0 → 1 e translateY 24 → 0. */
  reveal: "reveal",
  /** Filhos diretos entram em sequência (passo em `--mov-stagger-passo`). */
  revealStagger: "reveal-stagger",
  /** Só marca os filhos com `--mov-i` (para `mask-reveal` em sequência). */
  stagger: "stagger",
  /** Passo do stagger: 40, 80, 100 e 120 "ms" do mapa (60 é o padrão). */
  stagger40: "stagger-40",
  stagger80: "stagger-80",
  stagger100: "stagger-100",
  stagger120: "stagger-120",
  /** Entrada na carga (tempo, não scroll): filhos em sequência a partir de 200ms. */
  revealCarga: "reveal-carga",
  /** Passo de 40ms na carga (chips) e início após o N-ésimo irmão do pai. */
  carga40: "carga-40",
  cargaApos1: "carga-apos-1",
  cargaApos2: "carga-apos-2",
  cargaApos3: "carga-apos-3",
  /**
   * Profundidade (afinação 1, 2.6): no pai de cards, os filhos entram com
   * rotateX 8° → 0 em perspectiva, além do reveal. Títulos e eyebrows ganham
   * o próprio rotateX 10° pelo seletor de elemento no CSS, sem classe.
   */
  profundo: "profundo",
  /** Pop de tempo (escala 0.6 → 1.04 → 1) disparado por `data-entrou`: números das pilhas e das etapas. */
  pop: "pop",
  /** Parallax por camada (fatores em tokens). */
  parallaxMundo: "parallax-mundo",
  parallaxFrente: "parallax-frente",
  parallaxCampo: "parallax-campo",
  /** Foto que se move dentro da máscara (`.mascara` no pai). */
  parallaxMidia: "parallax-midia",
  mascara: "mascara",
  /** Drift pelo cursor (amplitude em tokens), só `pointer: fine`. */
  driftMundo: "drift-mundo",
  driftFrente: "drift-frente",
  tilt3d: "tilt3d",
  /** Rotação lenta contínua (±1,5° em 40s) dos grafismos do mundo. */
  giraLento: "gira-lento",
  /** maskReveal por `clip-path`. */
  maskCima: "mask-reveal-cima",
  maskDireita: "mask-reveal-direita",
  maskCircular: "mask-reveal-circular",
  /** Scrub ao longo da seção (`--secao`) ou da pilha (`--pilha`). */
  scrubRotacao: "scrub-rotacao",
  scrubDeslocamento: "scrub-deslocamento",
  scrubPilha: "scrub-pilha",
  scrubInclinar: "capa-inclina",
  /** Wipe na carga (hero). */
  wipeCarga: "wipe-carga",
  /**
   * Capa: o hero. Desktop: `sticky` real em `top: 0`, cabendo em 100svh;
   * mobile: preso pela borda inferior por translação. Tudo ligado à entrada da
   * folha seguinte (`--pos-capa`, publicada por `.capa + .secao`).
   */
  capa: "capa",
  capaEsmaece: "capa-esmaece",
  capaRecua: "capa-recua",
  capaFoto: "capa-foto",
  indicadorRolagem: "indicador-rolagem",
  /** Pilha de folhas `sticky`. */
  stack: "stack",
  folha: "folha",
  folhaProximo: "folha-proximo",
  /** Toda `Secao` leva esta classe: timeline `--secao`, `scroll-margin-top` do header e a folha (2.1). */
  secao: "secao",
  /** Fundo da seção (camada `fundo`): recebe o canto arredondado e a sombra da folha. */
  secaoFundo: "secao-fundo",
  /** Slot de grafismo da seção: nas folhas (toda seção que não é a primeira) recorta nos dois eixos. */
  secaoGrafismo: "secao-grafismo",
  /** Chamada final como folha cheia (70svh no desktop, conteúdo centralizado). */
  ctaFolha: "cta-folha",
  /** Título em duas linhas desencontradas, cada uma entrando de um lado. */
  tituloDesencontrado: "titulo-desencontrado",
  /** Campo de linhas orgânicas (camada ambiente): deriva contínua e parallax 0.2. */
  campo: "campo",
  campoDeriva: "campo-deriva",
  /** Linha SVG desenhada por scrub: pela seção, pela pilha ou pelo trilho (`--linha`) que a envolve. */
  linhaDesenhada: "linha-desenhada",
  linhaDesenhadaPilha: "linha-desenhada-pilha",
  linhaDesenhadaTrilho: "linha-desenhada-trilho",
  /** Invólucro que publica a timeline `--linha`; os filhos de `.reveal-linha` revelam quando a linha os alcança. */
  linhaTrilho: "linha-trilho",
  revealLinha: "reveal-linha",
  /** Círculo Maya em SVG: monta por tempo (`data-entrou`), desmonta por scroll. */
  circulo: "circulo-maya",
  circuloAnel: "circulo-anel",
  circuloTraco: "circulo-traco",
  circuloPalavra: "circulo-palavra",
  /** Hover. */
  hoverEleva: "hover-eleva",
  hoverAcende: "hover-acende",
  acende: "acende",
  hoverZoom: "hover-zoom",
  zoomCapa: "zoom-capa",
  zoomFoto: "zoom-foto",
  sublinhaHover: "sublinha-hover",
  transicaoHover: "transicao-hover",
  pulsar: "pulsar",
  /** Header e navegação. */
  headerFixo: "header-fixo",
  headerConteudo: "header-conteudo",
  headerLogo: "header-logo",
  navItem: "nav-item",
  menuMobile: "menu-mobile",
  /** Cortina do footer: `<main>` é o palco opaco que sobe e revela o footer `sticky` embaixo. */
  footerCortina: "footer-cortina",
  footerGrafismo: "footer-grafismo",
  /** Botão flutuante "Voltar ao topo": aparece após 100svh e some antes do footer. */
  voltarTopo: "voltar-topo",
  voltarTopoSome: "voltar-topo-some",
  /** Modal da Política de privacidade (`popover` nativo). */
  modal: "modal-prosa",
  /** FAQ e post. */
  faqCorpo: "faq-corpo",
  faqIcone: "faq-icone",
  progressoLeitura: "progresso-leitura",
  /** Camadas internas do `Grafismo`: raiz com perspectiva e camadas em bloco. */
  grafismoRaiz: "grafismo-raiz",
  grafismoCamada: "grafismo-camada",
  /** Fragmento recortado por `clip-path` (`recorte-1` a `recorte-5`). */
  recorte: "recorte",
} as const;
