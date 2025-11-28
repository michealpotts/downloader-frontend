import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const SoraFAQ = () => {
  const faqs = [
    {
      question: "Is this Sora video downloader free?",
      answer: "Yes. The Sora video downloader is completely free with no hidden costs.",
    },
    {
      question: "What video format does the downloader support?",
      answer: "The Sora video downloader outputs MP4 format, matching Sora's native format.",
    },
    {
      question: "Is the Sora video downloader safe?",
      answer: "Yes. The tool processes videos securely without storing your data.",
    },
    {
      question: "Can I use this Sora video downloader on mobile?",
      answer: "Yes. The Sora video downloader works on all devices - phones, tablets, and computers.",
    },
    {
      question: "What if the Sora video downloader fails?",
      answer: "Verify the video link is correct and the video is publicly accessible. Try again.",
    },
    {
      question: "Does this Sora video downloader support batch downloads?",
      answer: "Currently, the Sora video downloader processes one video at a time for best results.",
    },
    {
      question: "How does this Sora video downloader work?",
      answer: "The Sora video downloader uses advanced AI technology to process and deliver clean videos automatically.",
    },
    {
      question: "Is this Sora video downloader affiliated with OpenAI?",
      answer: "No. This Sora video downloader is an independent tool, not affiliated with OpenAI.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Common Questions
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
