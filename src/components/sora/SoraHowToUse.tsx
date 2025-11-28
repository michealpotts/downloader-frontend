export const SoraHowToUse = () => {
  const steps = [
    {
      number: 1,
      title: "Find Video",
      description: "Browse videos in the Sora app. When you find one to download, tap the three-dot menu button.",
    },
    {
      number: 2,
      title: "Copy Link",
      description: "Select 'Copy Link' from the menu. The video URL is now saved to your clipboard.",
    },
    {
      number: 3,
      title: "Download Without Watermark",
      description: "Paste the link into our Sora video downloader and click download. Receive the clean video immediately.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          How to Use Sora Video Downloader
        </h2>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="flex-1">
                <div className="aspect-[9/16] max-w-[300px] mx-auto bg-muted/50 rounded-lg border border-border flex items-center justify-center">
                  <span className="text-muted-foreground">Screenshot placeholder</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
