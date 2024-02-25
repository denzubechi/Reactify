// pages/onboarding.tsx
"use client"
// pages/onboarding.tsx
"use client"
import React, { useState } from 'react';
import axiosInstance from '../api/dashboard/instance';
import IsAuth from '../api/auth/isAuth';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo2 from '../../media/Frame 49.png';

const  OnboardingPage: React.FC = () => {
  const [newUsername, setNewUsername] = useState('');
  const [isUpdating, setIsUpdating] = useState(false); // State variable for tracking update status
  const toast = useToast();
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsUpdating(true); // Set updating status to true when form is submitted
      // Send the updated username to the API
      const response = await axiosInstance.put('/merchant/username', { username: newUsername });
      toast({
        title: 'Success',
        description: "updated successfully",
        status: 'success',
        duration: 5000,
        position:"top-right",
        isClosable: true,
      });

      // Reset the input field after submission
      router.push('/dashboard')
      setNewUsername('');
    } catch (error:any) {
      toast({
        title: 'Error',
        description: 'An error occured',
        status: 'error',
        position:"top-right",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsUpdating(false); // Set updating status back to false after submission
    }
  };

  return (
    <IsAuth>
   <div className="bg-gray-100">
    
   <div className="flex flex-col m-10  items-center h-screen">
        <Image
          className="h-10 w-auto lg:hidden"
          src={Logo2}
          alt="NestSite Logo"
          width={179.8}
          height={78.9}
        />
      <div className=" p-10 w-full bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-800">Update Username</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">New Username</label>
            <input
              type="text"
              id="username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your new username"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isUpdating ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isUpdating} // Disable button while updating
            >
              {isUpdating ? 'Updating...' : 'Update'}
            </button>
          </div>
        </form>
      </div>
    </div>
   </div>
    </IsAuth>
  );
};

export default  OnboardingPage;
