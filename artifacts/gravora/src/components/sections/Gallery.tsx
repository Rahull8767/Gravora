import { useState } from "react";
import { X, ZoomIn, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { GALLERY_ITEMS, type GalleryItem } from "@/data/products";
import { buildWhatsAppUrl } from "@/config/site";

interface GalleryProps {
  setCustomizingProductId: (id: string | null) => void;
}

export function Gallery({ setCustomizingProductId }: GalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleEnquireSimilar = (item: GalleryItem) => {
    const message = `Hi Gravora! I saw "${item.title}" (${item.material}) in your workshop portfolio and would like to order a similar custom engraved piece. Could you please guide me?`;
    const { url } = buildWhatsAppUrl(message);
    window.open(url, "_blank");
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono text-primary uppercase tracking-[0.2em] block mb-3">
              Craftsmanship In Situ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground">
              Workshop Portfolio
            </h2>
            <p className="text-muted-foreground font-light mt-3 leading-relaxed text-sm sm:text-base">
              Explore recent personalized pieces, from anniversary plaques to corporate coaster suites.
              Tap any item to examine the material finish or commission a similar creation.
            </p>
          </div>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-lg border border-white/10 bg-card group shadow-sm hover:shadow-xl transition-all duration-300 ${item.aspect}`}
              data-testid={`gallery-item-${item.id}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover / Tap Shoppable Overlay */}
              <div className="absolute inset-0 bg-zinc-950/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 z-10">
                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="p-2 rounded border border-white/15 bg-white/5 hover:border-primary/50 text-muted-foreground hover:text-foreground transition-colors"
                    title="Zoom Image"
                    aria-label={`Enlarge photo of ${item.title}`}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest block">
                      {item.material} • {item.category}
                    </span>
                    <h3 className="text-base font-serif font-bold text-foreground mt-0.5">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2 pt-1">
                    {item.linkedProductId && (
                      <Button
                        size="sm"
                        className="h-8 rounded text-[11px] font-mono tracking-wider uppercase bg-primary hover:bg-primary/90 text-primary-foreground justify-center"
                        onClick={() => setCustomizingProductId(item.linkedProductId!)}
                      >
                        <span>Customise This</span>
                        <ArrowRight className="w-3 h-3 ml-1.5" />
                      </Button>
                    )}

                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 rounded text-[11px] font-mono tracking-wider uppercase border-white/20 text-foreground hover:border-[#25D366] hover:text-[#25D366] justify-center gap-1.5"
                      onClick={() => handleEnquireSimilar(item)}
                    >
                      <SiWhatsapp className="w-3 h-3" />
                      <span>Order Similar</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors p-2.5 rounded-full border border-white/20 bg-zinc-950/80 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
            aria-label="Close enlarged view"
          >
            <X size={20} />
          </button>

          <div
            className="max-w-3xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-lg overflow-hidden border border-white/15 shadow-2xl bg-zinc-950 max-h-[75vh]">
              <img
                src={selectedItem.img}
                alt={selectedItem.title}
                className="max-w-full max-h-[75vh] object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs font-mono uppercase tracking-widest text-primary">
                {selectedItem.material} • {selectedItem.category}
              </p>
              <h4 className="text-lg font-serif font-bold text-foreground mt-1">
                {selectedItem.title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}