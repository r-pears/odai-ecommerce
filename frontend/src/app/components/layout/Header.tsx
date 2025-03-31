"use client";

import { useState } from 'react';
import Link from 'next/link';
import CartIcon from '../cart/CartIcon';
import CartModal from '../cart/CartModal';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Sellby
          </Link>

          {/* Navigation and Cart */}
          <div className="flex items-center gap-6">
            <Link 
              href="/products" 
              className="hidden sm:block text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Products
            </Link>
            
            <div className="flex items-center gap-4">
              <Link
                href="/cart"
                className="hidden sm:block text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                View Cart
              </Link>
              
              <button 
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <CartIcon />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Cart Modal */}
      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
    </header>
  );
}