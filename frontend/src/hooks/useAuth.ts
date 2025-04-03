import { useState } from 'react';
import axios from 'axios';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('isAdmin', 'true');
      return response.data;
    } catch (error: any) {
      setError(error.response?.data?.message || 'Invalid email or password');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};