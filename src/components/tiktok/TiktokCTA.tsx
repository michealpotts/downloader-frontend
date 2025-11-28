import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const CTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Download TikTok Videos Easily with SaveVido
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
          Use SaveVido TikTok Video Downloader to quickly download TikTok videos without watermark. Clean, HD videos ready in seconds.
        </p>
        <Button
          onClick={scrollToTop}
          size="lg"
          className="h-12 px-8 text-base font-semibold"
        >
          <ArrowUp className="w-4 h-4 mr-2" />
          Download TikTok Videos Now
        </Button>
      </div>
    </section>
  );
};

export { CTA };
