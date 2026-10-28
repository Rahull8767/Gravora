import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Shop", href: "#products" },
    { name: "Custom Orders", href: "#custom-order" },
    { name: "Bulk Orders", href: "#b2b" },
  ];

  const { url: generalWhatsAppUrl } = buildWhatsAppUrl(SITE_CONFIG.whatsapp.defaultMessage);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/80 py-3"
          : "bg-background/80 backdrop-blur-sm border-b border-border/40 py-3.5 sm:py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group text-foreground"
          data-testid="link-logo"
        >
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.18em] text-foreground uppercase">
            {SITE_CONFIG.name}
          </span>
        </a>

        {/* Desktop Nav: Minimal 3 Links */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-foreground transition-colors py-1"
                  data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop WhatsApp Action */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            size="sm"
            variant="ghost"
            className="h-8 px-3 rounded text-xs font-mono tracking-wider gap-2 text-foreground/90 hover:text-foreground hover:bg-white/5 border border-border/60"
            asChild
            data-testid="button-header-whatsapp"
          >
            <a href={generalWhatsAppUrl} target="_blank" rel="noopener noreferrer">
              <SiWhatsapp className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-2.5 rounded border border-border/60 flex items-center gap-1.5 text-xs font-mono text-foreground hover:bg-white/5"
            aria-label="Contact Gravora on WhatsApp"
          >
            <SiWhatsapp className="w-3.5 h-3.5 text-[#25D366]" />
            <span className="text-[11px]">Chat</span>
          </a>

          <button
            className="p-2 rounded border border-border/60 text-foreground hover:bg-white/5 min-w-[38px] min-h-[38px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[53px] bg-background/98 backdrop-blur-xl z-40 md:hidden animate-in fade-in duration-150 border-t border-border flex flex-col justify-between">
          <nav className="container mx-auto px-6 py-8">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-xl font-serif text-foreground hover:text-primary py-2.5 border-b border-border/30 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border/60 space-y-4">
              <Button
                className="w-full h-11 rounded bg-[#25D366] hover:bg-[#1ebe5d] text-white font-mono text-xs uppercase tracking-wider gap-2 justify-center"
                asChild
              >
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <SiWhatsapp className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </Button>

              <div className="text-[11px] font-mono text-muted-foreground text-center">
                <span>{SITE_CONFIG.contact.hours}</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}