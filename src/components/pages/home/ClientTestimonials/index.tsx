import { Container } from "@/components/common/Container";
import Image from "next/image";
import Link from "next/link";
import { LiaStarSolid } from "react-icons/lia";

export const ClientTestimonials = () => {
  return (
    <section className="bg-secondary-50 bg-cover bg-opacity-50 py-20 min-h-[80vh] flex flex-col">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex gap-5 w-full flex-col md:flex-row">
            <div className="flex flex-col gap-5 md:w-2/4">
              <span className="text-lg font-raleway font-bold text-secondary-300">
                Depoimentos
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-lora text-primary-900 capitalize mb-5">
                O Que Nossos Clientes Dizem{" "}
              </h1>
              <p className="text-lg">
                A satisfação dos nossos clientes é a nossa maior recompensa.
              </p>
              <p className="text-lg">
                Veja como nossas soluções de RH têm transformado empresas de
                diversos setores, melhorando processos, aumentando a
                produtividade e garantindo resultados excepcionais.
              </p>
            </div>
            <div className="md:w-2/4 flex md:justify-end justify-center">
              <img
                className="max-w-[200px] md:max-w-[350px]"
                src="/icons/comment_icon.svg"
                alt=""
              />
            </div>
          </div>

          <ul className="flex overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            <li className="rounded-lg bg-white p-5 flex flex-col gap-4 shadow flex-grow min-w-[350px] sm:min-w-0">
              <div className="flex text-golden">
                <LiaStarSolid size={16} />
                <LiaStarSolid size={16} />
                <LiaStarSolid size={16} />
                <LiaStarSolid size={16} />
                <LiaStarSolid size={16} />
              </div>
              <p className="text-lg italic">
                "As soluções de RH da RH Seguro reduziram nosso tempo de
                contratação em 50%. Altamente recomendadas!"
              </p>
              <div className="flex gap-2 items-center">
                <Image
                  className="rounded-full"
                  src="/images/people/dnf.jpeg"
                  alt="imagem dnf"
                  width={60}
                  height={60}
                />
                <div>
                  <h5 className="font-bold">Daniel Neves Fonseca</h5>
                  <p>Desenvolvedor FullStack, RSP Blue</p>
                </div>
              </div>
            </li>

            <li className="rounded-lg bg-white p-5 flex flex-col gap-4 shadow flex-grow min-w-[350px] sm:min-w-0">
              <div className="flex text-golden">
                <LiaStarSolid size={16} />
                <LiaStarSolid size={16} />
                <LiaStarSolid size={16} />
                <LiaStarSolid size={16} />
                <LiaStarSolid size={16} />
              </div>
              <p className="text-lg italic">
                "As soluções de RH da RH Seguro reduziram nosso tempo de
                contratação em 50%. Altamente recomendadas!"
              </p>
              <div className="flex gap-2 items-center">
                <Image
                  className="rounded-full"
                  src="/images/people/dnf.jpeg"
                  alt="imagem dnf"
                  width={60}
                  height={60}
                />
                <div>
                  <h5 className="font-bold">Daniel Neves Fonseca</h5>
                  <p>Desenvolvedor FullStack, RSP Blue</p>
                </div>
              </div>
            </li>

            <li className="rounded-lg bg-white p-5 flex flex-col gap-4 shadow flex-grow min-w-[350px] sm:min-w-0">
              <div className="flex text-golden">
                <LiaStarSolid size={16} />
                <LiaStarSolid size={16} />
                <LiaStarSolid size={16} />
                <LiaStarSolid size={16} />
                <LiaStarSolid size={16} />
              </div>
              <p className="text-lg italic">
                "As soluções de RH da RH Seguro reduziram nosso tempo de
                contratação em 50%. Altamente recomendadas!"
              </p>
              <div className="flex gap-2 items-center">
                <Image
                  className="rounded-full"
                  src="/images/people/dnf.jpeg"
                  alt="imagem dnf"
                  width={60}
                  height={60}
                />
                <div>
                  <h5 className="font-bold">Daniel Neves Fonseca</h5>
                  <p>Desenvolvedor FullStack, RSP Blue</p>
                </div>
              </div>
            </li>

           
          </ul>

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
