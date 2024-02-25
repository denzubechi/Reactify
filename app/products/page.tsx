"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from '@chakra-ui/react';
import Link from 'next/link';
import backendUrl from '../config/api';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const Page: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true); // Set loading to true before fetching
      const response = await axios.get(`${backendUrl}/reartify/products`);
      const data: Product[] = response.data;
      setProducts(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  const handleRefresh = () => {
    fetchProducts(); // Call fetchProducts to refresh the products
  };

  return (
    <div className='py-20'>
      {/* Refresh button */}

      <div className="flex justify-center items-center">
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md border-gray-200"
            >
              <Link href="#">
                <img
                  className="p-8 rounded-md"
                  src={product.image}
                  alt="product image"
                />
              </Link>
              <div className="px-5 pb-5">
                <Link href={`/products/${product.id}`} className='cursor-pointer'>
                  <h5 className="text-xl font-semibold cursor-pointer tracking-tight text-indigo-700 ">
                    {product.name}
                  </h5>
                </Link>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      5.0
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 ">
                    ${product.price}
                  </span>
                  <Link
                    href="#"
                    className="text-white cursor-pointer bg-purple-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    
    </div>
    </div>
    
  );
};

export default Page;
