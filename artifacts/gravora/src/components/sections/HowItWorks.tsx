import { Upload, PenTool, Truck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-primary" />,
      title: "Upload Your Vision",
      desc: "Share your idea, design, or emotional prompt. We accept sketches, vectors, or simple text descriptions."
    },
    {
      icon: <PenTool className="w-8 h-8 text-primary" />,
      title: "Artisan Crafting",
      desc: "Our master craftsmen translate your vision onto premium materials using high-precision laser tech."
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Delivered Locally",
      desc: "Beautifully packaged in our signature box and delivered directly to your hands or your loved one."
    }
  ];

  return (
    <section id="custom-order" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-medium tracking-[0.2em] text-primary uppercase mb-4">The Process</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">From Idea to Heirloom</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-background border border-primary/20 flex items-center justify-center mb-8 relative z-10 group-hover:border-primary transition-colors duration-500 group-hover:shadow-[0_0_30px_rgba(var(--primary),0.2)]">
                {step.icon}
                <div className="absolute -bottom-4 right-0 text-5xl font-serif font-bold text-white/5 select-none">{i + 1}</div>
              </div>
              <h4 className="text-2xl font-serif font-bold mb-4">{step.title}</h4>
              <p className="text-muted-foreground font-light leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}