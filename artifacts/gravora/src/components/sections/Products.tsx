export function Products() {
  const products = [
    {
      title: "Wood Engraving",
      desc: "Deep, precision laser etching on premium dark walnut and birch.",
      img: "/product-wood.png"
    },
    {
      title: "Stone Carving",
      desc: "Minimalist geometric designs etched into natural slate and marble.",
      img: "/product-stone.png"
    },
    {
      title: "Personalized Gifts",
      desc: "Luxury keepsake boxes and mementos crafted for special occasions.",
      img: "/product-gift.png"
    },
    {
      title: "Cafe Branding",
      desc: "Cohesive aesthetic wooden signs, menu boards, and coasters.",
      img: "/product-cafe.png"
    },
    {
      title: "Wall Decor",
      desc: "Intricate multi-layered wooden mandalas and art pieces.",
      img: "/product-decor.png"
    },
    {
      title: "Premium Keychains",
      desc: "Tactile everyday carry items mixing dark leather and engraved wood.",
      img: "/product-keychain.png"
    }
  ];

  return (
    <section id="products" className="py-24 md:py-32 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24 max-w-2xl">
          <h2 className="text-sm font-medium tracking-[0.2em] text-primary uppercase mb-4">Signature Collection</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Masterpieces in Material</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, i) => (
            <div 
              key={product.title} 
              className="group relative overflow-hidden bg-card border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              data-testid={`card-product-${i}`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-8 absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end">
                <h4 className="text-2xl font-serif font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{product.title}</h4>
                <p className="text-gray-300 font-light translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}