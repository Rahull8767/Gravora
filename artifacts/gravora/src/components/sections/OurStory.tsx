import { Heart, Sparkles, UserCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function OurStory() {
  return (
    <section id="our-story" className="py-16 sm:py-24 bg-[#F8F5EF] border-b border-[#E6DED2]">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="bg-white rounded-3xl border border-[#E6DED2] p-8 sm:p-14 shadow-sm space-y-8 text-center relative overflow-hidden">
          {/* Subtle floral/star accent */}
          <div className="w-12 h-12 rounded-full bg-[#F8F5EF] border border-[#E6DED2] flex items-center justify-center mx-auto text-[#9A6428]">
            <Sparkles className="w-5 h-5" />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#9A6428] font-semibold">
              Behind the Brand
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#29231E]">
              The Gravora Story
            </h2>
          </div>

          {/* Official Core Story Copy */}
          <div className="max-w-2xl mx-auto space-y-5 text-sm sm:text-base text-[#71685F] leading-relaxed font-light">
            <p className="text-lg sm:text-xl font-serif italic text-[#4A2C18] leading-relaxed">
              “Gravora began with a simple idea: everyday materials can become something extraordinary when creativity and care come together.”
            </p>

            <p>
              Founded by <strong className="font-semibold text-[#29231E]">Rahul and Mohit</strong>, Gravora explores precision engraving, layered wooden creations, and meaningful gifts designed to be cherished.
            </p>

            <p className="text-xs sm:text-sm text-[#71685F]">
              Every creation starts as natural, laser-compatible basswood. Through careful vector slicing, 10W diode laser cutting, and patient hand assembly, we turn ordinary sheets of wood into intricate three-dimensional keepsakes that tell personal stories.
            </p>
          </div>

          {/* Founders Pill */}
          <div className="pt-6 border-t border-[#E6DED2] flex flex-wrap items-center justify-center gap-6 text-xs text-[#29231E]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9A6428]" />
              <span>Founded by <strong>Rahul & Mohit</strong></span>
            </div>
            <div className="flex items-center gap-2 text-[#71685F]">
              <span>Handcrafted in India</span>
            </div>
            <div className="flex items-center gap-2 text-[#71685F]">
              <span>Tagline: <em>CRAFTED TO LEAVE A MARK.</em></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
