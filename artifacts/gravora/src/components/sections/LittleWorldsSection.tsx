import { Layers, Sparkles, Check, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/config/site";
import type { Product } from "@/data/products";

interface LittleWorldsSectionProps {
  onSelectProduct: (product: Product) => void;
  products: Product[];
}

export function LittleWorldsSection({
  onSelectProduct,
  products,
}: LittleWorldsSectionProps) {
  const littleWorldsProducts = products.filter((p) => p.category === "little-worlds");

  const highlightConcepts = [
    { title: "Mountain Sunrise", desc: "Layers of sun, alpine ridge & lake reflections." },
    { title: "Moonlit Forest", desc: "Deep nocturnal layers with pine canopy and crescent moon." },
    { title: "City Skyline", desc: "Architectural silhouette depths capturing urban character." },
    { title: "Wildlife Collection", desc: "Alert stags and fauna nested in layered forest clearings." },
    { title: "Architectural Miniatures", desc: "Heritage facade details recreated in precision tiers." },
    { title: "Personalized Silhouette", desc: "Couple & family profiles nestled in scenic layers." },
  ];

  const { url } = buildWhatsAppUrl(
    "Hello Gravora! I would love to enquire about your flagship Little Worlds 3D Layered Wooden Art collection."
  );

  return (
    <section
      id="little-worlds"
      className="py-16 sm:py-24 bg-[#FFFDF9] border-b border-[#E6DED2] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Flagship Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F5EF] border border-[#9A6428]/40 text-[#9A6428] text-xs font-mono uppercase tracking-widest font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>Flagship Creative Collection</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#29231E] leading-tight">
              Little Worlds. <br />
              <span className="italic text-[#704522] font-normal">Big Stories.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#71685F] font-light leading-relaxed max-w-2xl">
              Miniature worlds brought to life through precision-cut wooden layers, carefully assembled to capture depth, character, and imagination.
            </p>

            <p className="text-xs sm:text-sm text-[#4A2C18] leading-relaxed max-w-xl">
              Rather than surface-level 2D engraving, each Little World combines up to five tiers of individually laser-cut 3mm basswood plywood. Hand-aligned with microscopic tolerances, the physical separation creates authentic shadows that shift naturally as light changes in your room.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                asChild
                className="h-11 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs sm:text-sm gap-2"
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="w-4 h-4" />
                  <span>Enquire About a Little World</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E6DED2] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E6DED2]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9A6428] font-bold">
                  How Depth is Created
                </span>
                <span className="text-xs text-[#71685F]">Creality Falcon 10W</span>
              </div>

              <div className="space-y-3 text-xs text-[#29231E]">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#9A6428] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                    1
                  </span>
                  <div>
                    <strong className="block text-[#4A2C18]">Vector Contour Slicing</strong>
                    <span className="text-[#71685F]">The landscape is deconstructed into foreground, middle-ground, and background tiers.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#9A6428] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                    2
                  </span>
                  <div>
                    <strong className="block text-[#4A2C18]">0.1mm Laser Kerf Cutting</strong>
                    <span className="text-[#71685F]">Every branch, mountain peak, and architectural spire is burned cleanly into 3mm basswood.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#9A6428] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                    3
                  </span>
                  <div>
                    <strong className="block text-[#4A2C18]">Hand Staining & Tier Alignment</strong>
                    <span className="text-[#71685F]">Natural oils and organic walnut stains create atmospheric contrast before hand-gluing.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flagship Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {littleWorldsProducts.map((prod) => (
            <div
              key={prod.id}
              onClick={() => onSelectProduct(prod)}
              className="group cursor-pointer rounded-2xl bg-white border border-[#E6DED2] overflow-hidden card-hover-luxury grid grid-cols-1 sm:grid-cols-12 gap-0"
            >
              <div className="sm:col-span-5 relative aspect-square sm:aspect-auto overflow-hidden bg-[#F8F5EF]">
                <img
                  src={prod.img}
                  alt={prod.title}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#9A6428] text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  {prod.code}
                </span>
              </div>

              <div className="sm:col-span-7 p-6 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#9A6428] font-mono">
                    <span>{prod.categoryLabel}</span>
                    <span className="font-bold text-[#704522]">{prod.startingPrice}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#29231E] group-hover:text-[#9A6428] transition-colors mt-1">
                    {prod.title}
                  </h3>
                  <p className="text-xs text-[#71685F] font-light leading-relaxed mt-2 line-clamp-3">
                    {prod.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E6DED2]/60 flex items-center justify-between text-xs">
                  <span className="text-[#71685F]">{prod.primaryMaterial}</span>
                  <span className="font-medium text-[#9A6428] flex items-center gap-1 group-hover:underline">
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Themes Grid */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F5EF] border border-[#E6DED2]">
          <h3 className="font-serif text-lg font-bold text-[#29231E] mb-4 text-center">
            Explore Little World Themes & Custom Diorama Commissions
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {highlightConcepts.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white border border-[#E6DED2]/60 text-center space-y-1 hover:border-[#9A6428]/40 transition-colors"
              >
                <p className="font-serif text-xs font-bold text-[#29231E]">{item.title}</p>
                <p className="text-[10px] text-[#71685F] leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
