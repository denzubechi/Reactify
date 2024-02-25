"use client"
// Import necessary modules from 'react' and other packages
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from '../../../media/Frame 46 (2).png';
import Logo2 from '../../../media/Frame 49.png';
import { FcGoogle } from 'react-icons/fc';
import { register } from '@/redux/features/auth-slice';
import { RootState } from '../../../redux/store';
import { FiEye ,FiEyeOff} from "react-icons/fi";
import axios from 'axios';
import {   useToast} from '@chakra-ui/react';
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from 'axios';
import backendUrl from '@/app/config/api';




interface ApiResponse {
  message: string;
  // Add other properties if present in the response data
}
// Define a utility function for handling class names
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// Define the SignUp functional component
export default function SignUp() {
  const [agreed, setAgreed] = useState(false);
  const dispatch = useDispatch();
  const router =useRouter();
  const toast = useToast();


  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [isSigningIn, setSigningIn] = useState(false);
  const [isSigningInG, setSigningInG] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Step 3: Add event handler to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    /**confirmPassword: '', */
  });

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSigningIn(true);
  
   /**
    *  if (formData.password !== formData.confirmPassword) {
      toast('Passwords do not match.', { type: 'error' });
      setSigningIn(false);
      return;
    }
    */
  
    const user = {
      email: formData.email,
      password: formData.password,
    };
  
    try {
      const response = await axios.post(`${backendUrl}/merchant/auth/register`, user);
      if (response.status === 201) {
        const email = user.email
        console.log(email)
        localStorage.setItem('email',email)
        toast({
          title: 'Success',
          description: "Signup Successful,Check your email for verification.",
          status: 'success',
          duration: 5000,
          position:"top-right",
          isClosable: true,
        });
      router.push('/auth/verify-code');
 
      } else { 
        toast({
          title: 'Error',
          description: response.data.error.message,
          status: 'error',
          position:"top-right",
          duration: 5000,
          isClosable: true,
        });
        console.log(response.data.error.message);
      }
    } catch (error:any) {
        // Handle non-Axios errors if necessary
        toast({
          title: 'Error',
          description: error.response.data.error,
          status: 'error',
          duration: 5000,
          position:"top-right",
          isClosable: true,
        });
        console.error('An error occurred:', error.response.data.error);
      }
     finally {
      setSigningIn(false);
    }
  };


  // Render the SignUp component
  return (
    <>

      {/* Main section for sign up */}
      <main className="w-full flex">
        {/* Left side with background image */}
        <div className="relative flex-1 hidden items-center justify-center h-screen bg-black lg:flex">
          {/* Content within the left side */}
          <div className="relative z-10 w-full max-w-md">
            <Image
              className="h-13 w-auto "
              src={Logo}
              alt="NestSite Logo"
              width={179.8}
              height={78.9}
            />
            <div className="mt-16 space-y-3">
              <h3 className="text-white text-3xl font-bold">
              Find Innovative arts made from scrap
    and sell Digital arts... 
              </h3>
              <p className="text-gray-300">
                Create an account and get access to all features for 30-days, No
                credit card required.
              </p>
              <div className="flex items-center -space-x-2 overflow-hidden">
                {/* Sample profile images */}
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
                <p className="text-sm text-gray-400 font-medium translate-x-5">
                  Join 5.000+ users
                </p>
              </div>
            </div>
          </div>
          {/* Background blur effect */}
          <div
            className="absolute inset-0 my-auto h-[500px]"
            /**
             * style={{
              background:
                'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)',
              filter: 'blur(118px)',
            }}
             */
          ></div>
        </div>
        {/* Right side with sign-up form */}
        <div className="flex-1 flex items-center bg-white justify-center h-screen">
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
                Sign Up👋
                </h3>
                <p className="">
                  Already have an account?{' '}
                  <a href="/auth/login">
                    <span className="font-medium text-primary hover:text-indigo-500">
                      Log in
                    </span>
                  </a>
                </p>
              </div>
            </div>
            {/* Sign-up form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email input */}
              <div>
                <label className="font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-4 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              {/* Password input */}
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
            onChange={handleChange}
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
              {/* Confirm Password input */}
              
             {/**
              * <div>
                <label className="font-medium">Confirm Password</label>
              *    <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full mt-2 px-3 py-4 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
                 </div>
              */}
             
              {/* Agreement Switch */}
              <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed
                        ? 'bg-primary'
                        : 'bg-gray-200',
                      'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed
                          ? 'translate-x-3.5'
                          : 'translate-x-0',
                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
                <Switch.Label className="text-sm leading-6 text-gray-600">
                  By selecting this, you agree to {' '}
                  <Link href="#" passHref>
                    <span className="font-semibold text-primary">
                    Reactify&apos;s Terms of Service and Privacy&nbsp;Policy
                    </span>
                  </Link>
                  
                </Switch.Label>
              </Switch.Group>
              {/* Sign-up button */}
              <button
                type="submit"
                className={`w-full px-4 py-4 text-white font-medium rounded-lg duration-150 ${
                  agreed ? 'bg-black' : 'bg-gray-500 cursor-not-allowed'
                } ${isSigningIn ? 'cursor-wait' : ''}`}
                disabled={!agreed}
              >
                {isSigningIn ? 'Signing up...' : 'Sign up'}
              </button>
            </form>
            {/* Divider with 'OR' text
            

               <div className="relative">
              <span className="block w-full h-px bg-gray-300"></span>
              <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                OR
              </p>
            </div>
            */}
         
            {/* Google sign-up button
            
                 <button
              className={`w-full flex items-center justify-center px-4 py-4 text-black font-medium border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100 duration-150 ${
                isSigningInG ? 'cursor-wait' : ''
              }`}
              onClick={handleGoogleSignIn}
              disabled={!agreed}
            >
              <FcGoogle className="w-5 h-5" />
              &nbsp;Continue with Google
            </button>
            */}
       
          </div>
        </div>
      </main>
    </>
  );
}
