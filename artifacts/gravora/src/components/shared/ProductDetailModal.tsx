import { useState, useEffect } from "react";
import { X, Heart, Check, ShieldCheck, Clock, MapPin, Sparkles, Layers, Info } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useWishlist } from "./WishlistContext";
import { Button } from "@/components/ui/button";
import { buildProductWhatsAppInquiry } from "@/lib/whatsapp";
import type { Product } from "@/data/products";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedVariant, setSelectedVariant] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [personalizationText, setPersonalizationText] = useState<string>("");
  const [deliveryPin, setDeliveryPin] = useState<string>("");
  const [specialNotes, setSpecialNotes] = useState<string>("");

  useEffect(() => {
    if (product) {
      setSelectedImage(product.img);
      setSelectedVariant(product.availableVariants?.[0] || "Standard");
      setQuantity(1);
      setPersonalizationText("");
      setDeliveryPin("");
      setSpecialNotes("");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const inWishlist = isInWishlist(product.id);
  const allImages = [product.img, ...(product.additionalImages || [])];

  const handleWhatsAppOrder = () => {
    const { url } = buildProductWhatsAppInquiry({
      product,
      quantity,
      selectedVariant,
      personalizationText,
      deliveryPin,
      specialNotes,
    });
    window.open(url, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#29231E]/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative bg-[#FFFDF9] rounded-2xl border border-[#E6DED2] shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto z-10">
        {/* Sticky Close & Wishlist Header */}
        <div className="sticky top-0 z-20 bg-[#FFFDF9]/95 backdrop-blur-md px-6 py-4 border-b border-[#E6DED2] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium text-[#9A6428] uppercase tracking-wider">
              {product.code}
            </span>
            <span className="text-[#E6DED2]">•</span>
            <span className="text-xs font-medium text-[#71685F]">
              {product.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`p-2 rounded-full border transition-colors ${
                inWishlist
                  ? "bg-[#F8F5EF] border-[#9A6428] text-[#9A6428]"
                  : "border-[#E6DED2] text-[#71685F] hover:text-[#9A6428] hover:bg-[#F8F5EF]"
              }`}
              aria-label={inWishlist ? "Remove from wishlist" : "Save to wishlist"}
            >
              <Heart className={`w-4 h-4 ${inWishlist ? "fill-[#9A6428]" : ""}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-[#E6DED2] text-[#71685F] hover:text-[#29231E] hover:bg-[#F8F5EF] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Gallery Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-[#F8F5EF] border border-[#E6DED2]">
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
              {/* Badge */}
              <div className="absolute top-3 left-3">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase shadow-sm ${
                    product.badge === "Concept Preview" || product.badge === "Coming Soon"
                      ? "bg-[#704522] text-[#FFFDF9]"
                      : product.badge === "Personalizable"
                      ? "bg-[#9A6428] text-white"
                      : "bg-[#FFFDF9]/90 text-[#29231E] backdrop-blur-sm border border-[#E6DED2]"
                  }`}
                >
                  {product.badge}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {allImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImage === imgUrl
                        ? "border-[#9A6428] ring-2 ring-[#9A6428]/20"
                        : "border-[#E6DED2] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Specifications Card */}
            <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#E6DED2] text-xs space-y-2 text-[#71685F]">
              <div className="flex items-center gap-1.5 font-medium text-[#29231E] pb-1 border-b border-[#E6DED2]/60">
                <Layers className="w-3.5 h-3.5 text-[#9A6428]" />
                <span>Craft & Materials Specification</span>
              </div>
              <p>
                <strong className="text-[#29231E]">Primary Material:</strong> {product.primaryMaterial}
              </p>
              {product.dimensions && (
                <p>
                  <strong className="text-[#29231E]">Dimensions:</strong> {product.dimensions}
                </p>
              )}
              <p>
                <strong className="text-[#29231E]">Production:</strong> {product.workingProcess}
              </p>
            </div>
          </div>

          {/* Details & Customization Column */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <h1
                id="product-modal-title"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#29231E] leading-tight"
              >
                {product.title}
              </h1>

              {/* Price & Unit */}
              <div className="flex items-baseline gap-2.5 mt-2">
                <span className="font-serif text-2xl font-bold text-[#704522]">
                  {product.startingPrice}
                </span>
                <span className="text-xs text-[#71685F]">
                  / {product.unitLabel}
                </span>
              </div>
              <p className="text-xs text-[#71685F] mt-0.5">{product.priceNote}</p>

              {/* Description */}
              <p className="text-sm text-[#29231E]/80 leading-relaxed mt-4 font-light">
                {product.fullDesc}
              </p>

              {/* Variants Selection */}
              {product.availableVariants && product.availableVariants.length > 0 && (
                <div className="mt-5 space-y-2">
                  <label className="block text-xs font-semibold text-[#29231E] uppercase tracking-wider">
                    Select Design Variant:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.availableVariants.map((variant) => (
                      <button
                        key={variant}
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          selectedVariant === variant
                            ? "bg-[#9A6428] text-white border-[#9A6428] shadow-sm"
                            : "bg-white text-[#29231E] border-[#E6DED2] hover:border-[#9A6428]/40"
                        }`}
                      >
                        {variant}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Personalization Fields (Only when supported) */}
              {product.customisationOptions.allowsText && (
                <div className="mt-5 p-4 rounded-xl bg-white border border-[#9A6428]/30 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#9A6428] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Personalization Details:</span>
                  </div>
                  <input
                    type="text"
                    value={personalizationText}
                    onChange={(e) => setPersonalizationText(e.target.value)}
                    placeholder={product.customisationOptions.textPlaceholder || "Enter name, quote or initials"}
                    className="w-full px-3 py-2 text-sm bg-[#FFFDF9] rounded-lg border border-[#E6DED2] focus:outline-none focus:border-[#9A6428]"
                  />
                  <p className="text-[11px] text-[#71685F]">
                    Our artisans will verify vector layout and send a preview on WhatsApp before engraving.
                  </p>
                </div>
              )}

              {/* Delivery PIN Code & Quantity */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#29231E] uppercase tracking-wider mb-1">
                    Quantity:
                  </label>
                  <div className="flex items-center border border-[#E6DED2] rounded-lg bg-white overflow-hidden w-28">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-sm text-[#71685F] hover:bg-[#F8F5EF]"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center text-sm font-medium text-[#29231E]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-sm text-[#71685F] hover:bg-[#F8F5EF]"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#29231E] uppercase tracking-wider mb-1">
                    Delivery PIN:
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="e.g. 400001"
                    value={deliveryPin}
                    onChange={(e) => setDeliveryPin(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white rounded-lg border border-[#E6DED2] focus:outline-none focus:border-[#9A6428]"
                  />
                </div>
              </div>

              {/* What's Included */}
              <div className="mt-5 space-y-1.5">
                <p className="text-xs font-semibold text-[#29231E] uppercase tracking-wider">
                  Included with this piece:
                </p>
                <ul className="text-xs text-[#71685F] space-y-1">
                  {product.whatsIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#9A6428] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="pt-4 border-t border-[#E6DED2] space-y-2">
              <Button
                onClick={handleWhatsAppOrder}
                className="w-full h-12 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm flex items-center justify-center gap-2.5 rounded-xl shadow-md transition-transform active:scale-[0.98]"
              >
                <SiWhatsapp className="w-5 h-5" />
                <span>Enquire on WhatsApp</span>
              </Button>
              <p className="text-[11px] text-center text-[#71685F]">
                Orders are confirmed personally via WhatsApp with Rahul & Mohit. Shipping is calculated based on your delivery PIN.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
