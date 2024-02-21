"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../media/Frame 46 (2).png';
import Logo2 from '../../../media/Frame 49.png';
import { login } from '../../../redux/features/auth-slice';
import { RootState } from '../../../redux/store';
import 'react-toastify/dist/ReactToastify.css';
import axios, { AxiosResponse } from 'axios';
import { AxiosError } from 'axios';
import { FiEye ,FiEyeOff} from "react-icons/fi";
import {   useToast} from '@chakra-ui/react';

const BACKEND_API_URL = process.env.BACKEND_API_URL as string;

interface FormData {
  email: string;
  password: string;
}
interface ApiResponse {
  message: string;
}

export default function Login() {

  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [sessionId, setSessionId] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const toast = useToast();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const [isSigningIn, setSigningIn] = useState(false); // Track loading state
  const [isSigningInG, setSigningInG] = useState(false); // Track loading state

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };
  
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
  };
  
  const handleLoginFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSigningIn) {
      return;
    }

    setSigningIn(true);

    try {
      const response: AxiosResponse = await axios.post(
        `http://localhost:5000/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        const data = response.data;
        const merchant = data.merchant
        dispatch(login({ userInfo: data.merchant }) as any);
        toast({
          title: 'Success',
          description: "Login Successful",
          status: 'success',
          duration: 5000,
          position:"top-right",
          isClosable: true,
        });
        if(merchant.username){
            router.push('/dashboard')
        }else{
          router.push('/onboarding/username')
        }
      } else {
        // Handle other error codes if needed
        const errorData = response.data.message;
        toast({
          title: 'Error',
          description: errorData,
          status: 'error',
          position:"top-right",
          duration: 5000,
          isClosable: true,
        });
        console.log(response.data.message);
      }
    } catch (error:any) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;

        if (axiosError.response && axiosError.response.status === 401) {
          // Cast the response.data to the expected interface
          const responseData = axiosError.response.data as ApiResponse;
          const errorMessage = responseData.message || 'Unauthorized';
          toast({
            title: 'Error',
            description: errorMessage,
            status: 'error',
            duration: 5000,
            position:"top-right",
            isClosable: true,
          });
          console.error('Unauthorized Error:', errorMessage);
        } else {
          toast({
            title: 'Error',
            description: "Something went wrong",
            status: 'error',
            duration: 5000,
            position:"top-right",
            isClosable: true,
          });
          console.error('An error occurred:', axiosError);
        }
      } else {
        // Handle non-Axios errors if necessary
        toast({
          title: 'Error',
          description: error,
          status: 'error',
          duration: 5000,
          position:"top-right",
          isClosable: true,
        });
        console.error('An error occurred:', error);
      }
    } finally {
      setSigningIn(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setSigningInG(true);
    try {
      const response = window.open(`${BACKEND_API_URL}/auth/google`, '_self');
    } catch (error:any) {
      toast({
        title: 'Error',
        description: error,
        status: 'error',
        duration: 5000,
        position:"top-right",
        isClosable: true,
      });
      console.log(error);
    }
  };

  useEffect(() => {
    if (error) {
      toast({
        title: 'Error',
        description: error,
        status: 'error',
        duration: 5000,
        position:"top-right",
        isClosable: true,
      });
    }
  }, [error]);

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
              Find Innovative arts made from scrap and sell Digital arts... 
              </h3>
              <p className="text-gray-300">
                Create an account and get access to all features for 30-days, No
                credit card required.
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
        <div className="flex-1 flex items-center bg-white justify-center h-screen sm-mt-0">
          <div className="w-full max-w-md space-y-8 px-4 text-gray-600 sm:px-0">
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
                   Welcome back👋
                </h3>
                <p className="">
                  Do not have an account?{' '}
                  <a
                    href="/auth/signup"
                    className="font-medium text-primary hover:text-indigo-500"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
            <form
              onSubmit={handleLoginFormSubmit}
              className="space-y-5"
            >
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full mt-2 px-3 py-4 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
               
                />
              </div>
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
                        value={formData.password}
                        onChange={handlePasswordChange}
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
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 bg-white focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 block text-sm font-medium leading-5 text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    href="/auth/forgot-password"
                    className="font-semibold text-primary hover:text-indigo-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <button
                type="submit"
                className={`w-full px-4 py-4 text-white font-medium  rounded-lg duration-150 bg-black ${
                  isSigningIn ? 'cursor-wait' : ''
                }`}
                disabled={isSigningIn}
              >
                {isSigningIn ? 'Logging in...' : 'Log in'}
              </button>
            </form>
           {/** <div className="relative">
              <span className="block w-full h-px bg-gray-300"></span>
              <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                OR
              </p>
            </div> */}
           {/**
            *  <button
              className={`w-full flex items-center justify-center px-4 py-4 text-black font-medium border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100 duration-150 ${
                isSigningInG ? 'cursor-wait' : ''
              }`}
              onClick={handleGoogleSignIn}
              disabled={isSigningInG}
            >
             <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_17_40)">
                                    <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                    <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                    <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                    <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_40">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
              &nbsp;Continue with Google
            </button>
            */}
          </div>
        </div>
      </main>
    </>
  );
}
