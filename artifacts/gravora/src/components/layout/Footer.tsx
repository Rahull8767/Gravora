import { SiInstagram, SiWhatsapp } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-serif font-bold tracking-widest text-primary uppercase mb-2">GRAVORA</h2>
            <p className="text-sm text-muted-foreground font-light">Crafted Into Forever.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://instagram.com/gravora" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all" aria-label="Instagram">
              <SiInstagram size={18} />
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all" aria-label="WhatsApp">
              <SiWhatsapp size={18} />
            </a>
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