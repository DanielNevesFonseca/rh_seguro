import { Container } from "@/components/common/Container";
import { ContactForm } from "@/components/pages/contato/ContactForm";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";



function ContatoPage() {
  return (
    <section className="bg-secondary-50 py-20 min-h-[80vh] flex justify-center">
      <Container>
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="flex flex-col gap-5 md:w-2/4">
            <span className="text-lg font-raleway font-bold text-secondary-500 md:text-left">
              RH Seguro
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-lora text-primary-900 md:text-left">
              Vamos Conversar!
            </h1>
            <p className="md:mt-10 text-lg md:text-left">
              Estamos aqui para ouvir você.
            </p>
            <p className="text-lg md:text-left">
              Seja para tirar dúvidas, discutir suas necessidades de RH ou
              explorar nossas soluções de seguros, nossa equipe está pronta para
              ajudar.
            </p>
            <p className="text-lg md:text-left">
              Entre em contato e descubra como podemos transformar sua
              experiência.
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <MdOutlineEmail size={18} />
                <p>rhseguro01@gmail.com</p>
              </div>

              <div className="flex gap-2 items-center">
                <FaPhoneAlt size={18} />
                <p>+55 11 98050-0777</p>
              </div>

              <div className="flex gap-2 items-center">
                <CiLocationOn size={18} />
                <p>São Paulo - SP</p>
              </div>
            </div>

            <div className="flex gap-5 flex-col md:flex-row">
              <a
                className="capitalize border text-white bg-green-700 border-green-700 px-6 py-3 rounded text-center w-full md:w-fit"
                href="https://wa.link/h3ip2g"
                target="_blank"
              >
                Converse no WhatsApp
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/4">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContatoPage;
