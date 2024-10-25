import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Container } from "../Container";

export const Footer = () => {
  return (
    <footer className="bg-primary-500 flex flex-col gap-10 py-10 ">
      <Container>
        <div className="flex flex-col w-full gap-10">
          <div className="flex items-center justify-between w-full flex-col gap-10 md:flex-row">
            <Link href="/">
              <Image
                src="/icons/logo_branca.svg"
                alt="Logo RH Seguro"
                width={100}
                height={80}
              />
            </Link>

            <nav className="text-white flex gap-5 flex-col text-center md:flex-row">
              <Link href={`/sobre-nos`}>Sobre Nós</Link>
              <Link href={`/servicos`}>Serviços</Link>
              <Link href={`/parcerias`}>Parcerias</Link>
              <Link href={`/recomendacao-smart`}>Recomendação SMART</Link>
              <Link href={`/contato`}>Contato</Link>
            </nav>

            <nav className="flex gap-3 text-white">
              <a href="#">
                <FaInstagram size={24} />
              </a>
              <a href="#">
                <FaFacebook size={24} />
              </a>
              <a href="#">
                <FaLinkedin size={24} />
              </a>
              <a href="#">
                <FaXTwitter size={24} />
              </a>
            </nav>
          </div>
        </div>
      </Container>
      <div className="border-b border-white mx-10" />

      <Container>
        <p className="font-bold text-center text-white">
          © 2024 RHSeguro. Todos os Direitos Reservados.
        </p>
      </Container>
    </footer>
  );
};
