'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function OrderSummary() {
  const { cartItems, getCartTotal } = useCart();

  return (
    <div className="bg-white text-black p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <Image
              src={item.image}
              alt={item.name}
              width={64}
              height={64}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-500">
                {item.quantity} × ${item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t">
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${getCartTotal().toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}