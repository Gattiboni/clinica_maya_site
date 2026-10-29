# Esqueleto do site — Clínica Maya

**Status:** v0.2 · validado em 29/08/2026
**Função deste documento:** contrato de arquitetura de informação. O mock (Claude Design) e o site (Codinho) implementam isto; não o contrário. Mudou aqui → muda lá.

## Premissas herdadas do contrato

| Premissa (proposta / briefing) | Consequência no esqueleto |
|---|---|
| Site institucional com blog, preparado para SEO e Google Ads | Cada página tem URL própria, título, meta, H1 único; blog é seção de primeira classe; existe tipo "página de campanha" |
| Apresenta a clínica, a equipe e os programas | Programas e Profissionais são entidades (uma página cada), não parágrafos soltos |
| Vitrine à altura do preço (público de alto valor) | Hierarquia: Programas > Consulta avulsa. Prova social e Método antes de preço |
| Dois perfis, uma voz (Mayara × Clínica) | Site é da **Clínica**; Dra. Mayara tem página própria que funciona como ponte para o perfil pessoal |
| Presencial (Antônio Carlos e região) + on-line (Brasil) | "Atendimento on-line" é página própria; toda CTA de agendamento oferece as duas modalidades |
| Tudo fica com a cliente; crescer sem recomeçar (CRM, agenda, comunicação) | Modelo de conteúdo pensado como CMS desde já; CTA de agendamento é um **ponto de troca** (hoje WhatsApp da Ana, amanhã agenda integrada) |
| Conformidade CFM | Filtro regulatório aplicado a rótulos, não só a textos (ver seção Bloqueios) |

## Mapa de páginas

```
/                          Home
/a-clinica                 A Clínica (história, espaço, Círculo Maya)
/metodo-maya               Método Maya (4 pilares + 4 etapas)
/programas                 Programas (visão geral e comparação)
/programas/[slug]          Programa individual
/dra-mayara-brasil         Dra. Mayara (ponte para o perfil pessoal)
/equipe                    Equipe
/equipe/[slug]             Profissional
/atendimento-online        Como funciona a consulta a distância
/blog                      Blog (lista)
/blog/[slug]               Post
/contato                   Contato e agendamento
/campanhas/[slug]          Página de campanha (Ads) — estrutura prevista, sem conteúdo no mock
/politica-de-privacidade   LGPD (obrigatória para Ads e formulários)
```

Navegação principal (desktop): A Clínica · Método · Programas · Equipe · Blog · **Agendar** (CTA destacada)
Rodapé: endereço, WhatsApp, Instagram (dois perfis), horário, CRM da médica, política de privacidade.

## Seções por página

### Home
1. **Hero** — promessa da marca (acolhimento + ciência), duas CTAs: "Agendar consulta" / "Conhecer os programas". Indicar presencial + on-line.
2. **Para quem é** — as dores do público (ansiedade e comida, efeito sanfona, autoestima, menopausa/climatério, cansaço). Linguagem de reconhecimento, não de diagnóstico.
3. **Método Maya em 4 pilares** — Acolher · Cuidar · Transformar · Consolidar, com link para a página do Método.
4. **Programas** — cards resumidos (nome, para quem, duração), link para /programas.
5. **Dra. Mayara** — bloco curto de credibilidade, foto, link para a página.
6. **Equipe multiprofissional** — grade de áreas (Medicina, Nutrição, Psicologia, Saúde capilar*), link para /equipe.
7. **Círculo Maya** — o símbolo dos 3 círculos e a frase "ninguém caminha sozinho".
8. **Prova social** — *slot reservado; ver Bloqueios antes de preencher*.
9. **Blog** — 3 posts recentes.
10. **CTA final** — Agendar (presencial / on-line) + localização.

### A Clínica
Manifesto (por quê / como / o quê do manual) · Espaço físico (fotos placeholder; reforma em andamento) · Círculo Maya · CTA.

### Método Maya
Origem e significado · 4 pilares (cada um com o que acontece na prática) · 4 etapas (Descoberta → Planejamento → Acompanhamento → Consolidação) · Diferenciais · Como começa: a primeira consulta (~1h30, o que é avaliado) · CTA.

### Programas (visão geral)
Introdução (programa ≠ pacote: o que todo programa inclui) · Tabela comparativa (perfil, duração, consultas, com/sem nutri) · Consulta avulsa como porta de entrada · Como se contrata (após consulta com a Dra. Mayara; Exclusivo é exceção) · CTA.

### Programa individual (template)
Nome + para quem · Duração e estrutura de encontros · O que inclui (lista padrão + específicos) · Com ou sem nutrição · Para quem **não** é (honestidade = confiança) · Perguntas frequentes · CTA "Agendar a primeira consulta".
**Sem preço no template até decisão (ver Questões abertas).**

