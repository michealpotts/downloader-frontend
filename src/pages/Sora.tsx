import { Header } from "@/components/layout/Header";
import { SoraHero } from "@/components/sora/SoraHero";
import { SoraFeatures } from "@/components/sora/SoraFeatures";
import { SoraHowToUse } from "@/components/sora/SoraHowToUse";
import { SoraFAQ } from "@/components/sora/SoraFAQ";
import { SoraCTA } from "@/components/sora/SoraCTA";
import { Footer } from "@/components/layout/Footer";

const Sora = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <SoraHero />
      <SoraFeatures />
      <SoraHowToUse />
      <SoraFAQ />
      <SoraCTA />
      <Footer />
    </div>
  );
};

export default Sora;
