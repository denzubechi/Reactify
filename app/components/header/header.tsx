"use client"
import {useState ,useEffect} from 'react'
import Image from 'next/image'
import Logo from '../../../media/Frame 49.png'
import Link from 'next/link'

const Header = () => {

    const [state, setState] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false); // Change the initial value to true

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const navigation = [
        { title: "Home", path: "/" },
        { title: "Products", path: "/products" },
        { title: "Features", path: "javascript:void(0)" },
        { title: "Integrations", path: "javascript:void(0)" },
        { title: "Top Sellers", path: "javascript:void(0)" },
        { title: "Pricing", path: "/pricing" }
    ]



    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <Link href="/">
                <Image
                    src={Logo}
                    width={120}
                    height={50}
                    alt="Reactify UI logo"
                />
            </Link>
            <div className="md:hidden">
                <button className="menu-btn text-gray-500 hover:text-gray-800"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
    )

    return (
        <div className='relative border-b border-gray-200 mb-12'>
            <div className='absolute inset-0 blur-xl h-[580px] '></div>
            <div className='relative'>
                <header className={`fixed inset-x-0  mb-5 z-50 ${isScrolled ? 'top-0 bg-white  border-b border-gray-200' : 'bg-white border-b border-gray-200'}`}>
                    <div className={`md:hidden ${state ? "mx-2 pb-0" : "hidden"}`}>
                        <Brand />
                    </div>
                    <nav className={`pb-0 md:text-sm ${state ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                            <Brand />
                            <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                                <ul className="flex-1 justify-center items-center  space-y-6 md:flex md:space-x-6 md:space-y-0">
                                    {
                                        navigation.map((item, idx) => {
                                            return (
                                                <li key={idx} className="text-gray-700 lg:text-lg hover:text-gray-900">
                                                    <Link href={item.path} className="block">
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0 ">
                                    <Link href="/auth/login" className="flex items-center justify-center gap-x-1 py-2 px-4 text-black font-medium lg:text-lg md:inline-flex">
                                        Sign in
                                    </Link>
                                </div>
                                <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                                    <Link href="/auth/signup" className="flex items-center justify-center gap-x-1 py-2 px-6 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full lg:text-lg md:inline-flex">
                                        create account
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    )
}

export default Header