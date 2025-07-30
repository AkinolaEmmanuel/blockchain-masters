import { Whocanjoin, WhyJoin } from '@/app/[home]/whocanjoin'
import { Button } from '@/components/button'
import { Container, SectionHeader } from '@/components/section'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { text } from 'stream/consumers'

export default function Member() {

  const categories = [ 
    {text: "Students& Graduates looking to launch their careers in the most exciting tech frontier"}, 
    {text: "Developers & Engineers looking to level up their technical skills with cutting-edge blockchain development"}, 
    {text: "Entrepreneurs & Founders looking to build the next generation of decentralized businesses"},
    {text: "Investors & Professionals looking to understand blockchain's impact on finance and business"},
    {text: "Blockchain Enthusiasts & Learners looking to explore the world of Web3 and beyond"}
  ]

  const reasons = [
    {text: "Access to trained talents in blockchain, crypto, and emerging tech"},
    {text: "Brand visibility across Africa’s growing Web3 ecosystem"},
    {text: "Direct community impact and social responsibility"},
    {text: "Opportunities to co-host events, bootcamps, and innovation labs"},
    {text: "Recognition and exposure via all our digital platforms"}
  ]
  return (
    <>
   
          {/* Who Can Join Section */}
      <section className="relative md:py-10 px-4 bg-slate-50">
        <Container>
          {/* Header */}
          <div className={`flex flex-col lg:flex-row items-center justify-between transform transition-all duration-1000`}>
              <SectionHeader
              title="Build, Learn and Grow with Us"
              subtitle="Join Our Community"
              centered={false}
              ></SectionHeader>
            <p className="text-xl text-gray-900 max-w-lg leading-relaxed">
              Are you Student? Developer? Investor? or a Blockchain Enthusiast? Blockchain Masters Academy welcomes learners from all backgrounds. Whether you're a complete beginner or looking to advance your career, we have a place for you.
            </p>
          </div>


          <div className="my-10 lg:my-20 flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1">
              <Image src={"/close-up-students-learning-class.jpg"} alt="who-can-join" width={600} height={600} className='rounded-md'/>

            </div>
            <div className="flex-1 max-w-lg">
              <div className="flex flex-col space-y-5">
              <h1 className='text-3xl lg:text-5xl font-semibold'>Who can <span className='text-orange-500'>join?</span></h1>
              <p className='text-base font-medium'>We welcome:</p>
              </div>
              
              <div className='space-y-4 my-4'>
                {categories.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 space-y-4">
                  <div className="bg-orange-500 rounded-full p-1">
                    <Check className="w-4 h-4 text-white"/>
                  </div>
                  <div className="text-base">
                    {item.text}
                  </div>
                  </div>
                ))}
              </div>

              <Button variant="primary" size="md" link='https://docs.google.com/forms/d/e/1FAIpQLSdlM6AQJpJ4PiVsJB64DD2DQgEaCZ1pNLlHmM6qcAVHtxHqGw/viewform?usp=send_form'>Become a Member</Button>
            </div>

          </div>
   
        </Container>
      </section>

      {/* Why Join */}
      <section className="">
        <Container>

          <div className="my-10 flex flex-col md:flex-row-reverse items-center justify-between">
            <div className="flex-1 max-w-xl">
                  <Image src={"/study-group-african-people.jpg"} alt="who-can-join" width={600} height={600}/>
            </div>
            <div className="flex-1 max-w-xl">
              <div className="flex flex-col space-y-5">
              <h1 className='text-3xl xl:text-5xl font-semibold'>Why <span className='text-orange-500'>join?</span></h1>
              <p className='text-base font-medium'>By becoming a member, you gain access to:</p>
              </div>
              
              <div className='space-y-4 my-4'>
                {reasons.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 ">
                  <div className="bg-orange-500 rounded-full p-1">
                    <Check className="w-4 h-4 text-white"/>
                  </div>
                  <div className="text-base">
                    {item.text}
                  </div>
                  </div>
                ))}
              </div>

              <Button variant="primary" size="md" link='https://docs.google.com/forms/d/e/1FAIpQLSdlM6AQJpJ4PiVsJB64DD2DQgEaCZ1pNLlHmM6qcAVHtxHqGw/viewform?usp=send_form'>Join Our Community</Button>
            </div>

          </div>
        
        </Container>
      </section>

      <Container className='flex flex-col items-center my-10 lg:my-20 space-y-5'>
         <h1 className='text-4xl font-medium'>How to <span className='text-orange-500 font-semibold'>Join?</span></h1>
         <Card className='p-5 w-72 xl:w-80 h-48 flex flex-col items-center justify-center'>
            <CardTitle className='text-xl font-medium'>To Join, Simply Fill Out This Registration Form and Join the Telegram Link.</CardTitle>
            <CardContent><Link href={"https://docs.google.com/forms/d/e/1FAIpQLSdlM6AQJpJ4PiVsJB64DD2DQgEaCZ1pNLlHmM6qcAVHtxHqGw/viewform?usp=send_form"} className='underline'>Registration Link</Link></CardContent>
         </Card>
      </Container>


    </>
  )
}
