import { useState } from "react";
import { Mail, Clock, MapPin, Send, Sparkles, MessageCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";
import { buildBespokeInquiry } from "@/lib/whatsapp";

export function Contact() {
  const [ideaDescription, setIdeaDescription] = useState("");
  const [material, setMaterial] = useState("3mm Basswood Plywood");
  const [dimensions, setDimensions] = useState("120 × 120 mm");
  const [quantity, setQuantity] = useState(1);
  const [deliveryPin, setDeliveryPin] = useState("");
  const [hasArtworkReady, setHasArtworkReady] = useState(false);

  const { url: generalUrl } = buildWhatsAppUrl(SITE_CONFIG.whatsapp.defaultMessage);

  const handleBespokeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { url } = buildBespokeInquiry({
      conceptDescription: ideaDescription || "Custom Laser Creation",
      preferredMaterial: material,
      approxDimensions: dimensions,
      quantity,
      deliveryPin,
      hasArtworkReady,
    });
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFFDF9] border-b border-[#E6DED2]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Consultation Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F5EF] border border-[#E6DED2] text-xs font-mono uppercase tracking-widest text-[#9A6428] font-semibold">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Direct Studio Connection</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#29231E] leading-tight">
              Let’s Craft Something <br />
              <span className="italic text-[#704522] font-normal">Memorable.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#71685F] font-light leading-relaxed">
              Have a bespoke concept, wedding gift requirement, bulk corporate order, or personalized keepsake idea? Speak directly with founders Rahul and Mohit on WhatsApp.
            </p>

            {/* Direct Communication Details */}
            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E6DED2] space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#25D366] text-white">
                  <SiWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#71685F]">WhatsApp Business</p>
                  <a
                    href={generalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-bold text-[#29231E] hover:text-[#9A6428]"
                  >
                    {SITE_CONFIG.whatsapp.displayNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#E6DED2]">
                <div className="p-2.5 rounded-xl bg-white border border-[#E6DED2] text-[#9A6428]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#71685F]">Official Studio Email</p>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="font-sans text-sm font-medium text-[#29231E] hover:text-[#9A6428]"
                  >
                    {SITE_CONFIG.contact.displayEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#E6DED2]">
                <div className="p-2.5 rounded-xl bg-white border border-[#E6DED2] text-[#9A6428]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#71685F]">Studio Operating Hours</p>
                  <p className="font-sans text-xs text-[#29231E]">
                    {SITE_CONFIG.contact.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bespoke Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#F8F5EF] border border-[#E6DED2] shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4 text-[#9A6428]" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#29231E]">
                  Bespoke & Custom Order Enquiry
                </h3>
              </div>

              <form onSubmit={handleBespokeSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-xs font-semibold text-[#29231E] uppercase tracking-wider mb-1.5">
                    Describe Your Concept or Gifting Requirement: *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={ideaDescription}
                    onChange={(e) => setIdeaDescription(e.target.value)}
                    placeholder="e.g. 3D layered family nameplate with pine tree backdrop, or custom wedding anniversary plaque with couple names..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-[#E6DED2] focus:outline-none focus:border-[#9A6428]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#29231E] uppercase tracking-wider mb-1.5">
                      Preferred Material:
                    </label>
                    <select
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-[#E6DED2] focus:outline-none focus:border-[#9A6428]"
                    >
                      <option value="3mm Basswood Plywood">3mm Laser-Compatible Basswood</option>
                      <option value="Solid Hardwood & Plinth Base">Solid Hardwood & Plinth Base</option>
                      <option value="Black Coated Metal Blank">Black Coated Metal Blank</option>
                      <option value="Natural Split Slate Stone">Natural Split Slate Stone</option>
                      <option value="Artisan Recommendation">Artisan Recommendation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#29231E] uppercase tracking-wider mb-1.5">
                      Approximate Dimensions:
                    </label>
                    <input
                      type="text"
                      value={dimensions}
                      onChange={(e) => setDimensions(e.target.value)}
                      placeholder="e.g. 120 × 120 mm (Max 150×150mm)"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-[#E6DED2] focus:outline-none focus:border-[#9A6428]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#29231E] uppercase tracking-wider mb-1.5">
                      Target Quantity:
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={500}
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-[#E6DED2] focus:outline-none focus:border-[#9A6428]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#29231E] uppercase tracking-wider mb-1.5">
                      Delivery PIN Code:
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      value={deliveryPin}
                      onChange={(e) => setDeliveryPin(e.target.value)}
                      placeholder="e.g. 400001"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white rounded-xl border border-[#E6DED2] focus:outline-none focus:border-[#9A6428]"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="artworkCheck"
                    checked={hasArtworkReady}
                    onChange={(e) => setHasArtworkReady(e.target.checked)}
                    className="w-4 h-4 rounded text-[#9A6428] border-[#E6DED2]"
                  />
                  <label htmlFor="artworkCheck" className="text-xs text-[#71685F] cursor-pointer">
                    I have reference sketches, photos, or vector files ready to share on WhatsApp.
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm flex items-center justify-center gap-2 rounded-xl shadow-md mt-4"
                >
                  <SiWhatsapp className="w-4 h-4" />
                  <span>Send Enquiry on WhatsApp</span>
                </Button>

                <p className="text-[11px] text-center text-[#71685F]">
                  Pre-populates a formatted message to connect with Rahul & Mohit. No payments are requested on this page.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
