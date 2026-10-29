import { Secao } from "@/components/ui/Secao";

/** §Dra. Mayara 2 · Trajetória. */
export function Trajetoria() {
  return (
    <Secao
      fundo="creme"
      className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left"
    >
      <h2 className="text-h2 font-medium">Trajetória</h2>
      <p className="max-w-prosa-longa text-lead">
        Médica de família e comunidade, com mais de 10 anos de experiência médica, a Dra. Mayara
        fundou a Clínica Maya em Antônio Carlos, na Grande Florianópolis, para cuidar de cada
        paciente com ciência e com tempo de escuta.
      </p>
      <p className="max-w-prosa-longa text-corpo">
        Hoje, sua principal área de atuação é o tratamento médico do sobrepeso e da obesidade,
        sempre de forma individualizada e sem promessas fáceis. Atende adultos, presencialmente e
        on-line.
      </p>
    </Secao>
  );
}
