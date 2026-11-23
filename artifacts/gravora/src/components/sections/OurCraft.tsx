import { Sparkles, Layers, Sliders, ShieldCheck, HeartHandshake } from "lucide-react";

export function OurCraft() {
  const craftPillars = [
    {
      icon: Sparkles,
      title: "Precision Laser Engraving",
      desc: "Powered by our 10W blue diode laser with a focused 0.08mm optical spot, rendering crisp serif letterforms, photographic halftone gradients, and delicate nature vectors on seasoned basswood.",
    },
    {
      icon: Layers,
      title: "Layer-by-Layer 3D Assembly",
      desc: "Our signature Little Worlds dioramas and scenic nameplates assemble up to five individually laser-cut 3mm plywood sheets to achieve tangible tactile depth and realistic shifting light shadows.",
    },
    {
      icon: Sliders,
      title: "Hand Finishing & Nourishing Oils",
      desc: "Every cut edge is hand-deburred and chamfered. Wooden faces are conditioned with plant-based mineral oils and protective natural waxes to bring out the warm grain without artificial glossy shine.",
    },
    {
      icon: ShieldCheck,
      title: "Attention to Small Details",
      desc: "From soft non-scratch felt and cork backing pads to solid slotted matching wooden desk blocks, every accessory is designed for daily tactile pleasure on luxury desks.",
    },
    {
      icon: HeartHandshake,
      title: "Thoughtful Presentation",
      desc: "Packed with shock-absorbing biodegradable wraps and presentation sleeves, ensuring your gift arrives pristine and leaves an unforgettable first impression.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9] border-b border-[#E6DED2]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F5EF] border border-[#E6DED2] text-xs font-mono uppercase tracking-widest text-[#9A6428] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Grounded Craftsmanship</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#29231E] leading-tight">
              Crafted with Care. <br />
              <span className="italic text-[#704522] font-normal">Made to Last.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#71685F] font-light leading-relaxed">
              We believe in honest, meticulous craftsmanship. Rather than mass-manufacturing generic plastic novelties, we focus on genuine natural wood, certified safe materials, and transparent workshop processes.
            </p>

            <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#E6DED2] text-xs text-[#4A2C18] space-y-1.5">
              <p className="font-semibold text-[#29231E]">
                Workshop Feasibility Standards:
              </p>
              <p className="text-[#71685F] leading-relaxed">
                • 150 × 150 mm maximum component envelope for single-pass cutting
                <br />
                • Premium 3mm laser-compatible basswood plywood
                <br />
                • Surface marking on certified coated blanks (no unsafe plastics or raw heavy steel cutting)
              </p>
            </div>
          </div>

          {/* Right Craft Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {craftPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F8F5EF] border border-[#E6DED2] hover:border-[#9A6428]/40 transition-colors flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-white border border-[#E6DED2] text-[#9A6428] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-base font-bold text-[#29231E]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#71685F] leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
