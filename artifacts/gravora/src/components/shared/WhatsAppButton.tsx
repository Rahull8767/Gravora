import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { MessageSquare } from "lucide-react";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";

export function WhatsAppButton() {
  const { url } = buildWhatsAppUrl(SITE_CONFIG.whatsapp.defaultMessage);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="WhatsApp quick contact"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2"
    >
      {/* Friendly hover badge on desktop */}
      <span
        className={`hidden sm:inline-block px-3 py-1.5 rounded-full bg-white text-[#29231E] border border-[#E6DED2] text-xs font-sans shadow-lg transition-all duration-200 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        Chat with Rahul & Mohit
      </span>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center justify-center w-13 h-13 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20bd5a] transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        data-testid="floating-whatsapp-btn"
        aria-label="Chat with Gravora on WhatsApp"
      >
        <SiWhatsapp className="w-6 h-6" />
      </a>
    </aside>
  );
}
