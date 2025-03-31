import { Metadata } from 'next';
import CartContents from '../../components/cart/CartContents';

export const metadata: Metadata = {
  title: 'Shopping Cart - E-Commerce',
  description: 'Your shopping cart on E-Commerce',
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