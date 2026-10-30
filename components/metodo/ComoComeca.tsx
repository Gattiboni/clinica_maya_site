import Image from "next/image";
import { Secao } from "@/components/ui/Secao";
import { O_QUE_ENTENDER } from "@/lib/conteudo/metodo";
import { MOV } from "@/lib/movimento";
import clinica2 from "@/public/fotos/clinica-2.jpg";
import home1 from "@/public/fotos/home-1.jpg";

/**
 * §Método 5 · Como tudo começa: prosa e as duas fotos (lado a lado, quadradas)
 * à esquerda, card com a lista à direita a partir de `lg`, como no mock.
 * Afinação 1 (2.11): o card é mais baixo que a coluna da prosa com as fotos e
 * sobrava vazio embaixo dele; agora a grade alinha as duas colunas pelo centro
 * vertical (`lg:items-center`). Diagramação: o card fica ao lado do centro de
 * massa da coluna (entre o fim da prosa e as fotos), que é onde o olho está
 * quando termina de ler; levar as fotos para baixo do card alongaria a seção
 * e deixaria a prosa sozinha com uma coluna vazia ao lado. Campo-2 na camada
 * ambiente. Fase 4: prosa entra em sequência; fotos abrem de baixo para cima
 * em sequência; itens da lista entram em sequência de 80ms.
 */
export function ComoComeca() {
  return (
    <Secao
      fundo="bege"
      campo="campo-2"
      className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"
    >
      <div
        className={`${MOV.revealStagger} flex flex-col items-center gap-4 text-center lg:items-start lg:text-left`}
      >
        <h2 className="text-h2 font-medium">Como tudo começa</h2>
        <p className="max-w-prosa text-lead">
          Tudo começa com uma conversa, com tempo de verdade para escutar você antes de qualquer
          plano.
        </p>
        <p className="max-w-prosa text-corpo">
          É a partir dela que o caminho é desenhado, com quem faz mais sentido para o seu momento e,
          quando for o caso, com outras áreas da clínica trabalhando junto.
        </p>
        <div
          className={`${MOV.stagger} ${MOV.stagger80} mt-3 grid w-full max-w-prosa grid-cols-2 gap-4`}
        >
          <Image
            src={home1}
            alt="Recepção da clínica"
            sizes="(min-width: 1024px) 270px, 45vw"
            className={`${MOV.maskCima} aspect-square w-full rounded-card object-cover object-[50%_20%]`}
          />
          <Image
            src={clinica2}
            alt="Detalhe da recepção"
            sizes="(min-width: 1024px) 270px, 45vw"
            className={`${MOV.maskCima} aspect-square w-full rounded-card object-cover object-[50%_60%]`}
          />
        </div>
      </div>
      <div className={`${MOV.reveal} rounded-card border border-marrom/18 bg-creme px-8 py-9`}>
        <h3 className="mb-5 text-h3 font-semibold">O que a gente quer entender</h3>
        <ul className={`${MOV.revealStagger} ${MOV.stagger80} flex flex-col gap-3.5`}>
          {O_QUE_ENTENDER.map((item) => (
            <li key={item} className="flex items-start gap-3.5">
              <span aria-hidden="true" className="mt-2 size-2.5 shrink-0 rounded-full bg-marrom" />
              <p className="text-corpo">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </Secao>
  );
}
