# Esqueleto do site — Clínica Maya · v3

**Status:** v3.0 · 13/10/2026 · consolida o feedback da Dra. Mayara (10/10) e o briefing de alterações da Amanda (29/09, "Site Clínica Maya: briefing de alterações para o desenvolvimento")
**Função:** contrato de arquitetura de informação. Mock v3 e desenvolvimento implementam isto. Em caso de conflito entre este esqueleto e o briefing da Amanda, **o briefing vence** (é a palavra da gestora da conta); registrar a divergência aqui.
**Substitui:** esqueleto v0.2 (29/08). Principal mudança: o site deixa de vender a consulta de emagrecimento e passa a apresentar a clínica de saúde integral; emagrecimento vira uma área entre áreas, com página própria.

## Premissas (atualizadas)

| Premissa | Consequência |
|---|---|
| A Home vende a marca, não a consulta da Dra. Mayara | Hero institucional com o slogan "Esteja bem com você."; áreas de cuidado em 2º lugar; emagrecimento aparece numa faixa, mais abaixo |
| Emagrecimento tem página própria | `/emagrecimento` substitui `/programas`; explica o caminho, sem comparativo |
| O primeiro passo é a consulta | Sem tabela de programas, sem duração/nº de consultas no site; a Dra. Mayara indica o caminho depois da consulta |
| A clínica é multiprofissional HOJE | Equipe com 7 profissionais em 5 áreas, incluindo Terapia (Talita Porto) e Saúde capilar (Bianca Folske), ativas |
| Estrutura aceita crescimento sem redesenho | Novas áreas e profissionais entram sem tocar no layout (psiquiatria e estética NÃO são anunciadas) |
| Tudo fica com a cliente; crescer sem recomeçar | Modelo de conteúdo CMS-ready; CTA de agendamento é ponto de troca (hoje WhatsApp da recepção) |
| SEO e Ads | URL própria por página; um H1 por página; "emagrecimento" concentrado em `/emagrecimento` e blog; páginas de área recebem campanhas |

## Mapa de páginas e URLs (do briefing)

```
/                      Home
/clinica               A Clínica
/equipe                Equipe (âncoras: /equipe#medicina, #nutricao, #psicologia, #terapia, #capilar)
/metodo                Método Maya
/emagrecimento         Emagrecimento (substitui Programas)
/dra-mayara-brasil     Dra. Mayara
/atendimento-online    Atendimento on-line
/blog · /blog/[slug]   Blog e posts
/contato               Contato e agendamento
```

Removida: página individual de programa (`/programas/maya-essencial`).
Menu: **A Clínica · Equipe · Método · Emagrecimento · Blog · [Agendar]** (página atual destacada; mobile = botão Menu).

## Home — 10 seções, nesta ordem

1. **Hero.** Eyebrow "Clínica de saúde integral · Antônio Carlos/SC e on-line". H1: "Esteja bem com você". Subtítulo: medicina, nutrição, psicologia e saúde capilar num só lugar, equipe que trabalha junta, cuidado que começa pela escuta. CTAs: "Agendar consulta" + "Conhecer a equipe".
2. **Áreas de cuidado.** "Uma clínica, várias formas de cuidar de você". 5 cards (Medicina, Nutrição, Psicologia, Terapia, Saúde capilar) com nomes das profissionais e modalidade; cada card → âncora na Equipe.
3. **Dores.** "Talvez você se reconheça aqui". 6 cards, cada um com "Quem pode ajudar" → área: Ansiedade e comida (Psicologia e Medicina) · Efeito sanfona (Nutrição e Medicina) · Autoestima (Psicologia) · Menopausa e climatério (Medicina e Nutrição) · Cansaço constante (Medicina) · **Queda de cabelo (Saúde capilar)** [novo].
4. **Método Maya e Círculo Maya.** Bloco escuro: Círculo Maya (corpo, mente, espírito, arquivo real da marca), 4 pilares em uma linha cada, link "Conhecer o método".
5. **Como começa.** "Toda jornada começa com uma conversa". 3 passos: agenda → primeira consulta → caminho desenhado. (Substitui os cards de programas.)
6. **Emagrecimento.** Faixa curta: "Emagrecimento saudável, sem radicalismos" + botão "Saiba mais" → `/emagrecimento`. Única menção ao emagrecimento na Home.
7. **Dra. Mayara.** Médica de família, com atuação em emagrecimento, fundadora. Inclui CRM e RQE.
8. **Prova social.** Espaço reservado (segue aguardando verificação CFM).
9. **Blog.** 3 posts de áreas diferentes, com a área da autora.
10. **Chamada final.** "Que tal começar por uma conversa?" + Agendar presencial / on-line. Sem menção a 1h30.

