import type { StaticImageData } from "next/image";
import equipeAlexandra from "@/public/fotos/equipe-alexandra.jpg";
import equipeArthur from "@/public/fotos/equipe-arthur.jpg";
import equipeBeatriz from "@/public/fotos/equipe-beatriz.jpg";
import equipeBianca from "@/public/fotos/equipe-bianca.jpg";
import equipeGabriella from "@/public/fotos/equipe-gabriella.jpg";
import equipeMayara from "@/public/fotos/equipe-mayara.jpg";
import equipeTalita from "@/public/fotos/equipe-talita.jpg";
import equipeTania from "@/public/fotos/equipe-tania.jpg";

export type FotoProfissional = {
  src: StaticImageData;
  /** `object-position` da foto no recorte 4:3 do card (valor CSS, ex.: "50% 12%"). */
  posicao: string;
};

/**
 * Bio longa do pop-up (copy v1.3.1, "Pop-ups da Equipe"). Todo bloco é
 * opcional: bloco ausente não é renderizado. `acompanhamento` existe porque o
 * terceiro bloco da Gabriella tem esse título na copy, no lugar da primeira consulta.
 */
export type BioProfissional = {
  formacao?: string;
  atende?: string;
  primeiraConsulta?: string;
  acompanhamento?: string;
  naoPrometo?: string;
  porque?: string;
  /** Frase em destaque no fim do pop-up, com as aspas da copy. */
  frase?: string;
  /**
   * Título de bloco próprio da profissional, quando difere do padrão do pop-up
   * (ex.: Talita usa "Como é a primeira sessão", não "consulta").
   */
  titulos?: Partial<Record<ChaveBloco, string>>;
};

/** Blocos de texto da bio (todos menos a frase), na ordem em que o pop-up os mostra. */
export type ChaveBloco =
  "formacao" | "atende" | "primeiraConsulta" | "acompanhamento" | "naoPrometo" | "porque";

export type Profissional = {
  /** Identificador estável: `id` do pop-up (`bio-{id}`). */
  id: string;
  nome: string;
  /** Título profissional (ex.: "Psicóloga"). */
  titulo: string;
  /** Registro no conselho, como na copy (ex.: "CRP 12/09797"). */
  registro: string;
  resumo: string;
  modalidade: string;
  /** Usuário do Instagram, sem "@". */
  instagram: string;
  foto: FotoProfissional;
  /** Com bio, o card abre o pop-up da profissional. */
  bio?: BioProfissional;
  /** Com `href` (e sem bio), o card é um link para a página própria (Dra. Mayara). */
  href?: string;
};

export type IdAreaEquipe = "medicina" | "nutricao" | "psicologia" | "terapia" | "capilar";

export type AreaEquipe = {
  /** Âncora da seção (`/equipe#medicina`); os links de Home, A Clínica e Emagrecimento apontam para cá. */
  id: IdAreaEquipe;
  nome: string;
  descricao: string;
  profissionais: readonly Profissional[];
};

export const INSTAGRAM_URL = "https://instagram.com/";

/** `id` do pop-up de uma profissional; o botão do card aponta para ele com `popovertarget`. */
export const idPopup = (profissional: Pick<Profissional, "id">) => `bio-${profissional.id}`;

/**
 * Áreas e profissionais da página Equipe, na ordem da copy v1.3.1 (seções
 * "Equipe" e "Pop-ups da Equipe" da Revisão v2; textos literais da gestora).
 * `object-position` das fotos novas (Alexandra, Gabriella, Beatriz) definido
 * pelo enquadramento do rosto no recorte 4:3.
 */
