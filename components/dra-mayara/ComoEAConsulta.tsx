import { Nevoa } from "@/components/ui/Nevoa";
import { Secao } from "@/components/ui/Secao";
import { MOV } from "@/lib/movimento";

/**
 * §Dra. Mayara · Como é a consulta (copy v1.3, substitui Como ela atende).
 * Única página do site onde a duração aproximada da consulta aparece.
 */
export function ComoEAConsulta() {
  return (
    <Secao fundo="bege" className="flex flex-col items-center lg:items-start">
      <Nevoa
        className={`${MOV.revealStagger} flex flex-col items-center gap-5 text-center lg:items-start lg:text-left`}
      >
        <h2 className="text-h2 font-medium">Como é a consulta</h2>
        <p className="max-w-prosa-longa text-lead">
          A consulta dura cerca de 1h30. Esse tempo existe para conhecer a fundo a sua história, a
          sua rotina e o que tem dificultado o seu emagrecimento até aqui, com escuta atenta e sem
          pressa.
        </p>
        <p className="max-w-prosa-longa text-corpo">
          O olhar vai além da balança. Sono, ansiedade, comer emocional, compulsão alimentar e a sua
          relação com a comida fazem parte da conversa, assim como a investigação de metabolismo,
          alterações hormonais e deficiências de vitaminas.
        </p>
        <p className="max-w-prosa-longa text-corpo">
          Na consulta presencial, além do exame físico e das medidas corporais, é feita a
          bioimpedância, que mostra a sua composição corporal e ajuda a acompanhar sua evolução com
          mais precisão do que o peso sozinho.
        </p>
        <p className="max-w-prosa-longa text-corpo">
          A partir disso, vocês constroem juntas um plano de tratamento individualizado, pensado
          para caber na sua vida e ser sustentável a longo prazo.
        </p>
      </Nevoa>
    </Secao>
  );
}
