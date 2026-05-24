import { useState, useEffect } from "react";
import { X, Check, Upload, ArrowRight, MessageCircle } from "lucide-react";
import { ImagePlaceholder } from "../shared/ImagePlaceholder";
import { Button } from "@/components/ui/button";

export interface Product {
  id: string;
  title: string;
  category: "wood" | "stone" | "gifts" | "wall-decor" | "keychains";
  desc: string;
  fullDesc: string;
  startingPrice: string;
  materialTag: string;
  img: string; // empty/placeholder to show placeholder dashed box
  materials: string[];
  sizes: string[];
  whatsIncluded: string[];
  delivery: string;
}

export const productsData: Product[] = [
  {
    id: "wood-portrait",
    title: "Premium Wood Portrait",
    category: "wood",
    desc: "Deep, precision laser-etched portraits and custom typography on luxury wood panels.",
    fullDesc: "Our artisans capture the finest details of your photographs, laser-etching them onto hand-selected panels of premium hardwood. Ideal for anniversaries, legacy portraits, or unique corporate gifts.",
    startingPrice: "₹___",
    materialTag: "Teak Wood",
    img: "", // renders placeholder
    materials: ["Teak Wood", "Mango Wood", "Pine Wood"],
    sizes: ["Small (6x6\")", "Medium (10x10\")", "Large (12x16\")"],
    whatsIncluded: [
      "1x Custom Engraved Wood Panel",
      "1x Solid Brass Display Stand",
      "Premium dark gift box",
      "Wood conditioning oil sampler"
    ],
    delivery: "3 - 5 business days"
  },
  {
    id: "slate-plaque",
    title: "Slate Stone Plaque",
    category: "stone",
    desc: "Minimalist geometric designs and sharp lettering etched into natural split-face slate.",
    fullDesc: "Cold, heavy, and incredibly tactile. We contrast the rugged raw edge of natural slate with ultra-sharp, bright laser engraving. Perfect for address plaques, memorial stones, or modern desk art.",
    startingPrice: "₹___",
    materialTag: "Black Granite",
    img: "",
    materials: ["Black Granite", "Kota Stone", "White Marble"],
    sizes: ["Small (6x6\")", "Medium (10x10\")", "Large (12x12\")"],
    whatsIncluded: [
      "1x Engraved Slate Plaque",
      "1x Custom table easel easel",
      "Soft velvet felt backing pads",
      "Authentication card"
    ],
    delivery: "4 - 6 business days"
  },
  {
    id: "keepsake-box",
    title: "Luxury Keepsake Box",
    category: "gifts",
    desc: "Premium custom wooden boxes with heavy brass fittings and velvet interiors.",
    fullDesc: "A treasure chest for your most valued memories. Crafted with interlocking joinery, lined with deep velvet, and completed with hand-fitted brass hardware and hardware etching.",
    startingPrice: "₹___",
    materialTag: "Mango Wood",
    img: "",
    materials: ["Mango Wood", "Teak Wood"],
    sizes: ["Standard (8x6x4\")", "Grand (12x9x6\")"],
    whatsIncluded: [
      "1x Premium Wooden Keepsake Chest",
      "Solid brass lock and key",
      "Soft velvet interior lining",
      "Care instruction guide"
    ],
    delivery: "5 - 7 business days"
  },
  {
    id: "wall-decor",
    title: "Sacred Geometry Mandala",
    category: "wall-decor",
    desc: "Intricate multi-layered wooden art pieces detailed with spiritual and geometric symbols.",
    fullDesc: "Add a focal point of meditative beauty to your living space. We build these mandalas by layering multiple sheets of laser-cut birch and walnut wood to create a three-dimensional depth effect.",
    startingPrice: "₹___",
    materialTag: "Pine Wood",
    img: "",
    materials: ["Pine Wood", "Teak Wood"],
    sizes: ["Medium (12x12\")", "Large (24x24\")", "Collector (36x36\")"],
    whatsIncluded: [
      "1x Layered Geometric Mandala",
      "Heavy-duty wall mounting kit",
      "Mini level alignment tool",
      "Polishing microfiber cloth"
    ],
    delivery: "6 - 9 business days"
  },
  {
    id: "leather-keychain",
    title: "Premium Tactile Keychain",
    category: "keychains",
    desc: "Everyday carry key fobs mixing dark distressed leather and custom-etched hardwood.",
    fullDesc: "Designed to develop a rich patina over time. A robust piece of everyday luxury combining full-grain vegetable-tanned leather, heavy solid brass rivets, and custom laser-engraved wood blocks.",
    startingPrice: "₹___",
    materialTag: "Teak Wood",
    img: "",
    materials: ["Teak Wood", "Birch Wood"],
    sizes: ["Standard (1.5x3.5\")"],
    whatsIncluded: [
      "1x Wood & Leather Custom Keychain",
      "Heavy-duty solid brass split ring",
      "Patina-care wax sample"
    ],
    delivery: "2 - 4 business days"
  },
  {
    id: "coaster-set",
    title: "Bespoke Coaster Set",
    category: "gifts",
    desc: "Premium stone and wood coasters designed for luxury coffee shops and dining.",
    fullDesc: "Protect your surfaces in style. These heavy coasters feature laser-carved branding or intricate repeating vector patterns. Available in sets of 4 or 6, packed inside a matching holder box.",
    startingPrice: "₹___",
    materialTag: "Kota Stone",
    img: "",
    materials: ["Kota Stone", "Mango Wood", "Teak Wood", "Black Granite"],
    sizes: ["4-Piece Set", "6-Piece Set"],
    whatsIncluded: [
      "Coaster Set (as selected)",
      "1x Matching wood holder stand",
      "Pre-applied rubber table grip pads"
    ],
    delivery: "3 - 5 business days"
  }
];

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
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const categories = [
    { id: "all", name: "All" },
    { id: "wood", name: "Wood" },
    { id: "stone", name: "Stone" },
    { id: "gifts", name: "Gifts" },
    { id: "wall-decor", name: "Wall Decor" },
    { id: "keychains", name: "Keychains" }
  ];

  const currentProduct = productsData.find(p => p.id === customizingProductId);

  // Set default selections when product modal opens
  useEffect(() => {
    if (currentProduct) {
      setSelectedSize(currentProduct.sizes[0]);
      setSelectedMaterial(currentProduct.materials[0]);
      setQuantity(1);
      setUploadedFile(null);
    }
  }, [customizingProductId]);

  const filteredProducts = activeCategory === "all"
    ? productsData
    : productsData.filter(p => p.category === activeCategory);

  const handleWhatsAppOrder = (product: Product, isCustomized = false) => {
    let message = `Hi Gravora! I'm interested in ${product.title}. Please share more details and pricing.`;
    
    if (isCustomized) {
      message = `Hi Gravora! I'm interested in customizing ${product.title}:\n- Size: ${selectedSize}\n- Material: ${selectedMaterial}\n- Qty: ${quantity}\n${uploadedFile ? `- Design File: ${uploadedFile.name}\n` : ""}Please share more details and pricing.`;
    }

    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFile(e.target.files[0]);
    }
  };

  return (
    <section id="products" className="py-24 md:py-32 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs mb-4">
            Browse our catalogue
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Product Catalog
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            Every product is hand-crafted by our artisans. Customize your parameters, upload your design layouts, and submit orders directly via WhatsApp.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-white/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded-none border ${
                activeCategory === cat.id
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
              data-testid={`tab-category-${cat.id}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product, i) => (
            <div
              key={product.id}
              className="group flex flex-col bg-card border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1.5 shadow-sm hover:shadow-lg"
              data-testid={`card-product-${i}`}
            >
              {/* Image Slot */}
              <div 
                className="aspect-square relative overflow-hidden bg-muted cursor-pointer"
                onClick={() => setCustomizingProductId(product.id)}
              >
                <ImagePlaceholder 
                  src={product.img} 
                  alt={product.title} 
                  recommendedSize="400x400px"
                  label="ADD PRODUCT PHOTO HERE"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Category tag / badge */}
                <span className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-sm border border-white/5 text-[9px] font-mono uppercase tracking-widest text-muted-foreground px-2.5 py-1">
                  {product.materialTag}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-grow">
                <h4 
                  className="text-base font-medium text-foreground hover:text-primary transition-colors cursor-pointer mb-2 truncate"
                  onClick={() => setCustomizingProductId(product.id)}
                >
                  {product.title}
                </h4>
                <p className="text-xs text-muted-foreground font-light line-clamp-2 leading-relaxed mb-4 flex-grow">
                  {product.desc}
                </p>
                <div className="flex flex-col gap-3">
                  <div className="text-sm font-semibold text-foreground">
                    Starting from <span className="text-primary font-serif font-bold">{product.startingPrice}</span>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="rounded-none w-full text-[10px] tracking-wider uppercase font-sans border-white/10"
                      onClick={() => setCustomizingProductId(product.id)}
                      data-testid={`btn-customize-${product.id}`}
                    >
                      Customize This
                    </Button>
                    <Button 
                      size="sm" 
                      className="rounded-none w-full text-[10px] tracking-wider uppercase font-sans gap-2"
                      onClick={() => handleWhatsAppOrder(product)}
                      data-testid={`btn-order-wa-${product.id}`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Order on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Customization Modal */}
      {currentProduct && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div 
            className="bg-card border border-white/10 w-full max-w-4xl relative p-6 md:p-10 my-8 shadow-2xl animate-in slide-in-from-bottom-8 duration-300"
            onClick={(e) => e.stopPropagation()}
            data-testid="modal-customizer"
          >
            {/* Close Button */}
            <button
              onClick={() => setCustomizingProductId(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-muted-foreground hover:text-foreground transition-colors p-2 z-10 border border-white/5 bg-zinc-950/80 backdrop-blur-sm"
              data-testid="btn-close-modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-4">
              
              {/* Left Column: Image & Thumbnails */}
              <div className="space-y-4">
                <div className="aspect-square w-full bg-muted border border-white/5 overflow-hidden">
                  <ImagePlaceholder 
                    src={currentProduct.img} 
                    alt={currentProduct.title} 
                    recommendedSize="800x800px" 
                    label={`ADD MAIN ${currentProduct.title.toUpperCase()} PHOTO HERE`}
                  />
                </div>
                
                {/* Thumbnails grid */}
                <div className="grid grid-cols-4 gap-3">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="aspect-square bg-muted/50 border border-dashed border-white/10 hover:border-primary/30 transition-colors cursor-pointer flex items-center justify-center">
                      <ImagePlaceholder 
                        src="" 
                        recommendedSize="200x200px" 
                        label={`THUMB ${num}`}
                        className="p-1 min-h-[auto]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Customization parameters */}
              <div className="flex flex-col space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-primary uppercase tracking-widest">
                    Customizable Product
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-1 mb-3">
                    {currentProduct.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {currentProduct.fullDesc}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4 space-y-4">
                  {/* Size Selector */}
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono block mb-2">
                      Select Size/Dimensions
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {currentProduct.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 text-xs font-mono border transition-all duration-200 ${
                            selectedSize === size
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Material Selector */}
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono block mb-2">
                      Select Material Canvas
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {currentProduct.materials.map((mat) => (
                        <button
                          key={mat}
                          onClick={() => setSelectedMaterial(mat)}
                          className={`px-4 py-2 text-xs font-mono border transition-all duration-200 ${
                            selectedMaterial === mat
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground"
                          }`}
                        >
                          {mat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity & File Upload Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Quantity */}
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono block mb-2">
                        Quantity
                      </label>
                      <div className="flex items-center w-28 border border-white/10">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground border-r border-white/10 transition-colors"
                        >
                          -
                        </button>
                        <span className="flex-grow text-center text-sm font-medium text-foreground">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground border-l border-white/10 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono block mb-2">
                        Upload Your Design
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="modal-file-upload"
                          className="hidden"
                          onChange={handleFileChange}
                          accept="image/*,.pdf,.svg"
                        />
                        <label
                          htmlFor="modal-file-upload"
                          className="flex items-center gap-2 px-4 h-10 border border-white/10 bg-zinc-950 hover:bg-zinc-900 cursor-pointer text-xs font-mono text-muted-foreground hover:text-foreground transition-all duration-200 w-full justify-center"
                        >
                          <Upload className="w-4 h-4 text-primary" />
                          <span className="truncate max-w-[150px]">
                            {uploadedFile ? uploadedFile.name : "Select Graphic"}
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 space-y-4">
                  {/* Delivery & Price row */}
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase block mb-1">
                        Est. Delivery
                      </span>
                      <span className="text-xs text-foreground font-medium flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-primary" />
                        {currentProduct.delivery}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase block mb-1">
                        Estimated Price
                      </span>
                      <span className="text-2xl font-serif font-bold text-foreground">
                        {currentProduct.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp Custom Order Button */}
                  <Button
                    size="lg"
                    className="w-full rounded-none tracking-widest uppercase font-sans gap-3 py-6"
                    onClick={() => handleWhatsAppOrder(currentProduct, true)}
                    data-testid="btn-order-modal-wa"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Order via WhatsApp
                  </Button>
                </div>

                {/* What's included checklist */}
                <div className="border-t border-white/5 pt-4">
                  <h5 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                    What's Included
                  </h5>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-muted-foreground font-light">
                    {currentProduct.whatsIncluded.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}