export const AREAS_EQUIPE: readonly AreaEquipe[] = [
  {
    id: "medicina",
    nome: "Medicina",
    descricao:
      "Avaliação e acompanhamento médico de toda a jornada, com base em evidências científicas.",
    profissionais: [
      {
        id: "mayara",
        nome: "Dra. Mayara Brasil",
        titulo: "Médica de Família",
        registro: "CRM SC 21112 · RQE 22484",
        resumo:
          "Médica de família e fundadora da clínica, com atuação em emagrecimento e saúde. Atende adultos com escuta e tempo, cuidando de cada história de forma individualizada.",
        modalidade: "Presencial e on-line",
        instagram: "dramayarabrasilm",
        foto: { src: equipeMayara, posicao: "50% 12%" },
        href: "/dra-mayara-brasil",
      },
      {
        id: "arthur",
        nome: "Dr. Arthur Hank",
        titulo: "Cardiologista",
        registro: "CRM SC 18646 · RQE 16250",
        resumo:
          "Cardiologista, com foco na prevenção e no tratamento de doenças do coração. Atende adultos e idosos com escuta atenta e orientações claras, baseadas em evidências.",
        modalidade: "Presencial",
        instagram: "dr.arthurhank_cardiologista",
        foto: { src: equipeArthur, posicao: "50% 18%" },
        bio: {
          formacao:
            "Médico pela Universidade Regional de Blumenau (2012) e cardiologista pelo Instituto de Cardiologia de Santa Catarina, em São José (2018).",
          atende:
            "Atendo adultos e idosos que buscam cuidar melhor da saúde, com foco na promoção da saúde e na prevenção e no tratamento de doenças cardiovasculares. Avalio pacientes com hipertensão, colesterol elevado, insuficiência cardíaca, palpitações, arritmias, queixas de cansaço e também quem passou por infarto, angioplastia ou cirurgia cardíaca. Meu objetivo é ajudar cada paciente a entender melhor a própria saúde, prevenir problemas futuros e encontrar o melhor caminho para cuidar do coração.",
          primeiraConsulta:
            "Gosto de ouvir com cuidado e atenção, entendendo não só as queixas, mas também aspectos da vida, da família e do trabalho que influenciam o bem-estar. Reviso o histórico de saúde, os medicamentos em uso e suas indicações; quando necessário, solicito exames complementares para avaliar a saúde cardiovascular e identificar oportunidades de prevenção. Reforço a importância da atividade física. Faço questão de deixar o paciente à vontade para perguntar, com respostas claras, acessíveis e fundamentadas em evidências científicas.",
          naoPrometo:
            "Não prometo resultados fáceis nem acredito em soluções iguais para todos. Cada paciente tem sua história, suas necessidades e seus objetivos. Meu papel é orientar com clareza, usar as melhores evidências disponíveis e construir, junto com o paciente, o caminho mais adequado. Um bom atendimento começa com confiança e expectativas realistas.",
          porque:
            "Escolhi a Cardiologia pela relevância da especialidade e pela forma como ela se relaciona com diversos sistemas do corpo. Gosto de atuar em diferentes etapas da vida do paciente: da prevenção de um infarto ao cuidado e à reabilitação de quem passou por um evento cardiovascular ou por uma cirurgia. Também me identifico com o acompanhamento de pacientes com insuficiência cardíaca, buscando melhorar sintomas, qualidade de vida e prognóstico.",
          frase:
            '"Cuidar de alguém é olhar o mundo através dos seus olhos e ter empatia pelas suas angústias."',
        },
      },
    ],
  },
  {
    id: "nutricao",
    nome: "Nutrição",
    descricao: "Alimentação que cabe na sua vida, sem terrorismo nutricional.",
    profissionais: [
      {
        id: "tania",
        nome: "Tânia Guesser",
        titulo: "Nutricionista",
        registro: "CRN-10 11976",
        resumo:
          "Nutricionista com foco em emagrecimento e performance esportiva. Atende mulheres com escuta e estratégias que cabem na rotina, sem dietas impossíveis de manter.",
        modalidade: "Presencial e on-line",
        instagram: "taniagnutri",
        foto: { src: equipeTania, posicao: "50% 25%" },
        bio: {
          formacao:
            "Pós-graduada em nutrição clínica, esportiva e materno-infantil. Atendimento voltado ao emagrecimento e à performance esportiva.",
          atende:
            "Atendo presencialmente e on-line, principalmente mulheres entre 20 e 45 anos que desejam emagrecer, melhorar a performance nos treinos e construir uma relação mais leve com a comida. Mulheres que já tentaram muitas dietas e ainda não encontraram um caminho que funcione de verdade; que treinam, mas não percebem a evolução que gostariam; ou que sentem falta de força e energia para concluir os treinos. A alimentação precisa fazer sentido para o corpo, os objetivos e a vida de cada mulher.",
          primeiraConsulta:
            "É um momento de escuta, acolhimento e compreensão da sua história. Busco conhecer rotina, hábitos, dificuldades, experiências anteriores com dietas e objetivos. A partir dessa conversa, construo uma estratégia individualizada, considerando a sua realidade, sem propor mudanças que não cabem no seu dia a dia. Quero que você saia entendendo os próximos passos e percebendo que é possível cuidar da alimentação sem abrir mão da sua rotina.",
          naoPrometo:
            "Não acredito em uma única estratégia alimentar que sirva para todas, nem que emagrecer precise ser marcado por restrições extremas e sofrimento. Não proponho rotinas impossíveis de seguir nem ignoro as dificuldades de cada paciente. Mais do que entregar uma lista de alimentos, quero contribuir para uma relação melhor com a comida e para caminhos possíveis de cuidar da saúde.",
          porque:
            "Sempre tive vontade de cuidar das pessoas antes que elas precisassem chegar ao hospital. Alimentação e exercício são grandes aliados na prevenção e na construção de uma vida com mais saúde. Foi essa visão de cuidado e prevenção que me aproximou da Nutrição.",
          frase: '"Por você, com você."',
        },
      },
    ],
  },
  {
    id: "psicologia",
    nome: "Psicologia",
    descricao: "Espaço seguro para cuidar da relação com a comida, com o corpo e com você mesma.",
    profissionais: [
      {
        id: "alexandra",
        nome: "Alexandra Invitti",
        titulo: "Psicóloga",
        registro: "CRP 12/09797",
        resumo:
          "Psicóloga que atende crianças, adolescentes, adultos e casais, com orientação familiar, avaliação neuropsicológica e apoio ao comportamento alimentar.",
        modalidade: "Presencial",
        instagram: "alexandrainvitti.psico",
        foto: { src: equipeAlexandra, posicao: "50% 24%" },
        bio: {
          formacao:
            "Graduação em Psicologia. Orientação familiar e educação parental. Neuropsicologia pelo Hospital Albert Einstein.",
          atende:
            "Atendo crianças, adolescentes, adultos e casais. Realizo avaliação neuropsicológica e, no acompanhamento em equipe, auxilio as pacientes nas questões relacionadas ao comportamento alimentar. Meus atendimentos são presenciais.",
          primeiraConsulta:
            "Recebo a paciente e os familiares com um sorriso, acolhimento e disponibilidade para ouvir. Busco compreender o que ela sente e conhecer sua história de vida: é nesse momento que começamos a construir o vínculo. Espero que ela saia com as emoções mais aliviadas, com pensamentos e ações para refletir e com esperança de melhora.",
          naoPrometo:
            "Na minha consulta você não encontrará julgamentos, críticas, imposições ou respostas prontas. Não estabeleço prazos para a melhora, porque cada pessoa tem o próprio tempo, que precisa ser respeitado. Não decido por você, não diminuo a sua dor e não desconsidero a sua história. Caminho ao lado da paciente, com conhecimento científico, técnica e sensibilidade, para ajudá-la a compreender seus sentimentos, desenvolver recursos emocionais e encontrar os próprios caminhos.",
          porque:
            "Escolhi ser psicóloga para ajudar as pessoas a cuidar da saúde mental, enfrentar dificuldades, aliviar emoções e encontrar caminhos para uma vida mais feliz. Acompanhar o desenvolvimento de alguém, perceber suas mudanças e conquistas, é uma das grandes realizações da minha profissão.",
          frase:
            '"Eu acredito que cuidar de alguém é ser empático com os sentimentos e as necessidades do ser humano."',
        },
      },
      {
        id: "gabriella",
        nome: "Gabriella Sponton",
        titulo: "Psicóloga",
        registro: "CRP 32348",
        resumo:
          "Psicóloga que atende mulheres com ansiedade, depressão, maternidade e mudanças de vida. Oferece um espaço de acolhimento, sem julgamentos, para entender a própria mente.",
        modalidade: "Presencial e on-line",
        instagram: "gabriellaspontonpsi",
        foto: { src: equipeGabriella, posicao: "50% 14%" },
        bio: {
          formacao:
            "Psicologia pela Universidade Paulista (UNIP) e pós-graduação em Psicopatologia pela Universidade Focus.",
          atende:
            "Você não precisa dar conta de tudo sozinha. Atendo mulheres que enfrentam ansiedade, depressão, desafios da maternidade e mudanças de vida. Acredito que a terapia pode ser um espaço de acolhimento, respeito e autoconhecimento, onde você possa falar sobre o que sente sem medo de julgamentos.",
          acompanhamento:
            "Com reflexões, exercícios práticos e psicoeducação, gosto de ajudar cada paciente a compreender melhor a própria mente, reconhecer seus padrões e encontrar novas formas de lidar com o que vive.",
          frase: '"Entender a mente é o primeiro passo em direção ao bem-estar."',
        },
      },
      {
        id: "beatriz",
        nome: "Beatriz Nietsche",
        titulo: "Psicóloga",
        registro: "CRP 12/7482",
        resumo:
          "Psicóloga que atende crianças e adolescentes, auxiliando no desenvolvimento emocional e no enfrentamento de desafios relacionados à infância e à adolescência. Oferece um espaço de acolhimento e escuta, respeitando a singularidade de cada criança e sua família. Também realiza orientação parental.",
        modalidade: "Presencial e on-line",
        instagram: "beatriznietchepsi",
        foto: { src: equipeBeatriz, posicao: "50% 22%" },
      },
    ],
  },
  {
    id: "terapia",
    nome: "Terapia",
    descricao: "Cuidado voltado à saúde mental e ao bem-estar.",
    profissionais: [
      {
        id: "talita",
        nome: "Talita Porto",
        titulo: "Enfermeira",
        registro: "COREN-SC 243287",
        resumo:
          "Enfermeira e terapeuta, com mestrado em Saúde Mental e Atenção Psicossocial. Acompanha pessoas a partir de 11 anos em processos de autoconhecimento, autoestima e relações.",
        modalidade: "Presencial",
        instagram: "talitaportoterapias",
        foto: { src: equipeTalita, posicao: "50% 22%" },
        // Bio longa da copy v1.3.2 ("Talita Porto (v1.3.2)"); o card curto acima não muda.
        bio: {
          formacao:
            "Enfermeira pela Universidade Federal de Santa Catarina, com especialização em Saúde da Família e mestrado em Saúde Mental e Atenção Psicossocial pela mesma universidade. Doze anos de trabalho no Sistema Único de Saúde, onde construiu a escuta e o acolhimento de pessoas de realidades muito diferentes. Estudos posteriores em relações familiares e desenvolvimento humano.",
          atende:
            "Acompanho processos de autoconhecimento e travessias de transformação, com pessoas a partir de 11 anos, presencialmente. Acolho quem quer compreender melhor as próprias emoções, os relacionamentos e a maneira como vem vivendo a própria vida: autoestima, identidade, vínculos afetivos, conflitos emocionais, transições de vida e dificuldades nas relações. Atendo individualmente, casais e grupos, e meu atendimento é aberto a diferentes histórias, identidades, orientações sexuais, configurações familiares e formas de existir.",
          primeiraConsulta:
            "A primeira sessão é, antes de tudo, um encontro. Você pode chegar como está, sem organizar as emoções antes e sem procurar as palavras certas. Começamos pela escuta da sua história, do momento que você vive e do que a trouxe até aqui; não parto de respostas prontas. Também me interessa compreender como as experiências aparecem no corpo, nas relações e no dia a dia. Depois conversamos sobre suas necessidades, suas expectativas e as possibilidades de acompanhamento. Quero que você saia se sentindo respeitada e ouvida, sem a obrigação de ter compreendido ou resolvido tudo no primeiro dia.",
          naoPrometo:
            "Não ofereço fórmulas prontas, respostas universais ou garantias de resultado. Não acredito que exista uma única maneira correta de viver, sentir ou se relacionar, e não defino quem a pessoa deveria ser nem quais escolhas precisa fazer. Algumas situações pedem o acompanhamento de outros profissionais, e nesses casos o trabalho é compartilhado com a equipe e com outros serviços de saúde. O cuidado não substitui a autonomia: ele ajuda a pessoa a reconhecer os próprios recursos e a participar, de forma mais consciente, das decisões da sua vida.",
          porque:
            "Comecei na Enfermagem, mas meu interesse pelas pessoas sempre foi além do corpo que adoece. Com o tempo entendi que, por trás de uma queixa, existe alguém atravessado por histórias, relações e valores próprios. A saúde pública aprofundou essa percepção e me levou a estudar o corpo, as emoções e a subjetividade. Me interessa compreender não só o que acontece com alguém, mas como essa pessoa vive aquilo que lhe acontece. Cuidar não é só acompanhar a dor: é também abrir espaço para outras possibilidades de viver.",
          frase: '"Sou porto, mas não sou cais; sou travessia."',
          titulos: { primeiraConsulta: "Como é a primeira sessão" },
        },
      },
    ],
  },
  {
    id: "capilar",
    nome: "Saúde capilar",
    descricao: "Cuidado com os fios e com o couro cabeludo como parte do bem-estar integral.",
    profissionais: [
      {
        id: "bianca",
        nome: "Bianca Folzke",
        titulo: "Fisioterapeuta",
        registro: "CREFITO 294907-F",
        resumo:
          "Fisioterapeuta tricologista que atende pessoas com queda de cabelo e afinamento dos fios. Avalia o couro cabeludo em detalhes.",
        modalidade: "Presencial e on-line",
        instagram: "biancamelofolzke",
        foto: { src: equipeBianca, posicao: "72% 30%" },
        bio: {
          formacao:
            "Fisioterapeuta, pós-graduada em Tricologia e em Saúde da Mulher. Terapeuta capilar pela Academia Brasileira de Tricologia.",
          atende:
            "Atendo mulheres de todas as idades que estejam passando por queda de cabelo e afinamento dos fios. Meu atendimento é principalmente presencial; para mulheres de outros estados ou que moram mais longe, também atendo on-line.",
          primeiraConsulta:
            "Começa com uma avaliação detalhada. Além de conversar e entender toda a sua história, uso um tricoscópio para analisar o couro cabeludo e os fios. Depois dessa análise, conversamos sobre os objetivos e sobre o que faz sentido para o seu momento. Eu escuto muito. Procuro entender de verdade a dor daquela mulher, validar o que ela está vivendo e nunca julgar o que ela já tentou antes de chegar até mim.",
          naoPrometo:
            "Não indico o que a pessoa não precisa. Não comercializo produtos capilares e não realizo procedimentos sem respaldo científico. Meu trabalho é baseado em ciência.",
          porque:
            "Minha história com a tricologia começou de um lugar muito pessoal: depois de uma cirurgia, meu cabelo começou a cair e, mais tarde, a afinar. Passei pelo que muitas das minhas pacientes passam antes de chegar a um diagnóstico e a um cuidado adequado. Foi estudando para cuidar de mim que encontrei a terapia capilar, e foi uma amiga que me perguntou por que eu não atendia. Continuei estudando, me aprofundando, e me tornei tricologista.",
          frase: '"Eu também já vi meu cabelo cair. Ali, tudo começou."',
        },
      },
    ],
  },
];

/** Profissionais com bio longa, na ordem da página: um pop-up para cada. */
export const PROFISSIONAIS_COM_BIO: readonly Profissional[] = AREAS_EQUIPE.flatMap((area) =>
  area.profissionais.filter((profissional) => profissional.bio),
);
