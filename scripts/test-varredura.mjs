#!/usr/bin/env node
/**
 * Teste da varredura regulatória, sem framework.
 *
 * 1. Cria um arquivo temporário dentro de components/ com um termo vetado.
 * 2. Confirma que `scripts/varredura.mjs` falha (saída 1) e aponta o arquivo.
 * 3. Remove o arquivo e confirma que a varredura volta a passar (saída 0).
 *
 * Uso: `npm run test:varredura`. Saída 0 quando o teste passa, 1 quando falha.
 */
import { spawnSync } from "node:child_process";
import { existsSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SCRIPT = join(RAIZ, "scripts", "varredura.mjs");
const ARQUIVO_TEMP = join(RAIZ, "components", "_teste-varredura-temporario.ts");
const NOME_TEMP = "_teste-varredura-temporario.ts";

// Termo vetado montado em partes para que este próprio arquivo não o contenha.
const TERMO_VETADO = ["integr", "ativa"].join("");

function rodarVarredura() {
  const resultado = spawnSync(process.execPath, [SCRIPT], {
    cwd: RAIZ,
    encoding: "utf8",
  });
  return {
    codigo: resultado.status,
    saida: `${resultado.stdout ?? ""}${resultado.stderr ?? ""}`,
  };
}

function falhar(mensagem, saida) {
  console.error(`Teste da varredura: FALHOU. ${mensagem}`);
  if (saida) {
    console.error("\nSaída da varredura:\n");
    console.error(saida);
  }
  process.exitCode = 1;
}

function principal() {
  if (existsSync(ARQUIVO_TEMP)) {
    rmSync(ARQUIVO_TEMP);
  }

  let comTermo;
  try {
    writeFileSync(
      ARQUIVO_TEMP,
      `// Arquivo temporário do teste da varredura. Pode apagar.\nexport const texto = "saúde ${TERMO_VETADO}";\n`,
      "utf8",
    );
    comTermo = rodarVarredura();
  } finally {
    if (existsSync(ARQUIVO_TEMP)) {
      rmSync(ARQUIVO_TEMP);
    }
  }

  if (comTermo.codigo !== 1) {
    return falhar(
      `Esperava saída 1 com termo vetado injetado, recebi ${comTermo.codigo}.`,
      comTermo.saida,
    );
  }
  if (!comTermo.saida.includes(NOME_TEMP)) {
    return falhar("A varredura falhou, mas não apontou o arquivo temporário.", comTermo.saida);
  }
  console.log("1/2 Varredura falhou com termo vetado injetado e apontou o arquivo: OK");

  const semTermo = rodarVarredura();
  if (semTermo.codigo !== 0) {
    return falhar(
      `Esperava saída 0 após remover o arquivo, recebi ${semTermo.codigo}. O repositório tem ocorrências reais.`,
      semTermo.saida,
    );
  }
  console.log("2/2 Varredura limpa após remover o arquivo: OK");
  console.log("\nTeste da varredura: OK");
  return 0;
}

try {
  const codigo = principal();
  if (codigo === 0) process.exitCode = 0;
} catch (erro) {
  falhar(`Erro inesperado: ${erro.message}`);
}
