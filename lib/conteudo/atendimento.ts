export type PassoOnline = {
  titulo: string;
  texto: string;
};

export type BlocoTextoOnline = {
  titulo: string;
  paragrafos: readonly string[];
};

export type PerguntaFrequenteOnline = {
  pergunta: string;
  resposta: string;
};

/** Como funciona, passo a passo (§Atendimento on-line 2); o número 1 a 6 é a posição na lista. */
export const PASSOS_ONLINE: readonly PassoOnline[] = [
  { titulo: "Agende", texto: "Pelo WhatsApp da recepção, você escolhe data e horário." },
  {
    titulo: "Formulário pré-consulta",
    texto: "Algumas perguntas para a consulta começar mais funda.",
  },
  { titulo: "Confirmação", texto: "O pagamento por Pix confirma o seu horário." },
  { titulo: "Link da sala", texto: "Você recebe o link da videochamada antes da consulta." },
  { titulo: "Sua consulta", texto: "Tempo de verdade para ouvir a sua história." },
  {
    titulo: "Receitas digitais",
    texto: "Prescrições e pedidos de exame chegam no seu WhatsApp.",
  },
];

/** Coluna 1 de §Atendimento on-line 3. */
export const O_QUE_MUDA: BlocoTextoOnline = {
  titulo: "O que muda em relação ao presencial",
  paragrafos: [
    "Na consulta on-line não há exame físico: peso e medidas são informados por você, e a avaliação se adapta a isso com segurança.",
    "Receitas e pedidos de exame chegam em formato digital.",
  ],
};

/** Coluna 2 de §Atendimento on-line 3. */
export const QUEM_ATENDE: BlocoTextoOnline = {
  titulo: "Quem atende on-line",
  paragrafos: [
    "Medicina e nutrição atendem on-line para todo o Brasil.",
    "A psicologia, a terapia e a saúde capilar, por enquanto, são apenas presenciais em Antônio Carlos/SC.",
  ],
};

/** Perguntas frequentes (§Atendimento on-line 4), na ordem da copy. */
export const PERGUNTAS_FREQUENTES_ONLINE: readonly PerguntaFrequenteOnline[] = [
  {
    pergunta: "Preciso instalar algum aplicativo?",
    resposta: "Não. A consulta acontece pelo navegador, em um link seguro.",
  },
  {
    pergunta: "A consulta on-line tem a mesma qualidade?",
    resposta: "Sim, com a mesma escuta e o mesmo cuidado do atendimento presencial.",
  },
  {
    pergunta: "Receitas digitais valem na farmácia?",
    resposta: "Sim, prescrições digitais têm validade em todo o território nacional.",
  },
  {
    pergunta: "E se eu preferir migrar para o presencial?",
    resposta: "Você pode alternar entre as modalidades ao longo do acompanhamento.",
  },
];
