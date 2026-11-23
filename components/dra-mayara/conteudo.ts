/**
 * Textos da página da Dra. Mayara (copy v1.4.1, "Dra. Mayara" da Revisão v3, lote B), em
 * primeira pessoa, da própria Dra., na ordem da página. Cada parágrafo é uma string numa
 * linha só: as exceções da varredura (`permitidos`) casam por frase exata dentro da linha.
 */
export type BlocoProsa = {
  titulo: string;
  paragrafos: readonly string[];
};

export const O_QUE_ATENDO: BlocoProsa = {
  titulo: "O que atendo e para quem",
  paragrafos: [
    "Atendo adultos que desejam emagrecer, com sobrepeso ou obesidade. Cuido também de quem convive com compulsão alimentar, ansiedade e outras doenças que vêm junto com o excesso de peso ou são causadas por ele. Muitos chegam depois de já terem tentado emagrecer várias vezes e buscam um acompanhamento médico para emagrecer e manter o peso. Atendo presencialmente em Antônio Carlos/SC e on-line.",
  ],
};

/** Única página do site onde a duração aproximada da consulta aparece. */
export const PRIMEIRA_CONSULTA: BlocoProsa = {
  titulo: "Como é a primeira consulta",
  paragrafos: [
    "A primeira consulta dura cerca de 1h30. Começo conhecendo você: sua história com o peso, o que te motiva a emagrecer, sua alimentação, sua rotina, seus hábitos, suas doenças, os medicamentos e suplementos que usa e suas queixas de hoje. Depois faço um exame físico completo, com peso, medidas, bioimpedância, pressão arterial e avaliação das pernas e da circulação.",
    "Em seguida, explico cada resultado da bioimpedância e já vamos alinhando juntos os objetivos. Com um cafezinho especial, conversamos sobre o plano de tratamento: explico as opções indicadas para você e decidimos juntos. Tiro todas as dúvidas e, se o tratamento incluir as canetas, ensino a usar e envio um vídeo explicativo depois.",
    "No final, apresento o programa de acompanhamento que mais combina com os seus objetivos. Quem entra em um programa tem um WhatsApp exclusivo comigo: recebe as informações do programa, me envia o peso toda semana e conta com meu suporte para dúvidas e receitas durante todo o acompanhamento.",
    "Meus pacientes saem motivados a mudar seus hábitos e confiantes de que estão fazendo o melhor pela sua saúde.",
  ],
};

export const NAO_PROMETO: BlocoProsa = {
  titulo: "O que não faço e não prometo",
  paragrafos: [
    "Não prometo resultado garantido nem emagrecimento milagroso, e não trabalho com dietas restritivas. Meu acompanhamento não é para quem busca só acesso à medicação, usa canetas de origem duvidosa (importadas ou manipuladas), quer emagrecer rápido ou só por estética, ou procura reposição hormonal para performance.",
  ],
};

export const POR_QUE: BlocoProsa = {
  titulo: "Por que escolhi essa área",
  paragrafos: [
    "Foi tratando mulheres com ansiedade no consultório. Muitas tinham, como consequência, o comer emocional e o excesso de peso. Comecei a me interessar, fui estudar obesidade e me apaixonei.",
    "Eu acredito que cuidar de alguém é ser instrumento de Deus na vida dessa pessoa. Poder ajudá-la a transformar a sua vida por meio do emagrecimento é uma satisfação enorme.",
  ],
};

export const FORMACAO = [
  "Graduação em Medicina · Universidade do Sul de Santa Catarina (UNISUL) · 2014",
  "Título de Especialista em Medicina de Família e Comunidade · SBMFC/AMB · 2022",
  "Cursos de tratamento de sobrepeso e obesidade",
  "Membra da ABESO · Associação Brasileira para o Estudo da Obesidade e da Síndrome Metabólica",
] as const;

export const REGISTRO =
  "Dra. Mayara Brasil Machado · CRM-SC 21112 · RQE 22484 · Medicina de Família e Comunidade";

export const FRASE = '"Emagrecer não precisa ser sofrido!"';
