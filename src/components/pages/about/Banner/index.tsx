"use client";

import { Container } from "@/components/common/Container";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export const BannerAbout = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner ? (
        <div className="bg-primary-500 bg-rosana-palestrando bg-cover bg-no-repeat w-full md:h-[600px] py-10 flex items-center justify-center text-white px-4">
          <Container>
            <div className="flex flex-col justify-between items-center h-full gap-5 ">
              <span className="text-lg font-bold font-raleway">
                Nossa Missão
              </span>
              <h1 className="font-lora font-bold text-4xl md:text-6xl text-center md:w-3/4">
                Capacitamos Sua Empresa com <span>Soluções Personalizadas</span>
              </h1>
              <p className="text-white text-center w-full text-lg md:w-4/5">
                Capacitamos sua empresa com soluções personalizadas de RH e
                seguros, transformando desafios em oportunidades e garantindo
                segurança, eficiência e bem-estar para você e sua equipe.
              </p>

              <button
                className="text-white hidden"
                onClick={() => setShowBanner(false)}
              >
                <IoClose size={32} />
              </button>

              <a
                href="https://wa.link/h3ip2g"
                target="_blank"
                className={`bg-green-700 text-white p-2 px-4 rounded `}
              >
                Consultoria Personalizada
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
};
