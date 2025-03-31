import Link from 'next/link';


export const metadata = {
    title: 'Order Successful - E-Commerce',
  };
  
  export default function SuccessPage() {
    return (
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold mb-4">🎉 Order Placed Successfully!</h1>
        <p className="text-lg mb-8">Thank you for your purchase!</p>
        <Link
          href="/products"
          className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }