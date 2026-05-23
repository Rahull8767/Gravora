import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UploadButton } from "../shared/UploadButton";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Laser engraving close-up" 
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center md:items-start text-center md:text-left gap-8 max-w-5xl">
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm md:text-base">
            Crafted Into Forever
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1]">
            Timeless <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Artistry</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl md:mx-0 font-light mt-6 leading-relaxed">
            Premium custom engraving and artistic printing on luxury wood and stone. Turn your emotional moments into tactile, enduring artifacts.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
          <Button size="lg" className="rounded-none px-8 font-sans tracking-widest uppercase" asChild data-testid="button-hero-primary">
            <a href="#custom-order">Create Custom Design</a>
          </Button>
          <UploadButton variant="outline" className="w-full sm:w-auto" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#products" className="text-muted-foreground hover:text-primary transition-colors p-2" aria-label="Scroll down" data-testid="link-scroll-down">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}