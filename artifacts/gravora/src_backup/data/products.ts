/**
 * Gravora Product Catalog & Materials Data
 * Single source of truth for products, materials, and portfolio gallery items.
 */

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: "wood" | "stone" | "gifts" | "wall-decor" | "keychains" | "business";
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  startingPrice: string; // Transparent starting indication or "Quote on Request"
  priceNote: string;
  primaryMaterial: string;
  availableMaterials: string[];
  availableSizes: string[];
  img: string;
  additionalImages?: string[];
  customisationOptions: {
    allowsText: boolean;
    allowsPhotoUpload: boolean;
    allowsDate: boolean;
    textPlaceholder?: string;
  };
  whatsIncluded: string[];
  craftingTimeline: string;
  featured?: boolean;
}

export const CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "wood", label: "Wood Art" },
  { id: "stone", label: "Stone Carving" },
  { id: "gifts", label: "Personalised Gifts" },
  { id: "wall-decor", label: "Wall Decor" },
  { id: "keychains", label: "Keychains & EDC" },
  { id: "business", label: "Bulk & Business" },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "wood-portrait",
    slug: "personalised-wood-portrait",
    title: "Personalised Wooden Photo Portrait",
    category: "wood",
    categoryLabel: "Wood Art",
    shortDesc: "High-contrast precision laser-etched photographs on solid natural hardwood.",
    fullDesc:
      "Transform meaningful family portraits, couple photographs, or commemorative moments into enduring hardwood art. We prepare your photograph for optimal contrast and laser-burn the image directly into seasoned hardwood, finished with organic protective oils.",
    startingPrice: "From ₹1,299",
    priceNote: "Starting price for 6x8” portrait. Scales with dimension and wood selection.",
    primaryMaterial: "Seasoned Teak Wood",
    availableMaterials: ["Teak Wood", "Mango Wood", "Birch Wood"],
    availableSizes: ["Compact (6x8”)", "Standard (8x10”)", "Statement (10x14”)", "Custom Dimensions"],
    img: "/product-wood.png",
    additionalImages: ["/gallery-1.png", "/material-wood.png"],
    customisationOptions: {
      allowsText: true,
      allowsPhotoUpload: true,
      allowsDate: true,
      textPlaceholder: "Names, heartfelt quote, or commemorative message",
    },
    whatsIncluded: [
      "Custom laser-etched hardwood panel",
      "Solid wooden or metal tabletop display stand",
      "Protective velvet backing pads",
      "Artisan care instruction card",
    ],
    craftingTimeline: "Crafted & dispatched within 4–6 business days",
    featured: true,
  },
  {
    id: "slate-plaque",
    slug: "custom-slate-stone-plaque",
    title: "Split-Face Natural Slate Stone Plaque",
    category: "stone",
    categoryLabel: "Stone Carving",
    shortDesc: "Chiseled natural slate with crisp, contrasting laser engraving for homes and memorials.",
    fullDesc:
      "Handcrafted from heavy, natural split-face slate stone with organic rough-hewn edges. The deep laser engraving reveals a striking chalk-white contrast against dark stone. Ideal for house nameplates, anniversary plaques, and memorial pieces.",
    startingPrice: "From ₹1,499",
    priceNote: "Starting price for 6x6” slate plaque. Final quote depends on size & stand type.",
    primaryMaterial: "Natural Slate Stone",
    availableMaterials: ["Natural Slate Stone", "Black Granite", "Kota Stone"],
    availableSizes: ["Desktop (6x6”)", "Medium (8x8”)", "Large (10x10”)", "Custom Architectural Size"],
    img: "/product-stone.png",
    additionalImages: ["/gallery-2.png"],
    customisationOptions: {
      allowsText: true,
      allowsPhotoUpload: true,
      allowsDate: true,
      textPlaceholder: "Family crest, monogram, or house address text",
    },
    whatsIncluded: [
      "Engraved natural split-face slate plaque",
      "Heavy-duty display stand or wall mounting fixtures",
      "Weather-resistant protective stone sealer",
      "Secure shock-absorbing packaging",
    ],
    craftingTimeline: "Crafted & dispatched within 5–7 business days",
    featured: true,
  },
  {
    id: "keepsake-box",
    slug: "luxury-wooden-keepsake-box",
    title: "Handcrafted Wooden Keepsake Chest",
    category: "gifts",
    categoryLabel: "Personalised Gifts",
    shortDesc: "Solid hardwood keepsake box with custom engraved lid, joinery, and brass accents.",
    fullDesc:
      "A timeless repository for treasured letters, jewellery, and mementos. Each box features interlocked edge joinery, a personalized engraved wooden lid, solid brass hinges, and a soft felt-lined interior.",
    startingPrice: "From ₹1,799",
    priceNote: "Includes custom top engraving. Specialized compartment layouts quoted on request.",
    primaryMaterial: "Solid Mango Wood",
    availableMaterials: ["Solid Mango Wood", "Teak Wood"],
    availableSizes: ["Standard (7x5x3.5”)", "Large (9x7x4.5”)", "Heirloom (12x9x5”)"],
    img: "/product-gift.png",
    customisationOptions: {
      allowsText: true,
      allowsPhotoUpload: true,
      allowsDate: true,
      textPlaceholder: "Couple initials, wedding date, or custom dedication text",
    },
    whatsIncluded: [
      "Custom laser-engraved solid hardwood box",
      "Fitted solid brass hardware and closure",
      "Velvet-lined protective interior base",
      "Wood nourishment wax sample",
    ],
    craftingTimeline: "Crafted & dispatched within 5–7 business days",
    featured: true,
  },
  {
    id: "wall-decor",
    slug: "sacred-geometry-wooden-mandala",
    title: "Layered Wooden Mandala Wall Art",
    category: "wall-decor",
    categoryLabel: "Wall Decor",
    shortDesc: "Intricate multi-layered architectural wooden art creating three-dimensional depth.",
    fullDesc:
      "Precision laser-cut and hand-assembled layered art. Multiple sheets of contrasting hardwood veneers are stacked to create meditative geometric and floral mandalas that cast natural shadows in ambient light.",
    startingPrice: "From ₹2,499",
    priceNote: "Base price for 12x12” 4-layer piece. Large sizes & custom vector designs quoted on request.",
    primaryMaterial: "Layered Birch & Walnut Veneer",
    availableMaterials: ["Birch & Teak Wood", "Birch & Walnut Veneer"],
    availableSizes: ["Accent (12x12”)", "Statement (18x18”)", "Feature Wall (24x24”)"],
    img: "/product-decor.png",
    customisationOptions: {
      allowsText: true,
      allowsPhotoUpload: false,
      allowsDate: false,
      textPlaceholder: "Optional subtle reverse-side dedication inscription",
    },
    whatsIncluded: [
      "Layered multi-depth wooden artwork",
      "Pre-installed concealed wall bracket",
      "Alignment and mounting hardware",
      "Microfiber polishing cloth",
    ],
    craftingTimeline: "Crafted & dispatched within 6–8 business days",
  },
  {
    id: "leather-keychain",
    slug: "tactile-wood-leather-keychain",
    title: "Handcrafted Wood & Distressed Leather Keychain",
    category: "keychains",
    categoryLabel: "Keychains & EDC",
    shortDesc: "Everyday carry keychain pairing custom laser-carved hardwood and full-grain leather.",
    fullDesc:
      "Designed for tactile luxury in your pocket. Features a laser-engraved hardwood core riveted to heavy vegetable-tanned leather and a solid brass split ring that patinas beautifully with use.",
    startingPrice: "From ₹499",
    priceNote: "Single piece pricing. Bulk corporate gifting tiers available upon request.",
    primaryMaterial: "Hardwood & Full-Grain Leather",
    availableMaterials: ["Teak Wood & Tan Leather", "Teak Wood & Dark Brown Leather"],
    availableSizes: ["Standard EDC (3.5 x 1.25”)"],
    img: "/product-keychain.png",
    customisationOptions: {
      allowsText: true,
      allowsPhotoUpload: false,
      allowsDate: true,
      textPlaceholder: "Initials, name, vehicle number, or special date",
    },
    whatsIncluded: [
      "1x Custom engraved wood & leather keychain",
      "Solid brass heavy-gauge split ring",
      "Individual craft paper presentation pouch",
    ],
    craftingTimeline: "Crafted & dispatched within 3–5 business days",
  },
  {
    id: "coaster-set",
    slug: "bespoke-wood-stone-coasters",
    title: "Bespoke Engraved Table Coaster Suite",
    category: "business",
    categoryLabel: "Bulk & Business",
    shortDesc: "Cohesive natural wood or stone coasters crafted for hospitality and corporate gifting.",
    fullDesc:
      "Protect your furniture while reinforcing brand identity or home aesthetics. Available in raw Kota stone, polished black granite, or seasoned teak wood. Each piece is laser-etched and backed with non-slip cork/felt.",
    startingPrice: "From ₹899",
    priceNote: "Starting price for set of 4. Volume discounts for cafe & restaurant orders.",
    primaryMaterial: "Natural Kota Stone & Hardwood",
    availableMaterials: ["Kota Stone", "Black Granite", "Teak Wood"],
    availableSizes: ["Set of 4 (3.75x3.75”)", "Set of 6 with Holder", "Commercial Bulk (10+ Sets)"],
    img: "/product-cafe.png",
    customisationOptions: {
      allowsText: true,
      allowsPhotoUpload: true,
      allowsDate: false,
      textPlaceholder: "Cafe logo, family name monogram, or custom geometric pattern",
    },
    whatsIncluded: [
      "Engraved coaster set (selected count & material)",
      "Non-scratch surface protection pads on base",
      "Matching wooden storage holder box (with Set of 6)",
    ],
    craftingTimeline: "Crafted & dispatched within 4–6 business days (bulk timelines discussed on WhatsApp)",
  },
];

