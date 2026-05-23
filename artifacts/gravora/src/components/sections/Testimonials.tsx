import { Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      text: "The detail on the wooden portrait we ordered for our anniversary was breathtaking. It literally brought my husband to tears.",
      author: "Priya S.",
      role: "Gift Buyer"
    },
    {
      text: "Gravora handled all the wooden signage for my new cafe. It gave the place exactly the premium, tactile feel I wanted.",
      author: "Rohan M.",
      role: "Cafe Owner"
    },
    {
      text: "I uploaded a very rough sketch of a family crest. They turned it into a stunning piece of slate art. True artisans.",
      author: "Arjun K.",
      role: "Custom Order"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">Words from Patrons</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="p-8 border border-white/5 bg-card relative">
              <div className="flex gap-1 mb-6 text-primary">
                {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p className="text-foreground font-light mb-8 italic">"{review.text}"</p>
              <div>
                <p className="font-serif font-bold text-foreground">{review.author}</p>
                <p className="text-sm text-muted-foreground tracking-widest uppercase">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}