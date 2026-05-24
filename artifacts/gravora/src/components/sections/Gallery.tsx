import { useState } from "react";
import { X, ZoomIn, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  src: string;
  aspect: string;
  productName: string;
  price: string;
  productId: string;
}

interface GalleryProps {
  setCustomizingProductId: (id: string | null) => void;
}

export function Gallery({ setCustomizingProductId }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images: GalleryImage[] = [
    { 
      src: "/gallery-1.png", 
      aspect: "aspect-[3/4]", 
      productName: "Premium Wood Portrait", 
      price: "₹___", 
      productId: "wood-portrait" 
    },
    { 
      src: "/gallery-2.png", 
      aspect: "aspect-[4/3]", 
      productName: "Slate Stone Plaque", 
      price: "₹___", 
      productId: "slate-plaque" 
    },
    { 
      src: "/product-wood.png", 
      aspect: "aspect-square", 
      productName: "Premium Wood Portrait", 
      price: "₹___", 
      productId: "wood-portrait" 
    },
    { 
      src: "/product-stone.png", 
      aspect: "aspect-[3/4]", 
      productName: "Slate Stone Plaque", 
      price: "₹___", 
      productId: "slate-plaque" 
    },
    { 
      src: "/product-decor.png", 
      aspect: "aspect-square", 
      productName: "Sacred Geometry Mandala", 
      price: "₹___", 
      productId: "wall-decor" 
    },
    { 
      src: "/product-gift.png", 
      aspect: "aspect-[4/3]", 
      productName: "Luxury Keepsake Box", 
      price: "₹___", 
      productId: "keepsake-box" 
    },
    { 
      src: "/product-cafe.png", 
      aspect: "aspect-[3/4]", 
      productName: "Bespoke Coaster Set", 
      price: "₹___", 
      productId: "coaster-set" 
    },
    { 
      src: "/material-wood.png", 
      aspect: "aspect-square", 
      productName: "Premium Tactile Keychain", 
      price: "₹___", 
      productId: "leather-keychain" 
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-medium tracking-[0.2em] text-primary uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Shoppable Gallery</h3>
          </div>
          <p className="text-muted-foreground font-light max-w-md md:text-right">
            Browse our curated works. Hover or tap on any piece to see product details and start customizing your own version instantly.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden group border border-white/5 break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-300 ${img.aspect}`}
              data-testid={`img-gallery-${i}`}
            >
              {/* Product Image */}
              <img 
                src={img.src} 
                alt={img.productName} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover / Tap Shoppable Overlay */}
              <div className="absolute inset-0 bg-zinc-950/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10">
                {/* Top bar: Zoom */}
                <div className="flex justify-end">
                  <button 
                    onClick={() => setSelectedImage(img.src)}
                    className="p-2 border border-white/10 hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all duration-200"
                    title="Zoom Image"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom section: Info and Shop CTA */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-serif font-bold text-foreground">{img.productName}</h4>
                    <span className="text-sm font-mono text-primary font-medium">{img.price}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <Button 
                      size="sm" 
                      className="rounded-none text-[10px] tracking-widest uppercase gap-2"
                      onClick={() => setCustomizingProductId(img.productId)}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Shop This
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm" 
                      className="rounded-none text-[10px] tracking-widest uppercase border-white/10"
                      onClick={() => setCustomizingProductId(img.productId)}
                    >
                      Order Similar
                    </Button>
                  </div>
                </div>
              </div>
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
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 border border-white/10 bg-zinc-950/80 backdrop-blur-sm"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            data-testid="button-close-lightbox"
          >
            <X size={24} />
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