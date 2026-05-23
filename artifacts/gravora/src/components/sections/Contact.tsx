import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { UploadButton } from "../shared/UploadButton";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Sent Successfully",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-card border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-background border border-white/5 overflow-hidden flex flex-col md:flex-row">
          
          <div className="p-10 md:p-16 md:w-1/2 flex flex-col justify-center bg-zinc-950 relative">
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
            
            <div className="relative z-10">
              <h2 className="text-sm font-medium tracking-[0.2em] text-primary uppercase mb-4">Start a Project</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">Crafted Into <br/><span className="text-primary">Forever.</span></h3>
              <p className="text-muted-foreground font-light mb-8 max-w-sm leading-relaxed">
                Turn your ideas into timeless art. Whether it's a single heartfelt gift or an entire branding suite, let's create something enduring.
              </p>
              
              <div className="space-y-2 mt-auto">
                <p className="text-sm text-foreground">hello@gravora.studio</p>
                <p className="text-sm text-foreground">+91 99999 99999</p>
              </div>
            </div>
          </div>

          <div className="p-10 md:p-16 md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Name</label>
                <Input 
                  id="name" 
                  required 
                  className="bg-transparent border-white/10 rounded-none h-12 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary" 
                  placeholder="Your name"
                  data-testid="input-contact-name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  className="bg-transparent border-white/10 rounded-none h-12 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary" 
                  placeholder="you@example.com"
                  data-testid="input-contact-email"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Project Details</label>
                <Textarea 
                  id="message" 
                  required 
                  className="bg-transparent border-white/10 rounded-none min-h-[120px] focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary resize-y" 
                  placeholder="Tell us about what you want to create..."
                  data-testid="input-contact-message"
                />
              </div>

              <div className="pt-2">
                <UploadButton variant="outline" className="w-full mb-6" />
                <Button 
                  type="submit" 
                  className="w-full rounded-none h-12 font-sans tracking-widest uppercase"
                  disabled={isSubmitting}
                  data-testid="button-contact-submit"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}