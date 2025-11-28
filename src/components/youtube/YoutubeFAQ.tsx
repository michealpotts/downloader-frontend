import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is SaveVido Youtube Video Downloader free?",
      answer: "Yes, SaveVido Youtube Video Downloader is 100% free. No hidden charges or sign-ups required.",
    },
    {
      question: "Does it remove the Youtube watermark?",
      answer: "Yes, SaveVido Youtube Video Downloader removes the Youtube watermark automatically for clean downloads.",
    },
    {
      question: "Is it safe to use?",
      answer: "Absolutely. SaveVido Youtube Video Downloader doesn't store any personal data or video files.",
    },
    {
      question: "Can I use this on mobile?",
      answer: "Yes, SaveVido Youtube Video Downloader works perfectly on all mobile devices and browsers.",
    },
    {
      question: "Do I need to install anything?",
      answer: "No installation needed. Just paste your Youtube link and download instantly.",
    },
    {
      question: "Can I use downloaded videos commercially?",
      answer: "Please respect Youtube creators' rights and platform terms. SaveVido Youtube Video Downloader is intended for personal use.",
    },
    {
      question: "Is SaveVido affiliated with Youtube?",
      answer: "No, SaveVido is an independent downloader tool not affiliated with Youtube or ByteDance.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { FAQ };
