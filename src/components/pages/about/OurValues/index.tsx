import { Container } from "@/components/common/Container";
import Link from "next/link";
import { IoIosCheckmark, IoIosArrowForward } from "react-icons/io";
import { LiaStarSolid } from "react-icons/lia";
import { GrTechnology } from "react-icons/gr";
import { IoOptions } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaEnvira } from "react-icons/fa";

export const OurValues = () => {
  return (
    <section className="bg-secondary-50 py-20 flex flex-col">
      <Container>
        <div className="flex flex-col gap-5 items-center mx-auto">
          <span className="text-lg font-raleway font-bold text-secondary-500">
            Valores RH Seguro
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-lora text-primary-900 text-center">
            Nossos Valores
          </h1>
          <p className="mt-5 text-lg text-center md:w-3/4">
            Nossos valores são a base de tudo o que fazemos. Eles orientam
            nossas ações, decisões e relacionamentos, garantindo que entregamos
            sempre o melhor para nossos clientes, parceiros e colaboradores.
          </p>
          <p className="text-lg text-center md:w-3/4">
            Conheça os princípios que nos guiam.
          </p>

          <ul className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-5 gap-y-10 mt-10">
            <li className="flex flex-col items-center gap-3">
              <div>
                <LiaStarSolid className="text-secondary-500" size={60} />
              </div>
              <div className="flex flex-col items-center gap-4">
                <h4 className="text-xl font-lora font-semibold text-center">
                  Excelência{" "}
                </h4>
                <p className="text-center">
                  Buscamos a perfeição em tudo o que fazemos, entregando
                  serviços de alta qualidade que superam as expectativas dos
                  nossos clientes.
                </p>
              </div>
            </li>

            <li className="flex flex-col items-center gap-3">
              <div>
                <GrTechnology size={60} className="text-secondary-500" />
              </div>
              <div className="flex flex-col items-center gap-4">
                <h4 className="text-xl font-lora font-semibold text-center">
                  Inovação
                </h4>
                <p className="text-center">
                  Estamos comprometidos com a inovação contínua, adotando as
                  melhores práticas e tecnologias para oferecer soluções
                  eficientes e modernas.
                </p>
              </div>
            </li>

            <li className="flex flex-col items-center gap-3">
              <div>
                <IoOptions size={60} className="text-secondary-500" />
              </div>
              <div className="flex flex-col items-center gap-4">
                <h4 className="text-xl font-lora font-semibold text-center">
                  Personalização
                </h4>
                <p className="text-center">
                  Acreditamos que cada cliente é único e, por isso, oferecemos
                  soluções personalizadas que atendem às necessidades
                  específicas de cada empresa.
                </p>
              </div>
            </li>

            <li className="flex flex-col items-center gap-3">
              <div>
                <IoIosLock size={60} className="text-secondary-500" />
              </div>
              <div className="flex flex-col items-center gap-4">
                <h4 className="text-xl font-lora font-semibold text-center">
                  Integridade
                </h4>
                <p className="text-center">
                  Atuamos com transparência, ética e responsabilidade,
                  construindo relações de confiança com nossos clientes,
                  parceiros e colaboradores.
                </p>
              </div>
            </li>

            <li className="flex flex-col items-center gap-3">
              <div>
                <FaHandshakeSimple size={60} className="text-secondary-500" />
              </div>
              <div className="flex flex-col items-center gap-4">
                <h4 className="text-xl font-lora font-semibold text-center">
                  Compromisso com o Cliente
                </h4>
                <p className="text-center">
                  Colocamos nossos clientes no centro de tudo o que fazemos,
                  dedicando-nos a compreender e atender suas necessidades com
                  dedicação e cuidado.
                </p>
              </div>
            </li>

            <li className="flex flex-col items-center gap-3">
              <div>
                <FaEnvira size={60} className="text-secondary-500" />
              </div>
              <div className="flex flex-col items-center gap-4">
                <h4 className="text-xl font-lora font-semibold text-center">
                  Sustentabilidade{" "}
                </h4>
                <p className="text-center">
                  Promovemos práticas sustentáveis que contribuem para o
                  bem-estar da sociedade e do meio ambiente, garantindo um
                  futuro melhor para todos.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
