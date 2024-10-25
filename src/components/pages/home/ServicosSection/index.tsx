import { Container } from "@/components/common/Container";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";

export const ServicosSection = () => {
  return (
    <section id="solucoes" className="bg-secondary-50 py-20 min-h-[80vh] flex flex-col">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <span className="text-lg font-raleway font-bold text-secondary-500">
              Consultoria RH
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-lora text-primary-900 md:w-2/4 capitalize">
              Nossas Soluções de RH Inovadoras
            </h1>
            <p className="md:w-2/4 text-lg">
              Descubra como nossos serviços de RH podem transformar sua
              organização, otimizando processos, desenvolvendo talentos e
              garantindo conformidade.
            </p>
            <p className="md:w-2/4 text-lg">
              Cada solução é projetada para atender às necessidades específicas
              do seu negócio.
            </p>
          </div>

          <ul className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-5 gap-y-10">
            <li className="flex gap-3">
              <div>
                <IoIosCheckmark size={60} className="text-secondary-500" />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-lora font-semibold">
                  Consultoria em Recrutamento e Seleção
                </h4>
                <p>
                  Atraia e selecione os melhores talentos com nossas estratégias
                  personalizadas de recrutamento.
                </p>
                <Link
                  href={"/servicos"}
                  className="p-1 w-fit transition duration-300 rounded flex items-center gap-2 text-secondary-500 font-bold border border-transparent hover:border-secondary-300"
                >
                  Saiba Mais <IoIosArrowForward size={16} />
                </Link>
              </div>
            </li>

            <li className="flex gap-3">
              <div>
                <IoIosCheckmark size={60} className="text-secondary-500" />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-lora font-semibold">
                  Gestão de Benefícios
                </h4>
                <p>
                  Otimize seus pacotes de benefícios para atrair e reter
                  talentos.
                </p>
                <Link
                  href={"/servicos"}
                  className="p-1 w-fit transition duration-300 rounded flex items-center gap-2 text-secondary-500 font-bold border border-transparent hover:border-secondary-300"
                >
                  Saiba Mais <IoIosArrowForward size={16} />
                </Link>
              </div>
            </li>

            <li className="flex gap-3">
              <div>
                <IoIosCheckmark size={60} className="text-secondary-500" />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-lora font-semibold">
                  Desenvolvimento Organizacional
                </h4>
                <p>
                  Fortaleça sua organização com uma cultura sólida e processos
                  eficientes.
                </p>
                <Link
                  href={"/servicos"}
                  className="p-1 w-fit transition duration-300 rounded flex items-center gap-2 text-secondary-500 font-bold border border-transparent hover:border-secondary-300"
                >
                  Saiba Mais <IoIosArrowForward size={16} />
                </Link>
              </div>
            </li>

            <li className="flex gap-3">
              <div>
                <IoIosCheckmark size={60} className="text-secondary-500" />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-lora font-semibold">
                  Compliance e Conformidade Trabalhista{" "}
                </h4>
                <p>
                  Garanta a conformidade com as normas trabalhistas através de
                  auditorias e treinamentos.
                </p>
                <Link
                  href={"/servicos"}
                  className="p-1 w-fit transition duration-300 rounded flex items-center gap-2 text-secondary-500 font-bold border border-transparent hover:border-secondary-300"
                >
                  Saiba Mais <IoIosArrowForward size={16} />
                </Link>
              </div>
            </li>

            <li className="flex gap-3">
              <div>
                <IoIosCheckmark size={60} className="text-secondary-500" />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-lora font-semibold">
                  Transformação Digital em RH
                </h4>
                <p>
                  Modernize seus processos de RH com soluções digitais e
                  automação.Modernize seus processos de RH com soluções digitais
                  e automação.
                </p>
                <Link
                  href={"/servicos"}
                  className="p-1 w-fit transition duration-300 rounded flex items-center gap-2 text-secondary-500 font-bold border border-transparent hover:border-secondary-300"
                >
                  Saiba Mais <IoIosArrowForward size={16} />
                </Link>
              </div>
            </li>

            <li className="flex gap-3">
              <div>
                <IoIosCheckmark size={60} className="text-secondary-500" />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-lora font-semibold">
                  Análise de Dados e Relatórios de RH
                </h4>
                <p>
                  Tome decisões informadas com base em dados precisos e
                  relatórios personalizados.
                </p>
                <Link
                  href={"/servicos"}
                  className="p-1 w-fit transition duration-300 rounded flex items-center gap-2 text-secondary-500 font-bold border border-transparent hover:border-secondary-300"
                >
                  Saiba Mais <IoIosArrowForward size={16} />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
