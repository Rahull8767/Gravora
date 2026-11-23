import { SiInstagram } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import type { Product } from "@/data/products";

interface InstagramGalleryProps {
  onSelectProduct: (product: Product) => void;
  products: Product[];
}

export function InstagramGallery({ onSelectProduct, products }: InstagramGalleryProps) {
  // Curated showcase items
  const galleryItems = [
    {
      img: "/images/products/gr010-premium-layered-nameplate.jpg",
      caption: "Layered scenic desk display in natural basswood & walnut finish",
      productId: "GR010",
    },
    {
      img: "/images/products/gr011-wooden-desk-clock.jpg",
      caption: "Sunrise behind alpine peaks • Silent quartz desk timepiece",
      productId: "GR011",
    },
    {
      img: "/images/products/gr007-circular-coasters-set.jpg",
      caption: "Heritage 4-piece wooden coaster collection with round caddy",
      productId: "GR007",
    },
    {
      img: "/images/products/gr004-photo-easel-frame.jpg",
      caption: "Laser photo engraving on miniature artist tripod easel",
      productId: "GR004",
    },
    {
      img: "/images/products/gr001-personalized-keychain.jpg",
      caption: "Companion pet silhouette keychain with custom engraved name tag",
      productId: "GR001",
    },
    {
      img: "/images/products/gr014-black-metal-card.jpg",
      caption: "Official Gravora laser-marked black metal luxury executive card",
      productId: "GR014",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9] border-b border-[#E6DED2]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div className="space-y-2 text-left">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#9A6428] font-semibold">
              Visual Moments
            </p>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#29231E]">
              The Studio Gallery
            </h2>
            <p className="text-xs sm:text-sm text-[#71685F] font-light max-w-lg">
              A glimpse into finished creations in real homes, personal workspaces, and memorable gift presentations.
            </p>
          </div>

          <a
            href={SITE_CONFIG.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F8F5EF] hover:bg-[#EFE8DD] border border-[#E6DED2] text-xs font-medium text-[#29231E] transition-colors self-start sm:self-auto"
          >
            <SiInstagram className="w-4 h-4 text-[#E1306C]" />
            <span>Follow {SITE_CONFIG.social.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#71685F]" />
          </a>
        </div>

        {/* 6-Grid Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {galleryItems.map((item, idx) => {
            const product = products.find((p) => p.id === item.productId);

            return (
              <div
                key={idx}
                onClick={() => product && onSelectProduct(product)}
                className="group relative aspect-square rounded-xl overflow-hidden bg-[#F8F5EF] border border-[#E6DED2] cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.caption}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#29231E]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white">
                  <p className="text-[10px] font-sans font-medium line-clamp-2 leading-tight">
                    {item.caption}
                  </p>
                  <span className="text-[9px] font-mono text-[#EFE8DD] mt-1 uppercase tracking-wider">
                    View Details →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
