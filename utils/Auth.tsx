// utils/auth.js
import api from './isAuth';
import { useRouter } from 'next/router';

// Function to check user authentication
export const checkUserAuthentication = async () => {
  const router = useRouter();
  try {
    await api.get('/merchant/profile');
    // User is authenticated, you can handle this case as needed
  } catch (error) {
    // User is not authenticated, redirect to the login page
    router.push('/login');
  }
};
