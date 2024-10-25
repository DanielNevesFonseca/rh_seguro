import { Container } from "@/components/common/Container";
import Image from "next/image";
import Link from "next/link";
import { IoIosCheckmark, IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

export const MakeContact = () => {
  return (
    <section className="bg-secondary-50 py-20 flex flex-col">
      <Container>
        <div className="flex gap-10 flex-col md:flex-row">
          <div className="flex flex-col gap-5 grow md:w-2/4">
            <span className="text-lg font-raleway font-bold text-secondary-500">
              Contate-nos
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-lora text-primary-900  capitalize">
              Converse Conosco e Descubra Soluções Personalizadas{" "}
            </h1>
          </div>

          <div className="grow md:w-2/4 flex flex-col gap-5">
            <p className="text-lg">
              Estamos prontos para ajudar você a transformar seu negócio com
              nossas soluções de RH e seguros.
            </p>

            <p className=" text-lg">
              Entre em contato agora mesmo e receba uma consultoria
              personalizada que atende às suas necessidades específicas.{" "}
            </p>

            <div className="flex gap-5 mt-5 flex-col md:flex-row">
              <a
                className="capitalize border text-white bg-green-700 border-green-700 px-6 py-3 rounded text-center w-full md:w-fit"
                href="https://wa.link/h3ip2g"
                target="_blank"
              >
                Chame a gente no WhatsApp
              </a>
              <Link
                href={"/contato"}
                className="w-full px-2 py-1 text-center  transition duration-300 rounded flex items-center justify-center gap-2 text-secondary-500 font-bold border border-transparent hover:border-secondary-300 md:w-fit"
              >
                Entre Em Contato <IoIosArrowForward size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
