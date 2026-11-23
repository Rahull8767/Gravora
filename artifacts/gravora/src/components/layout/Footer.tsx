import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { Mail, Clock, ArrowUp, ShieldCheck } from "lucide-react";
import { GravoraLogo } from "@/components/shared/GravoraLogo";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";
import { CATEGORIES } from "@/data/products";

interface FooterProps {
  onSelectCategory: (categoryId: string) => void;
}

export function Footer({ onSelectCategory }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { url: footerWhatsAppUrl } = buildWhatsAppUrl(SITE_CONFIG.whatsapp.defaultMessage);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FFFDF9] border-t border-[#E6DED2] py-14 text-[#29231E]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand & Philosophy Column */}
          <div className="md:col-span-5 space-y-4">
            <GravoraLogo variant="footer" />
            
            <p className="text-xs sm:text-sm text-[#71685F] font-light leading-relaxed max-w-sm mt-3">
              {SITE_CONFIG.philosophy}
            </p>

            <div className="text-xs text-[#4A2C18] space-y-1 pt-1 font-light">
              <p>• Founded by <strong>Rahul & Mohit</strong></p>
              <p>• Laser crafted on 3mm basswood with organic oil finishes</p>
              <p>• Handcrafted in India</p>
            </div>
          </div>

          {/* Catalog Categories */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#9A6428] font-bold">
              Collections
            </p>
            <ul className="space-y-2 text-xs text-[#71685F]">
              {CATEGORIES.filter((c) => c.id !== "all").slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      window.location.hash = "#shop";
                    }}
                    className="hover:text-[#9A6428] transition-colors text-left"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact & Policies */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#9A6428] font-bold">
              Studio Communication
            </p>
            <ul className="space-y-2.5 text-xs text-[#71685F]">
              <li className="flex items-center gap-2">
                <SiWhatsapp className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href={footerWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9A6428] font-mono text-[#29231E]"
                >
                  {SITE_CONFIG.whatsapp.displayNumber}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#9A6428] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-[#9A6428]"
                >
                  {SITE_CONFIG.contact.displayEmail}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#9A6428] shrink-0" />
                <span>{SITE_CONFIG.contact.hours}</span>
              </li>
              <li className="flex items-center gap-2">
                <SiInstagram className="w-3.5 h-3.5 text-[#E1306C] shrink-0" />
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9A6428]"
                >
                  {SITE_CONFIG.social.instagramHandle}
                </a>
              </li>
            </ul>

            <div className="pt-3 border-t border-[#E6DED2] text-[11px] text-[#71685F] space-y-1">
              <p>
                <strong>Delivery Policy:</strong> Calculated directly based on your PIN code.
              </p>
              <p>
                <strong>Custom Orders:</strong> Made-to-order personalized pieces are non-refundable once laser cut.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#E6DED2] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71685F] font-sans">
          <p>
            © {currentYear} Gravora. All rights reserved. Official tagline: <em>CRAFTED TO LEAVE A MARK.</em>
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="hover:text-[#9A6428] flex items-center gap-1.5 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
