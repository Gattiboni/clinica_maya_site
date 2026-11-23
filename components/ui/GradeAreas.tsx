import { CardArea } from "@/components/ui/CardArea";
import { AREAS } from "@/lib/conteudo/areas";
import { MOV } from "@/lib/movimento";

type GradeAreasProps = {
  fundoCard: "bege" | "creme";
};

/**
 * Grade com os cinco cards de área, na ordem da copy. Usada na Home e em A
 * Clínica. Os cards entram em sequência (stagger 60ms) com profundidade
 * (rotateX 8° → 0); no hover, cada um eleva e troca a borda.
 */
export function GradeAreas({ fundoCard }: GradeAreasProps) {
  return (
    <ul
      className={`${MOV.revealStagger} ${MOV.profundo} grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5`}
    >
      {AREAS.map((area) => (
        <li key={area.nome} className="flex">
          <CardArea area={area} fundo={fundoCard} />
        </li>
      ))}
    </ul>
  );
}
