import { CardArea } from "@/components/ui/CardArea";
import { AREAS } from "@/lib/conteudo/areas";

type GradeAreasProps = {
  fundoCard: "bege" | "creme";
};

/** Grade com os cinco cards de área, na ordem da copy. Usada na Home e em A Clínica. */
export function GradeAreas({ fundoCard }: GradeAreasProps) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {AREAS.map((area) => (
        <li key={area.nome} className="flex">
          <CardArea area={area} fundo={fundoCard} />
        </li>
      ))}
    </ul>
  );
}
