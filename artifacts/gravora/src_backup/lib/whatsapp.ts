import { buildWhatsAppUrl, SITE_CONFIG } from "@/config/site";
import type { Product } from "@/data/products";

export interface ProductInquiryParams {
  product: Product;
  selectedSize?: string;
  selectedMaterial?: string;
  quantity?: number;
  customText?: string;
  hasFileAttached?: boolean;
  fileName?: string;
  specialInstructions?: string;
}

export function buildProductInquiry(params: ProductInquiryParams): { url: string; isConfigured: boolean } {
  const {
    product,
    selectedSize = product.availableSizes[0] || "Standard",
    selectedMaterial = product.primaryMaterial,
    quantity = 1,
    customText = "",
    hasFileAttached = false,
    fileName = "",
    specialInstructions = "",
  } = params;

  let message = `Hi Gravora! I'd like to enquire about ordering this item.\n\n`;
  message += `*Product:* ${product.title}\n`;
  message += `*Category:* ${product.categoryLabel}\n`;
  message += `*Selected Size:* ${selectedSize}\n`;
  message += `*Selected Material:* ${selectedMaterial}\n`;
  message += `*Quantity:* ${quantity} unit${quantity > 1 ? "s" : ""}\n`;

  if (customText.trim()) {
    message += `*Engraving Text:* "${customText.trim()}"\n`;
  }

  if (hasFileAttached) {
    message += `*Design/Photo File:* Ready to share (${fileName ? fileName : "will attach directly in this chat"})\n`;
  }

  if (specialInstructions.trim()) {
    message += `*Special Instructions:* ${specialInstructions.trim()}\n`;
  }

  message += `\nCould you please confirm pricing, customisation options, and the estimated crafting timeline?`;

  return buildWhatsAppUrl(message);
}

export interface CustomOrderInquiryParams {
  customerName?: string;
  ideaDescription: string;
  materialPreference: string;
  dimensions?: string;
  quantity?: number;
  hasDesignReady: boolean;
  specialNotes?: string;
}

export function buildCustomOrderInquiry(params: CustomOrderInquiryParams): { url: string; isConfigured: boolean } {
  const {
    customerName = "",
    ideaDescription,
    materialPreference,
    dimensions = "",
    quantity = 1,
    hasDesignReady,
    specialNotes = "",
  } = params;

  let message = `*NEW CUSTOM ENGRAVING ENQUIRY*\n`;
  message += `===============================\n\n`;

  if (customerName.trim()) {
    message += `*From:* ${customerName.trim()}\n`;
  }

  message += `*Concept / Idea:* ${ideaDescription.trim()}\n`;
  message += `*Preferred Material:* ${materialPreference}\n`;

  if (dimensions.trim()) {
    message += `*Approx. Dimensions:* ${dimensions.trim()}\n`;
  }

  message += `*Target Quantity:* ${quantity}\n`;
  message += `*Design File Status:* ${
    hasDesignReady ? "Yes, I have reference photos/vectors ready to attach" : "Need assistance with designing"
  }\n`;

  if (specialNotes.trim()) {
    message += `*Notes:* ${specialNotes.trim()}\n`;
  }

  message += `\nCould you please share your feasibility, material suggestions, and a quotation?`;

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

export interface GeneralContactParams {
  name: string;
  emailOrPhone: string;
  messageText: string;
}

export function buildGeneralContactInquiry(params: GeneralContactParams): { url: string; isConfigured: boolean } {
  const { name, emailOrPhone, messageText } = params;

  let message = `*GRAVORA STUDIO ENQUIRY*\n`;
  message += `----------------------------\n`;
  message += `*Name:* ${name.trim()}\n`;
  message += `*Contact:* ${emailOrPhone.trim()}\n`;
  message += `*Message:* ${messageText.trim()}\n\n`;
  message += `I'm reaching out through your website. Looking forward to discussing details!`;

  return buildWhatsAppUrl(message);
}