## Página Emagrecimento

1. Abertura: "Emagrecimento saudável, sem radicalismos"; acompanhamento médico e nutricional, apoio emocional quando fizer sentido.
2. A porta de entrada é a consulta (ninguém escolhe nada antes) + bloco "Para quem não é" (mantido).
3. Quem pode fazer parte do seu plano: 3 cards → Medicina (Dra. Mayara), Nutrição (Carolina e Tânia), Psicologia; links para a Equipe.
4. O que costuma fazer parte do acompanhamento: plano de ação escrito, acolhimento, olhar além da balança, suporte entre consultas, reavaliações, Círculo Maya.
5. Depois da consulta, um caminho natural: 3 cards curtos (Maya Essencial, Maya Evolução, Maya Contínuo), uma frase cada.
6. FAQ (4 perguntas; inclui "Preciso escolher um programa antes de agendar?").
7. Chamada final para agendar.

**Proibido nesta página:** tabela/comparativo; duração ou nº de consultas; Maya Exclusivo; páginas individuais de programa.

## Equipe

Título "Uma equipe, um plano, você no centro". 7 profissionais em 5 áreas com âncoras; card = foto (reservada), nome, para quem atende, modalidade, Instagram (quando existir):

- **Medicina:** Dra. Mayara Brasil — médica de família, atuação em emagrecimento e saúde; adultos; presencial e on-line.
- **Nutrição:** Carolina Sauer (emagrecimento, saúde da mulher) · Tânia Guesser @taniagnutri (emagrecimento, gestação, fertilidade); presencial e on-line.
- **Psicologia:** Alexandra Invitti @alexandrainvitti.psico (orientação familiar; homens, mulheres, jovens e crianças) · Gabriella Sponton @gabriellaspontonpsi (mulheres adultas) · Beatriz Nietsche @beatriznietchepsi (infância e adolescência); presencial.
- **Terapia:** Talita Porto @talitaportoterapias — terapeuta de saúde mental; homens e mulheres; presencial (a confirmar).
- **Saúde capilar:** Bianca Folske — condições do couro cabeludo; presencial (a confirmar). **Sem "em breve" em lugar nenhum.**

Regras: descrever psicologia e terapia por público e foco em saúde mental, nunca por técnica; não anunciar psiquiatria nem estética; fechamento "Não sabe com quem começar?" (a Ana ajuda a escolher).

## Demais páginas (deltas sobre a v2)

- **A Clínica:** manifesto ganha saúde capilar no "O quê"; nova seção "Quem faz a clínica" (5 áreas → Equipe); Círculo Maya com arquivo real; espaço com aviso "reforma em andamento: fotos em breve".
- **Método:** página conceitual, sem conteúdo comercial; pilares com descrição real; "Como tudo começa" vale para a clínica inteira; "Origem e significado" com texto a validar pela cliente.
- **Dra. Mayara:** rótulo "Medicina · Responsável técnica"; **CRM SC 21112 · RQE 22484** no topo e no rodapé; "médica de família, com atuação em emagrecimento" (nunca "especialista em emagrecimento"); menção a ~1h30 SÓ aqui.
- **Atendimento on-line:** medicina e nutrição on-line; psicologia, terapia e capilar presenciais; sem 1h30.
- **Blog:** categorias Todos, Emagrecimento, Saúde mental, Saúde da mulher, Saúde capilar; posts mostram a área da autora.
- **Contato:** campo "Com quem você quer agendar?" (Ainda não sei / Medicina / Nutrição / Psicologia / Terapia / Saúde capilar); botão monta mensagem e abre WhatsApp (48) 99620-5000; endereço Av. João Antônio Besen, 265, Centro, Antônio Carlos/SC, 88180-211; seg–sex 8h às 18h.
- **Rodapé:** logo com slogan; texto de saúde integral; "Onde estamos" (endereço, horário, telefone, ícones WhatsApp + Instagram); "Institucional" (Dra. Mayara, Equipe, Atendimento on-line, Política de privacidade); linha final "Responsável técnica: Dra. Mayara Brasil · CRM SC 21112 · RQE 22484".

