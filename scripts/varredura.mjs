#!/usr/bin/env node
/**
 * Varredura regulatória do site Clínica Maya.
 *
 * Percorre as pastas listadas em scripts/varredura.config.json, procura os
 * termos vetados e confere a regra de H1 nos HTML gerados pelo build.
 *
 * Saída 0: limpo. Saída 1: ocorrências encontradas (lista arquivo, linha e
 * termo). Saída 2: erro de execução (config inválida, etc.).
 *
 * Node puro, sem dependências. Uso: `npm run varredura`.
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const CAMINHO_CONFIG = join(RAIZ, "scripts", "varredura.config.json");

function carregarConfig() {
  const bruto = readFileSync(CAMINHO_CONFIG, "utf8");
  const config = JSON.parse(bruto);
  if (!Array.isArray(config.alvos) || !Array.isArray(config.proibidos)) {
    throw new Error("Config inválida: `alvos` e `proibidos` precisam ser listas.");
  }
  return config;
}

function listarArquivos(pasta, extensoes) {
  const resultado = [];
  const pilha = [pasta];
  while (pilha.length > 0) {
    const atual = pilha.pop();
    for (const nome of readdirSync(atual)) {
      const caminho = join(atual, nome);
      const info = statSync(caminho);
      if (info.isDirectory()) {
        if (nome === "node_modules") continue;
        pilha.push(caminho);
      } else if (extensoes.includes(extname(nome).toLowerCase())) {
        resultado.push(caminho);
      }
    }
  }
  return resultado.sort();
}

function compilarProibidos(lista) {
  return lista.map((padrao) => {
    try {
      return { padrao, regex: new RegExp(padrao, "giu") };
    } catch (erro) {
      throw new Error(`Regex inválida em proibidos: ${padrao} (${erro.message})`);
    }
  });
}

/** Intervalos [inicio, fim) de cada frase permitida presente na linha. */
function intervalosPermitidos(linha, permitidos) {
  const intervalos = [];
  const linhaMinuscula = linha.toLowerCase();
  for (const frase of permitidos) {
    const alvo = frase.toLowerCase();
    let pos = linhaMinuscula.indexOf(alvo);
    while (pos !== -1) {
      intervalos.push([pos, pos + alvo.length]);
      pos = linhaMinuscula.indexOf(alvo, pos + 1);
    }
  }
  return intervalos;
}

function dentroDePermitido(inicio, fim, intervalos) {
  return intervalos.some(([a, b]) => inicio >= a && fim <= b);
}

function trecho(linha, inicio, fim) {
  const margem = 40;
  const a = Math.max(0, inicio - margem);
  const b = Math.min(linha.length, fim + margem);
  const prefixo = a > 0 ? "..." : "";
  const sufixo = b < linha.length ? "..." : "";
  return `${prefixo}${linha.slice(a, b)}${sufixo}`.replace(/\s+/g, " ").trim();
}

/**
 * Em HTML gerado pelo build, o conteúdo dos <script> é código e payload
 * serializado (ids de build, base64 de imagens), não texto visível. O texto
 * visível já está no corpo do HTML. Apagamos os scripts preservando as
 * posições, para que linha e trecho continuem corretos.
 */
function semScripts(conteudo) {
  return conteudo.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (bloco) =>
    bloco.replace(/[^\n]/g, " "),
  );
}

function varrerTermos(caminho, conteudo, proibidos, permitidos) {
  const ocorrencias = [];
  const ehHtml = extname(caminho).toLowerCase() === ".html";
  const texto = ehHtml ? semScripts(conteudo) : conteudo;
  const linhas = texto.split(/\r?\n/);
  linhas.forEach((linha, indice) => {
    const permitidosNaLinha = intervalosPermitidos(linha, permitidos);
    for (const { padrao, regex } of proibidos) {
      regex.lastIndex = 0;
      let m;
      while ((m = regex.exec(linha)) !== null) {
        if (m[0].length === 0) {
          regex.lastIndex++;
          continue;
        }
        const inicio = m.index;
        const fim = inicio + m[0].length;
        if (!dentroDePermitido(inicio, fim, permitidosNaLinha)) {
          ocorrencias.push({
            arquivo: caminho,
            linha: indice + 1,
            termo: padrao,
            trecho: trecho(linha, inicio, fim),
          });
        }
      }
    }
  });
  return ocorrencias;
}

function varrerHtml(caminho, conteudo, regraHtml) {
  const esperado = regraHtml?.h1PorArquivo ?? 1;
  const ignorar = regraHtml?.ignorar ?? [];
  const relativo = caminho.split(sep).join("/");
  if (ignorar.some((parte) => relativo.includes(parte))) return [];
  const total = (conteudo.match(/<h1[\s>]/gi) ?? []).length;
  if (total === esperado) return [];
  return [
    {
      arquivo: caminho,
      linha: 0,
      termo: `h1: esperado ${esperado}, encontrado ${total}`,
      trecho: "",
    },
  ];
}

function principal() {
  const config = carregarConfig();
  const proibidos = compilarProibidos(config.proibidos);
  const permitidos = config.permitidos ?? [];
  const extensoesTexto = config.extensoesTexto ?? [".ts", ".tsx", ".css", ".json", ".svg", ".html"];

  const ocorrencias = [];
  let totalArquivos = 0;
  const resumoAlvos = [];

  for (const alvo of config.alvos) {
    const pastaAbsoluta = join(RAIZ, alvo.pasta);
    if (!existsSync(pastaAbsoluta)) {
      if (alvo.opcional) {
        resumoAlvos.push(`  ${alvo.pasta}: não existe, pulado (opcional)`);
        continue;
      }
      throw new Error(`Pasta obrigatória não encontrada: ${alvo.pasta}`);
    }
    const extensoes = alvo.extensoes ?? extensoesTexto;
    const arquivos = listarArquivos(pastaAbsoluta, extensoes);
    totalArquivos += arquivos.length;
    resumoAlvos.push(`  ${alvo.pasta}: ${arquivos.length} arquivo(s)`);

    for (const arquivo of arquivos) {
      const conteudo = readFileSync(arquivo, "utf8");
      const relativo = relative(RAIZ, arquivo);
      ocorrencias.push(...varrerTermos(relativo, conteudo, proibidos, permitidos));
      if (extname(arquivo).toLowerCase() === ".html") {
        ocorrencias.push(...varrerHtml(relativo, conteudo, config.html));
      }
    }
  }

  console.log("Varredura regulatória");
  console.log(resumoAlvos.join("\n"));

  if (ocorrencias.length === 0) {
    console.log(`\nLimpo: ${totalArquivos} arquivo(s) verificado(s), nenhuma ocorrência.`);
    return 0;
  }

  console.log(`\n${ocorrencias.length} ocorrência(s) em ${totalArquivos} arquivo(s):\n`);
  for (const o of ocorrencias) {
    const local = o.linha > 0 ? `${o.arquivo}:${o.linha}` : o.arquivo;
    const detalhe = o.trecho ? `  |  ${o.trecho}` : "";
    console.log(`  ${local}  [${o.termo}]${detalhe}`);
  }
  console.log(
    "\nCorrija os trechos acima ou ajuste scripts/varredura.config.json se for exceção legítima.",
  );
  return 1;
}

try {
  process.exitCode = principal();
} catch (erro) {
  console.error(`Erro na varredura: ${erro.message}`);
  process.exitCode = 2;
}
