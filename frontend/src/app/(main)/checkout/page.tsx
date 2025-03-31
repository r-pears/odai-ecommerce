'use client';

import { useCart } from '@/context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/checkout/CheckoutForm';
import OrderSummary from '../../components/checkout/OrderSummary';
import Link from 'next/link';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function CheckoutPage() {
  const { cartItems, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link href="/products" className="text-primary hover:underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:col-span-1">
          <Elements stripe={stripePromise}>
            <CheckoutForm total={getCartTotal()} />
          </Elements>
        </div>
        
        <div className="lg:col-span-1">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}