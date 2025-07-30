"use client"

import { GlobalLoader } from '@/components/global-loader'
import { Container, PageHeader, SectionHeader } from '@/components/section'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Faqs from '../[home]/faqs';
import Testimonials from '../[home]/testimonials';
import Image from 'next/image';
import { Button } from '@/components/button';


const Whoweare = () => {

     const [isLoading, setIsLoading] = useState(true);
        const link = usePathname();
    
        useEffect(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        })

        const paragraphs = [
          "Blockchain Masters Academy is an EdTech platform dedicated to making blockchain and Web3 education accessible, practical, and career-driven.",
          "We believe that blockchain isn't just for coders, tech bros, or crypto nerds but for everyone.",
          "Whether you’re a student, a small business owner, or someone simply curious about Web3, we’re here to help you understand it, use it, and grow with it..",
          "Our goal is simple: Fuel blockchain adoption by equipping people with the skills to learn, build, and grow in the Web3 space."
        ]
  return (
    <>
     {isLoading && <GlobalLoader isLoading={isLoading} />}
            <PageHeader title="Who We Are" link={`Home ${link}`}/>
    
            <section className='py-10 bg-slate-50 text-black'>
                <Container>
                  <div className=""></div>
                </Container>
            </section>

            <section className='py-10 bg-slate-50 text-black'>
              <Container>
                <div className="flex flex-col-reverse md:flex-row items-center justify-between">

                  <div className="flex-1">
                    <Image src={"/blackamerican.jpg"} alt='' width={500} height={500}></Image>
                  </div>


                  <div className="flex-1 space-y-5 md:space-y-10">
                  <SectionHeader
                  title='Who We Are'
                  subtitle='Making blockchain and Web3 education accessible, practical, and career-driven. '
                  centered={false}
                  className='max-w-lg'/>

                  <div className='space-y-5'>
                  {paragraphs.map((item, index) => (
                  <p key={index}>{item}</p>
                  ))}

                    <Button variant="primary" size="md" link="/join-us/as-a-member" className="mt-8">
                              Join Our Community
                    </Button>
                  </div>
                </div>
                </div>
              </Container>
            </section>

               <section className='py-10 bg-slate-50 text-black'>
                <Container className='space-y-10'>
                    <div className="flex flex-col md:flex-row items-center justify-between">
                    <SectionHeader 
                    title='What We do' 
                    subtitle='Enpowering Inclusion and Innovation One Talent at a time'
                    centered={false}
                    className="max-w-lg"
                    />
                      <p className="text-justify text-black text-lg max-w-lg md:my-5">
                         <span> We bridge the gap with relatable teaching, real-life applications, and a supportive community. Whether you're exploring blockchain for the first time or aiming to build a career, we guide you from confusion to confidence. </span>
                     </p>
                    </div>
                    <div className="my-10">
                    <div className="flex flex-col md:flex-row items-center justify-between w-full">
    
                    <div className="flex flex-1 flex-col items-start justify-start max-w-md gap-5">
                    <div className="">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                    <p className="text-gray-600">
                        We believe blockchain is the future, and everyone deserves a chance to be part of it. 
                        Our vision is to bridge the gap between curiosity and expertise, turning learners into 
                        creators, innovators, and leaders in the decentralized world.
                    </p>
                    </div>
                    <div className="">
                      
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600">
                        To make blockchain and Web3 education simple, accessible, and practical for everyone 
                        from curious beginners to future industry leaders. We help you not just learn, 
                        but master the tools of tomorrow.
                    </p>
                    </div>
                    </div>
                   
                            <div className="flex-1 max-w-lg">
                                <Image src={"/connection.jpg"} alt='connecting people' width={500} height={500} className='w-full h-auto object-cover'/>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <Testimonials/>
            <Faqs/>
    </>
  )
}

export default Whoweare;


