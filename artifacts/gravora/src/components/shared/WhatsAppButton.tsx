import { SiWhatsapp } from "react-icons/si";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";

export function WhatsAppButton() {
  const { url } = buildWhatsAppUrl(SITE_CONFIG.whatsapp.defaultMessage);

  return (
    <aside aria-label="WhatsApp quick contact">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-30 flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full shadow-md hover:bg-[#1ebe5d] transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
        data-testid="floating-whatsapp-btn"
        aria-label="Chat with Gravora on WhatsApp"
      >
        <SiWhatsapp className="w-6 h-6" />
      </a>
    </aside>
  );
}