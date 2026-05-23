export function Materials() {
  return (
    <section className="py-24 bg-card border-y border-white/5 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card"></div>
        <img src="/material-wood.png" alt="Wood texture background" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative aspect-[4/5] border border-white/10 overflow-hidden">
              <img 
                src="/material-wood.png" 
                alt="Wood engraving detail" 
                className="w-full h-full object-cover scale-105" 
              />
              <div className="absolute inset-0 border-[20px] border-background/20 pointer-events-none"></div>
            </div>
          </div>
          
          <div className="max-w-xl">
            <h2 className="text-sm font-medium tracking-[0.2em] text-primary uppercase mb-4">The Canvas</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">Uncompromising Materials</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-serif font-bold text-foreground mb-3 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  Dark Walnut & Birch
                </h4>
                <p className="text-muted-foreground font-light leading-relaxed pl-11">
                  Sourced for density and grain consistency. When struck by our precision lasers, these woods produce a rich, dark burn with unparalleled detail fidelity.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-serif font-bold text-foreground mb-3 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  Natural Slate
                </h4>
                <p className="text-muted-foreground font-light leading-relaxed pl-11">
                  Cold to the touch, heavy in the hand. The tactile contrast between the rough natural edge and the sharp, bright engraved lines creates striking modern pieces.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-serif font-bold text-foreground mb-3 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  Solid Brass Hardware
                </h4>
                <p className="text-muted-foreground font-light leading-relaxed pl-11">
                  Used in our premium gifts and keychains. We avoid cheap alloys. Our hardware develops a beautiful patina over time, aging alongside your engraved piece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}