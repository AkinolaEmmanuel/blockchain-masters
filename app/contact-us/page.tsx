'use client'

import { Button } from '@/components/button';
import { Card } from '@/components/cards';
import { GlobalLoader } from '@/components/global-loader';
import { Container, PageHeader, SectionHeader } from '@/components/section'
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Faqs from '../[home]/faqs';

export default function Contact() {

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
        <PageHeader title="Contact Us" link={`Home ${link}`}/>

        <section className='py-10 bg-slate-50 text-black'>
            <Container>
                <div className="flex flex-col md:flex-row items-start gap-5">
                    <div className="space-y-2">
                        <SectionHeader
                        title='Contact Us'
                        subtitle='Get in touch with us'
                        centered={false}
                        />

                        <p className='text-xl text-gray-900 max-w-lg leading-relaxed'>
                            Have a question, an idea, or looking to collaborate? We’d love to hear from you. Reach out for support, event inquiry, community engagement, partnership inquiries, or anything else you need, the Blockchain Masters team is here for you.
                        </p>

                        <Card hover className='w-fit'>
                            <div className="flex flex-col space-y-4">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                   <Mail className='w-5 h-5 text-white'/>
                                </div>
                               
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                                    <Link href="mailto:chainmastersacademy@gmail.com"><p className="text-gray-600">chainmastersacademy@gmail.com</p></Link>
                                </div>
                            </div>
                        </Card>
                    </div>
                 
                        <form className='space-y-5 my-10 w-full flex-1' action="https://formsubmit.co/emmanuelakinola255@gmail.com" method="POST">
                            <div className="flex flex-col lg:flex-row items-center gap-x-3">
                                <input type="text" name='fullname' placeholder='Full Name' className='w-full p-3 xl:p-4 placeholder:text-lg border border-slate-500' />
                                <input type="email" name='email' placeholder='E-mail' className='w-full p-3 xl:p-4 placeholder:text-lg border border-slate-500'/>
                            </div>
                            <input type="hidden" name="_captcha" value="false"></input>
                            <textarea rows={10} cols={20} name='message' placeholder='Write Message...' className='border border-slate-500 w-full p-2'/>
                            <Button variant='primary' size='md' type='submit'>Send Message</Button>
                        </form>
                   
                </div>
            </Container>
        </section>

        <Faqs/>
    </>
  )
}
