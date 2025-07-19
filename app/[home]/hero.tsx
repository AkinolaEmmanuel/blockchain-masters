import { Button } from '@/components/button'
import { Container } from '@/components/section'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
        <section className="relative flex items-center justify-center text-white h-[600px] md:h-[700px] 2xl:h-[900px]">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/hero-bg.jpg')] bg-cover bg-center"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <Container className="relative z-10 ">
          <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          
          className="text-center">
            <h1 className="text-4xl md:text-6xl xl:text-7xl">
             <span className="font-extralight">Educating Everyone to </span><i className="font-bold">Master</i>
            </h1>
            <p className="text-4xl md:text-6xl xl:text-7xl text-orange-600 font-bold mb-4"> Blockchain Technology<span className="text-orange-700 animate-pulse">.</span></p>
            <p className="text-sm md:text-base mb-8 max-w-3xl mx-auto">
               We fuel blockchain adoption by equipping people with the skills to learn, build, and grow in the Web3 space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="md" link='/' className='hover:bg-transparent! hover:text-white hover:border-white! hover:border-2'>
                View all Programs <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="md" link='/' className="border-white text-white hover:bg-gray-100! hover:text-black!">
                Join the Community
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
  )
}
