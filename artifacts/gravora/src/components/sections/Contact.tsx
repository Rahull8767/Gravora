import { useState } from "react";
import { Mail, Clock, MapPin } from "lucide-react";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { SITE_CONFIG } from "@/config/site";
import { buildCustomOrderInquiry } from "@/lib/whatsapp";

export function Contact() {
  const { toast } = useToast();
  const [customerName, setCustomerName] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");
  const [materialPreference, setMaterialPreference] = useState("Solid Teak Wood");
  const [dimensions, setDimensions] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [hasDesignReady, setHasDesignReady] = useState(true);
  const [specialNotes, setSpecialNotes] = useState("");

  const materials = [
    "Solid Teak Wood",
    "Solid Mango Wood",
    "Natural Slate Stone",
    "Polished Black Granite",
    "Raw Kota Stone",
    "Multi-Layer Birch Wood",
    "Not Sure — Need Advice",
  ];

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!ideaDescription.trim()) {
      toast({
        title: "Please Describe Your Idea",
        description: "Tell us a few words about what you would like to have engraved.",
        variant: "destructive",
      });
      return;
    }

    const { url } = buildCustomOrderInquiry({
      customerName,
      ideaDescription,
      materialPreference,
      dimensions,
      quantity: parseInt(quantity) || 1,
      hasDesignReady,
      specialNotes,
    });

    window.open(url, "_blank");

    toast({
      title: "Opening WhatsApp Chat",
      description: "Please tap Send in WhatsApp to deliver your custom enquiry to our studio.",
    });
  };

  return (
    <section id="custom-order" className="py-12 sm:py-16 md:py-20 bg-card/20 border-t border-border/50 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Brief Explanation & Studio Info */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <p className="text-[11px] font-mono text-primary uppercase tracking-[0.2em] mb-1.5 font-medium">
                Custom Orders
              </p>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                Bespoke Commissions
              </h2>
            </div>

            <p className="text-muted-foreground font-light text-xs sm:text-sm leading-relaxed">
              Have an anniversary portrait, family monogram, unique dimensions, or bespoke idea?
              Share your concept and our artisans will review the engraving contrast and provide a tailored quote.
            </p>

            {/* Studio Info */}
            <div className="pt-4 border-t border-border/40 space-y-2.5 text-xs text-muted-foreground font-light">
              <div className="flex items-center gap-2.5 text-foreground/90">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Handcrafted in {SITE_CONFIG.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{SITE_CONFIG.contact.hours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-foreground hover:underline"
                >
                  {SITE_CONFIG.contact.displayEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <SiInstagram className="w-3.5 h-3.5 text-primary shrink-0" />
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground hover:underline"
                >
                  {SITE_CONFIG.social.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Order Form */}
          <div className="md:col-span-7" id="contact">
            <div className="bg-card/50 border border-border/60 rounded-lg p-5 sm:p-7">
              <form onSubmit={handleCustomSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <Label htmlFor="custom-name" className="text-[11px] font-mono uppercase text-muted-foreground">
                      Your Name
                    </Label>
                    <Input
                      id="custom-name"
                      type="text"
                      placeholder="e.g. Ananya"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="bg-background border-border h-10 text-xs sm:text-sm rounded"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="custom-material" className="text-[11px] font-mono uppercase text-muted-foreground">
                      Material Canvas
                    </Label>
                    <select
                      id="custom-material"
                      value={materialPreference}
                      onChange={(e) => setMaterialPreference(e.target.value)}
                      className="w-full bg-background border border-border h-10 px-3 text-xs sm:text-sm text-foreground rounded focus:outline-none focus:border-primary"
                    >
                      {materials.map((m) => (
                        <option key={m} value={m} className="bg-background text-foreground">
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="custom-idea" className="text-[11px] font-mono uppercase text-muted-foreground">
                    Describe Your Idea / Requirement *
                  </Label>
                  <textarea
                    id="custom-idea"
                    required
                    rows={3}
                    placeholder="e.g. Wedding portrait engraved on teak wood with date inscribed below..."
                    value={ideaDescription}
                    onChange={(e) => setIdeaDescription(e.target.value)}
                    className="w-full bg-background border border-border p-3 text-xs sm:text-sm text-foreground rounded focus:outline-none focus:border-primary resize-y"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <Label htmlFor="custom-dims" className="text-[11px] font-mono uppercase text-muted-foreground">
                      Size (Optional)
                    </Label>
                    <Input
                      id="custom-dims"
                      type="text"
                      placeholder="e.g. 8x10 inches"
                      value={dimensions}
                      onChange={(e) => setDimensions(e.target.value)}
                      className="bg-background border-border h-10 text-xs sm:text-sm rounded"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="custom-qty" className="text-[11px] font-mono uppercase text-muted-foreground">
                      Quantity
                    </Label>
                    <Input
                      id="custom-qty"
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="bg-background border-border h-10 text-xs sm:text-sm rounded"
                    />
                  </div>
                </div>

                <div className="pt-1">
                  <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={hasDesignReady}
                      onChange={(e) => setHasDesignReady(e.target.checked)}
                      className="w-3.5 h-3.5 rounded border-border bg-background text-primary accent-primary"
                    />
                    <span>I will attach my photo or design in WhatsApp chat</span>
                  </label>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-11 rounded bg-[#25D366] hover:bg-[#1ebe5d] text-white font-mono text-xs uppercase tracking-wider gap-2 shadow-sm"
                    data-testid="btn-submit-custom-order"
                  >
                    <SiWhatsapp className="w-4 h-4" />
                    <span>Enquire on WhatsApp</span>
                  </Button>
                  <p className="text-[11px] text-muted-foreground text-center mt-2 font-light">
                    Submitting opens WhatsApp with your pre-filled inquiry. You must press <strong>Send</strong> in WhatsApp to deliver it.
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