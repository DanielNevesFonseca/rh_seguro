import Link from "next/link";
import { Container } from "../Container";

export const StatsSection = () => {
  return (
    <section className="bg-secondary-50 bg-stats-background bg-cover bg-opacity-50 py-20 min-h-[80vh] flex flex-col">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5 md:w-2/4">
            <span className="text-lg font-raleway font-bold text-secondary-300">
              Resultados
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-lora text-white  capitalize">
              Impacto das Nossas Soluções
            </h1>
            <p className="text-lg text-white">
              Descubra como nossas soluções de RH transformam empresas,
              aumentando a produtividade, melhorando o retorno sobre o
              investimento e garantindo a satisfação dos nossos clientes.
            </p>
            <p className="text-lg text-white">
              Aqui estão alguns números que demonstram nosso impacto positivo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 text-white gap-5">
            <div className="flex flex-col gap-2 border-l pl-4 border-white">
              <h4 className="text-5xl font-bold font-raleway">4x</h4>
              <p className="">
                Mais produtividade nos processos de recrutamento e seleção.
              </p>
            </div>

            <div className="flex flex-col gap-2 border-l pl-4 border-white">
              <h4 className="text-4xl font-bold font-raleway">150%</h4>
              <p className="">Retorno sobre investimento</p>
            </div>

            <div className="flex flex-col gap-2 border-l pl-4 border-white">
              <h4 className="text-4xl font-bold font-raleway">100+</h4>
              <p className="">Clientes satisfeitos </p>
            </div>

            <div className="flex flex-col gap-2 border-l pl-4 border-white">
              <h4 className="text-4xl font-bold font-raleway">4x</h4>
              <p className="">Redução custos operacionais </p>
            </div>
          </div>

          <div className="flex gap-5 mt-5">
            <a
              className="capitalize border text-white bg-green-700 border-green-700 px-6 py-3 rounded w-full md:w-fit text-center"
              href="https://wa.link/h3ip2g"
              target="_blank"
            >
              Solicite uma Consultoria Personalizada
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
