"use client";

import { Product } from '@/lib/types/product';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const rating = product.rating ?? 0; // Provide a default value of 0 if rating is undefined

  return (
    <div className="card bg-base-300 shadow-xl hover:shadow-2xl transition-shadow">
      <Link href={`/products/${product.id}`} className="block">
        <figure className="relative w-full h-48">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            className="rounded-md"
          />
        </figure>
      </Link>

      <div className="card-body">
        <Link
          href={`/products/${product.id}`}
          className="card-title text-lg font-semibold hover:text-primary"
        >
          {product.name}
        </Link>

        <div className="flex justify-between items-center mt-2 ">
          <span className="text-2xl font-bold text-white-900">
            ${product.price.toFixed(2)}
          </span>
          {product.stock > 0 ? (
            <span className="badge badge-success">In Stock</span>
          ) : (
            <span className="badge badge-error">Out of Stock</span>
          )}
        </div>

        <div className="mt-2 flex items-center">
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon
              key={index}
              className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-300">({product.rating})</span>
        </div>

        <div className="card-actions mt-4">
          <button
            onClick={() => addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              quantity: 1,
            })}
            disabled={product.stock === 0}
            className={`w-full mt-4 py-2 px-4 rounded-md transition-colors ${product.stock > 0
                ? 'bg-primary hover:bg-primary-dark text-white'
                : 'bg-gray-300 cursor-not-allowed text-gray-500'
              }`}
          >
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
}