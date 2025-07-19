import { TestimonialCard } from '@/components/cards'
import { Container, SectionHeader } from '@/components/section'
import { testimonials } from '@/data/mock'
import React from 'react'

export default function Testimonials() {

  return (
    <>
      {/* Success Stories */}
          <section className="py-20 bg-gray-50">
            <Container>
              <SectionHeader 
                title="Success Stories"
                subtitle="Hear from our graduates who have transformed their careers with blockchain education"
              />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            </Container>
          </section>
    
    </>
  )
}
