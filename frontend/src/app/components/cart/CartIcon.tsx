"use client";

import { useCart } from '@/context/CartContext';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function CartIcon() {
  const { itemCount } = useCart();

  if (itemCount === undefined) {
    console.error("itemCount is undefined. Check the CartContext implementation.");
  }
  return (
    <div className="flow-root">
      <div className="group -m-2 flex items-center p-2">
        <ShoppingCartIcon
          className="h-6 w-6 text-black group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-900 group-hover:text-gray-800">
          {itemCount}
        </span>
      </div>
    </div>
  );
}