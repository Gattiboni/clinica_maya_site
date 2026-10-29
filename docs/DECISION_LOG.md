# Decision log — site Clínica Maya

Uma decisão por regra de arquitetura ou contrato. Numeração contínua.

## Decisão 001 — Stack: Next.js 16 + Tailwind 4 + Sanity desde o dia 1, no padrão da Spinhardi

**Data:** 2026-10-29 · **Owner:** Alan

**Contexto.** A proposta inicial (27/10) era Astro estático com conteúdo em arquivos, pela performance por padrão. O Alan objetou: qualquer back mínimo viraria remendo e plugar Sanity depois seria refactor. Verificação no repo `Gattiboni/spinhardi_site` mostrou o padrão real da agência: Next 16, React 19, Tailwind 4, Sanity, Supabase, Resend. Uma pessoa só revisa e commita; dois frameworks na casa é dívida organizacional.

**Decisão.** (1) **Next.js 16, App Router, TypeScript estrito**, mesmas convenções da Spinhardi (sem `src/`, `@tailwindcss/postcss`, `cacheComponents` off): um playbook só para prompts, revisão e deploy. (2) **Renderização estática por padrão em todas as páginas**; client components só para movimento e formulário; `next/image`; fontes via `next/font` — guarda-corpo que preserva o motivo de ter cogitado Astro. (3) **Sanity desde o dia 1** para todo conteúdo (equipe, áreas, dores, programas, posts, config): se é o destino, começar com arquivos e migrar é o refactor a evitar; a gestão mensal (Etapa 2 do contrato) publica sem PR. (4) **Tailwind 4 com tokens em `@theme`** e paleta padrão desligada: só as quatro cores da marca existem. (5) **Dependências entram com a feature, nunca antes**: Supabase, Resend, Recharts e `@portabletext/react` ficam fora até haver uso.

**Alternativas descartadas.** Astro + content collections (tecnicamente ideal para 10 páginas, mas segundo framework na agência; reavaliar só se a Spinhardi migrar); Next com conteúdo em arquivos e Sanity depois (refactor programado); CSS próprio sem Tailwind (consistência com a Spinhardi pesou mais).

---

## Decisão 002 — Varredura regulatória como gate automático de CI

**Data:** 2026-10-29 · **Owner:** Alan (script e ajustes de regex: Codinho)

**Contexto.** Durante os mocks (v1 a v3.1) a verificação de termos vetados (CFM, decisões da gestora, regras de linguagem da cliente) foi manual, rodada pelo Claude sobre cada export. Com código, texto nasce em muitos lugares e um deslize chega ao ar sem ninguém ler.

**Decisão.** (1) **`scripts/varredura.mjs` lê uma config externa (`varredura.config.json`)** com regex vetadas, exceções exatas e regra de H1 único; mudar regra é editar JSON, não código. (2) **Varre fonte e build:** `app/`, `components/`, `lib/`, `sanity/`, SVGs e o HTML gerado em `.next/server/app`, ignorando `<script>` (payload do React) e o HTML do Studio. (3) **Regex de termos curtos levam `\b`** (`\bTCC\b`, `\b[0-9]+ ?kg\b`): sem isso, ids de build e base64 casam em todo build — furo pego pelo Codinho no primeiro `npm run build`. (4) **`test:varredura` prova o gate** injetando termo e exigindo falha; CI roda os dois em todo PR e bloqueia merge. (5) **Conteúdo do Sanity não é varrido por este script**: o texto editado no Studio precisa do próprio gate (validação de campo ou webhook), a definir quando o Studio estiver em uso.

**Alternativas descartadas.** Lint de prosa genérico (Vale, textlint) com dicionário (dependência e config para o mesmo resultado); varrer só a fonte (perde texto montado em runtime e placeholders de dados); confiar em revisão humana (é o que se tinha nos mocks e exigia uma pessoa lendo tudo a cada rodada).

---

## Decisão 003 — Propriedade e hospedagem: Vercel no login da agência, Sanity na conta da clínica, domínio e DNS no Wix

**Data:** 2026-10-29 · **Owner:** Alan

