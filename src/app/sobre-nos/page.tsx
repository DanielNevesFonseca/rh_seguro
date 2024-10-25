import { MakeContact } from "@/components/common/MakeContact";
import { StatsSection } from "@/components/common/StatsSection";
import { BannerAbout } from "@/components/pages/about/Banner";
import { OurStory } from "@/components/pages/about/OurStory";
import { OurValues } from "@/components/pages/about/OurValues";
import { Staff } from "@/components/pages/about/Staff";

function SobreNosPage() {
  return (
    <>
      {/* Banner inicial */}
      <BannerAbout />

      {/* Seção da Nossa História */}
      <OurStory />

      {/* Seção de Valores */}
      <OurValues />

      {/* Seção de STATS */}
      <StatsSection />

      {/* Seção Conheça Nossa Equipe */}
      <Staff />

      {/* Seção CTA Padrão */}
      <MakeContact />
    </>
  );
}

export default SobreNosPage;
