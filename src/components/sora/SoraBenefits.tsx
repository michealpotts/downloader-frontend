export const SoraBenefits = () => {
  const benefits = [
    {
      title: "Instant Downloads",
      description: "The Sora video downloader delivers clean videos in seconds from any valid link.",
    },
    {
      title: "Quality Preserved",
      description: "Videos maintain full resolution and clarity when downloaded through our Sora video downloader.",
    },
    {
      title: "Consistent Results",
      description: "The Sora video downloader works reliably every time you need it.",
    },
    {
      title: "Works Everywhere",
      description: "Use this Sora video downloader on any device with a browser. No app installation required.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Why Choose This Sora Video Downloader
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
            This Sora video downloader solves one problem: getting clean Sora videos. No watermarks, no quality loss, no complications. The tool does exactly what it promises - download Sora videos in their original state.
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
          Benefits of Using This Sora Video Downloader
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h4 className="text-xl font-bold mb-3 text-foreground">
                {benefit.title}
              </h4>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
