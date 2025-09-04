import { Button } from '@/components/button'
import { FeatureCard, EventCard } from '@/components/cards'
import { Container, SectionHeader } from '@/components/section'
import { programs, events, sampleEvents } from '@/data/mock'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function Programs({section}: {section?: string}) {

  
  return (
    <>
     {/* Featured Programs */}
      <section className="py-20 bg-white">
        <Container>
         {section == "home" &&
         <div className="flex flex-col lg:flex-row items-center justify-between">
          <SectionHeader 
            centered={false}
            title="Our Bootcamps"
            subtitle="Designed to take you from beginner to blockchain expert"
            className="max-w-lg"
          />

          <p className="text-justify text-black text-lg max-w-lg my-5">
            <span>Unlike many blockchain learning platforms that only scratch the surface or feel too complex, Blockchain Masters Academy bridges the gap with relatable teaching, real-life applications, and a supportive community. Whether you're exploring blockchain for the first time or aiming to build a career, we guide you from confusion to confidence. </span>
          </p>
          </div>
          }

          {section == "bootcamps" &&
          <SectionHeader 
            centered
            title="Our Bootcamps"
            subtitle="Join our transformative bootcamps and learn to master blockchain skills"
            className="max-w-3xl mx-auto"
            />
          }

           {section == "events" &&
         <>
          <SectionHeader 
            centered
            title="Our Events"
            subtitle="Join us for trainings and our monumental events across different platforms."
            className="max-w-3xl mx-auto"
          />
          </>
          }

        </Container>
        <Container className="my-10">
         

          {section == "home" &&
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.slice(0, 3).map((program, index) => (
              <FeatureCard key={index} {...program} />
            ))}
          </div>
          }

          {section == "events" &&
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleEvents.map((program, index) => (
              <EventCard key={index} {...program} />
            ))}
          </div>
          }

           {section == "bootcamps" &&
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <FeatureCard key={index} {...program} />
            ))}
          </div>
          }
          {section == "home" &&
          <div className="text-center mt-12">
            <Button size="md" link="/bootcamps-and-events">
              View All Programs <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
            }
            {section == "bootcamps" &&
            <div className="text-black text-center space-y-5 mt-12">
          <p className='text-2xl font-medium'>Make inquiries about our bootcamps</p>
          <div className="flex items-center justify-center gap-5">
            <p className='flex items-center'>Get in touch <ArrowRight className="w-5 h-5 ml-2"/></p>
            <Button variant="primary" size="md" link="/contact-us">
            Contact Us
            </Button> 
          </div>
          </div>
            }
        </Container>
      </section>
    </>
  )
}
