import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/youtube/YoutubeHero";
import { Features } from "@/components/youtube/YoutubeFeatures";
import { HowToUse } from "@/components/youtube/YoutubeHowToUse";
import { FAQ } from "@/components/youtube/YoutubeFAQ";
import { CTA } from "@/components/youtube/YoutubeCTA";
import { Footer } from "@/components/layout/Footer";

const Youtube = () => {
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

export default Youtube;
