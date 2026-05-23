export function Pricing() {
  const tiers = [
    { name: "Personalized Gifts", price: "299", desc: "Keychains, coasters, small keepsakes." },
    { name: "Wood Engraving", price: "499", desc: "Plaques, photos, detailed typography." },
    { name: "Stone Carving", price: "799", desc: "Slate art, premium memorial pieces." },
    { name: "Wall Decor", price: "999", desc: "Large format, multi-layer mandalas." }
  ];

  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-sm font-medium tracking-[0.2em] text-primary uppercase mb-4">Investment</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Starting Points</h3>
          <p className="text-muted-foreground font-light">
            Every piece is custom crafted. Prices scale based on size, complexity, and material choice. Contact us for an exact quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <div 
              key={tier.name}
              className="bg-background border border-white/5 p-8 flex flex-col items-center text-center hover:border-primary/50 transition-colors duration-300"
              data-testid={`card-pricing-${i}`}
            >
              <h4 className="text-lg font-medium text-foreground mb-6">{tier.name}</h4>
              <div className="mb-6 flex flex-col items-center">
                <span className="text-xs text-muted-foreground uppercase tracking-widest mb-2">From</span>
                <div className="flex items-start">
                  <span className="text-2xl font-serif text-primary mt-1 mr-1">₹</span>
                  <span className="text-5xl font-serif font-bold text-foreground">{tier.price}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-light">{tier.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}