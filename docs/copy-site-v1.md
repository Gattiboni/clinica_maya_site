# Copy do site: Clínica Maya · v1.0.1 (Lote 1)

**29/10/2026** (v1.0.1: correções após o relatório do Codinho; itálicos, grafismos e fundos de A Clínica alinhados ao mock). Fonte única da copy institucional que vai para os `.tsx` (Decisão 005, item 2). Origem: mock v3.1 aprovado em 29/10 (`Clinica Maya - Site Completo v20261014.html`; páginas desempacotadas em `mock-v3.1-*.html` na raiz, gitignored) e esqueleto v3. O Codinho transcreve **literal**; correção de texto é edição aqui primeiro, depois no código.

Convenções: `[PENDÊNCIA: ...]` é nota para humanos e **nunca vai para o código**. Itálico marcado com `*palavra*` é ênfase do mock e vai para o código. Links de texto terminam com seta "→" decorativa (`aria-hidden`), como no mock; botões não têm seta. Travessão não existe no site (varredura); use vírgula, dois-pontos ou ponto. Tom feminino para a paciente ("acompanhada"), neutro para a equipe.

Cobertura desta versão: global, header, footer, Home, A Clínica. Lote 2 (Equipe, Método, Emagrecimento, Dra. Mayara) e Lote 3 entram como v1.1 e v1.2 neste mesmo arquivo.

---

## Global

- Nome: Clínica Maya
- Slogan (sempre com ponto final quando isolado): Esteja bem com você.
- Descrição curta (metadata padrão): Clínica de saúde integral em Antônio Carlos, Santa Catarina, com atendimento presencial e on-line.
- WhatsApp: `https://wa.me/5548996205000` · exibição: (48) 99620-5000
- Instagram da clínica: `https://instagram.com/clinicamaya.ac` · exibição: @clinicamaya.ac
- Endereço: Av. João Antônio Besen, 265 · Centro, Antônio Carlos/SC · CEP 88180-211
- Horário: Seg. a sex., 8h às 18h
- Responsável técnica: Dra. Mayara Brasil · CRM SC 21112 · RQE 22484
- Destino de todo CTA "Agendar": `/contato#agendar` (página do Lote 3). Ícone de WhatsApp no rodapé vai direto ao `wa.me`.

`[PENDÊNCIA: inscrição da clínica (pessoa jurídica) no CRM-SC. Fase 0, dono: cliente. Quando vier, entra na linha final do rodapé ao lado da responsável técnica.]`

---

## Header (todas as páginas)

- Logo: `public/marca/logo-vertical-verde.png`, alt "Clínica Maya", link para `/`, `aria-label` "Clínica Maya, página inicial". Altura 56px no desktop.
- Navegação (`aria-label` "Principal"), nesta ordem: A Clínica `/clinica` · Equipe `/equipe` · Método `/metodo` · Emagrecimento `/emagrecimento` · Blog `/blog`
- Página atual: peso 700 e sublinhado verde de 2px; demais: peso 400, sublinhado transparente.
- Botão pílula verde no fim da navegação: Agendar → `/contato#agendar`
- Mobile: botão com rótulo "Menu" abre a mesma lista; o botão Agendar permanece visível.

---

## Footer (todas as páginas)

Fundo verde, texto bege. Grafismos `grafismo-5-claro.png` (canto inferior direito, opacidade 0.18) e `corpo-mente-espirito-claro.png` (canto inferior esquerdo, opacidade 0.10), decorativos, `alt=""`.

Coluna 1
- Logo: `public/marca/logo-tagline-vertical-bege.png`, alt "Clínica Maya, Esteja bem com você", largura 150px
- Texto: Saúde integral com acompanhamento multiprofissional: medicina, nutrição, psicologia e saúde capilar. Presencial em Antônio Carlos/SC e on-line para todo o Brasil.

Coluna 2 · título: Onde estamos
- Av. João Antônio Besen, 265 / Centro, Antônio Carlos/SC / CEP 88180-211
- Seg. a sex., 8h às 18h
- (48) 99620-5000
- Ícones circulares: WhatsApp (`aria-label` "WhatsApp da clínica", `title` "WhatsApp (48) 99620-5000") e Instagram (`aria-label` "Instagram da clínica, @clinicamaya.ac", `title` "@clinicamaya.ac", nova aba)

