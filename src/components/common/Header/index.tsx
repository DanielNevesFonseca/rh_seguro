"use client";

import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { Container } from "../Container";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import DrawerAppBar from "../ResponsiveMenu";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isTop, setIsTop] = useState(true);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  // useEffect(() => {
  //   // return window.removeEventListener("scroll", handleScrolling);
  // }, [isTop, setIsTop]);

  // const handleScrolling = () => {
  //   if (window.screenY > 5) {
  //     setIsTop(false);
  //   }
  //   console.log(window.screenY);
  // };

  return (
    <header
      className={`bg-primary-500 py-5 sticky top-0 z-50 ${
        !isTop ? "opacity-50" : ""
      }`}
    >
      <Container>
        <div className="flex  items-center justify-between gap-5 flex-col md:flex-row">
          <Link href={`/`} onClick={() => setIsMenuMobileOpen(false)}>
            <Image
              className="object-contain"
              src="/icons/logo_branca.svg"
              alt="Logo RH Seguro"
              quality={100}
              height={80}
              width={100}
              priority={true}
            />
          </Link>

          <button
            className="md:hidden absolute right-4 "
            onClick={() => {
              setIsMenuMobileOpen(!isMenuMobileOpen);
              console.log(isMenuMobileOpen);
            }}
          >
            {!isMenuMobileOpen ? (
              <TiThMenu size={36} color="#fff" />
            ) : (
              <IoClose size={36} color="#fff" />
            )}
          </button>

          <nav className={`text-white  gap-5 hidden md:flex `}>
            <Link href={`/sobre-nos`}>Sobre Nós</Link>
            <Link href={`/servicos`}>Serviços</Link>
            <Link href={`/parcerias`}>Parcerias</Link>
            <Link href={`/recomendacao-smart`}>Recomendação SMART</Link>
            <Link href={`/contato`}>Contato</Link>
          </nav>

          {isMenuMobileOpen && (
            <nav
              className={`text-white gap-2 flex flex-col md:hidden w-full items-center text-lg`}
              onClick={() => setIsMenuMobileOpen(false)}
            >
              <Link
                className="bg-primary-600 w-full text-center p-2 hover:bg-white hover:text-primary-500"
                href={`/sobre-nos`}
              >
                Sobre Nós
              </Link>
              <Link
                className="bg-primary-600 w-full text-center p-2 hover:bg-white hover:text-primary-500"
                href={`/servicos`}
              >
                Serviços
              </Link>
              <Link
                className="bg-primary-600 w-full text-center p-2 hover:bg-white hover:text-primary-500"
                href={`/parcerias`}
              >
                Parcerias
              </Link>
              <Link
                className="bg-primary-600 w-full text-center p-2 hover:bg-white hover:text-primary-500"
                href={`/recomendacao-smart`}
              >
                Recomendação SMART
              </Link>
              <Link
                className="bg-primary-600 w-full text-center p-2 hover:bg-white hover:text-primary-500"
                href={`/contato`}
              >
                Contato
              </Link>
            </nav>
          )}

          {isMenuMobileOpen && (
            <button
              onClick={() => setIsMenuMobileOpen(false)}
              className={`bg-green-700 text-white p-2 rounded block md:hidden w-full`}
            >
              Consultoria Personalizada
            </button>
          )}

          <a
            href="https://wa.link/h3ip2g"
            target="_blank"
            className={`bg-green-700 text-white p-2 rounded hidden md:block`}
          >
            Consultoria Personalizada
          </a>

          {/* <DrawerAppBar/> */}
        </div>
      </Container>
    </header>
  );
};
