// components/isAuth.tsx
"use client"
import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Spinner } from '@chakra-ui/react';

interface IsAuthProps {
  children: ReactNode;
}

const IsAuth: React.FC<IsAuthProps> = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if window is defined to ensure it's not running on the server
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('reartify_token');
      console.log(token);
      // Redirect logic if token is not available
      if (!token) {
        router.push('/auth/login'); // Redirect to login page
      } else {
        // Token found, set loading to false to render the children
        setLoading(false);
      }
    }
  }, [router]);

  // While loading, display a spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

  // If not loading and token is present, render the children
  return <>{children}</>;
};

export default IsAuth;