Coluna 3 · título: Institucional
- Dra. Mayara Brasil → `/dra-mayara-brasil`
- Equipe → `/equipe`
- Atendimento on-line → `/atendimento-online`
- Política de privacidade → `/politica-de-privacidade` `[PENDÊNCIA: página é do Lote 3; no Lote 1 este link NÃO é renderizado, mesma conduta da Spinhardi. Entra no Lote 3.]`

Linha final
- © 2026 Clínica Maya · Todos os direitos reservados
- Responsável técnica: Dra. Mayara Brasil · CRM SC 21112 · RQE 22484

---

## Home · `/`

Metadata: título "Clínica Maya" (padrão do layout, sem template); descrição = descrição curta global.

Ordem das seções do mock: Hero · Áreas de cuidado · Dores · Método e Círculo Maya · Como começa · Faixa emagrecimento · Dra. Mayara · Prova social · Blog · Chamada final. **Prova social não é renderizada** (ver nota na seção).

### 1. Hero (fundo bege; grafismo `grafismo-3-escuro.png` no canto superior direito, opacidade 0.35)
- Eyebrow (caixa alta): Clínica de saúde integral
- H1: Esteja bem com você  ·  a palavra "você" em itálico
- Subtítulo: Medicina, nutrição, psicologia e mais especialidades num só lugar, com uma equipe que trabalha junta e um cuidado que começa pela escuta.
- Botões: Agendar consulta → `/contato#agendar` · Conhecer a equipe → `/equipe`
- Nota abaixo dos botões: Atendimento presencial em Antônio Carlos/SC e também on-line.
- Foto: `public/fotos/home-2.jpg`, alt "Dra. Mayara Brasil", proporção 4:5, cantos superiores arredondados em arco (180px), inferiores 24px.

### 2. Áreas de cuidado (fundo creme)
- H2: Uma clínica, várias formas de cuidar de você
- Lead: Cada área tem profissionais próprias, e todas conversam entre si para que o seu cuidado seja um só.
- Link: Conhecer a equipe → `/equipe`
- 5 cards (nome · texto · quem · modalidade · link):
  1. Medicina · Avaliação e acompanhamento médico, com atuação em emagrecimento e saúde. · Dra. Mayara Brasil e Dr. Arthur · Presencial e on-line · `/equipe#medicina`
  2. Nutrição · Alimentação que cabe na sua rotina, sem terrorismo nutricional. · Tânia Guesser · Presencial e on-line · `/equipe#nutricao`
  3. Psicologia · Espaço seguro para tratar ansiedade, autoestima e relação com a comida. · Alexandra Invitti, Gabriella Sponton e Beatriz Nietsche · Presencial · `/equipe#psicologia`
  4. Terapia · Terapias voltadas à saúde mental, promovendo qualidade de vida e bem-estar. · Talita Porto · Presencial · `/equipe#terapia`
  5. Saúde capilar · Cuidado com o couro cabeludo e com os fios, como parte do bem-estar e da saúde. · Bianca Folske · Presencial · `/equipe#capilar`

`[PENDÊNCIA: "Dr. Arthur" sem sobrenome e sem CRM; o mock está assim. Bio e dados completos do Dr. Arthur Hank são item da Fase 2. Até lá, transcrever como está.]`
`[PENDÊNCIA: grafia Folske × Folks, dono: clínica. O mock e a varredura assumem Folske.]`
`[PENDÊNCIA: modalidade de Talita e Bianca "a confirmar" pela clínica; o mock exibe "Presencial" sem ressalva e assim vai para o código.]`

