export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'Audio Equipment' | 'Physical Signals & Vinyl' | 'Wearables & Adornments' | 'Studio Utility';
  categorySlug: 'audio' | 'vinyl' | 'wearables' | 'utility';
  price: number;
  currency: string;
  stockStatus: 'In Stock' | 'Limited Drop' | 'Pre-Order';
  tagline: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
  primaryImage: string;
  gallery: string[];
  dimensions?: string;
  materials?: string;
  origin?: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    slug: 'a-01-headset',
    name: 'A-01 Studio Reference Headset',
    category: 'Audio Equipment',
    categorySlug: 'audio',
    price: 280,
    currency: '$',
    stockStatus: 'In Stock',
    tagline: 'Tactile acoustic precision built for deep studio listening.',
    description: 'Custom engineered in Seoul with 40mm beryllium drivers and memory foam acoustic ear cushions wrapped in full-grain lambskin leather.',
    specs: [
      { label: 'Drivers', value: '40mm Beryllium Dynamic' },
      { label: 'Frequency Response', value: '10Hz - 42,000Hz' },
      { label: 'Impedance', value: '32 Ohms' },
      { label: 'Weight', value: '290 grams' },
    ],
    primaryImage: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
      'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    ],
    materials: 'Anodized Aircraft Aluminum, Lambskin Leather, Memory Foam',
    dimensions: '190mm x 165mm x 80mm',
    origin: 'Seoul, South Korea',
    featured: true,
  },
  {
    id: 'prod-02',
    slug: 'orbit-signet-set',
    name: 'Orbit Signet Ring Set',
    category: 'Wearables & Adornments',
    categorySlug: 'wearables',
    price: 140,
    currency: '$',
    stockStatus: 'Limited Drop',
    tagline: 'Hand-cast solid 925 sterling silver signet rings with brushed tactile finish.',
    description: 'Set of two interlocking signet rings handcrafted in Seongsu-dong. Minimalist architectural geometry designed to be worn together or individually.',
    specs: [
      { label: 'Purity', value: 'Solid 925 Sterling Silver' },
      { label: 'Finish', value: 'Matte Brushed Silver' },
      { label: 'Craft', value: 'Hand-Cast in Seongsu Studio' },
    ],
    primaryImage: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    ],
    materials: 'Solid 925 Sterling Silver',
    origin: 'Seongsu, Seoul',
    featured: true,
  },
  {
    id: 'prod-03',
    slug: 'glasshouse-vinyl-lp',
    name: 'VALLEY — Glasshouse LP (Frosted Clear)',
    category: 'Physical Signals & Vinyl',
    categorySlug: 'vinyl',
    price: 48,
    currency: '$',
    stockStatus: 'Limited Drop',
    tagline: '180g heavyweight frosted clear vinyl recorded live on analog tape in Bukchon.',
    description: 'Limited edition 12-inch vinyl pressing of VALLEY debut LP. Includes 16-page 35mm film photography booklet and custom anti-static inner sleeve.',
    specs: [
      { label: 'Pressing', value: '180g Heavyweight Vinyl' },
      { label: 'Color', value: 'Frosted Clear Translucent' },
      { label: 'Packaging', value: '350gsm Gatefold Jacket + Film Booklet' },
    ],
    primaryImage: 'https://images.pexels.com/photos/9085380/pexels-photo-9085380.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&q=90',
    gallery: [
      'https://images.pexels.com/photos/9085380/pexels-photo-9085380.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1600&q=90',
    ],
    origin: 'Pressing in Germany / Assembly in Seoul',
    featured: true,
  },
  {
    id: 'prod-04',
    slug: 'french-terry-hoodie',
    name: 'French Terry Studio Heavyweight Hoodie',
    category: 'Wearables & Adornments',
    categorySlug: 'wearables',
    price: 120,
    currency: '$',
    stockStatus: 'In Stock',
    tagline: '480gsm custom French terry cotton with relaxed drop-shoulder cut.',
    description: 'Designed by ATMOS Studio for long studio sessions and cold Seoul nights. Double-lined hood, hidden phone pocket, and subtle tonal embroidery.',
    specs: [
      { label: 'Fabric Weight', value: '480 GSM French Terry' },
      { label: 'Composition', value: '100% Combed Organic Cotton' },
      { label: 'Fit', value: 'Relaxed Oversized Fit' },
    ],
    primaryImage: 'https://images.pexels.com/photos/8221405/pexels-photo-8221405.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.pexels.com/photos/8221405/pexels-photo-8221405.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    ],
    materials: '100% Organic Cotton',
    origin: 'Seoul, South Korea',
  },
  {
    id: 'prod-05',
    slug: 'analog-tape-keyring',
    name: 'Machined Anodized Brass Keyring & Capsule',
    category: 'Studio Utility',
    categorySlug: 'utility',
    price: 45,
    currency: '$',
    stockStatus: 'In Stock',
    tagline: 'CNC machined solid brass utility capsule for earplugs or guitar picks.',
    description: 'Machined from a single block of solid brass with knurled grip texture and waterproof rubber O-ring seal.',
    specs: [
      { label: 'Material', value: 'CNC Machined Brass' },
      { label: 'Water Rating', value: 'IPX7 Sealed O-Ring' },
      { label: 'Capacity', value: '2x Hi-Fi Earplugs or 4x Guitar Picks' },
    ],
    primaryImage: 'https://images.pexels.com/photos/2697608/pexels-photo-2697608.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.pexels.com/photos/2697608/pexels-photo-2697608.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    ],
    materials: 'Solid Machined Brass',
    origin: 'Incheon, South Korea',
  },
  {
    id: 'prod-06',
    slug: 'tactile-desk-pad',
    name: 'Natural Wool & Cork Studio Desk Pad',
    category: 'Studio Utility',
    categorySlug: 'utility',
    price: 65,
    currency: '$',
    stockStatus: 'In Stock',
    tagline: 'Acoustically damping felt wool desk surface with natural Portuguese cork backing.',
    description: 'Provides acoustic isolation for desktop synths, turntables, and laptops while providing a warm tactile workspace.',
    specs: [
      { label: 'Top Surface', value: '100% Merino Wool Felt (3mm)' },
      { label: 'Base', value: 'Natural Harvested Portuguese Cork' },
      { label: 'Dimensions', value: '900mm x 400mm' },
    ],
    primaryImage: 'https://images.pexels.com/photos/7778885/pexels-photo-7778885.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    gallery: [
      'https://images.pexels.com/photos/7778885/pexels-photo-7778885.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&q=85',
    ],
    materials: 'Merino Wool Felt, Portuguese Cork',
    origin: 'Seoul, South Korea',
  },
];
