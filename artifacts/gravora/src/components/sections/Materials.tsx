import { ArrowRight } from "lucide-react";
import { MATERIALS_DATA, type MaterialInfo } from "@/data/products";
import { Button } from "@/components/ui/button";

interface MaterialsProps {
  setActiveCategory: (cat: string) => void;
}

export function Materials({ setActiveCategory }: MaterialsProps) {
  const handleFilterByCategory = (type: "wood" | "stone") => {
    setActiveCategory(type);
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="materials" className="py-20 md:py-28 bg-card/40 border-t border-white/10 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono text-primary uppercase tracking-[0.2em] block mb-3">
              Organic Canvases
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">
              Hardwoods & Natural Stone
            </h2>
            <p className="text-muted-foreground font-light mt-3 leading-relaxed text-sm sm:text-base">
              The longevity and contrast of custom laser engraving depend entirely on the material density.
              We source raw, seasoned Indian hardwoods and quarried stones suited for razor-sharp micro-burns.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="rounded text-xs font-mono uppercase tracking-wider border-white/15"
              onClick={() => handleFilterByCategory("wood")}
            >
              Browse Wood Art
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded text-xs font-mono uppercase tracking-wider border-white/15"
              onClick={() => handleFilterByCategory("stone")}
            >
              Browse Stone Art
            </Button>
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MATERIALS_DATA.map((material: MaterialInfo) => (
            <div
              key={material.name}
              className="bg-background/90 border border-white/10 rounded-lg overflow-hidden flex flex-col justify-between group hover:border-primary/40 transition-all duration-300 shadow-sm"
            >
              {/* Material Texture Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <img
                  src={material.img}
                  alt={`${material.name} Texture`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-zinc-950/85 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-primary border border-white/10">
                  {material.type === "wood" ? "Hardwood" : "Natural Stone"}
                </div>
              </div>

              {/* Material Details */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                    {material.name}
                  </h3>
                  <p className="text-xs font-mono text-primary/80 mt-1 mb-3">
                    {material.headline}
                  </p>

                  <div className="space-y-2 text-xs text-muted-foreground font-light leading-relaxed">
                    <p>
                      <strong className="text-foreground/90 font-medium font-mono text-[11px] block">
                        Durability:
                      </strong>
                      {material.durability}
                    </p>
                    <p>
                      <strong className="text-foreground/90 font-medium font-mono text-[11px] block">
                        Surface Finish:
                      </strong>
                      {material.finish}
                    </p>
                    <p>
                      <strong className="text-foreground/90 font-medium font-mono text-[11px] block">
                        Ideal For:
                      </strong>
                      {material.recommendedFor}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <button
                    onClick={() => handleFilterByCategory(material.type)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary hover:underline"
                  >
                    <span>View {material.name} Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}