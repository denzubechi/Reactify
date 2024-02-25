
import Header from './Header';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import  { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Get started with Reartify',
  description: "Create,share and build your stellar world with Reartify",
  icons: {
    icon: '/favicon.ico',
  },
}
const Footer = () => {
  return (
    <footer className="bg-white text-black py-1">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mt-4">
          {/* Add your social media links here */}
          <a
            href="#"
            className="text-gray-400 hover:text-black transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-black transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-black transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-black transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="text-sm mt-4 text-gray-400">&copy; {new Date().getFullYear()} NestSite Tech.Inc</p>
      </div>
    </footer>
  );
};


export default function AuthLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <nav></nav>
   
        {children}
       
      </section>
    )
  }