## Identidade visual (arquivos reais, em docs/id_visual/ID VISUAL/)

- Cabeçalho: `logo-vertical-verde.png` · Rodapé: `logo-tagline-vertical-bege.png` (fundo escuro) / `-verde` (fundo claro).
- Grafismos `grafismo-3/4/5-claro|escuro.png`: cantos de aberturas e blocos escuros, baixa opacidade, nunca competindo com texto.
- Círculo Maya: `corpo-mente-espirito-claro|escuro.png` (Home, A Clínica, Método).
- Cores: bege `#F7EFDF` base · verde `#3F4F4F` destaque/estrutura · marrom `#755958` detalhes e hover · creme `#FFFDF8` superfícies. Azul fora.
- Orientação da Amanda para o mock v3: **não** todo verde como o HTML de referência dela; manter a mescla bege+verde do mock v2.
- Nota de produção: os PNGs têm fundo opaco; produção ideal pede SVG/PNG transparente do designer.
- Tema escuro: NÃO entra no mock v3 (o briefing o trata como opcional).

## Modelo de conteúdo (deltas)

- **Programa:** entidade permanece no CMS (nome, frase curta, ordem, ativo) + campo `exibir_detalhes` = falso nesta fase (duração/consultas ficam guardados, não exibidos). Exclusivo e Presença: `ativo no site` = não. Rota individual desligada.
- **Área:** ganha `âncora` (#medicina etc.) e vira alvo de campanhas.
- **Profissional:** 7 cadastros; Talita e Bianca publicáveis; campo `modalidade` com flag "a confirmar".
- **CTA agendamento:** destino único WhatsApp (48) 99620-5000 com mensagem montada (nome, modalidade, área).
- **Dor:** nova entidade leve (título, frase, áreas que ajudam) — alimenta a seção 3 da Home.

## Regras de conteúdo (consolidadas; valem para mock e site)

Saúde integral, nunca "integrativa/o" · sem técnica de psicoterapia/terapia · só Maya Essencial, Evolução e Contínuo, chamados "programa", nunca "protocolo" · sem nomes antigos de programas inspirados em deusas · sem "renascimento" ("transformação" ok) · sem promessa, prazo, "garantido", "sem esforço" · sem preço, desconto ou promoção · sem antes/depois, depoimento ou número de pacientes até validação CFM · tom conversacional no feminino ("atendida", "acompanhada") · sem "Você merece", "Chega de", "Transforme sua vida hoje", "Não é sobre X, é sobre Y" · slogan sempre "Esteja bem com você." · sem travessões · 1h30 só na página da Dra. Mayara · "em breve" só no aviso de fotos da reforma.

## Pendências herdadas do briefing (ninguém inventa; cada uma tem dono)

Fotos (equipe, Dra., espaço) → clínica · Origem do nome Maya → cliente · Instagram da clínica, da Dra., Carolina e Bianca → clínica · Registros CRN/CRP das demais → clínica · Modalidade Talita e Bianca → clínica · Prova social → CFM · Posts reais → equipe de conteúdo · Política de privacidade → jurídico + dev · Mapa → dev.

Novas (desta consolidação): grafia **Folske × Folks** (INFOS de ago/26 dizia "Folks"; briefing e HTML dizem "Folske"; confirmar com a clínica antes de publicar) · material das bios (prazo era 16/10) alimenta os cards da Equipe.
