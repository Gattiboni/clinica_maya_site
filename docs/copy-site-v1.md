# Copy do site: Clínica Maya · v1.1.1 (Lotes 1 e 2)

**29/10/2026** (v1.1.1: atributos visuais do Lote 2 alinhados ao mock após o relatório do Codinho: grafismos, fundos, fotos e itálicos; v1.1: Equipe, Método, Emagrecimento e Dra. Mayara; v1.0.1: correções após o relatório do Codinho; itálicos, grafismos e fundos de A Clínica alinhados ao mock). Fonte única da copy institucional que vai para os `.tsx` (Decisão 005, item 2). Origem: mock v3.1 aprovado em 29/10 (`Clinica Maya - Site Completo v20261014.html`; páginas desempacotadas em `mock-v3.1-*.html` na raiz, gitignored) e esqueleto v3. O Codinho transcreve **literal**; correção de texto é edição aqui primeiro, depois no código.

Convenções: `[PENDÊNCIA: ...]` é nota para humanos e **nunca vai para o código**. Itálico marcado com `*palavra*` é ênfase do mock e vai para o código. Links de texto terminam com seta "→" decorativa (`aria-hidden`), como no mock; botões não têm seta. Travessão não existe no site (varredura); use vírgula, dois-pontos ou ponto. Tom feminino para a paciente ("acompanhada"), neutro para a equipe.

Cobertura desta versão: global, header, footer, Home, A Clínica (Lote 1); Equipe, Método, Emagrecimento, Dra. Mayara (Lote 2). Lote 3 entra como v1.2 neste mesmo arquivo.

Regra geral para texto do mock que é anotação interna ("a confirmar", "a preencher", "informações a confirmar"): **não vai para o código**; o campo fica vazio e a pendência fica aqui.

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

## Equipe · `/equipe`

Metadata: título "Equipe"; descrição: Medicina, nutrição, psicologia, terapia e saúde capilar em Antônio Carlos/SC e on-line: conheça quem cuida de você na Clínica Maya.

Seções do mock: Abertura · uma seção por área (5, com âncora) · Chamada final. Fundos alternam creme/bege por área, começando em creme; o card usa a cor oposta ao fundo.

### 1. Abertura (fundo bege; grafismo `grafismo-5`; fileira de chips com os nomes das áreas, cada um âncora para a seção)
- H1: Uma equipe, um plano, *você* no centro
- Texto: Medicina, nutrição, psicologia, terapia e saúde capilar trabalhando de forma integrada: a equipe conversa entre si para que o seu cuidado seja um só.

### 2 a 6. Áreas (H2 = nome da área; `id` = âncora; descrição; cards de profissional)

Card de profissional: foto (quando existir) · nome · para quem atende / foco · modalidade · Instagram (quando existir, link em nova aba). **Sem foto: card sem imagem**, nada de silhueta ou caixa vazia. Grafismo `grafismo-3` só na seção de Psicologia, como no mock.

**`#medicina` · Medicina** · Avaliação e acompanhamento médico de toda a jornada, com base em evidências científicas.
- Dra. Mayara Brasil · Médica de família, com atuação em emagrecimento e saúde. Atende adultos. CRM SC 21112 · RQE 22484. · Presencial e on-line · @dramayarabrasilm · foto `equipe-mayara.jpg`, `object-position: 50% 12%`
- Dr. Arthur · Cardiologia. · Presencial · sem Instagram · foto `equipe-arthur.jpg`, `object-position: 50% 18%`

`[PENDÊNCIA: Dr. Arthur: sobrenome (Hank, segundo o plano), CRM, RQE e descrição. O mock traz "Descrição e registro: informações a confirmar", que é anotação interna e não vai ao ar. Até vir, o card mostra só nome, "Cardiologia." e modalidade. "Cardiologia" está no mock aprovado; confirmar com a clínica junto com o registro.]`

**`#nutricao` · Nutrição** · Alimentação que cabe na sua vida, sem terrorismo nutricional.
- Tânia Guesser · Nutrição com foco em emagrecimento, gestação e fertilidade. · Presencial e on-line · @taniagnutri · foto `equipe-tania.jpg`

**`#psicologia` · Psicologia** · Espaço seguro para cuidar da relação com a comida, com o corpo e com você mesma.
- Alexandra Invitti · Psicologia com orientação familiar. Atende homens, mulheres, jovens e crianças. · Presencial · @alexandrainvitti.psico · sem foto
- Gabriella Sponton · Psicologia para mulheres adultas. · Presencial · @gabriellaspontonpsi · sem foto
- Beatriz Nietsche · Psicologia com foco em infância e adolescência. · Presencial · @beatriznietchepsi · sem foto

