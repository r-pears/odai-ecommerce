'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, formData);
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token); // Store JWT token
      router.push('/auth/profile'); // Redirect to home page
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center mb-4" id='login-heading'>
            Login
          </h1>
          {error && (<p className="text-red-500 text-center mb-4" aria-live="polite">
            {error}
          </p>
          )}
          <form onSubmit={handleSubmit} role="form" aria-labelledby="login-heading">
            <div className="form-control mb-4">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full"
                aria-required="true"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="input input-bordered w-full"
                aria-required="true"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full" aria-label="Submit login form">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}