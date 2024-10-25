import { Container } from "@/components/common/Container";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export const OurStory = () => {
  return (
    <section className="bg-white-50 py-20 min-h-[80vh] flex flex-col">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-col gap-5 grow md:w-2/4">
            <span className="text-lg font-raleway font-bold text-secondary-500">
              História RH Seguro
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-lora text-primary-900  capitalize">
              Nossa História
            </h1>
            <p className=" text-lg">
              Na Rh Seguro, liderada por Rosana Brito, trazemos mais de 25 anos
              de experiência em RH, com foco em serviços e tecnologia.
            </p>
          </div>
          <div className="grow md:w-2/4 flex flex-col gap-5">
            <p className="text-lg">
              Especializados em consultoria de RH, administração de benefícios e
              relações trabalhistas, oferecemos soluções estratégicas para
              desenvolver equipes, otimizar processos e criar ambientes de
              trabalho saudáveis.
            </p>
            <p className="text-lg">
              Se você está em busca de uma parceria para aprimorar a gestão de
              recursos humanos na sua empresa, a RH Seguro está
              aqui para ajudar!
            </p>
          </div>
        </div>
        <div className="mt-20">
          <Image
          className="max-h-[600px] object-cover rounded-lg"
            src="/images/imagem_rosana_palestrando.jpg"
            alt="imagem rosana"
            width={1280}
            height={600}
          />
        </div>
      </Container>
    </section>
  );
};