### 3. Dores (fundo bege; grafismo `grafismo-4-escuro.png`)
- H2: Talvez você se reconheça *aqui*
- Lead: Cada uma dessas histórias pede um olhar diferente. Veja quem na clínica pode ajudar.
- 6 cards (título · texto · "Quem pode ajudar: ..." · link):
  1. Ansiedade e comida · Quando comer vira válvula de escape e a culpa vem logo depois. · Psicologia e Medicina · `/equipe#psicologia`
  2. Efeito sanfona · Dietas que funcionam por um tempo, até tudo voltar. · Nutrição e Medicina · `/equipe#nutricao`
  3. Autoestima · Evitar o espelho, as fotos e as roupas que você gostava. · Psicologia e Terapia · `/equipe#psicologia`
  4. Menopausa e climatério · Um corpo que muda e pede um cuidado diferente. · Medicina e Nutrição · `/equipe#medicina`
  5. Cansaço constante · Dormir mal, acordar sem energia e não saber por onde começar. · Medicina e Terapia · `/equipe#medicina`
  6. Queda de cabelo · Fios mais frágeis ou uma queda que preocupa e ainda não tem explicação. · Saúde capilar · `/equipe#capilar`

### 4. Método e Círculo Maya (bloco verde, texto bege; grafismo `grafismo-4-claro.png`; imagem `public/marca/corpo-mente-espirito-claro.png`, alt "Círculo Maya: corpo, mente e espírito")
- H2: O Método Maya
- Lead: Corpo, mente e espírito são três dimensões de um mesmo cuidado. No Círculo Maya, ninguém caminha sozinha.
- 4 pilares, uma linha cada, no formato "Nome. Texto":
  - Acolher. Escuta ativa e sem julgamentos, antes de qualquer plano.
  - Cuidar. Um plano feito para você, com base em evidências científicas.
  - Transformar. Mudanças de hábito construídas passo a passo, no seu ritmo.
  - Consolidar. Acompanhamento próximo para o novo jeito de viver permanecer.
- Link: Conhecer o método → `/metodo`

### 5. Como começa (fundo bege; `corpo-mente-espirito-escuro.png` decorativo em baixa opacidade; foto `public/fotos/home-1.jpg`, alt "Recepção da Clínica Maya")
- H2: Toda jornada começa com uma *conversa*
- Lead (duas frases, quebra de linha entre elas): Você não precisa saber de antemão qual área procurar. / A gente ajuda a encontrar o caminho.
- 3 passos (número · título · texto):
  1. Você agenda · Nossa recepcionista cuida da agenda de toda a equipe e ajuda a escolher com quem começar.
  2. A primeira consulta · Um encontro para escutar a sua história, a sua rotina e o que você precisa neste momento.
  3. O caminho é desenhado · Com uma ou mais áreas da clínica, no seu ritmo, e com acompanhamento próximo depois.

### 6. Faixa emagrecimento (fundo creme, faixa curta)
- H2: Emagrecimento saudável, sem radicalismos
- Texto: Acompanhamento médico e nutricional, com apoio emocional quando fizer sentido. A Dra. Mayara indica o caminho depois da primeira consulta.
- Botão: Saiba mais → `/emagrecimento`

### 7. Dra. Mayara (fundo bege; foto `public/fotos/equipe-mayara.jpg`, alt "Dra. Mayara Brasil")
- H2: Dra. Mayara Brasil
- Texto: Médica de família, com atuação em emagrecimento, e fundadora da Clínica Maya. Reuniu na clínica profissionais que compartilham o mesmo jeito de cuidar: com ciência, escuta e sem julgamentos.
- Linha de registro: Médica de Família · CRM SC 21112 · RQE 22484
- Link: Conhecer a Dra. Mayara → `/dra-mayara-brasil`

### 8. Prova social
**Não renderizar.** O mock traz um espaço reservado com aviso interno; aviso interno não vai ao ar. A seção entra quando a Fase 0 decidir rota (a) ou (b). No código, apenas um comentário apontando para esta nota.

### 9. Blog (fundo creme)
- H2: Para ler com calma
- Link: Ver o blog → `/blog`
- 3 cards, do mais recente ao mais antigo: imagem de capa · "Categoria · N min" · título · "Por {área da autora}"
- Fonte dos dados: Sanity (`post`, com `author` e `categories` resolvidos). **Sem post publicado, a seção inteira não é renderizada.** Os três títulos do mock são exemplo de layout, não conteúdo: não vão para o código.

### 10. Chamada final (bloco verde; grafismo `grafismo-5-claro.png`)
- H2: Que tal começar por uma *conversa*?  ·  correção sobre o mock, que tinha espaço antes do "?"
- Texto: Conte com a nossa equipe para encontrar o melhor primeiro passo para você.
- Botão: Agendar presencial ou on-line → `/contato#agendar`

