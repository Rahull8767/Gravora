import { ImagePlaceholder } from "../shared/ImagePlaceholder";
import { Button } from "@/components/ui/button";

interface MaterialItem {
  name: string;
  category: "wood" | "stone";
  durability: string;
  finish: string;
  bestFor: string;
  price: string;
  img: string;
}

const materialsData: MaterialItem[] = [
  {
    name: "Mango Wood",
    category: "wood",
    durability: "High (Dense hardwood, beautiful swirling grain patterns)",
    finish: "Warm golden brown with fine natural luster",
    bestFor: "Luxury keepsake boxes, coaster sets, and tableware",
    price: "₹___",
    img: ""
  },
  {
    name: "Teak Wood",
    category: "wood",
    durability: "Exceptional (Highly resistant to decay, moisture, and aging)",
    finish: "Rich dark honey with distinct, straight grain structures",
    bestFor: "Legacy photo portraits, heavy signage, and keychains",
    price: "₹___",
    img: ""
  },
  {
    name: "Pine Wood",
    category: "wood",
    durability: "Medium (Lightweight soft wood, easy to cut with high precision)",
    finish: "Pale yellow-gold with a clean, rustic, minimalist look",
    bestFor: "Multi-layered sacred geometry mandalas and light art panels",
    price: "₹___",
    img: ""
  },
  {
    name: "Black Granite",
    category: "stone",
    durability: "Extremely High (Indestructible, weatherproof, scratch-resistant)",
    finish: "Deep mirror-polished black with gold/white high-contrast engraving",
    bestFor: "Premium desk plaques, trophies, and permanent memorial stones",
    price: "₹___",
    img: ""
  },
  {
    name: "Kota Stone",
    category: "stone",
    durability: "High (Fine-grained natural limestone, highly durable and tactile)",
    finish: "Matte earthy olive-grey, raw organic surface texture",
    bestFor: "Coaster sets, paperweights, and architectural decor plaques",
    price: "₹___",
    img: ""
  },
  {
    name: "White Marble",
    category: "stone",
    durability: "High (Luxurious crystalline stone, smooth surface)",
    finish: "Cool white with delicate, unpredictable grey veining patterns",
    bestFor: "Luxury desktop mementos and high-end branded awards",
    price: "₹___",
    img: ""
  }
];

interface MaterialsProps {
  setActiveCategory: (cat: string) => void;
}

export function Materials({ setActiveCategory }: MaterialsProps) {
  const handleShopRedirect = (category: "wood" | "stone") => {
    setActiveCategory(category);
    // Smooth scroll to products
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="materials" className="py-24 bg-card border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-sm font-medium tracking-[0.2em] text-primary uppercase mb-4">The Canvas</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Uncompromising Materials</h3>
          <p className="text-muted-foreground font-light mt-4 leading-relaxed">
            We curate the finest wood and stone canvases. The structural integrity and grain of each piece is carefully selected to respond perfectly to our engraving processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materialsData.map((material, idx) => (
            <div 
              key={idx}
              className="bg-background border border-white/5 flex flex-col group hover:border-primary/20 transition-all duration-300"
              data-testid={`card-material-${idx}`}
            >
              {/* Image Placeholder */}
              <div className="aspect-[3/2] overflow-hidden bg-muted relative">
                <ImagePlaceholder 
                  src={material.img} 
                  alt={material.name} 
                  recommendedSize="600x400px" 
                  label={`ADD ${material.name.toUpperCase()} PHOTO HERE`}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Material Info */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-serif font-bold text-foreground">{material.name}</h4>
                  <span className="text-[10px] font-mono text-primary bg-primary/5 border border-primary/20 px-2 py-0.5 uppercase tracking-widest">
                    {material.category}
                  </span>
                </div>

                <div className="space-y-2 text-xs font-light text-muted-foreground flex-grow">
                  <p>
                    <strong className="text-foreground font-medium uppercase text-[10px] tracking-wider block">Durability:</strong>
                    {material.durability}
                  </p>
                  <p>
                    <strong className="text-foreground font-medium uppercase text-[10px] tracking-wider block">Finish:</strong>
                    {material.finish}
                  </p>
                  <p>
                    <strong className="text-foreground font-medium uppercase text-[10px] tracking-wider block">Best For:</strong>
                    {material.bestFor}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-xs text-muted-foreground">
                    Products from <span className="text-sm font-semibold text-foreground font-serif">{material.price}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="rounded-none text-[10px] tracking-wider uppercase"
                    onClick={() => handleShopRedirect(material.category)}
                    data-testid={`btn-shop-material-${idx}`}
                  >
                    Shop This Material
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}