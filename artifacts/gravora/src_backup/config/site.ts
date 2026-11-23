/**
 * Gravora Central Configuration
 * Update business details, WhatsApp Business number, and social links here.
 */

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  location: string;
  // WhatsApp Business Number (country code + number without +, spaces, or dashes)
  // e.g., "919876543210" for India.
  whatsapp: {
    phoneNumber: string; // Set your active 10-12 digit WhatsApp business number here
    displayNumber: string; // Formatted for display
    defaultMessage: string;
  };
  contact: {
    email: string; // Business email address
    displayEmail: string;
    hours: string; // Operating/response hours
  };
  social: {
    instagram: string; // e.g. https://instagram.com/gravorastudio
    instagramHandle: string;
  };
  seo: {
    title: string;
    description: string;
    siteUrl: string;
    ogImage: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: "Gravora",
  tagline: "Crafted Into Forever",
  description:
    "Personalised wooden portraits, custom stone carving, bespoke gifts, and branded merchandise handcrafted with laser precision in India.",
  location: "India",

  whatsapp: {
    // IMPORTANT: Replace this with your actual WhatsApp Business phone number (digits only, including country code).
    // Can also be set via VITE_WHATSAPP_PHONE environment variable.
    phoneNumber: import.meta.env.VITE_WHATSAPP_PHONE || "919876543210",
    displayNumber: "+91 98765 43210",
    defaultMessage: "Hi Gravora! I'd like to enquire about a custom engraving.",
  },

  contact: {
    // IMPORTANT: Replace with your verified email address.
    email: "contact@gravora.in",
    displayEmail: "contact@gravora.in",
    hours: "Mon – Sat: 10:00 AM – 7:00 PM IST",
  },

  social: {
    instagram: "https://instagram.com/gravora.studio",
    instagramHandle: "@gravora.studio",
  },

  seo: {
    title: "Gravora — Crafted Into Forever | Custom Wood & Stone Engraving",
    description:
      "Personalised wooden portraits, stone carving, custom plaques, bespoke gifts, and business merchandise. Connect directly with our artisans via WhatsApp.",
    siteUrl: "https://gravora.in",
    ogImage: "/hero-bg.png",
  },
};

/**
 * Helper to build an official WhatsApp click-to-chat URL.
 * Encodes messages safely and validates phone configuration.
 */
export function buildWhatsAppUrl(message: string): { url: string; isConfigured: boolean } {
  const phone = SITE_CONFIG.whatsapp.phoneNumber.replace(/[^0-9]/g, "");
  const isConfigured = phone.length >= 10 && phone !== "919876543210" && phone !== "919999999999";
  
  const encodedText = encodeURIComponent(message.trim());
  const url = `https://wa.me/${phone}?text=${encodedText}`;

  return { url, isConfigured };
}
