const HowToUse = () => {
  const steps = [
    {
      number: "1",
      title: "Browse & Access Share Menu",
      description: "In TikTok, browse videos and find the one you want to download. Tap the 'Share' button to open the share menu.",
    },
    {
      number: "2",
      title: "Copy Video Link",
      description: "In the share menu, tap 'Copy Link' to copy the TikTok video URL to your clipboard.",
    },
    {
      number: "3",
      title: "Paste & Download",
      description: "Return to SaveVido, paste the link in the input box above, and click 'Download' to get your watermark-free video.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          How to Use TikTok Video Downloader
        </h2>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-12`}
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed pl-16">
                  {step.description}
                </p>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="w-full max-w-sm aspect-[9/16] bg-card rounded-2xl border border-border shadow-lg flex items-center justify-center">
                  <span className="text-muted-foreground">TikTok Screenshot</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { HowToUse };
