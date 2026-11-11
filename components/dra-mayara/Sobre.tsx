import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";

/** §Dra. Mayara · Sobre a Dra. Mayara (copy v1.3, substitui Trajetória). Só prosa com `reveal`: página de confiança, não de espetáculo. */
export function Sobre() {
  return (
    <Secao fundo="creme" className="flex flex-col items-center lg:items-start">
      <Nevoa
        className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
      >
        <h2 className="text-h2 font-medium">Sobre a Dra. Mayara</h2>
        <p className="max-w-prosa-longa text-lead">
          A Dra. Mayara Brasil é médica de Família e Comunidade, com mais de 10 anos de experiência.
          Ela fundou a Clínica Maya, em Antônio Carlos, na Grande Florianópolis, com um propósito
          claro: oferecer um cuidado baseado em ciência, com tempo para ouvir cada paciente de
          verdade.
        </p>
        <p className="max-w-prosa-longa text-corpo">
          Hoje, seu foco é o tratamento médico do sobrepeso e da obesidade, sempre individualizado e
          sem julgamentos. Atende adultos presencialmente e on-line.
        </p>
      </Nevoa>
    </Secao>
  );
}
