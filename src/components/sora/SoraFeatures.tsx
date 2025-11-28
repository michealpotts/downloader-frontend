import { Zap, CheckCircle, Lock } from "lucide-react";

export const SoraFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Free Access",
      description: "This Sora video downloader is free. No payment, no registration, no limits on downloads.",
    },
    {
      icon: CheckCircle,
      title: "Original Quality",
      description: "The Sora video downloader preserves native resolution up to 1080p. No compression, no quality loss.",
    },
    {
      icon: Lock,
      title: "Simple Process",
      description: "Copy link, paste into Sora video downloader, download. Three steps, done in seconds.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Why Choose SaveVido Sora Video Downloader?
          </h2>
          <p className="text-muted-foreground text-lg">
            SaveVido Sora Video Downloader helps you download Sora videos without watermark instantly. Free, private, and works on all devices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
