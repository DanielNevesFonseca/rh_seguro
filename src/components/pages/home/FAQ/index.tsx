import { Container } from "@/components/common/Container";
import AccordionUsage from "./Accordion";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export const FAQ = () => {
  return (
    <section className="bg-white py-20  flex flex-col">
      <Container>
        <div className="flex gap-10 flex-col md:flex-row  ">
          <div className="flex flex-col gap-5 grow md:w-2/4">
            <span className="text-lg font-raleway font-bold text-secondary-500">
              Perguntas Frequentes
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-lora text-primary-900  capitalize">
              FAQs{" "}
            </h1>
            <p className=" text-lg">
              Separamos algumas perguntas que possam surgir antes de contratar
              nossos serviços.
            </p>

            <div className="flex gap-5 mt-5 w-full">
              <Link
                className="capitalize border text-secondary-500 border-secondary-300 px-6 py-3 rounded text-center w-full md:w-fit"
                href={`/contato`}
              >
                Entre em Contato
              </Link>
            </div>
          </div>

          <div className="grow md:w-3/4 ">
            <AccordionUsage />
          </div>
        </div>
      </Container>
    </section>
  );
};
