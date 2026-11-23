import { useState, useEffect } from "react";
import { X, Check, Upload, Info } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { PRODUCTS, CATEGORIES, type Product } from "@/data/products";
import { buildProductInquiry } from "@/lib/whatsapp";

interface ProductsProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  customizingProductId: string | null;
  setCustomizingProductId: (id: string | null) => void;
}

export function Products({
  activeCategory,
  setActiveCategory,
  customizingProductId,
  setCustomizingProductId,
}: ProductsProps) {
  // Modal customization states
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [customText, setCustomText] = useState<string>("");
  const [specialInstructions, setSpecialInstructions] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const currentProduct = PRODUCTS.find((p) => p.id === customizingProductId) || null;

  useEffect(() => {
    if (currentProduct) {
      setSelectedSize(currentProduct.availableSizes[0] || "");
      setSelectedMaterial(currentProduct.primaryMaterial);
      setQuantity(1);
      setCustomText("");
      setSpecialInstructions("");
      setSelectedFile(null);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [currentProduct]);

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleModalWhatsAppOrder = () => {
    if (!currentProduct) return;
    const { url } = buildProductInquiry({
      product: currentProduct,
      selectedSize,
      selectedMaterial,
      quantity,
      customText,
      hasFileAttached: selectedFile !== null,
      fileName: selectedFile ? selectedFile.name : undefined,
      specialInstructions,
    });
    window.open(url, "_blank");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <p className="text-[11px] font-mono text-primary uppercase tracking-[0.2em] mb-1.5 font-medium">
              Catalogue
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
              Signature Creations
            </h2>
          </div>

          {/* Minimal Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-foreground text-background font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
                data-testid={`category-tab-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column on Mobile, 3-Column on Tablet/Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              onClick={() => setCustomizingProductId(product.id)}
              className="group cursor-pointer flex flex-col text-left rounded overflow-hidden bg-card/40 border border-border/50 hover:border-border transition-colors"
              data-testid={`product-card-${product.id}`}
            >
              {/* Product Photography */}
              <div className="relative aspect-square overflow-hidden bg-card">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-4 flex flex-col justify-between flex-grow space-y-2">
                <div>
                  <h3 className="text-sm sm:text-base font-serif font-semibold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-mono text-primary font-medium mt-1">
                    {product.startingPrice}
                  </p>
                </div>

                <div className="pt-2 border-t border-border/30 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span className="hidden sm:inline">{product.primaryMaterial}</span>
                  <span className="text-foreground group-hover:underline text-[10px] sm:text-xs">
                    Customise & Enquire →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Product Customisation Modal */}
      {currentProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150 overflow-y-auto"
          onClick={() => setCustomizingProductId(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative bg-background border border-border rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl my-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-md px-5 sm:px-6 py-4 border-b border-border flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary block">
                  {currentProduct.categoryLabel}
                </span>
                <h3 id="modal-title" className="text-lg sm:text-xl font-serif font-bold text-foreground">
                  {currentProduct.title}
                </h3>
              </div>

              <button
                className="min-w-[44px] min-h-[44px] -mr-2 rounded text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors flex items-center justify-center"
                onClick={() => setCustomizingProductId(null)}
                aria-label="Close modal"
                data-testid="btn-close-modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-5">
              {/* Image & Price Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start">
                <div className="sm:col-span-5 rounded overflow-hidden aspect-square bg-card border border-border/60">
                  <img
                    src={currentProduct.img}
                    alt={currentProduct.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="sm:col-span-7 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-mono text-muted-foreground uppercase">Base Pricing</span>
                    <span className="text-base font-serif font-bold text-primary">
                      {currentProduct.startingPrice}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-light">{currentProduct.priceNote}</p>
                  <p className="text-xs text-foreground/90 font-light leading-relaxed pt-1">
                    {currentProduct.fullDesc}
                  </p>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-4 pt-3 border-t border-border">
                {/* Size Selection */}
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-1.5">
                    1. Choose Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {currentProduct.availableSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors ${
                          selectedSize === size
                            ? "bg-foreground text-background border-foreground font-medium"
                            : "bg-card border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material Selection */}
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-1.5">
                    2. Choose Material Canvas
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {currentProduct.availableMaterials.map((mat) => (
                      <button
                        key={mat}
                        type="button"
                        onClick={() => setSelectedMaterial(mat)}
                        className={`px-3 py-1.5 text-xs font-mono rounded border transition-colors ${
                          selectedMaterial === mat
                            ? "bg-foreground text-background border-foreground font-medium"
                            : "bg-card border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {mat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Engraving Custom Text */}
                {currentProduct.customisationOptions.allowsText && (
                  <div>
                    <label
                      htmlFor="customText"
                      className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-1.5"
                    >
                      3. Custom Inscription / Names (Optional)
                    </label>
                    <input
                      id="customText"
                      type="text"
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      placeholder={
                        currentProduct.customisationOptions.textPlaceholder ||
                        "Names, anniversary date, or special quote..."
                      }
                      className="w-full h-10 px-3 bg-card border border-border rounded text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary"
                    />
                  </div>
                )}

                {/* Quantity and Design File Picker */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-1.5">
                      Quantity
                    </label>
                    <div className="flex items-center w-28 border border-border rounded bg-card">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground border-r border-border"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="flex-grow text-center text-xs font-mono font-medium">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground border-l border-border"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {currentProduct.customisationOptions.allowsPhotoUpload && (
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block mb-1.5">
                        Photo / Reference
                      </label>
                      <label className="flex items-center justify-center gap-2 h-9 px-3 bg-card border border-border rounded cursor-pointer text-xs font-mono text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
                        <Upload className="w-3.5 h-3.5 text-primary" />
                        <span className="truncate max-w-[160px]">
                          {selectedFile ? selectedFile.name : "Select photo for reference"}
                        </span>
                        <input
                          type="file"
                          accept="image/*,.pdf,.svg"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  )}
                </div>

                {selectedFile && (
                  <div className="p-2.5 rounded bg-card border border-border flex items-start gap-2 text-xs text-muted-foreground">
                    <Info className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>
                      Please also attach your high-res original photo directly in WhatsApp when the chat opens.
                    </span>
                  </div>
                )}
              </div>

              {/* Modal CTA Button */}
              <div className="pt-4 border-t border-border">
                <Button
                  size="lg"
                  className="w-full h-11 rounded bg-[#25D366] hover:bg-[#1ebe5d] text-white font-mono text-xs uppercase tracking-widest gap-2 shadow-sm"
                  onClick={handleModalWhatsAppOrder}
                  data-testid="btn-order-modal-whatsapp"
                >
                  <SiWhatsapp className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </Button>
                <p className="text-[11px] text-muted-foreground text-center mt-2 font-light">
                  Opens WhatsApp with your product details and chosen specifications prefilled.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}