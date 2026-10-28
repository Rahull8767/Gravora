import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 bg-background border-b border-border/40"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Text Column */}
          <div className="md:col-span-7 space-y-4 sm:space-y-5 text-left">
            <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-primary font-medium">
              Artisan Engraving Studio
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground leading-[1.18] tracking-tight">
              Personalised Art & Custom Engraving.
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed max-w-xl">
              Cherished portraits, carved stone keepsakes, bespoke gifts, and branded wooden merchandise crafted to order in India.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Button
                size="sm"
                className="h-10 px-5 rounded font-mono text-xs uppercase tracking-wider bg-foreground text-background hover:bg-foreground/90"
                asChild
                data-testid="button-hero-explore"
              >
                <a href="#products">Explore Products</a>
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="h-10 px-5 rounded font-mono text-xs uppercase tracking-wider border-border hover:bg-white/5"
                asChild
                data-testid="button-hero-custom"
              >
                <a href="#custom-order">Custom Enquiry</a>
              </Button>
            </div>
          </div>

          {/* Genuine Product Image */}
          <div className="md:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-square md:aspect-[4/3] rounded overflow-hidden bg-card border border-border/60">
              <img
                src="/product-wood.png"
                alt="Personalised Teak Wood Engraved Portrait"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}