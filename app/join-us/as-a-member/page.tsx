import { Whocanjoin, WhyJoin } from '@/app/[home]/whocanjoin'
import { Container, SectionHeader } from '@/components/section'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

export default function Member() {
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

          <Whocanjoin/>
                
        </Container>
      </section>

      {/* Why Join */}
      <section className="bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between">
          <SectionHeader 
            title="Why Choose Blockchain Masters Academy?"
            subtitle="Why Join Us?"
            centered={false}
           
          />
           <p className="text-xl text-gray-900 max-w-lg leading-relaxed">
              Discover what makes our approach to blockchain education unique and effective
            </p>
          </div>
        <WhyJoin/>
        </Container>
      </section>

      <Container className='flex flex-col items-center my-10 space-y-5'>
         <h1 className='text-4xl font-medium'>How to <span className='text-orange-500 font-semibold'>Join?</span></h1>
         <Card className='p-5 w-72 xl:w-80 h-48 flex flex-col items-center justify-center'>
            <CardTitle className='text-xl font-medium'>To Join, Simply Fill Out This Registration Form and Join the Telegram Link.</CardTitle>
            <CardContent><Link href={"https://forms.gle/Zipt6M696kUA17Ph6"} className='underline'>Registration Link</Link></CardContent>
         </Card>
      </Container>


    </>
  )
}
