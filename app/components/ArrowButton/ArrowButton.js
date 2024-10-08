// app/components/ArrowButton/ArrowButton.js
'use client'; // This is necessary for using client-side hooks like useRouter

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './ArrowButton.css'

export default function ArrowButton({ text, href }) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href); // Navigate to the specified page
    }
  };

  return (
    <button className='arrow flex justify-start sm:justify-center lg:justify-center font-bold text-base text-left leading-5 w-11/12 lg:w-auto' onClick={handleClick}>
      <span className='flex pr-2'><Image src="/arrow-right.svg" alt="iconita sageata drepta" width={18} height={18} /> </span> 
      {text}
    </button>
  );
}