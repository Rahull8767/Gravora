import { useState } from "react";
import { X, Heart, Trash2, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useWishlist } from "./WishlistContext";
import { Button } from "@/components/ui/button";
import { buildWishlistWhatsAppInquiry } from "@/lib/whatsapp";
import type { Product } from "@/data/products";

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export function WishlistDrawer({
  isOpen,
  onClose,
  onSelectProduct,
}: WishlistDrawerProps) {
  const { wishlistProducts, toggleWishlist, clearWishlist, count } = useWishlist();
  const [deliveryPin, setDeliveryPin] = useState("");

  if (!isOpen) return null;

  const handleInquireAll = () => {
    if (wishlistProducts.length === 0) return;
    const items = wishlistProducts.map((product) => ({
      product,
      quantity: 1,
    }));
    const { url } = buildWishlistWhatsAppInquiry({
      items,
      deliveryPin,
    });
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#29231E]/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFDF9] border-l border-[#E6DED2] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#E6DED2] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Heart className="w-5 h-5 text-[#9A6428] fill-[#9A6428]" />
              <h2 className="font-serif text-xl font-bold text-[#29231E]">
                Saved Pieces ({count})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#71685F] hover:text-[#29231E] rounded-full hover:bg-[#F8F5EF] transition-colors"
              aria-label="Close saved pieces drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List of items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#F8F5EF] flex items-center justify-center mx-auto text-[#9A6428]">
                  <Heart className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#29231E]">
                  Your wishlist is empty
                </h3>
                <p className="text-sm text-[#71685F] max-w-xs mx-auto">
                  Click the heart icon on any handcrafted piece in our collection to save it for later consultation.
                </p>
                <Button
                  onClick={onClose}
                  className="mt-4 bg-[#9A6428] text-white hover:bg-[#704522]"
                >
                  Explore Collection
                </Button>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3 rounded-lg border border-[#E6DED2] bg-white hover:border-[#9A6428]/40 transition-colors"
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-20 h-20 object-cover rounded bg-[#F8F5EF] cursor-pointer"
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#9A6428]">
                      {product.code}
                    </span>
                    <h4
                      className="font-serif text-base font-semibold text-[#29231E] truncate cursor-pointer hover:text-[#9A6428] transition-colors"
                      onClick={() => {
                        onSelectProduct(product);
                        onClose();
                      }}
                    >
                      {product.title}
                    </h4>
                    <p className="text-sm font-medium text-[#704522] mt-0.5">
                      {product.startingPrice}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => {
                          onSelectProduct(product);
                          onClose();
                        }}
                        className="text-xs text-[#9A6428] font-medium hover:underline inline-flex items-center gap-1"
                      >
                        Details <ArrowRight className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="text-xs text-red-600 hover:text-red-700 inline-flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Actions */}
          {wishlistProducts.length > 0 && (
            <div className="p-6 border-t border-[#E6DED2] bg-[#F8F5EF] space-y-3">
              <div>
                <label className="block text-xs font-medium text-[#29231E] mb-1">
                  Delivery PIN Code (optional):
                </label>
                <input
                  type="text"
                  maxLength={6}
                  placeholder="e.g. 400001"
                  value={deliveryPin}
                  onChange={(e) => setDeliveryPin(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white rounded border border-[#E6DED2] focus:outline-none focus:border-[#9A6428]"
                />
              </div>

              <Button
                onClick={handleInquireAll}
                className="w-full h-11 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium flex items-center justify-center gap-2 rounded-lg"
              >
                <SiWhatsapp className="w-4 h-4" />
                <span>Enquire All on WhatsApp</span>
              </Button>

              <div className="flex items-center justify-between text-xs text-[#71685F] pt-1">
                <span>Direct consultation with founders Rahul & Mohit</span>
                <button
                  onClick={clearWishlist}
                  className="hover:text-red-600 underline"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
