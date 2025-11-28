import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useDownload } from "@/hooks/use-download";

export const Hero = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const { toast } = useToast();

  const handleDownload = async () => {
    if (!videoUrl.trim()) {
      toast({
        title: "Please enter a Youtube URL",
        description: "You need to paste a valid Youtube video link to download.",
        variant: "destructive",
      });
      return;
    }

    // This is a demo - in production, you'd call an API to process the video
    toast({
      title: "Processing video...",
      description: "Your download will start shortly.",
    });

    await useDownload(videoUrl);
  };

  return (
    <section className="flex-1 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-3xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Download Youtube Videos Without Watermark Instantly
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Use SaveVido Youtube Video Downloader to download high-quality Youtube
            videos with no watermark. Fast, free, and secure.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
          <Textarea
            placeholder="Paste your Youtube video link here"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="min-h-[120px] bg-secondary border-border text-foreground placeholder:text-muted-foreground resize-none text-base"
          />
          <div className="flex gap-3">
            <Button 
              onClick={() => setVideoUrl("")}
              size="lg"
              variant="secondary"
              className="flex-1 font-semibold"
            >
              Clear
            </Button>
            <Button 
              onClick={handleDownload}
              size="lg"
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Download
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
            Share with friends
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
