"use client"

import { GlobalLoader } from '@/components/global-loader';
import { Building } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function notfound() {
     const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    })
  return (
    <>
       {isLoading && <GlobalLoader isLoading={isLoading} />}
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <h1 className='text-black text-lg md:text-xl'>Oops! This Page does not exist or is still in production.</h1>
            <p className='text-black text-lg md:text-xl'>Please click this link to go back<Link href={"/"} className='text-orange-500'> Home.</Link></p>
        </div>
    </>
  )
}