**Contexto.** O contrato diz "tudo fica com a cliente". A verificação no Wix (29/10) mostrou que o domínio é `clinicamaya.com` (com y; a grafia "clinicamaia" que circulou desde agosto era erro de transcrição automática), renova em 22/10/2028, sem e-mail, DNS no próprio Wix. A documentação da Vercel (set/2026) diz: Hobby é não comercial; Password Protection custa US$ 20/mês por projeto no Pro; Vercel Authentication e Shareable Links existem em todos os planos. Foi criada a conta técnica `clinicamaya.digital@gmail.com`, com recuperação ligada ao `clinicamaya.ac@gmail.com` da clínica.

**Decisão.** (1) **Time Vercel `clinica-maya` sob o login do Alan**, como a Spinhardi: já é isolado por natureza e o Pro permite transferir depois; criado em Pro Trial, com decisão de plano antes do 12º dia. (2) **Produção só em Pro**, com cartão da clínica, antes de apontar o DNS: fair use do Hobby proíbe uso comercial. (3) **Previews fechados com Vercel Authentication e abertos à gestora e à cliente por Shareable Link**, sem senha paga e sem conta para elas. (4) **Sanity na conta `clinicamaya.digital@gmail.com`**, como a Spinhardi faz com a conta do cliente: ferramentas de blog e back-office da Spinhardi são reaproveitáveis trocando credenciais, ambiente e identidade. (5) **Domínio e DNS continuam no Wix**: apontar para a Vercel é trocar os 3 registros A da raiz e o CNAME de `www`; nameservers não mudam, para a cliente manter controle e poder ligar e-mail (MX) sem tocar na Vercel. (6) **Transcrição automática não é fonte de grafia nem de dado exato** (mesmo princípio vale para qualquer material gerado por IA sem verificação).

**Alternativas descartadas.** Time Vercel na conta da clínica desde o início (Hobby não permite membros; o Alan precisaria operar pelo login da cliente o tempo todo); projeto no time Gattiboni Enterprises com transferência no go-live (uma operação a mais sem ganho); nameservers na Vercel (concentra DNS fora da conta da cliente); registrar `clinicamaya.com.br` (desnecessário, o `.com` já é da clínica).

---

## Decisão 004 — Modelo de conteúdo no Sanity espelha o esqueleto v3; detalhes de programa existem mas não se exibem

**Data:** 2026-10-29 · **Owner:** Alan (schemas: Codinho, a partir da instrução de scaffold)

**Contexto.** O esqueleto v3 (13/10) define as entidades do site. O briefing da gestora (29/09) e a cliente (10/10) decidiram que o site não mostra comparativo, duração, número de consultas nem preço de programa, mas esses dados existem e importam para o comercial e para um CRM futuro.

**Decisão.** (1) **Seis tipos, nem mais nem menos:** `siteConfig`, `area`, `profissional`, `dor`, `programa`, `post`; nenhum campo fora do esqueleto, exceto o que a instrução de scaffold cravou (`slug` em `programa`). (2) **`programa.exibirDetalhes` default false** esconde duração e consultas no Studio e nas páginas; o dado fica guardado, a exibição é um boolean, não um deploy. (3) **`profissional.publicavel` e `programa.ativoNoSite` default true; `aConfirmar[]` como lista livre de strings**: pendência de dado é atributo do documento, não lembrete em chat. (4) **Só nome, slug e título são obrigatórios**: o conteúdo do mock tem lacunas conhecidas e o schema não pode impedir o cadastro parcial. (5) **`alt` de imagem entra como objeto dentro de `image` no primeiro uso real** (Lote 1 ou 3), não antes; nome da profissional e título do post servem de fallback. (6) **`categoria` de post é enum com as quatro do briefing**, não documento: categorias não são conteúdo editável nesta fase.

**Alternativas descartadas.** Conteúdo em arquivos com migração posterior (Decisão 001); campos obrigatórios completos (bloquearia o cadastro do mock); categoria como documento referenciado (flexibilidade sem demanda; reavaliar se o blog pedir categorias novas).

---
