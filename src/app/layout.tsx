import type { Metadata } from "next";
import "./globals.css";

import { Raleway, Lora, Nunito } from "next/font/google";
import { BannerFixed } from "../components/common/BannerFixed";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { FaWhatsapp } from "react-icons/fa";

const nunito = Nunito({ subsets: ["latin"] });
//const lora = Lora({subsets: ['latin']});
//const raleway = Raleway({subsets: ['latin']});

export const metadata: Metadata = {
  title: "RH Seguro",
  description:
    "Transforme Seu Negócio com Soluções de RH Personalizadas e Seguros Confiáveis",
  keywords: [
    "RH",
    "Seguro",
    "Serviços de RH",
    "Plano de Saúde",
    "Seguro de Vida",
  ],
  openGraph: {
    images: [`${process.env.PROJECT_URL}/preview.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.className} antialiased text-primary-500`}>
        <Header />
        
        {children}
        <Footer />

        <a
          href="https://wa.link/h3ip2g"
          target="_blank"
          className="bg-green-700 text-white p-2 rounded-full fixed bottom-[24px] right-[24px] animate-bounce"
        >
          <FaWhatsapp size={40} />
        </a>
      </body>
    </html>
  );
}
