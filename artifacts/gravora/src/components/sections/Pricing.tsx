export function Pricing() {
  const priceRows = [
    { product: "Wood Engraving", size: "Small (6x6\")", price: "₹___" },
    { product: "Wood Engraving", size: "Medium (10x10\")", price: "₹___" },
    { product: "Wood Engraving", size: "Large (12x16\")", price: "₹___" },
    { product: "Stone Carving", size: "Small (6x6\")", price: "₹___" },
    { product: "Keychain", size: "Single", price: "₹___" },
    { product: "Bulk Orders", size: "10+ pieces", price: "Custom Quote" }
  ];

  return (
    <section id="pricing" className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-medium tracking-[0.2em] text-primary uppercase mb-4">Pricing List</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Structured Pricing</h3>
          <p className="text-muted-foreground font-light leading-relaxed">
            Transparent pricing starting points. Actual cost scales based on design complexity, precise dimensions, and custom hardware choices.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card border border-white/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse" data-testid="table-pricing">
              <thead>
                <tr className="border-b border-white/10 bg-zinc-950 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  <th className="py-5 px-6 font-semibold">Product Category</th>
                  <th className="py-5 px-6 font-semibold">Size / Quantity</th>
                  <th className="py-5 px-6 font-semibold text-right">Starting Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {priceRows.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-white/[0.01] transition-colors"
                  >
                    <td className="py-5 px-6 font-medium text-foreground">{row.product}</td>
                    <td className="py-5 px-6 text-muted-foreground font-light">{row.size}</td>
                    <td className="py-5 px-6 text-right font-mono font-medium">
                      {row.price === "Custom Quote" ? (
                        <span className="text-primary uppercase tracking-wider text-xs border border-primary/20 bg-primary/5 px-2.5 py-1">
                          {row.price}
                        </span>
                      ) : (
                        <span className="text-foreground">{row.price}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer note inside pricing box */}
          <div className="bg-zinc-950 p-6 border-t border-white/5 text-xs text-muted-foreground text-center font-light leading-relaxed">
            Need a specific custom size or shape? We cut and carve custom-dimension wood and stone plaques to order. 
            <a href="#contact" className="text-primary hover:underline ml-1 font-normal">Contact our studio for a detailed quote.</a>
          </div>
        </div>
      </div>
    </section>
  );
}