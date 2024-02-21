"use client"
import React from 'react';
import { useRouter } from 'next/navigation'; // You may need to adjust the import based on your routing setup
import { HiOutlineMail } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../media/Frame 46 (2).png';
import Logo2 from '../../media/Frame 49.png';

export default function Auth() {
  const router = useRouter();

  const handleEmailLogin = () => {
    router.push('/auth/login'); // Replace '/login' with the actual route for email login
  };

  const handleEmailSignup = () => {
    router.push('/auth/signup'); // Replace '/signup' with the actual route for email signup
  };

  const handleGoogleSignup = () => {
    // You can implement Google Sign Up logic here
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
                Start building your online space
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
        <div className="flex-1 flex items-center justify-center h-screen sm-mt-0">
          <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
            <div className="">
            <div className="flex items-center justify-center "style={{marginTop:"-1rem"}}>
              <Image
                className="h-10 w-auto hidden"
                src={Logo2}
                alt="NestSite Logo"
                width={179.8}
                height={78.9}
              />
            </div>
              <div className="mt-5 space-y-2">
                <h3 className="text-gray-800 text-4xl font-bold sm:text-3xl">
                Get Started👋
                </h3>
                <p className="">
                Create,
                Share and Build
                Your Stellar World.
                </p>
                <p>
                No code needed.
                <br/>
                It only takes a few minutes.✨
                </p>
              </div>
            </div>
            <form
              className="space-y-5"
            >
             <button
                type="submit"
                className={`w-full px-4 py-4 text-white font-medium  rounded-lg duration-150 bg-gradient-to-r from-red-500 via-orange-500 to-purple-500`}
                
              >
               Sign Up
              </button>
              <button
                type="submit"
                className={`w-full px-4 py-4 text-white font-medium  rounded-lg duration-150 bg-black`}
                
              >
               Log in
              </button>
            </form>
           
          </div>
        </div>
      </main>

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className='bg-white sm:mx-auto rounded-md sm:w-full sm:max-w-md flex flex-col  shadow-md p-3'>  
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center ">
        <div className="flex items-center">
          <Image
            className="h-12 w-auto"
            src={Logo}
            alt="NestSite Logo"
            width={179.8}
            height={78.9}
          />
          <div>
            <h2 className="text-4xl font-[900] leading-9 tracking-tight text-gray-900 heading">
              Get Started
            </h2>
          </div>
        </div>
        <p className="mt-2 text-center text-gray-900">
        We&apos;re excited to have you on board!😎
        </p>
      </div>    
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      
        <p className="mt-2 text-center text-gray-600">
        Take a few moments to explore the various features our platform offers. You&apos;ll discover tools and functionalities designed to simplify your tasks and enhance your experience.🔥
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center">
          <button
            onClick={handleEmailLogin}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <HiOutlineMail className="w-5 h-5 mr-2" /> Login with Email
          </button>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            onClick={handleEmailSignup}
            className="flex w-full justify-center bg-purple-600 py-2 px-4 text-sm font-semibold leading-6 border border-purple-300 rounded-md text-white hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            style={{backgroundColor:"purple"}}
          >
            <HiOutlineMail className="w-5 h-5 mr-2" /> Sign Up with Email
          </button>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            onClick={handleGoogleSignup}
            className="flex w-full justify-center bg-white py-2 px-4 text-sm font-semibold leading-6 border border-gray-300 rounded-md text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            <FcGoogle className="w-5 h-5 mr-2" /> Join with Google
          </button>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}
