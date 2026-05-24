import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-24 md:pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold tracking-widest text-primary uppercase">GRAVORA</h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
              Crafted Into Forever. Premium custom engraving and artistic printing on luxury wood and stone.
            </p>
            {/* Socials */}
            <div className="flex gap-4 pt-2">
              <a href="https://instagram.com/gravora" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all" aria-label="Instagram">
                <SiInstagram size={18} />
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all" aria-label="WhatsApp">
                <SiWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground font-light">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Shop</a></li>
              <li><a href="#materials" className="hover:text-primary transition-colors">Materials</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="space-y-4 bg-card border border-white/5 p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-1">Have a custom concept?</h4>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                Upload your graphics, vector layouts, or photo designs and our artisans will bring them to life.
              </p>
            </div>
            <Button size="sm" className="w-full rounded-none tracking-widest uppercase text-xs" asChild>
              <a href="#contact">Upload Your Design</a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gravora Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}