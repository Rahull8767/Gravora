import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WishlistProvider } from "@/components/shared/WishlistContext";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedCategories } from "@/components/sections/FeaturedCategories";
import { LittleWorldsSection } from "@/components/sections/LittleWorldsSection";
import { Products } from "@/components/sections/Products";
import { PersonalizationProcess } from "@/components/sections/PersonalizationProcess";
import { OurCraft } from "@/components/sections/OurCraft";
import { OurStory } from "@/components/sections/OurStory";
import { InstagramGallery } from "@/components/sections/InstagramGallery";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { ProductDetailModal } from "@/components/shared/ProductDetailModal";
import { WishlistDrawer } from "@/components/shared/WishlistDrawer";
import { PRODUCTS, type Product } from "@/data/products";

function AppContent() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId);
    const shopElement = document.getElementById("shop");
    if (shopElement) {
      shopElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenSearch = () => {
    const shopElement = document.getElementById("shop");
    if (shopElement) {
      shopElement.scrollIntoView({ behavior: "smooth" });
      const searchInput = shopElement.querySelector("input");
      if (searchInput) {
        searchInput.focus();
      }
    }
  };

  const handleExploreClick = () => {
    const shopElement = document.getElementById("shop");
    if (shopElement) {
      shopElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLittleWorldsClick = () => {
    const lwElement = document.getElementById("little-worlds");
    if (lwElement) {
      lwElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#29231E] font-sans selection:bg-[#9A6428]/20 selection:text-[#4A2C18]">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navigation */}
      <Navbar
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={handleOpenSearch}
      />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreClick={handleExploreClick}
          onLittleWorldsClick={handleLittleWorldsClick}
        />

        {/* Featured 6 Categories */}
        <FeaturedCategories onSelectCategory={handleCategorySelect} />

        {/* Flagship Little Worlds 3D Art Collection */}
        <LittleWorldsSection
          products={PRODUCTS}
          onSelectProduct={setSelectedProduct}
        />

        {/* Complete Catalog: Pieces Worth Keeping */}
        <Products
          products={PRODUCTS}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onSelectProduct={setSelectedProduct}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Personalization Process: Made Yours From the Heart */}
        <PersonalizationProcess />

        {/* Our Craft: Grounded & Transparent */}
        <OurCraft />

        {/* Our Story: Founded by Rahul & Mohit */}
        <OurStory />

        {/* Studio Gallery: Curated Product Photography */}
        <InstagramGallery
          products={PRODUCTS}
          onSelectProduct={setSelectedProduct}
        />

        {/* Contact & Bespoke Custom Orders */}
        <Contact />
      </main>

      {/* Comprehensive Footer */}
      <Footer onSelectCategory={handleCategorySelect} />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        onSelectProduct={setSelectedProduct}
      />

      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <TooltipProvider>
      <WishlistProvider>
        <AppContent />
      </WishlistProvider>
    </TooltipProvider>
  );
}
