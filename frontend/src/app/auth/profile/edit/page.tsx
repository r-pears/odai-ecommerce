'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUserFromToken } from '@/hooks/useAuth';
import axios from 'axios';

export default function EditProfilePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = getUserFromToken();
    if (!userData) {
      router.push('/auth/login'); // Redirect to login if not authenticated
    } else {
      setFormData({ name: userData.name || '', email: userData.email || '', password: '' });
      setLoading(false);
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Form Data:', formData); // Debugging

      const token = localStorage.getItem('token');
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/users/profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Profile updated:', response.data);
      router.push('/auth/profile'); // Redirect to profile page after successful update
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to update profile');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="New Password (optional)"
                value={formData.password}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}