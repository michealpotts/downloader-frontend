import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export const SoraCTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Start Using Sora Video Downloader
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
          Download Sora videos without watermarks using this free tool. Preserve original quality for your projects. The Sora video downloader works instantly with any Sora video link.
        </p>
        <Button
          onClick={scrollToTop}
          size="lg"
          className="h-12 px-8 text-base font-semibold"
        >
          <ArrowUp className="w-4 h-4 mr-2" />
          Download Sora Video Now
        </Button>
      </div>
    </section>
  );
};
