"use client";

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';

export default function CartContents() {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        getCartTotal
    } = useCart();

    const handleQuantityChange = (itemId: string, newQuantity: number) => {
        if (newQuantity < 1) return;
        updateQuantity(itemId, newQuantity);
    };

    if (cartItems.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-xl text-white mb-4">Your cart is empty</p>
                <Link
                    href="/products"
                    className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 text-black lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
                    {cartItems.map((item) => (
                        <div key={item.id} className="p-4 flex items-start gap-6">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={120}
                                height={120}
                                className="w-24 h-24 object-cover rounded"
                            />

                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-medium">{item.name}</h3>
                                        <p className="text-gray-500 mt-1">${item.price.toFixed(2)}</p>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="mt-4 flex items-center gap-4">
                                    <div className="flex items-center border rounded">
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                            className="px-3 py-1 hover:bg-gray-100 transition-colors"
                                        >
                                            −
                                        </button>
                                        <span className="px-4">{item.quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                            className="px-3 py-1 hover:bg-gray-100 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div className="text-lg font-semibold">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow p-6 h-fit">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                        <span>${getCartTotal().toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span className="text-gray-500">Calculated at checkout</span>
                    </div>

                    <div className="pt-4 border-t">
                        <div className="flex justify-between font-bold">
                            <span>Total</span>
                            <span>${getCartTotal().toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <Link href="/checkout">
                    <button className="w-full border bg-primary text-white py-3 rounded-md mt-6 hover:bg-primary-dark transition-colors cursor-pointer">
                        Proceed to Checkout
                    </button>
                </Link>

                <Link href="/products">
                    <button className="w-full border bg-primary text-white py-3 rounded-md mt-6 hover:bg-primary-dark transition-colors cursor-pointer">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    );
}