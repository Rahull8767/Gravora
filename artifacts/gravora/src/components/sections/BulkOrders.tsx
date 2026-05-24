import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, MessageCircle } from "lucide-react";

export function BulkOrders() {
  const { toast } = useToast();
  const [companyName, setCompanyName] = useState("");
  const [productType, setProductType] = useState("Wooden Menus");
  const [quantity, setQuantity] = useState(50);
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const productTypes = [
    "Wooden Menus",
    "Branded Coasters",
    "Reserved Signage",
    "Wall Art Decor",
    "Custom Keychains",
    "Corporate Awards"
  ];

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setLogoFile(e.target.files[0]);
    }
  };

  const handleGetQuote = (e: React.FormEvent) => {
    e.preventDefault();

    if (!companyName.trim()) {
      toast({
        title: "Company Name Required",
        description: "Please enter your company or brand name.",
        variant: "destructive"
      });
      return;
    }

    if (quantity < 10) {
      toast({
        title: "Invalid Quantity",
        description: "Minimum order quantity for B2B bulk orders is 10 units.",
        variant: "destructive"
      });
      return;
    }

    // Construct WhatsApp message
    const message = `Hi Gravora! I'd like to request a bulk B2B quote for my brand:\n- Company: ${companyName}\n- Product Type: ${productType}\n- Quantity: ${quantity}\n${logoFile ? `- Branding Logo: ${logoFile.name}\n` : ""}Please share details and catalog.`;

    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Inquiry Sent to WhatsApp",
      description: "Check your WhatsApp tab to finalize the details.",
    });

    // Reset Form
    setCompanyName("");
    setQuantity(50);
    setLogoFile(null);
  };

  return (
    <section id="custom-order" className="py-32 bg-background relative border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="bg-card border border-white/5 p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-stretch justify-between gap-12 group">
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none"></div>

          {/* Left Column: Context */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between relative z-10">
            <div>
              <span className="text-[10px] font-mono text-primary uppercase tracking-widest block mb-4">
                B2B & Hospitality
              </span>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                Elevate Your <br/>Brand Aesthetic
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed text-base mb-8 max-w-lg">
                We partner with independent cafes, boutique hotels, and premium brands to create custom tactile experiences. From engraved wooden menu boards and coaster suites to custom metal/wood reserve signs and indoor branding pieces.
              </p>
              <ul className="space-y-3 mb-10 text-sm text-foreground font-light">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> 
                  Consistent brand execution on high-density wood & stone
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> 
                  Tiered volume discounts (starting at 10+ units)
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> 
                  Custom architectural sourcing and sample proofing
                </li>
              </ul>
            </div>

            {/* Display Cafe product thumbnail */}
            <div className="hidden sm:block max-w-sm border border-white/10 p-2 bg-background/50">
              <img 
                src="/product-cafe.png" 
                alt="Cafe branding example" 
                className="w-full h-auto object-cover opacity-80" 
              />
              <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block mt-2 text-center">
                Hospitality Wood Coasters & Slate Reserved Plaque
              </span>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-1/2 bg-background border border-white/5 p-8 md:p-10 relative z-10 flex flex-col justify-center">
            <h4 className="text-lg font-serif font-bold text-foreground mb-6">Bulk Quote Request</h4>
            
            <form onSubmit={handleGetQuote} className="space-y-6">
              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="company-name" className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                  Company / Brand Name
                </Label>
                <Input
                  id="company-name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Hearth & Co. Cafe"
                  required
                  className="bg-transparent border-white/10 rounded-none h-12 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                  data-testid="input-b2b-company"
                />
              </div>

              {/* Product Type & Qty Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Product Type Select */}
                <div className="space-y-2">
                  <Label htmlFor="product-type" className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                    Product Type
                  </Label>
                  <select
                    id="product-type"
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    className="w-full h-12 bg-zinc-950 border border-white/10 rounded-none text-xs font-mono text-foreground px-4 focus-visible:outline-none focus:border-primary transition-all duration-200"
                    data-testid="select-b2b-product"
                  >
                    {productTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Min Order Qty */}
                <div className="space-y-2">
                  <Label htmlFor="b2b-quantity" className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                    Quantity (Min. 10)
                  </Label>
                  <Input
                    id="b2b-quantity"
                    type="number"
                    min={10}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    required
                    className="bg-transparent border-white/10 rounded-none h-12 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary font-mono"
                    data-testid="input-b2b-qty"
                  />
                </div>
              </div>

              {/* Branding / Logo Upload */}
              <div className="space-y-2">
                <Label className="text-xs uppercase tracking-widest text-muted-foreground font-mono block">
                  Upload Branding / Logo File
                </Label>
                <div className="relative">
                  <input
                    type="file"
                    id="b2b-logo-upload"
                    className="hidden"
                    onChange={handleLogoChange}
                    accept="image/*,.pdf,.svg,.ai"
                  />
                  <label
                    htmlFor="b2b-logo-upload"
                    className="flex items-center gap-3 px-4 h-12 border border-white/10 bg-zinc-950 hover:bg-zinc-900 cursor-pointer text-xs font-mono text-muted-foreground hover:text-foreground transition-all duration-200 justify-center w-full"
                  >
                    <Upload className="w-4 h-4 text-primary" />
                    <span>{logoFile ? logoFile.name : "Select Vector / Logo Asset"}</span>
                  </label>
                </div>
              </div>

              {/* Submit CTA */}
              <Button
                type="submit"
                className="w-full rounded-none h-12 font-sans tracking-widest uppercase gap-2 mt-2"
                data-testid="btn-b2b-submit"
              >
                <MessageCircle className="w-4 h-4" />
                Get Bulk Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}