**`#terapia` · Terapia** · Cuidado voltado à saúde mental e ao bem-estar.
- Talita Porto · Terapeuta de saúde mental. Atende homens e mulheres. · Presencial · @talitaportoterapias · foto `equipe-talita.jpg`

**`#capilar` · Saúde capilar** · Cuidado com os fios e com o couro cabeludo como parte do bem-estar integral.
- Bianca Folske · Saúde capilar, com tratamento de condições do couro cabeludo. · Presencial · sem Instagram · foto `equipe-bianca.jpg`, `object-position: 72% 30%`

`[PENDÊNCIA: fotos de Alexandra, Gabriella e Beatriz (clínica). CRN/CRP das demais profissionais (clínica). Modalidade de Talita e Bianca "a confirmar" (clínica); o site mostra "Presencial" sem ressalva. Folske × Folks. object-position de Tânia e Talita: fotos novas (29/10), o Codinho define pelo enquadramento e registra.]`

### 7. Chamada final (bloco verde; grafismo `grafismo-4`)
- H2: Não sabe com quem *começar*?  ·  correção sobre o mock, que tinha espaço antes do "?"
- Texto: Nosso atendimento ajuda a encontrar quem faz mais sentido para o seu momento.
- Botão: Agendar consulta → `/contato#agendar`
- Nota: Antônio Carlos/SC e on-line para todo o Brasil

---

## Método Maya · `/metodo`

Metadata: título "Método Maya"; descrição: Humanização e ciência caminhando juntas: os quatro pilares e as quatro etapas da jornada na Clínica Maya.

Seções do mock: Abertura · Pilares · Etapas · Diferenciais · Como tudo começa · Chamada final. Página conceitual, sem conteúdo comercial. É a página do momento de cena do site (mapa de movimento: `stack` nos pilares).

### 1. Abertura (fundo bege; grafismo `grafismo-4`; foto `clinica-3.jpg`, alt "Detalhe do consultório")
- H1: Método Maya
- Texto: Humanização e ciência caminhando juntas: um jeito de cuidar que combina evidências científicas com escuta ativa, empatia e respeito pelo seu ritmo.

### 2. Pilares (bloco verde; grafismo `grafismo-3`; sem símbolo)
- H2: Os quatro pilares
- Lead: O que sustenta cada jornada dentro da clínica.
- 4 itens (número · nome · texto):
  - 01 · Acolher · Escuta ativa, respeito e ausência de julgamentos: compreender a sua história antes de qualquer plano.
  - 02 · Cuidar · Condutas individualizadas, com base em evidências científicas e atenção à saúde como um todo.
  - 03 · Transformar · Mudanças sustentáveis de hábitos, de comportamento e da relação com a comida e com o autocuidado.
  - 04 · Consolidar · Manutenção do que foi conquistado e prevenção de recaídas, com acompanhamento próximo.

### 3. Etapas (fundo bege)
- H2: As quatro etapas da *jornada*
- Lead: Da primeira conversa à consolidação dos novos hábitos.
- 4 itens (número · nome · texto):
  - 1 · Descoberta · A primeira consulta: sua história, seus objetivos e o ponto de partida.
  - 2 · Planejamento · O plano individual, construído com você e com a equipe.
  - 3 · Acompanhamento · Consultas, reavaliações e suporte também entre os encontros.
  - 4 · Consolidação · Os novos hábitos viram o seu novo jeito de viver.

### 4. Diferenciais (fundo creme; símbolo `corpo-mente-espirito-escuro.png` decorativo sobre fundo sólido, sem grafismo, regra 9 do mapa; sem fotos)
- H2: O que torna o método diferente
- 4 cards (título · texto):
  - Humanização e ciência · Evidências científicas aplicadas com escuta e sensibilidade.
  - Personalização · Nenhum plano é igual ao outro, porque nenhuma história é.
  - Corpo, mente e emoções · As três dimensões cuidadas juntas, por uma equipe integrada.
  - Comunidade · Você caminha acompanhada, pela equipe e por quem vive a mesma jornada.

### 5. Como tudo começa (fundo bege; fotos `home-1.jpg` alt "Recepção da clínica" e `clinica-2.jpg` alt "Detalhe da recepção")
- H2: Como tudo começa
- Parágrafo 1: Tudo começa com uma conversa, com tempo de verdade para escutar você antes de qualquer plano.
- Parágrafo 2: É a partir dela que o caminho é desenhado, com quem faz mais sentido para o seu momento e, quando for o caso, com outras áreas da clínica trabalhando junto.
- Subtítulo (H3): O que a gente quer entender
- Lista: Sua história e o que você já tentou · Rotina e contexto de vida · Qualidade do sono · Ansiedade e saúde emocional · Relação com a comida

