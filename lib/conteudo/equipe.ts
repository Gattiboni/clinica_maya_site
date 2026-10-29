import type { StaticImageData } from "next/image";
import equipeArthur from "@/public/fotos/equipe-arthur.jpg";
import equipeBianca from "@/public/fotos/equipe-bianca.jpg";
import equipeMayara from "@/public/fotos/equipe-mayara.jpg";
import equipeTalita from "@/public/fotos/equipe-talita.jpg";
import equipeTania from "@/public/fotos/equipe-tania.jpg";

export type FotoProfissional = {
  src: StaticImageData;
  /** `object-position` da foto no recorte 4:3 do card (valor CSS, ex.: "50% 12%"). */
  posicao: string;
};

export type Profissional = {
  nome: string;
  /** Para quem atende / foco. */
  atende: string;
  modalidade: string;
  /** Usuário do Instagram, sem "@"; ausente quando a profissional não tem perfil na copy. */
  instagram?: string;
  /** Ausente: o card é renderizado sem imagem (nada de silhueta ou caixa vazia). */
  foto?: FotoProfissional;
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

/**
 * Áreas e profissionais da página Equipe (§Equipe 2 a 6), na ordem da copy.
 * `object-position` de Mayara, Arthur e Bianca vem da copy; Tânia e Talita
 * (fotos novas, 29/10) foram definidos pelo enquadramento neste lote.
 */
export const AREAS_EQUIPE: readonly AreaEquipe[] = [
  {
    id: "medicina",
    nome: "Medicina",
    descricao:
      "Avaliação e acompanhamento médico de toda a jornada, com base em evidências científicas.",
    profissionais: [
      {
        nome: "Dra. Mayara Brasil",
        atende:
          "Médica de família, com atuação em emagrecimento e saúde. Atende adultos. CRM SC 21112 · RQE 22484.",
        modalidade: "Presencial e on-line",
        instagram: "dramayarabrasilm",
        foto: { src: equipeMayara, posicao: "50% 12%" },
      },
      {
        nome: "Dr. Arthur",
        atende: "Cardiologia.",
        modalidade: "Presencial",
        foto: { src: equipeArthur, posicao: "50% 18%" },
      },
    ],
  },
  {
    id: "nutricao",
    nome: "Nutrição",
    descricao: "Alimentação que cabe na sua vida, sem terrorismo nutricional.",
    profissionais: [
      {
        nome: "Tânia Guesser",
        atende: "Nutrição com foco em emagrecimento, gestação e fertilidade.",
        modalidade: "Presencial e on-line",
        instagram: "taniagnutri",
        foto: { src: equipeTania, posicao: "50% 25%" },
      },
    ],
  },
  {
    id: "psicologia",
    nome: "Psicologia",
    descricao: "Espaço seguro para cuidar da relação com a comida, com o corpo e com você mesma.",
    profissionais: [
      {
        nome: "Alexandra Invitti",
        atende: "Psicologia com orientação familiar. Atende homens, mulheres, jovens e crianças.",
        modalidade: "Presencial",
        instagram: "alexandrainvitti.psico",
      },
      {
        nome: "Gabriella Sponton",
        atende: "Psicologia para mulheres adultas.",
        modalidade: "Presencial",
        instagram: "gabriellaspontonpsi",
      },
      {
        nome: "Beatriz Nietsche",
        atende: "Psicologia com foco em infância e adolescência.",
        modalidade: "Presencial",
        instagram: "beatriznietchepsi",
      },
    ],
  },
  {
    id: "terapia",
    nome: "Terapia",
    descricao: "Cuidado voltado à saúde mental e ao bem-estar.",
    profissionais: [
      {
        nome: "Talita Porto",
        atende: "Terapeuta de saúde mental. Atende homens e mulheres.",
        modalidade: "Presencial",
        instagram: "talitaportoterapias",
        foto: { src: equipeTalita, posicao: "50% 22%" },
      },
    ],
  },
  {
    id: "capilar",
    nome: "Saúde capilar",
    descricao: "Cuidado com os fios e com o couro cabeludo como parte do bem-estar integral.",
    profissionais: [
      {
        nome: "Bianca Folske",
        atende: "Saúde capilar, com tratamento de condições do couro cabeludo.",
        modalidade: "Presencial",
        foto: { src: equipeBianca, posicao: "72% 30%" },
      },
    ],
  },
];
