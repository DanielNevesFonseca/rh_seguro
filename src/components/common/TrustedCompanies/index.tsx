'use client'

import { Container } from "../Container";
import InfinitySlider from "../InfinitySlider";

const images = [
  "/images/empresa_detran.png",
  "/images/empresa_fg_seguros.png",
  "/images/empresa_gp_midia.png",
  "/images/empresa_identidata.jpg",
  "/images/empresa_ig.png",
  "/images/empresa_intensic.jpg",
  "/images/empresa_lo_presti.png",
  "/images/empresa_seinesp.png",
  "/images/empresa_solides.png",

  // Adicione mais URLs de imagens conforme necessário
];

export const TrustedCompanies = () => {
  return (
    <section className="bg-white gap-16 py-20  flex flex-col items-center justify-center">
      <Container>
        <div className="flex flex-col items-center gap-10">
          <span className="text-lg font-raleway font-bold text-secondary-500">
            RH Seguro
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-lora text-center text-primary-900 w-2/4 capitalize">
            Empresas que confiam no nosso trabalho
          </h1>
        </div>
      </Container>
      <InfinitySlider images={images} />
    </section>
  );
};
