**NÃO COMMITAR — o commit é feito no final pelo usuário.**

# Instrução Codinho — `noindex` temporário até o go-live

## Contexto

Fase 1 encerrada: site placeholder publicado em `https://clinica-maya-site.vercel.app` (deploy de produção, target `production`, alias `*.vercel.app`), Sanity ligado, Studio em `/studio` listando os seis tipos. O site vai ficar meses nesse endereço público enquanto as Fases 2 a 6 rodam, sem Deployment Protection (decisão do Alan: não vale assento nem link de bypass para um placeholder). O único risco real é indexação: um placeholder com o nome da clínica aparecendo no Google antes do site existir.

Estado do mundo, não mexer: `app/layout.tsx` já exporta `metadata` (título, descrição, `lang="pt-BR"`, fontes). `app/page.tsx`, `app/studio/`, `app/api/revalidate/`, `scripts/varredura.*`, `.github/workflows/ci.yml` ficam como estão. Confira no repo a forma atual do objeto `metadata` antes de editar; não presuma campos.

## Entregável único

**`app/layout.tsx`** — edição mínima no `metadata` existente.

- **Propósito:** pedir aos buscadores que não indexem nem sigam links de nenhuma rota do site enquanto o domínio final não está apontado.
- **Contrato:** adicionar ao objeto `metadata` já exportado o campo `robots` da Metadata API do Next, com `index: false` e `follow: false`. Nada de `robots.txt`, nada de header via `next.config`, nada de middleware: é metadata, herdada por todas as rotas a partir do layout raiz.
- **Comportamento:** o HTML gerado de toda rota passa a conter `<meta name="robots" content="noindex, nofollow">`. Nenhuma outra mudança de comportamento.
- **Marcação de remoção:** uma linha de comentário imediatamente acima do campo, literal: `// TEMPORÁRIO até o go-live (plano, Fase 7): remover este campo inteiro ao apontar clinicamaya.com.` Sem toggle por env, sem flag: a remoção é um commit de uma linha no go-live, e um caminho de código que só existe para ser desligado é o que não queremos manter.
- **Padrão por referência:** mesma formatação e ordem de campos que o `metadata` atual já usa.

## Transversais

- `npm run lint`, `npm run build`, `npm run varredura`, `npm run test:varredura` têm que continuar limpos; a varredura percorre o HTML do build e este campo não introduz texto visível.
- Sem dependência nova, sem arquivo novo.

## Restrições duras (parar e reportar)

1. Escopo de escrita: **só `app/layout.tsx`**. Qualquer outro arquivo é proibido.
2. Se o `metadata` em `app/layout.tsx` não existir, estiver em outro arquivo, ou for gerado por `generateMetadata`, **pare e reporte** antes de mexer.
3. Se `app/studio/` ou qualquer rota já declarar `robots` próprio, **pare e reporte** (hoje não deveria).
4. Nada de `robots.txt`, `app/robots.ts`, headers em `next.config.*` ou `vercel.json`: fora de escopo, mesmo que pareça "mais completo".
5. Se o repo divergir desta instrução, segue o repo e avisa.

## Critério de aceite (β)

1. `npm run build` passa; número de rotas igual ao anterior (4).
2. `.next/server/app/index.html` contém a string exata `name="robots"` com `noindex` no `content`.
3. `.next/server/app/studio/[[...tool]].html` (ou o HTML que o build gerar para `/studio`) contém a mesma meta tag: prova de herança do layout raiz.
4. `npm run varredura` e `npm run test:varredura` passam.
5. `git status --short` mostra **apenas** `M app/layout.tsx`.

Reporte com os quatro comandos e a saída do `grep` da meta tag nos dois HTML.

## Fecho

Extras são bem-vindos se sinalizados com plano de reversão.
