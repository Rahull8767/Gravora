import { HelpCircle, Check, MessageSquare } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";

export function Pricing() {
  const priceTiers = [
    {
      category: "Personalised Hardwood Portraits",
      startingAt: "From ₹1,299",
      specs: "6x8” Teak or Mango Wood with Table Stand",
      whatsIncluded: "Photo optimization, laser engraving, natural oil finish & display stand",
    },
    {
      category: "Split-Face Slate Stone Plaques",
      startingAt: "From ₹1,499",
      specs: "6x6” Chiseled Natural Slate with Stand / Mounts",
      whatsIncluded: "Organic edge chiseled stone, high-contrast laser etching & stone sealant",
    },
    {
      category: "Heirloom Wooden Keepsake Boxes",
      startingAt: "From ₹1,799",
      specs: "7x5x3.5” Solid Hardwood with Engraved Lid",
      whatsIncluded: "Interlocked joinery, custom monogram engraving & velvet lining",
    },
    {
      category: "Layered Wooden Wall Art & Mandalas",
      startingAt: "From ₹2,499",
      specs: "12x12” 4-Layer Birch & Walnut Assembly",
      whatsIncluded: "3D stacked precision laser vector cutting, pre-installed wall mounting",
    },
    {
      category: "Hardwood & Distressed Leather Keychains",
      startingAt: "From ₹499",
      specs: "Standard 3.5x1.25” Everyday Carry",
      whatsIncluded: "Solid hardwood core, genuine distressed leather, solid brass split ring",
    },
    {
      category: "Wood & Stone Coaster Suites (Set of 4)",
      startingAt: "From ₹899",
      specs: "Set of 4 (Kota Stone or Teak Wood)",
      whatsIncluded: "Laser-etched logo/monogram, anti-scratch table pads on base",
    },
    {
      category: "Corporate & Hospitality Bulk Orders",
      startingAt: "Tiered Volume Quote",
      specs: "Custom quantities (10 – 500+ units)",
      whatsIncluded: "Vector proofing, branded packaging options & dedicated lead time",
    },
  ];

  const { url: pricingWhatsAppUrl } = buildWhatsAppUrl(
    "Hi Gravora! I'd like to get an exact quotation for a custom engraving based on your pricing guide."
  );

  return (
    <section id="pricing" className="py-20 md:py-28 bg-card/60 border-t border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono text-primary uppercase tracking-[0.2em] block mb-3">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">
            Pricing Guidance
          </h2>
          <p className="text-muted-foreground font-light mt-3 leading-relaxed text-sm sm:text-base">
            Every creation is tailor-made. Below are our standard starting guide points. Actual cost is based on
            final dimensions, material grade, and vector complexity with no hidden fees.
          </p>
        </div>

        {/* Pricing Table / Card Container */}
        <div className="bg-background border border-white/10 rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse" data-testid="table-pricing">
              <thead>
                <tr className="border-b border-white/10 bg-zinc-950/80 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                  <th className="py-4 px-6 font-semibold">Product Classification</th>
                  <th className="py-4 px-6 font-semibold hidden sm:table-cell">Standard Specification</th>
                  <th className="py-4 px-6 font-semibold text-right">Starting Guide</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {priceTiers.map((tier) => (
                  <tr key={tier.category} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6">
                      <p className="font-serif font-bold text-foreground">{tier.category}</p>
                      <p className="text-xs text-muted-foreground font-light sm:hidden mt-0.5">
                        {tier.specs}
                      </p>
                      <p className="text-[11px] text-muted-foreground/75 font-light mt-1 hidden md:block">
                        {tier.whatsIncluded}
                      </p>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground font-light hidden sm:table-cell">
                      {tier.specs}
                    </td>
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <span className="font-mono text-primary font-medium text-xs sm:text-sm">
                        {tier.startingAt}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pricing Explanatory Footer */}
          <div className="p-6 bg-zinc-950/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-2.5 text-xs text-muted-foreground font-light max-w-xl">
              <HelpCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                Need custom architectural dimensions, rare wood species, or metallic inlays? We carve to your exact specifications.
              </span>
            </div>

            <Button
              size="sm"
              className="h-10 px-5 rounded font-mono text-xs uppercase tracking-wider bg-[#25D366] hover:bg-[#1ebe5d] text-white shrink-0 gap-2"
              asChild
            >
              <a href={pricingWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="w-3.5 h-3.5" />
                <span>Get Exact Quote</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}