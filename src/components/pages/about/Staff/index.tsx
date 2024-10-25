import { Container } from "@/components/common/Container";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";

export const Staff = () => {
  return (
    <section className="bg-white py-20 flex flex-col">
      <Container>
        <div className="flex flex-col gap-5 items-center mx-auto">
          <span className="text-lg font-raleway font-bold text-secondary-500">
            Equipe RH Seguro
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-lora text-primary-900 text-center">
            Conheça Nossa Equipe
          </h1>
          <p className="mt-5 text-lg text-center md:w-3/4">
            Nossa equipe é composta por profissionais dedicados e experientes,
            comprometidos em oferecer as melhores soluções de RH e seguros para
            nossos clientes. Cada membro traz uma combinação única de
            habilidades e conhecimento, trabalhando juntos para transformar
            desafios em oportunidades.
          </p>

          <ul className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-10 gap-y-10 mt-10">
            <li className="flex flex-col items-center gap-3">
              <div>
                <Image
                  className="rounded-full border border-secondary-50 w-20 h-20 object-cover"
                  src="/images/people/rosana.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex flex-col items-center gap-5">
                <div className="flex flex-col items-center gap-2">
                  <h4 className="text-xl font-lora font-semibold text-center">
                    Rosana Brito
                  </h4>
                  <span className="italic text-center text-sm font-bold">
                    CEO RH Seguro e Diretora de Recursos Humanos
                  </span>
                </div>

                <p className="text-center">
                  Dedicada ao setor de RH e parcerias comerciais há mais de 25
                  anos.
                </p>

                <nav className="">
                  <a
                    href="https://www.linkedin.com/in/rosana-brito-aab12b22/"
                    target="_blank"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </nav>
              </div>
            </li>

            <li className="flex flex-col items-center gap-3">
              <div>
                <Image
                  className="rounded-full border border-secondary-50 w-20 h-20 object-cover"
                  src="/images/people/dnf.jpeg"
                  alt=""
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex flex-col items-center gap-5">
                <div className="flex flex-col items-center gap-2">
                  <h4 className="text-xl font-lora font-semibold text-center">
                    Daniel Neves Fonseca
                  </h4>
                  <span className="italic text-center text-sm font-bold">
                    Desenvolvedor de Software
                  </span>
                </div>

                <p className="text-center">
                  Profissional em Desenvolvimento Web, Desenvolvimento Mobile,
                  UI/UX Design.
                </p>

                <nav className="">
                  <a
                    href="https://www.linkedin.com/in/danielnevesfonseca/"
                    target="_blank"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </nav>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
