'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useUser } from '../../context/UserContext'; 

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { setUser } = useUser();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    setUser(null); 
    router.push('/auth/login'); 
  };

  return (
    <div className="min-h-screen bg-base-200">
      {/* Navigation Bar */}
      <nav className="bg-base-100 shadow p-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <h1 className="text-lg sm:text-xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push('/auth/product')}
              className="btn btn-sm btn-primary"
              aria-label="Go to Products"
            >
              Products
            </button>
            <button
              onClick={handleLogout}
              className="btn btn-sm text-white btn-error"
              aria-label="Logout"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}