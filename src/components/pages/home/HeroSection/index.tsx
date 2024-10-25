"use client";

import ImageCarousel from "@/components/common/CarroselWithText";
import { Container } from "@/components/common/Container";
import Link from "next/link";

const slides = [
  {
    image: "/images/HomePage_carrossel_1.png",
    title: "Parceria Estratégica",
    description: "Temos parcerias com as principais empresas de planos e seguros para cuidar dos seus funcionários e sua empresa.",
  },
  {
    image: "/images/HomePage_carrossel_1.png",
    title: "Slide 2",
    description: "Descrição do Slide 2",
  },
  {
    image: "/images/HomePage_carrossel_1.png",
    title: "Slide 3",
    description: "Descrição do Slide 3",
  },
];

export const HeroSection = () => {
  return (
    <section className="bg-secondary-50 py-20 min-h-[80vh] flex justify-center">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex flex-col gap-5 md:w-2/4">
            <span className="text-lg font-raleway font-bold text-secondary-500 text-center md:text-left">
              RH Seguro
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-lora text-primary-900 text-center md:text-left">
              Transforme Seu Negócio com Soluções de RH Personalizadas e Seguros
              Confiáveis
            </h1>
            <p className="mt-10 text-lg text-center md:text-left">
              Oferecemos consultoria de RH especializada para otimizar seus
              processos e aumentar a eficiência da sua equipe.
            </p>
            <p className="text-lg text-center md:text-left">
              Além disso, nossas parcerias estratégicas com seguradoras líderes
              garantem a proteção completa de seus colaboradores, com planos de
              saúde e seguros sob medida para suas necessidades.
            </p>
            <div className="flex flex-col gap-5 md:flex-row">
              <Link
                className="capitalize border text-white bg-primary-500 border-primary-500 px-6 py-3 rounded text-center"
                href={`#solucoes`}
              >
                Conheça nossas Soluções
              </Link>
              <Link
                className="capitalize border border-primary-500 px-6 py-3 rounded text-center"
                href={`#solucoes`}
              >
                entre em contato
              </Link>
            </div>
          </div>
          <div className="w-full md:w-2/4">
            <ImageCarousel slides={slides} />
          </div>
        </div>
      </Container>
    </section>
  );
};
