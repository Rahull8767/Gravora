import { useState } from "react";
import { Check } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { buildBulkInquiry } from "@/lib/whatsapp";

export function BulkOrders() {
  const { toast } = useToast();
  const [businessName, setBusinessName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [productType, setProductType] = useState("Custom Wooden Coasters / Menus");
  const [estimatedQuantity, setEstimatedQuantity] = useState("25");
  const [deadline, setDeadline] = useState("");
  const [brandingNotes, setBrandingNotes] = useState("");

  const b2bProductTypes = [
    "Custom Wooden Coasters / Menus",
    "Branded Natural Stone Keepsakes",
    "Corporate Gifting & Hampers",
    "Table & Desk Signage",
    "Custom Hardwood Keychains",
    "Architectural Plaques / Awards",
    "Other Bespoke Business Need",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!businessName.trim()) {
      toast({
        title: "Business Name Required",
        description: "Please enter your organization or brand name.",
        variant: "destructive",
      });
      return;
    }

    if (!contactPerson.trim()) {
      toast({
        title: "Contact Person Required",
        description: "Please enter your name.",
        variant: "destructive",
      });
      return;
    }

    const { url } = buildBulkInquiry({
      businessName,
      contactPerson,
      productType,
      estimatedQuantity,
      deadline,
      brandingRequirements: brandingNotes,
    });

    window.open(url, "_blank");

    toast({
      title: "Opening WhatsApp Chat",
      description: "Please tap Send in WhatsApp to deliver your corporate inquiry.",
    });
  };

  return (
    <section id="b2b" className="py-12 sm:py-16 md:py-20 bg-background border-t border-border/50 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Context */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <p className="text-[11px] font-mono text-primary uppercase tracking-[0.2em] mb-1.5 font-medium">
                B2B & Bulk
              </p>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                Corporate Gifting & Brand Engraving
              </h2>
            </div>

            <p className="text-muted-foreground font-light text-xs sm:text-sm leading-relaxed">
              We partner with studios, cafes, hospitality brands, and corporate teams to produce branded merchandise on natural hardwoods and quarried stones.
            </p>

            <ul className="pt-2 space-y-2 text-xs text-muted-foreground font-light">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Vector logo engraving from AI, SVG, or high-res files</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Volume tiered pricing & sample proofs</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Custom packaging & pan-India dispatch</span>
              </li>
            </ul>
          </div>

          {/* Right Column: B2B Form */}
          <div className="md:col-span-7">
            <div className="bg-card/50 border border-border/60 rounded-lg p-5 sm:p-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <Label htmlFor="b2b-business" className="text-[11px] font-mono uppercase text-muted-foreground">
                      Business / Brand Name *
                    </Label>
                    <Input
                      id="b2b-business"
                      type="text"
                      required
                      placeholder="e.g. Copper Leaf Cafe"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="bg-background border-border h-10 text-xs sm:text-sm rounded"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="b2b-contact" className="text-[11px] font-mono uppercase text-muted-foreground">
                      Contact Person *
                    </Label>
                    <Input
                      id="b2b-contact"
                      type="text"
                      required
                      placeholder="e.g. Rahul"
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      className="bg-background border-border h-10 text-xs sm:text-sm rounded"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <Label htmlFor="b2b-product" className="text-[11px] font-mono uppercase text-muted-foreground">
                      Product Requirement
                    </Label>
                    <select
                      id="b2b-product"
                      value={productType}
                      onChange={(e) => setProductType(e.target.value)}
                      className="w-full bg-background border border-border h-10 px-3 text-xs sm:text-sm text-foreground rounded focus:outline-none focus:border-primary"
                    >
                      {b2bProductTypes.map((type) => (
                        <option key={type} value={type} className="bg-background text-foreground">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="b2b-qty" className="text-[11px] font-mono uppercase text-muted-foreground">
                      Estimated Quantity
                    </Label>
                    <Input
                      id="b2b-qty"
                      type="text"
                      placeholder="e.g. 50 units"
                      value={estimatedQuantity}
                      onChange={(e) => setEstimatedQuantity(e.target.value)}
                      className="bg-background border-border h-10 text-xs sm:text-sm rounded"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="b2b-notes" className="text-[11px] font-mono uppercase text-muted-foreground">
                    Custom Branding Details / Target Date
                  </Label>
                  <textarea
                    id="b2b-notes"
                    rows={2}
                    placeholder="Describe material preference, logo placement, or deadline..."
                    value={brandingNotes}
                    onChange={(e) => setBrandingNotes(e.target.value)}
                    className="w-full bg-background border border-border p-3 text-xs sm:text-sm text-foreground rounded focus:outline-none focus:border-primary resize-y"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-11 rounded bg-[#25D366] hover:bg-[#1ebe5d] text-white font-mono text-xs uppercase tracking-wider gap-2 shadow-sm"
                    data-testid="btn-submit-b2b"
                  >
                    <SiWhatsapp className="w-4 h-4" />
                    <span>Request Quotation on WhatsApp</span>
                  </Button>
                  <p className="text-[11px] text-muted-foreground text-center mt-2 font-light">
                    Opens WhatsApp with your business requirements formatted for our artisan team.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}