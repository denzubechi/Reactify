"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from '../../../media/Frame 46 (2).png';
import Logo2 from '../../../media/Frame 49.png';
import { FiEye ,FiEyeOff} from "react-icons/fi";
import {   useToast} from '@chakra-ui/react';
import backendUrl from '@/app/config/api';

const ResetPassword: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const resetToken = searchParams.get('resetToken');

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: 'Error',
        description: "Passwords don't match. Please try again.",
        status: 'error',
        duration: 5000,
        position:"top-right",
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      if (!resetToken || Array.isArray(resetToken)) {
    
        toast({
          title: 'Error',
          description: "Invalid or missing reset token.",
          status: 'error',
          duration: 5000,
          position:"top-right",
          isClosable: true,
        });
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(`${backendUrl}/merchant/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resetToken, password }),
      });

      if (response.status === 200) {
        toast({
          title: 'Success',
          description: "Password reset successfully.",
          status: 'success',
          duration: 5000,
          position:"top-right",
          isClosable: true,
        });
        router.push('/auth/login');
      } else if (response.status === 400) {
        toast({
          title: 'Error',
          description: "Invalid or expired reset token.",
          status: 'error',
          duration: 5000,
          position:"top-right",
          isClosable: true,
        });
      } else {
        toast({
          title: 'Error',
          description: "An error occurred. Please try again later.",
          status: 'error',
          duration: 5000,
          position:"top-right",
          isClosable: true,
        });
      }
    } catch (error:any) {
      console.error('Error sending request:', error);
      toast({
        title: 'Error',
        description: error,
        status: 'error',
        duration: 5000,
        position:"top-right",
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="w-full flex">
        <div className="relative flex-1 hidden items-center justify-center h-screen bg-black lg:flex">
          <div className="relative z-10 w-full max-w-md">
            <Image
              className="h-10 w-auto"
              src={Logo}
              alt="NestSite Logo"
              width={179.8}
              height={78.9}
            />
            <div className=" mt-16 space-y-3">
              <h3 className="text-white text-3xl font-bold">
              Set New Password 
              </h3>
              <p className="text-gray-300">
              Don&apos;t worry! It happens to the best of us. If you&apos;ve forgotten your password, we&apos;ve got you covered.
            Provide the email address associated with your account. We&apos;ll send you a secure link to reset your password.
              </p>
              <div className="flex items-center -space-x-2 overflow-hidden">
              <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" className="w-10 h-10 rounded-full border-2 border-white" />
                            <p className="text-sm text-gray-400 font-medium translate-x-5">
                                Join 5.000+ users
                            </p>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 my-auto h-[500px]"
           /** style={{
              background:
                'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)',
              filter: 'blur(118px)',
            }} */
          ></div>
        </div>
        <div className="flex-1 flex items-center bg-white  justify-center h-screen sm-mt-0">
          <div className="w-full max-w-md space-y-8 px-4  text-gray-600 sm:px-0">
          
            <div className="">
            <div className="flex  py-8"style={{marginTop:"-1rem"}}>{/**items-center justify-center */}
              <Image
                className="h-10 w-auto lg:hidden"
                src={Logo2}
                alt="NestSite Logo"
                width={179.8}
                height={78.9}
              />
            </div>
              <div className="mt-5 space-y-2">
                <h3 className="text-gray-800 text-4xl font-bold sm:text-3xl">
                   Set New Password 🔒
                </h3>
                <p className="">
               
                Enter your new password to complete your password reset.

                </p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                    <label className="font-medium">Password</label>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        autoComplete="new-password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full mt-2 px-3 py-4 pr-8 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                      {/* Step 4: Add show/hide password icon */}
                      <div
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <FiEyeOff className="text-gray-500 mt-2" />
                        ) : (
                          <FiEye className="text-gray-500 mt-2" />
                        )}
                      </div>
                    </div>
              </div>
              <div>
                <label className="font-medium">Confirm Password</label>
                <div className="relative">
                <input
                  required
                  value={confirmPassword}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  onChange={handleConfirmPasswordChange}
                  className="w-full mt-2 px-3 py-4 pr-8 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
                 <div
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <FiEyeOff className="text-gray-500 mt-2" />
                        ) : (
                          <FiEye className="text-gray-500 mt-2" />
                        )}
                      </div>
              </div>
              </div>
              <button
                type="submit"
                className={`flex w-full py-4 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm
                  ${isSubmitting ? 'bg-gray-700 cursor-not-allowed' : 'bg-black'}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex justify-center items-center">
                    <div className="animate-spin mr-2">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        className="text-white border-t-2 border-b-2 border-indigo-500 border-solid rounded-full"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                    Submitting...
                  </div>
                ) : (
                  'Save'
                )}
              </button>
        </form>
          </div>
        </div>
      </main>
    
    </>
  );
};

export default ResetPassword;
