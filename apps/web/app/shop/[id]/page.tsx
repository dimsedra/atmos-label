import { PRODUCTS } from '../../../data/shop';
import { ShopSlugClient } from './ShopSlugClient';

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id || p.slug === id);

  return <ShopSlugClient product={product} />;
}
