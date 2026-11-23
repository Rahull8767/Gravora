import { ArrowUpRight } from "lucide-react";
import { FEATURED_CATEGORIES } from "@/data/products";

interface FeaturedCategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

export function FeaturedCategories({ onSelectCategory }: FeaturedCategoriesProps) {
  return (
    <section className="py-14 sm:py-20 bg-[#F8F5EF] border-b border-[#E6DED2]/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#9A6428] font-semibold">
            Curated Collections
          </p>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#29231E]">
            Artisan Gifting, Crafted by Category
          </h2>
          <p className="text-sm sm:text-base text-[#71685F] font-light">
            From multi-layered 3D wooden artwork to everyday personalized keepsakes, explore thoughtful designs tailored for homes, desks, and memorable occasions.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group cursor-pointer rounded-2xl bg-white border border-[#E6DED2] overflow-hidden card-hover-luxury flex flex-col justify-between"
            >
              {/* Category Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F8F5EF]">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[11px] font-mono text-[#704522] px-2.5 py-0.5 rounded-full border border-[#E6DED2]">
                  {cat.count}
                </span>
              </div>

              {/* Category Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#29231E] group-hover:text-[#9A6428] transition-colors flex items-center justify-between">
                    <span>{cat.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#71685F] group-hover:text-[#9A6428] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </h3>
                  <p className="text-xs text-[#71685F] font-light leading-relaxed mt-1.5">
                    {cat.desc}
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-[#E6DED2]/40 flex items-center justify-between text-xs font-medium text-[#9A6428]">
                  <span>Explore Pieces</span>
                  <span className="text-[10px] tracking-wider uppercase font-mono">View →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
