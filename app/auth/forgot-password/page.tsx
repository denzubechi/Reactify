"use client"
import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../media/Frame 46 (2).png';
import Logo2 from '../../../media/Frame 49.png';
import { IoArrowBackSharp } from "react-icons/io5";
import 'react-toastify/dist/ReactToastify.css';
import {   useToast} from '@chakra-ui/react';

const BACKEND_URL = process.env.BACKEND_URL as string;

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const toast = useToast();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BACKEND_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        toast({
          title: 'Success',
          description: "Password reset email sent. Check your email for instructions.",
          status: 'success',
          duration: 5000,
          position:"top-right",
          isClosable: true,
        });
        setCountdown(60);
      } else if (response.status === 401) {
        
        toast({
          title: 'Error',
          description: "Email not found. Please check your email address.",
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
        description: 'An error occurred. Please try again later.',
        status: 'error',
        duration: 5000,
        position:"top-right",
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resendEmailAction = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BACKEND_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        toast({
          title: 'Success',
          description: "Password reset email sent. Check your email for instructions.",
          status: 'success',
          duration: 5000,
          position:"top-right",
          isClosable: true,
        });
        setCountdown(60);
      } else if (response.status === 401) {
        toast({
          title: 'Error',
          description: "Email not found. Please check your email address.",
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
        description: 'An error occurred. Please try again later.',
        status: 'error',
        duration: 5000,
        position:"top-right",
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (countdown === null || countdown <= 0) {
      setCountdown(null);
    } else {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, setCountdown]);

  const buttonLabel = isSubmitting
    ? 'Submitting...'
    : countdown
    ? `Resend in (${countdown})`
    : 'Reset Password';

  const handleButtonAction = async () => {

    if(!email){
      toast({
        title: 'Error',
        description: "Please input an email address",
        status: 'error',
        duration: 5000,
        position:"top-right",
        isClosable: true,
      });
      return
    }
    if (isSubmitting || (countdown !== null && countdown > 0)) {
      return;
    }

    if (countdown === null || countdown === 0) {
      // Resend action
      await resendEmailAction();
    }
  };

  return (
    <>


      <main className="w-full flex">
        <div className="relative flex-1 hidden items-center justify-center h-screen bg-black lg:flex">
          <div className="relative z-10 w-full max-w-md">
            <Image
              className="h-13 w-auto"
              src={Logo}
              alt="NestSite Logo"
              width={179.8}
              height={78.9}
            />
            <div className=" mt-16 space-y-3">
              <h3 className="text-white text-3xl font-bold">
                Reset your password 
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
          <div className="w-full max-w-md space-y-8 px-4 text-gray-600 sm:px-0">
          <Link href="/auth/login">
            <IoArrowBackSharp className="w-10 h-10"/>
          </Link>
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
                   Forgot password
                </h3>
                <p className="">
                  Remember your password?{' '}
                  <a
                    href="/auth/login"
                    className="font-medium text-primary hover:text-indigo-500"
                  >
                    Log in
                  </a>
                </p>
              </div>
            </div>
            <div>
              Enter the email associated with your account and we&apos;ll email you a link to reset your password.
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="font-medium">Email address</label>
                <input
                  type="email"
                  required
                  value={email}
                  placeholder="Enter your email address"
                  onChange={handleEmailChange}
                  className="w-full mt-2 px-3 py-4 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
               
                />
              </div>
              <button
          type='submit'
          onClick={handleButtonAction}
          className={`flex w-full py-4 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
            ${isSubmitting || (countdown !== null && countdown > 0) ? 'bg-gray-400 cursor-not-allowed' : 'bg-black '}`}
          disabled={isSubmitting || (countdown !== null && countdown > 0)}
        >
          {buttonLabel}
        </button>
        </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default ForgotPassword;