export interface MaterialInfo {
  name: string;
  type: "wood" | "stone";
  headline: string;
  durability: string;
  finish: string;
  recommendedFor: string;
  img: string;
}

export const MATERIALS_DATA: MaterialInfo[] = [
  {
    name: "Teak Wood",
    type: "wood",
    headline: "Dense, Golden-Brown Hardwood with Natural Oils",
    durability: "Exceptional resistance to warping, moisture, and aging.",
    finish: "Smooth warm honey-brown finish with distinct straight grain.",
    recommendedFor: "Photo portraits, keepsake chests, and heritage signage.",
    img: "/material-wood.png",
  },
  {
    name: "Mango Wood",
    type: "wood",
    headline: "Sustainable Hardwood with Dynamic Swirling Grain",
    durability: "High density with organic multi-tonal wood character.",
    finish: "Warm golden to dark amber with tactile natural texture.",
    recommendedFor: "Personalised gift boxes, serving platters, and coaster sets.",
    img: "/product-wood.png",
  },
  {
    name: "Natural Slate Stone",
    type: "stone",
    headline: "Rugged Split-Face Stone with Crisp Contrast",
    durability: "Weather-proof, scratch-resistant, and completely fire-retardant.",
    finish: "Natural dark matte charcoal with fine split-face texture.",
    recommendedFor: "Nameplates, outdoor memorials, and contemporary desk art.",
    img: "/product-stone.png",
  },
  {
    name: "Black Granite",
    type: "stone",
    headline: "Mirror-Polished Volcanic Stone for Permanent Art",
    durability: "Maximum durability; impervious to UV exposure and moisture.",
    finish: "High-gloss deep black offering ultra-sharp bright engraving contrast.",
    recommendedFor: "Trophies, corporate commemorative plaques, and architecture.",
    img: "/gallery-2.png",
  },
  {
    name: "Kota Stone",
    type: "stone",
    headline: "Earthy Natural Limestone with Minimalist Tactility",
    durability: "Fine-grained, non-porous, and naturally cool to the touch.",
    finish: "Matte olive-green to grey stone surface with organic character.",
    recommendedFor: "Modern cafe coasters, paperweights, and tactile art panels.",
    img: "/product-cafe.png",
  },
  {
    name: "Birch & Walnut Veneers",
    type: "wood",
    headline: "Precision Multi-Layered Woods for 3D Art",
    durability: "High structural rigidity when bonded in multi-tier assemblies.",
    finish: "Clean contrasting layers highlighting precise micro-cuts.",
    recommendedFor: "Layered mandalas, architectural wall decor, and vector art.",
    img: "/product-decor.png",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "Gifts" | "Cafe & B2B" | "Wall Decor" | "Stone Art";
  material: string;
  img: string;
  aspect: string;
  linkedProductId?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Anniversary Hardwood Photo Panel",
    category: "Gifts",
    material: "Teak Wood",
    img: "/gallery-1.png",
    aspect: "aspect-[3/4]",
    linkedProductId: "wood-portrait",
  },
  {
    id: "g2",
    title: "Split-Face Slate Crest Plaque",
    category: "Stone Art",
    material: "Natural Slate",
    img: "/gallery-2.png",
    aspect: "aspect-[4/3]",
    linkedProductId: "slate-plaque",
  },
  {
    id: "g3",
    title: "Artisan Hardwood Portrait",
    category: "Gifts",
    material: "Mango Wood",
    img: "/product-wood.png",
    aspect: "aspect-square",
    linkedProductId: "wood-portrait",
  },
  {
    id: "g4",
    title: "Architectural Nameplate",
    category: "Stone Art",
    material: "Black Granite",
    img: "/product-stone.png",
    aspect: "aspect-[3/4]",
    linkedProductId: "slate-plaque",
  },
  {
    id: "g5",
    title: "Sacred Geometry Wall Sculpture",
    category: "Wall Decor",
    material: "Multi-Layer Birch",
    img: "/product-decor.png",
    aspect: "aspect-square",
    linkedProductId: "wall-decor",
  },
  {
    id: "g6",
    title: "Monogrammed Keepsake Chest",
    category: "Gifts",
    material: "Mango Wood & Brass",
    img: "/product-gift.png",
    aspect: "aspect-[4/3]",
    linkedProductId: "keepsake-box",
  },
  {
    id: "g7",
    title: "Hospitality Coaster Suite",
    category: "Cafe & B2B",
    material: "Kota Stone & Teak",
    img: "/product-cafe.png",
    aspect: "aspect-[3/4]",
    linkedProductId: "coaster-set",
  },
  {
    id: "g8",
    title: "Hardwood & Patina Leather Keyring",
    category: "Gifts",
    material: "Teak Wood & Leather",
    img: "/product-keychain.png",
    aspect: "aspect-square",
    linkedProductId: "leather-keychain",
  },
];
