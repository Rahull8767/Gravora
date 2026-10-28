import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Contact } from "@/components/sections/Contact";
import { BulkOrders } from "@/components/sections/BulkOrders";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

function App() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [customizingProductId, setCustomizingProductId] = useState<string | null>(null);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
        <Navbar />
        
        <main>
          <Hero />
          <Products 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            customizingProductId={customizingProductId}
            setCustomizingProductId={setCustomizingProductId}
          />
          <Contact />
          <BulkOrders />
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;