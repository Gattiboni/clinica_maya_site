# Plano de execução — site Clínica Maya

**v1.2 · 29/10/2026** (v1.1 e v1.0 anteriores) · checklist executável · repo: `github.com/Gattiboni/clinica_maya_site`
Responsável entre parênteses: (Alan) (Claude) (Codinho) (Amanda) (Cliente). `[x]` = concluído. Este arquivo é o estado do projeto; quem abrir sabe em que pé estamos.

## Changelog v1.2

- Vercel: o projeto nasce em um **time próprio da clínica** (Hobby, dono `clinicamaya.digital@gmail.com`), não no time da agência. Previews protegidos por Vercel Authentication + Shareable Links (gratuito); senha em preview descartada (add-on de US$ 20/mês por projeto no Pro). Upgrade para Pro com cartão da clínica só na Fase 7, porque produção comercial exige Pro.
- Conta técnica criada: `clinicamaya.digital@gmail.com` (recuperação ligada a `clinicamaya.ac@gmail.com`). Dona de Vercel, Sanity, GA4 e Search Console.
- Projetos órfãos da Vercel apagados; stack v1.1 aprovada; scaffold instruído (`docs/instrucao_codinho_scaffold.md`).
- CFM pesquisado na fonte primária (Resolução 2.336/2023): depoimentos permitidos com condições, preço de consulta permitido, site de clínica precisa exibir registro da clínica no CRM e Diretor(a) Técnico(a) Médico(a). Decisões derivadas na Fase 0 e Fase 2.

## Changelog v1.1

- Domínio resolvido: é `clinicamaya.com` (com y), na conta Wix da clínica, renovação 22/10/2028, sem e-mail, DNS no Wix. A grafia "clinicamaia" era erro de transcrição automática.
- Stack revisada após objeção do Alan e verificação da Spinhardi (Next 16 + Tailwind 4 + Sanity): proposta alinhada ao padrão da agência, aguardando o OK final.
- Mock v3.1 varrido e aprovado em 29/10: é a referência visual do build.
- Fotos de 27/10 identificadas (Talita, Tânia) e convertidas; 11 fotos em `revisao_mock/r20261014/web/`.
- Dinâmicas de trabalho redefinidas (abaixo). Aprovações da Amanda viram um pacote só, no preview publicado.

## Dinâmicas de trabalho

- Codinho trabalha em branch; **commit é humano** (Alan revisa e commita).
- **Testes automatizados e navegação de verificação: Claude roda no Chrome**; Alan valida e revisa, não executa teste.
- **Menos etapas:** entregas em lotes que empilham funcionalidade testável; nada de micro-etapa que não testa nem empilha.
- **Aprovações da Amanda e da cliente: um pacote só**, sobre o preview publicado, com estrutura, conteúdo e movimento prontos. Nada trava esperando aprovação parcial.
- Nenhum deploy em produção sem varredura verde e sem o pacote de aprovação.

## Stack proposta (v1.1)

| Decisão | Escolha | Por quê | Guarda-corpo |
|---|---|---|---|
| Framework | **Next.js 16, App Router, TypeScript**, mesmo padrão da Spinhardi | Um playbook só na agência: prompts do Codinho, revisão do Alan, Sanity e Vercel já conhecidos. Qualquer back mínimo (route handler, server action) nasce no lugar certo em vez de virar remendo | **Renderização estática por padrão** em todas as páginas; client components só para movimento e formulário; `next/image`; fontes self-hosted via `next/font` |
| Conteúdo | **Sanity desde o dia 1**: equipe, áreas, dores, programas, posts, config do site. Studio embutido em `/studio` | É a conclusão da própria objeção do Alan: se o Sanity é o destino, começar com arquivos e migrar é o refactor que queremos evitar. A gestão mensal (Etapa 2) publica blog sem PR | Schemas espelham o modelo de conteúdo do esqueleto v3; **projeto Sanity em organização da cliente** (ou transferível); ISR com revalidação por webhook, sem fetch em runtime |
| Estilo | **Tailwind 4** com tokens da marca em `@theme`, como na Spinhardi | Consistência com a agência; tokens definidos uma vez | Nada fora dos tokens; sem azul |
| Movimento | Decidir após referências (Apêndice A): GSAP ScrollTrigger, Motion ou CSS scroll-driven | Grafismos em camada própria com parallax; página inteira com dinâmica | `prefers-reduced-motion`; Lighthouse mobile ≥ 90 é gate |
| Hospedagem | **Vercel, time próprio da clínica** (dono `clinicamaya.digital@gmail.com`), Hobby em desenvolvimento, Pro na publicação | A cliente é dona desde o dia 1; nada a transferir depois; DNS em 2 minutos | Previews fechados com Vercel Authentication + Shareable Links (gratuito). Pro + cartão da clínica antes do DNS (fair use: Hobby é não comercial) |
| Agendamento | `wa.me` montado no cliente; sem backend hoje | Exigência do briefing | CRM entra como server action no formulário, sem tocar nas páginas |
| Analytics | GA4 via Google Tag com Consent Mode + Vercel Analytics | Ads e LGPD | Propriedade em conta da cliente |
| Qualidade | **Varredura regulatória como script no repo, em CI** | O gate manual vira teste automático | Bloqueia merge |

