import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { Mail, Clock, ArrowUp } from "lucide-react";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { url: footerWhatsAppUrl } = buildWhatsAppUrl(SITE_CONFIG.whatsapp.defaultMessage);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border/60 py-12 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-serif text-xl font-bold tracking-[0.18em] text-foreground uppercase block">
              {SITE_CONFIG.name}
            </span>
            <p className="text-xs text-muted-foreground font-light leading-relaxed max-w-sm">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Minimal Navigation */}
          <div className="md:col-span-3 space-y-2.5">
            <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-primary font-medium">
              Navigation
            </p>
            <ul className="space-y-1.5 text-xs text-muted-foreground font-light">
              <li>
                <a href="#products" className="hover:text-foreground transition-colors">
                  Shop Products
                </a>
              </li>
              <li>
                <a href="#custom-order" className="hover:text-foreground transition-colors">
                  Custom Orders
                </a>
              </li>
              <li>
                <a href="#b2b" className="hover:text-foreground transition-colors">
                  Bulk & Corporate Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-2.5">
            <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-primary font-medium">
              Studio Communication
            </p>
            <ul className="space-y-2 text-xs text-muted-foreground font-light">
              <li className="flex items-center gap-2">
                <SiWhatsapp className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href={footerWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  {SITE_CONFIG.whatsapp.displayNumber}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {SITE_CONFIG.contact.displayEmail}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{SITE_CONFIG.contact.hours}</span>
              </li>
              <li className="flex items-center gap-2">
                <SiInstagram className="w-3.5 h-3.5 text-primary shrink-0" />
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  {SITE_CONFIG.social.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-muted-foreground font-mono">
          <p>
            © {currentYear} {SITE_CONFIG.name}. Handcrafted in India.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}