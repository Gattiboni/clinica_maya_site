export type BlocoManifesto = {
  eyebrow: string;
  titulo: string;
  texto: string;
};

/** Blocos do manifesto de A Clínica (§A Clínica 2), na ordem da copy. */
export const MANIFESTO: readonly BlocoManifesto[] = [
  {
    eyebrow: "Por quê",
    titulo: "Toda pessoa merece ser vista como única",
    texto:
      "Acreditamos que toda pessoa merece um espaço onde seja compreendida, acolhida e tratada com respeito às suas singularidades. A verdadeira transformação começa quando a pessoa é vista como única, além de abordagens padronizadas ou radicais.",
  },
  {
    eyebrow: "Como",
    titulo: "Ciência, empatia e proximidade",
    texto:
      "Respeito pela vida e pelo contexto de cada pessoa, sem julgamentos. Escuta ativa e atenção plena, acompanhamento próximo também fora da consulta, atuação multiprofissional integrada e mudanças sustentáveis, sem radicalismos ou soluções milagrosas.",
  },
  {
    eyebrow: "O quê",
    titulo: "Uma jornada completa de saúde",
    texto:
      "Consultas individualizadas, programas de acompanhamento, sessões de psicoterapia, consultas de nutrição e cuidado com a saúde capilar, integrando corpo, mente e bem-estar em uma jornada de transformação sustentável.",
  },
];
