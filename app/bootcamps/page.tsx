'use client'

import { PageHeader } from '@/components/section'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Programs from '../[home]/programs';
import { Button } from '@/components/button';
import { ArrowRight } from 'lucide-react';
import { GlobalLoader } from '@/components/global-loader';
import Testimonials from '../[home]/testimonials';

export default function Bootcamps() {
    const [isLoading, setIsLoading] = useState(true);
    const link = usePathname();

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    })
  return (
    <>
     {isLoading && <GlobalLoader isLoading={isLoading} />}
    <PageHeader title="Bootcamps" link={`Home ${link}`}/>
    <section className='bg-white h-full'>
    {/* Featured Programs*/}
          <Programs section='bootcamps'/>
            <Testimonials/>
    </section>
    </>
  )
}
