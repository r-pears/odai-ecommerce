'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-base-200">
      <nav className="bg-base-100 shadow p-4">
        <div className="container mx-auto flex flex-wrap justify-between">
          <h1 className="text-lg sm:text-xl  font-bold">Admin Dashboard</h1>
          <div>
            <button
              onClick={() => router.push('/admin/product')}
              className="btn btn-sm btn-primary mr-2"
            >
              Products
            </button>
            <button onClick={handleLogout} className="btn btn-sm text-white btn-error">
              Logout
            </button>
          </div>
        </div>
      </nav>
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}