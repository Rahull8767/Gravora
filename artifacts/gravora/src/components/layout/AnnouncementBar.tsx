import { Sparkles } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { SITE_CONFIG, buildWhatsAppUrl } from "@/config/site";

export function AnnouncementBar() {
  const { url } = buildWhatsAppUrl(SITE_CONFIG.whatsapp.defaultMessage);

  return (
    <div className="bg-[#704522] text-[#FFFDF9] py-2 px-4 text-xs font-sans border-b border-[#4A2C18]">
      <div className="container mx-auto max-w-6xl flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <Sparkles className="w-3.5 h-3.5 text-[#C48E4E]" />
          <span className="font-light tracking-wide">
            {SITE_CONFIG.announcement}
          </span>
          <span className="hidden md:inline text-[#EFE8DD]/40">•</span>
          <span className="hidden md:inline text-[#EFE8DD]/80">
            Handcrafted with precision laser artistry in India
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-[11px] text-[#EFE8DD]">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <SiWhatsapp className="w-3 h-3 text-[#25D366]" />
            <span>Direct WhatsApp Consultation</span>
          </a>
        </div>
      </div>
    </div>
  );
}
