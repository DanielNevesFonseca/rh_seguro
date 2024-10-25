"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Container } from "../Container";

export const BannerFixed = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner ? (
        <div className=" bg-primary-500 bg-stats-background bg-cover bg-no-repeat w-full md:h-[600px] h-[400px] flex items-center justify-center text-white px-4">
          <Container>
            <div className="flex flex-col justify-between items-center h-full gap-5">
              <h1 className="font-raleway text-4xl md:text-7xl text-center md:w-3/4">
                Soluções de RH e Parcerias para Sua Empresa
              </h1>
              <p className="text-white text-center w-full text-lg">
                A Solução completa de RH e Benefícios para sua empresa. Tudo em
                um só lugar!
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
