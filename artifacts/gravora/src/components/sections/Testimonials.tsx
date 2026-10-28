import { Shield, Sparkles, MessageCircle, HeartHandshake } from "lucide-react";

export function Testimonials() {
  const standards = [
    {
      icon: <Shield className="w-5 h-5 text-primary" />,
      title: "Hand-Selected Canvases",
      desc: "Every slab of teak, mango wood, or split slate is individually inspected for grain stability and density before cutting.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-primary" />,
      title: "Micron-Level Precision",
      desc: "Our calibrated laser optics etch with sub-millimeter fidelity, reproducing fine photographic details, crisp typography, and vector crests.",
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-primary" />,
      title: "Direct WhatsApp Proofing",
      desc: "No automated black holes. You review your design preview and communicate directly with our workshop before we start engraving.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-primary" />,
      title: "Safe Heritage Packaging",
      desc: "Wood and stone demand care. Every piece is wrapped in moisture-resistant buffers and reinforced boxing to arrive safely anywhere in India.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background relative border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono text-primary uppercase tracking-[0.2em] block mb-3">
            The Gravora Standard
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">
            Built on Honest Craftsmanship
          </h2>
          <p className="text-muted-foreground font-light mt-3 leading-relaxed text-sm sm:text-base">
            We don't rely on synthetic marketing claims or mass-production shortcuts. Every piece represents hours of
            material selection, digital proofing, and hand finishing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-white/10 rounded-lg p-6 flex flex-col justify-between hover:border-primary/40 transition-colors duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded border border-primary/30 bg-primary/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center text-[10px] font-mono text-primary uppercase tracking-widest">
                <span>Gravora Quality</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}