'use client';


import Image from "next/image";
import Link from "next/link";




export default function Hero() {
    return (
      <section className="bg-base-200 mb-16">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                Discover Your Perfect Style
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-600">
                Explore our premium collection of clothing and accessories curated for your unique personality
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Link href="/products" className="btn btn-primary px-8 py-3 text-lg">
                  Shop Now
                </Link>
                <Link href="/sale" className="btn btn-outline px-8 py-3 text-lg">
                  On Sale
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="md:w-1/2">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/hero.jpg"
                  alt="Fashion Collection"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
