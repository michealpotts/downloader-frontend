import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/tiktok/TiktokHero";
import { Features } from "@/components/tiktok/TiktokFeatures";
import { HowToUse } from "@/components/tiktok/TiktokHowToUse";
import { FAQ } from "@/components/tiktok/TiktokFAQ";
import { CTA } from "@/components/tiktok/TiktokCTA";
import { Footer } from "@/components/layout/Footer";

const TikTok = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Hero />
      <Features />
      <HowToUse />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default TikTok;
