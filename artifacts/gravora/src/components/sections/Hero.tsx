import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onExploreClick: () => void;
  onLittleWorldsClick: () => void;
}

export function Hero({ onExploreClick, onLittleWorldsClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative pt-8 pb-16 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24 bg-[#FFFDF9] border-b border-[#E6DED2]/60 overflow-hidden"
    >
      {/* Subtle organic warm background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F8F5EF] rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 opacity-70" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#EFE8DD]/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20 opacity-60" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Editorial Content Column */}
          <div className="md:col-span-7 space-y-6 text-left">
            {/* Discreet Brand Statement */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8F5EF] border border-[#E6DED2] text-[#9A6428] text-xs font-sans font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Artisan Handcrafted Gifting • Made in India</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#29231E] leading-[1.12] tracking-tight">
              Little Details. <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#704522]">Lasting Impressions.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-[#71685F] text-base sm:text-lg font-light leading-relaxed max-w-xl">
              Discover handcrafted wooden creations, personalized keepsakes, and thoughtfully designed gifts made to leave a mark.
            </p>

            {/* Core Philosophy Quote */}
            <blockquote className="border-l-2 border-[#9A6428] pl-4 py-1 text-xs sm:text-sm italic text-[#4A2C18] max-w-lg bg-[#F8F5EF]/60 rounded-r-md">
              “We do not simply engrave objects. We turn ordinary materials into meaningful pieces that people want to keep, display, and gift.”
            </blockquote>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                size="lg"
                onClick={onExploreClick}
                className="h-12 px-7 rounded-xl font-sans text-sm font-medium bg-[#9A6428] text-white hover:bg-[#704522] shadow-md transition-all flex items-center gap-2"
                data-testid="button-hero-explore"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={onLittleWorldsClick}
                className="h-12 px-6 rounded-xl font-sans text-sm font-medium border-[#9A6428] text-[#704522] hover:bg-[#F8F5EF] transition-all"
                data-testid="button-hero-little-worlds"
              >
                <span>Discover Little Worlds</span>
              </Button>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#E6DED2]/60 text-xs text-[#71685F]">
              <div>
                <p className="font-semibold text-[#29231E]">10W Diode Precision</p>
                <p className="text-[11px] text-[#71685F]">Micro-kerf vector laser</p>
              </div>
              <div>
                <p className="font-semibold text-[#29231E]">3mm Natural Basswood</p>
                <p className="text-[11px] text-[#71685F]">Multi-layer 3D assembly</p>
              </div>
              <div>
                <p className="font-semibold text-[#29231E]">Direct Artisan Care</p>
                <p className="text-[11px] text-[#71685F]">Personalized in India</p>
              </div>
            </div>
          </div>

          {/* Featured Product Hero Image */}
          <div className="md:col-span-5">
            <div className="relative group">
              {/* Outer decorative border frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#9A6428]/20 via-[#EFE8DD] to-[#9A6428]/10 blur-sm -z-10 group-hover:blur-md transition-all" />

              <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden bg-white border border-[#E6DED2] shadow-xl">
                <img
                  src="/images/products/gr010-premium-layered-nameplate.jpg"
                  alt="Gravora Flagship 3D Layered Wooden Creation"
                  className="w-full h-full object-cover img-zoom"
                  loading="eager"
                />

                {/* Floating Craftsmanship Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#E6DED2] shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#9A6428] font-semibold block">
                      Flagship Creation • GR010
                    </span>
                    <span className="font-serif text-sm font-bold text-[#29231E]">
                      Layered Scenic Desk Display
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#704522] bg-[#F8F5EF] px-2.5 py-1 rounded-md border border-[#E6DED2]">
                    Starting at ₹699
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
