import { Button } from "@/components/ui/button";

export function BulkOrders() {
  return (
    <section className="py-32 bg-background relative border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="bg-card border border-white/5 p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none"></div>

          <div className="max-w-2xl relative z-10">
            <h2 className="text-sm font-medium tracking-[0.2em] text-primary uppercase mb-4">B2B & Hospitality</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Elevate Your Brand Aesthetic</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-lg mb-8">
              We partner with independent cafes, boutique hotels, and premium brands to create cohesive tactile experiences. From engraved wooden menus and custom reserved signs to branded coasters and interior wall art.
            </p>
            <ul className="space-y-3 mb-10 text-foreground font-light">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Consistent brand execution</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Volume tier pricing</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Custom material sourcing</li>
            </ul>
            <Button size="lg" className="rounded-none font-sans tracking-widest uppercase px-8" asChild data-testid="button-bulk-inquiry">
              <a href="#contact">Request B2B Catalog</a>
            </Button>
          </div>

          <div className="w-full md:w-1/3 relative z-10">
             <img src="/product-cafe.png" alt="Cafe Branding" className="w-full h-auto border border-white/10 shadow-2xl shadow-black" />
          </div>
        </div>
      </div>
    </section>
  );
}