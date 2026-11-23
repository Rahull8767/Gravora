import { buildWhatsAppUrl } from "@/config/site";
import type { Product } from "@/data/products";

export interface WhatsAppOrderInquiryParams {
  product: Product;
  quantity: number;
  selectedVariant?: string;
  personalizationText?: string;
  deliveryPin?: string;
  specialNotes?: string;
}

/**
 * Builds the exact official enquiry format specified in Section 9 of the Master Prompt:
 *
 * Hello Gravora! I would like to enquire about:
 *
 * Product: [Product Name]
 * Product Code: [ID]
 * Quantity: [Qty]
 * Selected Variant: [Variant]
 * Personalization: [Text or 'None']
 * Delivery PIN: [PIN]
 *
 * Please confirm availability, final price, shipping, and delivery time.
 */
export function buildProductWhatsAppInquiry(
  params: WhatsAppOrderInquiryParams
): { url: string; isConfigured: boolean } {
  const {
    product,
    quantity = 1,
    selectedVariant = product.availableVariants?.[0] || "Standard",
    personalizationText = "",
    deliveryPin = "",
    specialNotes = "",
  } = params;

  let message = `Hello Gravora! I would like to enquire about:\n\n`;
  message += `Product: ${product.title}\n`;
  message += `Product Code: ${product.code}\n`;
  message += `Quantity: ${quantity}\n`;
  message += `Selected Variant: ${selectedVariant}\n`;
  message += `Personalization: ${
    personalizationText.trim() ? personalizationText.trim() : "None"
  }\n`;
  message += `Delivery PIN: ${deliveryPin.trim() ? deliveryPin.trim() : "To be confirmed"}\n`;

  if (specialNotes.trim()) {
    message += `Notes: ${specialNotes.trim()}\n`;
  }

  message += `\nPlease confirm availability, final price, shipping, and delivery time.`;

  return buildWhatsAppUrl(message);
}

export interface WishlistInquiryParams {
  items: Array<{
    product: Product;
    quantity: number;
    variant?: string;
  }>;
  deliveryPin?: string;
}

export function buildWishlistWhatsAppInquiry(
  params: WishlistInquiryParams
): { url: string; isConfigured: boolean } {
  const { items, deliveryPin = "" } = params;

  let message = `Hello Gravora! I have selected multiple pieces from your collection and would like to check availability and shipping:\n\n`;

  items.forEach((item, index) => {
    message += `${index + 1}. ${item.product.title} (${item.product.code})\n`;
    message += `   Qty: ${item.quantity} | Variant: ${item.variant || "Standard"}\n`;
    message += `   Price: ${item.product.startingPrice}\n\n`;
  });

  if (deliveryPin.trim()) {
    message += `Delivery PIN: ${deliveryPin.trim()}\n`;
  }

  message += `Please confirm overall availability, combined shipping, and delivery timeline.`;

  return buildWhatsAppUrl(message);
}

export interface CustomBespokeInquiryParams {
  conceptDescription: string;
  preferredMaterial: string;
  approxDimensions?: string;
  quantity?: number;
  deliveryPin?: string;
  hasArtworkReady?: boolean;
}

export function buildBespokeInquiry(
  params: CustomBespokeInquiryParams
): { url: string; isConfigured: boolean } {
  const {
    conceptDescription,
    preferredMaterial,
    approxDimensions = "",
    quantity = 1,
    deliveryPin = "",
    hasArtworkReady = false,
  } = params;

  let message = `Hello Gravora! I have a custom bespoke creation request:\n\n`;
  message += `Concept: ${conceptDescription.trim()}\n`;
  message += `Material: ${preferredMaterial}\n`;

  if (approxDimensions.trim()) {
    message += `Approx Dimensions: ${approxDimensions.trim()} (Max 150×150mm)\n`;
  }

  message += `Quantity: ${quantity}\n`;
  message += `Design Artwork: ${
    hasArtworkReady ? "Yes, ready to attach image/vector" : "Need help with design"
  }\n`;

  if (deliveryPin.trim()) {
    message += `Delivery PIN: ${deliveryPin.trim()}\n`;
  }

  message += `\nPlease share feasibility, recommendations, and pricing.`;

  return buildWhatsAppUrl(message);
}

export interface BulkInquiryParams {
  businessName: string;
  contactPerson: string;
  productType: string;
  estimatedQuantity: number | string;
  deadline?: string;
  brandingRequirements?: string;
}

export function buildBulkInquiry(params: BulkInquiryParams): { url: string; isConfigured: boolean } {
  const {
    businessName,
    contactPerson,
    productType,
    estimatedQuantity,
    deadline = "",
    brandingRequirements = "",
  } = params;

  let message = `*GRAVORA B2B / BULK ORDER ENQUIRY*\n`;
  message += `===================================\n\n`;
  message += `*Business / Organisation:* ${businessName.trim()}\n`;
  message += `*Contact Person:* ${contactPerson.trim()}\n`;
  message += `*Requirement:* ${productType}\n`;
  message += `*Estimated Quantity:* ${estimatedQuantity} units\n`;

  if (deadline.trim()) {
    message += `*Target Deadline:* ${deadline.trim()}\n`;
  }

  if (brandingRequirements.trim()) {
    message += `*Branding Details:* ${brandingRequirements.trim()}\n`;
  }

  message += `\nPlease provide volume quotation tiers, material samples, and lead-time estimates.`;

  return buildWhatsAppUrl(message);
}

