"use client";
import { Button } from "@/components/button";
import { Container, SectionHeader } from "@/components/section";
import { ArrowRight, Award, Book, Brain, Building, Check, CheckCircle, Code, Eye, Globe, GraduationCap, Heart, Mail, Play, Rocket, Shield, Stars, Target, TrendingUp, Users } from "lucide-react";
import { blogPosts, programs, stats, testimonials, whyJoinReasons } from "../data/mock";
import { BlogCard, Card, CounterCard, FeatureCard, StatCard, TestimonialCard } from "@/components/cards";
import Hero from "./[home]/hero";
import { useState, useEffect } from "react";
import { GlobalLoader } from "@/components/global-loader";
import Image from "next/image";
import Programs from "./[home]/programs";
import Testimonials from "./[home]/testimonials";
import { Whocanjoin, WhyJoin } from "./[home]/whocanjoin";
import Faqs from "./[home]/faqs";
import {Blog} from "@/components/blog";


const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

   
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      setIsVisible(true);
    }, []);

     const values = [
                  {
                    icon: <Book className="w-6 h-6 text-orange-200" />,
                    title: "Clarity over complexity",
                    description: "We simplify blockchain concepts for all."
                  },
                  {
                    icon: <CheckCircle className="w-5 h-5 text-orange-200" />,
                    title: "Community-First",
                    description: "We grow with, and for, our learners."
                  },
                  {
                    icon: <Globe className="w-6 h-6 text-orange-200" />,
                    title: "Real-world relevance",
                    description: "What we teach is what you'll use."
                  },
                  {
                    icon: <Shield className="w-6 h-6 text-orange-200" />,
                    title: "Integrity & transparency",
                    description: "We walk the talk in the spirit of Web3."
                  },
                  {
                    icon: <Award className="w-6 h-6 text-orange-200" />,
                    title: "Continual learning",
                    description: "Blockchain is evolving, and so are we."
                  }
                ]

  

  return (
    <div className="min-h-screen bg-gray-50">
      {isLoading && <GlobalLoader isLoading={isLoading} />}
 

      {/* Hero Section */}
      <Hero />

      {/* Who We Are Section */}
      <section className="my-0 md:my-20">
        <Container className="flex flex-col lg:flex-row items-center justify-between">
          <SectionHeader centered={false} title="Who we are" subtitle="Blockchain Masters"></SectionHeader>
          <p className="text-justify text-black text-lg max-w-lg md:my-5">
            <span>Blockchain Masters Academy is an EdTech platform dedicated to making blockchain and Web3 education accessible, practical, and career-driven. </span>
            <span>We believe that blockchain isn't just for coders, tech bros, or crypto nerds but for everyone. Whether you’re a student, a small business owner, or someone simply curious about Web3 We’re here to help you understand Blockchain, use it, and grow with it.</span>
          </p>
        </Container>

        {/* Stats */}
        <Container className="my-10 flex flex-col gap-y-10 lg:flex-row items-center justify-between">
          <div className="flex-1 bg-orange-400 p-5">
          <Image src={"/students.jpg"} width={600} height={600} alt="" className="rounded-sm"/>
          </div>
          <div className="flex-1 space-y-5">
          <h1 className="font-bold text-3xl text-center text-black mb-5">Our Track Record Till Date</h1>
          <div className="grid grid-cols-2 gap-5">
            <CounterCard icon={Users} count={10500} label="Students Trained" delay={0} />
            <CounterCard icon={GraduationCap} count={8500} label="Graduates" delay={0.2} />
            <CounterCard icon={Award} count={92} label="Success Rate %" delay={0.4} />
            <CounterCard icon={Building} count={150} label="Hiring Partners" delay={0.6} />
          </div>
          </div>
     
        </Container>
      </section>

      {/* Featured Programs*/}
      <Programs section="home"/>

      {/* Vision, and Mission */}
      <section className="py-20 bg-orange-500">
        <Container className="flex flex-col items-center w-full">

            <div className="text-center mb-8">
              <div className="flex items-center justify-center text-white">
               <Stars className="w-6 h-6 mr-2 text-orange-700" />
                <h2 className="text-lg md:text-xl my-4">Our Vision and Mission</h2>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-white">The Core of Blockchain Masters</h1>   
            </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <Card className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Eye className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                We believe blockchain is the future, and everyone deserves a chance to be part of it. 
                Our vision is to bridge the gap between curiosity and expertise, turning learners into 
                creators, innovators, and leaders in the decentralized world.
              </p>
            </Card>

            {/* Mission */}
            <Card className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To make blockchain and Web3 education simple, accessible, and practical for everyone 
                from curious beginners to future industry leaders. We help you not just learn, 
                but master the tools of tomorrow.
              </p>
            </Card>
           
          </div>
           <Button variant="secondary" size="md" link="/join-us/as-a-member" className="mt-8">
            Join Our Community
            </Button>
         
        </Container>
      </section>

         {/*Our Values */}
         <section className="pt-10 md:py-20 bg-white">
             <SectionHeader 
            centered={true}
            title="Values"
            subtitle="Our Core Values"
            className=""
          />
         <Container className="my-5 lg:my-10 flex flex-col gap-y-5 lg:flex-row items-center justify-center lg:justify-between">
          <div className="w-full lg:w-1/2"> 
            <Image src={"/medium-shot-students.jpg"} width={600} height={600} alt="" className="rounded-sm"/>
          </div>
            <div className="px-5 md:px-10 w-full lg:w-1/2 xl:w-3/7">
              <div className="space-y-5 mt-5 md:my-5 grid md:grid-cols-3 lg:grid-cols-1 gap-5">
                {values.map(({ icon, title, description }, index) => (
                  <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
                    <div className="rounded-full p-2 bg-orange-500/90 hover:bg-orange-500">{icon}</div>
                    <div className="flex flex-col text-gray-900">
                      <span className="font-semibold text-2xl">{title}</span>
                      <span className="">{description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </Container>
            </section>

     {/* Who Can Join Section */}
      <section className="relative md:py-10 px-4 bg-slate-50">
        <Container>
          {/* Header */}
          <div className={`flex flex-col lg:flex-row items-center justify-between transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <SectionHeader
              title="Who Can Join"
              subtitle="Join Our Community"
              centered={false}
              ></SectionHeader>
            <p className="text-xl text-gray-900 max-w-lg leading-relaxed">
              Blockchain Masters Academy welcomes learners from all backgrounds. Whether you're a complete beginner or looking to advance your career, we have a place for you.
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
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyJoinReasons.map((reason, index) => (
              <FeatureCard key={index} {...reason} />
            ))}
          </div> */}
        </Container>
      </section>

     {/* Testimonials */}
        <Testimonials/>

          {/* FAQs */}
          <Faqs/>

          {/* Blog */}
          <Blog section="home"/>

      {/* Newsletter Signup */}
      <section className="py-10 md:py-20 bg-orange-500 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get exclusive access to blockchain resources, course updates, and industry insights
            </p>
            <div className="flex flex-col justify-center gap-y-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border"
              />
              <Button variant="secondary" link="/" className="rounded-md border border-white outline-none">
                <Mail className="w-5 h-5 mr-2" />
                Subscribe
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-80">
              Join 10,000+ blockchain enthusiasts. No spam, unsubscribe anytime.
            </p>
          </div>
        </Container>
      </section>

    </div>
  );
};

export default HomePage;