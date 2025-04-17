"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroPro() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100); // Simulate lazy loading
        return () => clearTimeout(timer);
    }, []);
    return (
        <div
            className="hero min-h-screen"
            role="region"
            aria-labelledby="hero-heading"
            style={{
                backgroundImage: isLoaded
                    ? "url(/images/heropro.jpg)"
                    : "url(/images/heropro-placeholder.jpg)",
            }}
        >
            <div className="hero-overlay bg-opacity-60 bg-black"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h2 className="mb-5 text-5xl font-bold">Discover Exclusive Deals</h2>
                    <p className="mb-5">
                        Shop the latest trends in fashion, electronics, and more. Enjoy unbeatable prices and fast delivery!

                    </p>
                    <Link href="#all-products">
                        <button className="btn btn-primary" aria-label="View all products">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
