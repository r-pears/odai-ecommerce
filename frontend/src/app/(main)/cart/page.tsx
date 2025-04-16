import { Metadata } from 'next';
import CartContents from '../../components/cart/CartContents';

export const metadata: Metadata = {
  title: 'Your Shopping Cart - Sellby Store',
  description: "Review the items in your shopping cart and proceed to checkout. Don’t miss out on your favorite products!",
  openGraph: {
    title: "Your Shopping Cart - Sellby Store",
    description: "Review the items in your shopping cart and proceed to checkout. Don’t miss out on your favorite products!",
    url: 'https://sellby.netlify.app/cart',
    siteName: 'Sellby Store',
    images: [
      {
        url: 'https://sellby.netlify.app/seo/cart.png',
        width: 1200,
        height: 630,
        alt: 'Sellby Store Shopping Cart',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Shopping Cart - Sellby Store',
    description: "Review the items in your shopping cart and proceed to checkout. Don’t miss out on your favorite products!",
    images: ['https://sellby.netlify.app/seo/cart.png'],
  },
};

// Make sure this is the default export
export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      <CartContents />
    </div>
  );
}