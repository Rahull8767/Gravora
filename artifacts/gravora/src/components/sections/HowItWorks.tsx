import { Layers, MessageSquareShare, FileCheck2, PackageCheck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      stepNumber: "01",
      icon: <Layers className="w-6 h-6 text-primary" />,
      title: "Choose or Describe",
      desc: "Select a signature item from our catalogue or describe your custom wood or stone vision with approximate dimensions.",
    },
    {
      stepNumber: "02",
      icon: <MessageSquareShare className="w-6 h-6 text-primary" />,
      title: "Connect on WhatsApp",
      desc: "Tap any product to open WhatsApp with your chosen specifications. Share your reference photograph, crest, or vector logo directly.",
    },
    {
      stepNumber: "03",
      icon: <FileCheck2 className="w-6 h-6 text-primary" />,
      title: "Proof & Quotation",
      desc: "Our artisans review your graphic contrast, recommend the best wood/stone substrate, and provide an exact quotation for your approval.",
    },
    {
      stepNumber: "04",
      icon: <PackageCheck className="w-6 h-6 text-primary" />,
      title: "Crafted & Dispatched",
      desc: "Once confirmed, your piece is precision laser-burned, hand-finished with organic oils, safely packed in protective cushioning, and shipped.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-card/60 relative border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono text-primary uppercase tracking-[0.2em] block mb-3">
            Simple & Transparent
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">
            How Gravora Works
          </h2>
          <p className="text-muted-foreground font-light mt-3 leading-relaxed text-sm sm:text-base">
            From your concept to an enduring heirloom. We keep communication direct, personal, and grounded in craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-background/80 border border-white/10 rounded-lg p-6 relative flex flex-col justify-between group hover:border-primary/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded border border-primary/30 bg-primary/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-serif font-bold text-white/15 group-hover:text-primary/40 transition-colors">
                    {step.stepNumber}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-[11px] font-mono text-primary">
                <span>Step {step.stepNumber}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}