import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Shop", href: "#products" },
    { name: "Materials", href: "#materials" },
    { name: "Pricing", href: "#pricing" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-2xl font-serif font-bold tracking-widest text-primary uppercase flex flex-col leading-none" data-testid="link-logo">
          <span>GRAVORA</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium tracking-widest uppercase text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                  data-testid={`link-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Socials & Cart */}
        <div className="hidden md:flex items-center gap-6">
          <a href="https://instagram.com/gravora" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-instagram">
            <SiInstagram className="w-5 h-5" />
          </a>
          
          {/* Cart Icon */}
          <div className="relative cursor-pointer text-muted-foreground hover:text-primary transition-colors flex items-center" data-testid="nav-cart">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </div>
        </div>

        {/* Mobile Group */}
        <div className="flex md:hidden items-center gap-4">
          {/* Cart Icon Mobile */}
          <div className="relative cursor-pointer text-muted-foreground hover:text-primary transition-colors flex items-center mr-2" data-testid="nav-cart-mobile">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-background z-40 md:hidden animate-in fade-in duration-300 border-t border-white/5">
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
            <ul className="flex flex-col gap-6 text-xl font-serif text-foreground">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10">
              <a href="https://instagram.com/gravora" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <SiInstagram className="w-6 h-6" />
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <SiWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 glass-panel border-t border-white/5 pb-safe">
      <div className="flex justify-around items-center p-3 text-[10px] uppercase tracking-widest font-medium text-muted-foreground">
        <a href="#home" className="flex flex-col items-center gap-1 hover:text-primary transition-colors p-2" data-testid="link-bottom-home">
          Home
        </a>
        <a href="#products" className="flex flex-col items-center gap-1 hover:text-primary transition-colors p-2" data-testid="link-bottom-shop">
          Shop
        </a>
        <a href="#materials" className="flex flex-col items-center gap-1 hover:text-primary transition-colors p-2" data-testid="link-bottom-materials">
          Materials
        </a>
        <a href="#pricing" className="flex flex-col items-center gap-1 hover:text-primary transition-colors p-2" data-testid="link-bottom-pricing">
          Pricing
        </a>
      </div>
    </div>
  );
}