### 6. Chamada final (bloco verde; grafismo `grafismo-5`)
- H2: A sua jornada começa com uma conversa
- Botão: Agendar a primeira consulta → `/contato#agendar`
- Nota: Antônio Carlos/SC e on-line para todo o Brasil

`[PENDÊNCIA: "Origem e significado" do nome Maya existe no esqueleto v3 como seção a validar pela cliente; o mock v3.1 não a tem. Fica fora até a cliente mandar o texto.]`

---

## Emagrecimento · `/emagrecimento`

Metadata: título "Emagrecimento saudável"; descrição: Acompanhamento médico e nutricional, com apoio emocional quando fizer sentido. A porta de entrada é a consulta com a Dra. Mayara.

Seções do mock: Abertura · Porta de entrada · Quem faz parte · O que faz parte · Programas · FAQ · Chamada final. **Proibido:** tabela ou comparativo, duração, número de consultas, preço, Maya Exclusivo, Maya Presença, "protocolo".

### 1. Abertura (fundo bege; grafismo `grafismo-3`)
- H1: Emagrecimento saudável, sem *radicalismos*
- Texto: Acompanhamento médico e nutricional, com apoio emocional quando fizer sentido. Cada plano nasce da sua história.

### 2. Porta de entrada (fundo creme; foto `equipe-mayara.jpg`, alt "Dra. Mayara Brasil")
- H2: A porta de entrada é a consulta
- Texto: Se você ainda não sabe qual caminho faz sentido, comece por uma consulta com a Dra. Mayara. É nela que vocês desenham juntas o próximo passo, com ou sem programa. Ninguém precisa escolher nada antes.
- Botão: Agendar consulta → `/contato#agendar` · Link: Conhecer a Dra. Mayara → `/dra-mayara-brasil`

`[PENDÊNCIA: o esqueleto v3 prevê um bloco "Para quem não é" nesta seção; o mock v3.1 não o tem. Segue o mock; registrar para a Amanda decidir no pacote da Fase 6.]`

### 3. Quem faz parte (fundo bege; sem grafismo)
- H2: Quem pode fazer parte do seu plano
- Lead: O acompanhamento é médico e nutricional. A psicologia entra quando faz sentido para você e para a equipe.
- 3 cards (nome · texto · link "Conhecer →"):
  - Medicina · Avaliação, condução e reavaliações do tratamento, com a Dra. Mayara Brasil. Presencial e on-line. · `/equipe#medicina`
  - Nutrição · Alimentação possível para a sua rotina, sem terrorismo nutricional, com Tânia Guesser. Presencial e on-line. · `/equipe#nutricao`
  - Psicologia · Espaço seguro para cuidar da ansiedade, da autoestima e da relação com a comida. Presencial em Antônio Carlos/SC. · `/equipe#psicologia`

### 4. O que faz parte (fundo creme; grafismo `grafismo-4`)
- H2: O que costuma fazer parte do acompanhamento
- Lead: Cada plano é individual, mas alguns cuidados aparecem em toda a jornada.
- Lista (6): Plano de ação por escrito ao final dos encontros, para aplicar no dia a dia · Suporte próximo entre as consultas · Acolhimento emocional, sem julgamentos · Reavaliações periódicas do plano · Olhar além da balança: energia, ansiedade, sono, autoestima e comportamento · Acesso ao Círculo Maya, comunidade de pacientes ativas com dicas, receitas e motivação

### 5. Programas (fundo bege; sem grafismo)
- H2: Depois da consulta, um caminho *natural*
- Lead: Para quem precisa de mais do que uma consulta, a clínica tem programas de acompanhamento. A Dra. Mayara indica qual faz sentido para o seu momento.
- 3 cards (nome · uma frase), sem link, sem preço, sem duração:
  - Maya Essencial · Uma estrutura de tratamento completa e individualizada, para começar com acompanhamento próximo.
  - Maya Evolução · Um programa mais abrangente, para jornadas que pedem acompanhamento mais prolongado ou mais complexas.
  - Maya Contínuo · Voltado à continuidade do cuidado, para manter o que já foi conquistado.