### Dra. Mayara Brasil
Trajetória (medicina de família → emagrecimento e saúde mental) · Como ela atende (além da balança) · Formação e CRM · Ponte para o Instagram pessoal · CTA.

### Equipe
Introdução (cuidado multiprofissional integrado) · Grade por área · Cada card: nome, área, o que atende, presencial/on-line, Instagram.

### Profissional (template)
Nome, área, registro profissional · O que atende / para quem · Modalidade (presencial/on-line) · Como se agenda (via Ana ou próprio — ver Questões abertas) · Instagram.

### Atendimento on-line
Para quem · Passo a passo real (agenda com a Ana → formulário pré-consulta → Pix na confirmação → link da sala → consulta ~1h30 → receitas digitais) · O que muda em relação ao presencial (sem exame físico; peso e medidas informados) · Quem atende on-line (médica e nutrição; psicologia não) · FAQ · CTA.

### Blog
Lista com categoria, tempo de leitura, busca simples. Post: título, autora (profissional da equipe), data, categoria, corpo, CTA contextual ao fim, posts relacionados.

### Contato
WhatsApp da recepção (CTA principal) · Endereço + mapa · Horário · Formulário mínimo (nome, WhatsApp, presencial/on-line, mensagem) → hoje e-mail/WhatsApp; amanhã CRM · Redes.

### Página de campanha (template, fora do mock)
Composição livre das seções acima com hero e CTA específicos, sem navegação principal, com tracking. Existe para que Ads não dependa de landing page fora do site.

## Modelo de conteúdo (pensado para CMS, independente de qual)

| Tipo | Campos principais | Por que é entidade |
|---|---|---|
| **Configurações do site** | nome, endereço, WhatsApp, horário, redes, CRM, texto legal | Um lugar só; troca de telefone não vira deploy |
| **Página** | slug, título, SEO, lista ordenada de Seções | Páginas de campanha e institucionais usam o mesmo mecanismo |
| **Seção** (blocos) | tipo (hero, dores, pilares, cards de programa, equipe, prova social, blog, CTA, texto, FAQ) + campos do tipo | Composição sem código; mesma seção em várias páginas |
| **Programa** | nome, slug, para quem, faixa de peso, duração, nº consultas médicas, opção nutri (nº), inclui[], não é para[], FAQ[], preço (opcional, oculto), ordem, ativo | Vira card, página, tabela comparativa e futuro item de CRM |
| **Profissional** | nome, slug, área, registro, atende[], modalidades[], agenda via, Instagram, foto, bio, ativo, publicável | Bianca "ativo mas ainda não publicável"; Talita "não publicável" — o filtro regulatório é um campo, não um lembrete |
| **Área** | nome, descrição curta, ordem | Agrupa profissionais e organiza Equipe |
| **Post** | título, slug, resumo, corpo, autora (→Profissional), categoria, data, SEO | Blog |
| **Depoimento** | texto, autora (iniciais), programa (→Programa), autorização | *Só entra em produção após verificação CFM* |
| **CTA de agendamento** | modalidade, canal (whatsapp / formulário / agenda), destino | O ponto de troca WhatsApp → agenda integrada → CRM sem tocar nas páginas |

Relações: Programa ↔ Profissional (quem participa) · Post → Profissional (autora) · Depoimento → Programa.

## Bloqueios (valem para mock e site)

- Nunca "integrativa/integrativo". Usar "integral", "multiprofissional", "multidisciplinar".
- Talita Porto não aparece. Bianca Folks só como "em breve" e sem procedimentos.
- Sem técnica de psicoterapia nomeada além de "psicologia"; TCC não aparece em rótulo público até confirmação.
- Sem promessa de resultado, sem "milagre", sem número de kg como resultado.
- Medicamentos: sem nome comercial em página institucional.
- **Prova social (depoimentos, antes/depois, "resultados reais"):** slot existe no esqueleto, conteúdo não entra até verificarmos a regra do CFM vigente. Não presumir que é permitido nem que é proibido.

## Questões abertas que o esqueleto expõe

1. **Preço nos programas?** Mayara vende na consulta e não desconta; a proposta fala em "vitrine que sustenta o preço". Mostrar, esconder ou "a partir de"? Decisão da Amanda com a cliente.
2. **Agendamento de psicólogas:** hoje elas gerenciam a própria agenda; site diz "agende com a Ana" ou "fale com a profissional"? Depende do treinamento da Ana avançar.
3. **Maia × Maya** no rodapé/e-mail/URL (pendência 1).
4. **Cidade de referência** no rodapé, no mapa e no SEO (pendência 7).
5. **Maya Presença e faixas de kg** (pendências 2 e 3) — o template de programa está pronto, o conteúdo não.
6. **Depoimentos** — verificar CFM antes de o slot receber conteúdo.
