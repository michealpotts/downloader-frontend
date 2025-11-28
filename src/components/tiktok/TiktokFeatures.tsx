import { Zap, CheckCircle, Lock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Free & Instant Downloads",
      description: "Download TikTok videos without watermark for free and instantly. No registration, no hidden fees, no waiting.",
    },
    {
      icon: CheckCircle,
      title: "No Watermark TikTok Videos",
      description: "Get clean, watermark-free TikTok videos using SaveVido's TikTok Video Downloader. Perfect for sharing anywhere.",
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "Your privacy is protected. SaveVido TikTok Video Downloader doesn't store your videos or personal information.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Why Choose SaveVido TikTok Video Downloader?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          SaveVido TikTok Video Downloader helps you download TikTok videos without watermark instantly. Free, private, and works on all devices.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Features };
