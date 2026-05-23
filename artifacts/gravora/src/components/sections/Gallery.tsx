import { useState } from "react";
import { X } from "lucide-react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/gallery-1.png", aspect: "aspect-[3/4]" },
    { src: "/gallery-2.png", aspect: "aspect-[4/3]" },
    { src: "/product-wood.png", aspect: "aspect-square" },
    { src: "/product-stone.png", aspect: "aspect-[3/4]" },
    { src: "/product-decor.png", aspect: "aspect-square" },
    { src: "/product-gift.png", aspect: "aspect-[4/3]" },
    { src: "/product-cafe.png", aspect: "aspect-[3/4]" },
    { src: "/material-wood.png", aspect: "aspect-square" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-medium tracking-[0.2em] text-primary uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Captured Craft</h3>
          </div>
          <p className="text-muted-foreground font-light max-w-md md:text-right">
            A curated look into our recent commissions and personal studio explorations.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden group cursor-zoom-in border border-white/5 break-inside-avoid ${img.aspect}`}
              onClick={() => setSelectedImage(img.src)}
              data-testid={`img-gallery-${i}`}
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay z-10 pointer-events-none"></div>
              <img 
                src={img.src} 
                alt="Gallery piece" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
          data-testid="modal-lightbox"
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            data-testid="button-close-lightbox"
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}