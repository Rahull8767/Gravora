import { useState } from "react";
import { Sparkles, Check, ArrowRight, MessageSquare } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/config/site";

export function PersonalizationProcess() {
  const [previewText, setPreviewText] = useState("Rahul & Mohit");
  const [previewDesign, setPreviewDesign] = useState("classic");

  const { url } = buildWhatsAppUrl(
    `Hello Gravora! I tried your personalization preview with text: "${previewText}" and would like to consult on placing an order.`
  );

  return (
    <section id="personalized" className="py-16 sm:py-24 bg-[#F8F5EF] border-b border-[#E6DED2]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E6DED2] text-xs font-mono uppercase tracking-widest text-[#9A6428] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Keepsakes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#29231E]">
            Made Yours, From the Heart.
          </h2>
          <p className="text-sm sm:text-base text-[#71685F] font-light leading-relaxed">
            Not every Gravora piece is customizable — our fixed collections feature curated art, while our personalizable range allows you to embed cherished names, dates, and quotes.
          </p>
        </div>

        {/* 3-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-[#E6DED2] space-y-4 relative card-hover-luxury">
            <span className="w-9 h-9 rounded-full bg-[#9A6428] text-white flex items-center justify-center font-serif font-bold text-sm">
              1
            </span>
            <h3 className="font-serif text-lg font-bold text-[#29231E]">
              Choose Your Design
            </h3>
            <p className="text-xs text-[#71685F] leading-relaxed font-light">
              Explore our catalogue and look for the <strong className="text-[#9A6428]">Personalizable</strong> badge on nameplates, photo plaques, and keychains.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E6DED2] space-y-4 relative card-hover-luxury">
            <span className="w-9 h-9 rounded-full bg-[#704522] text-white flex items-center justify-center font-serif font-bold text-sm">
              2
            </span>
            <h3 className="font-serif text-lg font-bold text-[#29231E]">
              Add Personal Details
            </h3>
            <p className="text-xs text-[#71685F] leading-relaxed font-light">
              Enter your recipient’s name, memorable anniversary date, inspirational quote, or attach your high-contrast photograph.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E6DED2] space-y-4 relative card-hover-luxury">
            <span className="w-9 h-9 rounded-full bg-[#4A2C18] text-white flex items-center justify-center font-serif font-bold text-sm">
              3
            </span>
            <h3 className="font-serif text-lg font-bold text-[#29231E]">
              Send & Confirm on WhatsApp
            </h3>
            <p className="text-xs text-[#71685F] leading-relaxed font-light">
              Our founders Rahul and Mohit personally review your layout, verify pin code delivery, and share a proof before burning.
            </p>
          </div>
        </div>

        {/* Interactive Live Engraving Previewer */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E6DED2] shadow-sm max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#29231E]">
              Live Wood Engraving Preview
            </h3>
            <p className="text-xs text-[#71685F]">
              Type your custom text below to see how it looks rendered on seasoned natural wood.
            </p>
          </div>

          {/* Interactive Wood Plaque Mockup */}
          <div className="relative p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#EFE8DD] via-[#F8F5EF] to-[#E6DED2] border-2 border-[#9A6428]/40 shadow-inner text-center overflow-hidden">
            {/* Subtle wood texture grain line styling */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#9A6428_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#9A6428]">
                GRAVORA ARTISAN STUDIO
              </span>

              <div className="py-4">
                <p
                  className={`text-2xl sm:text-4xl text-[#4A2C18] transition-all tracking-wide ${
                    previewDesign === "classic"
                      ? "font-serif italic font-medium"
                      : "font-sans uppercase font-bold tracking-[0.18em]"
                  }`}
                  style={{
                    textShadow: "1px 1px 1px rgba(255,255,255,0.7), -1px -1px 1px rgba(74,44,24,0.3)",
                  }}
                >
                  {previewText.trim() || "Your Name Here"}
                </p>
                <div className="flex items-center justify-center gap-2 text-[#9A6428] text-xs mt-2">
                  <span>—</span>
                  <span>✦</span>
                  <span className="font-mono text-[10px] tracking-widest uppercase">
                    CRAFTED TO LEAVE A MARK
                  </span>
                  <span>✦</span>
                  <span>—</span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-[#29231E] uppercase tracking-wider mb-1.5">
                Custom Name / Dedication:
              </label>
              <input
                type="text"
                maxLength={40}
                value={previewText}
                onChange={(e) => setPreviewText(e.target.value)}
                placeholder="Enter text to preview..."
                className="w-full px-3.5 py-2.5 text-sm bg-[#F8F5EF] rounded-xl border border-[#E6DED2] focus:outline-none focus:border-[#9A6428]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#29231E] uppercase tracking-wider mb-1.5">
                Font Typography Style:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPreviewDesign("classic")}
                  className={`py-2 text-xs font-serif italic rounded-xl border transition-all ${
                    previewDesign === "classic"
                      ? "bg-[#9A6428] text-white border-[#9A6428]"
                      : "bg-[#F8F5EF] text-[#29231E] border-[#E6DED2]"
                  }`}
                >
                  Classic Serif
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewDesign("modern")}
                  className={`py-2 text-xs font-sans uppercase font-bold tracking-wider rounded-xl border transition-all ${
                    previewDesign === "modern"
                      ? "bg-[#9A6428] text-white border-[#9A6428]"
                      : "bg-[#F8F5EF] text-[#29231E] border-[#E6DED2]"
                  }`}
                >
                  Modern Sans
                </button>
              </div>
            </div>
          </div>

          <div className="pt-2 text-center">
            <Button
              asChild
              className="h-11 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs sm:text-sm rounded-xl gap-2"
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="w-4 h-4" />
                <span>Enquire About Custom Engraving</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
