import { useState, useEffect } from "react";
import { Menu, X, Search, Heart } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { GravoraLogo } from "@/components/shared/GravoraLogo";
import { useWishlist } from "@/components/shared/WishlistContext";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
}

export function Navbar({ onOpenWishlist, onOpenSearch }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Shop", href: "#shop" },
    { name: "Little Worlds", href: "#little-worlds" },
    { name: "Personalized Gifts", href: "#personalized" },
    { name: "Desk & Decor", href: "#desk-decor" },
    { name: "Our Story", href: "#our-story" },
    { name: "Contact", href: "#contact" },
  ];

  const { url: generalWhatsAppUrl } = buildWhatsAppUrl(SITE_CONFIG.whatsapp.defaultMessage);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#E6DED2] shadow-sm py-2.5"
          : "bg-[#FFFDF9]/90 backdrop-blur-sm border-b border-[#E6DED2]/60 py-3.5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex items-center justify-between">
        {/* Brand Logo with Official G Monogram */}
        <a href="#home" className="group" data-testid="link-logo">
          <GravoraLogo variant="header" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          <ul className="flex items-center gap-6 text-[13px] font-sans font-medium text-[#71685F]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[#9A6428] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#9A6428] hover:after:w-full after:transition-all"
                  data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#71685F] hover:text-[#9A6428] hover:bg-[#F8F5EF] rounded-full transition-colors"
            aria-label="Search products"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            className="p-2 text-[#71685F] hover:text-[#9A6428] hover:bg-[#F8F5EF] rounded-full transition-colors relative"
            aria-label={`Wishlist with ${count} saved items`}
          >
            <Heart className={`w-4 h-4 ${count > 0 ? "fill-[#9A6428] text-[#9A6428]" : ""}`} />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#9A6428] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </button>

          {/* Enquire on WhatsApp CTA */}
          <Button
            size="sm"
            className="h-9 px-4 rounded-lg text-xs font-sans font-medium gap-2 bg-[#9A6428] text-white hover:bg-[#704522] shadow-sm transition-all"
            asChild
            data-testid="button-header-whatsapp"
          >
            <a href={generalWhatsAppUrl} target="_blank" rel="noopener noreferrer">
              <SiWhatsapp className="w-3.5 h-3.5 text-white" />
              <span>Enquire on WhatsApp</span>
            </a>
          </Button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex lg:hidden items-center gap-1.5">
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#71685F] hover:text-[#29231E] rounded-full"
            aria-label="Search catalog"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenWishlist}
            className="p-2 text-[#71685F] hover:text-[#29231E] rounded-full relative"
            aria-label="View saved pieces"
          >
            <Heart className={`w-4 h-4 ${count > 0 ? "fill-[#9A6428] text-[#9A6428]" : ""}`} />
            {count > 0 && (
              <span className="absolute 0 top-0 right-0 bg-[#9A6428] text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </button>

          <a
            href={generalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#25D366] hover:bg-[#F8F5EF] rounded-full"
            aria-label="WhatsApp"
          >
            <SiWhatsapp className="w-4 h-4" />
          </a>

          <button
            className="p-2 rounded-lg text-[#29231E] hover:bg-[#F8F5EF]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[57px] bg-[#FFFDF9]/98 backdrop-blur-xl z-40 lg:hidden border-t border-[#E6DED2] flex flex-col justify-between p-6 animate-in fade-in duration-200">
          <nav className="space-y-4">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9A6428]">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-xl font-serif font-medium text-[#29231E] hover:text-[#9A6428] py-2 border-b border-[#E6DED2]/40 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-6 border-t border-[#E6DED2] space-y-3">
            <Button
              className="w-full h-11 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium flex items-center justify-center gap-2 rounded-xl"
              asChild
            >
              <a href={generalWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>
            </Button>
            <p className="text-center text-xs text-[#71685F]">
              Handcrafted in India by Rahul & Mohit
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
