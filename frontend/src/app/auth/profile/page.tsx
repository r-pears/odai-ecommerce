'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromToken } from '../../../hooks/useAuth' 

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<{ id: string; email: string; name?: string } | null>(null); // Added `name` to the type
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = getUserFromToken();
    if (!userData) {
      setLoading(false);
      router.push('/auth/login'); // Redirect to login if not authenticated
    } else {
      setUser(userData);
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token
    router.push('/auth/login'); // Redirect to login page
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) return null;
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <div className="mb-4">
          <p className="text-lg">
            <span className="font-bold">Name:</span> {user.name || 'N/A'}
          </p>
          <p className="text-lg">
            <span className="font-bold">Email:</span> {user.email}
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleLogout}
            className="btn btn-error text-white"
          >
            Logout
          </button>
          <button
            onClick={() => router.push('/auth/profile/edit')}
            className="btn btn-primary"
          >
            Edit Profile
          </button>
          <button
              onClick={() => router.push('/auth/product')}
              className="btn btn-secondary"
            >
              Go to Products
            </button>
        </div>
      </div>
    </div>
  </div>
  );
}