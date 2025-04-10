"use client";

import { useCart } from '@/context/CartContext';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
export default function CartModal({ onClose }: { onClose: () => void }) {
  const { cartItems, removeFromCart, getCartTotal } = useCart();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-end "
      onClick={handleBackdropClick} 
    >
      <div className="w-full sm:w-96 bg-white shadow-lg rounded-lg p-6 absolute top-16 right-0 sm:right-4 border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg text-black font-bold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-black">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2 text-black">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start justify-between gap-4 group">
                  {/* Product Image and Info */}
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="h-12 w-12 object-cover rounded"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium truncate">{item.name}</h3>
                      <p className="text-black text-sm">
                        {item.quantity} × ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Price and Remove Button */}
                  <div className="flex flex-col items-end gap-1">
                    <p className="font-medium text-sm">
                      ${(item.quantity * item.price).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="mt-6 pt-4 border-t text-black">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Subtotal:</span>
                <span className="font-medium">${getCartTotal().toFixed(2)}</span>
              </div>

              <div className="space-y-2 text-black">
                <Link
                  href="/cart"
                  onClick={onClose}
                  className="block w-full bg-primary text-white py-2 text-center rounded-md hover:bg-primary-dark transition-colors text-sm"
                >
                  View Full Cart
                </Link>

                <Link
                  href="/checkout"
                  onClick={onClose}
                  className="block w-full border border-primary text-primary py-2 text-center rounded-md hover:bg-primary/10 transition-colors text-sm"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}