import { Container } from "@/components/common/Container";
import Image from "next/image";
import Link from "next/link";
import { IoIosCheckmark, IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

export const HealthSection3 = () => {
  return (
    <section className="bg-secondary-50 py-20 min-h-[80vh] flex flex-col">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-col gap-5 grow md:w-2/4">
            <span className="text-lg font-raleway font-bold text-secondary-500">
              Seguros
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-lora text-primary-900  capitalize">
              Seguros de Itens Pessoais
            </h1>
            <p className=" text-lg">
              Garanta a segurança de bens pessoais como celulares, residências e
              bicicletas, com seguros que protegem contra perdas e danos.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex gap-2 items-center font-bold">
                <FaCheckCircle size={18} />
                <p>Proteção abrangente para bens valiosos.</p>
              </div>

              <div className="flex gap-2 items-center font-bold">
                <FaCheckCircle size={18} />
                <p>Cobertura fácil de entender e contratar.</p>
              </div>
              <div className="flex gap-2 items-center font-bold">
                <FaCheckCircle size={18} />
                <p>Assistência 24 horas para emergências. </p>
              </div>
            </div>

            <div className="flex gap-5 mt-5 flex-col md:flex-row">
              <a
                className="capitalize border text-white bg-green-700 border-green-700 px-6 py-3 rounded text-center w-full md:w-fit"
                href="https://wa.link/h3ip2g"
                target="_blank"
              >
                Solicite uma Consultoria Personalizada
              </a>
              <Link
                href={"/servicos"}
                className="w-full px-2 py-1 text-center  transition duration-300 rounded flex items-center justify-center gap-2 text-secondary-500 font-bold border border-transparent hover:border-secondary-300 md:w-fit"
              >
                Saiba Mais <IoIosArrowForward size={16} />
              </Link>
            </div>
          </div>

          <div className="grow md:w-2/4 ">
            <img
              className="rounded-lg w-full md:max-h-[600px] object-cover shadow-lg max-h-[350px]"
              loading="lazy"
              src="/images/HomePage_carrossel_1.png"
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
