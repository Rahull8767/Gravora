import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar, MobileBottomNav } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Gallery } from "@/components/sections/Gallery";
import { Materials } from "@/components/sections/Materials";
import { BulkOrders } from "@/components/sections/BulkOrders";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

function App() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [customizingProductId, setCustomizingProductId] = useState<string | null>(null);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
        <Navbar />
        
        <main>
          <Hero />
          <Products 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            customizingProductId={customizingProductId}
            setCustomizingProductId={setCustomizingProductId}
          />
          <HowItWorks />
          <Gallery setCustomizingProductId={setCustomizingProductId} />
          <Materials setActiveCategory={setActiveCategory} />
          <BulkOrders />
          <Pricing />
          <Testimonials />
          <Contact />
        </main>
        
        <Footer />
        <MobileBottomNav />
        <WhatsAppButton />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;