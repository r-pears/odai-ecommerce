"use client";

import { Product } from '@/lib/types/product';
import { useCart } from '@/context/CartContext';
import ImageGallery from './ImageGallery';
import { StarIcon } from '@heroicons/react/24/solid';

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  const { addToCart } = useCart();
  const rating = product.rating ?? 0;
  const inStock = product.stock > 0;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ImageGallery images={[product.image]} />
      
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-base-content">{product.name}</h1>
        
        <div className="text-2xl font-semibold text-primary">
          ${product.price.toFixed(2)}
        </div>

        {product.rating && (
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(rating) ? 'fill-current' : 'fill-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-500 text-sm">
              ({rating.toFixed(1)}/5.0)
            </span>
          </div>
        )}

        <p className="text-base-content/80">{product.description}</p>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleAddToCart}
            disabled={!inStock}
            className={`btn ${
              inStock 
                ? 'btn-primary hover:bg-primary-focus' 
                : 'btn-disabled'
            }`}
          >
            {inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Availability:</span>
            <span className={`${inStock ? 'text-success' : 'text-error'}`}>
              {inStock ? `${product.stock} in stock` : 'Backorder'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}