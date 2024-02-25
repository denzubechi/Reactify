"use client"
import React, { useState, ChangeEvent, FormEvent, useRef, useEffect,KeyboardEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import Logo from '../../../media/Frame 46 (2).png';
import Logo2 from '../../../media/Frame 49.png';
import { IoArrowBackSharp } from "react-icons/io5";
import Link from 'next/link';
import { RootState } from '../../../redux/store';
import axios from 'axios';
import backendUrl from '@/app/config/api';
import {   useToast} from '@chakra-ui/react';


const VerificationPage: React.FC = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const authState = useSelector((state: RootState) => state.auth) as any;
  const user = authState ? authState.user : null;
  const userEmail = user ? user.user.email : '';
  const toast = useToast();

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const dispatch = useDispatch();
  const router = useRouter()

  const [verifying, setVerifying] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);

  const handleResendClick = () => {
    handleResendVerificationCode();
  };

  const handleCodeInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (value === '') {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (index < code.length - 1 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && index > 0 && code[index] === '') {
      const newCode = [...code];
      newCode[index - 1] = '';
      setCode(newCode);

      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVerifying(true);

    const verificationCode = code.join('');
    console.log(verificationCode)
    try {
      const response = await axios.post(`${backendUrl}/merchant/auth/verify-code`, {
        email: userEmail,
        verificationCode,
      });

      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        toast({
          title: 'Success',
          description: "Email verified successfully, Please login to continue",
          status: 'success',
          duration: 5000,
          position:"top-right",
          isClosable: true,
        });
        router.push('/auth/login');
      } else if (response.status === 401) {
        toast({
          title: 'Error',
          description: 'Email not found. Please check your email address.',
          status: 'error',
          position:"top-right",
          duration: 5000,
          isClosable: true,
        });
      } else {
        
        toast({
          title: 'Error',
          description: 'An error occurred. Please try again later.',
          status: 'error',
          position:"top-right",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error during verification:', error);
      toast({
        title: 'Error',
        description: 'Error during verification. Please try again.',
        status: 'error',
        position:"top-right",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setVerifying(false);
    }
  };
  const handleResendVerificationCode = async () => {
    setResendDisabled(true);
    try {
      const response = await axios.post(`${backendUrl}/merchant/auth/resend-verification-code`, {
        email: userEmail,
      });

      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        
        toast({
          title: 'Success',
          description: "Verification code resent successfully",
          status: 'success',
          duration: 5000,
          position:"top-right",
          isClosable: true,
        });
        
      } else {
        toast({
          title: 'Error',
          description: response.data,
          status: 'error',
          position:"top-right",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error:any) {
      console.error('Error during resend:', error);
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        position:"top-right",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setResendDisabled(false);
    }
  };

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, code.length);
  }, [code]);

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
              <h3 className="text-white text-3xl font-bold">Account Verification</h3>
              <p className="text-gray-300">
                Create an account and get access to all features for 30-days, No credit card required.
              </p>
              <div className="flex items-center -space-x-2 overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <p className="text-sm text-gray-400 font-medium translate-x-5">Join 5.000+ users</p>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 my-auto h-[500px]"
          ></div>
        </div>
        <div className="flex-1 flex items-center justify-center h-screen sm-mt-0">
          <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
          <Link href="/auth/signup">
            <IoArrowBackSharp className="w-10 h-10"/>
          </Link>
            <div className="">
              <div className="flex items-center justify-center " style={{ marginTop: '-1rem' }}>
                <Image
                  className="h-10 w-auto hidden"
                  src={Logo2}
                  alt="NestSite Logo"
                  width={179.8}
                  height={78.9}
                />
              </div>
              <div className="mt-5 space-y-2">
                <h3 className="text-gray-800 text-4xl font-bold sm:text-3xl">Verify your email address</h3>
                <p className="">
                 We have sent an email to {' '}
                <span className='text-primary'>{userEmail} </span>
                with a code, you can enter the code below to verify your email address.
                </p>
              </div>
            </div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="flex space-x-2">
                {code.map((value, index) => (
                  <React.Fragment key={index}>
                    <input
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      maxLength={1}
                      className="w-12 h-12  text-3xl text-center border border-gray-300 rounded"
                      value={value}
                      onChange={(e) => handleCodeInputChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                    {index < code.length - 1 && (
                      <span key={`separator-${index}`} className="text-3xl mx-1">
                        -
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <button
                type="submit"
                disabled={verifying}
                className={`w-full px-4 py-4 text-white font-medium hover:bg-primary active:bg-primary rounded-lg duration-150 bg-black`}
              >
                {verifying ? 'Verifying...' : 'Verify account'}
              </button>
              <button
                onClick={handleResendClick}
                disabled={resendDisabled}
                className={`w-full px-4 py-4 text-blue font-medium 00 rounded-lg duration-150 `}
              >
                <span className='underline text-primary'>Resend Verification Code</span>
              </button>

              <div className="text-center">
                Didnt receive the email? This might be the Why <br/>
                <span className="underline">Show reason</span>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default VerificationPage;
