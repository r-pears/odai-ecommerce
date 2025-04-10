import { jwtDecode } from 'jwt-decode';

export const getUserFromToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const decoded: { id: string; email: string; name?: string; exp: number } = jwtDecode(token);


    const currentTime = Date.now() / 1000; // Current time in seconds
    if (decoded.exp < currentTime) {
      localStorage.removeItem('token'); // Remove expired token
      return null;
    }
    return decoded;
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};