import { HeaderSeguros } from "@/components/pages/home/HeaderSeguros";
import { HealthSection } from "@/components/pages/home/HealthSection";
import { HealthSection2 } from "@/components/pages/home/HealthSection2";
import { HealthSection3 } from "@/components/pages/home/HealthSection3";
import { HeroSection } from "@/components/pages/home/HeroSection";
import { ServicosSection } from "@/components/pages/home/ServicosSection";
import { TrustedCompanies } from "@/components/common/TrustedCompanies";
import { StatsSection } from "@/components/common/StatsSection";
import { ClientTestimonials } from "@/components/pages/home/ClientTestimonials";
import { FAQ } from "@/components/pages/home/FAQ";
import { MakeContact } from "@/components/common/MakeContact";
import { BannerFixed } from "@/components/common/BannerFixed";

export default function Home() {
  return (
    <>

      {/* Banner inicial */}
      <BannerFixed />

      {/* Seção Hero com Carrossel */}
      <HeroSection />

      {/* Seção Empresas que confiam no nosso trabalho */}
      <TrustedCompanies />

      {/* Seção Prévia Soluções de RH */}
      <ServicosSection />

      {/* Seção planos e seguros */}
      <HeaderSeguros />

      {/* Seção Saúde */}
      <HealthSection />
      <HealthSection2 />
      <HealthSection3 />

      {/* Seção de estatisticas */}
      <StatsSection />

      {/* Seção Depoimentos Clientes*/}
      <ClientTestimonials />

      {/* Seção FAQ */}
      <FAQ />

      {/* Seção entrar em contato */}
      <MakeContact/>
    </>
  );
}