Dependências da Spinhardi que **não** entram agora: Supabase, Resend, Recharts. Entram quando houver feature que as peça.

---

## Fase 0 · Decisões

- [x] Stack v1.1 aprovada (Next + Sanity desde o dia 1 + Tailwind 4) (29/10)
- [x] Conta técnica da clínica criada: `clinicamaya.digital@gmail.com`; Sanity, Vercel, GA4 e Search Console nascem nela (29/10)
- [ ] (Amanda + Cliente) Confirmar se a ficha do Google Maps já pertence a `clinicamaya.ac@gmail.com`; se não, decidir qual conta será dona da ficha antes de qualquer convite de gestão
- [x] Domínio verificado e resolvido: `clinicamaya.com`, Wix, sem e-mail, DNS no Wix (29/10)
- [ ] (Amanda + Cliente) Prova social, agora com a regra conhecida (CFM 2.336/2023 permite depoimentos sóbrios, sem superioridade nem resultado): escolher (a) só nota agregada + link "ver avaliações no Google" ou (b) carrossel com avaliações selecionadas pela clínica. Recomendação: (a) agora
- [ ] (Amanda + Cliente) Registrar que não mostrar preço é decisão comercial, não regulatória (CFM permite divulgar valor de consulta): manter sem preço?
- [ ] (Cliente) Informar se a Clínica Maya, como pessoa jurídica, tem inscrição no CRM-SC (o site de clínica deve exibir registro do estabelecimento e Diretor(a) Técnico(a) Médico(a) com CRM)
- [x] Fotos de 27/10 identificadas: Talita e Tânia (29/10)
- [x] Escopo da bio da Talita: somente o que manual e briefing permitem; menos é mais; ajustes depois se precisar (29/10)
- [x] Mock v3.1 varrido e aprovado: referência visual do build (29/10)

## Fase 1 · Fundação técnica

- [x] (Alan) Repo `Gattiboni/clinica_maya_site` criado (vazio) (29/10)
- [x] (Alan) Projetos órfãos do Claude Design apagados da Vercel (29/10)
- [x] (Claude) Instrução de scaffold entregue: `docs/instrucao_codinho_scaffold.md` (29/10)
- [ ] (Alan) Criar o time `clinica-maya` na Vercel logado com `clinicamaya.digital@gmail.com` (Hobby) e conectar o GitHub que tem acesso ao repo (o teu, na fase de desenvolvimento; rever no handoff)
- [ ] (Alan) Criar a organização e o projeto no Sanity com a mesma conta; dataset `production`; anotar project id para o `.env.local`
- [ ] (Codinho) Scaffold em branch `feat/scaffold`
- [ ] (Claude) Testar no Chrome: build, Studio abre, varredura roda, CI verde
- [ ] (Alan) Revisar e commitar (`docs/` entra junto; o mock `.html` fica ignorado); importar o repo no time da clínica na Vercel; produção = `main`; Deployment Protection = Vercel Authentication em preview e produção

## Fase 2 · Conteúdo

- [ ] (Claude) Converter a copy do mock v3.1 para documentos Sanity (áreas, profissionais, dores, programas, config), placeholders marcados
- [ ] (Claude) Redigir as bios do Dr. Arthur Hank e da Talita Porto no tom da casa e dentro das regras, com varredura; aprovação entra no pacote da Fase 6
- [ ] (Alan) Subir as 11 fotos de `revisao_mock/r20261014/web/` para o Sanity (ou `public/` se o scaffold preferir); faltam Alexandra, Gabriella e Beatriz
- [ ] (Claude) Política de privacidade base (LGPD, cookies, GA4, WhatsApp) para revisão jurídica no pacote da Fase 6
- [ ] (Amanda) Cobrar o que falta da clínica: fotos restantes, CRN/CRP, modalidade de Talita e Bianca, Folske × Folks, fatos da trajetória da Dra. Mayara, 3 posts reais

## Fase 3 · Páginas (três lotes)

- [ ] (Claude → Codinho) **Lote 1:** header, footer, componentes base, Home, A Clínica
- [ ] (Claude) Testar lote 1 no Chrome; (Alan) revisar e commitar
- [ ] (Claude → Codinho) **Lote 2:** Equipe com âncoras, Método, Emagrecimento, Dra. Mayara
- [ ] (Claude) Testar lote 2; (Alan) revisar e commitar
- [ ] (Claude → Codinho) **Lote 3:** Atendimento on-line, Blog e Post via Sanity, Contato com `wa.me`, 404, Política de privacidade
- [ ] (Claude) Testar lote 3; (Alan) revisar e commitar

## Fase 4 · Movimento

