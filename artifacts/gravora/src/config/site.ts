/**
 * Gravora Central Brand & Business Configuration
 * Official Brand Identity:
 * Tagline: CRAFTED TO LEAVE A MARK.
 * Founders: Rahul & Mohit
 */

export interface SiteConfig {
  name: string;
  tagline: string;
  founders: string;
  philosophy: string;
  description: string;
  announcement: string;
  location: string;
  machineNote: string;
  whatsapp: {
    phoneNumber: string; // 10-12 digits without symbols
    displayNumber: string;
    defaultMessage: string;
  };
  contact: {
    email: string;
    displayEmail: string;
    hours: string;
  };
  social: {
    instagram: string;
    instagramHandle: string;
  };
  seo: {
    title: string;
    description: string;
    siteUrl: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: "Gravora",
  tagline: "CRAFTED TO LEAVE A MARK.",
  founders: "Rahul & Mohit",
  philosophy:
    "We do not simply engrave objects. We turn ordinary materials into meaningful pieces that people want to keep, display, and gift.",
  description:
    "Handcrafted wooden creations, 3D layered Little Worlds art, personalized keepsakes, and thoughtfully designed gifts made to leave a mark.",
  announcement: "Thoughtfully crafted. Beautifully remembered.",
  location: "India",
  machineNote:
    "Every wooden piece is crafted using our Creality Falcon 10W precision laser on 3mm laser-compatible basswood plywood and hand-finished with organic oils.",

  whatsapp: {
    phoneNumber: import.meta.env.VITE_WHATSAPP_PHONE || "919876543210",
    displayNumber: "+91 98765 43210",
    defaultMessage: "Hello Gravora! I would like to enquire about your handcrafted collection.",
  },

  contact: {
    email: "contact@gravora.in",
    displayEmail: "contact@gravora.in",
    hours: "Mon – Sat: 10:00 AM – 7:00 PM IST",
  },

  social: {
    instagram: "https://instagram.com/gravora.studio",
    instagramHandle: "@gravora.studio",
  },

  seo: {
    title: "Gravora — Crafted to Leave a Mark | Handcrafted Gifting & 3D Layered Art",
    description:
      "Handcrafted wooden creations, 3D layered Little Worlds art, personalized keepsakes, and thoughtfully designed gifts. Connect directly with founders Rahul & Mohit on WhatsApp.",
    siteUrl: "https://gravora.in",
  },
};

/**
 * Builds official WhatsApp click-to-chat URL with properly encoded message.
 */
export function buildWhatsAppUrl(message: string): { url: string; isConfigured: boolean } {
  const phone = SITE_CONFIG.whatsapp.phoneNumber.replace(/[^0-9]/g, "");
  const isConfigured = phone.length >= 10 && phone !== "919876543210" && phone !== "919999999999";
  const encodedText = encodeURIComponent(message.trim());
  const url = `https://wa.me/${phone}?text=${encodedText}`;
  return { url, isConfigured };
}