---

## A Clínica · `/clinica`

Metadata: título "A Clínica" (template do layout acrescenta "| Clínica Maya"); descrição: Acolher, compreender e transformar: a essência da Clínica Maya, em Antônio Carlos/SC e on-line.

Seções do mock: Abertura · Manifesto · Espaço · Círculo Maya · Quem faz a clínica · Chamada final.

### 1. Abertura (fundo bege; grafismo `grafismo-3-escuro.png`)
- H1: Acolher, compreender e *transformar*
- Texto: Essa é a essência da Clínica Maya: um atendimento personalizado e humanizado, onde cada pessoa é tratada de forma única, com respeito às suas particularidades, e toda transformação se constrói de maneira sustentável, com base em evidências científicas.

### 2. Manifesto (fundo creme; grafismo `grafismo-5-escuro.png`)
- H2: O nosso manifesto
- Lead: Por que existimos, como cuidamos e o que oferecemos.
- 3 blocos (eyebrow · título · texto):
  1. Por quê · Toda pessoa merece ser vista como única · Acreditamos que toda pessoa merece um espaço onde seja compreendida, acolhida e tratada com respeito às suas singularidades. A verdadeira transformação começa quando a pessoa é vista como única, além de abordagens padronizadas ou radicais.
  2. Como · Ciência, empatia e proximidade · Respeito pela vida e pelo contexto de cada pessoa, sem julgamentos. Escuta ativa e atenção plena, acompanhamento próximo também fora da consulta, atuação multiprofissional integrada e mudanças sustentáveis, sem radicalismos ou soluções milagrosas.
  3. O quê · Uma jornada completa de saúde · Consultas individualizadas, programas de acompanhamento, sessões de psicoterapia, consultas de nutrição e cuidado com a saúde capilar, integrando corpo, mente e bem-estar em uma jornada de transformação sustentável.

Nota de varredura: "sem radicalismos ou soluções milagrosas" é a única exceção cadastrada em `permitidos`; manter a frase exatamente assim.

### 3. Espaço (fundo bege; sem grafismo)
- H2: O nosso espaço
- Lead: Um ambiente pensado para você se sentir em casa, em Antônio Carlos/SC.
- 4 fotos em grade: `clinica-1.jpg` alt "Fachada da Clínica Maya" · `clinica-2.jpg` alt "Detalhe da recepção" · `clinica-3.jpg` alt "Detalhe do consultório" · `clinica-4.jpg` alt "Sala de espera da Clínica Maya"

### 4. Círculo Maya (bloco verde; imagem `corpo-mente-espirito-claro.png`, alt "Círculo Maya: corpo, mente e espírito"; grafismo `grafismo-4-claro.png`)
- H2: O Círculo Maya
- Texto: Corpo, mente e espírito, três dimensões de um mesmo cuidado, que só se transformam quando caminham juntas.
- Citação: "No Círculo Maya, ninguém caminha sozinha."

### 5. Quem faz a clínica (fundo bege, cards creme)
- H2: Quem faz a clínica
- Lead: Medicina, nutrição, psicologia, terapia e saúde capilar, com profissionais que se falam entre si.
- Link: Conhecer a equipe → `/equipe`
- Os mesmos 5 cards de áreas da Home, seção 2, mesmo conteúdo e mesma ordem (um só componente, uma só fonte de dados).

### 6. Chamada final (fundo creme, botão verde)
- H2: Venha conhecer a Clínica Maya
- Botão: Agendar presencial ou on-line → `/contato#agendar`

---

## Fotos necessárias para o Lote 1 (origem: `clinica_maya\revisao_mock\r20261014\web\`, destino: `public/fotos/`)

`home-1.jpg` · `home-2.jpg` · `equipe-mayara.jpg` · `clinica-1.jpg` · `clinica-2.jpg` · `clinica-3.jpg` · `clinica-4.jpg`

`[PENDÊNCIA: confirmar que os sete nomes existem na pasta de origem com essa grafia; se divergirem, renomear na cópia, não no código.]`