- [ ] (Alan) Rodar o prompt do Apêndice A no Perplexity Pro e trazer as referências
- [ ] (Claude) Propor abordagem (biblioteca, padrões, limites); (Alan) aprovar
- [ ] (Codinho) Grafismos em camada própria com parallax, reveals de seção, transições; `prefers-reduced-motion`
- [ ] (Claude) Testar em desktop e mobile no Chrome, Lighthouse mobile ≥ 90; (Alan) revisar e commitar

## Fase 5 · SEO, Ads, analytics

- [ ] (Codinho) Metadata por página, Open Graph, canonical, sitemap, robots, JSON-LD `MedicalClinic` e `Physician` sem claims
- [ ] (Codinho) Google Tag com Consent Mode e banner ligado à política de privacidade
- [ ] (Alan) GA4 e Search Console em conta da cliente
- [ ] (Amanda) Geografia das campanhas (Antônio Carlos × Grande Florianópolis) para o SEO local

## Fase 6 · Pacote de aprovação (preview publicado)

- [ ] (Alan) Gerar Shareable Link do deployment de preview para Amanda e Mayara (sem conta Vercel, sem senha)
- [ ] (Claude) Varredura final + Lighthouse + acessibilidade sobre o preview de produção
- [ ] (Amanda) Revisão completa do preview: estrutura, copy, bios, movimento, política de privacidade
- [ ] (Cliente) Aprovação final da Dra. Mayara no mesmo preview
- [ ] (Claude) Aplicar os ajustes do pacote em um lote; (Alan) revisar e commitar

## Fase 7 · Domínio e go-live

- [ ] (Cliente + Alan) Upgrade do time da clínica para Pro com o cartão da clínica (produção comercial exige Pro; 1 assento; Alan opera pela conta técnica ou como Viewer gratuito)
- [ ] (Alan) Remover a Vercel Authentication da produção; manter nos previews
- [ ] (Alan) Adicionar `clinicamaya.com` e `www` no projeto Vercel
- [ ] (Alan) No Wix, em Gerenciar registros DNS: trocar os 3 registros A da raiz pelo IP da Vercel e o CNAME de `www` para `cname.vercel-dns.com`. Nameservers continuam no Wix. Não há MX a preservar
- [ ] (Alan) Confirmar SSL e publicar `main`
- [ ] (Amanda) Vincular o site às fichas do Google (clínica e Dra.) e ao Instagram

## Fase 8 · Entrega e pós

- [ ] (Alan) Entregar à cliente a conta técnica `clinicamaya.digital@gmail.com` (senha, 2FA, recuperação) e decidir se o repo migra para uma organização GitHub da clínica ou permanece em Gattiboni com a cliente como colaboradora
- [ ] (Claude) Handoff: como publicar post no Studio, adicionar profissional, trocar foto, quem acessa o quê
- [ ] (Claude) Backlog: CRM no formulário, agenda integrada, carrossel de avaliações curado (rota b), e-mail profissional no domínio, CFP e CFN para as bios da equipe

---

## Apêndice A · Prompt de referências (Perplexity Pro)

```
I'm building a website for a small Brazilian integrative-care clinic (medicine, nutrition, psychology, hair health) whose brand is warm and organic: beige background (#F7EFDF), deep green accent (#3F4F4F), earthy brown details (#755958), serif headlines (Lora) with sans body (Alegreya Sans), and a set of abstract organic line-art "grafismos" (flowing curves) that are part of the visual identity.

I need visual and technical references for two things:

1. Decorative organic shapes that live on their own layer in front of the page background, drift gently and respond to scroll with subtle parallax, so the page feels alive instead of flat. Not particles, not blobs, not 3D: thin organic line-art floating with depth. Please find 5 to 8 live websites (ideally wellness, clinics, boutique hospitality or editorial brands) that do this well, with URLs, and describe what each one does technically if known.

2. Scroll choreography for a long-form marketing site: section reveals, staggered card entrances, soft transitions between sections and between pages, that stay elegant and never gimmicky. Same deliverable: 5 to 8 live examples with URLs.

Then compare the main implementation routes for a Next.js 16 App Router site in 2026: GSAP with ScrollTrigger (now free), Motion (motion.dev), Lenis for smooth scrolling, and native CSS scroll-driven animations. For each: bundle size, browser support as of 2026, how it handles prefers-reduced-motion, interplay with React Server Components, and the impact on Core Web Vitals. Cite sources with links. I care about performance (this site must score 90+ on Lighthouse mobile and receive Google Ads traffic) more than about spectacle.
```

## Apêndice B · Pendências de conteúdo com dono

Avaliações do Google (Amanda) · fotos e registros das demais profissionais (clínica) · modalidade de Talita e Bianca (clínica) · Folske × Folks (clínica) · fatos da trajetória da Dra. Mayara (cliente) · prova social (CFM) · política de privacidade (jurídico) · 3 posts reais (Amanda) · geografia das campanhas (Amanda) · origem do nome, fora do site (cliente).
