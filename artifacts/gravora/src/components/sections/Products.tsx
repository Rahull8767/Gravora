import { useState, useMemo } from "react";
import { Search, Heart, Sparkles, Filter, X, ArrowUpDown, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { CATEGORIES, type Product } from "@/data/products";
import { useWishlist } from "@/components/shared/WishlistContext";
import { buildProductWhatsAppInquiry } from "@/lib/whatsapp";

interface ProductsProps {
  products: Product[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  onSelectProduct: (product: Product) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function Products({
  products,
  activeCategory,
  setActiveCategory,
  onSelectProduct,
  searchQuery,
  setSearchQuery,
}: ProductsProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Filtering and sorting
  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Category filter
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }

    // Status filter
    if (statusFilter === "personalizable") {
      list = list.filter((p) => p.isPersonalizable);
    } else if (statusFilter === "available") {
      list = list.filter((p) => p.isAvailable);
    } else if (statusFilter === "concept") {
      list = list.filter((p) => p.badge === "Concept Preview" || p.badge === "Coming Soon");
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.primaryMaterial.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === "price-asc") {
      list.sort((a, b) => a.priceValue - b.priceValue);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.priceValue - a.priceValue);
    }

    return list;
  }, [products, activeCategory, statusFilter, searchQuery, sortBy]);

  const handleQuickWhatsApp = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const { url } = buildProductWhatsAppInquiry({
      product,
      quantity: 1,
    });
    window.open(url, "_blank");
  };

  const handleWishlistToggle = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    toggleWishlist(productId);
  };

  const resetAllFilters = () => {
    setActiveCategory("all");
    setStatusFilter("all");
    setSearchQuery("");
    setSortBy("featured");
  };

  return (
    <section id="shop" className="py-16 sm:py-24 bg-[#FFFDF9] border-b border-[#E6DED2] relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="space-y-2 text-left">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#9A6428] font-semibold">
              Complete Catalogue
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#29231E]">
              Pieces Worth Keeping
            </h2>
            <p className="text-sm sm:text-base text-[#71685F] font-light max-w-xl">
              Authentic pricing in Indian Rupees. Starting prices are shown for personalizable designs; exact totals and shipping are confirmed directly with our founders on WhatsApp.
            </p>
          </div>

          {/* Quick Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71685F]" />
            <input
              type="text"
              placeholder="Search by piece, material..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-[#F8F5EF] rounded-xl border border-[#E6DED2] focus:outline-none focus:border-[#9A6428] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#71685F] hover:text-[#29231E]"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter & Sorting Controls */}
        <div className="space-y-4 mb-8">
          {/* Category Tabs */}
          <div
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
            role="tablist"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? "bg-[#9A6428] text-white shadow-sm"
                    : "bg-[#F8F5EF] text-[#71685F] hover:text-[#29231E] hover:bg-[#EFE8DD] border border-[#E6DED2]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Secondary Controls: Status & Sort */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#E6DED2]/60 text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[#71685F] font-medium flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#9A6428]" /> Filter:
              </span>
              <button
                onClick={() => setStatusFilter("all")}
                className={`px-2.5 py-1 rounded-md text-[11px] ${
                  statusFilter === "all"
                    ? "bg-[#704522] text-white"
                    : "text-[#71685F] hover:bg-[#F8F5EF]"
                }`}
              >
                All Status
              </button>
              <button
                onClick={() => setStatusFilter("personalizable")}
                className={`px-2.5 py-1 rounded-md text-[11px] ${
                  statusFilter === "personalizable"
                    ? "bg-[#704522] text-white"
                    : "text-[#71685F] hover:bg-[#F8F5EF]"
                }`}
              >
                Personalizable
              </button>
              <button
                onClick={() => setStatusFilter("available")}
                className={`px-2.5 py-1 rounded-md text-[11px] ${
                  statusFilter === "available"
                    ? "bg-[#704522] text-white"
                    : "text-[#71685F] hover:bg-[#F8F5EF]"
                }`}
              >
                Ready to Order
              </button>
              <button
                onClick={() => setStatusFilter("concept")}
                className={`px-2.5 py-1 rounded-md text-[11px] ${
                  statusFilter === "concept"
                    ? "bg-[#704522] text-white"
                    : "text-[#71685F] hover:bg-[#F8F5EF]"
                }`}
              >
                Concept / Enquire
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#71685F] font-medium flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#9A6428]" /> Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#F8F5EF] border border-[#E6DED2] rounded-lg px-2.5 py-1 text-xs text-[#29231E] focus:outline-none focus:border-[#9A6428]"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 px-4 rounded-2xl bg-[#F8F5EF] border border-[#E6DED2] space-y-4">
            <p className="text-base font-serif font-medium text-[#29231E]">
              No creations found matching your current filter.
            </p>
            <p className="text-xs text-[#71685F] max-w-sm mx-auto">
              Try adjusting your search terms or view our complete catalogue to discover available designs.
            </p>
            <Button
              onClick={resetAllFilters}
              variant="outline"
              className="border-[#9A6428] text-[#704522] hover:bg-white"
            >
              Reset All Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const inWishlist = isInWishlist(product.id);

              return (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group cursor-pointer rounded-2xl bg-white border border-[#E6DED2] overflow-hidden card-hover-luxury flex flex-col justify-between"
                  data-testid={`product-card-${product.code.toLowerCase()}`}
                >
                  {/* Image Container with Badges */}
                  <div className="relative aspect-square overflow-hidden bg-[#F8F5EF]">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover img-zoom"
                      loading="lazy"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm font-medium ${
                          product.badge === "Concept Preview" || product.badge === "Coming Soon"
                            ? "bg-[#704522] text-[#FFFDF9]"
                            : product.badge === "Personalizable"
                            ? "bg-[#9A6428] text-white"
                            : "bg-white/90 text-[#29231E] border border-[#E6DED2]"
                        }`}
                      >
                        {product.badge}
                      </span>
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => handleWishlistToggle(e, product.id)}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors shadow-sm ${
                        inWishlist
                          ? "bg-white text-[#9A6428]"
                          : "bg-white/80 text-[#71685F] hover:text-[#9A6428] hover:bg-white"
                      }`}
                      aria-label={inWishlist ? "Remove from saved pieces" : "Save piece"}
                    >
                      <Heart className={`w-3.5 h-3.5 ${inWishlist ? "fill-[#9A6428]" : ""}`} />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#9A6428]">
                        <span>{product.code}</span>
                        <span className="text-[#71685F]">{product.categoryLabel}</span>
                      </div>

                      <h3 className="font-serif text-base font-bold text-[#29231E] group-hover:text-[#9A6428] transition-colors mt-1 line-clamp-1">
                        {product.title}
                      </h3>

                      <p className="text-xs text-[#71685F] font-light leading-relaxed mt-1 line-clamp-2">
                        {product.shortDesc}
                      </p>
                    </div>

                    {/* Price & Actions */}
                    <div className="pt-3 border-t border-[#E6DED2]/60 space-y-3">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="font-serif text-base font-bold text-[#704522]">
                            {product.startingPrice}
                          </span>
                          <span className="text-[10px] text-[#71685F] ml-1">
                            / {product.unitLabel}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProduct(product);
                          }}
                          className="h-8 text-xs font-sans border-[#E6DED2] text-[#29231E] hover:border-[#9A6428] hover:bg-[#F8F5EF]"
                        >
                          View Details
                        </Button>

                        <Button
                          size="sm"
                          onClick={(e) => handleQuickWhatsApp(e, product)}
                          className="h-8 text-xs font-sans bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-1.5"
                        >
                          <SiWhatsapp className="w-3 h-3" />
                          <span>Enquire</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