### 6. FAQ (fundo creme; perguntas abertas por clique, uma por vez ou livres, escolha do Codinho; conteúdo sempre no DOM)
- H2: Perguntas frequentes
- 4 pares:
  - Preciso escolher um programa antes de agendar? · Não. Você começa pela consulta, e a Dra. Mayara indica o caminho que faz sentido depois de conhecer a sua história.
  - Posso fazer só a consulta? · Pode. A consulta avulsa é uma porta de entrada, e o acompanhamento em programa é uma possibilidade, sem obrigação.
  - Posso ser acompanhada on-line? · Sim. Medicina e nutrição atendem on-line para todo o Brasil. A psicologia, por enquanto, é presencial em Antônio Carlos/SC.
  - A psicologia faz parte do acompanhamento? · Pode fazer, conforme a sua necessidade e a indicação da equipe. Ela também pode ser procurada separadamente.

### 7. Chamada final (fundo creme; grafismo `grafismo-5`; botão verde)
- H2: O primeiro passo é sempre o mesmo: uma conversa
- Botão: Agendar consulta → `/contato#agendar`
- Nota: Antônio Carlos/SC e on-line para todo o Brasil

---

## Dra. Mayara Brasil · `/dra-mayara-brasil`

Metadata: título "Dra. Mayara Brasil"; descrição: Médica de família, com atuação em emagrecimento, e fundadora da Clínica Maya, em Antônio Carlos/SC. Consultas presenciais e on-line.

Seções do mock: Abertura · Trajetória · Como ela atende · Formação e registro · Chamada final. **Única página onde a duração de ~1h30 aparece.** Nunca "especialista em emagrecimento".

### 1. Abertura (fundo bege; grafismo `grafismo-4`; foto `equipe-mayara.jpg`, alt "Dra. Mayara Brasil")
- Eyebrow: Medicina · Responsável técnica
- H1: Dra. Mayara Brasil
- Texto: Médica de família, com atuação em emagrecimento, e fundadora da Clínica Maya. Uma trajetória guiada pela escuta.
- Linha de registro: Médica de Família · CRM SC 21112 · RQE 22484
- Botão: Agendar consulta → `/contato#agendar` · Link externo: @dramayarabrasilm → `https://instagram.com/dramayarabrasilm` (nova aba)

### 2. Trajetória (fundo creme)
- H2: Trajetória
- Parágrafo 1: Médica de família e comunidade, com mais de 10 anos de experiência médica, a Dra. Mayara fundou a Clínica Maya em Antônio Carlos, na Grande Florianópolis, para cuidar de cada paciente com ciência e com tempo de escuta.
- Parágrafo 2: Hoje, sua principal área de atuação é o tratamento médico do sobrepeso e da obesidade, sempre de forma individualizada e sem promessas fáceis. Atende adultos, presencialmente e on-line.

`[PENDÊNCIA: "mais de 10 anos" e os fatos da trajetória vêm do mock aprovado, não de material da cliente; confirmar com a Dra. Mayara no pacote da Fase 6 (Apêndice B do plano: fatos da trajetória, dono cliente).]`

### 3. Como ela atende (fundo bege)
- H2: Como ela atende
- Texto: Consultas de aproximadamente 1h30, que olham além da balança: sono, rotina, história, ansiedade e relação com a comida fazem parte da conversa. Quando faz sentido, o cuidado é integrado com nutrição, psicologia e outras áreas da clínica.

### 4. Formação e registro (fundo creme)
- H2: Formação e registro
- Linha: Médica de Família · CRM SC 21112 · RQE 22484

`[PENDÊNCIA: o mock traz "Graduação e demais formações: a preencher com a Dra. Mayara." Anotação interna; não vai ao ar. A seção mostra só a linha de registro até a cliente mandar a formação.]`

### 5. Chamada final (bloco verde)
- H2: A primeira consulta é o começo da jornada
- Botões: Agendar presencial (sólido bege) → `/contato#agendar` · Agendar on-line (contorno bege) → `/contato#agendar`

---

## Fotos necessárias para o Lotes 1 e 2 (origem: `clinica_maya\revisao_mock\r20261014\web\`, destino: `public/fotos/`)

Lote 1: `home-1.jpg` · `home-2.jpg` · `equipe-mayara.jpg` · `clinica-1.jpg` · `clinica-2.jpg` · `clinica-3.jpg` · `clinica-4.jpg`
Lote 2: `equipe-arthur.jpg` · `equipe-bianca.jpg` · `equipe-talita.jpg` · `equipe-tania.jpg` (todas já em `public/fotos/`, 29/10)

`[PENDÊNCIA: confirmar que os sete nomes existem na pasta de origem com essa grafia; se divergirem, renomear na cópia, não no código.]`
